from youtubesearchpython import VideosSearch

def youtube_search_controller(query=None):
    videosSearch = VideosSearch(query, limit = 100)
    return videosSearch.result()