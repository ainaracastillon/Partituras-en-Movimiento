const CACHE = 'pem-v3';
const FILES = ['./','index.html','manifest.webmanifest','icon-192.png','icon-512.png','icon-maskable.png','apple-touch-icon.png','favicon.ico','favicon-64.png','img/logo-dorado.png','img/broken-heart-01.webp','img/broken-heart-02.webp','img/broken-heart-03.webp','img/broken-heart-04.webp','img/broken-heart-05.webp','img/broken-heart-06.webp','img/broken-heart-07.webp','img/broken-heart-08.webp','img/broken-heart-09.webp','img/broken-heart-10.webp','img/broken-heart-11.webp','img/broken-heart-12.webp','img/broken-heart-13.webp','img/broken-heart-14.webp','img/broken-heart-15.webp','img/broken-heart-16.webp','img/broken-heart-17.webp','img/broken-heart-18.webp','img/broken-heart-19.webp','img/broken-heart-20.webp','img/broken-heart-21.webp','img/broken-heart-22.webp','img/broken-heart-23.webp','img/broken-heart-24.webp','img/broken-heart-25.webp','img/broken-heart-26.webp','img/broken-heart-27.webp','img/broken-heart-28.webp','img/broken-heart-29.webp','img/broken-heart-30.webp','img/broken-heart-31.webp','img/broken-heart-32.webp','img/broken-heart-33.webp','img/broken-heart-34.webp','img/broken-heart-35.webp','img/broken-heart-36.webp','img/piratas-01.webp','img/piratas-02.webp','img/piratas-03.webp','img/piratas-04.webp','img/piratas-05.webp','img/piratas-06.webp','img/piratas-07.webp','img/so-what-01.webp','img/so-what-02.webp','img/so-what-03.webp','img/so-what-04.webp','img/so-what-05.webp','img/so-what-06.webp','img/so-what-07.webp','img/so-what-08.webp','img/so-what-09.webp','img/so-what-10.webp','img/so-what-11.webp','img/so-what-12.webp','img/so-what-13.webp','img/so-what-14.webp','img/so-what-15.webp','img/so-what-16.webp','img/so-what-17.webp','img/so-what-18.webp','img/so-what-19.webp','img/so-what-20.webp','img/so-what-21.webp','img/so-what-22.webp','img/so-what-23.webp','img/so-what-24.webp','img/so-what-25.webp','img/so-what-26.webp','img/so-what-27.webp','img/so-what-28.webp','img/so-what-29.webp','img/so-what-30.webp','img/so-what-31.webp','img/so-what-32.webp','img/so-what-33.webp','img/so-what-34.webp','img/so-what-35.webp','img/so-what-36.webp','img/superestrella-01.webp','img/superestrella-02.webp','img/superestrella-03.webp','img/superestrella-04.webp','img/superestrella-05.webp','img/superestrella-06.webp','img/superestrella-07.webp','img/superestrella-08.webp','img/superestrella-09.webp','img/superestrella-10.webp','img/superestrella-11.webp','img/superestrella-12.webp','img/superestrella-13.webp','img/superestrella-14.webp','img/superestrella-15.webp','img/superestrella-16.webp','img/superestrella-17.webp','img/superestrella-18.webp','img/superestrella-19.webp','img/superestrella-20.webp','img/superestrella-21.webp','img/superestrella-22.webp','img/superestrella-23.webp','img/superestrella-24.webp','img/superestrella-25.webp','img/superestrella-26.webp','img/superestrella-27.webp','img/superestrella-28.webp','img/superestrella-29.webp','img/superestrella-30.webp','img/superestrella-31.webp','img/superestrella-32.webp','img/superestrella-33.webp','img/superestrella-34.webp','img/superestrella-35.webp','img/superestrella-36.webp'];
self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(FILES)).then(() => self.skipWaiting()));
});
self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});
// Red primero para la página (así llegan las novedades); caché primero para imágenes y fuentes.
self.addEventListener('fetch', e => {
  const req = e.request;
  if (req.method !== 'GET') return;
  if (req.url.includes('/audio/')) return; // la música va directa (permite avanzar y retroceder)
  const isPage = req.mode === 'navigate' || req.url.endsWith('/index.html');
  if (isPage) {
    e.respondWith(fetch(req).then(r => { const copy = r.clone(); caches.open(CACHE).then(c => c.put('index.html', copy)); return r; })
      .catch(() => caches.match('index.html')));
    return;
  }
  e.respondWith(caches.match(req).then(hit => hit || fetch(req).then(r => {
    if (r.ok && (req.url.startsWith(self.location.origin) || req.url.includes('fonts.g'))) { const copy = r.clone(); caches.open(CACHE).then(c => c.put(req, copy)); }
    return r;
  })));
});
