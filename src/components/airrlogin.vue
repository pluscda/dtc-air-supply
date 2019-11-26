<template>
    <div id="HelloWorld" class="demo">
        <v-app>
            <v-hover v-slot:default="{ hover }" :open-delay="0" :close-delay="0" :disabled="false" :value="false">
                <v-card class="mx-auto" width="400px" :elevation="hover ? 12 : 2">
                    <v-system-bar color="deep-orange lighten-1"></v-system-bar>
                    <v-toolbar color="deep-orange lighten-2" dark>
                        <v-spacer></v-spacer>
                        <v-toolbar-title>登入平板
                            <v-spacer></v-spacer>
                        </v-toolbar-title>
                        <div class="flex-grow-1"></div>
                    </v-toolbar>
                    <v-container class="pa-2" fluid>
                        <!--
                        <v-row>
                            <v-col>
                                <v-text-field input type="text" label="login id" placeholder="請輸入空審申請的平板帳號" v-model="loginID"></v-text-field>
                            </v-col>
                        </v-row>
                    -->
                        <v-row>
                            <v-col>
                                <v-select v-model="airreswitch" label="請選擇航空公司" :items="sitems" chips solo></v-select>
                            </v-col>
                        </v-row>
                        <v-row>
                            <v-col>
                                <v-btn v-on:click="loginclick()" color="yellow">登入
                                </v-btn>
                            </v-col>
                        </v-row>
                    </v-container>
                </v-card>
            </v-hover>
            <v-dialog v-model="MessageDialog" persistent max-width="290">
                <v-card>
                    <v-card-title class="headline">您的選擇</v-card-title>
                    <v-card-text>
                        設定初使值
                    </v-card-text>
                    <v-card-actions>
                        <div class="flex-grow-1"></div>
                        <v-btn color="green lighten-1" v-on:click="EnterDialogClick()">確定</v-btn>
                        <v-btn color="red lighten-1" v-on:click="CancelDialogClick()">取消</v-btn>
                    </v-card-actions>
                </v-card>
            </v-dialog>
        </v-app>
    </div>
</template>
<script>
export default {
    name: "airrlogin",
    props: ["ReqId", "Pname", "PId", "Sex", "BirthDate", "SendDate"],
    components: {},
    data: () => ({
        search: null,
        loginID: null,
        airreswitch: false,
        lingskyswitch: false,
        MessageDialog: false,
        sitems: ['凌天', '飛特立'],
    }),
    created: function() {




        console.log("created");

    },
    mounted: function() {



        console.log("mounted");

    },
    activated: function() {




        console.log("activated")

    },
    methods: {

        EnterDialogClick: function() {

            console.log(this.airreswitch);

            this.MessageDialog = false;
        },
        CancelDialogClick: function() {

            this.MessageDialog = false;

        },
        loginclick: function() {


            this.MessageDialog = true;
            console.log(this.airreswitch);

        },
        InitShowDb: function() {



            console.log("InitShowDb");
        },
        InitListindexDb: function() {


            console.log("InitListindexDb");

        },
        InitA3vueindexDb: function() {


            console.log("InitA3vueindexDb");
        },
        InitlingvueindexDb: function() {


            console.log("InitlingvueindexDb");
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