'use strict'

const CACHE_NAME = 'cache-v1';
// The files we want to cache
const resourceList = [
  '/',
  'index.html',

  'css/style.css',
  'css/fontawesome.css',
  'css/solid.css',

  'js/script.js',

  'img/favicon.png',
  'img/favicon-32x32.png',
  'img/favicon-64x64.png',
  'img/favicon-128x128.png',
  'img/hip-square.png',
  'img/poland.png',
  'img/uk.png',

  'sounds/scribble.mp3',

  'webfonts/fa-solid-900.ttf',
  'webfonts/fa-solid-900.woff2',
  'webfonts/FingerPaintRegular.ttf'
];

self.addEventListener('install', event => {
  event.waitUntil(caches.open(CACHE_NAME).then(cache => {
    return cache.addAll(resourceList);
  }));
});

function addToCache(cacheName, resourceList) {
  caches.open(cacheName).then(cache => {
    return cache.addAll(resourceList);
  });
}

self.addEventListener('fetch', event => {
  event.respondWith(caches.match(event.request).then(response => {
    return response || fetch(event.request);
  }));
});