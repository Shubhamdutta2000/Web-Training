const express = require("express");

const app = express();

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
