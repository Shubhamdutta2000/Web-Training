const express = require("express");

//For accessing http post body
var bodyParser = require("body-parser");

const app = express();

// we call app.use(...) before defining our route.
// This will ensure that the body-parser will run before our route,
// which ensures that our route can then access the parsed HTTP POST body.
app.use(bodyParser.urlencoded({ extended: true }));

//Telling express that we are using EJS
app.set("view engine", "ejs");

// GET Route
app.get("/", function (req, res) {
  res.render("Home");
});

// Route params
/* 
app.get('/profile/:name', function(req , res){
    res.send(`the requested id is: ${req.params.name}`);
})
*/

//For EJS
app.get("/profile/:name", function (req, res) {
  data = {
    age: 27,
    job: "Developer",
    hobbies: ["eating", "fighting", "sleeping"],
  };
  res.render("profile", { person: req.params.name, data: data }); // res.render() will look in a views folder for the view.
});

//Post Request (for submitting contact form)
app.post("/contact", function (req, res) {
  console.log(req.body.name);
  res.render("contact");
});

// Get Route of contact Page
app.get("/contact", function (req, res) {
  res.render("contact");
});

// listening ...
app.listen(3000, function (req, res) {
  console.log("Server is running on port 3000");
});
