<template>
    <div id="app">
        <v-app>
            <v-row>
                <v-col>
                    <router-view></router-view>
                </v-col>
            </v-row>
            <v-row>
                <div class="ad2hs-prompt">
                    <button type="button">Install 民航 Web App</button>
                </div>
                <div class="ios-prompt">
                    <span style="color: rgb(187, 187, 187); float: right; margin-top: -14px; margin-right: -11px;">&times;</span>
                    <p style="margin-top: -3px; line-height: 1.3rem;">Install 民航 Web App 給 iPhone/iPad 請按 <img src="img/icons/action-icon-ios.png" style="display: inline-block; margin-top: 4px; margin-bottom: -4px; height: 20px; width: auto;"> 加入主畫面 </p>
                </div>
            </v-row>
        </v-app>
    </div>
</template>
<script>
export default {

    data() {
        return {
            deferredPrompt: undefined,
            installBtn: "none",
            installer: undefined
        }
    },
    created() {




    },
    mounted: function() {

        //-------------------------------------------------------
        //20191031 Bruce Chuang
        //Add home Screen iphone 不會顯示 只有 android  
        window.addEventListener("beforeinstallprompt", e => {

            e.preventDefault();
            this.deferredPrompt = e;
            this.installBtn = "block";
            this.showAddToHomeScreen();

        });
        //-------------------------------------------------------
        //20191031 Bruce Chuang
        //讀取
        const isIos = () => {
            //Browser detect IOS 這邊透過字串來分判出IOS 狀態 
            //-------------------------------------------------------
            //檢查字串 
            var isIphone = navigator.userAgent.indexOf("iPhone") != -1;
            var isIpod = navigator.userAgent.indexOf("iPod") != -1;
            var isIpad = navigator.userAgent.indexOf("iPad") != -1;

            return isIphone | isIpod | isIpad;
            //-------------------------------------------------------
            //const userAgent = window.navigator.userAgent.toLowerCase();
            //return /iphone|ipad|ipod/.test(userAgent);
        }


        // Detects if device is in standalone mode
        const isInStandaloneMode = () => ('standalone' in window.navigator) && (window.navigator.standalone);

        if (isIos() && !isInStandaloneMode()) {
            // this.setState({ showInstallMessage: true });
            this.showIosInstall();
        }


    },
    methods: {

        addToHomeScreen: function() {
            //------------------------------------------------------
            //20191031 android Bruce Chuang
            let a2hsBtn = document.querySelector(".ad2hs-prompt");
            a2hsBtn.style.display = 'none';
            this.deferredPrompt.prompt();
            this.deferredPrompt.userChoice
                .then(function(choiceResult) {
                    if (choiceResult.outcome === 'accepted') {
                        console.log('User accepted the A2HS prompt');
                    } else {
                        console.log('User dismissed the A2HS prompt');
                    }
                    this.deferredPrompt = null;
                });
            //------------------------------------------------------
        },

        showAddToHomeScreen: function() {
            //------------------------------------------------------
            //20191031 Listener html click   Bruce Chuang
            let a2hsBtn = document.querySelector(".ad2hs-prompt");
            a2hsBtn.style.display = "block";
            a2hsBtn.addEventListener("click", this.addToHomeScreen);
            //------------------------------------------------------
        },

        showIosInstall: function() {
            //------------------------------------------------------
            //20191031  Bruce Chuang
            //單純顯示 message
            let iosPrompt = document.querySelector(".ios-prompt");
            iosPrompt.style.display = "block";
            iosPrompt.addEventListener("click", () => {
                iosPrompt.style.display = "none";
            });
            //------------------------------------------------------
        }
    }


};
</script>
<style lang="scss">
#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
}

.ad2hs-prompt {
    background-color: rgb(59, 134, 196);
    /* Blue */
    border: none;
    display: none;
    color: white;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    font-size: 16px;
    position: absolute;
    margin: 0 1rem 1rem;
    left: 0;
    right: 0;
    bottom: 0;
    width: calc(100%-28px);
}

.ios-prompt {
    background-color: #fcfcfc;
    border: 1px solid #666;
    display: none;
    padding: 0.8rem 1rem 0 0.5rem;
    text-decoration: none;
    font-size: 16px;
    color: #555;
    position: absolute;
    margin: 0 auto 1rem;
    left: 1rem;
    right: 1rem;
    bottom: 0;
}
</style>