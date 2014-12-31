var express = require('express');
var app = express();

app.get('/', function(req, res){
    res.send('Happy year folks');
});

app.listen(80);
