import fs from "fs";

export default function handler(req, res) {
    let dirName = req.query.download_dir;
    fs.rmSync(dirName, { recursive: true, force: true });
    res.status(200)
    res.end("end")

    
}