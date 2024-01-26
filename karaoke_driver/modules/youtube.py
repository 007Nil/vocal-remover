from pytube import YouTube


def get_video_title(link):
    youtubeObject = YouTube(link)
    return youtubeObject.title

def download_youtube_video(link,tmp_dir):
    youtubeObject = YouTube(link)
    
    youtubeObject = youtubeObject.streams.filter(progressive=True, file_extension='mp4').get_highest_resolution()
    try:
        youtubeObject.download(filename=tmp_dir+"/raw.mp4")
    except:
        print("An error has occurred")
    print("Download is completed successfully")