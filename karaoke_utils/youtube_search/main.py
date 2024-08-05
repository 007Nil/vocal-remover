import sys
import json
import uuid
from youtubesearchpython import VideosSearch
import tempfile

def main():
    videosSearch = VideosSearch(sys.argv[1], limit = 100)
    sys.stdout.flush()
    tmp_dir = tempfile.mkdtemp()
    random_name = uuid.uuid4().hex
    
    with open(f"{tmp_dir}/{random_name}.json", "w") as search_output:
        json.dump(videosSearch.result(), search_output)
    
    print(f"{tmp_dir}/{random_name}.json")
    
if __name__ == "__main__":
    main()
