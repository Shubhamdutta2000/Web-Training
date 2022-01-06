///Modularised code
var express = require('express');
//Db connection
var dbConnect = require('./config/db');
//import controller
var controllers = require('./controller/index');

var app = express();

//set up template engine      --remember to use it after app
app.set('view engine', 'ejs');

//db connection
dbConnect();

//Applying middleware
app.use(bodyParser.urlencoded({ limit:"30mb",extended: true}));
app.use(bodyParser.json({ limit:"30mb",extended: true}));
app.use(express.static("public"));

//Fire controllers
controllers(app)


//
app.listen(5010,function(){
    console.log("server is running on port 5010");
 });

