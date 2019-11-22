const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const ejs = require("ejs");

// Setup
const app = express();

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

// Mongo Setup
mongoose.connect("mongodb://localhost:27017/wikiDB", {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const articleSchema = {
  title: String,
  content: String
};

const Article = mongoose.model("Article", articleSchema);

///////////////////////////////// ROUTES FOR ALL ARTICLES ////////////////////////
app.route("/articles")

  .get(function (req, res) {
    Article.find({}, function (err, foundArticles) {
      if (!err) {
        res.send(foundArticles);
      } else {
        res.send(err);
      }
    });
  })

  .post(function (req, res) {
    const article = new Article({
      title: req.body.title,
      content: req.body.content
    });
    article.save(function (err) {
      if (!err) {
        res.send("success");
      } else {
        res.send(err);
      }
    });
  })

  .delete(function (req, res) {
    Article.deleteMany({}, function (err) {
      err ? res.send(err) : res.send("All articles deleted");
    });
  });

///////////////////////////////// ROUTES FOR SPECIFIC ARTICLES////////////////////////
app.route("/articles/:postId")

  .get(function(req, res) {
    const postId = req.params.postId;
    Article.findOne({ _id: postId }, function (err, foundArticle) {
      if (foundArticle) {
        res.send(foundArticle);
      } else {
        res.send("No article was found");
      }
    });
  })
  .put(function (req, res) {
    Article.updateOne(
      { _id: req.params.postId },
      { title: req.body.title, content: req.body.content },
      { overwrite: true },
      function (err) {
        if (!err) {
          res.send("Update successful");
        } else {
          res.send(err);
        }
      }
    );
  })

  .patch(function(req, res) {
    Article.updateOne(
      { _id: req.params.postId },
      { $set: req.body },
      function(err) {
        if (!err) {
          res.send("Update successful");
        } else {
          res.send(err);
        }
      }
    );
  })

  .delete(function(req, res) {
    Article.findByIdAndDelete(
      req.params.postId,
      function(err) {
        if(!err) {
          res.send("Delete successful")
        } else {
          res.send(err)
        }
      }
    ); 
  });

app.listen(3000, function () {
  console.log("Server started on port 3000");
});
