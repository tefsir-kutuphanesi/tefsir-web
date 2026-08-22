// Minimal service worker — sadece "Ana Ekrana Ekle / Yükle" kriterini
// karşılamak için var; ekstra önbellekleme yapmıyor.
self.addEventListener('install', (e) => self.skipWaiting());
self.addEventListener('activate', (e) => self.clients.claim());
self.addEventListener('fetch', (e) => {
  e.respondWith(fetch(e.request));
});
