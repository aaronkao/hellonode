var express = require('express');
var app = express();

app.get('/', function(req, res){
    res.send('Happy!');
});

app.listen(80);
