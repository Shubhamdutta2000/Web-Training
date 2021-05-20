//Creating Server Using express

const express = require("express");

/*New method based on ES6
include express from 'express';

ES6 is a set of rules for writing modern js (optional needs to learn vanilla js first)
*/

const app = express();

// serving static files from views folder
app.use(express.static("views"));

app.get("/", function (req, res) {
  res.send("Hello World");
});

app.listen(3000);
console.log("Server started at port 3000");

//For contineous running of server : NODEMON
