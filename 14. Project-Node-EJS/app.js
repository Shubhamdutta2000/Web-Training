//jshint esversion:6
const express = require("express");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const Postmodel = require("./models/posts");

const homeStartingContent =
  "My journal is a flexible journal entry app. Write, save without wasting time.";

dotenv.config();

const CONNECTION_URL = process.env.DB_URI;
const PORT = process.env.PORT || 5000;

mongoose
  .connect(CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() =>
    app.listen(PORT, () => console.log(`server running on port ${PORT}`))
  )
  .catch((error) => console.log(error.message));

mongoose.set("useFindAndModify", false);

const app = express();

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(express.static("public"));

let posts = [];

app.get("/", async (req, res) => {
  try {
    const posts = await Postmodel.find();
    res.render("home", {
      startingContent: homeStartingContent,
      posts: posts,
    });
  } catch (error) {
    console.log(error);
  }
});

app.get("/about", function (req, res) {
  res.render("about", { aboutContent: "hello" });
});

app.get("/contact", function (req, res) {
  res.render("contact", { contactContent: "contactContent" });
});

app.get("/compose", async (req, res) => {
  res.render("compose");
});

// app.post("/compose", async (req, res) => {
//   const post = req.body;
//   const newPost = new Postmodel({
//     Title: req.body.title,
//     Message: req.body.message,
//   });
//   console.log(newPost);
//   try {
//     await newPost.save();
//    // res.json(newPost);
//     res.redirect("/");
// });
//   } catch (error) {
//     console.log(error);
//   }
//   // res.redirect("/");
// });
