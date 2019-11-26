import Vue from 'vue'
import Router from 'vue-router'
import a3airr from './components/airra3.vue'
import linsky from './components/linsky.vue'
import airrelist from './components/airrelist.vue'
import airrlogin from './components/airrlogin.vue'
//import a3join from './views/a3join.vue'



Vue.use(Router)

export default new Router({
     //mode: 'history',
    routes: [{
            path: '/ReqId/:ReqId/Patient/:patientname/PatId/:patid/Sex/:sex/BirthDate/:birthDate/SendDate/:SendDate/eatc',
            props: route => ({
                ReqId: route.params.ReqId,
                Pname: route.params.patientname,
                PId: route.params.patid,
                Sex: route.params.sex,
                BirthDate: route.params.birthDate,
                SendDate: route.params.SendDate,
                Crop: route.params.Crop
            }),
            component: linsky
        },
        {
            path: '/ReqId/:ReqId/Patient/:patientname/PatId/:patid/Sex/:sex/BirthDate/:birthDate/SendDate/:SendDate/epair',
            props: route => ({
                ReqId: route.params.ReqId,
                Pname: route.params.patientname,
                PId: route.params.patid,
                Sex: route.params.sex,
                BirthDate: route.params.birthDate,
                SendDate: route.params.SendDate,
                Crop: route.params.Crop
            }),
            component: a3airr
        },
        {
            path: '/:ReqId/:PId/:Pname/:Sex/:BirthDate/eatc',
            props: route => ({
                ReqId: route.params.ReqId,
                Pname: route.params.Pname,
                PId: route.params.PId,
                Sex: route.params.Sex,
                BirthDate: route.params.BirthDate,
            }),
            name: 'linsky2',
            component: linsky
        },
        {
            path: '/:ReqId/:PId/:Pname/:Sex/:BirthDate/epair',
            props: route => ({
                ReqId: route.params.ReqId,
                Pname: route.params.Pname,
                PId: route.params.PId,
                Sex: route.params.Sex,
                BirthDate: route.params.BirthDate,
            }),
            name: 'a3airr2',
            component: a3airr,
        },
        {
            path: '/',
            name: 'home',
            component: airrelist,
        }
        /*
        {
            path: '/',
            redirect: '/index'
        },
        */


    ]
})