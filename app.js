var express = require("express");
var app = express();
var path = require("path");

app.use(express.static('ReyRoss'));
app.use(express.static('public'));
app.set('view engine', 'html');

app.get("/", function(req,res){
    res.sendFile(path.join(__dirname+'/RRHome.html'));
});

app.listen(3000, function(req,res){
    console.log("server started");
});

// app.listen(process.env.PORT, process.env.IP);