var express = require('express');

var app = express();


app.get('/', function (req, res) {

    console.log("Hello World");

    res.send("Hello World")

});


var port = 3000;

app.listen(port, function () {

    console.log('Listening on port:' + port);

});