const CACHE_NAME = "flames-app-v2";

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll([
        "./",
        "./index.html"
      ]);
    })
  );
});