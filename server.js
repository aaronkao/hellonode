var express = require('express');
var app = express();

app.get('/', function(req, res){
    res.send('19');
});

app.listen(80);
