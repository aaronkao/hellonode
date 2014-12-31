var express = require('express');
var app = express();

app.get('/', function(req, res){
    res.send('Happy 2015 Year!!!!!!');
});

app.listen(80);
