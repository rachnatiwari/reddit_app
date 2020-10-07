var express     = require("express"),
app         = express(),
bodyParser  = require("body-parser"),
mongoose    = require("mongoose");
// passport    = require("passport");
// flash        = require("connect-flash"),
// session = require("express-session"),

var data = require("./data");

app.get("/sample",function(req,res){
    res.send(data.data);
});

app.get("/",function(req,res){
    res.redirect("/sample");
});

app.listen(5000,function(){
    console.log("The server started!!");
});