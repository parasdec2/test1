// var CACHE = 'offline-fallback';

 
// self.addEventListener('install', function(evt) {
//   console.log('The service worker is being installed.');

 
//   evt.waitUntil(precache().then(function () {

 
//     return self.skipWaiting();
//   }));
// });

// self.addEventListener('activate', function (evt) {

 
//   evt.waitUntil(self.clients.claim());
// });

// self.addEventListener('fetch', function(evt) {
//   console.log('The service worker is serving the asset.');

 
//   evt.respondWith(networkOrCache(evt.request).catch(function () {
//     return useFallback();
//   }));
// });

 
// function precache() {
//   return caches.open(CACHE).then(function (cache) {
//     return cache.addAll([
//       './controlled.html'
//     ]);
//   });
// }

 
// function networkOrCache(request) {
//   return fetch(request).then(function (response) {
//     return response.ok ? response : fromCache(request);
//   })
//   .catch(function () {
//     return fromCache(request);
//   });
// }

 
// var FALLBACK =
//     '<svg xmlns="http://www.w3.org/2000/svg" width="200" height="180" stroke-linejoin="round">' +
//     '  <path stroke="#DDD" stroke-width="25" d="M99,18 15,162H183z"/>' +
//     '  <path stroke-width="17" fill="#FFF" d="M99,18 15,162H183z" stroke="#eee"/>' +
//     '  <path d="M91,70a9,9 0 0,1 18,0l-5,50a4,4 0 0,1-8,0z" fill="#aaa"/>' +
//     '  <circle cy="138" r="9" cx="100" fill="#aaa"/>' +
//     '</svg>';

 
// function useFallback() {
//   return Promise.resolve(new Response(FALLBACK, { headers: {
//     'Content-Type': 'image/svg+xml'
//   }}));
// }

 
// function fromCache(request) {
//   return caches.open(CACHE).then(function (cache) {
//     return cache.match(request).then(function (matching) {
//       return matching || Promise.reject('request-not-in-cache');
//     });
//   });
// }













var CACHE = 'cache-and-update';

 
self.addEventListener('install', function(evt) {
  console.log('The service worker is being installed.');

 
  evt.waitUntil(precache());
});

 
self.addEventListener('fetch', function(evt) {
  console.log('The service worker is serving the asset.');
 
  evt.respondWith(fromCache(evt.request));

 
  evt.waitUntil(update(evt.request));
});
 
function precache() {
  return caches.open(CACHE).then(function (cache) {
    return cache.addAll([
      // './controlled.html',
      // './asset',
      'assets/images',
      'static',
      // 'static/js/2.12c759e8.chunk.js',
      // 'static/js/main.dbdaf625.chunk.js',
      // 'static/css/2.6fdb0af8.chunk.css',
      // 'static/css/main.68952858.chunk.css',
      'precache-manifest.7a4c0ffeeccc1a582bd0a9bc5abdc2e4.js',
      // 'static/media/fontawesome-webfont.912ec66d.svg',
      // 'static/media/fontawesome-webfont.674f50d2.eot',

    ]);
  });
}
 
function fromCache(request) {
  return caches.open(CACHE).then(function (cache) {
    return cache.match(request).then(function (matching) {
      return matching || Promise.reject('no-match');
    });
  });
}

 
function update(request) {
  return caches.open(CACHE).then(function (cache) {
    return fetch(request).then(function (response) {
      return cache.put(request, response);
    });
  });
}