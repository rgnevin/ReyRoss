var express = require("express");
var app = express();
var path = require("path");

app.use(express.static(path.join(__dirname, 'Public')));
app.set('view engine', 'html');

app.get("/", function(req,res){
    res.sendFile('public/index.html', { root: __dirname });
});

// app.listen(3000, function(req,res){
//     console.log("server started");
// });

app.listen(process.env.PORT, process.env.IP);