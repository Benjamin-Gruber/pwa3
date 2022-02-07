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
