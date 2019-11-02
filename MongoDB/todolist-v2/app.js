const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const date = require(__dirname + "/date.js");

const app = express();

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

mongoose.connect("mongodb+srv://admin-austin:Test123@todolistdb-0tm2y.mongodb.net/todolistDB", {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const itemsSchema = {
  name: {
    type: String,
    required: true
  }
};
const Item = mongoose.model("Item", itemsSchema);

const item1 = new Item({
  name: "Welcome to your todo list!"
});

const item2 = new Item({
  name: "Hit the + button to add a new item."
});

const item3 = new Item({
  name: "<-- Hit this checkbox to delete an item."
});

const defaultItems = [item1, item2, item3];

const listSchema = {
  name: String,
  items: [itemsSchema]
};

const List = mongoose.model("List", listSchema);

app.get("/", function (req, res) {
  Item.find({}, function (err, items) {
    if (items.length === 0) {
      Item.insertMany(defaultItems, function (err) {
        err ? console.log(err) : console.log("Default items inserted");
        res.redirect("/");
      });
    } else {
      res.render("list", { listTitle: "Today", newListItems: items });
    }
  });
});

app.get("/:customListName", function (req, res) {
  const customListName = req.params.customListName;

  List.findOne({ name: customListName }, function (err, foundList) {
    if (!err) {
      if (!foundList) {
        const list = new List({
          name: customListName,
          items: defaultItems
        });
        list.save();
        res.redirect("/" + customListName);
      } else {
        res.render("list", { listTitle: foundList.name, newListItems: foundList.items })
      }
    }
  });
});

app.post("/", function (req, res) {
  const itemText = req.body.newItem;
  const listText = req.body.list;

  const newItem = new Item({
    name: itemText
  });

  if (listText === "Today") {
    newItem.save();
    res.redirect("/");
  } else {
    List.findOne({name: listText}, function(err, foundList) {
      foundList.items.push(newItem);
      foundList.save();
      res.redirect("/" + listText);
    })
  }
});

app.post("/delete", function (req, res) {
  const checkedItemId = req.body.checkbox;
  const listName = req.body.listName;

  if (listName === "Today") {
    Item.findByIdAndRemove(checkedItemId, function (err) {
      err ? console.log("error deleting") : console.log("delete successful");
      res.redirect("/");
    });
  } else {
    List.findOneAndUpdate({name: listName}, {$pull: {items: {_id: checkedItemId}}}, function (err, foundList) {
      if (!err) {
        res.redirect("/" + listName);
      }
    });
  }
});

app.listen(process.env.PORT || 3000, function () {
  console.log("Server started");
});
