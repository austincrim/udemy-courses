from flask import render_template, request

from app import app

@app.route('/', methods=["GET", "POST"])
def index():
    if request.method == 'GET':
        return render_template("index.html", data="Python")

    if request.method == 'POST':
        data = request.form['name']
        return render_template("index.html", data=data)

@app.route('/about')
def about():
    return render_template("about.html")