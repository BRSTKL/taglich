const CACHE_NAME = 'taglich-v4';
const ASSETS = [
    '/',
    '/index.html',
    '/styles.css',
    '/app.js',
    '/phrases.js',
    '/manifest.json'
];

// Install — cache core assets
self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME).then(cache => cache.addAll(ASSETS))
    );
    self.skipWaiting();
});

// Activate — clean old caches
self.addEventListener('activate', event => {
    event.waitUntil(
        caches.keys().then(keys =>
            Promise.all(keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k)))
        )
    );
    self.clients.claim();
});

// Fetch — network first for same-origin GET requests, fallback to cache
self.addEventListener('fetch', event => {
    if (event.request.method !== 'GET') return;

    const url = new URL(event.request.url);
    if (url.origin !== self.location.origin) return;

    // Always fetch fresh from network (no-cache), fallback to SW cache offline
    const freshRequest = new Request(event.request, { cache: 'no-cache' });

    event.respondWith(
        fetch(freshRequest)
            .then(response => {
                const responseClone = response.clone();
                caches.open(CACHE_NAME).then(cache => cache.put(event.request, responseClone));
                return response;
            })
            .catch(() =>
                caches.match(event.request).then(cached => {
                    if (cached) return cached;
                    if (event.request.mode === 'navigate') {
                        return caches.match('/index.html');
                    }
                    throw new Error('Resource not available in cache');
                })
            )
    );
});

// Daily notification at 09:00
self.addEventListener('message', event => {
    if (event.data === 'schedule-notification') {
        scheduleDaily();
    }
});

function scheduleDaily() {
    const now = new Date();
    const target = new Date();
    target.setHours(9, 0, 0, 0);
    if (now >= target) target.setDate(target.getDate() + 1);

    const delay = target - now;
    setTimeout(() => {
        self.registration.showNotification('Täglich 🇩🇪', {
            body: 'Günün 5 yeni Almanca kalıbı seni bekliyor!',
            icon: 'icons/icon-192.png',
            badge: 'icons/icon-192.png',
            tag: 'daily-reminder'
        });
        scheduleDaily(); // Reschedule
    }, delay);
}
