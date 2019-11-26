//20191014 Bruce Chuang
//1.這個物件 會註冊到記憶體裡 作相關動作
//2.監聽 service worker install  事件
//3.監聽 service worker activate 事件 
//4.監聽 request 要求，並回應相對應動作
//------------------------------------------------------
//註冊 事件
//這邊要把離線動作加入到 caches 裡
//當網站要離線存取時

//Read cache name Bruce Chuang
//Vue 會用到的發佈檔案 
self.addEventListener('install', function(event) {
    event.waitUntil(
        caches.open('epairv4').then(function(cache) {
            return cache.addAll([
                '/',
                'app.js',
                'index.html',
                'manifest.json',
                'fonts/*.*',
                'img/icons/*.*',
                'fonts/materialdesignicons-webfont.7ec5dab7.woff2',
                'img/icons/android-chrome-192x192.png',
                'dist/**.js'
            ]);
        })
    );
});
//------------------------------------------------------
//service worker 啟動事件

self.addEventListener('activate', function(event) {
    console.log('activated!')
});
//------------------------------------------------------
//server worker 取得要求事件
self.addEventListener('fetch', function(event) {

    console.log(event);

    event.respondWith(caches.match(event.request).then(function(response) {
        // caches.match() always resolves
        // but in case of success response will have value
        if (response !== undefined) {

            /*
     return new Response('<p>Hello from your friendly neighbourhood service worker!</p>', {
          headers: { 'Content-Type': 'text/html' }
        });
        */

            return response;
        } else {

            return fetch(event.request).then(function(response) {

                // response may be used only once
                // we need to save clone to put one copy in cache
                // and serve second one
                let responseClone = response.clone();


                //Read cache name Bruce Chuang
                caches.open('epairv4').then(function(cache) {

                    //console.log("read cache");
                    //console.log(cache);

                    cache.put(event.request, responseClone);
                });
                return response;
            }).catch(function() {
                return caches.match('/sw-test/gallery/myLittleVader.jpg');
            });


        }
    }));
});
//------------------------------------------------------