const Express = require("express");
const BodyParser = require("body-parser");
const Cors = require("cors");
const HTTPS = require("https");
const FS = require("fs");
const UUID = require("uuid");
const session = require("session");

var app = Express();

app.use(BodyParser.json());
//app.use(BodyParser);

/*
HTTPS.createServer({
    key: FS.readFileSync(),
    cert: FS.readFileSync()
}, app).listen(3200, () => {

    console.log("listen");

});
*/