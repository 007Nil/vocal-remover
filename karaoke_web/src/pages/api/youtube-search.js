const spawn = require("child_process").spawn;
const resolve = require('path').resolve
const { readFileSync, rmSync } = require('fs');

export default function handler(req, res) {
  const requestMethod = req.method;
  // const body = JSON.parse(req.body);
  switch (requestMethod) {
    case "GET":
      let query = req.query.query;
      let pythonInterpreter = resolve("../karaoke_utils/karaoke_env/bin/python3");
      let youtubeSearchScript = resolve("../karaoke_utils/youtube_search/main.py");
      const pythonProcess = spawn(pythonInterpreter,[youtubeSearchScript, query],{shell: true});
      pythonProcess.stdout.on('data', (data) => {
        const dataFile = data.toString().replaceAll("\n","");
        const youtubeSearchData = readFileSync(dataFile);
        rmSync(dataFile, { recursive: true, force: true });
        res.status(200).json(JSON.parse(youtubeSearchData));
        res.end("end");
       });
  }
}
