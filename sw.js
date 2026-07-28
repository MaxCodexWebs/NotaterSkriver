const CACHE_NAME = 'notater-skriver-v1.0-FIX';

const ASSETS_TO_CACHE = [
  './',
  './index.html',
  './style.css',
  './single-editor.js',
  './script.js',
  './manifest.json',
  './news.json'
];

self.addEventListener('install', (event) => {
  self.skipWaiting();
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS_TO_CACHE))
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.map((key) => {
          if (key !== CACHE_NAME) {
            return caches.delete(key);
          }
        })
      );
    }).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (event) => {
  // Versucht erst das Netzwerk, nutzt den Cache nur als Fallback
  event.respondWith(
    fetch(event.request).catch(() => caches.match(event.request))
  );
});


