const Postmodel = require("../models/posts");


module.exports = function(app){

app.get("/", async (req, res) => {

  try {
    const posts = await Postmodel.find();
    res.render("home", {
      startingContent: homeStartingContent,
      posts: posts
            });
  } catch (error) {
    console.log(error);
  }
});

app.get("/about", function(req, res){
  res.render("about", {aboutContent: aboutContent});
});

app.get("/contact", function(req, res){
  res.render("contact", {contactContent: contactContent});
});


app.get("/compose", async (req, res) => {
  res.render("compose");
});


app.post("/compose", async (req, res)=>{
  const newPost = new Postmodel({
    Title: req.body.title,
    Message: req.body.message
    })
     console.log(newPost);
  try {
    await newPost.save();
    res.json(newPost);
  }catch (error){
    console.log(error);
  }
  res.redirect("/");
});


}