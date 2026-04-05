// =============================================
// Täglich — Ana Uygulama Mantığı
// Spaced Repetition + Active Recall + Daily Unlock
// =============================================

(function() {
    'use strict';

    // === STATE ===
    const STATE_KEY = 'taglich_state';
    let stateWasMigrated = false;

    function getDefaultPhraseState() {
        return {
            level: 'new',
            nextReview: today(),
            attempts: 0,
            easeFactor: 2.5,
            interval: 1,
            repetitions: 0
        };
    }

    function getDefaultState() {
        return {
            currentDay: 1,
            completedDays: [],
            streak: 0,
            lastCompletedDate: null,
            startDate: new Date().toISOString().split('T')[0],
            phrases: {}, // { id: { level: 'new'|'learning'|'mastered', nextReview: 'YYYY-MM-DD', attempts: 0, easeFactor: 2.5, interval: 1, repetitions: 0 } }
            totalCorrect: 0,
            totalAttempts: 0,
            cloze: {
                totalSessions: 0,
                totalCorrect: 0,
                totalAnswered: 0,
                todaySessions: 0,
                lastPlayedDate: null,
                recentResults: []
            }
        };
    }

    function normalizePhraseState(phraseState) {
        const defaults = getDefaultPhraseState();
        const source = phraseState && typeof phraseState === 'object' ? phraseState : {};

        return {
            ...source,
            level: typeof source.level === 'string' ? source.level : defaults.level,
            nextReview: typeof source.nextReview === 'string' ? source.nextReview : defaults.nextReview,
            attempts: Math.max(0, Math.floor(Number.isFinite(source.attempts) ? source.attempts : defaults.attempts)),
            easeFactor: Math.max(1.3, Number.isFinite(source.easeFactor) ? source.easeFactor : defaults.easeFactor),
            interval: Math.max(1, Math.round(Number.isFinite(source.interval) ? source.interval : defaults.interval)),
            repetitions: Math.max(0, Math.floor(Number.isFinite(source.repetitions) ? source.repetitions : defaults.repetitions))
        };
    }

    function didPhraseStateChange(original, normalized) {
        if (!original || typeof original !== 'object') return true;

        return ['level', 'nextReview', 'attempts', 'easeFactor', 'interval', 'repetitions']
            .some(key => original[key] !== normalized[key]);
    }

    function normalizeState(savedState) {
        const defaults = getDefaultState();
        const source = savedState && typeof savedState === 'object' ? savedState : {};
        const rawPhrases = source.phrases && typeof source.phrases === 'object' ? source.phrases : {};
        const normalizedPhrases = {};

        if (rawPhrases !== source.phrases) {
            stateWasMigrated = true;
        }

        for (const [phraseId, phraseState] of Object.entries(rawPhrases)) {
            const normalizedPhrase = normalizePhraseState(phraseState);
            normalizedPhrases[phraseId] = normalizedPhrase;

            if (didPhraseStateChange(phraseState, normalizedPhrase)) {
                stateWasMigrated = true;
            }
        }

        return {
            ...defaults,
            ...source,
            phrases: normalizedPhrases
        };
    }

    function loadState() {
        try {
            const saved = localStorage.getItem(STATE_KEY);
            if (saved) return normalizeState(JSON.parse(saved));
        } catch(e) {}
        return getDefaultState();
    }

    function saveState() {
        localStorage.setItem(STATE_KEY, JSON.stringify(state));
    }

    let state = loadState();
    if (stateWasMigrated) saveState();

    // === PRONUNCIATION ===
    const speechSupported = 'speechSynthesis' in window && 'SpeechSynthesisUtterance' in window;
    const speechSynth = speechSupported ? window.speechSynthesis : null;
    const localPronunciationSupported = 'Worker' in window && 'Audio' in window && 'fetch' in window && 'Blob' in window;
    let availableVoices = [];
    let selectedVoice = null;
    let usingVoiceFallback = false;
    let currentUtterance = null;
    let currentLearnPhrase = null;
    let pronunciationError = '';
    let piperTtsController = null;
    let piperTtsModulePromise = null;
    let piperTtsDisabled = false;
    let piperTtsState = { status: 'idle', message: '' };

    function pickPronunciationVoice(voices) {
        const usableVoices = voices.filter(Boolean);
        const exactGerman = usableVoices.find(voice => (voice.lang || '').toLowerCase() === 'de-de');
        if (exactGerman) return { voice: exactGerman, fallback: false };

        const genericGerman = usableVoices.find(voice => (voice.lang || '').toLowerCase().startsWith('de'));
        if (genericGerman) return { voice: genericGerman, fallback: false };

        if (usableVoices.length > 0) {
            return { voice: usableVoices[0], fallback: true };
        }

        return { voice: null, fallback: false };
    }

    function setPiperTtsState(status, message) {
        piperTtsState = {
            status: status || 'idle',
            message: message || ''
        };
        updatePronunciationUI();
    }

    async function getPiperTtsController() {
        if (!localPronunciationSupported || piperTtsDisabled) return null;

        if (piperTtsController) {
            return piperTtsController;
        }

        if (!piperTtsModulePromise) {
            piperTtsModulePromise = import('./tts/piper-engine.mjs');
        }

        try {
            const piperModule = await piperTtsModulePromise;
            if (!piperModule.supportsLocalPiperTts()) {
                piperTtsDisabled = true;
                return null;
            }

            piperTtsController = new piperModule.PiperTtsController({
                onStateChange: function(nextState) {
                    setPiperTtsState(nextState.status, nextState.message);
                }
            });
            return piperTtsController;
        } catch (error) {
            piperTtsDisabled = true;
            throw error;
        }

    }

    function updatePronunciationUI() {
        const localActive = localPronunciationSupported && !piperTtsDisabled;
        const localBusy = piperTtsState.status === 'loading-runtime' || piperTtsState.status === 'downloading-model';
        const localSpeaking = piperTtsState.status === 'speaking';
        const fallbackAvailable = speechSupported && !!selectedVoice;
        const isPlaying = localSpeaking || !!currentUtterance;
        const hasPhrase = !!currentLearnPhrase;
        const canPlay = localActive || fallbackAvailable;

        let noteText = '';
        if (pronunciationError) {
            noteText = pronunciationError;
        } else if (piperTtsState.message) {
            noteText = piperTtsState.message;
        } else if (!localActive && !speechSupported) {
            noteText = 'Tarayıcın sesli telaffuzu desteklemiyor.';
        } else if (!localActive && !availableVoices.length) {
            noteText = 'Sesler hazırlanıyor...';
        } else if (!localActive && !selectedVoice) {
            noteText = 'Bu cihazda uygun ses bulunamadı.';
        } else if (!localActive && usingVoiceFallback) {
            noteText = 'Almanca ses bulunamadı, cihazın varsayılan sesi kullanılacak.';
        }

        const targets = [
            ['btn-pronounce', 'btn-pronounce-label', 'pronounce-note'],
            ['btn-review-pronounce', 'btn-review-pronounce-label', 'review-pronounce-note']
        ];

        for (const [btnId, labelId, noteId] of targets) {
            const button = document.getElementById(btnId);
            const label = document.getElementById(labelId);
            const noteEl = document.getElementById(noteId);
            if (!button || !label || !noteEl) continue;

            button.disabled = !hasPhrase || !canPlay || localBusy;
            button.classList.toggle('is-playing', isPlaying);
            label.textContent = isPlaying ? 'Çalıyor...' : 'Dinle';
            button.setAttribute('aria-label', isPlaying ? 'Almanca telaffuz okunuyor' : 'Almanca telaffuzu dinle');
            noteEl.textContent = noteText;
            noteEl.classList.toggle('hidden', !noteText);
        }
    }

    function refreshPronunciationVoices() {
        if (!speechSupported) {
            updatePronunciationUI();
            return;
        }

        availableVoices = speechSynth.getVoices();
        const voiceSelection = pickPronunciationVoice(availableVoices);
        selectedVoice = voiceSelection.voice;
        usingVoiceFallback = voiceSelection.fallback;
        updatePronunciationUI();
    }

    function stopPronunciation() {
        pronunciationError = '';

        setPiperTtsState(piperTtsController ? 'ready' : 'idle');
        if (piperTtsController) {
            piperTtsController.stop();
        }

        if (!speechSupported) {
            updatePronunciationUI();
            return;
        }

        currentUtterance = null;
        speechSynth.cancel();
        updatePronunciationUI();
    }

    function speakWithSpeechSynthesis() {
        if (!speechSupported || !currentLearnPhrase || !selectedVoice) {
            updatePronunciationUI();
            return false;
        }

        pronunciationError = '';

        const utterance = new SpeechSynthesisUtterance(currentLearnPhrase.german);
        utterance.voice = selectedVoice;
        utterance.lang = selectedVoice.lang || 'de-DE';
        utterance.rate = 0.95;
        utterance.pitch = 1;
        currentUtterance = utterance;
        updatePronunciationUI();

        utterance.onstart = function() {
            updatePronunciationUI();
        };

        utterance.onend = function() {
            if (currentUtterance !== utterance) return;
            currentUtterance = null;
            updatePronunciationUI();
        };

        utterance.onerror = function() {
            if (currentUtterance !== utterance) return;
            currentUtterance = null;
            pronunciationError = 'Ses oynatılamadı. Tekrar dene.';
            updatePronunciationUI();
        };

        try {
            speechSynth.speak(utterance);
        } catch (error) {
            currentUtterance = null;
            pronunciationError = 'Ses oynatılamadı. Tekrar dene.';
            updatePronunciationUI();
            return false;
        }

        return true;
    }

    async function speakCurrentPhrase() {
        if (!currentLearnPhrase) {
            updatePronunciationUI();
            return;
        }

        pronunciationError = '';
        stopPronunciation();

        if (localPronunciationSupported && !piperTtsDisabled) {
            try {
                const controller = await getPiperTtsController();
                if (controller) {
                    await controller.speak(currentLearnPhrase.german);
                    return;
                }
            } catch (error) {
                if (speechSupported && selectedVoice) {
                    setPiperTtsState('fallback', 'Yuksek kaliteli ses kullanilamadi, cihaz sesi kullanilacak.');
                    speakWithSpeechSynthesis();
                    return;
                }

                pronunciationError = 'Yuksek kaliteli ses oynatilamadi. Tekrar dene.';
                updatePronunciationUI();
                return;
            }
        }

        if (speechSupported && selectedVoice) {
            speakWithSpeechSynthesis();
            return;
        }

        pronunciationError = 'Bu cihazda uygun bir ses motoru bulunamadi.';
        updatePronunciationUI();
    }

    function initPronunciation() {
        updatePronunciationUI();

        if (speechSupported) {
            refreshPronunciationVoices();
            setTimeout(refreshPronunciationVoices, 250);

            if (typeof speechSynth.addEventListener === 'function') {
                speechSynth.addEventListener('voiceschanged', refreshPronunciationVoices);
            } else {
                speechSynth.onvoiceschanged = refreshPronunciationVoices;
            }
        }

        document.addEventListener('visibilitychange', function() {
            if (document.hidden) {
                stopPronunciation();
            }
        });
    }

    // === DATE HELPERS ===
    function today() {
        return new Date().toISOString().split('T')[0];
    }

    function formatDateTR(dateStr) {
        const d = new Date(dateStr || Date.now());
        const months = ['Ocak','Şubat','Mart','Nisan','Mayıs','Haziran','Temmuz','Ağustos','Eylül','Ekim','Kasım','Aralık'];
        const days = ['Pazar','Pazartesi','Salı','Çarşamba','Perşembe','Cuma','Cumartesi'];
        return `${days[d.getDay()]}, ${d.getDate()} ${months[d.getMonth()]} ${d.getFullYear()}`;
    }

    function addDays(dateStr, n) {
        const d = new Date(dateStr);
        d.setDate(d.getDate() + n);
        return d.toISOString().split('T')[0];
    }

    function isDayUnlocked(dayNum) {
        if (dayNum === 1) return true;
        // Day is unlocked if previous day is completed
        return state.completedDays.includes(dayNum - 1);
    }

    function isTodayCompleted() {
        return state.lastCompletedDate === today();
    }

    // === STREAK LOGIC ===
    function updateStreak() {
        const t = today();
        if (state.lastCompletedDate === t) return; // already counted

        const yesterday = addDays(t, -1);
        if (state.lastCompletedDate === yesterday) {
            state.streak++;
        } else if (state.lastCompletedDate !== t) {
            state.streak = 1;
        }
        state.lastCompletedDate = t;
        saveState();
    }

    // === SCREEN NAVIGATION ===
    function showScreen(id) {
        if (id !== 'lesson') {
            currentLearnPhrase = null;
            stopPronunciation();
        }

        // Reset review session when navigating away from review
        if (id !== 'review' && reviewSession.phrases.length > 0) {
            reviewSession = { phrases: [], index: 0, correct: 0 };
            const sessionEl = document.getElementById('review-session');
            const bodyEl = document.getElementById('review-body');
            if (sessionEl) sessionEl.classList.add('hidden');
            if (bodyEl) bodyEl.classList.remove('hidden');
        }

        document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
        document.getElementById(id + '-screen').classList.add('active');

        // Update nav
        document.querySelectorAll('.nav-btn').forEach(b => {
            b.classList.toggle('active', b.dataset.screen === id);
        });

        // Render screen
        if (id === 'home') renderHome();
        if (id === 'progress') renderProgress();
        if (id === 'review') renderReview();
        if (id === 'kloz') renderPuzzleScreen();

        // Reset active cloze session when navigating away
        if (id !== 'kloz' && clozeSession.active) {
            clozeSession = { active: false, cards: [], currentIndex: 0, results: [], answered: false };
        }
    }

    // === HOME SCREEN ===
    function renderHome() {
        // Date
        document.getElementById('home-date').textContent = formatDateTR();

        // Streak
        document.getElementById('streak-count').textContent = state.streak;

        // Current day
        const dayNum = state.currentDay;
        document.getElementById('daily-day').textContent = `Gün ${dayNum} / ${TOTAL_DAYS}`;

        // Preview phrases
        const dayPhrases = PHRASES_DB.filter(p => p.day === dayNum);
        const previewEl = document.getElementById('daily-preview');
        previewEl.innerHTML = dayPhrases.map(p => `
            <div class="daily-phrase-preview">
                <span class="phrase-dot"></span>
                <span class="phrase-preview-text">${p.german}</span>
            </div>
        `).join('');

        // Button state
        const btn = document.getElementById('btn-start');
        if (isTodayCompleted()) {
            btn.disabled = true;
            btn.innerHTML = '<span>Bugünkü ders tamamlandı ✓</span>';
        } else if (!isDayUnlocked(dayNum)) {
            btn.disabled = true;
            btn.innerHTML = '<span>Kilitli — Önceki günü tamamla</span>';
        } else {
            btn.disabled = false;
            btn.innerHTML = '<span>Derse Başla</span><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>';
        }

        // Stats
        const learned = Object.keys(state.phrases).length;
        const mastered = Object.values(state.phrases).filter(p => p.level === 'mastered').length;
        const review = Object.values(state.phrases).filter(p => p.nextReview <= today()).length;

        document.getElementById('stat-learned').textContent = learned;
        document.getElementById('stat-mastered').textContent = mastered;
        document.getElementById('stat-review').textContent = review;
    }

    // === LESSON FLOW ===
    let lessonPhrases = [];
    let lessonIndex = 0;
    let lessonCorrect = 0;

    function startLesson() {
        const dayNum = state.currentDay;
        lessonPhrases = PHRASES_DB.filter(p => p.day === dayNum);
        lessonIndex = 0;
        lessonCorrect = 0;

        showScreen('lesson');
        showCard();
    }

    function showCard() {
        if (lessonIndex >= lessonPhrases.length) {
            completeLesson();
            return;
        }

        stopPronunciation();

        const phrase = lessonPhrases[lessonIndex];
        const isLearnMode = lessonIndex < 2; // First 2: learn, rest: test

        // Progress
        const progress = ((lessonIndex) / lessonPhrases.length) * 100;
        document.getElementById('lesson-progress-fill').style.width = progress + '%';
        document.getElementById('lesson-counter').textContent = `${lessonIndex + 1}/${lessonPhrases.length}`;

        if (isLearnMode) {
            showLearnCard(phrase);
        } else {
            showTestCard(phrase);
        }
    }

    function showLearnCard(phrase) {
        const container = document.getElementById('card-container');
        const testContainer = document.getElementById('test-container');
        container.classList.remove('hidden');
        testContainer.classList.add('hidden');
        currentLearnPhrase = phrase;
        pronunciationError = '';

        // Reset card
        document.getElementById('card-mode-badge').textContent = 'Öğren';
        document.getElementById('card-mode-badge').className = 'card-mode-badge';
        document.getElementById('card-german').textContent = phrase.german;
        document.getElementById('card-pronunciation').textContent = phrase.pronunciation;
        document.getElementById('card-turkish').textContent = phrase.turkish;
        document.getElementById('card-example').textContent = phrase.example;
        document.getElementById('card-example-tr').textContent = phrase.exampleTr;
        updatePronunciationUI();

        document.getElementById('card-back').classList.add('hidden');
        document.getElementById('btn-reveal').classList.remove('hidden');
        document.getElementById('card-actions').classList.add('hidden');

        // Re-trigger animation
        const card = document.getElementById('phrase-card');
        card.style.animation = 'none';
        card.offsetHeight;
        card.style.animation = 'cardIn 0.4s ease-out';
    }

    function showTestCard(phrase) {
        const container = document.getElementById('card-container');
        const testContainer = document.getElementById('test-container');
        container.classList.add('hidden');
        testContainer.classList.remove('hidden');
        currentLearnPhrase = phrase;
        pronunciationError = '';
        updatePronunciationUI();

        // Generate options (1 correct + 2 random wrong)
        const wrongPhrases = PHRASES_DB.filter(p => p.id !== phrase.id);
        const shuffledWrong = wrongPhrases.sort(() => Math.random() - 0.5).slice(0, 2);
        const options = [
            { text: phrase.turkish, correct: true },
            { text: shuffledWrong[0].turkish, correct: false },
            { text: shuffledWrong[1].turkish, correct: false }
        ].sort(() => Math.random() - 0.5);

        document.getElementById('test-question').textContent = phrase.german;

        const optionsEl = document.getElementById('test-options');
        optionsEl.innerHTML = options.map((opt, i) => `
            <button class="test-option" data-correct="${opt.correct}" data-index="${i}">
                ${opt.text}
            </button>
        `).join('');

        document.getElementById('test-feedback').classList.add('hidden');

        // Re-trigger animation
        const card = testContainer.querySelector('.test-card');
        card.style.animation = 'none';
        card.offsetHeight;
        card.style.animation = 'cardIn 0.4s ease-out';

        // Option click handlers
        optionsEl.querySelectorAll('.test-option').forEach(btn => {
            btn.addEventListener('click', function() {
                handleTestAnswer(this, phrase);
            }, { once: true });
        });
    }

    function handleTestAnswer(btn, phrase) {
        const isCorrect = btn.dataset.correct === 'true';
        const feedback = document.getElementById('test-feedback');

        // Disable all options
        document.querySelectorAll('.test-option').forEach(b => {
            b.style.pointerEvents = 'none';
            if (b.dataset.correct === 'true') b.classList.add('correct');
        });

        if (isCorrect) {
            btn.classList.add('correct');
            feedback.className = 'test-feedback correct';
            feedback.innerHTML = `✓ Doğru! <br><small>${phrase.example}</small>`;
            lessonCorrect++;
        } else {
            btn.classList.add('wrong');
            feedback.className = 'test-feedback wrong';
            feedback.innerHTML = `✗ Yanlış. Doğrusu: <strong>${phrase.turkish}</strong><br><small>${phrase.example}</small>`;
        }
        feedback.classList.remove('hidden');

        // Update phrase state
        updatePhraseState(phrase.id, isCorrect ? 'easy' : 'hard');
        state.totalAttempts++;
        if (isCorrect) state.totalCorrect++;
        saveState();

        // Auto-advance after delay
        setTimeout(() => {
            lessonIndex++;
            showCard();
        }, 2000);
    }

    function handleReveal() {
        document.getElementById('card-back').classList.remove('hidden');
        document.getElementById('btn-reveal').classList.add('hidden');
        document.getElementById('card-actions').classList.remove('hidden');
    }

    function handleDifficulty(difficulty) {
        const phrase = lessonPhrases[lessonIndex];
        updatePhraseState(phrase.id, difficulty);
        state.totalAttempts++;
        if (difficulty !== 'hard') state.totalCorrect++;
        saveState();

        lessonIndex++;
        showCard();
    }

    // === SPACED REPETITION ===
    function updatePhraseState(phraseId, difficulty) {
        const qualityMap = {
            hard: 1,
            okay: 3,
            easy: 5
        };
        const quality = qualityMap[difficulty];

        if (!Number.isFinite(quality)) return;

        state.phrases[phraseId] = normalizePhraseState(state.phrases[phraseId]);
        const p = state.phrases[phraseId];
        const previousInterval = p.interval;
        const previousEaseFactor = p.easeFactor;
        const previousRepetitions = p.repetitions;

        p.attempts++;

        if (quality < 3) {
            p.repetitions = 0;
            p.interval = 1;
        } else {
            if (previousRepetitions === 0) {
                p.interval = 1;
            } else if (previousRepetitions === 1) {
                p.interval = 6;
            } else {
                p.interval = Math.max(1, Math.round(previousInterval * previousEaseFactor));
            }

            p.easeFactor = Math.max(
                1.3,
                previousEaseFactor + (0.1 - (5 - quality) * (0.08 + (5 - quality) * 0.02))
            );
            p.repetitions++;
        }

        p.level = p.repetitions === 0 ? 'new' : p.repetitions < 3 ? 'learning' : 'mastered';
        p.nextReview = addDays(today(), p.interval);

        saveState();
    }

    // === LESSON COMPLETE ===
    function completeLesson() {
        const dayNum = state.currentDay;

        // Mark day completed
        if (!state.completedDays.includes(dayNum)) {
            state.completedDays.push(dayNum);
        }

        // Update streak
        updateStreak();

        // Advance to next day
        if (state.currentDay < TOTAL_DAYS) {
            state.currentDay++;
        }

        saveState();

        // Show complete screen
        showScreen('complete');
        document.getElementById('complete-correct').textContent = lessonCorrect;
        document.getElementById('complete-total').textContent = lessonPhrases.length;

        const percent = Math.round((lessonCorrect / lessonPhrases.length) * 100);
        let message = '';
        if (percent >= 80) message = 'Harika iş! Çok iyi gidiyorsun! 💪';
        else if (percent >= 60) message = 'İyi gidiyorsun, pratikle daha da iyi olacaksın!';
        else message = 'Endişelenme, tekrar sistemi sana yardımcı olacak!';

        document.getElementById('complete-message').textContent = message;
    }

    // === PROGRESS SCREEN ===
    function renderProgress() {
        const completed = state.completedDays.length;
        const percent = Math.round((completed / TOTAL_DAYS) * 100);

        document.getElementById('ring-percent').textContent = percent + '%';

        // Animate ring
        const circumference = 2 * Math.PI * 52;
        const offset = circumference - (percent / 100) * circumference;
        document.getElementById('ring-fill').style.strokeDashoffset = offset;

        // Day grid
        const grid = document.getElementById('day-grid');
        let html = '';
        for (let d = 1; d <= TOTAL_DAYS; d++) {
            const isCompleted = state.completedDays.includes(d);
            const isCurrent = d === state.currentDay;
            const isLocked = !isDayUnlocked(d) && !isCompleted;
            let cls = 'day-cell';
            if (isCompleted) cls += ' completed';
            if (isCurrent && !isCompleted) cls += ' today';
            if (isLocked) cls += ' locked';
            html += `<div class="${cls}">${d}</div>`;
        }
        grid.innerHTML = html;
    }

    // === REVIEW SCREEN ===
    function getReviewPhrases() {
        const t = today();
        const phrases = [];
        for (const [id, data] of Object.entries(state.phrases)) {
            if (data.nextReview <= t) {
                const phrase = PHRASES_DB.find(p => p.id == id);
                if (phrase) phrases.push({ ...phrase, ...data });
            }
        }
        return phrases;
    }

    function renderReview() {
        const reviewPhrases = getReviewPhrases();
        const emptyEl = document.getElementById('review-empty');
        const startBarEl = document.getElementById('review-start-bar');
        const listEl = document.getElementById('review-list');

        if (reviewPhrases.length === 0) {
            emptyEl.classList.remove('hidden');
            startBarEl.classList.add('hidden');
            listEl.innerHTML = '';
        } else {
            emptyEl.classList.add('hidden');
            startBarEl.classList.remove('hidden');
            document.getElementById('review-start-info').textContent =
                `${reviewPhrases.length} kalıp tekrar bekliyor`;
            listEl.innerHTML = reviewPhrases.map(p => {
                const levelClass = p.level === 'mastered' ? 'level-mastered' : p.level === 'learning' ? 'level-learning' : 'level-new';
                const levelText = p.level === 'mastered' ? 'Usta' : p.level === 'learning' ? 'Öğreniyor' : 'Yeni';
                return `
                    <div class="review-item">
                        <div class="review-item-text">
                            <div class="review-item-german">${p.german}</div>
                            <div class="review-item-turkish">${p.turkish}</div>
                        </div>
                        <span class="review-item-level ${levelClass}">${levelText}</span>
                    </div>
                `;
            }).join('');
        }
    }

    // === REVIEW SESSION ===
    let reviewSession = { phrases: [], index: 0, correct: 0 };

    function startReviewSession() {
        const phrases = getReviewPhrases().map(p => ({ ...p }));
        if (phrases.length === 0) return;

        reviewSession = { phrases, index: 0, correct: 0 };

        document.getElementById('review-body').classList.add('hidden');
        const sessionEl = document.getElementById('review-session');
        sessionEl.classList.remove('hidden');
        document.getElementById('review-session-complete').classList.add('hidden');
        document.getElementById('review-lesson-body').classList.remove('hidden');

        showReviewCard();
    }

    function showReviewCard() {
        if (reviewSession.index >= reviewSession.phrases.length) {
            completeReview();
            return;
        }

        stopPronunciation();

        const phrase = reviewSession.phrases[reviewSession.index];
        currentLearnPhrase = phrase;
        pronunciationError = '';
        updatePronunciationUI();

        const progress = (reviewSession.index / reviewSession.phrases.length) * 100;
        document.getElementById('review-progress-fill').style.width = progress + '%';
        document.getElementById('review-counter').textContent =
            `${reviewSession.index + 1}/${reviewSession.phrases.length}`;

        document.getElementById('review-card-german').textContent = phrase.german;
        document.getElementById('review-card-pronunciation').textContent = phrase.pronunciation;
        document.getElementById('review-card-turkish').textContent = phrase.turkish;
        document.getElementById('review-card-example').textContent = phrase.example;
        document.getElementById('review-card-example-tr').textContent = phrase.exampleTr;

        document.getElementById('review-card-back').classList.add('hidden');
        document.getElementById('btn-review-reveal').classList.remove('hidden');
        document.getElementById('review-card-actions').classList.add('hidden');

        const card = document.getElementById('review-phrase-card');
        card.style.animation = 'none';
        card.offsetHeight;
        card.style.animation = 'cardIn 0.4s ease-out';
    }

    function handleReviewReveal() {
        document.getElementById('review-card-back').classList.remove('hidden');
        document.getElementById('btn-review-reveal').classList.add('hidden');
        document.getElementById('review-card-actions').classList.remove('hidden');
    }

    function handleReviewDifficulty(difficulty) {
        const phrase = reviewSession.phrases[reviewSession.index];
        updatePhraseState(phrase.id, difficulty);
        if (difficulty !== 'hard') reviewSession.correct++;
        reviewSession.index++;
        showReviewCard();
    }

    function completeReview() {
        stopPronunciation();
        currentLearnPhrase = null;

        document.getElementById('review-lesson-body').classList.add('hidden');
        document.getElementById('review-session-complete').classList.remove('hidden');
        document.getElementById('review-correct-count').textContent = reviewSession.correct;
        document.getElementById('review-total-count').textContent = reviewSession.phrases.length;
    }

    function exitReviewSession() {
        stopPronunciation();
        currentLearnPhrase = null;
        reviewSession = { phrases: [], index: 0, correct: 0 };
        document.getElementById('review-session').classList.add('hidden');
        document.getElementById('review-body').classList.remove('hidden');
        renderReview();
    }

    // === KLOZ PUZZLE ===

    // Özel isimler — kişi adları, ülkeler, şehirler, kurumlar
    const CLOZE_PROPER_NOUNS = new Set([
        // Kişi adları
        'Anna','Müller','Schmidt','Fischer','Weber','Meyer','Wagner','Becker','Hoffmann',
        'Schulz','Koch','Richter','Klein','Wolf','Schröder','Neumann','Schwarz','Zimmermann',
        'Braun','Krüger','Hartmann','Lange','Schmitt','Werner','Schmitz','Krause','Meier',
        'Lehmann','Schmid','Schulze','Maier','Köhler','Herrmann','König','Walter','Mayer',
        'Hans','Peter','Klaus','Maria','Thomas','Michael','Andreas','Stefan','Frank','Markus',
        'Christian','Daniel','Martin','Julia','Laura','Sarah','Lisa','Sandra','Petra',
        'Frau','Herr',
        // Ülkeler
        'Türkei','Deutschland','Frankreich','England','Amerika','Österreich','Schweiz',
        'Italien','Spanien','China','Japan','Russland','Polen','Niederlande','Belgien',
        'Schweden','Norwegen','Dänemark','Finnland','Portugal','Griechenland','Ungarn',
        'Tschechien','Rumänien','Bulgarien','Kroatien','Serbien','Slowakei','Slowenien',
        'USA','UK','EU',
        // Şehirler
        'Berlin','München','Hamburg','Frankfurt','Köln','Stuttgart','Düsseldorf','Dortmund',
        'Essen','Bremen','Dresden','Leipzig','Hannover','Nürnberg','Duisburg','Bochum',
        'Wien','Zürich','Bern','Basel','Istanbul','Paris','London','Madrid','Rom','Amsterdam',
        // Kurumlar ve kısaltmalar
        'METU','ICE','WLAN',
        // Haftanın günleri (öğrenilmesi daha az kritik)
        'Montag','Dienstag','Mittwoch','Donnerstag','Freitag','Samstag','Sonntag'
    ]);

    const CLOZE_STOPWORDS = new Set([
        'der','die','das','dem','den','des','ein','eine','einen','einem','einer','eines',
        'ich','du','er','sie','es','wir','ihr','Sie','mich','mir','dich','dir','ihn','ihm','uns','euch','sich',
        'in','auf','mit','von','zu','bei','nach','an','über','unter','vor','hinter','neben','zwischen',
        'durch','für','gegen','ohne','um','aus','ab','beim','zum','zur','ins','am','im',
        'und','oder','aber','denn','wenn','weil','dass','ob','damit','als','obwohl',
        'ist','sind','war','waren','hat','haben','wird','werden','bin','bist','sein','habe',
        'kann','muss','will','soll','mag','darf','könnte','würde','sollte',
        'nicht','auch','noch','schon','nur','sehr','so','ja','nein','doch','mal',
        'dann','hier','dort','jetzt','heute','morgen','immer','nie','oft','gern','gerne',
        'Ich','Du','Er','Wir','Ihr','Mir','Mich','Uns','Sich'
    ]);

    let clozeSession = { active: false, cards: [], currentIndex: 0, results: [], answered: false };

    function selectBlankWord(phrase) {
        if (!phrase.example || phrase.example.trim().length === 0) return null;
        const tokens = phrase.example.split(/\s+/).filter(t => t.length > 0);
        if (tokens.length < 4) return null;

        const parsed = tokens.map(function(token, idx) {
            const clean = token.replace(/[.,!?;:'"»«]+$/, '');
            const trail = token.slice(clean.length);
            return { token: token, clean: clean, trail: trail, idx: idx };
        });

        // Priority 1: nouns (uppercase, length > 4, not first token, not stopword, not proper noun)
        const nounCandidates = parsed.filter(function(p) {
            return p.idx > 0 && p.clean.length > 4 && /^[A-ZÄÖÜ]/.test(p.clean)
                && !CLOZE_STOPWORDS.has(p.clean) && !CLOZE_PROPER_NOUNS.has(p.clean);
        });

        // Priority 2: lowercase content words (length > 5, not stopword, not proper noun)
        const verbCandidates = parsed.filter(function(p) {
            return p.idx > 0 && p.clean.length > 5 && /^[a-zäöü]/.test(p.clean)
                && !CLOZE_STOPWORDS.has(p.clean) && !CLOZE_PROPER_NOUNS.has(p.clean);
        });

        const candidates = nounCandidates.length > 0 ? nounCandidates : verbCandidates;
        if (candidates.length === 0) return null;

        // Prefer words in the middle of the sentence
        const midCandidates = candidates.filter(function(p) { return p.idx > 1 && p.idx < tokens.length - 1; });
        const chosen = midCandidates.length > 0 ? midCandidates[Math.floor(midCandidates.length / 2)] : candidates[0];

        const parts = tokens.map(function(tok, i) {
            return i === chosen.idx
                ? '<span class="cloze-blank" id="cloze-blank">\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0</span>' + chosen.trail
                : tok;
        });

        return { sentenceHTML: parts.join(' '), answer: chosen.clean, trail: chosen.trail };
    }

    function generateDistractors(correctWord, phrasePool, count) {
        count = count || 2;
        const used = new Set([correctWord.toLowerCase()]);
        const distractors = [];
        const isNoun = /^[A-ZÄÖÜ]/.test(correctWord);

        const allCandidates = [];
        phrasePool.forEach(function(p) {
            ((p.example || '') + ' ' + p.german).split(/\s+/).forEach(function(tok) {
                const clean = tok.replace(/[.,!?;:'"»«]+$/, '');
                if (clean.length > 3 && !CLOZE_STOPWORDS.has(clean) && !CLOZE_PROPER_NOUNS.has(clean) && !used.has(clean.toLowerCase())) {
                    allCandidates.push(clean);
                }
            });
        });

        // Fisher-Yates shuffle
        for (let i = allCandidates.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            const tmp = allCandidates[i]; allCandidates[i] = allCandidates[j]; allCandidates[j] = tmp;
        }

        // Pass 1: same grammatical category
        allCandidates.forEach(function(w) {
            if (distractors.length >= count) return;
            const wIsNoun = /^[A-ZÄÖÜ]/.test(w);
            if (wIsNoun === isNoun && !used.has(w.toLowerCase())) {
                distractors.push(w); used.add(w.toLowerCase());
            }
        });

        // Pass 2: fallback — any word
        allCandidates.forEach(function(w) {
            if (distractors.length >= count) return;
            if (!used.has(w.toLowerCase())) {
                distractors.push(w); used.add(w.toLowerCase());
            }
        });

        // Pass 3: use PHRASES_DB as ultimate fallback
        if (distractors.length < count) {
            PHRASES_DB.forEach(function(p) {
                if (distractors.length >= count) return;
                p.german.split(/\s+/).forEach(function(tok) {
                    if (distractors.length >= count) return;
                    const clean = tok.replace(/[.,!?;:'"»«]+$/, '');
                    if (clean.length > 3 && !CLOZE_STOPWORDS.has(clean) && !CLOZE_PROPER_NOUNS.has(clean) && !used.has(clean.toLowerCase())) {
                        distractors.push(clean); used.add(clean.toLowerCase());
                    }
                });
            });
        }

        const options = [correctWord].concat(distractors.slice(0, count));
        for (let i = options.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            const tmp = options[i]; options[i] = options[j]; options[j] = tmp;
        }
        return options;
    }

    function buildLearnedPhrasePool() {
        return PHRASES_DB.filter(function(p) {
            const ps = state.phrases[p.id];
            return ps && (ps.level === 'learning' || ps.level === 'mastered');
        });
    }

    function initClozeSession() {
        const pool = buildLearnedPhrasePool();
        const shuffled = pool.slice();
        for (let i = shuffled.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            const tmp = shuffled[i]; shuffled[i] = shuffled[j]; shuffled[j] = tmp;
        }

        const cards = [];
        for (let k = 0; k < shuffled.length && cards.length < 5; k++) {
            const phrase = shuffled[k];
            const blankData = selectBlankWord(phrase);
            if (!blankData) continue;
            const others = shuffled.filter(function(p) { return p.id !== phrase.id; });
            const options = generateDistractors(blankData.answer, others, 2);
            if (options.length < 3) continue;
            cards.push({ phrase: phrase, blankData: blankData, options: options });
        }

        clozeSession = { active: cards.length > 0, cards: cards, currentIndex: 0, results: [], answered: false };
        renderPuzzleScreen();
    }

    function renderPuzzleScreen() {
        if (!clozeSession.active || clozeSession.cards.length === 0) {
            renderClozeHub();
            return;
        }
        if (clozeSession.currentIndex >= clozeSession.cards.length) {
            renderClozeCompletion();
            return;
        }
        renderClozeCard();
    }

    function renderClozeHub() {
        const body = document.getElementById('kloz-body');
        if (!body) return;
        if (!state.cloze) state.cloze = getDefaultState().cloze;

        const pool = buildLearnedPhrasePool();
        const cloze = state.cloze;
        const accuracy = cloze.totalAnswered > 0 ? Math.round((cloze.totalCorrect / cloze.totalAnswered) * 100) : 0;
        const todayCount = cloze.lastPlayedDate === today() ? cloze.todaySessions : 0;
        const canPlay = pool.length >= 3;

        let recentHTML = '';
        if (cloze.recentResults && cloze.recentResults.length > 0) {
            recentHTML = '<div class="kloz-section-label">Son Oturum</div>' +
                cloze.recentResults.map(function(r) {
                    const ph = PHRASES_DB.find(function(p) { return p.id === r.phraseId; });
                    if (!ph) return '';
                    const preview = (ph.example || '').substring(0, 38);
                    return '<div class="kloz-recent-row">' +
                        '<span class="kloz-recent-icon">' + (r.correct ? '✅' : '❌') + '</span>' +
                        '<div class="kloz-recent-text">' +
                            '<div class="kloz-recent-sentence">' + preview + '…</div>' +
                            '<div class="kloz-recent-word">' + (r.correct ? 'Cevap' : 'Doğrusu') + ': <strong>' + r.answer + '</strong></div>' +
                        '</div></div>';
                }).join('');
        }

        body.innerHTML =
            '<header class="kloz-header"><h2 class="kloz-title">Bağlam Kloz</h2></header>' +
            '<div class="kloz-hub-hero">' +
                '<div class="kloz-hub-eyebrow">Bilimsel Yöntem</div>' +
                '<div class="kloz-hub-title">Cümledeki eksik kelimeyi bul</div>' +
                '<div class="kloz-hub-desc">Öğrendiğin cümlelerin bağlamına göre doğru kelimeyi seç. Tanımaktan değil, hatırlamaktan öğren.</div>' +
                '<div class="kloz-science-pills"><span class="kloz-pill">Cloze Procedure</span><span class="kloz-pill">Generation Effect</span><span class="kloz-pill">Semantic Interference</span></div>' +
            '</div>' +
            '<div class="kloz-stats-grid">' +
                '<div class="kloz-stat-box"><span class="kloz-stat-val">' + cloze.totalSessions + '</span><span class="kloz-stat-lbl">Oturum</span></div>' +
                '<div class="kloz-stat-box"><span class="kloz-stat-val">' + (cloze.totalAnswered > 0 ? accuracy + '%' : '—') + '</span><span class="kloz-stat-lbl">Doğruluk</span></div>' +
                '<div class="kloz-stat-box"><span class="kloz-stat-val">' + todayCount + '</span><span class="kloz-stat-lbl">Bugün</span></div>' +
            '</div>' +
            (canPlay
                ? '<button class="kloz-start-btn" id="kloz-start-btn">Klozu Başlat →</button>'
                : '<div class="kloz-empty"><div class="kloz-empty-icon">📚</div><div class="kloz-empty-title">Henüz yeterli kelime yok</div><div class="kloz-empty-desc">Puzzle için en az birkaç günlük ders tamamla. İlk derslerden sonra kloz aktif olur.</div></div>'
            ) +
            recentHTML;

        const startBtn = document.getElementById('kloz-start-btn');
        if (startBtn) startBtn.addEventListener('click', initClozeSession);
    }

    function renderClozeCard() {
        const body = document.getElementById('kloz-body');
        if (!body) return;
        const card = clozeSession.cards[clozeSession.currentIndex];
        const { phrase, blankData, options } = card;

        const dotsHTML = clozeSession.cards.map(function(_, i) {
            let cls = 'kloz-dot';
            if (i < clozeSession.currentIndex) cls += ' done';
            else if (i === clozeSession.currentIndex) cls += ' current';
            return '<div class="' + cls + '"></div>';
        }).join('');

        const optionsHTML = options.map(function(opt) {
            return '<button class="kloz-choice-btn" data-word="' + opt.replace(/"/g, '&quot;') + '">' + opt + '</button>';
        }).join('');

        body.innerHTML =
            '<header class="kloz-header kloz-header-session">' +
                '<button class="kloz-back-btn" id="kloz-back-btn"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M19 12H5M12 19l-7-7 7-7"/></svg></button>' +
                '<div class="kloz-dots">' + dotsHTML + '</div>' +
                '<div class="kloz-counter">' + (clozeSession.currentIndex + 1) + ' / ' + clozeSession.cards.length + '</div>' +
            '</header>' +
            '<div class="kloz-card-wrap">' +
                '<div class="kloz-context-strip">' +
                    '<span class="kloz-ctx-label">Örnek Cümle</span>' +
                    '<span class="kloz-cat-badge">' + (phrase.category || 'günlük') + '</span>' +
                '</div>' +
                '<div class="kloz-sentence-card">' +
                    '<div class="kloz-sentence-text">' + blankData.sentenceHTML + '</div>' +
                    '<div class="kloz-tr-text">' + (phrase.exampleTr || phrase.turkish) + '</div>' +
                '</div>' +
                '<div class="kloz-choices-wrap">' +
                    '<div class="kloz-choice-label">Eksik kelime hangisi?</div>' +
                    optionsHTML +
                '</div>' +
                '<div class="kloz-result-area" id="kloz-result-area"></div>' +
            '</div>';

        document.getElementById('kloz-back-btn').addEventListener('click', function() {
            if (clozeSession.results.length > 0) {
                if (confirm('Klozdan çıkmak istiyor musun? İlerleme kaybolacak.')) {
                    clozeSession = { active: false, cards: [], currentIndex: 0, results: [], answered: false };
                    renderClozeHub();
                }
            } else {
                clozeSession = { active: false, cards: [], currentIndex: 0, results: [], answered: false };
                renderClozeHub();
            }
        });

        document.querySelectorAll('.kloz-choice-btn').forEach(function(btn) {
            btn.addEventListener('click', function() {
                if (!clozeSession.answered) handleClozeChoice(this.dataset.word);
            });
        });
    }

    function handleClozeChoice(chosenWord) {
        clozeSession.answered = true;
        const card = clozeSession.cards[clozeSession.currentIndex];
        const { phrase, blankData } = card;
        const isCorrect = chosenWord === blankData.answer;

        clozeSession.results.push({ phraseId: phrase.id, correct: isCorrect, answer: blankData.answer, chosenWord: chosenWord });

        // Style buttons
        document.querySelectorAll('.kloz-choice-btn').forEach(function(btn) {
            btn.disabled = true;
            if (btn.dataset.word === blankData.answer) {
                btn.classList.add('correct');
            } else if (btn.dataset.word === chosenWord && !isCorrect) {
                btn.classList.add('wrong');
            } else {
                btn.style.opacity = '0.3';
            }
        });

        // Fill blank
        const blankEl = document.getElementById('cloze-blank');
        if (blankEl) {
            blankEl.textContent = blankData.answer;
            blankEl.classList.add(isCorrect ? 'filled-correct' : 'filled-wrong');
        }

        // Result card
        const resultArea = document.getElementById('kloz-result-area');
        if (isCorrect) {
            resultArea.innerHTML =
                '<div class="kloz-result-card kloz-result-correct">' +
                    '<div class="kloz-result-phrase-de">"' + phrase.german + '"</div>' +
                    '<div class="kloz-result-phrase-tr">' + phrase.turkish + '</div>' +
                '</div>' +
                '<button class="kloz-next-btn" id="kloz-next-btn">İleri →</button>';
        } else {
            resultArea.innerHTML =
                '<div class="kloz-result-card kloz-result-wrong">' +
                    '<div class="kloz-result-wrong-row">' +
                        '<span class="kloz-wrong-word">' + chosenWord + '</span>' +
                        '<span class="kloz-arrow">→</span>' +
                        '<span class="kloz-correct-word">' + blankData.answer + '</span>' +
                    '</div>' +
                    '<div class="kloz-result-phrase-de">"' + phrase.german + '"</div>' +
                    '<div class="kloz-result-phrase-tr">' + phrase.turkish + '</div>' +
                '</div>' +
                '<button class="kloz-next-btn" id="kloz-next-btn">İleri →</button>';
        }
        document.getElementById('kloz-next-btn').addEventListener('click', advanceCloze);

        // Downgrade mastered phrase if answered wrong
        if (!isCorrect && state.phrases[phrase.id] && state.phrases[phrase.id].level === 'mastered') {
            state.phrases[phrase.id].level = 'learning';
            state.phrases[phrase.id].nextReview = today();
            saveState();
        }
    }

    function advanceCloze() {
        clozeSession.currentIndex++;
        clozeSession.answered = false;
        if (clozeSession.currentIndex >= clozeSession.cards.length) {
            completeClozeSession();
        } else {
            renderClozeCard();
        }
    }

    function completeClozeSession() {
        const results = clozeSession.results;
        const correct = results.filter(function(r) { return r.correct; }).length;
        const total = results.length;

        if (!state.cloze) state.cloze = getDefaultState().cloze;
        state.cloze.totalSessions++;
        state.cloze.totalCorrect += correct;
        state.cloze.totalAnswered += total;

        if (state.cloze.lastPlayedDate === today()) {
            state.cloze.todaySessions++;
        } else {
            state.cloze.todaySessions = 1;
            state.cloze.lastPlayedDate = today();
        }

        state.cloze.recentResults = results.slice(-5).map(function(r) {
            return { phraseId: r.phraseId, correct: r.correct, answer: r.answer };
        });
        saveState();
        renderClozeCompletion();
    }

    function renderClozeCompletion() {
        const body = document.getElementById('kloz-body');
        if (!body) return;
        const results = clozeSession.results;
        const correct = results.filter(function(r) { return r.correct; }).length;
        const total = results.length;
        const accuracy = total > 0 ? Math.round((correct / total) * 100) : 0;

        let msg = '';
        if (accuracy >= 100) msg = 'Mükemmel! Bağlam sezgin çok güçlü.';
        else if (accuracy >= 80) msg = 'Harika! Kelime bağlantıları yerleşiyor.';
        else if (accuracy >= 60) msg = 'İyi gidiyorsun! Zorlu kelimeleri tekrar çalış.';
        else msg = 'Devam et! Her hata öğrenme fırsatı.';

        const resultsHTML = results.map(function(r) {
            const ph = PHRASES_DB.find(function(p) { return p.id === r.phraseId; });
            const preview = (ph ? ph.example || '' : '').substring(0, 35);
            return '<div class="kloz-compl-row">' +
                '<span class="kloz-compl-icon">' + (r.correct ? '✅' : '❌') + '</span>' +
                '<span class="kloz-compl-sentence">' + preview + '…</span>' +
                '<span class="kloz-compl-word ' + (r.correct ? 'ok' : 'fail') + '">' + r.answer + '</span>' +
                '</div>';
        }).join('');

        body.innerHTML =
            '<div class="kloz-completion">' +
                '<div class="kloz-compl-icon-big">🔍</div>' +
                '<div class="kloz-compl-title">Kloz Tamamlandı!</div>' +
                '<div class="kloz-compl-score">' + total + '\'ten ' + correct + ' doğru</div>' +
                '<div class="kloz-acc-wrap">' +
                    '<div class="kloz-acc-track"><div class="kloz-acc-fill" style="width:' + accuracy + '%"></div></div>' +
                    '<div class="kloz-acc-label">%' + accuracy + ' doğruluk</div>' +
                '</div>' +
                '<div class="kloz-compl-msg">' + msg + '</div>' +
                '<div class="kloz-compl-results">' + resultsHTML + '</div>' +
                '<button class="kloz-start-btn" id="kloz-replay-btn">Tekrar Oyna</button>' +
                '<button class="kloz-secondary-btn" id="kloz-home-btn">Ana Sayfaya Dön</button>' +
            '</div>';

        clozeSession = { active: false, cards: [], currentIndex: 0, results: [], answered: false };
        document.getElementById('kloz-replay-btn').addEventListener('click', initClozeSession);
        document.getElementById('kloz-home-btn').addEventListener('click', function() { showScreen('home'); });
    }

    // === EVENT LISTENERS ===
    function initEvents() {
        // Nav buttons (delegated to handle all navs)
        document.addEventListener('click', function(e) {
            const navBtn = e.target.closest('.nav-btn');
            if (navBtn && navBtn.dataset.screen) {
                showScreen(navBtn.dataset.screen);
            }
        });

        // Start lesson
        document.getElementById('btn-start').addEventListener('click', function() {
            if (!this.disabled) startLesson();
        });

        // Back from lesson
        document.getElementById('btn-back').addEventListener('click', function() {
            showScreen('home');
        });

        // Reveal answer
        document.getElementById('btn-reveal').addEventListener('click', handleReveal);

        // Pronunciation
        document.getElementById('btn-pronounce').addEventListener('click', function() {
            if (!this.disabled) speakCurrentPhrase();
        });

        // Difficulty buttons
        document.querySelectorAll('.btn-difficulty').forEach(btn => {
            btn.addEventListener('click', function() {
                handleDifficulty(this.dataset.difficulty);
            });
        });

        // Home from complete
        document.getElementById('btn-home').addEventListener('click', function() {
            showScreen('home');
        });

        // Review session: start
        document.getElementById('btn-review-start').addEventListener('click', startReviewSession);

        // Review session: back button
        document.getElementById('btn-review-back').addEventListener('click', exitReviewSession);

        // Review session: reveal
        document.getElementById('btn-review-reveal').addEventListener('click', handleReviewReveal);

        // Review session: pronunciation
        document.getElementById('btn-review-pronounce').addEventListener('click', function() {
            if (!this.disabled) speakCurrentPhrase();
        });

        // Review session: difficulty buttons (use data-rdiff to distinguish from lesson)
        document.addEventListener('click', function(e) {
            const btn = e.target.closest('[data-rdiff]');
            if (btn) handleReviewDifficulty(btn.dataset.rdiff);
        });

        // Review session: done button
        document.getElementById('btn-review-done').addEventListener('click', exitReviewSession);
    }

    // === SPLASH & INIT ===
    function init() {
        initEvents();
        initPronunciation();

        // Show splash for 3 seconds
        setTimeout(() => {
            showScreen('home');
        }, 3000);
    }

    // PWA Registration
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('sw.js').catch(() => {});
    }

    // Start app
    init();

})();
