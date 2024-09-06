const { Router } = require("express");
const app = Router();
const userController = require("../controllers/userController");

// app.get("/", (req, res) => {
//   res.json({ message: "gasdds" });
// });

app.get("/", userController.getAnimeList);
app.post("/godek", userController.postAnimeList);

module.exports = app;
