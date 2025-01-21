import os
import argparse
import tempfile

# Custom modules
import modules.youtube as ytube
import modules.video_edit as ve
import modules.vocal_remover as vr
import modules.utils as utils


def main():
    parser = argparse.ArgumentParser(description="Remove vocals from an audio file.")
    parser.add_argument("youtube_link", help="Path to the input audio file")
    parser.add_argument("output",help="Output Dir name")

    
    args = parser.parse_args()

    tmp_dir_obj = tempfile.TemporaryDirectory()
    tmp_dir = tmp_dir_obj.name
    video_title = ytube.get_video_title(args.youtube_link)
    ytube.download_youtube_video(args.youtube_link,tmp_dir)
    ve.extract_audio_from_video(tmp_dir)
    vr.remove_vocals(tmp_dir)
    utils.copy_accompaniment_file(tmp_dir)
    utils.convert_wav_to_mp3(tmp_dir)
    ve.add_audio_to_video(tmp_dir)
    utils.rename_final_video(tmp_dir,video_title,args.output)
    temp_dir.cleanup()

if __name__ == "__main__":
    main()
