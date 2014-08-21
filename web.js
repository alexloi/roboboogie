var express = require("express");
var app = express();

app.get('/', function(req,res){
    return res.send('Hola');
});

var port = Number(process.env.PORT || 5000);

app.listen(port, function(){
    console.log('Listening on' + port);
});