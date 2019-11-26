<template>
    <div id="HelloWorld" class="demo">
        <v-app>
            <v-row>
                <v-col>
                    <v-card class="mx-auto" width="800px">
                        <v-system-bar color="deep-orange lighten-1"></v-system-bar>
                        <v-toolbar color="deep-orange lighten-2" dark>
                            <v-spacer></v-spacer>
                            <v-toolbar-title>
                                <v-spacer></v-spacer>
                                <v-text-field v-model="search" label="搜尋" single-line hide-details>
                                </v-text-field>
                            </v-toolbar-title>
                            <div class="flex-grow-1"></div>
                        </v-toolbar>
                        <v-card-text class="pa-0">
                            <v-data-table v-model="selected" :loading="loading" :headers="headers" :items="desserts" :search="search" class="elevation-1" v-on:click:row="ChoiceAlert">
                                <template slot="items" slot-scope="props">
                                    <td>
                                        {{ props.item.PatintId }}
                                    </td>
                                    <td class="text-xs-right">
                                        {{ props.item.PatientName }}
                                    </td>
                                    <td v-if="itemShow">
                                        {{ props.item.UserName}}
                                    </td>
                                </template>
                                <v-chip class="ma-2" color="green" text-color="white" slot="no-data" :value="true">
                                    沒有資料
                                </v-chip>
                                <v-chip class="ma-2" color="green" text-color="white" slot="no-results" :value="true">
                                    找不到 "{{ search }}"
                                </v-chip>
                            </v-data-table>
                        </v-card-text>
                    </v-card>
                </v-col>
            </v-row>
            <v-row justify="center">
                <v-dialog v-model="MessageAlertDialog" persistent max-width="290">
                    <v-card>
                        <v-card-title class="headline">{{titleMessagebar}}</v-card-title>
                        <v-card-text>
                            {{messageshowstring}}
                        </v-card-text>
                        <v-card-actions>
                            <div class="flex-grow-1"></div>
                            <v-btn rounded color="light-green accent-3" v-on:click="EnterDialogClick()">確定</v-btn>
                        </v-card-actions>
                    </v-card>
                </v-dialog>
            </v-row>
            <v-row justify="center">
                <v-dialog v-model="GOAlertDialog" persistent max-width="300">
                    <v-card>
                        <v-card-title class="headline">{{titleMessagebar}}</v-card-title>
                        <v-card-text>
                            <p align="center" color="red">{{messageshowstring}}</p>
                            <p align="left">姓名:{{gpname}}</p>
                            <p align="left">身分證字號:{{gpid}}</p>
                            <p align="left">出生日期:{{gbirthdate}}</p>
                            <v-row>
                                <v-select color="red" v-model="GoSelected" :items="['凌天', '飛特立']" label="航空公司*"></v-select>
                            </v-row>
                        </v-card-text>
                        <v-card-actions>
                            <div class="flex-grow-1"></div>
                            <v-btn rounded color="light-green accent-3" v-on:click="GODialogClick()">確定</v-btn>
                            <v-btn rounded color="red light-3" v-on:click="GoDialogcancelClick()">取消</v-btn>
                        </v-card-actions>
                    </v-card>
                </v-dialog>
            </v-row>
            <v-row justify="center">
                <v-dialog v-model="ErrorAlertDialog" persistent max-width="290">
                    <v-card>
                        <v-card-title class="headline"></v-card-title>
                        <v-card-text>
                            {{errormessageshowstring}}
                        </v-card-text>
                        <v-card-actions>
                            <div class="flex-grow-1"></div>
                            <v-btn rounded color="light-green accent-3" v-on:click="errorDialogClick()">確定</v-btn>
                        </v-card-actions>
                    </v-card>
                </v-dialog>
            </v-row>
        </v-app>
    </div>
</template>
<script>
import axios from 'axios';
import { openDB, deleteDB, wrap, unwrap } from 'idb';


export default {
    name: "HelloWorld",
    props: ["ReqId", "Pname", "PId", "Sex", "BirthDate", "SendDate"],
    components: {},
    data: () => ({
        loading: false,
        errormessageshowstring: null,
        ErrorAlertDialog: false,
        greqid: null,
        gpname: null,
        gpid: null,
        gsex: null,
        gbirthdate: null,
        GoSelected: null,
        GOAlertDialog: false,
        selected: [],
        itemShow: true,
        searchcomponent: false,
        a3component: false,
        linskycomponent: false,
        singleSelect: null,
        searchstring: null,
        search: null,
        titleMessagebar: null,
        MessageDialog: false,
        MessageAlertDialog: false,
        messageshowstring: null,
        airreswitch: null,
        itemvalue: [],
        sitems: ['凌天', '飛特立'],
        headers: [{
                text: '',
                align: 'center',
                sortable: false,
                value: 'name',
            },
            { text: '身分證字號', value: 'PatientId', align: 'left' },
            { text: '姓名', value: 'PatientName', align: 'left' },
            { text: '性別', value: 'PatientSex', align: 'left' },
            { text: '出生日期', value: 'PatBirthday', align: 'left' },
            // { text: '單號', value: 'RequestId', align: 'left' },
            { text: '航空公司', value: 'UserName', align: 'left' },
        ],
        desserts: [],
    }),

    watch: {
        /*
        airreswitch(val) {

            if (val != null) {
                const sTemp = "您的選擇列表清單 : " + val;
                this.titleMessagebar = "貼心提醒: 請記得存檔";
                this.messageshowstring = sTemp;
                this.MessageAlertDialog = true;
            }
        },
        */
        /*
        singleSelect(val) {

            console.log(val);
        },
        selected(val) {

            console.log(val);
        }
        */

    },
    created: function() {

        this.searchcomponent = true;
        this.titleMessagebar = "提示訊息";
        //this.messageshowstring = "請您設定航空公司列表初使值";

        /*
                if (navigator.onLine === false) {
                    alert("沒有網路，APP 無法正確執行，請關閉APP");
                }
                */

    },
    mounted: function() {

        //console.log("mounted start");

        this.loading = true;

        var data = null;

        //----------------------------------------------------------------------------
        //20191029 Bruce Chuang
        this.loading = false;

        axios.get('https://airreferral.datacom.com.tw/mobile/GetAirCraft.ashx', {


        }).then(res => {
            //20191014 要求回應 Bruce Chuang

            //this.ClearAllIndexDB();

            if (res.data.length !== 0) {

                this.desserts = res.data;
            }

            this.loading = false;

            console.log(res);


        }).catch(err => {
            //20191014 要求錯誤 Bruce Chuang

            this.loading = false;

            // console.log(err);
        });
        //----------------------------------------------------------------------------



        //this.SearchAirrlist();

        this.titletoolbar = "凌天";
        //this.MessageAlertDialog = true;
        //this.$router.replace("/");
        //console.log("mounted");

        //console.log("mounted end");
    },
    activated: function() {



    },
    methods: {
        OPENwindow: function() {

            /*
                        const sTemp = "http://localhost:8080/#" + "/ReqId/00033/Patient/33/PatId/33/Sex/M/BirthDate/1988-08-08/SendDate/2014-08-08/eatc";

                        const windowa3 = window.open(
                            sTemp,
                            "DescriptiveWindowName",
                            "resizable,scrollbars,status"
                        );
                        */


        },
        ChoiceAlert: function(value) {

            this.gpname = value.PatientName;
            this.gpid = value.PatientId;
            this.greqid = value.RequestId;
            this.gsex = value.PatientSex;
            this.gbirthdate = value.PatBirthday;
            this.GoSelected = value.UserName;



            if ((this.gpname === null || this.gpname === "") ||
                (this.greqid === null || this.greqid === "") ||
                (this.gpid === null || this.gpid === "") ||
                (this.GoSelected === null || this.GoSelected === "") ||
                (this.gsex === null || this.gsex === "") ||
                (this.gbirthdate === null || this.gbirthdate === ""))
                this.messageshowstring = "個人資料有誤，無法執行"
            else
                this.messageshowstring = "";


            this.titleMessagebar = "確認個人資料";

            this.GOAlertDialog = true;

            // if (event.target.classList.contains('btn__content'))
            //    return;

        },
        ItemClick: function(sItems) {


            console.log(sItems);
        },
        getColor(colorvalue) {
            if (colorvalue === "凌天")
                return 'blue lighten-4'
            else if (colorvalue === "飛特立")
                return 'blue darken-3'
            else
                return 'light-green lighten-2'
        },

        openairDBread: function() {

            const GO = openDB("airset", 1).then(db => {

                return db.transaction('airset', 'readonly').objectStore('airset').getAll();

            }).then(allSavedItems => {

                if (allSavedItems.length !== 0)
                    this.searchstring = allSavedItems[0].searchstring;

            });



        },
        ClearAllTemp: function() {
            this.gpname = null;
            this.gpid = null;
            this.greqid = null;
            this.GoSelected = null;
        },
        errorDialogClick: function() {
            this.ErrorAlertDialog = false;
        },
        GoDialogcancelClick: function() {
            this.ClearAllTemp();
            this.GOAlertDialog = false;
        },
        GODialogClick: function() {

            this.errormessageshowstring = "請選擇航空公司";

            if (!(this.gpname === null || this.gpname === "") &&
                !(this.greqid === null || this.greqid === "") &&
                !(this.gpid === null || this.gpid === "") &&
                !(this.GoSelected === null || this.GoSelected === "") &&
                !(this.gsex === null || this.gsex === "") &&
                !(this.gbirthdate === null || this.gbirthdate === "")) {
                if (this.GoSelected === "凌天" || this.GoSelected === "飛特立") {
                    this.GOAlertDialog = false;

                    switch (this.GoSelected) {
                        case "凌天":
                            this.$router.push({ name: 'linsky2', params: { ReqId: this.greqid, PId: this.gpid, Pname: this.gpname, Sex: this.gsex, BirthDate: this.gbirthdate } });
                            break;
                        case "飛特立":
                            this.$router.push({ name: 'a3airr2', params: { ReqId: this.greqid, PId: this.gpid, Pname: this.gpname, Sex: this.gsex, BirthDate: this.gbirthdate } });
                            break;
                    }
                } else
                    this.ErrorAlertDialog = true;
            }

        },
        SettingClick: function() {

            this.MessageDialog = true;

        },
        SettingSaveClick: function() {


            this.MessageDialog = false;


            //this.SettingSaveIndex();


            this.SearchAirrlist();

        },
        SettingSaveIndex: function() {


            this.searchstring = this.search;

            var obj = {
                airset: this.searchstring,

            };

            console.log("Setting Save Start");

            const GO = openDB('airset', 1).then(db => {
                db.transaction('airset', 'readwrite').objectStore('airset').add(obj);
            });

            console.log("Setting Save End");


        },
        SearchAirrlist: function() {



            if (navigator.onLine) {


                /*
                                axios.get('https://v2.airreferral.datacom.com.tw/mobile/GetAirCraft.ashx', {

                                }).then(res => {
                                    //20191014 要求回應 Bruce Chuang


                                    console.log(res);


                                }).catch(err => {
                                    //20191014 要求錯誤 Bruce Chuang 

                                    console.log(err);


                                });
                                */


                /*
                if (this.airreswitch === "凌天")
                    this.desserts = Searchlinskytemp;
                else if (this.airreswitch === "飛特立")
                    this.desserts = Searchairretemp;
                */

            } else {

                //-------------------------------------
                //20191025 Bruce Chuang
                this.titleMessagebar = "貼心提醒";
                this.messageshowstring = "網路已斷線了";
                this.MessageAlertDialog = true;
                //-------------------------------------
            }




        },
        InitShowDb: function() {



        },
        InitListindexDb: function() {




        },
        InitA3vueindexDb: function() {




        },
        InitlingvueindexDb: function() {



        },
        reciveSignClick: function() {


            console.log("reciveSignClick");
        },
        SendJsonClick: function() {


            console.log("SendJsonClick");
        }

    }

};
</script>