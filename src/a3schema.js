import { openDB } from 'idb';

export const Syncfunction = {
    sync() {
        //20191014 在一開始作初使化動作  Bruce Chuang

        //---------------------------------------------------------------------------
        //20191025 Bruce Chuang
        //平板設定檔 
        const airset = openDB('airset', 1, {
            upgrade(db) {

                const store = db.createObjectStore('airset', {
                    keyPath: 'id',
                    autoIncrement: true,
                });

                store.createIndex("searchstring", "searchstring", { unique: false });

            },
        });
       //---------------------------------------------------------------------------
       //飛特立 申請單

        const a3db = openDB('a3', 1, {
            upgrade(db) {
                // Create a store of objects
                const store = db.createObjectStore('a3', {
                    keyPath: 'id',
                    autoIncrement: true,
                });
                // Create an index on the 'date' property of the objects.
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
                store.createIndex("people", "people", { unique: false });
            },
        });
       //---------------------------------------------------------------------------
       //凌天 申請單
       
        const linskydb = openDB('linsky', 1, {
            upgrade(db) {
                // Create a store of objects
                const store = db.createObjectStore('linsky', {
                    keyPath: 'id',
                    autoIncrement: true,
                });

                store.createIndex("ReferralID", "ReferralID", { unique: true });
                store.createIndex("patientID", "patientID", { unique: false });
                store.createIndex("patientname", "patientname", { unique: false });
                store.createIndex("patientgender", "patientgender", { unique: false });
                store.createIndex("reciveunit", "reciveunit", { unique: false });
                store.createIndex("accepthospital", "accepthospital", { unique: false });
                store.createIndex("recivetime", "recivetime", { unique: false });
                store.createIndex("onAirrtime", "onAirrtime", { unique: false });
                store.createIndex("offlineAirrtime", "offlineAirrtime", { unique: false });
                store.createIndex("hospitaltime", "hospitaltime", { unique: false });
                store.createIndex("leavehospitaltime", "leavehospitaltime", { unique: false });
                store.createIndex("standbytime", "standbytime", { unique: false });
                store.createIndex("traumatic", "traumatic", { unique: false });
                store.createIndex("nontraumatic", "nontraumatic", { unique: false });
                store.createIndex("reason", "reason", { unique: false });
                store.createIndex("give1", "give1", { unique: false });
                store.createIndex("car1", "car1", { unique: false });

                store.createIndex("fly1", "fly1", { unique: false });
                store.createIndex("time1", "time1", { unique: false });
                store.createIndex("painone1", "painone1", { unique: false });
                store.createIndex("paintwo1", "paintwo1", { unique: false });
                store.createIndex("painthree1", "painthree1", { unique: false });
                store.createIndex("painfore1", "painfore1", { unique: false });
                store.createIndex("bloodpulse1", "bloodpulse1", { unique: false });
                store.createIndex("bloodpressure1", "bloodpressure1", { unique: false });
                store.createIndex("bloodair1", "bloodair1", { unique: false });
                store.createIndex("mark1", "mark1", { unique: false });

                store.createIndex("give2", "give2", { unique: false });
                store.createIndex("car2", "car2", { unique: false });
                store.createIndex("fly2", "fly2", { unique: false });
                store.createIndex("time2", "time2", { unique: false });
                store.createIndex("painone2", "painone2", { unique: false });
                store.createIndex("paintwo2", "paintwo2", { unique: false });
                store.createIndex("painthree2", "paintwo2", { unique: false });
                store.createIndex("painfore2", "painfore2", { unique: false });
                store.createIndex("bloodpulse2", "bloodpulse2", { unique: false });
                store.createIndex("bloodpressure2", "bloodpressure2", { unique: false });
                store.createIndex("bloodair2", "bloodair2", { unique: false });
                store.createIndex("mark2", "mark2", { unique: false });

                store.createIndex("give3", "give3", { unique: false });
                store.createIndex("car3", "car3", { unique: false });
                store.createIndex("fly3", "fly3", { unique: false });
                store.createIndex("time3", "time3", { unique: false });
                store.createIndex("painone3", "painone3", { unique: false });
                store.createIndex("paintwo3", "paintwo3", { unique: false });
                store.createIndex("painthree3", "painthree3", { unique: false });
                store.createIndex("painfore3", "painfore3", { unique: false });
                store.createIndex("bloodpulse3", "bloodpulse3", { unique: false });
                store.createIndex("bloodpressure3", "bloodpressure3", { unique: false });
                store.createIndex("bloodair3", "bloodair3", { unique: false });
                store.createIndex("mark3", "mark3", { unique: false });


                store.createIndex("give4", "give4", { unique: false });
                store.createIndex("car4", "car4", { unique: false });
                store.createIndex("fly4", "fly4", { unique: false });
                store.createIndex("time4", "time4", { unique: false });
                store.createIndex("painone4", "painone4", { unique: false });
                store.createIndex("paintwo4", "paintwo4", { unique: false });
                store.createIndex("painthree4", "painthree4", { unique: false });
                store.createIndex("painfore4", "painfore4", { unique: false });
                store.createIndex("bloodpulse4", "bloodpulse4", { unique: false });
                store.createIndex("bloodpressure4", "bloodpressure4", { unique: false });
                store.createIndex("bloodair4", "bloodair4", { unique: false });
                store.createIndex("mark4", "mark4", { unique: false });

                store.createIndex("give5", "give5", { unique: false });
                store.createIndex("car5", "car5", { unique: false });
                store.createIndex("fly5", "fly5", { unique: false });
                store.createIndex("time5", "time5", { unique: false });
                store.createIndex("painone5", "painone5", { unique: false });
                store.createIndex("paintwo5", "paintwo5", { unique: false });
                store.createIndex("painthree5", "painthree5", { unique: false });
                store.createIndex("painfore5", "painfore5", { unique: false });
                store.createIndex("bloodpulse5", "bloodpulse5", { unique: false });
                store.createIndex("bloodpressure5", "bloodpressure5", { unique: false });
                store.createIndex("bloodair5", "bloodair5", { unique: false });
                store.createIndex("mark5", "mark5", { unique: false });


                store.createIndex("give6", "give6", { unique: false });
                store.createIndex("car6", "car6", { unique: false });
                store.createIndex("fly6", "fly6", { unique: false });
                store.createIndex("time6", "time6", { unique: false });
                store.createIndex("painone6", "painone6", { unique: false });
                store.createIndex("paintwo6", "paintwo6", { unique: false });
                store.createIndex("painthree6", "painthree6", { unique: false });
                store.createIndex("painfore6", "painfore6", { unique: false });
                store.createIndex("bloodpulse6", "bloodpulse6", { unique: false });
                store.createIndex("bloodpressure6", "bloodpressure6", { unique: false });
                store.createIndex("bloodair6", "bloodair6", { unique: false });
                store.createIndex("mark6", "mark6", { unique: false });


                store.createIndex("give7", "give7", { unique: false });
                store.createIndex("car7", "car7", { unique: false });
                store.createIndex("fly7", "fly7", { unique: false });
                store.createIndex("time7", "time7", { unique: false });
                store.createIndex("painone7", "painone7", { unique: false });
                store.createIndex("paintwo7", "paintwo7", { unique: false });
                store.createIndex("painthree7", "painthree7", { unique: false });
                store.createIndex("painfore7", "painfore7", { unique: false });
                store.createIndex("bloodpulse7", "bloodpulse7", { unique: false });
                store.createIndex("bloodpressure7", "bloodpressure7", { unique: false });
                store.createIndex("bloodair7", "bloodair7", { unique: false });
                store.createIndex("mark7", "mark7", { unique: false });


                store.createIndex("give8", "give8", { unique: false });
                store.createIndex("car8", "car8", { unique: false });
                store.createIndex("fly8", "fly8", { unique: false });
                store.createIndex("time8", "time8", { unique: false });
                store.createIndex("painone8", "painone8", { unique: false });
                store.createIndex("paintwo8", "paintwo8", { unique: false });
                store.createIndex("painthree8", "painthree8", { unique: false });
                store.createIndex("painfore8", "painfore8", { unique: false });
                store.createIndex("bloodpulse8", "bloodpulse8", { unique: false });
                store.createIndex("bloodpressure8", "bloodpressure8", { unique: false });
                store.createIndex("bloodair8", "bloodair8", { unique: false });
                store.createIndex("mark8", "mark8", { unique: false });


                store.createIndex("give9", "give9", { unique: false });
                store.createIndex("car9", "car9", { unique: false });
                store.createIndex("fly9", "fly9", { unique: false });
                store.createIndex("time9", "time9", { unique: false });
                store.createIndex("painone9", "painone9", { unique: false });
                store.createIndex("paintwo9", "paintwo9", { unique: false });
                store.createIndex("painthree9", "painthree9", { unique: false });
                store.createIndex("painfore9", "painfore9", { unique: false });
                store.createIndex("bloodpulse9", "bloodpulse9", { unique: false });
                store.createIndex("bloodpressure9", "bloodpressure9", { unique: false });
                store.createIndex("bloodair9", "bloodair9", { unique: false });
                store.createIndex("mark9", "mark9", { unique: false });

                store.createIndex("give10", "give10", { unique: false });
                store.createIndex("car10", "car10", { unique: false });
                store.createIndex("fly10", "fly10", { unique: false });
                store.createIndex("time10", "time10", { unique: false });
                store.createIndex("painone10", "painone10", { unique: false });
                store.createIndex("paintwo10", "paintwo10", { unique: false });
                store.createIndex("painthree10", "painthree10", { unique: false });
                store.createIndex("painfore10", "painfore10", { unique: false });
                store.createIndex("bloodpulse10", "bloodpulse10", { unique: false });
                store.createIndex("bloodpressure10", "bloodpressure10", { unique: false });
                store.createIndex("bloodair10", "bloodair10", { unique: false });
                store.createIndex("mark10", "mark10", { unique: false });

                store.createIndex("give11", "give11", { unique: false });
                store.createIndex("car11", "car11", { unique: false });
                store.createIndex("fly11", "fly11", { unique: false });
                store.createIndex("time11", "time11", { unique: false });
                store.createIndex("painone11", "painone11", { unique: false });
                store.createIndex("paintwo11", "paintwo11", { unique: false });
                store.createIndex("painthree11", "painthree11", { unique: false });
                store.createIndex("painfore11", "painfore11", { unique: false });
                store.createIndex("bloodpulse11", "bloodpulse11", { unique: false });
                store.createIndex("bloodpressure11", "bloodpressure11", { unique: false });
                store.createIndex("bloodair11", "bloodair11", { unique: false });
                store.createIndex("mark11", "mark11", { unique: false });


                store.createIndex("give12", "give12", { unique: false });
                store.createIndex("car12", "car12", { unique: false });
                store.createIndex("fly12", "fly12", { unique: false });
                store.createIndex("time12", "time12", { unique: false });
                store.createIndex("painone12", "painone12", { unique: false });
                store.createIndex("paintwo12", "paintwo12", { unique: false });
                store.createIndex("painthree12", "painthree12", { unique: false });
                store.createIndex("painfore12", "painfore12", { unique: false });
                store.createIndex("bloodpulse12", "bloodpulse12", { unique: false });
                store.createIndex("bloodpressure12", "bloodpressure12", { unique: false });
                store.createIndex("bloodair12", "bloodair12", { unique: false });
                store.createIndex("mark12", "mark12", { unique: false });


                store.createIndex("give13", "give13", { unique: false });
                store.createIndex("car13", "car13", { unique: false });
                store.createIndex("fly13", "fly13", { unique: false });
                store.createIndex("time13", "time13", { unique: false });
                store.createIndex("painone13", "painone13", { unique: false });
                store.createIndex("paintwo13", "paintwo13", { unique: false });
                store.createIndex("painthree13", "painthree13", { unique: false });
                store.createIndex("painfore13", "painfore13", { unique: false });
                store.createIndex("bloodpulse13", "bloodpulse13", { unique: false });
                store.createIndex("bloodpressure13", "bloodpressure13", { unique: false });
                store.createIndex("bloodair13", "bloodair13", { unique: false });
                store.createIndex("mark13", "mark13", { unique: false });


                store.createIndex("give14", "give14", { unique: false });
                store.createIndex("car14", "car14", { unique: false });
                store.createIndex("fly14", "fly14", { unique: false });
                store.createIndex("time14", "time14", { unique: false });
                store.createIndex("painone14", "painone14", { unique: false });
                store.createIndex("paintwo14", "paintwo14", { unique: false });
                store.createIndex("painthree14", "painthree14", { unique: false });
                store.createIndex("painfore14", "painfore14", { unique: false });
                store.createIndex("bloodpulse14", "bloodpulse14", { unique: false });
                store.createIndex("bloodpressure14", "bloodpressure14", { unique: false });
                store.createIndex("bloodair14", "bloodair14", { unique: false });
                store.createIndex("mark14", "mark14", { unique: false });

                store.createIndex("give15", "give15", { unique: false });
                store.createIndex("car15", "car15", { unique: false });
                store.createIndex("fly15", "fly15", { unique: false });
                store.createIndex("time15", "time15", { unique: false });
                store.createIndex("painone15", "painone15", { unique: false });
                store.createIndex("paintwo15", "paintwo15", { unique: false });
                store.createIndex("painthree15", "painthree15", { unique: false });
                store.createIndex("painfore15", "painfore15", { unique: false });
                store.createIndex("bloodpulse15", "bloodpulse15", { unique: false });
                store.createIndex("bloodpressure15", "bloodpressure15", { unique: false });
                store.createIndex("bloodair15", "bloodair15", { unique: false });
                store.createIndex("mark15", "mark15", { unique: false });


                store.createIndex("give16", "give16", { unique: false });
                store.createIndex("car16", "car16", { unique: false });
                store.createIndex("fly16", "fly16", { unique: false });
                store.createIndex("time16", "time16", { unique: false });
                store.createIndex("painone16", "painone16", { unique: false });
                store.createIndex("paintwo16", "paintwo16", { unique: false });
                store.createIndex("painthree16", "painthree16", { unique: false });
                store.createIndex("painfore16", "painfore16", { unique: false });
                store.createIndex("bloodpulse16", "bloodpulse16", { unique: false });
                store.createIndex("bloodpressure16", "bloodpressure16", { unique: false });
                store.createIndex("bloodair16", "bloodair16", { unique: false });
                store.createIndex("mark16", "mark16", { unique: false });


                store.createIndex("mouth", "mouth", { unique: false });
                store.createIndex("nose", "nose", { unique: false });
                store.createIndex("Suction", "Suction", { unique: false });
                store.createIndex("Nasaltube", "Nasaltube", { unique: false });
                store.createIndex("Nasaltubedata", "Nasaltubedata", { unique: false });
                store.createIndex("facemask", "facemask", { unique: false });
                store.createIndex("facemaskdata", "facemaskdata", { unique: false });
                store.createIndex("nonmask", "nonmask", { unique: false });
                store.createIndex("BVM", "BVM", { unique: false });
                store.createIndex("igei", "igei", { unique: false });
                store.createIndex("igeidata", "igeidata", { unique: false });
                store.createIndex("cpr", "cpr", { unique: false });
                store.createIndex("cprdata", "cprdata", { unique: false });
                store.createIndex("aed", "aed", { unique: false });
                store.createIndex("notelectricshock", "notelectricshock", { unique: false });
                store.createIndex("electricshock", "electricshock", { unique: false });
                store.createIndex("electricshockdata", "electricshockdata", { unique: false });
                store.createIndex("Drugdisposal", "Drugdisposal", { unique: false });
                store.createIndex("Collar", "Collar", { unique: false });
                store.createIndex("Cleaningwound", "Cleaningwound", { unique: false });
                store.createIndex("Bandagehemostasis", "Bandagehemostasis", { unique: false });
                store.createIndex("Protectedwood", "Protectedwood", { unique: false });
                store.createIndex("Keepwarm", "Keepwarm", { unique: false });
                store.createIndex("Psychologicalsupport", "Psychologicalsupport", { unique: false });
                store.createIndex("Lifemonitor", "Lifemonitor", { unique: false });
                store.createIndex("Assistproduction", "Assistproduction", { unique: false });
                store.createIndex("other", "other", { unique: false });
                store.createIndex("supple", "supple", { unique: false });
                store.createIndex("emtpeople", "emtpeople", { unique: false });
                store.createIndex("receivepeople", "receivepeople", { unique: false });
            },
        });


    }
};