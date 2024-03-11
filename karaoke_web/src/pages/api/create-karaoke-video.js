const resolve = require('path').resolve
const spawn = require("child_process").spawn;

export default function handler(req, res) {
    const requestMethod = req.method;
    // const body = JSON.parse(req.body);
    switch (requestMethod) {
        case "GET":
            let videoURL = req.query.video_url;
            let pythonInterpreter = resolve("../karaoke_utils/karaoke_env/bin/python3");
            let karaokeDriverUtility = resolve("../karaoke_utils/karaoke_driver/main.py");
            try {
                const pythonProcess = spawn(pythonInterpreter, [karaokeDriverUtility, videoURL, "&> /dev/null"],{shell: true});
                res.status(200).json({ "message": "successful" });
            } catch {
                console.log("PROBLEM")
                res.status(500).json({ "message": "error" });
            } finally {
                res.end("end");
            }

    }
}