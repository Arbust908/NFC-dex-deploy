if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return r[e]||(s=new Promise((async s=>{if("document"in self){const r=document.createElement("script");r.src=e,document.head.appendChild(r),r.onload=s}else importScripts(e),s()}))),s.then((()=>{if(!r[e])throw new Error(`Module ${e} didn’t register its module`);return r[e]}))},s=(s,r)=>{Promise.all(s.map(e)).then((e=>r(1===e.length?e[0]:e)))},r={require:Promise.resolve(s)};self.define=(s,a,i)=>{r[s]||(r[s]=Promise.resolve().then((()=>{let r={};const c={uri:location.origin+s.slice(1)};return Promise.all(a.map((s=>{switch(s){case"exports":return r;case"module":return c;default:return e(s)}}))).then((e=>{const s=i(...e);return r.default||(r.default=s),r}))})))}}define("./sw.js",["./workbox-8ce990e4"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"admin.html",revision:"0121a1b73ee68b17c0b554f0d96a29de"},{url:"admin/new_player.html",revision:"a9c853a3c45ff1dc33099cff0da8f0ee"},{url:"assets/404.489378e3.js",revision:"0c5ef3c932d65821e91eae34d640bcb0"},{url:"assets/app.23870aeb.css",revision:"709d4d24f4e16a68da21ba25534daed1"},{url:"assets/app.de13b508.js",revision:"d59a6b0075c52c74e572c7cd2d99acf6"},{url:"assets/dextest.062decce.js",revision:"a5ce915e49daa99325383d932e795792"},{url:"assets/dextest.d4b51d68.css",revision:"fa06ae3ba7cc91cda7764b7e1e9d4a73"},{url:"assets/home.fe131940.js",revision:"0f6ee83ac438a69e9e01485a8ee74758"},{url:"assets/index-text.9c5f6987.js",revision:"4e5d2966a3d756c5a74763008b153dd0"},{url:"assets/index-text.bcb6072a.css",revision:"3475188f1b5bb4cc5aaa6383a35bb787"},{url:"assets/index.01cb1d20.js",revision:"f392304b118c7140375fc58d61337187"},{url:"assets/new_player.88589f69.js",revision:"96c46a40d5ae5cde3a10541cc21490d8"},{url:"assets/read.270309e1.css",revision:"d93450a6e6f0decf7e630ab9144b7952"},{url:"assets/read.6f492f9f.js",revision:"37e718c88d73687ed47a65d056bc3bae"},{url:"assets/README.967413a4.js",revision:"2f0c22c36208cccec88c676f9d08db26"},{url:"assets/vendor.045344e6.js",revision:"c8d678feb54a63be449cf643eac36469"},{url:"assets/virtual_pwa-register.932ceed5.js",revision:"00c0b49622f8216843c2e814a0e5c842"},{url:"assets/write.00eb88aa.css",revision:"cf00a8eb607307cb6441558611dd49d6"},{url:"assets/write.e7960af3.js",revision:"235c381138484ed1cee512ba9bfeae40"},{url:"dextest.html",revision:"100f3156c07bde07b1a970481c665b6d"},{url:"index-text.html",revision:"5a9038db98b6f2e9930eb65645dcdab3"},{url:"index.html",revision:"285fe79d4ce224c10bcd3399c5205579"},{url:"read.html",revision:"c1b0171a90b25442d20df41b18849145"},{url:"readme.html",revision:"44dc562e3306fc9a44c171af885c38c4"},{url:"write.html",revision:"9def071024534cc2ce626b33bc167777"},{url:"favicon.svg",revision:"505fc25048cd39e43f4913849a1c62e0"},{url:"robots.txt",revision:"987497bfb623e1059632e5a607d56454"},{url:"safari-pinned-tab.svg",revision:"21a5632e21f7421e63e58f3a8a3e205e"},{url:"pwa-192x192.png",revision:"65f6c00ff3d88d8371df0480c1ba0272"},{url:"pwa-512x512.png",revision:"20a2db7d5040eb315e6acf49c6983de9"},{url:"manifest.webmanifest",revision:"37e8d18026b05432f623fc5efac2b4b1"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
