import Vue from 'vue'
//import './plugins/vuetify'
import App from './App.vue'
import router from './router'
import store from './store'
import Vuetify from 'vuetify'
import colors from 'vuetify/lib/util/colors'
import { Syncfunction } from './a3schema'

//import 'vuetify/src/stylus/app.styl'
//import 'vuetify/dist/vuetify.css'
import 'vuetify/dist/vuetify.min.css'
import '@mdi/font/css/materialdesignicons.css'
//import 'material-design-icons-iconfont/dist/material-design-icons.css'
//import '@mdi/font/css/materialdesignicons.css'

import VueResource from 'vue-resource'
//import axios from 'axios'
//import "font-awesome/css/font-awesome.css"
//import './registerServiceWorker'
import './registerServiceWorker-bruce'

Vue.config.productionTip = false

//---------------------------------
//20191025 Bruce Chuang
//全域變數
Vue.prototype.$a3dbb = null
Vue.prototype.$indexDBdata = null

//---------------------------------

Syncfunction.sync();

const opts = {
    icons: {
        iconfont: 'mdi'
    },
    theme: {
        dark: false,
        themes: {
            light: {
                primary: colors.grey.darken1, // #E53935
                secondary: colors.red.lighten4, // #FFCDD2
                accent: colors.indigo.base, // #3F51B5

            },
            dark: {
                primary: colors.green.darken1,

            }
        }
    }
}

Vue.use(Vuetify)
Vue.use(VueResource)
//Vue.use(axios)

//Vue.http.headers.common['Content-Type']='application/json'
//Vue.http.headers.common['Accept']='application/json, text/plain, */*'
//Vue.http.headers.common['Access-Control-Allow-Origin']='*'
//Vue.http.headers.common['Access-Control-Allow-Methods']='GET,POST,OPTION'
//Vue.http.headers.common['Access-Control-Allow-Headers']='Content-Type,Accept,Origin'


new Vue({
    router,
    store,
    vuetify: new Vuetify(opts),
    render: h => h(App)
}).$mount('#app')