const cacheName = 'my-pwa-cache-v1';

// Install the Service Worker and cache the app shell
self.addEventListener('install', event => {
	event.waitUntil(
		caches.open(cacheName).then(cache => {
			return cache.addAll([
				'/',
				'index.html',
				'home.html',
				'about-channel.html',
				'about-website.html',
				'about.html',
				'assets/css/style.min.css',
			]);
		})
	);
});

// Intercept network requests and return cached assets if available
self.addEventListener('fetch', event => {
	event.respondWith(
		caches.match(event.request).then(response => {
			return response || fetch(event.request);
		})
	);
});

// Update Service Worker and delete old caches
self.addEventListener('activate', event => {
	event.waitUntil(
		caches.keys().then(cacheNames => {
			return Promise.all(
				cacheNames
					.filter(cache => {
						return cache.startsWith('my-pwa-cache-') && cache !== cacheName;
					})
					.map(cache => {
						return caches.delete(cache);
					})
			);
		})
	);
});

// Prompt user to add app to home screen
self.addEventListener('beforeinstallprompt', event => {
	event.preventDefault();
	const promptEvent = event;
	const installButton = document.getElementById('install-button');

	installButton.style.display = 'block';

	installButton.addEventListener('click', event => {
		installButton.style.display = 'none';
		promptEvent.prompt();
		promptEvent.userChoice.then(result => {
			if (result.outcome === 'accepted') {
				console.log('App added to home screen');
			} else {
				console.log('App not added to home screen');
			}
		});
	});
});
