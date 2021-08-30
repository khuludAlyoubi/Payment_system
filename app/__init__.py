from flask import Flask
#initialisng the flask application
app = Flask(__name__)
#importing the files containing the routes/apis to be used by the flask application
from app import routes
