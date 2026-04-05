const DEFAULT_MODEL_ID = 'de_DE-thorsten-high';
const DEFAULT_SPEAKER = 0;
const MODEL_CACHE_NAME = 'taglich-tts-model-cache-v1';
const REMOTE_MODEL_BASE_URL = 'https://huggingface.co/rhasspy/piper-voices/resolve/main/';

function isCacheStorageAvailable() {
    return typeof globalThis.caches !== 'undefined' && typeof globalThis.caches.open === 'function';
}

function getWorkerThreadCount() {
    const cpuCount = typeof navigator !== 'undefined' && Number.isFinite(navigator.hardwareConcurrency)
        ? navigator.hardwareConcurrency
        : 1;

    if (!globalThis.crossOriginIsolated) {
        return 1;
    }

    return Math.max(1, Math.min(4, cpuCount));
}

function createState(status, message = '') {
    return { status, message };
}

function createExpressionRuntimeStub() {
    return {
        destroy() {},
        async generate() {
            return [];
        }
    };
}

function toFriendlyError(error) {
    if (!error) return 'Yuksek kaliteli ses baslatilamadi.';
    if (typeof error === 'string') return error;
    if (error instanceof Error && error.message) return error.message;
    return 'Yuksek kaliteli ses baslatilamadi.';
}

class PersistentFetchProvider {
    #cacheName = MODEL_CACHE_NAME;
    #memory = new Map();
    #objectUrls = new Map();
    #destroyed = false;

    constructor({ cacheName = MODEL_CACHE_NAME } = {}) {
        this.#cacheName = cacheName;
    }

    destroy() {
        if (this.#destroyed) return;

        for (const objectUrl of this.#objectUrls.values()) {
            URL.revokeObjectURL(objectUrl);
        }

        this.#memory.clear();
        this.#objectUrls.clear();
        this.#destroyed = true;
    }

    async fetch(resource) {
        if (this.#memory.has(resource)) {
            return this.#memory.get(resource);
        }

        const response = await this.#fetchResponse(resource);
        let value;

        if (resource.endsWith('.json')) {
            value = await response.clone().json();
        } else {
            const blob = await response.clone().blob();
            value = URL.createObjectURL(blob);
            this.#objectUrls.set(resource, value);
        }

        this.#memory.set(resource, value);
        return value;
    }

    async #fetchResponse(resource) {
        const cache = isCacheStorageAvailable() ? await caches.open(this.#cacheName) : null;
        const cached = cache ? await cache.match(resource) : null;

        if (cached) {
            return cached;
        }

        const response = await fetch(resource);
        if (!response.ok) {
            throw new Error(`Could not fetch: ${resource}`);
        }

        if (cache) {
            try {
                await cache.put(resource, response.clone());
            } catch (_) {
                // Ignore cache write failures and keep runtime functional.
            }
        }

        return response;
    }
}

export function supportsLocalPiperTts() {
    return typeof Worker === 'function'
        && typeof Audio === 'function'
        && typeof Blob === 'function'
        && typeof URL !== 'undefined'
        && typeof fetch === 'function';
}

export class PiperTtsController {
    #onStateChange = null;
    #modelId = DEFAULT_MODEL_ID;
    #speaker = DEFAULT_SPEAKER;
    #engine = null;
    #engineModule = null;
    #buildPromise = null;
    #runtimeMode = null;
    #forceCpuWorker = false;
    #activeAudio = null;
    #activeAudioUrl = '';
    #requestToken = 0;
    #state = createState('idle');

    constructor({ onStateChange = null, modelId = DEFAULT_MODEL_ID, speaker = DEFAULT_SPEAKER } = {}) {
        this.#onStateChange = typeof onStateChange === 'function' ? onStateChange : null;
        this.#modelId = modelId;
        this.#speaker = speaker;
    }

    getState() {
        return { ...this.#state };
    }

    async speak(text) {
        const normalizedText = typeof text === 'string' ? text.trim() : '';
        if (!normalizedText) return false;

        const requestToken = ++this.#requestToken;
        this.#stopAudioOnly();

        try {
            const response = await this.#generate(normalizedText, requestToken);
            if (!response || requestToken !== this.#requestToken) {
                return false;
            }

            return await this.#playResponse(response, requestToken);
        } catch (error) {
            if (requestToken !== this.#requestToken) {
                return false;
            }

            this.#setState('error', toFriendlyError(error));
            throw error;
        }
    }

    stop() {
        this.#requestToken++;
        this.#stopAudioOnly();
        this.#setState(this.#engine ? 'ready' : 'idle');
    }

    destroy() {
        this.stop();

        if (this.#engine && typeof this.#engine.destroy === 'function') {
            this.#engine.destroy();
        }

        this.#engine = null;
        this.#engineModule = null;
        this.#buildPromise = null;
        this.#runtimeMode = null;
    }

    #setState(status, message = '') {
        if (this.#state.status === status && this.#state.message === message) {
            return;
        }

        this.#state = createState(status, message);
        if (this.#onStateChange) {
            this.#onStateChange(this.getState());
        }
    }

    async #generate(text, requestToken, allowRetry = true) {
        const firstLocalRun = !this.#engine;
        const engine = await this.#ensureEngine();

        if (requestToken !== this.#requestToken) {
            return null;
        }

        this.#setState(
            firstLocalRun ? 'downloading-model' : 'ready',
            firstLocalRun ? 'Ilk kullanim icin Almanca ses modeli indiriliyor...' : ''
        );

        try {
            return await engine.generate(text, this.#modelId, this.#speaker);
        } catch (error) {
            if (allowRetry && this.#runtimeMode === 'webgpu') {
                this.#forceCpuWorker = true;
                await this.#rebuildEngine();
                return this.#generate(text, requestToken, false);
            }

            throw error;
        }
    }

    async #ensureEngine() {
        if (this.#engine) {
            return this.#engine;
        }

        if (this.#buildPromise) {
            return this.#buildPromise;
        }

        this.#setState('loading-runtime', 'Yuksek kaliteli ses motoru hazirlaniyor...');

        this.#buildPromise = this.#createEngine()
            .then((engine) => {
                this.#engine = engine;
                this.#buildPromise = null;
                this.#setState('ready');
                return engine;
            })
            .catch((error) => {
                this.#buildPromise = null;
                this.#engine = null;
                this.#runtimeMode = null;
                throw error;
            });

        return this.#buildPromise;
    }

    async #rebuildEngine() {
        if (this.#engine && typeof this.#engine.destroy === 'function') {
            this.#engine.destroy();
        }

        this.#engine = null;
        this.#runtimeMode = null;
        this.#buildPromise = null;
        return this.#ensureEngine();
    }

    async #createEngine() {
        this.#engineModule = this.#engineModule || await import('./runtime/piper-tts-web.js');

        const provider = new PersistentFetchProvider();
        const module = this.#engineModule;
        const preferWebGpu = !this.#forceCpuWorker && typeof navigator !== 'undefined' && 'gpu' in navigator;
        const onnxBasePath = new URL('./runtime/onnx/', import.meta.url).href;
        const piperBasePath = new URL('./runtime/piper/', import.meta.url).href;
        const numThreads = getWorkerThreadCount();

        let onnxRuntime;
        if (preferWebGpu) {
            this.#runtimeMode = 'webgpu';
            onnxRuntime = new module.OnnxWebGPUWorkerRuntime({
                worker: new Worker(new URL('./runtime/worker/OnnxWebGPUWorker.js', import.meta.url), {
                    type: 'module',
                    name: 'taglich-tts-gpu'
                }),
                basePath: onnxBasePath,
                numThreads
            });
        } else {
            this.#runtimeMode = 'wasm-worker';
            onnxRuntime = new module.OnnxWebWorkerRuntime({
                worker: new Worker(new URL('./runtime/worker/OnnxWebWorker.js', import.meta.url), {
                    type: 'module',
                    name: 'taglich-tts-worker'
                }),
                basePath: onnxBasePath,
                numThreads
            });
        }

        try {
            return new module.PiperWebEngine({
                onnxRuntime,
                phonemizeRuntime: new module.PhonemizeWebRuntime({
                    provider,
                    basePath: piperBasePath
                }),
                expressionRuntime: createExpressionRuntimeStub(),
                voiceProvider: new module.HuggingFaceVoiceProvider({
                    provider,
                    baseUrl: REMOTE_MODEL_BASE_URL
                })
            });
        } catch (error) {
            provider.destroy();
            onnxRuntime.destroy();
            throw error;
        }
    }

    async #playResponse(response, requestToken) {
        this.#stopAudioOnly();

        const audioUrl = URL.createObjectURL(response.file);
        const audio = new Audio(audioUrl);
        audio.preload = 'auto';

        this.#activeAudio = audio;
        this.#activeAudioUrl = audioUrl;

        return new Promise((resolve, reject) => {
            const finish = () => {
                audio.onended = null;
                audio.onerror = null;
            };

            audio.onended = () => {
                finish();
                if (requestToken === this.#requestToken) {
                    this.#setState('ready');
                }
                this.#stopAudioOnly();
                resolve(true);
            };

            audio.onerror = () => {
                finish();
                this.#stopAudioOnly();
                const error = new Error('Ses oynatilamadi.');
                if (requestToken === this.#requestToken) {
                    this.#setState('error', error.message);
                }
                reject(error);
            };

            this.#setState('speaking');
            audio.play().catch((error) => {
                finish();
                this.#stopAudioOnly();
                const normalizedError = error instanceof Error ? error : new Error('Ses oynatilamadi.');
                if (requestToken === this.#requestToken) {
                    this.#setState('error', normalizedError.message);
                }
                reject(normalizedError);
            });
        });
    }

    #stopAudioOnly() {
        if (this.#activeAudio) {
            this.#activeAudio.pause();
            this.#activeAudio.src = '';
            this.#activeAudio.load();
            this.#activeAudio = null;
        }

        if (this.#activeAudioUrl) {
            URL.revokeObjectURL(this.#activeAudioUrl);
            this.#activeAudioUrl = '';
        }
    }
}
