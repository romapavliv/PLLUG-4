self.addEventListener('install', function(e) {
    e.waitUntil(
        caches.open('v1').then(function(cache) {
            return cache.addAll([
                './index.html',
                './scripts.js',
                './styles.css',
                './img/Client.svg',
                './img/JAVA.svg',
                './img/Pizza_Pepperoni.svg',
                './img/bitcoin.svg',
                './img/goforlinux.svg',
                './img/hello_world_label.svg',
                './img/remi_inconnu_Trash_1.svg',
                './sw.js'
            ]);
        })
    );
});

self.addEventListener('fetch', function(event) {
    console.log(event.request.url);

    event.respondWith(
        caches.match(event.request).then(function(response) {
            return response || fetch(event.request);
        })
    );
});