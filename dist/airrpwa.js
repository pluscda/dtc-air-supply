//20191014 Bruce Chuang
//1.這個物件 會註冊到記憶體裡 作相關動作
//2.監聽 service worker install  事件
//3.監聽 service worker activate 事件 
//4.監聽 request 要求，並回應相對應動作
//------------------------------------------------------
//註冊 事件
//這邊要把離線動作加入到 caches 裡
//當網站要離線存取時

var tempName = 'epairv13';

//Read cache name Bruce Chuang
//Vue 會用到的發佈檔案 
self.addEventListener('install', function(event) {
    event.waitUntil(
        caches.open(tempName).then(function(cache) {
            cache.addAll([
                'index.html',
                './',
                'app.js',
                'testvalue.json',
                'manifest.json',
                'favicon.ico',
                'img/icons/action-icon-ios.png',
                'img/icons/android-chrome-512x512.png',
                'img/icons/android-chrome-192x192.png',
                'fonts/materialdesignicons-webfont.043774d1.woff',
                'fonts/materialdesignicons-webfont.27cb2cf1.woff2',
                'fonts/materialdesignicons-webfont.9bfeb985.ttf',
                'js/app.cdc00a4d.js',
                'js/chunk-vendors.0ed7c405.js',
                'css/app.b49c1248.css',
                'css/chunk-vendors.4616b7c6.css'
            ]);
        })
        .then(self.skipWaiting())
    );
});
//------------------------------------------------------
//service worker 啟動事件

self.addEventListener('activate', function(event) {
    console.log('activated!')

    event.waitUntil(
        caches.keys().then(function(cacheNames) {

            console.log(cacheNames);

            return Promise.all(

                cacheNames.filter(function(cacheName) {

                    return cacheName.startsWith('epair') && cacheName != tempName;

                }).map(function(cacheName) {

                    return caches.delete(cacheName);

                })
            );

        }).then(() => self.clients.claim())
    );
});
//------------------------------------------------------
//server worker 取得要求事件
self.addEventListener('fetch', function(event) {


    event.respondWith(
        caches.match(event.request).then(function(response) {

            if (response !== undefined) {

                return response;

            } else {

                //20191031 去要求捉住 response 加入 caches Bruce Chuang
                return fetch(event.request).then(function(response) {

                    //let responseClone = response.clone();
                    //20191029 打開 caches Bruce Chuang
                    //caches.open(tempName).then(function(cache) {

                    //20191029 目前沒有要加入 caches, 所以暫時關掉 Bruce Chuang 
                    //cache.put(event.request, responseClone);
                    //});

                    return response;

                }).catch(function(error) {

                    //20191101 Bruce Chuang
                    //回應一個空的值給主程式,為了離線動作,GET 
                    if (event.request.url.indexOf("GetAirCraft.ashx") != -1 &&
                        event.request.method.indexOf("GET") != -1) {
                        return caches.match('testvalue.json');
                    }

                });

            }


        }));

});
//------------------------------------------------------