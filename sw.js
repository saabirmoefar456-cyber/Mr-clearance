// Mr Clearance service worker — enables "Add to Home Screen" / PWA install
// and a basic offline fallback.
//
// Deliberately network-first: whenever the phone has a connection, the
// live site always wins. The cache only kicks in when there's genuinely
// no connection at all, so a redeploy is never masked by a stale cached
// page — that's the one thing this must never do on a store whose admin
// edits products/prices/deals live.
var CACHE_NAME = 'mrc-cache-v1';
var APP_SHELL = ['/', '/index.html', '/style.css'];

self.addEventListener('install', function(event) {
  self.skipWaiting();
  event.waitUntil(
    caches.open(CACHE_NAME).then(function(cache) { return cache.addAll(APP_SHELL); }).catch(function(){})
  );
});

self.addEventListener('activate', function(event) {
  event.waitUntil(
    caches.keys().then(function(names) {
      return Promise.all(names.filter(function(n){ return n !== CACHE_NAME; }).map(function(n){ return caches.delete(n); }));
    }).then(function(){ return self.clients.claim(); })
  );
});

self.addEventListener('fetch', function(event) {
  var req = event.request;
  // Only ever handle same-origin GET page/asset requests — Firebase/API
  // calls, POSTs, and cross-origin requests (fonts, CDN scripts) always
  // go straight to the network, untouched.
  var url;
  try { url = new URL(req.url); } catch(e) { return; }
  if (req.method !== 'GET' || url.origin !== self.location.origin) return;

  event.respondWith(
    fetch(req).then(function(res) {
      var copy = res.clone();
      caches.open(CACHE_NAME).then(function(cache){ cache.put(req, copy); }).catch(function(){});
      return res;
    }).catch(function() {
      return caches.match(req).then(function(cached){ return cached || caches.match('/index.html'); });
    })
  );
});
