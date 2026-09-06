// Minimal service worker — required by browsers to allow "Add to Home Screen" / install prompts.
// This does not cache anything or work offline; it just satisfies the installability requirement.

self.addEventListener('install', (event) => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  self.clients.claim();
});

self.addEventListener('fetch', (event) => {
  // Pass every request straight through to the network — no offline caching.
  event.respondWith(fetch(event.request));
});
