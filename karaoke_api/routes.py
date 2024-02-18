from flask import Blueprint, request
from controller.youtube_controller import youtube_search_controller
from controller.karaoke_controller import call_karaoke_driver
from flask_cors import  cross_origin
api = Blueprint('api_routes', __name__)

@api.route('/youtube_search/', methods=['GET'])
@cross_origin()
def youtube_search():
    query = request.args.get('query', '')
    return youtube_search_controller(query)

@api.route('/create_karaoke_video', methods=['GET'])
@cross_origin()
def karaoke_maker():
    video_link = request.args.get('video_url','')
    call_karaoke_driver(video_link)
    return "200"
    
