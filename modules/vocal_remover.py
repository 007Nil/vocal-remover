import os
from spleeter.separator import Separator

def remove_vocals(input_file, output_file):
    separator = Separator('spleeter:2stems')
    audio_input = os.path.abspath(input_file)
    audio_output = os.path.abspath(output_file)

    # Separating vocals and accompaniment
    separator.separate_to_file(audio_input, audio_output)

    print(f"Vocals removed successfully. Result saved to: {audio_output}")