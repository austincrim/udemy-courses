from flask import render_template, request, redirect, url_for
from app import app
from bson.objectid import ObjectId
from flask_pymongo import PyMongo

mongo = PyMongo(app)

@app.route('/')
def index():
    all_posts = mongo.db.posts.find()
    return render_template("index.html", posts = all_posts)


@app.route('/posts/<post_id>')
def posts(post_id):
    print(post_id)
    postSelected = mongo.db.posts.find_one({"_id": ObjectId(post_id)}) 
    print(postSelected)   
    return render_template("post.html", postSelected = postSelected)


@app.route('/compose', methods=["GET", "POST"])
def compose():
    if request.method == "GET":
        return render_template("compose.html")

    if request.method == "POST":
        post = {
            "title": request.form["title"],
            "content": request.form["content"]
        }
        mongo.db.posts.insert_one(post)
        return redirect(url_for('index'))