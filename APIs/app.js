const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");

const app = express();

app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function(req, res) {
  res.sendFile(__dirname + "/signup.html");
});

app.post("/", function(req, res) {
  let firstName = req.body.fName;
  let lastName = req.body.lName;
  let email = req.body.email;

  let data = {
    members: [
      {
        email_address: email,
        status: "subscribed",
        merge_fields: {
          FNAME: firstName,
          LNAME: lastName
        }
      }
    ]
  };

  let jsonData = JSON.stringify(data);

  let options = {
    url: "https://us20.api.mailchimp.com/3.0/lists/7ecf913d2e",
    method: "POST",
    headers: {
      Authorization: "austincrim:7ecf913d2e"
    },
    body: jsonData
  };

  request(options, function(err, res, body) {
    if (err) {
      res.sendFile(__dirname + "/failure.html");
    } else if (res.statusCode === 200) {
      res.send(__dirname + "/success.html");
    } else {
      res.send(__dirname + "/failure.html");
    }
  });
});

app.post("/failure.html", function(req, res) {
  res.redirect("/");
});

app.listen(process.env.PORT || 3000, function() {
  
});
