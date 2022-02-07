importScripts("/precache-manifest.0ecfcce36af9a7ec76c1517f73016dc5.js", "https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

/* global workbox */
if (workbox) {
  console.log(`Workbox is loaded`);
  workbox.setConfig({ debug: true });
  workbox.precaching.precacheAndRoute(self.__precacheManifest);
  workbox.routing.registerRoute(
    '/employees',
    new workbox.strategies.CacheFirst({
      cacheName: 'roberts-cache',
    }),
  );
} else {
  console.log(`Workbox didn't load`);
}

workbox.routing.registerRoute(
  new RegExp('/images/.*.jpg'),
  new workbox.strategies.StaleWhileRevalidate({
    cacheName: 'roberts-image-cache',
  }),
);

