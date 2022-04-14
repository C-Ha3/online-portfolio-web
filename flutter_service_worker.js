'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "70808ac8eb30175dcf11091fcc577010",
"assets/assets/3d-bracket.png": "1fb87c856aa24b15ea754629275d5569",
"assets/assets/3d-gearbox.png": "ff5890325a9701d72b3be3b2d15cbc46",
"assets/assets/3d-mounting-hub.png": "b6f17c3bcd9400f0592f9674715a5c82",
"assets/assets/aboutme-photo1.jpg": "fb61daed9bc5eb0e0c448dc798f29f13",
"assets/assets/aboutme-photo2-og.jpg": "cb42833bb0995ca3c9ea6a714dc68e4a",
"assets/assets/aboutme-photo2.jpg": "38d4ee8eee5bb35aa94e3ee5c2880212",
"assets/assets/aboutme-photo3.jpg": "ce0aeec38ebf32c4c708732cc29678a7",
"assets/assets/aboutme-photo3.png": "4d2c14e7b4781a412a2122b0549a293b",
"assets/assets/agile-avatar.jpg": "299c51cb58a04f52266eb7b0fd09d2a4",
"assets/assets/agile-manifesto.png": "04f6023b180ef61d199d7e82235eee73",
"assets/assets/agile-methodology.jpg": "27906ec39dc29497ee7b49bad4095eda",
"assets/assets/agile-methodology.png": "225e3dcdfad5b147d662e5a232732439",
"assets/assets/cad-framr.jpg": "749285d76127f4bed1c3e841039a239b",
"assets/assets/cad-logo.jpg": "63900eae3d5e5ee504047da09dabebda",
"assets/assets/CAD_Design.jpg": "1ef93e16192d20cba8e2a73d51468684",
"assets/assets/charleshaCV.pdf": "f33ff8dbe332ad45182df6a48765e945",
"assets/assets/curriculum-vitae.png": "34d219c88ee606101952f53533f10a3b",
"assets/assets/CV.jpg": "8df8401be823c721ace2cce265e321fc",
"assets/assets/drawing-gearbox-frame.png": "019c552e259e6ac379ae89a9b5874b8e",
"assets/assets/drawing-gearbox.png": "59f2949379699b255decb3d3f39111da",
"assets/assets/drawing-mounting-hub.png": "8a8eb27b09fe6c899b94b558b03aa56d",
"assets/assets/embedded-dev.jpg": "7d83583c3e08d1518b0d20e701bebb51",
"assets/assets/embedded-development.jpg": "4c0103cd0082163262626320aa1beab1",
"assets/assets/engineer-wallpaper.jpg": "8508c01a364f37c00d87f1e540318cfb",
"assets/assets/engines-wallpaper.jpg": "b1ffb569e9ea03d9b9df8a9adcaa3edb",
"assets/assets/engines-wallpaper.png": "b97acbd50361b509c6bb5f392873504b",
"assets/assets/kanban.jpg": "15a95ebe2141d896c5a8b7852a07885b",
"assets/assets/management-banner.jpg": "9734dc5142724c350a3a442f85247edc",
"assets/assets/management-depends.png": "f5a529c538e756d649b1381d4a196dd9",
"assets/assets/management-it-depends.jpg": "a2dd3b21f6baa0ca9f637cc11d5648b4",
"assets/assets/management-people.jpg": "b69589e4e5d40df688fa7b4e5904ba0d",
"assets/assets/management-photo1.jpg": "e47062787fe1ed5cc367c91fa05b32bb",
"assets/assets/management-scrum.jpg": "94b390bd2003803e2c3eaa8e46789aab",
"assets/assets/management-scrum.png": "d933a7ca0b6a828064280dacd65dcc04",
"assets/assets/management.jpg": "64a7c60fce6d34805f006040d61b9dc8",
"assets/assets/mobile-development.jpg": "d198ed2aaad8c3d933b99283a6b4deab",
"assets/assets/Professional_Avatar.jpeg": "e8f89939d087b26610325f86ed125156",
"assets/assets/rive/water-home.riv": "e7aeb9484553b5c1aa439cc98aea903a",
"assets/assets/sample-2.pdf": "94a2cea91cbf7c2ffdf9673432083809",
"assets/assets/sample.pdf": "4b41a3475132bd861b30a878e30aa56a",
"assets/assets/software-dev.jpg": "25ccab206ecd11f347d9c307305a204f",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "7e7a6cccddf6d7b20012a548461d5d81",
"assets/NOTICES": "2550db81abd1dee55340028d9cb2154e",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "98ebc8c382eb98639ed17a6944be9d78",
"/": "98ebc8c382eb98639ed17a6944be9d78",
"main.dart.js": "f523a9e0fa7e1132d944f97587cd7cfc",
"manifest.json": "a22a02631632bc4152552776a802e7ac",
"version.json": "4f60fb18bbf098f25dd5b246066c9c42"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
