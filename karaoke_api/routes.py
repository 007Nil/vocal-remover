from flask import Blueprint, request
from controller.youtube_controller import youtube_search_controller
api = Blueprint('api_routes', __name__)

@api.route('/youtube_search/', methods=['GET'])
def youtube_search():
    query = request.args.get('query', '')
    return youtube_search_controller(query)
