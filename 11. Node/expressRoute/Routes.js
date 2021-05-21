//Creating Server Using express

const express = require("express");

/*
  New method based on ES6
  include express from 'express';
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
