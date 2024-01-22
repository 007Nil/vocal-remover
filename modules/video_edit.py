from moviepy.video.io.VideoFileClip import VideoFileClip

def extract_audio_from_video(video_path, audio_output_path):
    video_clip = VideoFileClip("/tmp/"+video_path)
    audio_clip = video_clip.audio

    audio_clip.write_audiofile("/tmp/test.mp3", codec='mp3')

    video_clip.close()

    print(f"Audio extracted successfully. Result saved to: {audio_output_path}")