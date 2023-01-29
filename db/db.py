from flask import Flask
from flask_pymongo import pymongo
from app import app
CONNECTION_STRING = "mongodb+srv://kaster-admin:dutyland@kaster.gbdbqkw.mongodb.net/?retryWrites=true&w=majority"
client = pymongo.MongoClient(CONNECTION_STRING)
db = client.get_database('kaster_users')
user_collection = pymongo.collection.Collection(db, 'user_collection')

# from flask import Flask
# from pymongo import MongoClient

# app = Flask(__name__)

# client = MongoClient('localhost', 8000)

# db = client.flask_db
# todos = db.todos