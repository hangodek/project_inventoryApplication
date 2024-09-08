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

// app.get("/", userController.getAnimeList);

app.get("/", (req, res) => {
  if (req.query.searchBy) {
    // If the searchBy query parameter exists, perform a search
    userController.searchAnimeList(req, res);
  } else {
    // Otherwise, return the full anime list
    userController.getAnimeList(req, res);
  }
});
app.post("/", upload.single("submitImage"), userController.postAnimeList);
app.delete("/", userController.deleteAnimeList);

module.exports = app;
