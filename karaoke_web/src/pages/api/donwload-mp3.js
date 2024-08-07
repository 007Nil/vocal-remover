const resolve = require('path').resolve
const spawn = require("child_process").spawn;
const tmp = require('tmp');

export default function handler(req, res) {
    const requestMethod = req.method;
    switch (requestMethod) {
        case "GET":
            const tmpobj = tmp.dirSync();
            const tmpDir = tmpobj.name;
            let videoURL = req.query.video_url;
            let pythonInterpreter = resolve("../karaoke_utils/donwload-mp3/.env/bin/python3");
            let mp3DownloadUtility = resolve("../karaoke_utils/donwload-mp3/download_mp3.py");
            try {
                const pythonProcess = spawn(pythonInterpreter, [mp3DownloadUtility, videoURL, tmpDir]);
                pythonProcess.stdout.on('data', (data) => {
                    let audio_file_name = data.toString().split("/").pop();
                    res.status(200).json({ "message": "successful","response_data": {"download_path": data.toString(), "download_dir": tmpDir, "file_name": audio_file_name}});
                    res.end("end");
                  });
            } catch {
                console.log("PROBLEM")
                res.status(500).json({ "message": "error" });
                res.end("end");
            }

    }
}