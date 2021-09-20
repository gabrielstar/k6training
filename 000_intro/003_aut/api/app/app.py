from flask import Flask, jsonify, request
from flask_cors import cross_origin, CORS
from flask_basicauth import BasicAuth

app = Flask(__name__)
#auth
app.config['BASIC_AUTH_USERNAME'] = 'user'
app.config['BASIC_AUTH_PASSWORD'] = 'pass'
basic_auth = BasicAuth(app)
#cors
CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'

posts = [] # maximum size of a python list on a 32 bit system is 536,870,912

#curl -X GET http://localhost:5000/
#Invoke-WebRequest -Uri http://localhost:5000/ -Method GET
@app.route('/')
def hello_world():
    return 'Hello, World!'

#iwr -Uri 'http://localhost:5000/todos' -Headers @{ Authorization = "Basic "+ [System.Convert]::ToBase64String([System.Text.Encoding]::ASCII.GetBytes("user:pass")) }
#Invoke-WebRequest -Uri http://localhost:5000/todos -Method GET -uuser:pass
@app.route('/todos',methods=["GET"])
@cross_origin()
@basic_auth.required
def todos():
    response = jsonify(title="todos from local backend")
    return response

#curl -v -X POST http://localhost:5000/post -uuser:pass
#Invoke-WebRequest -Uri http://localhost:5000/post -Method POST
@app.route("/post", methods=["POST"])
@basic_auth.required
@cross_origin()
def post():
    """POST in server"""
    return jsonify(message="POST request returned")

#Invoke-WebRequest -Uri http://localhost:5000/post/name/gabriel -Method POST
@app.route("/post/name/<string:name>", methods=["POST"])
@cross_origin()
def post_name(name):
    """POST in server"""
    return jsonify(message="Name is %s" % name)

#$params = @{"title"="My Post";"body"="Hello";}
#Invoke-WebRequest -Uri http://localhost:5000/post/add/newpost -Method POST -Body ($params | ConvertTo-JSON) -ContentType "application/json"
@app.route("/post/add/<string:name>", methods=["POST"])
@cross_origin()
def post_add(name):
    """POST in server"""
    post = request.json
    posts.append(post)
    print("post" )
    return jsonify("%s post added" % post['title']), 201

@app.route('/posts',methods=["GET"])
@cross_origin()
def posts_all():
    response = jsonify(posts)
    return response,200