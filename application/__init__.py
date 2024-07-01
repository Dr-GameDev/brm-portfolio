from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_mail import Mail
import os

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///db.sqlite3'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['MAIL_SERVER'] = 'smtp.gmail.com'
app.config['MAIL_PORT'] = 587
app.config['MAIL_USE_TLS'] = True
app.config['MAIL_USE_SSL'] = False
app.config['MAIL_USERNAME'] = "raymondbabalo5@gmail.com"
app.config['MAIL_PASSWORD'] = os.environ.get("GOOGLE_MAIL_PASSWORD")
app.config['MAIL_DEFAULT_SENDER'] = "<no reply client@mail.org.za>"

db = SQLAlchemy(app)
mail = Mail(app)

from application import routes

def create_db():
    with app.app_context():
        db.create_all()
