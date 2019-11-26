<template>
    <div id="HelloWorld" class="demo">
        <v-app>
            <v-row>
                <v-col>
                    <v-card class="mx-auto">
                        <v-system-bar color="deep-orange lighten-1"></v-system-bar>
                        <v-toolbar color="deep-orange lighten-2" dark>
                            <v-spacer></v-spacer>
                            <v-toolbar-title>派遣資料</v-toolbar-title>
                            <div class="flex-grow-1"></div>
                        </v-toolbar>
                        <v-container class="pa-2" fluid>
                            <v-row>
                                <v-col>
                                    <v-text-field input type="text" label="轉出單位" v-model="reciveunit" placeholder></v-text-field>
                                </v-col>
                                <v-col>
                                    <v-text-field input type="text" label="接受醫院" v-model="accepthospital" placeholder></v-text-field>
                                </v-col>
                            </v-row>
                            <v-row>
                                <v-col>
                                    <v-text-field input type="time" label="通知時間" placeholder v-model="worktime"></v-text-field>
                                </v-col>
                                <v-col>
                                    <v-text-field input type="time" label="接受病人" placeholder v-model="faxtime"></v-text-field>
                                </v-col>
                                <v-col>
                                    <v-text-field input type="time" label="上機時間" placeholder v-model="targetranouttime"></v-text-field>
                                </v-col>
                                <v-col>
                                    <v-text-field input type="time" label="離機時間" placeholder v-model="leavetranouttime"></v-text-field>
                                </v-col>
                                <v-col>
                                    <v-text-field input type="time" label="到達醫院" placeholder v-model="targettranintime"></v-text-field>
                                </v-col>
                                <v-col>
                                    <v-text-field input type="time" label="離開醫院" placeholder v-model="leavetranintime"></v-text-field>
                                </v-col>
                                <v-col>
                                    <v-text-field input type="time" label="返回時間" placeholder v-model="standbytime"></v-text-field>
                                </v-col>
                            </v-row>
                        </v-container>
                    </v-card>
                </v-col>
            </v-row>
            <v-row>
                <v-col>
                    <v-card class="mx-auto">
                        <v-system-bar color="deep-orange lighten-1"></v-system-bar>
                        <v-toolbar color="deep-orange lighten-2" dark>
                            <v-spacer></v-spacer>
                            <v-toolbar-title>傷病患資料</v-toolbar-title>
                            <div class="flex-grow-1"></div>
                        </v-toolbar>
                        <v-container class="pa-2" fluid>
                            <v-row>
                                <v-col>
                                    <v-text-field input type="text" label="姓名" placeholder v-model="patientName" maxlength="20"></v-text-field>
                                </v-col>
                                <v-col>
                                    <v-select v-model="patientgender" :items="items" label="性別">
                                    </v-select>
                                </v-col>
                                <v-col>
                                    <v-text-field input type="date" label="出生日期" placeholder v-model="patientbirthday"></v-text-field>
                                </v-col>
                                <v-col>
                                    <v-text-field input type="text" label="身份證字號" placeholder v-model="patientID" maxlength="10"></v-text-field>
                                </v-col>
                            </v-row>
                        </v-container>
                    </v-card>
                </v-col>
            </v-row>
            <v-row>
                <v-col>
                    <v-card class="mx-auto">
                        <v-system-bar color="deep-orange lighten-1"></v-system-bar>
                        <v-toolbar color="deep-orange lighten-2" dark>
                            <v-spacer></v-spacer>
                            <v-toolbar-title>分類</v-toolbar-title>
                            <div class="flex-grow-1"></div>
                        </v-toolbar>
                        <v-container class="pa-2" fluid>
                            <v-row>
                                <v-col>
                                    <v-checkbox label="創傷" v-model="traumatic"></v-checkbox>
                                </v-col>
                                <v-col>
                                    <v-checkbox label="非創傷" v-model="nontraumatic"></v-checkbox>
                                </v-col>
                            </v-row>
                        </v-container>
                    </v-card>
                </v-col>
            </v-row>
            <v-row>
                <v-col>
                    <v-card class="mx-auto">
                        <v-system-bar color="deep-orange lighten-1"></v-system-bar>
                        <v-toolbar color="deep-orange lighten-2" dark>
                            <v-spacer></v-spacer>
                            <v-toolbar-title>後送原因</v-toolbar-title>
                            <div class="flex-grow-1"></div>
                        </v-toolbar>
                        <v-container class="pa-2" fluid>
                            <v-row>
                                <v-col>
                                    <v-textarea solo label="後送原因" placeholder v-model="reason"></v-textarea>
                                </v-col>
                            </v-row>
                        </v-container>
                    </v-card>
                </v-col>
            </v-row>
            <v-row>
                <v-col>
                    <v-card class="mx-auto">
                        <v-system-bar color="deep-orange lighten-1"></v-system-bar>
                        <v-toolbar color="deep-orange lighten-2" dark>
                            <v-spacer></v-spacer>
                            <v-toolbar-title>病患生命象監控</v-toolbar-title>
                            <div class="flex-grow-1"></div>
                        </v-toolbar>
                        <v-container class="pa-2" fluid>
                            <v-card color="deep-orange lighten-5">
                                <v-row>
                                    <v-col>
                                        <v-checkbox label="交接" v-model="give1" />
                                    </v-col>
                                    <v-col>
                                        <v-checkbox label="救護車" v-model="car1" />
                                    </v-col>
                                    <v-col>
                                        <v-checkbox label="機上" v-model="fly1" />
                                    </v-col>
                                    <v-col>
                                        <v-text-field input type="date" label="時間" placeholder v-model="time1" />
                                    </v-col>
                                </v-row>
                                <v-row color="yellow">
                                    <v-col>
                                        <v-checkbox label="清" v-model="painone1" />
                                    </v-col>
                                    <v-col>
                                        <v-checkbox label="聲" v-model="paintwo1" />
                                    </v-col>
                                    <v-col>
                                        <v-checkbox label="痛" v-model="painthree1" />
                                    </v-col>
                                    <v-col>
                                        <v-checkbox label="否" v-model="painfore1" />
                                    </v-col>
                                    <v-col>
                                        <v-text-field input type="text" label="血壓 mmHg" placeholder v-model="bloodpulse1" />
                                    </v-col>
                                    <v-col>
                                        <v-text-field input type="text" label="脈搏 次/分" placeholder v-model="bloodpressure1" />
                                    </v-col>
                                    <v-col>
                                        <v-text-field input type="text" label="血氧 %" placeholder v-model="bloodair1" />
                                    </v-col>
                                    <v-col>
                                        <v-text-field input type="text" label="備註" placeholder v-model="mark1" />
                                    </v-col>
                                </v-row>
                            </v-card>
                            <v-card color="deep-orange lighten-4">
                                <v-row>
                                    <v-col>
                                        <v-checkbox label="交接" v-model="give2" />
                                    </v-col>
                                    <v-col>
                                        <v-checkbox label="救護車" v-model="car2" />
                                    </v-col>
                                    <v-col>
                                        <v-checkbox label="機上" v-model="fly2" />
                                    </v-col>
                                    <v-col>
                                        <v-text-field input type="date" label="時間" placeholder v-model="time2"></v-text-field>
                                    </v-col>
                                </v-row>
                                <v-row>
                                    <v-col>
                                        <v-checkbox label="清" v-model="painone2"></v-checkbox>
                                    </v-col>
                                    <v-col>
                                        <v-checkbox label="聲" v-model="paintwo2"></v-checkbox>
                                    </v-col>
                                    <v-col>
                                        <v-checkbox label="痛" v-model="painthree2"></v-checkbox>
                                    </v-col>
                                    <v-col>
                                        <v-checkbox label="否" v-model="painfore2"></v-checkbox>
                                    </v-col>
                                    <v-col>
                                        <v-text-field input type="text" label="血壓 mmHg" placeholder v-model="bloodpulse2"></v-text-field>
                                    </v-col>
                                    <v-col>
                                        <v-text-field input type="text" label="脈搏 次/分" placeholder v-model="bloodpressure2"></v-text-field>
                                    </v-col>
                                    <v-col>
                                        <v-text-field input type="text" label="血氧 %" placeholder v-model="bloodair2"></v-text-field>
                                    </v-col>
                                    <v-col>
                                        <v-text-field input type="text" label="備註" placeholder v-model="mark2" />
                                    </v-col>
                                </v-row>
                            </v-card>
                            <v-card color="deep-orange lighten-5">
                                <v-row>
                                    <v-col>
                                        <v-checkbox label="交接" v-model="give3"></v-checkbox>
                                    </v-col>
                                    <v-col>
                                        <v-checkbox label="救護車" v-model="car3"></v-checkbox>
                                    </v-col>
                                    <v-col>
                                        <v-checkbox label="機上" v-model="fly3"></v-checkbox>
                                    </v-col>
                                    <v-col>
                                        <v-text-field input type="date" label="時間" placeholder v-model="time3"></v-text-field>
                                    </v-col>
                                </v-row>
                                <v-row>
                                    <v-col>
                                        <v-checkbox label="清" v-model="painone3"></v-checkbox>
                                    </v-col>
                                    <v-col>
                                        <v-checkbox label="聲" v-model="paintwo3"></v-checkbox>
                                    </v-col>
                                    <v-col>
                                        <v-checkbox label="痛" v-model="painthree3"></v-checkbox>
                                    </v-col>
                                    <v-col>
                                        <v-checkbox label="否" v-model="painfore3"></v-checkbox>
                                    </v-col>
                                    <v-col>
                                        <v-text-field input type="text" label="血壓 mmHg" placeholder v-model="bloodpulse3"></v-text-field>
                                    </v-col>
                                    <v-col>
                                        <v-text-field input type="text" label="脈搏 次/分" placeholder v-model="bloodpressure3"></v-text-field>
                                    </v-col>
                                    <v-col>
                                        <v-text-field input type="text" label="血氧 %" placeholder v-model="bloodair3"></v-text-field>
                                    </v-col>
                                    <v-col>
                                        <v-text-field input type="text" label="備註" placeholder v-model="mark3" />
                                    </v-col>
                                </v-row>
                            </v-card>
                            <v-card color="deep-orange lighten-4">
                                <v-row>
                                    <v-col>
                                        <v-checkbox label="交接" v-model="give4"></v-checkbox>
                                    </v-col>
                                    <v-col>
                                        <v-checkbox label="救護車" v-model="car4"></v-checkbox>
                                    </v-col>
                                    <v-col>
                                        <v-checkbox label="機上" v-model="fly4"></v-checkbox>
                                    </v-col>
                                    <v-col>
                                        <v-text-field input type="date" label="時間" placeholder v-model="time4"></v-text-field>
                                    </v-col>
                                </v-row>
                                <v-row>
                                    <v-col>
                                        <v-checkbox label="清" v-model="painone4"></v-checkbox>
                                    </v-col>
                                    <v-col>
                                        <v-checkbox label="聲" v-model="paintwo4"></v-checkbox>
                                    </v-col>
                                    <v-col>
                                        <v-checkbox label="痛" v-model="painthree4"></v-checkbox>
                                    </v-col>
                                    <v-col>
                                        <v-checkbox label="否" v-model="painfore4"></v-checkbox>
                                    </v-col>
                                    <v-col>
                                        <v-text-field input type="text" label="血壓 mmHg" placeholder v-model="bloodpulse4"></v-text-field>
                                    </v-col>
                                    <v-col>
                                        <v-text-field input type="text" label="脈搏 次/分" placeholder v-model="bloodpressure4"></v-text-field>
                                    </v-col>
                                    <v-col>
                                        <v-text-field input type="text" label="血氧 %" placeholder v-model="bloodair4"></v-text-field>
                                    </v-col>
                                    <v-col>
                                        <v-text-field input type="text" label="備註" placeholder v-model="mark4" />
                                    </v-col>
                                </v-row>
                            </v-card>
                            <v-card color="deep-orange lighten-5">
                                <v-row>
                                    <v-col>
                                        <v-checkbox label="交接" v-model="give5"></v-checkbox>
                                    </v-col>
                                    <v-col>
                                        <v-checkbox label="救護車" v-model="car5"></v-checkbox>
                                    </v-col>
                                    <v-col>
                                        <v-checkbox label="機上" v-model="fly5"></v-checkbox>
                                    </v-col>
                                    <v-col>
                                        <v-text-field input type="date" label="時間" placeholder v-model="time5"></v-text-field>
                                    </v-col>
                                </v-row>
                                <v-row>
                                    <v-col>
                                        <v-checkbox label="清" v-model="painone5"></v-checkbox>
                                    </v-col>
                                    <v-col>
                                        <v-checkbox label="聲" v-model="paintwo5"></v-checkbox>
                                    </v-col>
                                    <v-col>
                                        <v-checkbox label="痛" v-model="painthree5"></v-checkbox>
                                    </v-col>
                                    <v-col>
                                        <v-checkbox label="否" v-model="painfore5"></v-checkbox>
                                    </v-col>
                                    <v-col>
                                        <v-text-field input type="text" label="血壓 mmHg" placeholder v-model="bloodpulse5"></v-text-field>
                                    </v-col>
                                    <v-col>
                                        <v-text-field input type="text" label="脈搏 次/分" placeholder v-model="bloodpressure5"></v-text-field>
                                    </v-col>
                                    <v-col>
                                        <v-text-field input type="text" label="血氧 %" placeholder v-model="bloodair5"></v-text-field>
                                    </v-col>
                                    <v-col>
                                        <v-text-field input type="text" label="備註" placeholder v-model="mark5" />
                                    </v-col>
                                </v-row>
                            </v-card>
                            <v-card color="deep-orange lighten-4">
                                <v-row>
                                    <v-col>
                                        <v-checkbox label="交接" v-model="give6"></v-checkbox>
                                    </v-col>
                                    <v-col>
                                        <v-checkbox label="救護車" v-model="car6"></v-checkbox>
                                    </v-col>
                                    <v-col>
                                        <v-checkbox label="機上" v-model="fly6"></v-checkbox>
                                    </v-col>
                                    <v-col>
                                        <v-text-field input type="date" label="時間" placeholder v-model="time6"></v-text-field>
                                    </v-col>
                                </v-row>
                                <v-row>
                                    <v-col>
                                        <v-checkbox label="清" v-model="painone6"></v-checkbox>
                                    </v-col>
                                    <v-col>
                                        <v-checkbox label="聲" v-model="paintwo6"></v-checkbox>
                                    </v-col>
                                    <v-col>
                                        <v-checkbox label="痛" v-model="painthree6"></v-checkbox>
                                    </v-col>
                                    <v-col>
                                        <v-checkbox label="否" value="" v-model="painfore6"></v-checkbox>
                                    </v-col>
                                    <v-col>
                                        <v-text-field input type="text" label="血壓 mmHg" placeholder v-model="bloodpulse6"></v-text-field>
                                    </v-col>
                                    <v-col>
                                        <v-text-field input type="text" label="脈搏 次/分" placeholder v-model="bloodpressure6"></v-text-field>
                                    </v-col>
                                    <v-col>
                                        <v-text-field input type="text" label="血氧 %" placeholder v-model="bloodair6"></v-text-field>
                                    </v-col>
                                    <v-col>
                                        <v-text-field input type="text" label="備註" placeholder v-model="mark6" />
                                    </v-col>
                                </v-row>
                            </v-card>
                            <v-card color="deep-orange lighten-5">
                                <v-row>
                                    <v-col>
                                        <v-checkbox label="交接" v-model="give7"></v-checkbox>
                                    </v-col>
                                    <v-col>
                                        <v-checkbox label="救護車" v-model="car7"></v-checkbox>
                                    </v-col>
                                    <v-col>
                                        <v-checkbox label="機上" v-model="fly7"></v-checkbox>
                                    </v-col>
                                    <v-col>
                                        <v-text-field input type="date" label="時間" placeholder v-model="time7"></v-text-field>
                                    </v-col>
                                </v-row>
                                <v-row>
                                    <v-col>
                                        <v-checkbox label="清" v-model="painone7"></v-checkbox>
                                    </v-col>
                                    <v-col>
                                        <v-checkbox label="聲" v-model="paintwo7"></v-checkbox>
                                    </v-col>
                                    <v-col>
                                        <v-checkbox label="痛" v-model="painthree7"></v-checkbox>
                                    </v-col>
                                    <v-col>
                                        <v-checkbox label="否" v-model="painfore7"></v-checkbox>
                                    </v-col>
                                    <v-col>
                                        <v-text-field input type="text" label="血壓 mmHg" placeholder v-model="bloodpulse7"></v-text-field>
                                    </v-col>
                                    <v-col>
                                        <v-text-field input type="text" label="脈搏 次/分" placeholder v-model="bloodpressure7"></v-text-field>
                                    </v-col>
                                    <v-col>
                                        <v-text-field input type="text" label="血氧 %" placeholder v-model="bloodair7"></v-text-field>
                                    </v-col>
                                    <v-col>
                                        <v-text-field input type="text" label="備註" placeholder v-model="mark7" />
                                    </v-col>
                                </v-row>
                            </v-card>
                            <v-card color="deep-orange lighten-4">
                                <v-row>
                                    <v-col>
                                        <v-checkbox label="交接" v-model="give8"></v-checkbox>
                                    </v-col>
                                    <v-col>
                                        <v-checkbox label="救護車" v-model="car8"></v-checkbox>
                                    </v-col>
                                    <v-col>
                                        <v-checkbox label="機上" v-model="fly8"></v-checkbox>
                                    </v-col>
                                    <v-col>
                                        <v-text-field input type="date" label="時間" placeholder v-model="time8"></v-text-field>
                                    </v-col>
                                </v-row>
                                <v-row>
                                    <v-col>
                                        <v-checkbox label="清" v-model="painone8"></v-checkbox>
                                    </v-col>
                                    <v-col>
                                        <v-checkbox label="聲" v-model="paintwo8"></v-checkbox>
                                    </v-col>
                                    <v-col>
                                        <v-checkbox label="痛" v-model="painthree8"></v-checkbox>
                                    </v-col>
                                    <v-col>
                                        <v-checkbox label="否" v-model="painfore8"></v-checkbox>
                                    </v-col>
                                    <v-col>
                                        <v-text-field input type="text" label="血壓 mmHg" placeholder v-model="bloodpulse8"></v-text-field>
                                    </v-col>
                                    <v-col>
                                        <v-text-field input type="text" label="脈搏 次/分" placeholder v-model="bloodpressure8"></v-text-field>
                                    </v-col>
                                    <v-col>
                                        <v-text-field input type="text" label="血氧 %" placeholder v-model="bloodair8"></v-text-field>
                                    </v-col>
                                    <v-col>
                                        <v-text-field input type="text" label="備註" placeholder v-model="mark8" />
                                    </v-col>
                                </v-row>
                            </v-card>
                            <v-card color="deep-orange lighten-5">
                                <v-row>
                                    <v-col>
                                        <v-checkbox label="交接" v-model="give9"></v-checkbox>
                                    </v-col>
                                    <v-col>
                                        <v-checkbox label="救護車" v-model="car9"></v-checkbox>
                                    </v-col>
                                    <v-col>
                                        <v-checkbox label="機上" v-model="fly9"></v-checkbox>
                                    </v-col>
                                    <v-col>
                                        <v-text-field input type="date" label="時間" placeholder v-model="time9"></v-text-field>
                                    </v-col>
                                </v-row>
                                <v-row>
                                    <v-col>
                                        <v-checkbox label="清" v-model="painone9"></v-checkbox>
                                    </v-col>
                                    <v-col>
                                        <v-checkbox label="聲" v-model="paintwo9"></v-checkbox>
                                    </v-col>
                                    <v-col>
                                        <v-checkbox label="痛" v-model="painthree9"></v-checkbox>
                                    </v-col>
                                    <v-col>
                                        <v-checkbox label="否" value="" v-model="painfore9"></v-checkbox>
                                    </v-col>
                                    <v-col>
                                        <v-text-field input type="text" label="血壓 mmHg" placeholder v-model="bloodpulse9"></v-text-field>
                                    </v-col>
                                    <v-col>
                                        <v-text-field input type="text" label="脈搏 次/分" placeholder v-model="bloodpressure9"></v-text-field>
                                    </v-col>
                                    <v-col>
                                        <v-text-field input type="text" label="血氧 %" placeholder v-model="bloodair9"></v-text-field>
                                    </v-col>
                                    <v-col>
                                        <v-text-field input type="text" label="備註" placeholder v-model="mark9" />
                                    </v-col>
                                </v-row>
                            </v-card>
                            <v-card color="deep-orange lighten-4">
                                <v-row>
                                    <v-col>
                                        <v-checkbox label="交接" v-model="give10"></v-checkbox>
                                    </v-col>
                                    <v-col>
                                        <v-checkbox label="救護車" v-model="car10"></v-checkbox>
                                    </v-col>
                                    <v-col>
                                        <v-checkbox label="機上" v-model="fly10"></v-checkbox>
                                    </v-col>
                                    <v-col>
                                        <v-text-field input type="date" label="時間" placeholder v-model="time10"></v-text-field>
                                    </v-col>
                                </v-row>
                                <v-row>
                                    <v-col>
                                        <v-checkbox label="清" v-model="painone10"></v-checkbox>
                                    </v-col>
                                    <v-col>
                                        <v-checkbox label="聲" v-model="paintwo10"></v-checkbox>
                                    </v-col>
                                    <v-col>
                                        <v-checkbox label="痛" v-model="painthree10"></v-checkbox>
                                    </v-col>
                                    <v-col>
                                        <v-checkbox label="否" v-model="painfore10"></v-checkbox>
                                    </v-col>
                                    <v-col>
                                        <v-text-field input type="text" label="血壓 mmHg" placeholder v-model="bloodpulse10"></v-text-field>
                                    </v-col>
                                    <v-col>
                                        <v-text-field input type="text" label="脈搏 次/分" placeholder v-model="bloodpressure10"></v-text-field>
                                    </v-col>
                                    <v-col>
                                        <v-text-field input type="text" label="血氧 %" placeholder v-model="bloodair10"></v-text-field>
                                    </v-col>
                                    <v-col>
                                        <v-text-field input type="text" label="備註" placeholder v-model="mark10" />
                                    </v-col>
                                </v-row>
                            </v-card>
                            <v-card color="deep-orange lighten-5">
                                <v-row>
                                    <v-col>
                                        <v-checkbox label="交接" v-model="give11"></v-checkbox>
                                    </v-col>
                                    <v-col>
                                        <v-checkbox label="救護車" v-model="car11"></v-checkbox>
                                    </v-col>
                                    <v-col>
                                        <v-checkbox label="機上" v-model="fly11"></v-checkbox>
                                    </v-col>
                                    <v-col>
                                        <v-text-field input type="date" label="時間" placeholder v-model="time11"></v-text-field>
                                    </v-col>
                                </v-row>
                                <v-row>
                                    <v-col>
                                        <v-checkbox label="清" v-model="painone11"></v-checkbox>
                                    </v-col>
                                    <v-col>
                                        <v-checkbox label="聲" v-model="paintwo11"></v-checkbox>
                                    </v-col>
                                    <v-col>
                                        <v-checkbox label="痛" v-model="painthree11"></v-checkbox>
                                    </v-col>
                                    <v-col>
                                        <v-checkbox label="否" v-model="painfore11"></v-checkbox>
                                    </v-col>
                                    <v-col>
                                        <v-text-field input type="text" label="血壓 mmHg" placeholder v-model="bloodpulse11"></v-text-field>
                                    </v-col>
                                    <v-col>
                                        <v-text-field input type="text" label="脈搏 次/分" placeholder v-model="bloodpressure11"></v-text-field>
                                    </v-col>
                                    <v-col>
                                        <v-text-field input type="text" label="血氧 %" placeholder v-model="bloodair11"></v-text-field>
                                    </v-col>
                                    <v-col>
                                        <v-text-field input type="text" label="備註" placeholder v-model="mark11" />
                                    </v-col>
                                </v-row>
                            </v-card>
                            <v-card color="deep-orange lighten-4">
                                <v-row>
                                    <v-col>
                                        <v-checkbox label="交接" v-model="give12"></v-checkbox>
                                    </v-col>
                                    <v-col>
                                        <v-checkbox label="救護車" v-model="car12"></v-checkbox>
                                    </v-col>
                                    <v-col>
                                        <v-checkbox label="機上" v-model="fly12"></v-checkbox>
                                    </v-col>
                                    <v-col>
                                        <v-text-field input type="date" label="時間" placeholder v-model="time12"></v-text-field>
                                    </v-col>
                                </v-row>
                                <v-row>
                                    <v-col>
                                        <v-checkbox label="清" v-model="painone12"></v-checkbox>
                                    </v-col>
                                    <v-col>
                                        <v-checkbox label="聲" v-model="paintwo12"></v-checkbox>
                                    </v-col>
                                    <v-col>
                                        <v-checkbox label="痛" v-model="painthree12"></v-checkbox>
                                    </v-col>
                                    <v-col>
                                        <v-checkbox label="否" v-model="painfore12"></v-checkbox>
                                    </v-col>
                                    <v-col>
                                        <v-text-field input type="text" label="血壓 mmHg" placeholder v-model="bloodpulse12"></v-text-field>
                                    </v-col>
                                    <v-col>
                                        <v-text-field input type="text" label="脈搏 次/分" placeholder v-model="bloodpressure12"></v-text-field>
                                    </v-col>
                                    <v-col>
                                        <v-text-field input type="text" label="血氧 %" placeholder v-model="bloodair12"></v-text-field>
                                    </v-col>
                                    <v-col>
                                        <v-text-field input type="text" label="備註" placeholder v-model="mark12" />
                                    </v-col>
                                </v-row>
                            </v-card>
                            <v-card color="deep-orange lighten-5">
                                <v-row>
                                    <v-col>
                                        <v-checkbox label="交接" v-model="give13"></v-checkbox>
                                    </v-col>
                                    <v-col>
                                        <v-checkbox label="救護車" v-model="car13"></v-checkbox>
                                    </v-col>
                                    <v-col>
                                        <v-checkbox label="機上" v-model="fly13"></v-checkbox>
                                    </v-col>
                                    <v-col>
                                        <v-text-field input type="date" label="時間" placeholder v-model="time13"></v-text-field>
                                    </v-col>
                                </v-row>
                                <v-row>
                                    <v-col>
                                        <v-checkbox label="清" v-model="painone13"></v-checkbox>
                                    </v-col>
                                    <v-col>
                                        <v-checkbox label="聲" v-model="paintwo13"></v-checkbox>
                                    </v-col>
                                    <v-col>
                                        <v-checkbox label="痛" v-model="painthree13"></v-checkbox>
                                    </v-col>
                                    <v-col>
                                        <v-checkbox label="否" v-model="painfore13"></v-checkbox>
                                    </v-col>
                                    <v-col>
                                        <v-text-field input type="text" label="血壓 mmHg" placeholder v-model="bloodpulse13"></v-text-field>
                                    </v-col>
                                    <v-col>
                                        <v-text-field input type="text" label="脈搏 次/分" placeholder v-model="bloodpressure13"></v-text-field>
                                    </v-col>
                                    <v-col>
                                        <v-text-field input type="text" label="血氧 %" placeholder v-model="bloodair13"></v-text-field>
                                    </v-col>
                                    <v-col>
                                        <v-text-field input type="text" label="備註" placeholder v-model="mark13" />
                                    </v-col>
                                </v-row>
                            </v-card>
                            <v-card color="deep-orange lighten-4">
                                <v-row>
                                    <v-col>
                                        <v-checkbox label="交接" v-model="give14"></v-checkbox>
                                    </v-col>
                                    <v-col>
                                        <v-checkbox label="救護車" v-model="car14"></v-checkbox>
                                    </v-col>
                                    <v-col>
                                        <v-checkbox label="機上" v-model="fly14"></v-checkbox>
                                    </v-col>
                                    <v-col>
                                        <v-text-field input type="date" label="時間" placeholder v-model="time14"></v-text-field>
                                    </v-col>
                                </v-row>
                                <v-row>
                                    <v-col>
                                        <v-checkbox label="清" v-model="painone14"></v-checkbox>
                                    </v-col>
                                    <v-col>
                                        <v-checkbox label="聲" v-model="paintwo14"></v-checkbox>
                                    </v-col>
                                    <v-col>
                                        <v-checkbox label="痛" v-model="painthree14"></v-checkbox>
                                    </v-col>
                                    <v-col>
                                        <v-checkbox label="否" v-model="painfore14"></v-checkbox>
                                    </v-col>
                                    <v-col>
                                        <v-text-field input type="text" label="血壓 mmHg" placeholder v-model="bloodpulse14"></v-text-field>
                                    </v-col>
                                    <v-col>
                                        <v-text-field input type="text" label="脈搏 次/分" placeholder v-model="bloodpressure14"></v-text-field>
                                    </v-col>
                                    <v-col>
                                        <v-text-field input type="text" label="血氧 %" placeholder v-model="bloodair14"></v-text-field>
                                    </v-col>
                                    <v-col>
                                        <v-text-field input type="text" label="備註" placeholder v-model="mark14" />
                                    </v-col>
                                </v-row>
                            </v-card>
                            <v-card color="deep-orange lighten-5">
                                <v-row>
                                    <v-col>
                                        <v-checkbox label="交接" v-model="give15"></v-checkbox>
                                    </v-col>
                                    <v-col>
                                        <v-checkbox label="救護車" v-model="car15"></v-checkbox>
                                    </v-col>
                                    <v-col>
                                        <v-checkbox label="機上" v-model="fly15"></v-checkbox>
                                    </v-col>
                                    <v-col>
                                        <v-text-field input type="date" label="時間" placeholder v-model="time15"></v-text-field>
                                    </v-col>
                                </v-row>
                                <v-row>
                                    <v-col>
                                        <v-checkbox label="清" v-model="painone15"></v-checkbox>
                                    </v-col>
                                    <v-col>
                                        <v-checkbox label="聲" v-model="paintwo15"></v-checkbox>
                                    </v-col>
                                    <v-col>
                                        <v-checkbox label="痛" v-model="painthree15"></v-checkbox>
                                    </v-col>
                                    <v-col>
                                        <v-checkbox label="否" v-model="painfore15"></v-checkbox>
                                    </v-col>
                                    <v-col>
                                        <v-text-field input type="text" label="血壓 mmHg" placeholder v-model="bloodpulse15"></v-text-field>
                                    </v-col>
                                    <v-col>
                                        <v-text-field input type="text" label="脈搏 次/分" placeholder v-model="bloodpressure15"></v-text-field>
                                    </v-col>
                                    <v-col>
                                        <v-text-field input type="text" label="血氧 %" placeholder v-model="bloodair15"></v-text-field>
                                    </v-col>
                                    <v-col>
                                        <v-text-field input type="text" label="備註" placeholder v-model="mark15" />
                                    </v-col>
                                </v-row>
                            </v-card>
                            <v-card color="deep-orange lighten-4">
                                <v-row>
                                    <v-col>
                                        <v-checkbox label="交接" v-model="give16"></v-checkbox>
                                    </v-col>
                                    <v-col>
                                        <v-checkbox label="救護車" v-model="car16"></v-checkbox>
                                    </v-col>
                                    <v-col>
                                        <v-checkbox label="機上" v-model="fly16"></v-checkbox>
                                    </v-col>
                                    <v-col>
                                        <v-text-field input type="date" label="時間" placeholder v-model="time16"></v-text-field>
                                    </v-col>
                                </v-row>
                                <v-row>
                                    <v-col>
                                        <v-checkbox label="清" v-model="painone16"></v-checkbox>
                                    </v-col>
                                    <v-col>
                                        <v-checkbox label="聲" v-model="paintwo16"></v-checkbox>
                                    </v-col>
                                    <v-col>
                                        <v-checkbox label="痛" v-model="painthree16"></v-checkbox>
                                    </v-col>
                                    <v-col>
                                        <v-checkbox label="否" value="" v-model="painfore16"></v-checkbox>
                                    </v-col>
                                    <v-col>
                                        <v-text-field input type="text" label="血壓 mmHg" placeholder v-model="bloodpulse16"></v-text-field>
                                    </v-col>
                                    <v-col>
                                        <v-text-field input type="text" label="脈搏 次/分" placeholder v-model="bloodpressure16"></v-text-field>
                                    </v-col>
                                    <v-col>
                                        <v-text-field input type="text" label="血氧 %" placeholder v-model="bloodair16"></v-text-field>
                                    </v-col>
                                    <v-col>
                                        <v-text-field input type="text" label="備註" placeholder v-model="mark16" />
                                    </v-col>
                                </v-row>
                            </v-card>
                        </v-container>
                    </v-card>
                </v-col>
            </v-row>
            <v-row>
                <v-col>
                    <v-card class="mx-auto">
                        <v-system-bar color="deep-orange lighten-1"></v-system-bar>
                        <v-toolbar color="deep-orange lighten-2" dark>
                            <v-spacer></v-spacer>
                            <v-toolbar-title>呼吸道處置</v-toolbar-title>
                            <div class="flex-grow-1"></div>
                        </v-toolbar>
                        <v-container class="pa-2" fluid>
                            <v-row>
                                <v-col>
                                    <v-checkbox label="口咽呼吸道" v-model="mouth"></v-checkbox>
                                </v-col>
                                <v-col>
                                    <v-checkbox label="鼻咽呼吸道" v-model="nose"></v-checkbox>
                                </v-col>
                                <v-col>
                                    <v-checkbox label="抽吸" v-model="Suction"></v-checkbox>
                                </v-col>
                                <v-col>
                                    <v-checkbox label="非再呼吸型面罩" v-model="nonmask"></v-checkbox>
                                </v-col>
                                <v-col>
                                    <v-checkbox label="BVM" v-model="BVM"></v-checkbox>
                                </v-col>
                            </v-row>
                            <v-row>
                                <v-col>
                                    <v-checkbox label="鼻管" v-model="Nasaltube"></v-checkbox>
                                </v-col>
                                <v-col>
                                    <v-text-field input type="text" label="L/min" placeholder v-model="Nasaltubedata"></v-text-field>
                                </v-col>
                            </v-row>
                            <v-row>
                                <v-col>
                                    <v-checkbox label="面罩" v-model="facemask"></v-checkbox>
                                </v-col>
                                <v-col>
                                    <v-text-field input type="text" label="L/min" placeholder v-model="facemaskdata"></v-text-field>
                                </v-col>
                            </v-row>
                            <v-row>
                                <v-col>
                                    <v-checkbox label="i-gei" v-model="igei"></v-checkbox>
                                </v-col>
                                <v-col>
                                    <v-text-field input type="text" label="L/min" placeholder v-model="igeidata"></v-text-field>
                                </v-col>
                            </v-row>
                        </v-container>
                    </v-card>
                </v-col>
            </v-row>
            <v-row>
                <v-col>
                    <v-card class="mx-auto">
                        <v-system-bar color="deep-orange lighten-1"></v-system-bar>
                        <v-toolbar color="deep-orange lighten-2" dark>
                            <v-spacer></v-spacer>
                            <v-toolbar-title>心肺復術</v-toolbar-title>
                            <div class="flex-grow-1"></div>
                        </v-toolbar>
                        <v-container class="pa-2" fluid>
                            <v-row>
                                <v-col>
                                    <v-checkbox label="CPR" v-model="cpr"></v-checkbox>
                                </v-col>
                                <v-col>
                                    <v-text-field input type="text" label="分鐘" placeholder v-model="cprdata"></v-text-field>
                                </v-col>
                            </v-row>
                            <v-row>
                                <v-col>
                                    <v-checkbox label="使用AED" v-model="aed"></v-checkbox>
                                </v-col>
                            </v-row>
                            <v-row>
                                <v-col>
                                    <v-checkbox label="不建議電擊" v-model="notelectricshock"></v-checkbox>
                                </v-col>
                            </v-row>
                            <v-row>
                                <v-col>
                                    <v-checkbox label="電擊" v-model="electricshock"></v-checkbox>
                                </v-col>
                                <v-col>
                                    <v-text-field input type="text" label="次" placeholder v-model="electricshockdata"></v-text-field>
                                </v-col>
                            </v-row>
                            <v-row>
                                <v-col>
                                    <v-checkbox label="藥物處置" v-model="Drugdisposal"></v-checkbox>
                                </v-col>
                            </v-row>
                        </v-container>
                    </v-card>
                </v-col>
            </v-row>
            <v-row>
                <v-col>
                    <v-card class="mx-auto">
                        <v-system-bar color="deep-orange lighten-1"></v-system-bar>
                        <v-toolbar color="deep-orange lighten-2" dark>
                            <v-spacer></v-spacer>
                            <v-toolbar-title>創傷處置</v-toolbar-title>
                            <div class="flex-grow-1"></div>
                        </v-toolbar>
                        <v-container class="pa-2" fluid>
                            <v-row>
                                <v-col>
                                    <v-checkbox label="頸" v-model="Collar"></v-checkbox>
                                </v-col>
                                <v-col>
                                    <v-checkbox label="清洗傷口" v-model="Cleaningwound"></v-checkbox>
                                </v-col>
                                <v-col>
                                    <v-checkbox label="包紮止血" v-model="Bandagehemostasis"></v-checkbox>
                                </v-col>
                                <v-col>
                                    <v-checkbox label="護木固定" v-model="Protectedwood"></v-checkbox>
                                </v-col>
                            </v-row>
                        </v-container>
                    </v-card>
                </v-col>
            </v-row>
            <v-row>
                <v-col>
                    <v-card class="mx-auto">
                        <v-system-bar color="deep-orange lighten-1"></v-system-bar>
                        <v-toolbar color="deep-orange lighten-2" dark>
                            <v-spacer></v-spacer>
                            <v-toolbar-title>其它處置</v-toolbar-title>
                            <div class="flex-grow-1"></div>
                        </v-toolbar>
                        <v-container class="pa-2" fluid>
                            <v-row>
                                <v-col>
                                    <v-checkbox label="保暖" v-model="Keepwarm"></v-checkbox>
                                </v-col>
                                <v-col>
                                    <v-checkbox label="心理支持" v-model="Psychologicalsupport"></v-checkbox>
                                </v-col>
                                <v-col>
                                    <v-checkbox label="生命像監控" v-model="Lifemonitor"></v-checkbox>
                                </v-col>
                                <v-col>
                                    <v-checkbox label="協助生產" v-model="Assistproduction"></v-checkbox>
                                </v-col>
                                <v-col>
                                    <v-checkbox label="其它" v-model="other"></v-checkbox>
                                </v-col>
                            </v-row>
                        </v-container>
                    </v-card>
                </v-col>
            </v-row>
            <v-row>
                <v-col>
                    <v-card class="mx-auto">
                        <v-system-bar color="deep-orange lighten-1"></v-system-bar>
                        <v-toolbar color="deep-orange lighten-2" dark>
                            <v-spacer></v-spacer>
                            <v-toolbar-title>備註</v-toolbar-title>
                            <div class="flex-grow-1"></div>
                        </v-toolbar>
                        <v-container class="pa-2" fluid>
                            <v-row>
                                <v-col>
                                    <v-textarea solo label="備註" placeholder v-model="supple"></v-textarea>
                                </v-col>
                            </v-row>
                        </v-container>
                    </v-card>
                </v-col>
            </v-row>
            <v-row>
                <v-col>
                    <v-card class="mx-auto" width="400">
                        <v-system-bar color="deep-orange lighten-1"></v-system-bar>
                        <v-toolbar color="deep-orange lighten-2" dark>
                            <v-spacer></v-spacer>
                            <v-toolbar-title>救護人簽章</v-toolbar-title>
                            <div class="flex-grow-1"></div>
                        </v-toolbar>
                        <v-container class="pa-2" fluid>
                            <v-card height="300" width="500">
                                <v-row align="center" justify="center">
                                    請輕點一下
                                    <canvas id="TechSign" v-on:mousedown="handleMouseDown" v-on:mouseup="handleMouseUp" v-on:mousemove="handleMouseMove" v-on:mouseleave="handleMouseLeave" width="500px" height="200px" v-on:click="TechSignClick()"></canvas>
                                    <v-overlay :absolute="absolute" :opacity="opacity" :value="Techoverlay">
                                        <div class="overlaysing">
                                            <canvas id="TechSignPeople" v-on:mousedown="handleMouseDown" v-on:mouseup="handleMouseUp" v-on:mousemove="handleMouseMove" v-on:touchmove="touchMove" v-on:touchstart="touchStart" v-on:touchend="touchEnd" width="400px" height="200px"></canvas>
                                            <v-btn color="primary" v-on:click="SignDialogSaveClick()">
                                                Save
                                            </v-btn>
                                        </div>
                                    </v-overlay>
                                </v-row>
                            </v-card>
                        </v-container>
                    </v-card>
                </v-col>
                <v-col>
                    <v-card class="mx-auto" width="400">
                        <v-system-bar color="deep-orange lighten-1"></v-system-bar>
                        <v-toolbar color="deep-orange lighten-2" dark>
                            <v-spacer></v-spacer>
                            <v-toolbar-title>接收醫院醫護人員簽章</v-toolbar-title>
                            <div class="flex-grow-1"></div>
                        </v-toolbar>
                        <v-container class="pa-2" fluid>
                            <v-card height="300" width="500">
                                <v-row align="center" justify="center">
                                    請輕點一下
                                    <canvas id="reciveSign" v-on:mousedown="handleMouseDown" v-on:mouseup="handleMouseUp" v-on:mousemove="handleMouseMove" v-on:mouseleave="handleMouseLeave" width="500px" height="200px" v-on:click="reciveSignClick()"></canvas>
                                    <v-overlay :absolute="absolute" :opacity="opacity" :value="reciveoverlay">
                                        <div class="overlaysing">
                                            <canvas id="reciveSignPeople" v-on:mousedown="handleMouseDown" v-on:mouseup="handleMouseUp" v-on:mousemove="handleMouseMove" v-on:touchmove="touchMove" v-on:touchstart="touchStart" v-on:touchend="touchEnd" width="400px" height="200px"></canvas>
                                            <v-btn color="primary" v-on:click="SignDialogSaveClick()">
                                                Save
                                            </v-btn>
                                        </div>
                                    </v-overlay>
                                </v-row>
                            </v-card>
                        </v-container>
                    </v-card>
                </v-col>
            </v-row>
            <v-row>
                <v-col>
                    <v-btn v-on:click="TranClick()" color="yellow">送出
                    </v-btn>
                </v-col>
            </v-row>
            <v-overlay :absolute="true" :opacity="opacity" :value="dMessageDialog">
                <div class="overlaysing">
                    <h2>Offline </h2>
                    <v-btn color="primary" @click="dMessageDialog = false">
                        Save
                    </v-btn>
                </div>
            </v-overlay>
        </v-app>
    </div>
</template>
<script>
//日期: 20190912
//功能: 申請表單
//撰寫者: Bruce Chuang

import axios from 'axios';
import { validationMixin } from "vuelidate";
import { moment } from 'moment'
import { required, minLength, maxLength } from "vuelidate/lib/validators";
import { openDB, deleteDB, wrap, unwrap } from 'idb';

var a3db;
var indexDBdata;

export default {
    name: "HelloWorld",
    mixins: [validationMixin],
    props: ["ReqId", "Pname", "PId", "Sex", "BirthDate", "SendDate"],
    components: {},
    data: () => ({
        reciveunit: null,
        accepthospital: null,
        disabled: false,
        worktime: null,
        faxtime: null,
        targetranouttime: null,
        leavetranouttime: null,
        targettranintime: null,
        leavetranintime: null,
        standbytime: null,

        traumatic: false,
        nontraumatic: false,
        reason: null,

        give1: false,
        car1: false,
        fly1: false,
        time1: null,
        painone1: null,
        paintwo1: null,
        painthree1: null,
        painfore1: null,
        bloodpulse1: null,
        bloodpressure1: null,
        bloodair1: null,
        mark1: null,

        give2: false,
        car2: false,
        fly2: false,
        time2: null,
        painone2: null,
        paintwo2: null,
        painthree2: null,
        painfore2: null,
        bloodpulse2: null,
        bloodpressure2: null,
        bloodair2: null,
        mark2: null,

        give3: false,
        car3: false,
        fly3: false,
        time3: null,
        painone3: null,
        paintwo3: null,
        painthree3: null,
        painfore3: null,
        bloodpulse3: null,
        bloodpressure3: null,
        bloodair3: null,
        mark3: null,

        give4: false,
        car4: false,
        fly4: false,
        time4: null,
        painone4: null,
        paintwo4: null,
        painthree4: null,
        painfore4: null,
        bloodpulse4: null,
        bloodpressure4: null,
        bloodair4: null,
        mark4: null,

        give5: false,
        car5: false,
        fly5: false,
        time5: null,
        painone5: null,
        paintwo5: null,
        painthree5: null,
        painfore5: null,
        bloodpulse5: null,
        bloodpressure5: null,
        bloodair5: null,
        mark5: null,

        give6: false,
        car6: false,
        fly6: false,
        time6: null,
        painone6: null,
        paintwo6: null,
        painthree6: null,
        painfore6: null,
        bloodpulse6: null,
        bloodpressure6: null,
        bloodair6: null,
        mark6: null,

        give7: false,
        car7: false,
        fly7: false,
        time7: null,
        painone7: null,
        paintwo7: null,
        painthree7: null,
        painfore7: null,
        bloodpulse7: null,
        bloodpressure7: null,
        bloodair7: null,
        mark7: null,

        give8: false,
        car8: false,
        fly8: false,
        time8: null,
        painone8: null,
        paintwo8: null,
        painthree8: null,
        painfore8: null,
        bloodpulse8: null,
        bloodpressure8: null,
        bloodair8: null,
        mark8: null,


        give9: false,
        car9: false,
        fly9: false,
        time9: null,
        painone9: null,
        paintwo9: null,
        painthree9: null,
        painfore9: null,
        bloodpulse9: null,
        bloodpressure9: null,
        bloodair9: null,
        mark9: null,



        give10: false,
        car10: false,
        fly10: false,
        time10: null,
        painone10: null,
        paintwo10: null,
        painthree10: null,
        painfore10: null,
        bloodpulse10: null,
        bloodpressure10: null,
        bloodair10: null,
        mark10: null,

        give11: false,
        car11: false,
        fly11: false,
        time11: null,
        painone11: null,
        paintwo11: null,
        painthree11: null,
        painfore11: null,
        bloodpulse11: null,
        bloodpressure11: null,
        bloodair11: null,
        mark11: null,

        give12: false,
        car12: false,
        fly12: false,
        time12: null,
        painone12: null,
        paintwo12: null,
        painthree12: null,
        painfore12: null,
        bloodpulse12: null,
        bloodpressure12: null,
        bloodair12: null,
        mark12: null,

        give13: false,
        car13: false,
        fly13: false,
        time13: null,
        painone13: null,
        paintwo13: null,
        painthree13: null,
        painfore13: null,
        bloodpulse13: null,
        bloodpressure13: null,
        bloodair13: null,
        mark13: null,

        give14: false,
        car14: false,
        fly14: false,
        time14: null,
        painone14: null,
        paintwo14: null,
        painthree14: null,
        painfore14: null,
        bloodpulse14: null,
        bloodpressure14: null,
        bloodair14: null,
        mark14: null,

        give15: false,
        car15: false,
        fly15: false,
        time15: null,
        painone15: null,
        paintwo15: null,
        painthree15: null,
        painfore15: null,
        bloodpulse15: null,
        bloodpressure15: null,
        bloodair15: null,
        mark15: null,

        give16: false,
        car16: false,
        fly16: false,
        time16: null,
        painone16: null,
        paintwo16: null,
        painthree16: null,
        painfore16: null,
        bloodpulse16: null,
        bloodpressure16: null,
        bloodair16: null,
        mark16: null,

        mouth: false,
        nose: false,
        Suction: false,
        Nasaltube: false,
        Nasaltubedata: null,
        facemask: false,
        facemaskdata: null,
        nonmask: null,
        BVM: false,
        igei: false,
        igeidata: null,
        cpr: false,
        cprdata: null,
        aed: false,
        notelectricshock: false,
        electricshock: false,
        electricshockdata: null,
        Drugdisposal: null,
        Collar: false,
        Cleaningwound: false,
        Bandagehemostasis: false,
        Protectedwood: false,
        Keepwarm: false,
        Psychologicalsupport: false,
        Lifemonitor: false,
        Assistproduction: false,
        other: false,
        supple: null,


        absolute: true,
        opacity: 0.8,
        overlay: false,
        Techoverlay: false,
        reciveoverlay: false,
        items: ['M', 'F'],
        e1: 0,
        activestempper: "first",
        first: false,
        second: false,
        bTranSign: null,
        bPeopleShowSign: false,
        bReciveSign: false,
        bPatientSign: false,
        bTechSign: false,
        signClosevalue: null,
        SimpleMaskdata: null,
        NCdata: null,
        userSaved: false,
        sending: false,
        lastUser: null,
        dMessageDialog: false,
        showDialog: false,
        SignDialog: false,

        telnumber: null,
        teachexplain: null,
        teachsupple: null,
        ReferralID: null,
        patientID: null, //回寫時,區分
        patientName: null,
        patientbirthday: null,
        patientgender: null,
        patientIdenfity: null,
        patientlocation: null,
        patientdiagnoses: null,
        patientallergyintolerance: null,
        patienthistory: null,
        patientrighteye: null,
        patientlefteye: null,
        EndoTubedata: null,
        EndoFixdata: null,
        EndoDate: null,
        Trdata: null,
        TrdataDate: null,
        canvasPeople: false,

        TechSignShowCanvas: null,
        TranShowCanvas: null,
        ReciveShowCanvas: null,
        PatientShowCanvas: null,
        PeopleShowCanvas: null,
        RepaintCanvas: null,
        ongoingTouches: [],
        ReportTable: null,
        canvasTranSignImageData: null, //20190917 Bruce Chuang
        canvasReciveSignImageData: null, //20190917 Bruce Chuang
        canvasPatientSignImageData: null, //20190917 Bruce Chuang
        canvasPatientPeopleImageData: null,
        PeopleImage: null,
        doctor: null,
        transpeople: null,
        receivepeople: null,
        family: null,
        tranJson: null, //20190917 Bruce Chuang
        form: {
            firstName: null,
            gender: null,
            age: null,
            email: null,
            bNasal: false,
            bOral: false,
            selectedDate: null
        },
        mouse: {
            current: {
                x: 0,
                y: 0
                //y: 2400
            },
            previous: {
                x: 0,
                y: 0
            },
            down: false
        },
        peoplemouse: {
            current: {
                x: 0,
                y: 0
            },
            previous: {
                x: 0,
                y: 0
            },
            down: false
        }
    }),
    validations: {
        form: {
            firstName: {
                minLength: minLength(3)
            },
            age: {
                maxLength: maxLength(3)
            },
            gender: {
                required
            }
        }
    },
    beforeMount: function() {




        //this.readTempIndexdb();

    },
    activated: function() {

        this.readTempIndexdb();
        console.log("activated")

    },
    mounted: function() {
        //20190926 ALL DOM ready Bruce Chuang

        if (this.ReqId !== undefined)
            this.ReferralID = this.ReqId;

        if (this.Pname !== undefined)
            this.patientName = this.Pname;

        if (this.Sex !== undefined)
            this.patientgender = this.Sex.toUpperCase();

        if (this.PId !== undefined)
            this.patientID = this.PId;

        if (this.BirthDate !== undefined)
            this.patientbirthday = this.BirthDate;


        /*
            this.ReferralID = this.ReqId;
            this.patientName = this.Pname;
            this.patientgender = this.Sex.toUpperCase();
            this.patientId = this.PId;
            this.patientbirthday = this.BirthDate;
            */

        this.$nextTick(function() {

            //this.readTempIndexdb();

        })



    },
    created: function() {
        //20190918 Vue 初使值 Bruce Chuang

        //this.InitDb();
        //this.ReadIndexDB();
        //this.ClearIndexDB();
        //console.log("created");
    },
    computed: {
        currentMouse: function() {
            if (this.bReciveSign) {
                var c = document.getElementById("reciveSignPeople");
                var rect = c.getBoundingClientRect();
            } else if (this.bTechSign) {
                var c = document.getElementById("TechSignPeople");
                var rect = c.getBoundingClientRect();
            }
            return {
                x: Math.round(this.mouse.current.x - rect.left),
                y: Math.round(this.mouse.current.y - rect.top)
            };
        }
    },
    methods: {
        BooleanToStr: function(Boolean) {
            //20191014 轉換booleanToStr Bruce Chuang
            switch (Boolean) {
                case true:
                    return "true";
                case false:
                    return "false";
            }
        },
        ClearAllValue() {

            //------------------------------------
            this.ReferralID = null;
            this.patientID = null;
            this.patientName = null;
            this.patientbirthday = null;
            this.patientgender = null;
            this.patientIdenfity = null;
            this.traumatic = false;
            this.nontraumatic = false;
            this.reason = null;

            //------------------------------------
            this.give1 = null;
            this.car1 = null;
            this.fly1 = null;
            this.time1 = null;
            this.painone1 = null;
            this.paintwo1 = null;
            this.painthree1 = null;
            this.painfore1 = null;
            this.bloodpulse1 = null;
            this.bloodpressure1 = null;
            this.bloodair1 = null;
            this.mark1 = null;

            this.give2 = null;
            this.car2 = null;
            this.fly2 = null;
            this.time2 = null;
            this.painone2 = null;
            this.paintwo2 = null;
            this.painthree2 = null;
            this.painfore2 = null;
            this.bloodpulse2 = null;
            this.bloodpressure2 = null;
            this.bloodair2 = null;
            this.mark2 = null;

            this.give3 = null;
            this.car3 = null;
            this.fly3 = null;
            this.time3 = null;
            this.painone3 = null;
            this.paintwo3 = null;
            this.painthree3 = null;
            this.painfore3 = null;
            this.bloodpulse3 = null;
            this.bloodpressure3 = null;
            this.bloodair3 = null;
            this.mark3 = null;

            this.give4 = null;
            this.car4 = null;
            this.fly4 = null;
            this.time4 = null;
            this.painone4 = null;
            this.paintwo4 = null;
            this.painthree4 = null;
            this.painfore4 = null;
            this.bloodpulse4 = null;
            this.bloodpressure4 = null;
            this.bloodair4 = null;
            this.mark4 = null;

            this.give5 = null;
            this.car5 = null;
            this.fly5 = null;
            this.time5 = null;
            this.painone5 = null;
            this.paintwo5 = null;
            this.painthree5 = null;
            this.painfore5 = null;
            this.bloodpulse5 = null;
            this.bloodpressure5 = null;
            this.bloodair5 = null;
            this.mark5 = null;

            this.give6 = null;
            this.car6 = null;
            this.fly6 = null;
            this.time6 = null;
            this.painone6 = null;
            this.paintwo6 = null;
            this.painthree6 = null;
            this.painfore6 = null;
            this.bloodpulse6 = null;
            this.bloodpressure6 = null;
            this.bloodair6 = null;
            this.mark6 = null;

            this.give7 = null;
            this.car7 = null;
            this.fly7 = null;
            this.time7 = null;
            this.painone7 = null;
            this.paintwo7 = null;
            this.painthree7 = null;
            this.painfore7 = null;
            this.bloodpulse7 = null;
            this.bloodpressure7 = null;
            this.bloodair7 = null;
            this.mark7 = null;

            this.give8 = null;
            this.car8 = null;
            this.fly8 = null;
            this.time8 = null;
            this.painone8 = null;
            this.paintwo8 = null;
            this.painthree8 = null;
            this.painfore8 = null;
            this.bloodpulse8 = null;
            this.bloodpressure8 = null;
            this.bloodair8 = null;
            this.mark8 = null;


            this.give9 = null;
            this.car9 = null;
            this.fly9 = null;
            this.time9 = null;
            this.painone9 = null;
            this.paintwo9 = null;
            this.painthree9 = null;
            this.painfore9 = null;
            this.bloodpulse9 = null;
            this.bloodpressure9 = null;
            this.bloodair9 = null;
            this.mark9 = null;



            this.give10 = null;
            this.car10 = null;
            this.fly10 = null;
            this.time10 = null;
            this.painone10 = null;
            this.paintwo10 = null;
            this.painthree10 = null;
            this.painfore10 = null;
            this.bloodpulse10 = null;
            this.bloodpressure10 = null;
            this.bloodair10 = null;
            this.mark10 = null;

            this.give11 = null;
            this.car11 = null;
            this.fly11 = null;
            this.time11 = null;
            this.painone11 = null;
            this.paintwo11 = null;
            this.painthree11 = null;
            this.painfore11 = null;
            this.bloodpulse11 = null;
            this.bloodpressure11 = null;
            this.bloodair11 = null;
            this.mark11 = null;

            this.give12 = null;
            this.car12 = null;
            this.fly12 = null;
            this.time12 = null;
            this.painone12 = null;
            this.paintwo12 = null;
            this.painthree12 = null;
            this.painfore12 = null;
            this.bloodpulse12 = null;
            this.bloodpressure12 = null;
            this.bloodair12 = null;
            this.mark12 = null;

            this.give13 = null;
            this.car13 = null;
            this.fly13 = null;
            this.time13 = null;
            this.painone13 = null;
            this.paintwo13 = null;
            this.painthree13 = null;
            this.painfore13 = null;
            this.bloodpulse13 = null;
            this.bloodpressure13 = null;
            this.bloodair13 = null;
            this.mark13 = null;

            this.give14 = null;
            this.car14 = null;
            this.fly14 = null;
            this.time14 = null;
            this.painone14 = null;
            this.paintwo14 = null;
            this.painthree14 = null;
            this.painfore14 = null;
            this.bloodpulse14 = null;
            this.bloodpressure14 = null;
            this.bloodair14 = null;
            this.mark14 = null;

            this.give15 = null;
            this.car15 = null;
            this.fly15 = null;
            this.time15 = null;
            this.painone15 = null;
            this.paintwo15 = null;
            this.painthree15 = null;
            this.painfore15 = null;
            this.bloodpulse15 = null;
            this.bloodpressure15 = null;
            this.bloodair15 = null;
            this.mark15 = null;

            this.give16 = null;
            this.car16 = null;
            this.fly16 = null;
            this.time16 = null;
            this.painone16 = null;
            this.paintwo16 = null;
            this.painthree16 = null;
            this.painfore16 = null;
            this.bloodpulse16 = null;
            this.bloodpressure16 = null;
            this.bloodair16 = null;
            this.mark16 = null;
            //------------------------------------

            console.log("ClearAllValue");
        },
        readTempIndexdb() {



        },
        setDone(id, index) {
            this[id] = true;
            this.secondStepError = null;
            if (index) {
                this.activestempper = index;
            }
        },
        PeopleShowClick: function() {
            this.bPeopleShowSign = true;
            this.showDialog = true;
        },
        OfflineClick: function() {
            this.dMessageDialog = false;
        },
        PeopleDialogCloseClick: function() {
            this.bPeopleShowSign = false;
            this.showDialog = false;
        },
        SignDialogCloseClick: function() {
            this.bTechSign = false;
            this.bPatientSign = false;
            this.bReciveSign = false;
            this.bTranSign = false;
            this.SignDialog = false;
            this.overlay = false;
        },
        SignDialogSaveClick: function() {

            this.Techoverlay = false;
            this.reciveoverlay = false;
            this.bTechSign = false;
            this.bReciveSign = false;
            /*
            this.bTechSign = false;
            this.bPatientSign = false;
            this.bReciveSign = false;
            this.bTranSign = false;
            this.SignDialog = false;
            */
        },
        reciveSignClick: function() {
            this.reciveoverlay = true;
            this.bReciveSign = true;
        },
        TechSignClick: function() {
            this.Techoverlay = true;
            this.bTechSign = true;
        },
        PatientClick: function() {
            this.bPatientSign = true;
            this.SignDialog = true;
        },
        ReciveClick: function() {
            this.bReciveSign = true;
            this.SignDialog = true;
        },
        TranSignClick() {
            this.bTranSign = true;
            this.SignDialog = true;
            this.overlay = true;
        },
        TranClick() {

            let popupWinindow;

            let sTemp = ` <table style=" height: 100%;" border="1px solid">
            <tbody>
              <tr style="height: 23px;">
                <td
                  style="width: 520px; height: 23px;"
                  colspan="8"
                >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;派遣資料</td>
              </tr>
              <tr style="height: 43px;">
                <td style="width: 74px; height: 43px;">&nbsp;出勤通知時間</td>
                <td style="width: 74px; height: 43px;">&nbsp;傳真回覆時間</td>
                <td style="width: 74px; height: 43px;">&nbsp;到達轉出醫院&nbsp;</td>
                <td style="width: 74px; height: 43px;">&nbsp;離開轉出醫院&nbsp;</td>
                <td style="width: 74px; height: 43px;">&nbsp;抵達轉入醫院&nbsp;</td>
                <td style="width: 75px; height: 43px;">&nbsp;離開轉入醫院&nbsp;</td>
                <td style="width: 75px; height: 43px;" colspan="2">&nbsp;返隊待命時間</td>
              </tr>
              <tr style="height: 23px;">
                <td style="width: 74px; height: 23px;">&nbsp;時 分</td>
                <td style="width: 74px; height: 23px;">&nbsp;時 分</td>
                <td style="width: 74px; height: 23px;">&nbsp;時 分</td>
                <td style="width: 74px; height: 23px;">&nbsp;時 分</td>
                <td style="width: 74px; height: 23px;">&nbsp;時 分</td>
                <td style="width: 75px; height: 23px;">&nbsp;時 分</td>
                <td style="width: 75px; height: 23px;" colspan="2">&nbsp;時 分</td>
              </tr>
              <tr style="height: 23px;">
                <td
                  style="width: 520px; height: 23px;"
                  colspan="8"
                >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;病患資料&nbsp;</td>
              </tr>
              <tr style="height: 23px;">
                <td style="width: 74px; height: 23px;">&nbsp;姓 名</td>
                <td style="width: 74px; height: 23px;">&nbsp;${this.patientName}</td>
                <td style="width: 74px; height: 23px;">&nbsp;&nbsp;性&nbsp; 別</td>
                <td style="width: 74px; height: 23px;">&nbsp;${this.patientgender}</td>
                <td style="width: 74px; height: 23px;">&nbsp;出生日 期</td>
                <td
                  style="width: 75px; height: 23px;"
                  colspan="3"
                >&nbsp;&nbsp;{{this.patientbirthday}}</td>
              </tr>
              <tr style="height: 23px;">
                <td style="width: 74px; height: 23px;">&nbsp;診 斷&nbsp;</td>
                <td
                  style="width: 74px; height: 23px;"
                  colspan="3"
                >&nbsp;&nbsp;&nbsp;{{this.patientdiagnoses}}</td>
                <td style="width: 74px; height: 23px;">&nbsp;過 敏 史</td>
                <td
                  style="width: 75px; height: 23px;"
                  colspan="3"
                >&nbsp;&nbsp;{{this.patientallergyintolerance}}</td>
              </tr>
              <tr style="height: 43px;">
                <td style="width: 74px; height: 43px;">送往醫 院 或 地 點</td>
                <td style="width: 74px; height: 43px;" colspan="3">&nbsp;{{this.patientlocation}}</td>
                <td style="width: 74px; height: 43px;">過去病 史</td>
                <td style="width: 75px; height: 43px;" colspan="3">&nbsp;{{this.patienthistory}}</td>
              </tr>
              <tr style="height: 23px;">
                <td style="width: 74px; height: 23px;" colspan="8">處置項目(此欄可複選)</td>
              </tr>
              <tr style="height: 43px;">
                <td style="width: 74px; height: 442px;" rowspan="14">病 人 狀 況</td>
                <td style="width: 74px; height: 43px;" colspan="2">瞳孔</td>
                <td style="width: 74px; height: 43px;" colspan="2">注射/引流管路</td>
                <td style="width: 75px; height: 43px;" colspan="3">請在圖上標示說明受傷部位及其尺寸：</td>
              </tr>
              <tr style="height: 43px;">
                <td style="width: 74px; height: 43px;">右{{this.patientrighteye}}</td>
                <td style="width: 74px; height: 43px;">左{{this.patientlefteye}}</td>
                <td style="width: 74px; height: 43px;">□CVP 位置{{this.Cvpdata}}</td>
                <td style="width: 74px; height: 43px;">{{this.CvpdataCm}}cm</td>
                <td
                  style="width: 75px; height: 43px;"
                  colspan="3"
                  rowspan="17"
                >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>
              </tr>
              <tr style="height: 43px;">
                <td style="width: 74px; height: 43px;" colspan="2">呼吸道管路</td>
                <td style="width: 74px; height: 43px;">□Chest tube</td>
                <td style="width: 74px; height: 43px;">{{this.TubeChestdata}}號</td>
              </tr>
              <tr style="height: 23px;">
                <td style="width: 74px; height: 23px;" colspan="2">□Nasal airway</td>
                <td style="width: 74px; height: 23px;">位置{{this.Chestdata}}</td>
                <td style="width: 74px; height: 23px;">{{this.ChestCM}}cm</td>
              </tr>
              <tr style="height: 23px;">
                <td style="width: 74px; height: 23px;" colspan="2">□Oral airway</td>
                <td style="width: 74px; height: 23px;" colspan="2">□Port-A</td>
              </tr>
              <tr style="height: 23px;">
                <td style="width: 74px; height: 23px;">□N/C</td>
                <td style="width: 74px; height: 23px;">L/min</td>
                <td style="width: 74px; height: 23px;">位置{{this.PortAdata}}</td>
                <td style="width: 74px; height: 23px;">{{this.PortAdataNum}}號</td>
              </tr>
              <tr style="height: 43px;">
                <td style="width: 74px; height: 43px;">□Simple mask</td>
                <td style="width: 74px; height: 43px;">{{this.SimpleMaskdata}}L/min</td>
                <td style="width: 74px; height: 43px;" colspan="2">□A-line</td>
              </tr>
              <tr style="height: 43px;">
                <td style="width: 74px; height: 43px;" colspan="2">□Non-rebreathing mask</td>
                <td style="width: 74px; height: 43px;">位置{{this.alinedata}}</td>
                <td style="width: 74px; height: 43px;">{{this.alinedatanum}}號</td>
              </tr>
              <tr style="height: 43px;">
                <td style="width: 74px; height: 43px;">□Endo tube</td>
                <td style="width: 74px; height: 43px;">{{this.EndoTubedata}}號</td>
                <td style="width: 74px; height: 43px; ">□IV 位置{{this.IVdatapostion}}</td>
                <td style="width: 74px; height: 43px;">{{this.IVdatanumber}}號</td>
              </tr>
              <tr style="height: 23px;">
                <td style="width: 74px; height: 23px;">fix</td>
                <td style="width: 74px; height: 23px;">{{this.EndoFixdata}}cm</td>
                <td style="width: 74px; height: 23px;">位置{{this.IVdatapostiontwo}}</td>
                <td style="width: 74px; height: 23px;">{{this.IVdatanumbertwo}}號</td>
              </tr>
              <tr style="height: 23px;">
                <td style="width: 74px; height: 23px;">放置日期</td>
                <td style="width: 74px; height: 23px;">&nbsp;{{this.EndoDate}}</td>
                <td style="width: 74px; height: 23px;">□NG{{this.NGdatanum}}</td>
                <td style="width: 74px; height: 23px;">{{this.NGdatacm}}cm</td>
              </tr>
              <tr style="height: 23px;">
                <td style="width: 74px; height: 23px;">□Tr</td>
                <td style="width: 74px; height: 23px;">{{this.Trdata}}號</td>
                <td style="width: 74px; height: 23px;">放置日期{{ this.TrdataDate}}</td>
                <td style="width: 74px; height: 23px;">&nbsp;</td>
              </tr>
              <tr style="height: 23px;">
                <td style="width: 74px; height: 23px;">放置日期</td>
                <td style="width: 74px; height: 23px;">&nbsp;{{this.NGdatadate}}</td>
                <td style="width: 74px; height: 23px;">□Foley</td>
                <td style="width: 74px; height: 23px;">號</td>
              </tr>
              <tr style="height: 23px;">
                <td style="width: 74px; height: 23px;">□BIPAP</td>
                <td style="width: 74px; height: 23px;">&nbsp;</td>
                <td style="width: 74px; height: 23px;">放置日期</td>
                <td style="width: 74px; height: 23px;">&nbsp;</td>
              </tr>
              <tr style="height: 23px;">
                <td style="width: 74px; height: 23px;">&nbsp;</td>
                <td style="width: 74px; height: 23px;">□其他</td>
                <td style="width: 74px; height: 23px;">&nbsp;</td>
                <td style="width: 74px; height: 23px;">□其他</td>
                <td style="width: 74px; height: 23px;">&nbsp;</td>
              </tr>
              <tr style="height: 23px;">
                <td style="width: 74px; height: 23px;">&nbsp;</td>
                <td style="width: 74px; height: 23px;" colspan="2">藥物</td>
                <td style="width: 74px; height: 23px;" colspan="2">皮膚狀況</td>
              </tr>
              <tr style="height: 23px;">
                <td style="width: 74px; height: 23px;">&nbsp;</td>
                <td style="width: 74px; height: 23px;">□0.9%N/S</td>
                <td style="width: 74px; height: 23px;">cc/hr</td>
                <td style="width: 74px; height: 23px;">□完整</td>
                <td style="width: 74px; height: 23px;">&nbsp;</td>
              </tr>
              <tr style="height: 23px;">
                <td style="width: 74px; height: 23px;">&nbsp;</td>
                <td style="width: 74px; height: 23px;">□D5S</td>
                <td style="width: 74px; height: 23px;">cc/hr</td>
                <td style="width: 74px; height: 23px;">□壓瘡</td>
                <td style="width: 74px; height: 23px;">部位</td>
              </tr>
              <tr style="height: 23px;">
                <td style="width: 74px; height: 23px;">&nbsp;</td>
                <td style="width: 74px; height: 23px;">□D5W</td>
                <td style="width: 74px; height: 23px;">cc/hr</td>
                <td style="width: 74px; height: 23px;">大小</td>
                <td style="width: 74px; height: 23px;">深度</td>
                <td style="width: 75px; height: 23px;" colspan="3">&nbsp;Ventilation&nbsp;</td>
              </tr>
              <tr style="height: 23px;">
                <td style="width: 74px; height: 23px;">&nbsp;</td>
                <td style="width: 74px; height: 23px;">□其他</td>
                <td style="width: 74px; height: 23px;">&nbsp;</td>
                <td style="width: 74px; height: 23px;">□水腫</td>
                <td style="width: 74px; height: 23px;">部位</td>
                <td style="width: 75px; height: 23px;">&nbsp;Mode{{this.Modedata}}</td>
                <td style="width: 75px; height: 23px;" colspan="2">&nbsp;FiO2{{this.fi02data}}</td>
              </tr>
              <tr style="height: 23px;">
                <td style="width: 74px; height: 23px;">&nbsp;</td>
                <td style="width: 74px; height: 23px;">&nbsp;</td>
                <td style="width: 74px; height: 23px;">&nbsp;</td>
                <td style="width: 74px; height: 23px;">□其他</td>
                <td style="width: 74px; height: 23px;">&nbsp;</td>
                <td style="width: 75px; height: 23px;">&nbsp;Rate{{this.Ratedata}}</td>
                <td
                  style="width: 75px; height: 23px;"
                  colspan="2"
                >&nbsp;Total Rate{{this.TotalRatedata}}</td>
              </tr>
              <tr style="height: 23px;">
                <td style="width: 74px; height: 23px;">&nbsp;</td>
                <td style="width: 74px; height: 23px;">&nbsp;</td>
                <td style="width: 74px; height: 23px;">&nbsp;</td>
                <td style="width: 74px; height: 23px;" colspan="2">創傷處置</td>
                <td style="width: 75px; height: 23px;">&nbsp;Tidal Volume{{this.TidalVolumedata}}</td>
                <td style="width: 75px; height: 23px;" colspan="2">&nbsp;I:E{{this.IEdata}}</td>
              </tr>
              <tr style="height: 23px;">
                <td style="width: 74px; height: 23px;">&nbsp;</td>
                <td style="width: 74px; height: 23px;">&nbsp;</td>
                <td style="width: 74px; height: 23px;">&nbsp;</td>
                <td style="width: 74px; height: 23px;" colspan="2">□頸圈</td>
                <td style="width: 75px; height: 23px;" colspan="3">&nbsp;Pressure&nbsp;</td>
              </tr>
              <tr style="height: 23px;">
                <td style="width: 74px; height: 23px;">&nbsp;</td>
                <td style="width: 74px; height: 23px;">&nbsp;</td>
                <td style="width: 74px; height: 23px;">&nbsp;</td>
                <td style="width: 74px; height: 23px;">□石膏固定位置</td>
                <td style="width: 74px; height: 23px;">&nbsp;</td>
                <td style="width: 75px; height: 23px;">&nbsp;Peak{{this.Peakdata}}</td>
                <td style="width: 75px; height: 23px;" colspan="2">&nbsp;Plateau{{this.Plateaudata}}</td>
              </tr>
              <tr style="height: 23px;">
                <td style="width: 74px; height: 23px;">&nbsp;</td>
                <td style="width: 74px; height: 23px;">&nbsp;</td>
                <td style="width: 74px; height: 23px;">&nbsp;</td>
                <td style="width: 74px; height: 23px;">□其他</td>
                <td style="width: 74px; height: 23px;">&nbsp;</td>
                <td style="width: 75px; height: 23px;">&nbsp;PEEP{{this.Peepdata}}</td>
                <td style="width: 75px; height: 23px;">&nbsp;P.S.{{this.PSdata}}</td>
                <td style="width: 75px; height: 23px;">P.C{{this.PCdata}}</td>
              </tr>
            </tbody>
          </table>`;
            //Clear
            //this.ClearIndexDB();
            //Add
            //this.addIndexDB(); //test addd INdexDB


            /*
            popupWinindow = window.open(
                 "",
                 "_blank",
                 "width=600,height=700,scrollbars=no,menubar=no,toolbar=yes,location=no,status=no,titlebar=no"
               );
               popupWinindow.document.open();
               popupWinindow.document.write(`
               <html>
               <head>
                   <title>空審申請單</title>
               </head>
               <body onload="window.print(); window.close()">
                 
                   ${sTemp}
                 
               </body>
                </html>`);

               popupWinindow.document.close();
               */

            //this.ClearAllValue();

            if (navigator.onLine === false) {

                //this.dMessageDialog = true;
                alert("沒有網路，請稍候傳送");
                //this.ClearAllValue();

            } else {


                this.linskyjson();
                //this.ClearAllValue();
                //this.$router.replace("/");
            }

            //this.$router.go(-1);
        },
        linskyjson: function() {


            var datajson = null;
            var TechSignTemp = null;
            var reciveSignTemp = null;
            var data = null;


            var c = document.getElementById("TechSign");
            if (c !== null && c !== undefined)
                TechSignTemp = c.toDataURL("image/png");


            var c2 = document.getElementById("reciveSign");
            if (c2 !== null && c2 !== undefined)
                reciveSignTemp = c2.toDataURL("image/png");


            data = {
                ReferralID: this.ReferralID,
                PatientInfo: {
                    patientID: this.patientID,
                    patientname: this.patientName,
                    patientgender: this.patientgender,
                    patientbirthday: this.patientbirthday,
                },
                SendData: {
                    reciveunit: this.reciveunit,
                    accepthospital: this.accepthospital,
                    Notifytime: this.worktime,
                    recivetime: this.faxtime,
                    onAirrtime: this.targetranouttime,
                    offlineAirrtime: this.leavetranouttime,
                    hospitaltime: this.targettranintime,
                    leavehospitaltime: this.leavetranintime,
                    standbytime: this.standbytime,
                },
                procedure: {
                    traumatic: this.BooleanToStr(this.traumatic),
                    nontraumatic: this.BooleanToStr(this.nontraumatic),
                    reason: this.reason,
                    give1: this.BooleanToStr(this.give1),
                    car1: this.BooleanToStr(this.car1),
                    fly1: this.BooleanToStr(this.fly1),
                    time1: this.time1,
                    painone1: this.BooleanToStr(this.painone1),
                    paintwo1: this.BooleanToStr(this.paintwo1),
                    painthree1: this.BooleanToStr(this.painthree1),
                    painfore1: this.BooleanToStr(this.painfore1),
                    bloodpulse1: this.bloodpulse1,
                    bloodpressure1: this.bloodpressure1,
                    bloodair1: this.bloodair1,
                    mark1: this.mark1,
                    give2: this.BooleanToStr(this.give2),
                    car2: this.BooleanToStr(this.car2),
                    fly2: this.BooleanToStr(this.fly2),
                    time2: this.time2,
                    painone2: this.BooleanToStr(this.painone2),
                    paintwo2: this.BooleanToStr(this.paintwo2),
                    painthree2: this.BooleanToStr(this.painthree2),
                    painfore2: this.BooleanToStr(this.painfore2),
                    bloodpulse2: this.bloodpulse2,
                    bloodpressure2: this.bloodpressure2,
                    bloodair2: this.bloodair2,
                    mark2: this.mark2,
                    give3: this.BooleanToStr(this.give3),
                    car3: this.BooleanToStr(this.car3),
                    fly3: this.BooleanToStr(this.fly3),
                    time3: this.time3,
                    painone3: this.BooleanToStr(this.painone3),
                    paintwo3: this.BooleanToStr(this.paintwo3),
                    painthree3: this.BooleanToStr(this.painthree3),
                    painfore3: this.BooleanToStr(this.painfore3),
                    bloodpulse3: this.bloodpulse3,
                    bloodpressure3: this.bloodpressure3,
                    bloodair3: this.bloodair3,
                    mark3: this.mark3,
                    give4: this.BooleanToStr(this.give4),
                    car4: this.BooleanToStr(this.car4),
                    fly4: this.BooleanToStr(this.fly4),
                    time4: this.time4,
                    painone4: this.BooleanToStr(this.painone4),
                    paintwo4: this.BooleanToStr(this.paintwo4),
                    painthree4: this.BooleanToStr(this.painthree4),
                    painfore4: this.BooleanToStr(this.painfore4),
                    bloodpulse4: this.bloodpulse4,
                    bloodpressure4: this.bloodpressure4,
                    bloodair4: this.bloodair4,
                    mark4: this.mark4,
                    give5: this.BooleanToStr(this.give5),
                    car5: this.BooleanToStr(this.car5),
                    fly5: this.BooleanToStr(this.fly5),
                    time5: this.time5,
                    painone5: this.BooleanToStr(this.painone5),
                    paintwo5: this.BooleanToStr(this.paintwo5),
                    painthree5: this.BooleanToStr(this.painthree5),
                    painfore5: this.BooleanToStr(this.painfore5),
                    bloodpulse5: this.bloodpulse5,
                    bloodpressure5: this.bloodpressure5,
                    bloodair5: this.bloodair5,
                    mark5: this.mark5,
                    give6: this.BooleanToStr(this.give6),
                    car6: this.BooleanToStr(this.car6),
                    fly6: this.BooleanToStr(this.fly6),
                    time6: this.time6,
                    painone6: this.BooleanToStr(this.painone6),
                    paintwo6: this.BooleanToStr(this.paintwo6),
                    painthree6: this.BooleanToStr(this.painthree6),
                    painfore6: this.BooleanToStr(this.painfore6),
                    bloodpulse6: this.bloodpulse6,
                    bloodpressure6: this.bloodpressure6,
                    bloodair6: this.bloodair6,
                    mark6: this.mark6,
                    give7: this.BooleanToStr(this.give7),
                    car7: this.BooleanToStr(this.car7),
                    fly7: this.BooleanToStr(this.fly7),
                    time7: this.time7,
                    painone7: this.BooleanToStr(this.painone7),
                    paintwo7: this.BooleanToStr(this.paintwo7),
                    painthree7: this.BooleanToStr(this.painthree7),
                    painfore7: this.BooleanToStr(this.painfore7),
                    bloodpulse7: this.bloodpulse7,
                    bloodpressure7: this.bloodpressure7,
                    bloodair7: this.bloodair7,
                    mark7: this.mark7,
                    give8: this.BooleanToStr(this.give8),
                    car8: this.BooleanToStr(this.car8),
                    fly8: this.BooleanToStr(this.fly8),
                    time8: this.time8,
                    painone8: this.BooleanToStr(this.painone8),
                    paintwo8: this.BooleanToStr(this.paintwo8),
                    painthree8: this.BooleanToStr(this.painthree8),
                    painfore8: this.BooleanToStr(this.painfore8),
                    bloodpulse8: this.bloodpulse8,
                    bloodpressure8: this.bloodpressure8,
                    bloodair8: this.bloodair8,
                    mark8: this.mark8,
                    give9: this.BooleanToStr(this.give9),
                    car9: this.BooleanToStr(this.car9),
                    fly9: this.BooleanToStr(this.fly9),
                    time9: this.time9,
                    painone9: this.BooleanToStr(this.painone9),
                    paintwo9: this.BooleanToStr(this.paintwo9),
                    painthree9: this.BooleanToStr(this.painthree9),
                    painfore9: this.BooleanToStr(this.painfore9),
                    bloodpulse9: this.bloodpulse9,
                    bloodpressure9: this.bloodpressure9,
                    bloodair9: this.bloodair9,
                    mark9: this.mark9,
                    give10: this.BooleanToStr(this.give10),
                    car10: this.BooleanToStr(this.car10),
                    fly10: this.BooleanToStr(this.fly10),
                    time10: this.time10,
                    painone10: this.BooleanToStr(this.painone10),
                    paintwo10: this.BooleanToStr(this.paintwo10),
                    painthree10: this.BooleanToStr(this.painthree10),
                    painfore10: this.BooleanToStr(this.painfore10),
                    bloodpulse10: this.bloodpulse10,
                    bloodpressure10: this.bloodpressure10,
                    bloodair10: this.bloodair10,
                    mark10: this.mark10,
                    give11: this.BooleanToStr(this.give11),
                    car11: this.BooleanToStr(this.car11),
                    fly11: this.BooleanToStr(this.fly11),
                    time11: this.time11,
                    painone11: this.BooleanToStr(this.painone11),
                    paintwo11: this.BooleanToStr(this.paintwo11),
                    painthree11: this.BooleanToStr(this.painthree11),
                    painfore11: this.BooleanToStr(this.painfore11),
                    bloodpulse11: this.bloodpulse11,
                    bloodpressure11: this.bloodpressure11,
                    bloodair11: this.bloodair11,
                    mark11: this.mark11,
                    give12: this.BooleanToStr(this.give12),
                    car12: this.BooleanToStr(this.car12),
                    fly12: this.BooleanToStr(this.fly12),
                    time12: this.time12,
                    painone12: this.BooleanToStr(this.painone12),
                    paintwo12: this.BooleanToStr(this.paintwo12),
                    painthree12: this.BooleanToStr(this.painthree12),
                    painfore12: this.BooleanToStr(this.painfore12),
                    bloodpulse12: this.bloodpulse12,
                    bloodpressure12: this.bloodpressure12,
                    bloodair12: this.bloodair12,
                    mark12: this.mark12,
                    give13: this.BooleanToStr(this.give13),
                    car13: this.BooleanToStr(this.car13),
                    fly13: this.BooleanToStr(this.fly13),
                    time13: this.time13,
                    painone13: this.BooleanToStr(this.painone13),
                    paintwo13: this.BooleanToStr(this.paintwo13),
                    painthree13: this.BooleanToStr(this.painthree13),
                    painfore13: this.BooleanToStr(this.painfore13),
                    bloodpulse13: this.bloodpulse13,
                    bloodpressure13: this.bloodpressure13,
                    bloodair13: this.bloodair13,
                    mark13: this.mark13,
                    give14: this.BooleanToStr(this.give14),
                    car14: this.BooleanToStr(this.car14),
                    fly14: this.BooleanToStr(this.fly14),
                    time14: this.time14,
                    painone14: this.BooleanToStr(this.painone14),
                    paintwo14: this.BooleanToStr(this.paintwo14),
                    painthree14: this.BooleanToStr(this.painthree14),
                    painfore14: this.BooleanToStr(this.painfore14),
                    bloodpulse14: this.bloodpulse14,
                    bloodpressure14: this.bloodpressure14,
                    bloodair14: this.bloodair14,
                    mark14: this.mark14,
                    give15: this.BooleanToStr(this.give15),
                    car15: this.BooleanToStr(this.car15),
                    fly15: this.BooleanToStr(this.fly15),
                    time15: this.time15,
                    painone15: this.BooleanToStr(this.painone15),
                    paintwo15: this.BooleanToStr(this.paintwo15),
                    painthree15: this.BooleanToStr(this.painthree15),
                    painfore15: this.BooleanToStr(this.painfore15),
                    bloodpulse15: this.bloodpulse15,
                    bloodpressure15: this.bloodpressure15,
                    bloodair15: this.bloodair15,
                    mark15: this.mark15,
                    give16: this.BooleanToStr(this.give16),
                    car16: this.BooleanToStr(this.car16),
                    fly16: this.BooleanToStr(this.fly16),
                    time16: this.time16,
                    painone16: this.BooleanToStr(this.painone16),
                    paintwo16: this.BooleanToStr(this.paintwo16),
                    painthree16: this.BooleanToStr(this.painthree16),
                    painfore16: this.BooleanToStr(this.painfore16),
                    bloodpulse16: this.bloodpulse16,
                    bloodpressure16: this.bloodpressure16,
                    bloodair16: this.bloodair16,
                    mark16: this.mark16,

                    mouth: this.BooleanToStr(this.mouth),
                    nose: this.BooleanToStr(this.nose),
                    Suction: this.BooleanToStr(this.Suction),
                    Nasaltube: this.BooleanToStr(this.Nasaltube),
                    Nasaltubedata: this.Nasaltubedata,
                    facemask: this.BooleanToStr(this.facemask),
                    facemaskdata: this.facemaskdata,
                    nonmask: this.BooleanToStr(this.nonmask),
                    BVM: this.BooleanToStr(this.BVM),
                    igei: this.BooleanToStr(this.igei),
                    igeidata: this.igeidata,
                    cpr: this.BooleanToStr(this.cpr),
                    cprdata: this.cprdata,
                    aed: this.BooleanToStr(this.aed),
                    notelectricshock: this.BooleanToStr(this.notelectricshock),
                    electricshock: this.BooleanToStr(this.electricshock),
                    electricshockdata: this.electricshockdata,
                    Drugdisposal: this.BooleanToStr(this.Drugdisposal),
                    Collar: this.BooleanToStr(this.Collar),
                    Cleaningwound: this.BooleanToStr(this.Cleaningwound),
                    Bandagehemostasis: this.BooleanToStr(this.Bandagehemostasis),
                    Protectedwood: this.BooleanToStr(this.Protectedwood),
                    Keepwarm: this.BooleanToStr(this.Keepwarm),
                    Psychologicalsupport: this.BooleanToStr(this.Psychologicalsupport),
                    Lifemonitor: this.BooleanToStr(this.Lifemonitor),
                    Assistproduction: this.BooleanToStr(this.Assistproduction),
                    other: this.BooleanToStr(this.other),
                    supple: this.supple,
                },
                Signature: {
                    emtpeople: TechSignTemp,
                    receivepeople: reciveSignTemp
                }
            };

            datajson = "data=" + JSON.stringify(data);

            console.log(datajson);

            axios.post('https://airreferral.datacom.com.tw/mobile/UploadJsonEpair.ashx', datajson, {

            }).then(res => {

                alert("已傳送至Server");
                this.ClearAllValue();
                this.$router.replace("/");
                console.log(res);

            }).catch(err => {

                alert("傳輸單號有問題：" + this.ReferralID);

                this.ClearAllValue();
                this.$router.replace("/");
                console.log(err);
            });


            console.log("post end");

        },
        getValidationClass(fieldName) {

            const field = this.$v.form[fieldName];

            if (field) {
                return { "md-invalid": field.$invalid && field.$dirty };
            }

        },
        ClearIndexDB: function() {

            var transaction = this.getObjectStore(["a3"], "readwrite");
            var objectStore = transaction;

            var requestDB = objectStore.clear();

            requestDB.onsuccess = function(event) {
                console.log("Clear offline Data indexDB");
            };

            requestDB.onerror = function(event) {
                console.log("IndexedDB error: " + event.target.errorCode);
            };

        },
        ReadIndexDB: function() {
            //20190926 Bruce Chuang

            console.log("ReadIndexDB");

            var transaction = this.getObjectStore(["a3"], "readwrite");
            var objectStore = transaction;
            //var req = objectStore.count();

            var req = objectStore.openCursor();

            req.onsuccess = function(evt) {
                var cursor = evt.target.result;

                // If the cursor is pointing at something, ask for the data
                if (cursor) {
                    console.log("displayPubList cursor:", cursor);

                    req = objectStore.get(cursor.key);

                    req.onsuccess = function(evt) {
                        var value = evt.target.result;
                        console.log(cursor.key);
                    };

                    // Move on to the next object in store
                    cursor.continue();
                    i++;
                } else {
                    console.log("No more entries");
                }
            };
        },
        //20190920 add IndexDB Bruce Chuang
        addIndexDB: function() {
            var transaction = this.getObjectStore(["a3"], "readwrite");

            var objectStore = transaction;

            //ReferralID: this.ReferralID,

            this.transpeople = "";
            if (this.TranShowCanvas !== null) {
                this.transpeople = this.TranShowCanvas.toDataURL("image/png");
            }

            this.receivepeople = "";
            if (this.ReciveShowCanvas !== null) {
                this.receivepeople = this.ReciveShowCanvas.toDataURL("image/png");
            }

            this.doctor = "";
            if (this.TechSignShowCanvas !== null) {
                this.doctor = this.TechSignShowCanvas.toDataURL("image/png");
            }

            this.family = "";
            if (this.PatientShowCanvas !== null) {
                this.family = this.PatientShowCanvas.toDataURL("image/png");
            }

            var obj = {
                ReferralID: this.ReferralID,
                patientID: this.patientID,
                patientname: this.patientName,
                patientgender: this.patientgender,
                patientbirthday: this.patientbirthday,
                patientdiagnoses: this.patientdiagnoses,
                patientallergyintolerance: this.patientallergyintolerance,
                patientlocation: this.patientlocation,
                patienthistory: this.patienthistory,
                patientrighteye: this.patientrighteye,
                patientlefteye: this.patientlefteye,
                Nasalairway: this.Nasalairway,
                Oralairway: this.Oralairway,
                NCcheckbox: this.NCcheckbox,
                NCdata: this.NCdata,
                Simplemaskcheckbox: this.Simplemaskcheckbox,
                SimpleMaskdata: this.SimpleMaskdata,
                Nonrebreathingcheckbox: this.Nonrebreathingcheckbox,
                Endotubecheckbox: this.Endotubecheckbox,
                EndoTubedata: this.EndoTubedata,
                EndoFixdata: this.EndoFixdata,
                EndoDate: this.EndoDate,
                Trcheckbox: this.Trcheckbox,
                Trdata: this.Trdata,
                TrdataDate: this.TrdataDate,
                Bipapcheckbox: this.Bipapcheckbox,
                Otherbreachcheckbox: this.Otherbreachcheckbox,
                Cvpcheckbox: this.Cvpcheckbox,
                Cvpdata: this.Cvpdata,
                CvpdataCm: this.CvpdataCm,
                Chestcheckbox: this.Chestcheckbox,
                TubeChestdata: this.TubeChestdata,
                Chestdata: this.Chestdata,
                ChestCM: this.ChestCM,
                Portacheckbox: this.Portacheckbox,
                PortAdata: this.PortAdata,
                PortAdataNum: this.PortAdataNum,
                alinecheckbox: this.alinecheckbox,
                alinedata: this.alinedata,
                alinedatanum: this.alinedatanum,
                IVcheckbox: this.IVcheckbox,
                IVdatapostion: this.IVdatapostion,
                IVdatanumber: this.IVdatanumber,
                IVdatapostiontwo: this.IVdatapostiontwo,
                IVdatanumbertwo: this.IVdatanumbertwo,
                NGcheckbox: this.NGcheckbox,
                NGdatanum: this.NGdatanum,
                NGdatacm: this.NGdatacm,
                NGdatadate: this.NGdatadate,
                Foleycheckbox: this.Foleycheckbox,
                Foleydata: this.Foleydata,
                Foleydatadate: this.Foleydatadate,
                otherFoleydata: this.otherFoleydata,
                NS09checkbox: this.NS09checkbox,
                NS09data: this.NS09data,
                D5Scheckbox: this.D5Scheckbox,
                D5Sdata: this.D5Sdata,
                D5Wcheckbox: this.D5Wcheckbox,
                D5Wdata: this.D5Wdata,
                Othercheckboxdata: this.Othercheckboxdata,
                skincheckbox: this.skincheckbox,
                skinpresscheckbox: this.skinpresscheckbox,
                skindatabody: this.skindatabody,
                skindatasize: this.skindatasize,
                skindatadepth: this.skindatadepth,
                skincheckboxdropsy: this.skincheckboxdropsy,
                skindropsybody: this.skindropsybody,
                skinother: this.skinother,
                neckcheckbox: this.neckcheckbox,
                plastercheckbox: this.plastercheckbox,
                harmcheckboxother: this.harmcheckboxother,
                Modedata: this.Modedata,
                fi02data: this.fi02data,
                Ratedata: this.Ratedata,
                TotalRatedata: this.TotalRatedata,
                TidalVolumedata: this.TidalVolumedata,
                IEdata: this.IEdata,
                Peakdata: this.Peakdata,
                Plateaudata: this.Plateaudata,
                Peepdata: this.Peepdata,
                PSdata: this.PSdata,
                PCdata: this.PCdata,
                leaveE: this.leaveE,
                leaveV: this.leaveV,
                leaveM: this.leaveM,
                leavebody: this.leavebody,
                leavebreathe: this.leavebreathe,
                leavepulse: this.leavepulse,
                leavebloodpressure: this.leavebloodpressure,
                leavebloodair: this.leavebloodair,
                normalE: this.normalE,
                normalV: this.normalV,
                normalM: this.normalM,
                normalbody: this.normalbody,
                normalbreathe: this.normalbreathe,
                normalpulse: this.normalpulse,
                normalbloodpressure: this.normalbloodpressure,
                normalbloodair: this.normalbloodair,
                hosptelE: this.hosptelE,
                hosptelV: this.hosptelV,
                hosptelM: this.hosptelM,
                hosptelbody: this.hosptelbody,
                hosptelbreathe: this.hosptelbreathe,
                hosptelpulse: this.hosptelpulse,
                hosptelbloodpressure: this.hosptelbloodpressure,
                hosptelbloodair: this.hosptelbloodair,
                teachexplain: this.teachexplain,
                telnumber: this.telnumber,
                teachsupple: this.teachsupple,
                //-------------------------------------------
                //20190920 BASE64 回傳
                doctor: this.doctor,
                transpeople: this.transpeople,
                receivepeople: this.receivepeople,
                family: this.family
                //-------------------------------------------
            };

            /*
            var temp = [
              {
                patientID: "123",
                patientname: "jack",
                patientgender: "F"
              }
            ];
            */

            console.log("-----------------------------------------------");
            //console.log(obj);

            console.log(JSON.stringify(obj));

            //console.log(temp);
            var requestDB = objectStore.add(obj);
            //var requestDB = objectStore.add(obj);
            //var requestDB = objectStore.add(temp[0]);
            requestDB.onsuccess = function(event) {
                this.dMessageDialog = true;
                console.log(event.target);
                console.log("已寫入offline Data indexDB");
                console.log("-----------------------------------------------");
            };

            requestDB.onerror = function(event) {
                console.log("-----------------------------------------------");
                console.log("IndexedDB error: " + event.target.errorCode);
                console.log("-----------------------------------------------");
            };
        },
        getObjectStore: function(store_name, mode) {
            //var tx = this.a3db.transaction(store_name, mode);
            console.log("-----------------------------------------------");
            console.log("getObjectStore");
            var tx = a3db.transaction(store_name, mode);
            console.log("-----------------------------------------------");
            return tx.objectStore(store_name);
        },
        DrwawPeople: function() {
            this.PeopleImage = new Image();

            var c2 = document.getElementById("peopleNow");

            if (c2 !== undefined && c2 !== null) {
                var ctx2 = c2.getContext("2d");
                //image.src = ".image/people.png"; //20190312 Bruce;
                this.PeopleImage.src =
                    "https://mdn.mozillademos.org/files/5397/rhino.jpg";
                //image.src = "https://mdn.mozillademos.org/files/5397/rhino.jpg";
                //ctx2.drawImage(this.PeopleImage, 0, 0, 30, 30); //20190909 Bruce Chuang
                ctx2.drawImage(this.PeopleImage, 0, 0, 500, 350);
            }
        },
        //20190920 Init IndexDB Bruce Chuang
        InitDb: function() {
            var req = indexedDB.open("a3", 1);

            req.onsuccess = function(evt) {
                //this.a3db = this.result;

                a3db = req.result;
                //a3db = this.result;
                //console.log(a3db);

                //-------------------------------------------------------------
                //20190926 init DB 讀取index DB Bruce Chuang
                var tx = a3db.transaction(["a3"], "readwrite");
                var objectStore = tx.objectStore(["a3"]);

                var readq = objectStore.openCursor();

                readq.onsuccess = function(evt) {
                    var cursor = evt.target.result;

                    if (cursor) {
                        console.log("displayPubList cursor:", cursor);

                        indexDBdata = cursor.value;

                        console.log(indexDBdata);



                        cursor.continue();
                        //i++;
                    } else {
                        console.log("No more entries");
                    }
                };
                //-------------------------------------------------------------

                console.log("Index Db OPen");
            };

            req.onerror = function(evt) {};

            req.onupgradeneeded = function(evt) {
                var db = evt.target.result;

                console.log("req.onupgradeneeded");

                var store = db.createObjectStore("a3", {
                    keyPath: "id",
                    autoIncrement: true
                });

                store.createIndex("ReferralID", "ReferralID", { unique: true });
                store.createIndex("patientID", "patientID", { unique: true });
                store.createIndex("patientname", "patientname", { unique: false });
                store.createIndex("patientgender", "patientgender", { unique: false });
                store.createIndex("patientbirthday", "patientbirthday", {
                    unique: false
                });
                store.createIndex("patientdiagnoses", "patientdiagnoses", {
                    unique: false
                });
                store.createIndex(
                    "patientallergyintolerance",
                    "patientallergyintolerance", { unique: false }
                );
                store.createIndex("patientlocation", "patientlocation", {
                    unique: false
                });
                store.createIndex("patienthistory", "patienthistory", {
                    unique: false
                });
                store.createIndex("patientrighteye", "patientrighteye", {
                    unique: false
                });
                store.createIndex("patientlefteye", "patientlefteye", {
                    unique: false
                });
                store.createIndex("Nasalairway", "Nasalairway", { unique: false });
                store.createIndex("Oralairway", "Oralairway", { unique: false });
                store.createIndex("NCcheckbox", "NCcheckbox", { unique: false });
                store.createIndex("NCdata", "NCdata", { unique: false });
                store.createIndex("Simplemaskcheckbox", "Simplemaskcheckbox", {
                    unique: false
                });
                store.createIndex("SimpleMaskdata", "SimpleMaskdata", {
                    unique: false
                });
                store.createIndex("Nonrebreathingcheckbox", "Nonrebreathingcheckbox", {
                    unique: false
                });
                store.createIndex("Endotubecheckbox", "Endotubecheckbox", {
                    unique: false
                });
                store.createIndex("EndoTubedata", "EndoTubedata", { unique: false });
                store.createIndex("EndoFixdata", "EndoFixdata", { unique: false });
                store.createIndex("EndoDate", "EndoDate", { unique: false });
                store.createIndex("Trcheckbox", "Trcheckbox", { unique: false });
                store.createIndex("Trdata", "Trdata", { unique: false });
                store.createIndex("TrdataDate", "TrdataDate", { unique: false });
                store.createIndex("Bipapcheckbox", "Bipapcheckbox", { unique: false });
                store.createIndex("Otherbreachcheckbox", "Otherbreachcheckbox", {
                    unique: false
                });
                store.createIndex("Cvpcheckbox", "Cvpcheckbox", { unique: false });
                store.createIndex("Cvpdata", "Cvpdata", { unique: false });
                store.createIndex("CvpdataCm", "CvpdataCm", { unique: false });
                store.createIndex("Chestcheckbox", "Chestcheckbox", { unique: false });
                store.createIndex("TubeChestdata", "TubeChestdata", { unique: false });
                store.createIndex("Chestdata", "Chestdata", { unique: false });
                store.createIndex("ChestCM", "ChestCM", { unique: false });
                store.createIndex("Portacheckbox", "Portacheckbox", { unique: false });
                store.createIndex("PortAdata", "PortAdata", { unique: false });
                store.createIndex("PortAdataNum", "PortAdataNum", { unique: false });
                store.createIndex("alinecheckbox", "alinecheckbox", { unique: false });
                store.createIndex("alinedata", "alinedata", { unique: false });
                store.createIndex("alinedatanum", "alinedatanum", { unique: false });
                store.createIndex("IVcheckbox", "IVcheckbox", { unique: false });
                store.createIndex("IVdatapostion", "IVdatapostion", { unique: false });
                store.createIndex("IVdatanumber", "IVdatanumber", { unique: false });
                store.createIndex("IVdatapostiontwo", "IVdatapostiontwo", {
                    unique: false
                });
                store.createIndex("IVdatanumbertwo", "IVdatanumbertwo", {
                    unique: false
                });
                store.createIndex("NGcheckbox", "NGcheckbox", { unique: false });
                store.createIndex("NGdatanum", "NGdatanum", { unique: false });
                store.createIndex("NGdatacm", "NGdatacm", { unique: false });
                store.createIndex("NGdatadate", "NGdatadate", { unique: false });
                store.createIndex("Foleycheckbox", "Foleycheckbox", { unique: false });
                store.createIndex("Foleydata", "Foleydata", { unique: false });
                store.createIndex("Foleydatadate", "Foleydatadate", { unique: false });
                store.createIndex("otherFoleydata", "otherFoleydata", {
                    unique: false
                });
                store.createIndex("NS09checkbox", "NS09checkbox", { unique: false });
                store.createIndex("NS09data", "NS09data", { unique: false });
                store.createIndex("D5Scheckbox", "D5Scheckbox", { unique: false });
                store.createIndex("D5Sdata", "D5Sdata", { unique: false });
                store.createIndex("D5Wcheckbox", "D5Wcheckbox", { unique: false });
                store.createIndex("D5Wdata", "D5Wdata", { unique: false });
                store.createIndex("Othercheckboxdata", "Othercheckboxdata", {
                    unique: false
                });
                store.createIndex("skincheckbox", "skincheckbox", { unique: false });
                store.createIndex("skinpresscheckbox", "skinpresscheckbox", {
                    unique: false
                });
                store.createIndex("skindatabody", "skindatabody", { unique: false });
                store.createIndex("skindatasize", "skindatasize", { unique: false });
                store.createIndex("skindatadepth", "skindatadepth", { unique: false });
                store.createIndex("skincheckboxdropsy", "skincheckboxdropsy", {
                    unique: false
                });
                store.createIndex("skindropsybody", "skindropsybody", {
                    unique: false
                });
                store.createIndex("skinother", "skinother", { unique: false });
                store.createIndex("neckcheckbox", "neckcheckbox", { unique: false });
                store.createIndex("plastercheckbox", "plastercheckbox", {
                    unique: false
                });
                store.createIndex("harmcheckboxother", "harmcheckboxother", {
                    unique: false
                });
                store.createIndex("Modedata", "Modedata", { unique: false });
                store.createIndex("fi02data", "fi02data", { unique: false });
                store.createIndex("Ratedata", "Ratedata", { unique: false });
                store.createIndex("TotalRatedata", "TotalRatedata", { unique: false });
                store.createIndex("TidalVolumedata", "TidalVolumedata", {
                    unique: false
                });
                store.createIndex("IEdata", "IEdata", { unique: false });
                store.createIndex("Peakdata", "Peakdata", { unique: false });
                store.createIndex("Plateaudata", "Plateaudata", { unique: false });
                store.createIndex("Peepdata", "Peepdata", { unique: false });
                store.createIndex("PSdata", "PSdata", { unique: false });
                store.createIndex("PCdata", "PCdata", { unique: false });
                store.createIndex("leaveE", "leaveE", { unique: false });
                store.createIndex("leaveV", "leaveV", { unique: false });
                store.createIndex("leaveM", "leaveM", { unique: false });
                store.createIndex("leavebody", "leavebody", { unique: false });
                store.createIndex("leavebreathe", "leavebreathe", { unique: false });
                store.createIndex("leavepulse", "leavepulse", { unique: false });
                store.createIndex("leavebloodpressure", "leavebloodpressure", {
                    unique: false
                });
                store.createIndex("leavebloodair", "leavebloodair", { unique: false });
                store.createIndex("normalE", "normalE", { unique: false });
                store.createIndex("normalV", "normalV", { unique: false });
                store.createIndex("normalM", "normalM", { unique: false });
                store.createIndex("normalbody", "normalbody", { unique: false });
                store.createIndex("normalbreathe", "normalbreathe", { unique: false });
                store.createIndex("normalpulse", "normalpulse", { unique: false });
                store.createIndex("normalbloodpressure", "normalbloodpressure", {
                    unique: false
                });
                store.createIndex("normalbloodair", "normalbloodair", {
                    unique: false
                });
                store.createIndex("hosptelE", "hosptelE", { unique: false });
                store.createIndex("hosptelV", "hosptelV", { unique: false });
                store.createIndex("hosptelM", "hosptelM", { unique: false });
                store.createIndex("hosptelbody", "hosptelbody", { unique: false });
                store.createIndex("hosptelbreathe", "hosptelbreathe", {
                    unique: false
                });
                store.createIndex("hosptelpulse", "hosptelpulse", { unique: false });
                store.createIndex("hosptelbloodpressure", "hosptelbloodpressure", {
                    unique: false
                });
                store.createIndex("hosptelbloodair", "hosptelbloodair", {
                    unique: false
                });
                store.createIndex("teachexplain", "teachexplain", { unique: false });
                store.createIndex("telnumber", "telnumber", { unique: false });
                store.createIndex("teachsupple", "teachsupple", { unique: false });
                store.createIndex("doctor", "doctor", { unique: false });
                store.createIndex("transpeople", "transpeople", { unique: false });
                store.createIndex("receivepeople", "receivepeople", { unique: false });
                store.createIndex("family", "family", { unique: false });
            };
        },
        nowClearCanvas: function(canName) {
            //20191022 Clear 現在畫板 Bruce Chuang

            var c = document.getElementById(canName);
            var ctx = c.getContext("2d");
            ctx.clearRect(0, 0, c.width, c.height);


        },
        nowDrawCanvas: function(DrawCanvas, canName, xNow, yNow) {
            //20191022 Draw 現在畫板 Bruce Chuang
            var c = document.getElementById(canName);
            var ctx = c.getContext("2d");
            ctx.clearRect(0, 0, c.width, c.height);
            ctx.drawImage(DrawCanvas, 0, 0, xNow, yNow);
        },
        draw: function(event) {


            //20190917 Draw Bruce Chuang
            if (this.mouse.down) {
                if (this.mouse.canvasPeople) {
                    var c = document.getElementById("canvasPeople");
                    var ctx = c.getContext("2d");
                    //ctx2.drawImage(image, 0, 0, 500, 350);
                    //ctx.clearRect(0,2400,800,800);
                    //ctx.beginPath();
                    ctx.lineTo(this.currentMouse.x, this.currentMouse.y);
                    //ctx.closePath();
                    ctx.strokeStyle = "#F63E02";
                    ctx.lineJoin = "round";
                    ctx.lineWidth = 5;
                    ctx.stroke();
                }



                if (this.bTechSign)
                    var c2 = document.getElementById("TechSignPeople");
                else if (this.bReciveSign)
                    var c2 = document.getElementById("reciveSignPeople");



                if (c2 !== undefined) {
                    var ctx2 = c2.getContext("2d");


                    ctx2.lineTo(this.currentMouse.x, this.currentMouse.y);

                    ctx2.strokeStyle = "#F63E02";
                    ctx2.lineJoin = "round";
                    ctx2.lineWidth = 5;
                    ctx2.stroke();
                    this.RepaintCanvas = c2;


                    if (this.bReciveSign) {
                        this.ReciveShowCanvas = this.RepaintCanvas;
                        this.nowDrawCanvas(this.RepaintCanvas, "reciveSign", 500, 200);
                    }


                    if (this.bTechSign) {
                        this.TechSignShowCanvas = this.RepaintCanvas;
                        this.nowDrawCanvas(this.RepaintCanvas, "TechSign", 500, 200);
                    }

                }
            }
        },
        toBase64: function() {
            //20190917 Base64 Bruce Chuang
            if (this.RepaintCanvas !== null && this.RepaintCanvas !== undefined) {
                var imageData = this.RepaintCanvas.toDataURL("image/png");
                imageData.replace("data:image/png;base64,", "");
                this.canvasTranSignImageData = imageData;
                console.log(this.canvasTranSignImageData);
            }

            if (
                this.canvasPatientPeopleImageData !== null &&
                this.canvasPatientPeopleImageData !== undefined
            ) {
                var imageData = this.RepaintCanvas.toDataURL("image/png");
                imageData.replace("data:image/png;base64,", "");
                //this.canvasPatientPeopleImageData = imageData;
            }
        },
        CanvasMoveCurrent: function(canName, xNow, yNow) {
            //20191022 touch move Current Bruce Chuang

            var c = document.getElementById(canName);
            if (c !== undefined && c !== null) {
                var ctx = c.getContext("2d");
                ctx.moveTo(xNow, yNow);
            }

        },
        handleMouseDown: function(event) {

            this.mouse.down = true;

            this.mouse.current = {
                x: event.clientX,
                y: event.clientY
            };


            if (this.bTechSign) {
                this.CanvasMoveCurrent("TechSignPeople", this.currentMouse.x, this.currentMouse.y);

            } else if (this.bReciveSign) {
                this.CanvasMoveCurrent("reciveSignPeople", this.currentMouse.x, this.currentMouse.y);
            }


        },
        handleMouseLeave: function() {
            // this.toBase64();
        },
        handleMouseUp: function() {
            //20190923 repaint here

            this.mouse.down = false;
        },
        touchStart: function(event) {
            const image = new Image();
            this.mouse.down = true;

            this.mouse.current = {
                x: event.touches[0].clientX,
                y: event.touches[0].clientY
            };

            if (this.mouse.canvasPeople) {
                var c = document.getElementById("canvasPeople");
                var ctx = c.getContext("2d");
                ctx.moveTo(this.currentMouse.x, this.currentMouse.y);
            }


            if (this.bTechSign) {
                this.CanvasMoveCurrent("TechSignPeople", this.currentMouse.x, this.currentMouse.y);

            } else if (this.bReciveSign) {
                this.CanvasMoveCurrent("reciveSignPeople", this.currentMouse.x, this.currentMouse.y);
            }

            event.preventDefault();
        },
        touchMove: function(event) {
            this.mouse.current = {
                x: event.touches[0].clientX,
                y: event.touches[0].clientY
            };

            this.draw(event);
            event.preventDefault();
        },
        touchEnd: function(event) {
            this.mouse.down = false;
            event.preventDefault();
        },
        handleMouseMove: function(event) {
            //this.mouse.down = true;
            this.mouse.current = {
                x: event.clientX,
                y: event.clientY
            };
            this.draw(event);
        },
        handleStart: function(evt) {

            /*
            evt.preventDefault();
            //log("touchstart.");
            var el = document.getElementsByTagName("canvasSignPeople");
            var ctx = el.getContext("2d");
            var touches = evt.changedTouches;

            for (var i = 0; i < touches.length; i++) {
                //log("touchstart:" + i + "...");
                this.ongoingTouches.push(this.copyTouch(touches[i]));
                var color = this.colorForTouch(touches[i]);
                ctx.beginPath();
                ctx.arc(touches[i].pageX, touches[i].pageY, 4, 0, 2 * Math.PI, false); // a circle at the start
                ctx.fillStyle = color;
                ctx.fill();
                //log("touchstart:" + i + ".");
            }
            */
        },
        handleMove: function(evt) {
            /*
            evt.preventDefault();
            var el = document.getElementsByTagName("canvasSignPeople");
            var ctx = el.getContext("2d");
            var touches = evt.changedTouches;

            for (var i = 0; i < touches.length; i++) {
                var color = this.colorForTouch(touches[i]);
                var idx = this.ongoingTouchIndexById(touches[i].identifier);

                if (idx >= 0) {
                    //log("continuing touch "+idx);
                    ctx.beginPath();
                    //log("ctx.moveTo(" + ongoingTouches[idx].pageX + ", " + ongoingTouches[idx].pageY + ");");
                    ctx.moveTo(
                        this.ongoingTouches[idx].pageX,
                        this.ongoingTouches[idx].pageY
                    );
                    //log("ctx.lineTo(" + touches[i].pageX + ", " + touches[i].pageY + ");");
                    ctx.lineTo(touches[i].pageX, touches[i].pageY);
                    ctx.lineWidth = 4;
                    ctx.strokeStyle = color;
                    ctx.stroke();

                    this.ongoingTouches.splice(idx, 1, this.copyTouch(touches[i])); // swap in the new touch record
                    //log(".");
                } else {
                    //log("can't figure out which touch to continue");
                }
            }
            */
        },
        handleEnd: function(evt) {
            /*
            evt.preventDefault();
            //log("touchend");
            var el = document.getElementsByTagName("canvas")[0];
            var ctx = el.getContext("2d");
            var touches = evt.changedTouches;

            for (var i = 0; i < touches.length; i++) {
                var color = this.colorForTouch(touches[i]);
                var idx = this.ongoingTouchIndexById(touches[i].identifier);

                if (idx >= 0) {
                    ctx.lineWidth = 4;
                    ctx.fillStyle = color;
                    ctx.beginPath();
                    ctx.moveTo(
                        this.ongoingTouches[idx].pageX,
                        this.ongoingTouches[idx].pageY
                    );
                    ctx.lineTo(touches[i].pageX, touches[i].pageY);
                    ctx.fillRect(touches[i].pageX - 4, touches[i].pageY - 4, 8, 8); // and a square at the end
                    this.ongoingTouches.splice(idx, 1); // remove it; we're done
                } else {
                    //log("can't figure out which touch to end");
                }
            }
            */
        },
        colorForTouch: function(touch) {
            /*
            var r = touch.identifier % 16;
            var g = Math.floor(touch.identifier / 3) % 16;
            var b = Math.floor(touch.identifier / 7) % 16;
            r = r.toString(16); // make it a hex digit
            g = g.toString(16); // make it a hex digit
            b = b.toString(16); // make it a hex digit
            var color = "#" + r + g + b;
            //log("color for touch with identifier " + touch.identifier + " = " + color);
            return color;
            */
        },
        copyTouch: function(touch) {
            /*
            return {
                identifier: touch.identifier,
                pageX: touch.pageX,
                pageY: touch.pageY
            };
            */
        },
        ongoingTouchIndexById: function(idToFind) {
            /*
            for (var i = 0; i < this.ongoingTouches.length; i++) {
                var id = this.ongoingTouches[i].identifier;

                if (id == idToFind) {
                    return i;
                }
            }
            return -1; // not found
            */
        },
        TranDBJson: function() {
            //20190917 轉換 json  Bruce Chuang

            //patient INFO
            var patientInfo = {
                patientID: this.patientID,
                patientname: this.patientname,
                patientgender: this.patientgender,
                patientbirthday: this.patientbirthday,
                patientdiagnoses: this.patientdiagnoses,
                patientallergyintolerance: this.patientallergyintolerance,
                patientlocation: this.patientlocation,
                patienthistory: this.patienthistory
            };

            //procedure
            var procedure = {
                patientrighteye: this.patientrighteye,
                patientlefteye: this.patientlefteye,
                Nasalairway: this.Nasalairway,
                Oralairway: this.Oralairway,
                NCcheckbox: this.NCcheckbox,
                NCdata: this.NCdata,
                Simplemaskcheckbox: this.Simplemaskcheckbox,
                SimpleMaskdata: this.SimpleMaskdata,
                Nonrebreathingcheckbox: this.Nonrebreathingcheckbox,
                Endotubecheckbox: this.Endotubecheckbox,
                EndoTubedata: this.EndoTubedata,
                EndoFixdata: this.EndoFixdata,
                EndoDate: this.EndoDate,
                Trcheckbox: this.Trcheckbox,
                Trdata: this.Trdata,
                TrdataDate: this.TrdataDate,
                Bipapcheckbox: this.Bipapcheckbox,
                Otherbreachcheckbox: this.Otherbreachcheckbox,
                Cvpcheckbox: this.Cvpcheckbox,
                Cvpdata: this.Cvpdata,
                CvpdataCm: this.CvpdataCm,
                Chestcheckbox: this.Chestcheckbox,
                TubeChestdata: this.TubeChestdata,
                Chestdata: this.Chestdata,
                ChestCM: this.ChestCM,
                Portacheckbox: this.Portacheckbox,
                PortAdata: this.PortAdata,
                PortAdataNum: this.PortAdataNum,
                alinecheckbox: this.alinecheckbox,
                alinedata: this.alinedata,
                alinedatanum: this.alinedatanum,
                IVcheckbox: this.IVcheckbox,
                IVdatapostion: this.IVdatapostion,
                IVdatanumber: this.IVdatanumber,
                IVdatapostiontwo: this.IVdatapostiontwo,
                IVdatanumbertwo: this.IVdatanumbertwo,
                NGcheckbox: this.NGcheckbox,
                NGdatanum: this.NGdatanum,
                NGdatacm: this.NGdatacm,
                NGdatadate: this.NGdatadate,
                Foleycheckbox: this.Foleycheckbox,
                Foleydata: this.Foleydata,
                Foleydatadate: this.Foleydatadate,
                otherFoleydata: this.otherFoleydata,
                NS09checkbox: this.NS09checkbox,
                NS09data: this.NS09data,
                D5Scheckbox: this.D5Scheckbox,
                D5Sdata: this.D5Sdata,
                D5Wcheckbox: this.D5Wcheckbox,
                D5Wdata: this.D5Wdata,
                Othercheckboxdata: this.Othercheckboxdata,
                skincheckbox: this.skincheckbox,
                skinpresscheckbox: this.skinpresscheckbox,
                skindatabody: this.skindatabody,
                skindatasize: this.skindatasize,
                skindatadepth: this.skindatadepth,
                skincheckboxdropsy: this.skincheckboxdropsy,
                skindropsybody: this.skindropsybody,
                skinother: this.skinother,
                neckcheckbox: this.neckcheckbox,
                plastercheckbox: this.plastercheckbox,
                harmcheckboxother: this.harmcheckboxother,
                Modedata: this.Modedata,
                fi02data: this.fi02data,
                Ratedata: this.Ratedata,
                TotalRatedata: this.TotalRatedata,
                TidalVolumedata: this.TidalVolumedata,
                IEdata: this.IEdata,
                Peakdata: this.Peakdata,
                Plateaudata: this.Plateaudata,
                Peepdata: this.Peepdata,
                PSdata: this.PSdata,
                PCdata: this.PCdata,
                leaveE: this.leaveE,
                leaveV: this.leaveV,
                leaveM: this.leaveM,
                leavebody: this.leavebody,
                leavebreathe: this.leavebreathe,
                leavepulse: this.leavepulse,
                leavebloodpressure: this.leavebloodpressure,
                leavebloodair: this.leavebloodair,
                normalE: this.normalE,
                normalV: this.normalV,
                normalM: this.normalM,
                normalbody: this.normalbody,
                normalbreathe: this.normalbreathe,
                normalpulse: this.normalpulse,
                normalbloodpressure: this.normalbloodpressure,
                normalbloodair: this.normalbloodair,
                hosptelE: this.hosptelE,
                hosptelV: this.hosptelV,
                hosptelM: this.hosptelM,
                hosptelbody: this.hosptelbody,
                hosptelbreathe: this.hosptelbreathe,
                hosptelpulse: this.hosptelpulse,
                hosptelbloodpressure: this.hosptelbloodpressure,
                hosptelbloodair: this.hosptelbloodair,
                teachexplain: this.teachexplain,
                telnumber: this.telnumber,
                teachsupple: this.teachsupple,
                doctor: this.doctor,
                transpeople: this.transpeople,
                receivepeople: this.receivepeople,
                family: this.family
            };

            this.tranJson = {
                patientInfo,
                procedure,
                people64: this.canvasTranSignImageData
            };
            console.log(this.tranJson);
        },
        clearForm() {
            this.$v.$reset();
            this.form.firstName = null;
            this.form.age = null;
            this.form.gender = null;
        }
    }
};
</script>
<style scoped="">
</style>