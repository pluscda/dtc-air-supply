//20191014 Bruce Chuang
//1.假如瀏覽器支援，就會註冊 service Worker 
//2.註冊自己寫的 sw.js 
//3.監聽視件       

window.addEventListener('load', () => {

    if ('serviceWorker' in navigator) {
        // navigator.serviceWorker.register('airrpwa.js', { scope: './' }).then(function(reg) {
        navigator.serviceWorker.register('airrpwa.js').then(function(reg) {
            if (reg.installing) {
                //reg.update();
                console.log('Airre Service worker installing');

            } else if (reg.waiting) {

                console.log('Airre Service worker waiting');

            } else if (reg.active) {

                console.log('Airre Service worker active');

            }

        }).catch(function(error) {
            // registration failed
            console.log('Registration failed with ' + error);

        });
    }

})

/*
  window.addEventListener('beforeinstallprompt', function(e) {
       e.userChoice.then(function(choiceResult) {
           if(choiceResult.outcome ==='dismissed') {
              console.log('user取消安裝至桌面');
           }
           else {
              console.log('user接受安裝至桌面');
           }
       });
  });
  */
/*
let deferredPrompt;

window.addEventListener('beforeinstallprompt', function(event) {
    // Prevent Chrome 67 and earlier from automatically showing the prompt
    e.preventDefault();
    // Stash the event so it can be triggered later.
    deferredPrompt = e;
});

// Installation must be done by a user gesture! Here, the button click
btnAdd.addEventListener('click', (e) => {
    // hide our user interface that shows our A2HS button
    btnAdd.style.display = 'none';
    // Show the prompt
    deferredPrompt.prompt();
    // Wait for the user to respond to the prompt
    deferredPrompt.userChoice
        .then((choiceResult) => {
            if (choiceResult.outcome === 'accepted') {
                console.log('User accepted the A2HS prompt');
            } else {
                console.log('User dismissed the A2HS prompt');
            }
            deferredPrompt = null;
        });
});
*/