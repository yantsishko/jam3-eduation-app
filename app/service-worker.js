  // const CACHE = "cache-and-update-v1";
  // const myCache = ["./main.js", "./index.html", "./manifest.json"];

  // self.addEventListener("install", event => {
  //   event.waitUntil(caches.open(CACHE).then(cache => cache.addAll(myCache)));
  // });

  // self.addEventListener("fetch", function(event) {
  //   event.respondWith(fromCache(event.request));
  //   event.waitUntil(update(event.request));
  // });

  // function fromCache(request) {
  //   return caches
  //     .open(CACHE)
  //     .then(cache =>
  //       cache
  //         .match(request)
  //         .then(matching => matching || Promise.reject("no-match"))
  //     );
  // }

  // function update(request) {
  //   return caches
  //     .open(CACHE)
  //     .then(cache =>
  //       fetch(request).then(response => cache.put(request, response))
  //     );
  // }
