const multer = require("multer");
const upload = multer({ dest: "uploads/" });

app.post(
  "/upload",
  upload.fields([{ name: "videos" }, { name: "audio" }, { name: "notes" }]),
  (req, res) => {
    console.log("Uploaded files:", req.files);
    res.send("Files uploaded successfully");
  }
);
