from flask import Flask

app = Flask(__name__, instance_relative_config=True)
app.config["MONGO_URI"] = "mongodb://localhost:27017/blogDB"

from app import views

app.config.from_object('config')