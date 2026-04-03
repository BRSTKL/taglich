// =============================================
// Täglich — Ana Uygulama Mantığı
// Spaced Repetition + Active Recall + Daily Unlock
// =============================================

(function() {
    'use strict';

    // === STATE ===
    const STATE_KEY = 'taglich_state';

    function getDefaultState() {
        return {
            currentDay: 1,
            completedDays: [],
            streak: 0,
            lastCompletedDate: null,
            startDate: new Date().toISOString().split('T')[0],
            phrases: {}, // { id: { level: 'new'|'learning'|'mastered', nextReview: 'YYYY-MM-DD', attempts: 0 } }
            totalCorrect: 0,
            totalAttempts: 0
        };
    }

    function loadState() {
        try {
            const saved = localStorage.getItem(STATE_KEY);
            if (saved) return JSON.parse(saved);
        } catch(e) {}
        return getDefaultState();
    }

    function saveState() {
        localStorage.setItem(STATE_KEY, JSON.stringify(state));
    }

    let state = loadState();

    // === PRONUNCIATION ===
    const speechSupported = 'speechSynthesis' in window && 'SpeechSynthesisUtterance' in window;
    const speechSynth = speechSupported ? window.speechSynthesis : null;
    let availableVoices = [];
    let selectedVoice = null;
    let usingVoiceFallback = false;
    let currentUtterance = null;
    let currentLearnPhrase = null;
    let pronunciationError = '';

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

    function updatePronunciationUI() {
        const button = document.getElementById('btn-pronounce');
        const buttonLabel = document.getElementById('btn-pronounce-label');
        const note = document.getElementById('pronounce-note');

        if (!button || !buttonLabel || !note) return;

        const isPlaying = !!currentUtterance;
        const hasPhrase = !!currentLearnPhrase;
        const hasVoice = !!selectedVoice;

        button.disabled = !hasPhrase || !speechSupported || !hasVoice;
        button.classList.toggle('is-playing', isPlaying);
        buttonLabel.textContent = isPlaying ? 'Çalıyor...' : 'Dinle';
        button.setAttribute('aria-label', isPlaying ? 'Almanca telaffuz okunuyor' : 'Almanca telaffuzu dinle');

        let noteText = '';
        if (pronunciationError) {
            noteText = pronunciationError;
        } else if (!speechSupported) {
            noteText = 'Tarayıcın sesli telaffuzu desteklemiyor.';
        } else if (!availableVoices.length) {
            noteText = 'Sesler hazırlanıyor...';
        } else if (!selectedVoice) {
            noteText = 'Bu cihazda uygun ses bulunamadı.';
        } else if (usingVoiceFallback) {
            noteText = 'Almanca ses bulunamadı, cihazın varsayılan sesi kullanılacak.';
        }

        note.textContent = noteText;
        note.classList.toggle('hidden', !noteText);
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

        if (!speechSupported) {
            updatePronunciationUI();
            return;
        }

        currentUtterance = null;
        speechSynth.cancel();
        updatePronunciationUI();
    }

    function speakCurrentPhrase() {
        if (!speechSupported || !currentLearnPhrase || !selectedVoice) {
            updatePronunciationUI();
            return;
        }

        pronunciationError = '';
        stopPronunciation();

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
        }
    }

    function initPronunciation() {
        updatePronunciationUI();

        if (!speechSupported) return;

        refreshPronunciationVoices();
        setTimeout(refreshPronunciationVoices, 250);

        if (typeof speechSynth.addEventListener === 'function') {
            speechSynth.addEventListener('voiceschanged', refreshPronunciationVoices);
        } else {
            speechSynth.onvoiceschanged = refreshPronunciationVoices;
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
        const review = Object.values(state.phrases).filter(p => p.nextReview <= today() && p.level !== 'mastered').length;

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
        if (!state.phrases[phraseId]) {
            state.phrases[phraseId] = { level: 'new', nextReview: today(), attempts: 0 };
        }

        const p = state.phrases[phraseId];
        p.attempts++;

        switch(difficulty) {
            case 'hard':
                p.level = 'learning';
                p.nextReview = addDays(today(), 1); // Tomorrow
                break;
            case 'okay':
                p.level = 'learning';
                p.nextReview = addDays(today(), 3); // 3 days
                break;
            case 'easy':
                if (p.attempts >= 3) {
                    p.level = 'mastered';
                    p.nextReview = addDays(today(), 14); // 2 weeks
                } else {
                    p.level = 'learning';
                    p.nextReview = addDays(today(), 7); // 1 week
                }
                break;
        }

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
    function renderReview() {
        const t = today();
        const reviewPhrases = [];

        for (const [id, data] of Object.entries(state.phrases)) {
            if (data.nextReview <= t && data.level !== 'mastered') {
                const phrase = PHRASES_DB.find(p => p.id == id);
                if (phrase) reviewPhrases.push({ ...phrase, ...data });
            }
        }

        const emptyEl = document.getElementById('review-empty');
        const listEl = document.getElementById('review-list');

        if (reviewPhrases.length === 0) {
            emptyEl.classList.remove('hidden');
            listEl.innerHTML = '';
        } else {
            emptyEl.classList.add('hidden');
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
