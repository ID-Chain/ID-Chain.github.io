/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "2f9ae5db288b57f2e7fc036e4271b51b"
  },
  {
    "url": "assets/css/0.styles.55773119.css",
    "revision": "e54971a18ff5681371080fe1a1522ff6"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.f8f97ce2.js",
    "revision": "146e6a05d0344088c1fcb2ed252787c7"
  },
  {
    "url": "assets/js/2.b841b184.js",
    "revision": "ebc3165d5989d35f2069a059c1e6c101"
  },
  {
    "url": "assets/js/3.cde7280c.js",
    "revision": "a4d070b6b4294d42a55fc20129edc06f"
  },
  {
    "url": "assets/js/4.5692eba5.js",
    "revision": "3076d07064f356ac1ca8512a90595fc3"
  },
  {
    "url": "assets/js/5.96f867b3.js",
    "revision": "1cb2fd556a3971c8fbe9638adf583834"
  },
  {
    "url": "assets/js/6.aa02cfd1.js",
    "revision": "0b848a956dced5419e645314b508ddb5"
  },
  {
    "url": "assets/js/7.45f6048f.js",
    "revision": "71206fb6ec52ce56ed098a5431dbf8d6"
  },
  {
    "url": "assets/js/8.e96bcf99.js",
    "revision": "e6096cf599af2f169c2a20bde02c9221"
  },
  {
    "url": "assets/js/9.7afd648e.js",
    "revision": "7927308c93d29f59ef20d038e3f269f0"
  },
  {
    "url": "assets/js/app.6384da20.js",
    "revision": "b7fc5e0aade5f3697897a7c7dfb61a51"
  },
  {
    "url": "general/getting-started.html",
    "revision": "bfc87c1e8face735a0e4af75e530c733"
  },
  {
    "url": "general/index.html",
    "revision": "4a8faa5c3a52fb323dba0894eec61255"
  },
  {
    "url": "general/sovrin.html",
    "revision": "ac6d790d2d64b6e9ae63ff8c175e6a83"
  },
  {
    "url": "general/use-case.html",
    "revision": "658909be2d3f3017e20624bf791d4d54"
  },
  {
    "url": "icons/android-chrome-192x192.png",
    "revision": "5221119dd8bf55a730cabd840560094e"
  },
  {
    "url": "icons/android-chrome-256x256.png",
    "revision": "36300f40a7eca21364e0521ac20005ad"
  },
  {
    "url": "icons/apple-touch-icon.png",
    "revision": "da03ac98f58f5ddf19291e11faaf08f4"
  },
  {
    "url": "icons/favicon-16x16.png",
    "revision": "6bb3836f42930d22502bbeed1ac43654"
  },
  {
    "url": "icons/favicon-32x32.png",
    "revision": "d7b8b63d529790b5cf4fbccd8f0e9c6a"
  },
  {
    "url": "icons/mstile-150x150.png",
    "revision": "b7e161b6a1ae626f4455ef95bf3901e6"
  },
  {
    "url": "icons/safari-pinned-tab.svg",
    "revision": "55cc5d8a7da57efa37bd44f58987cfa4"
  },
  {
    "url": "index.html",
    "revision": "3348c491cc82c78475981fe22310480d"
  },
  {
    "url": "square-logo300x300.png",
    "revision": "298271cd27d7e88e8a4edc8fc3c58e7c"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
