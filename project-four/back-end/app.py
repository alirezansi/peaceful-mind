from flask import  Flask, jsonify, g
from flask_cors import CORS
import models
from resources.yogas import yoga
from resources.poses import pose

DEBUG = True
PORT = 8000

app = Flask(__name__)

# logic for the DB
@app.before_request
def before_request():
    """Connect to the database before each request."""
    g.db = models.DATABASE
    g.db.connect()


@app.after_request
def after_request(response):
    """Close the database connection after each request."""
    g.db.close()
    return response

CORS(yoga, origins=['http://localhost:3000'], supports_credentials=True)

app.register_blueprint(yoga, url_prefix='/api/v1/yogas')
app.register_blueprint(pose, url_prefix='/api/v1/poses')

if __name__ == '__main__':
    models.initialize()
    app.run(debug=DEBUG, port=PORT)


