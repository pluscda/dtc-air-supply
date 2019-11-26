<template>
    <div id="app">
        <!--
        <nav class="navbar bg-light sticky-top">
            <div class="btn btn-outline-success float-right" v-on:click="installer()" :style="{'display': installBtn}">
                安裝 空審App
            </div>
        </nav>
    -->
        <v-app>
            <v-row>
                <v-col>
                    <router-view></router-view>
                    <!--
                        <router-view v-if="installBtn ==='none'"></router-view>
                    -->
                    <!--
                    <v-banner :sticky="false" :single-line="true" :color="blue" :elevation="4">
                        <template v-slot:actions>
                            <v-btn width="100%" v-on:click="installer()">
                                install 民航 Web App
                            </v-btn>
                        </template>
                    </v-banner>
                -->
                </v-col>
                <!--
            <v-col>
                <router-view></router-view>
            </v-col>

        -->
            </v-row>
            <v-row>
                <div class="ad2hs-prompt">
                    <button type="button">install 民航 Web App</button>
                </div>
                <div class="ios-prompt">
                    <span style="color: rgb(187, 187, 187); float: right; margin-top: -14px; margin-right: -11px;">&times;</span>
                    <img src="img/icons/add2home.svg" style="float: left; height: 80px; width: auto; margin-top: -8px; margin-right: 1rem;">
                    <p style="margin-top: -3px; line-height: 1.3rem;">To install 民航 Web App in your iPhone/iPad press <img src="img/icons/share.svg" style="display: inline-block; margin-top: 4px; margin-bottom: -4px; height: 20px; width: auto;"> and then Add to Home Screen.</p>
                </div>
            </v-row>
            <!--
            <v-banner :sticky="false" :single-line="true" :color="blue" :elevation="4">
                加入空審 離線申請單 APP
                <template v-slot:actions>
                    <v-btn text color="deep-purple accent-4" v-on:click="installer()">
                        APP
                    </v-btn>
                </template>
            </v-banner>
        -->
            <!--
                <v-col>
                    <v-btn color="yellow" v-on:click="installer()" :style="{'display': installBtn}">安裝 空審APP</v-btn>
                </v-col>
-->
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



        window.addEventListener("beforeinstallprompt", e => {

            e.preventDefault();

            //this.installprompt = e;
            this.deferredPrompt = e;
            //this.showAddToHomeScreen();
            this.installBtn = "block";

            this.showAddToHomeScreen();




            // Detects if device is on iOS


            /*
                        this.installer = () => {



                            this.installprompt.prompt();

                            this.installprompt.userChoice.then(result => {

                                if (result.outcome === 'accepted') {
                                    this.installBtn = "none";
                                    console.log("user accepted");
                                } else
                                    console.log("user defied");

                                this.installprompt = null;

                            })


                        };
                        */




        });

        const isIos = () => {
            const userAgent = window.navigator.userAgent.toLowerCase();

            //console.log(/iphone|ipad|ipod/.test(userAgent));
            return /iphone|ipad|ipod/.test(userAgent);
        }


        // console.log("iphone" + ('standalone' in window.navigator) && (window.navigator.standalone));
        // Detects if device is in standalone mode
        const isInStandaloneMode = () => ('standalone' in window.navigator) && (window.navigator.standalone);
        // Checks if should display install popup notification:
        // if (isIos() && !this.isInStandaloneMode()) {


        // alert(/iphone|ipad|ipod/.test(window.navigator.userAgent.toLowerCase()));




        if (isIos()) {
            // this.setState({ showInstallMessage: true });

            // console.log("showosINstall");
            this.showIosInstall();
        } else {
            // alert("no IOS");

        }

        /*
                let installprompt;

                window.addEventListener("beforeinstallprompt", e => {

                    e.preventDefault();

                    installprompt = e;

                    //this.installBtn = "block";

                });

                this.installer = () => {



                    installprompt.prompt();

                    installprompt.userChoice.then(result => {

                        if (result.outcome === 'accepted') {
                            this.installBtn = "none";
                            console.log("user accepted");
                        } else
                            console.log("user defied");

                        installprompt = null;

                    })


                };
                */

    },
    methods: {

        addToHomeScreen: function() {
            let a2hsBtn = document.querySelector(".ad2hs-prompt"); // hide our user interface that shows our A2HS button
            a2hsBtn.style.display = 'none'; // Show the prompt
            this.deferredPrompt.prompt(); // Wait for the user to respond to the prompt
            this.deferredPrompt.userChoice
                .then(function(choiceResult) {
                    if (choiceResult.outcome === 'accepted') {
                        console.log('User accepted the A2HS prompt');
                    } else {
                        console.log('User dismissed the A2HS prompt');
                    }
                    this.deferredPrompt = null;
                });
        },

        showAddToHomeScreen: function() {
            let a2hsBtn = document.querySelector(".ad2hs-prompt");
            a2hsBtn.style.display = "block";
            a2hsBtn.addEventListener("click", this.addToHomeScreen);
        },

        showIosInstall: function() {
            let iosPrompt = document.querySelector(".ios-prompt");
            iosPrompt.style.display = "block";
            iosPrompt.addEventListener("click", () => {
                iosPrompt.style.display = "none";
            });
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