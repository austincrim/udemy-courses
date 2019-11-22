from flask import render_template, request, redirect, url_for
from app import app
from bson.objectid import ObjectId
import pymongo

client = pymongo.MongoClient("mongodb://localhost:27017/")
db = client.blogDB
posts_clctn = db.posts

# post = {
#     "title": "Test",
#     "content": "Test content"
# }

# post_id = posts.insert_one(post).inserted_id


@app.route('/')
def index():
    all_posts = posts_clctn.find()
    return render_template("index.html", posts = all_posts)


@app.route('/posts/<post_id>')
def posts(post_id):
    print(post_id)
    postSelected = posts_clctn.find_one({"_id": ObjectId(post_id)}) 
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
        posts_clctn.insert_one(post)
        return redirect(url_for('index'))