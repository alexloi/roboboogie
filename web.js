var express = require("express");
var app = express();
var path = require('path');

// Express config
var root = path.normalize(__dirname);
app.set('views', root);
app.set('view engine', 'jade');

app.get('/', function(req,res){
    return res.render('index');
});

var port = Number(process.env.PORT || 3000);

app.listen(port, function(){
    console.log('Listening on ' + port);
});