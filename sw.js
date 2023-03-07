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
				'Challenges.html',
				"contact.html",
				"courses.html",
				"css-quiz.html",
				"examples.html",
				"explanations.html",
				"how-to.html",
				"html-quiz.html",
				"js-quiz.html",
				"lessons.html",
				"new-channel.html",
				"new-website.html",
				"privacy-policy.html",
				"questions.html",
				"quiz.html",
				"support-me.html",
				"svg-quiz.html",
				"sw.js",
				"users-profile.html",
				"what-is-output-c.html",
				"what-is-output-cpp.html",
				"what-is-output-java.html",
				"what-is-output-py.html",
				"what-is-output-js.html",
				"what-is-output.html",
				"articles/advices-and-concepts-programming.html",
				"articles/best-apps-leran-programming.html",
				"articles/best-apps-pc-leran-programming.html",
				"articles/best-chnnel-to-learn-programming.html",
				"articles/best-website-to-learn-programming.html",
				"articles/command-line.html",
				"articles/learn-flex-box.html",
				"articles/learn-programming.html",
				"articles/learn.html",
				"articles/methods-learn-programming.html",
				"articles/placeholder.html",
				"articles/prgramming.html",
				"articles/print.html",
				"articles/tag-javascript.html",
				"articles/text-editor-vs-ide.html",
				"articles/vscode-shortcuts.html",
				"articles/waht-is-host.html",
				"articles/what-is-css.html",
				"articles/what-is-emmet.html",
				"articles/what-is-hosting.html",
				"articles/what-is-html.html",
				"articles/what-is-js.html",
				"articles/what-is-lazy-loading.html",
				"articles/what-is-type-coercion.html",
				"articles/what-is-TypeScript.html",
				"HowTo/how-to-create-navbar.html",
				"HowTo/how-to-create-soccer-game.html",
				"lessons/css/what-is-css.html",
				"lessons/css/what-is-css.html",
				"lessons/html/attribute-class.html",
				"lessons/html/attribute-id.html",
				"lessons/html/block-element.html",
				"lessons/html/embed-element.html",
				"lessons/html/entities-and-emoji.html",
				"lessons/html/formatting.html",
				"lessons/html/forms.html",
				"lessons/html/head-element.html",
				"lessons/html/heading-tags.html",
				"lessons/html/html-attributes.html",
				"lessons/html/html-basic.html",
				"lessons/html/html-css.html",
				"lessons/html/html-elements.html",
				"lessons/html/html-inputs.html",
				"lessons/html/html-none-semantic-element.html",
				"lessons/html/html-semantic-element.html",
				"lessons/html/iframe-element.html",
				"lessons/html/image-tag.html",
				"lessons/html/inline-element.html",
				"lessons/html/link-element.html",
				"lessons/html/list-element.html",
				"lessons/html/media-elements.html",
				"lessons/html/paragraph-tag.html",
				"lessons/html/script-element.html",
				"lessons/html/sembols.html",
				"lessons/html/syntax-html.html",
				"lessons/html/table-element.html",
				"lessons/html/what-is-html.html",
				"Explanations/cpp/get-ip-by-cpp.html",
				"Explanations/css/accent-color.html",
				"Explanations/css/centering-items.html",
				"Explanations/css/radial-gradient.html",
				"Explanations/css/repeating-linear-gradient.html",
				"Explanations/css/scrollbar.html",
				"Explanations/css/selection.html",
				"Explanations/css/user-select.html",
				"Explanations/css/underline-wavy.html",
				"Explanations/html/color-scheme.html",
				"Explanations/html/contenteditable-attr.html",
				"Explanations/html/download-attr.html",
				"Explanations/html/draggable-attr.html",
				"Explanations/html/facebook-view.html",
				"Explanations/html/lazy-loading.html",
				"Explanations/html/link-contacat.html",
				"Explanations/html/meta-refresh.html",
				"Explanations/html/poster-attr.html",
				"Explanations/html/spellcheck-attr.html",
				"Explanations/html/theme-color.html",
				"Explanations/html/translate-attr.html",
				"Explanations/html/twitter-view.html",
				"Explanations/python/gen-password-in-python.html",
				"Explanations/python/get-ip-by-pyhton.html",
				"Explanations/python/internet-speed-python.html",
				"Explanations/python/qrcode-python.html",
				"Explanations/python/send-whatsapp-by-pyhton.html",
				"Explanations/python/text-to-speech.html",
				"Explanations/python/upload-post-instagram-by-pyhton.html",
				"Explanations/js/api-share-by-js.html",
				"Explanations/js/audio-play.html",
				"Explanations/js/console-command.html",
				"Explanations/js/convert-number-to-string.html",
				"Explanations/js/convert-string-to-number.html",
				"Explanations/js/copyright-by-js.html",
				"Explanations/js/desing-mode.html",
				"Explanations/js/encode-string-number.html",
				"Explanations/js/filter-names.html",
				"Explanations/js/filter-string.html",
				"Explanations/js/find-el-by-js.html",
				"Explanations/js/gen-pass-by-js.html",
				"Explanations/js/get-page-url.html",
				"Explanations/js/last-item-in-array.html",
				"Explanations/js/make-qrcode-by-js.html",
				"Explanations/js/media-query-by-js.html",
				"Explanations/js/notf-by-js.html",
				"Explanations/js/number-floor.html",
				"Explanations/js/random-color.html",
				"Explanations/js/random-itme.html",
				"Explanations/js/redirect-by-js.html",
				"Explanations/js/time-now.html",
				'assets/css/style.min.css',
				'assets/css/highlight-theme-monokai-sublime.min.css',
				'assets/css/highlight.min-9.1.0.css',
				'assets/css/main.min.css',
				'assets/css/variables.min.css',
				'assets/js/highlight.min-9.1.0.js',
				'assets/js/main.min.js',
				'assets/vendor/bootstrap/css/bootstrap.min.css',
				'assets/vendor/bootstrap/js/bootstrap.bundle.js',
				'assets/vendor/bootstrap-icons/fonts/bootstrap-icons.woff',
				'assets/vendor/bootstrap-icons/fonts/bootstrap-icons.woff2',
				'assets/vendor/bootstrap-icons/bootstrap-icons.min.css',
				'assets/vendor/boxicons/css/boxicons.min.css',
				'assets/vendor/boxicons/fonts/boxicons.eot',
				'assets/vendor/boxicons/fonts/boxicons.svg',
				'assets/vendor/boxicons/fonts/boxicons.ttf',
				'assets/vendor/boxicons/fonts/boxicons.woff',
				'assets/vendor/boxicons/fonts/boxicons.woff2',
				'assets/vendor/remixicon/remixicon.eot',
				'assets/vendor/remixicon/remixicon.svg',
				'assets/vendor/remixicon/remixicon.symbol.svg',
				'assets/vendor/remixicon/remixicon.ttf',
				'assets/vendor/remixicon/remixicon.woff',
				'assets/vendor/remixicon/remixicon.woff2',
				'assets/img/1676057170247.gif',
				'assets/img/advices-and-concepts-programming.jpg',
				'assets/img/advise-course.jpg',
				'assets/img/ayoub.jpg',
				'assets/img/best-apps-leran-programming.jpg',
				'assets/img/best-apps-pc-leran-programming.jpg',
				'assets/img/best-chnnel-to-learn-programming.jpg',
				'assets/img/bootstrapcourse.jpg',
				'assets/img/c1.png',
				'assets/img/c10.png',
				'assets/img/c11.png',
				'assets/img/c2.png',
				'assets/img/c3.png',
				'assets/img/c4.png',
				'assets/img/c5.png',
				'assets/img/c6.png',
				'assets/img/c7.png',
				'assets/img/c8.png',
				'assets/img/c9.png',
				'assets/img/command-line.jpg',
				'assets/img/css-position-course.jpg',
				'assets/img/cssapp-course.jpg',
				'assets/img/csscourse.jpg',
				'assets/img/flex-course.jpg',
				'assets/img/floatcourse.jpg',
				'assets/img/gridcourse.jpg',
				'assets/img/html-course.jpg',
				'assets/img/html-emmet-course.jpg',
				'assets/img/jscourse.jpg',
				'assets/img/learn-best-website-to-learn-programming.jpg',
				'assets/img/learn-flex-box.jpg',
				'assets/img/learn.jpg',
				'assets/img/markdown-course.jpg',
				'assets/img/maskable_icon.png',
				'assets/img/methods-learn-programming.jpg',
				'assets/img/mix-course.jpg',
				'assets/img/placeholder.jpg',
				'assets/img/print.jpg',
				'assets/img/responsive-navbar-course.jpg',
				'assets/img/semantic.jpg',
				'assets/img/svg-course.jpg',
				'assets/img/tables.jpg',
				'assets/img/tag-javascript.jpg',
				'assets/img/text-editor-vs-ide.jpg',
				'assets/img/vs-vscode.jpg',
				'assets/img/vscode-shortcuts.jpg',
				'assets/img/vscodecourse.jpg',
				'assets/img/waht-is-host.jpg',
				'assets/img/what-is-css.jpg',
				'assets/img/what-is-emmet.jpg',
				'assets/img/what-is-hosting.jpg',
				'assets/img/what-is-html.jpg',
				'assets/img/what-is-js.jpg',
				'assets/img/what-is-lazy-loading.jpg',
				'assets/img/what-is-type-coercion.jpg',
				'assets/img/what-is-TypeScript.jpg'
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
