// Service worker code goes here

// This is a basic service worker that caches resources for offline use

const CACHE_NAME = 'naufal-cache-v1';
const urlsToCache = [
  '/',
  'index.html',
  'styles.css',
  'scripts.js',
  // Add more URLs to cache as needed
];

self.addEventListener('install', (event) => {
  // Perform install steps
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('Cache opened');
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        // Cache hit - return response
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});
