"use strict";var precacheConfig=[["/index.html","85eb3ec3485da07e9d5ef13ea0f317f4"],["/static/css/main.728a46b8.css","1351167fffe8cea5bc996cdce75cf490"],["/static/js/main.80b2a8cf.js","216507fe448c72851c1796ca16dd0dbd"],["/static/media/DownloadCV.edb4c829.svg","edb4c8297c35255e018e23ab9635b99b"],["/static/media/Project_Image_1.5a6b2c9d.png","5a6b2c9d90f21f1b8de6ad194204da32"],["/static/media/Project_Image_2.2d33d2cb.png","2d33d2cbc47da59e55644c37b27a3fdc"],["/static/media/Project_Image_3.8d277ff5.png","8d277ff58a57f02090f612a91c2bd512"],["/static/media/SanFranciscoDisplay-Black.4ac1aa93.otf","4ac1aa9324ac7dc3513d26a25b08a5f6"],["/static/media/SanFranciscoDisplay-Bold.e20ccd66.otf","e20ccd6628fff524b25855d6f1c41618"],["/static/media/SanFranciscoDisplay-Heavy.25ac2ffc.otf","25ac2ffc0cd980aee28ca5e6806c5382"],["/static/media/SanFranciscoDisplay-Light.a2fe8821.otf","a2fe88213c3ba873e4b1cf386b8a84ad"],["/static/media/SanFranciscoDisplay-Medium.31a73925.otf","31a73925d4528af589867b7bc28047d3"],["/static/media/SanFranciscoDisplay-Regular.bcec8bf6.otf","bcec8bf6fcf5fd05c8c90757410d00f5"],["/static/media/SanFranciscoDisplay-Semibold.621bc42a.otf","621bc42aa20c0d88361c1d10e752a8ca"],["/static/media/SanFranciscoDisplay-Thin.50f8a45f.otf","50f8a45fc11075287c79c4bf8fdec2b1"],["/static/media/SanFranciscoDisplay-Ultralight.8c8b1682.otf","8c8b1682f4bb3ef021395339c0a67edc"],["/static/media/bg_c1.b34cce03.svg","b34cce035b4efe1a19b36b64b5c7d8d8"],["/static/media/bg_c10.82664d41.svg","82664d41bb938d17e791122b72b12bcf"],["/static/media/bg_c2.74b37c18.svg","74b37c186ce789e3934023a6c551c4ee"],["/static/media/bg_c3.1e90b476.svg","1e90b476d83052c42e7d3032c53f1b46"],["/static/media/bg_c4.e7bd5752.svg","e7bd575207f88e986594f7c206995a78"],["/static/media/bg_c5.89d36682.svg","89d3668206f83c2dea08e42260f5bcdf"],["/static/media/bg_c6.d734faec.svg","d734faec75af7fa92fcc42df35711019"],["/static/media/bg_c7.ebab3450.svg","ebab3450cf8690a201fa6276b5b266df"],["/static/media/bg_c8.5cd2741c.svg","5cd2741ce66ad01e642cc71a99292896"],["/static/media/bg_c9.8f14f34a.svg","8f14f34afd41912a9d5284271e916c6d"],["/static/media/bg_s0.f8c4a3f5.svg","f8c4a3f50dc0587bae13e2829c1cef4d"],["/static/media/bg_s1.12ecd144.svg","12ecd144619a773d20f25def1964963a"],["/static/media/bg_s2.97a9167c.svg","97a9167c3af0e8823b18b87523f7c66a"],["/static/media/bg_s3.9e54db4c.svg","9e54db4c566d63d99e27244df525d12d"],["/static/media/bg_s4.74278d96.svg","74278d96765cf8425bdf7df7c17936ee"],["/static/media/brand-icons.13db00b7.eot","13db00b7a34fee4d819ab7f9838cc428"],["/static/media/brand-icons.a046592b.woff","a046592bac8f2fd96e994733faf3858c"],["/static/media/brand-icons.a1a749e8.svg","a1a749e89f578a49306ec2b055c073da"],["/static/media/brand-icons.c5ebe0b3.ttf","c5ebe0b32dc1b5cc449a76c4204d13bb"],["/static/media/brand-icons.e8c322de.woff2","e8c322de9658cbeb8a774b6624167c2c"],["/static/media/bubble_tail.a5925ce7.svg","a5925ce7ba994b36e94cda1040ed1e05"],["/static/media/bubble_tail_R.ecb09e82.svg","ecb09e828ea7c2d7430cbd3181f40efc"],["/static/media/flags.9c74e172.png","9c74e172f87984c48ddf5c8108cabe67"],["/static/media/icons.0ab54153.woff2","0ab54153eeeca0ce03978cc463b257f7"],["/static/media/icons.8e3c7f55.eot","8e3c7f5520f5ae906c6cf6d7f3ddcd19"],["/static/media/icons.962a1bf3.svg","962a1bf31c081691065fe333d9fa8105"],["/static/media/icons.b87b9ba5.ttf","b87b9ba532ace76ae9f6edfe9f72ded2"],["/static/media/icons.faff9214.woff","faff92145777a3cbaf8e7367b4807987"],["/static/media/outline-icons.701ae6ab.eot","701ae6abd4719e9c2ada3535a497b341"],["/static/media/outline-icons.82f60bd0.svg","82f60bd0b94a1ed68b1e6e309ce2e8c3"],["/static/media/outline-icons.ad97afd3.ttf","ad97afd3337e8cda302d10ff5a4026b8"],["/static/media/outline-icons.cd6c777f.woff2","cd6c777f1945164224dee082abaea03a"],["/static/media/outline-icons.ef60a4f6.woff","ef60a4f6c25ef7f39f2d25a748dbecfe"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){var c=new URL(e);return"/"===c.pathname.slice(-1)&&(c.pathname+=a),c.toString()},cleanResponse=function(a){return a.redirected?("body"in a?Promise.resolve(a.body):a.blob()).then(function(e){return new Response(e,{headers:a.headers,status:a.status,statusText:a.statusText})}):Promise.resolve(a)},createCacheKey=function(e,a,c,t){var i=new URL(e);return t&&i.pathname.match(t)||(i.search+=(i.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(c)),i.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var c=new URL(a).pathname;return e.some(function(e){return c.match(e)})},stripIgnoredUrlParameters=function(e,c){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(a){return c.every(function(e){return!e.test(a[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var a=e[0],c=e[1],t=new URL(a,self.location),i=createCacheKey(t,hashParamName,c,/\.\w{8}\./);return[t.toString(),i]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(t){return setOfCachedUrls(t).then(function(c){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!c.has(a)){var e=new Request(a,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+a+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return t.put(a,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var c=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(a){return a.keys().then(function(e){return Promise.all(e.map(function(e){if(!c.has(e.url))return a.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(a){if("GET"===a.request.method){var e,c=stripIgnoredUrlParameters(a.request.url,ignoreUrlParametersMatching),t="index.html";(e=urlsToCacheKeys.has(c))||(c=addDirectoryIndex(c,t),e=urlsToCacheKeys.has(c));var i="/index.html";!e&&"navigate"===a.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],a.request.url)&&(c=new URL(i,self.location).toString(),e=urlsToCacheKeys.has(c)),e&&a.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(c)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',a.request.url,e),fetch(a.request)}))}});