const { Router } = require("express");
const app = Router();
const path = require("path");
const userController = require("../controllers/userController");

const multer = require("multer");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "files/images");
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, uniqueSuffix + "-" + file.originalname);
  },
});

const upload = multer({ storage: storage });

// app.get("/", (req, res) => {
//   res.json({ message: "gasdds" });
// });

app.get("/", userController.getAnimeList);
app.post("/", upload.single("submitImage"), userController.postAnimeList);

module.exports = app;
