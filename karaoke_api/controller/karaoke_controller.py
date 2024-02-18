import os

def call_karaoke_driver(video_link):
    driver_code_abs_path = os.path.abspath("../karaoke_driver/main.py")
    driver_python_interpreter_abs_path = os.path.abspath("../karaoke_driver/karaoke_driver_env/bin/python")
    print("Processing...."+video_link)
    driver_cmd = f"{driver_python_interpreter_abs_path} {driver_code_abs_path} {video_link} > /dev/null"
    print("Karaoke Done!!!...")
    os.system(driver_cmd)