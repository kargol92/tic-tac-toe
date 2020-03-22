if (isServiceWorkersSupport) {
    console.log('Will service worker register?');
    navigator.serviceWorker.register(PATH).then(function () {
        console.log("Yes it did.");
    }).catch(function (err) {
        console.log("No it didn't. This happened: ", err)
    });
}

/*if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('service-worker-main.js').then(function(Sregistration) {
    console.log('ServiceWorker registration successful with scope: ', registration.scope);
  }).catch(function(err) {
    console.log('ServiceWorker registration failed: ', err);
  });
}*/
