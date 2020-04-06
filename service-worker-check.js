if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/service-worker-check.js')
  .then(function(registration) {
    console.log('Registration successful, scope is:', registration.scope);
  })
  .catch(function(error) {
    console.log('Service worker registration failed, error:', error);
  });
}


/*if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('service-worker-main.js').then(function(Sregistration) {
    console.log('ServiceWorker registration successful with scope: ', registration.scope);
  }).catch(function(err) {
    console.log('ServiceWorker registration failed: ', err);
  });
}*/
