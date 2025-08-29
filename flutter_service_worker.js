'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "cf4ab0eb1cf8738f091cd7b3ed1e7b6f",
"assets/AssetManifest.bin.json": "9e955101eeea6ea8f3c9ab53b0a0d082",
"assets/AssetManifest.json": "55d6ae18acaf7cdb7107b9ef6a0fbdae",
"assets/assets/fonts/BebasNeue-Regular.ttf": "b2b293064f557c41411aac04d6f6710d",
"assets/assets/fonts/GreatDayBoldPersonalUse-LBB3.ttf": "f6fc5fc93b5622cfd70321d1165119a1",
"assets/assets/fonts/GreatDayPersonalUse-14M2.ttf": "60bb254da767cc9c95448e22040ed608",
"assets/assets/fonts/SamsungOne-400.ttf": "4889669d08e2addfe6b66ca4a0297074",
"assets/assets/fonts/SamsungOne-700.ttf": "9880c5ab2b7844e855f285198c0bab05",
"assets/assets/fonts/SamsungSharpSans-Bold.ttf": "31af6b22017b69635b55ecd00339f923",
"assets/assets/icons/MathBridgeAcademy%2520-%2520Copy.jpg": "aa89c39b30dddfdf26db64fbc772f77c",
"assets/assets/icons/MathBridgeAcademy(1).jpg": "3afa3e31752b6b56bcf43f80ce5159fc",
"assets/assets/icons/MathBridgeAcademy.jpg": "3e0ad94fd1a8d292495d2472f3b250e7",
"assets/assets/images/ambitious-teenager-with-dark-skin-and-boycut-make-2023-11-27-05-22-49-utc.jpg": "508e8e5ee662dd8dcab114f29ad7e99a",
"assets/assets/images/back-to-school-conceptual-background-2023-11-27-05-37-00-utc.jpg": "b4979792ee9b122a8cdec9c12b802cdd",
"assets/assets/images/cute-pastel-tricolor-paint-e4samxa3hn9kx1be.jpg": "acc0eec5da8338830baf6e72df1a0bf0",
"assets/assets/images/desktop-organizer-with-school-stationary-and-offic-2023-11-27-04-51-43-utc.jpg": "cfa4a5ca857204adc4c475d0f63770ae",
"assets/assets/images/gathered-for-the-good-of-their-education-2023-11-27-05-09-57-utc.jpg": "3547ad5e6cd85080382ab87a0a70f66f",
"assets/assets/images/graphic-designer-working-from-home-using-laptop-an-2024-11-22-18-56-20-utc.jpg": "1db26155d7f52bfec1457d87028aa265",
"assets/assets/images/home_cover.png": "e027f228ec9b4e030d7ed5c6685402d9",
"assets/assets/images/home_cover_1.png": "f55416fd85f472a07cb3e53234d57a6b",
"assets/assets/images/IMG_20241126_161008_491.jpg": "fc54735a09a9e7b4ca150e13d5f1aa49",
"assets/assets/images/landingPageHeader.png": "e4ffe56172fde33ad4f8cbfb6b23b867",
"assets/assets/images/landingPageHeader.svg": "adb4c809701c96bcd7d70a38fdb129aa",
"assets/assets/images/landingPageHeader.webp": "d56bb7f7ab9ffc7914d359b39041def2",
"assets/assets/images/maintainance.gif": "1f4b15a962677279164a1d455855720b",
"assets/assets/images/Mathbridge1.jpg": "c443751efda5372f6711478b7f0d2b83",
"assets/assets/images/Mathbridge1.png": "4381e1e648e2df7b83e5231e27636c6f",
"assets/assets/images/portrait-of-pensive-african-american-freelancer-wi-2024-11-19-12-28-47-utc.jpg": "b0dc8ef39258800070a695a8093b3dfb",
"assets/assets/images/profile_background_removed.png": "89eb28256e1ec8fea5f635013bafc352",
"assets/assets/images/s5outcome1.webp": "12b8b2e838b5e1fa4f11fe276ad394a5",
"assets/assets/images/s5outcome2.webp": "dd7f4a2ca9ec986548e39726c4eedb5e",
"assets/assets/images/s5outcome3.webp": "378d780951c5bdff299432df610dc42c",
"assets/assets/images/section1_circle1.webp": "c046c98e4a9d4a52efd017f6721f9b25",
"assets/assets/images/section3.webp": "26bf8083e3958e1e7b21b26cf91d948d",
"assets/assets/images/section3_copy.webp": "953e328bdcafbb19fba78cb823fd50e8",
"assets/assets/images/section6.webp": "333b20f3aeec978a89d8851924dfc936",
"assets/assets/images/section6_copy.webp": "164c9873d5462ed37ef8399071864f54",
"assets/assets/images/section8.webp": "5c03629ddd39701ea4eb0f73f60abe6d",
"assets/assets/images/section9_copy.webp": "e6f6aa8f9095e04a15ecc5059db0c627",
"assets/assets/images/student_1.jpg": "508e8e5ee662dd8dcab114f29ad7e99a",
"assets/assets/images/student_2.jpg": "89eb28256e1ec8fea5f635013bafc352",
"assets/assets/images/student_3.jpg": "b0dc8ef39258800070a695a8093b3dfb",
"assets/assets/images/the-hand-that-is-written-with-the-white-chalk-and-2023-11-27-04-51-34-utc.jpg": "de19d2d8914db476f747e7f095d41c83",
"assets/assets/images/three-multiethnic-women-at-desk-having-lesson-2024-06-17-21-06-48-utc.jpg": "07fa96436c09c108a7d04781d4fe9027",
"assets/assets/images/young-african-american-woman-siting-at-cafe-workin-2023-11-27-04-55-45-utc.jpg": "4ae4068fdec971cc0a89fececae89c9a",
"assets/FontManifest.json": "e09ad8ee501200e13a439d6c1169435f",
"assets/fonts/MaterialIcons-Regular.otf": "1bd1ee7e3b9911ccfea574b7e01ae63e",
"assets/NOTICES": "8a1a808d16787d2ca4fd353db52d2e90",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/packages/material_design_icons_flutter/lib/fonts/materialdesignicons-webfont.ttf": "d10ac4ee5ebe8c8fff90505150ba2a76",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "728b2d477d9b8c14593d4f9b82b484f3",
"canvaskit/canvaskit.js.symbols": "bdcd3835edf8586b6d6edfce8749fb77",
"canvaskit/canvaskit.wasm": "7a3f4ae7d65fc1de6a6e7ddd3224bc93",
"canvaskit/chromium/canvaskit.js": "8191e843020c832c9cf8852a4b909d4c",
"canvaskit/chromium/canvaskit.js.symbols": "b61b5f4673c9698029fa0a746a9ad581",
"canvaskit/chromium/canvaskit.wasm": "f504de372e31c8031018a9ec0a9ef5f0",
"canvaskit/skwasm.js": "ea559890a088fe28b4ddf70e17e60052",
"canvaskit/skwasm.js.symbols": "e72c79950c8a8483d826a7f0560573a1",
"canvaskit/skwasm.wasm": "39dd80367a4e71582d234948adc521c0",
"favicon.png": "3e0ad94fd1a8d292495d2472f3b250e7",
"flutter.js": "83d881c1dbb6d6bcd6b42e274605b69c",
"flutter_bootstrap.js": "af0e6c06ab4270f8339c7c88cc8c84b0",
"icons/favicon.png": "3e0ad94fd1a8d292495d2472f3b250e7",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "729c2dbce02449664debbe42c550f537",
"/": "729c2dbce02449664debbe42c550f537",
"main.dart.js": "c32c14574045b9cf0bf2f13f26283c6a",
"manifest.json": "976841349ba856d0e3b27a2b31255481",
"version.json": "92b99fec9e1da8bbc97b4b3605bbc8c4"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
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
        // Claim client to enable caching on first launch
        self.clients.claim();
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
      // Claim client to enable caching on first launch
      self.clients.claim();
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
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
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
