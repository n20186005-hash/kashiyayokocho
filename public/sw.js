/* 菓子屋横丁さんぽ手帖 - Service Worker（PWA オフライン対応） */
const CACHE_NAME = 'kashiya-yokocho-v1';
const PRECACHE_URLS = [
  '/',
  '/manifest.webmanifest',
  '/favicon.svg',
  '/icons/icon-192.png',
  '/icons/icon-512.png',
  '/icons/maskable-512.png',
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches
      .open(CACHE_NAME)
      .then((cache) => cache.addAll(PRECACHE_URLS))
      .catch(() => undefined)
      .then(() => self.skipWaiting()),
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((keys) => Promise.all(keys.filter((key) => key !== CACHE_NAME).map((key) => caches.delete(key))))
      .then(() => self.clients.claim()),
  );
});

const isAsset = (url) =>
  url.pathname.startsWith('/images/') ||
  url.pathname.startsWith('/icons/') ||
  url.pathname.startsWith('/_astro/') ||
  url.pathname.endsWith('.css') ||
  url.pathname.endsWith('.js') ||
  url.pathname.endsWith('.webp') ||
  url.pathname.endsWith('.jpg') ||
  url.pathname.endsWith('.svg');

self.addEventListener('fetch', (event) => {
  const request = event.request;
  if (request.method !== 'GET') return;

  const url = new URL(request.url);
  if (url.origin !== self.location.origin) return;

  // ナビゲーション：ネットワーク優先、失敗時はキャッシュ（オフラインでも閲覧可能にする）
  if (request.mode === 'navigate') {
    event.respondWith(
      fetch(request)
        .then((response) => {
          const copy = response.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put(request, copy)).catch(() => undefined);
          return response;
        })
        .catch(() =>
          caches.match(request).then((cached) => cached || caches.match('/') || Response.error()),
        ),
    );
    return;
  }

  // 静的アセット：キャッシュ優先 + 裏で更新
  if (isAsset(url)) {
    event.respondWith(
      caches.match(request).then((cached) => {
        const network = fetch(request)
          .then((response) => {
            if (response && response.status === 200) {
              const copy = response.clone();
              caches.open(CACHE_NAME).then((cache) => cache.put(request, copy)).catch(() => undefined);
            }
            return response;
          })
          .catch(() => cached);
        return cached || network;
      }),
    );
  }
});
