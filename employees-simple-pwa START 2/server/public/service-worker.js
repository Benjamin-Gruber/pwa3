importScripts("/precache-manifest.dadd14fd436cd8c443e1326e62ffdaeb.js", "https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

/* global workbox */
if (workbox) {
  console.log(`Workbox is loaded`);
  workbox.setConfig({ debug: true });
  workbox.precaching.precacheAndRoute(self.__precacheManifest);
  workbox.routing.registerRoute(
    '/employees',
    new workbox.strategies.NetworkFirst({
      cacheName: 'roberts-cache',
    }),
  ); 
} else {
  console.log(`Workbox didn't load`);
}

