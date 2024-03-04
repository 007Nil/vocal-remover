const spawn = require("child_process").spawn;
const resolve = require('path').resolve
export default function handler(req, res) {
  const requestMethod = req.method;
  // const body = JSON.parse(req.body);
  switch (requestMethod) {
    case "GET":
      let query = req.query.query;
      let pythonInterpreter = resolve("../karaoke_utils/karaoke_env/bin/python3");
      let youtubeSearchScript = resolve("../karaoke_utils/youtube_search/main.py");
      const pythonProcess = spawn(pythonInterpreter,[youtubeSearchScript, query]);
      pythonProcess.stdout.on('data', (data) => {
        console.log(JSON.parse(data.toString()))
        res.status(200).json(JSON.parse(data.toString()));
        res.end("");
       });
      
  }
}
