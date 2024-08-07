import fs from 'fs';

export default function handler(req, res) {

    let downloadType = req.query.type;
    let downlaodPath = req.query.download_path;
    let fileName = req.query.file_name;

    fs.stat(downlaodPath, (err, stats) => {
        if (err || !stats.isFile()) {
            return res.status(404).json({ error: 'File not found' });
        }
        if (downloadType === "mp3") {
            res.setHeader('Content-Disposition', 'attachment; filename=' + fileName + '');
            res.setHeader('Content-Type', 'audio/mpeg');
        }
        const fileStream = fs.createReadStream(downlaodPath);
        fileStream.pipe(res);
    });
}