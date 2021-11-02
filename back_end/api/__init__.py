try:
    import unzip_requirements
except ImportError:
    pass

import os
from flask import Flask
from flask_cors import CORS

app = Flask(__name__)

CORS(app)

@app.route('/')
def hello():
    return 'Hello!'
