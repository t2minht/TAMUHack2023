from flask import Flask
from flask_pymongo import pymongo

CONNECTION_STRING = "mongodb+srv://kaster-admin:dutyland@kaster.gbdbqkw.mongodb.net/?retryWrites=true&w=majority"
client = pymongo.MongoClient(CONNECTION_STRING)
db = client.get_database('kaster_users')
user_collection = pymongo.collection.Collection(db, 'user_collection')

app = Flask(__name__)
@app.route('/')
def flask_mongodb_atlas():
    return "flask mongodb atlas!"

#test to insert data to the data base
@app.route('/test')
def test():
    db.db.collection.insert_one({"name": "John"})
    return "Connected to the data base!"