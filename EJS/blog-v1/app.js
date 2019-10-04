// Variable Declaration

const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const _ = require("lodash");

const posts = [];
const aboutContent = [];
const contactContent = [];

const app = express();

// Setup

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

// Routes

app.get("/", function(req, res) {
  res.render("home", { homeContent: posts });
});

app.get("/about", function(req, res) {
  res.render("about", { aboutContent: aboutContent });
});

app.get("/contact", function(req, res) {
  res.render("contact", { contactContent: contactContent });
});

app.get("/compose", function(req, res) {
  res.render("compose");
});

app.post("/compose", function(req, res) {
  let title = req.body.title;
  let content = req.body.content;

  posts.push({ title: title, content: content });

  res.redirect("/");
});

app.get("/posts/:postTitle", function(req, res) {
  let paramPost = _.lowerCase(req.params.postTitle);
  let post = posts.find(post => post.title == paramPost);
  
  if (post === undefined) {
    res.redirect("/");
  } else {
    res.render("post", { postSelected: post });
  }
});

app.listen(3000, function() {
  console.log("Server started on port 3000");
});
