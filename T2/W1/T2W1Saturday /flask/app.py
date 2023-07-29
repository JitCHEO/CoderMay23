
from flask import Flask

app = Flask(__name__)

# CRUD accounts

# generic route stays at the top
@app.route("/")
def hello_world():
    return "Hello world"

# list of accounts
@app.route("/accounts")
def list_of_accounts():
    return "List of accounts"

@app.route('/accounts/<username>')
def show_accounts_with_username(username):
    return f'accounts with username {username}'

@app.route('/accounts/<id>')
def show_accounts_with_id(id):
    return f'accounts with id {id}'
@app.route("/")
def hello_world():
    return "List of accounts"

#  Another pros of FLASK as it will return it in HTML if cant recognise correcrtlty.


# CRUD accounts
# { "accounts": [
# ]
# }
# {
# "account": { name }
# }
# {"message": "Hello World"}

@app.route("/")
def hello_world():
    return {"message": "hello world"}


# list of accounts
@app.route("/accounts")
def list_of_accounts():
    return { "accounts": []}


@app.route('/accounts/<username>')
def show_accounts_with_username(username):
    return {
            "account": {
                "username": username
            }
        }


@app.route('/accounts/<int:id>')
def show_accounts_with_id(id):
    return {
            "account": {
                "id": id
            }
        }


