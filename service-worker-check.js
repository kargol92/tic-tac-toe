if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('service-worker-main.js').then(function(Sregistration) {
    console.log('ServiceWorker registration successful with scope: ',    registration.scope);
  }).catch(function(err) {
    console.log('ServiceWorker registration failed: ', err);
  });
}
