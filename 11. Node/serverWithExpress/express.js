const express = require("express");

/*
  include express from 'express';
*/

const app = express();

// serving static files from views folder
app.use(express.static("views"));

// adding get request
app.get("/", (req, res) => {
  res.send("Hello This is my first express server");
});

// about us page
app.get("/about", (req, res) => {
  res.send("Hello This is about us page");
});

// listening to port
const port = 3000;
app.listen(port, () => {
  console.log("Successfully listening on port " + port);
});

//For contineous running of server : NODEMON
