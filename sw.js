self.addEventListener('fetch', (event) => {
    // Standard pass-through for network requests
    event.respondWith(fetch(event.request));
});
