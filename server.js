var fs = require('fs');
var https = require('https');
var express = require('express');

var options = {
   key  : fs.readFileSync('private.key'),
   cert : fs.readFileSync('certi.crt')
};

var app = express();


app.use(express.static(path.join(__dirname, '../dist')));


https.createServer(options, app).listen(3200, function () {
   console.log('Started!');
});