from flask import Flask
from routes import api
from flask_cors import CORS

app = Flask(__name__)
cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'
app.register_blueprint(api, url_prefix='/v1/api')
cors = CORS(app, resources={r"/v1/api/*": {"origins": "*"}})

if __name__ == '__main__':
    app.run(debug=True, port=8080)