from pytube import YouTube


def get_video_title(link):
    youtubeObject = YouTube(link)
    return youtubeObject.title

def download_youtube_video(link):
    youtubeObject = YouTube(link)
    
    youtubeObject = youtubeObject.streams.get_highest_resolution()
    try:
        youtubeObject.download("/raw.mp4")
    except:
        print("An error has occurred")
    print("Download is completed successfully")