from flask import Flask, render_template, request

app = Flask(__name__)


@app.route("/")
def index():
    name = request.args.get("name", "World")
    return render_template("01-index.html", placeholder = name)

if __name__ == '__main__':
    app.run(debug=True)