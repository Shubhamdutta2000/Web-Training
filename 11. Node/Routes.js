/*
 npm == node package manager
 It is a 3rd party package system means
 open source of libery for node js which helps us to perform certain types of task
 We can find aanything in it

 site: https://www.npmjs.com


*/

//Creating Server Using express

const express = require("express");

/*New method based on ES6
include express from 'express';

ES6 is a set of rules for writing modern js (optional needs to learn valina js first)
*/
const app = express();

app.get("/", function (req, res) {
  res.send("Hello World");
});

app.get("/about", function (req, res) {
  res.send("about us");
});

app.get("/heyy", function (req, res) {
  res.send("heyyy");
});

/*Route params*/
app.get("/profile/:id", function (req, res) {
  res.send(`the requested id is: ${req.params.id}`);
});

app.get("/users/:userId", function (req, res) {
  res.send(`the requested id is: ${req.params.userId}`);
});

//viewing html file
app.get("/contact", function (req, res) {
  res.sendFile(__dirname + "/views/index.html");
});

app.listen(3000);
console.log("Server started at port 3000");

//For continuous running of server : NODEMON
