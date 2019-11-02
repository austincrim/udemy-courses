// Variable Declaration

const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const ejs = require("ejs");
const _ = require("lodash");

const aboutContent = [];
const contactContent = [];

const app = express();

// Setup

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

// Mongo Setup
mongoose.connect("mongodb://localhost:27017/blogDB", {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const postSchema = {
  title: {
    type: String,
    required: true
  },
  body: {
    type: String,
    required: true
  }
};

const Post = mongoose.model("Post", postSchema);

// Routes

app.get("/", function(req, res) {
  Post.find({}, function(err, posts) {
    res.render("home", { homeContent: posts });
  })
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
  const post = new Post({
    title: req.body.title,
    body: req.body.content
  });

  post.save(function(err) {
    if (!err) {
      res.redirect("/");
    }
  })
});

app.get("/posts/:postId", function(req, res) {
  const postId = req.params.postId;
  Post.findOne({_id: postId}, function(err, post) {
    res.render("post", {postSelected: post});
  });
});

app.listen(3000, function() {
  console.log("Server started on port 3000");
});
