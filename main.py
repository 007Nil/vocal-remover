import os
import argparse
import tempfile

TEP_DIR = temp_dir = tempfile.TemporaryDirectory()

def main():
    parser = argparse.ArgumentParser(description="Remove vocals from an audio file.")
    parser.add_argument("youtube_link", help="Path to the input audio file")
    # parser.add_argument("output_file", help="Path to save the output audio file without vocals")
    
    args = parser.parse_args()

if __name__ == "__main__":
    main()