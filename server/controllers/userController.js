const db = require("../db/queries");

async function getAnimeList(req, res) {
  const list = await db.dbGetAnimeList();
  console.log(list);
  res.json({ ...list });
}

async function postAnimeList(req, res) {
  const { submitName, submitStudio } = req.body;
  const submitImage = req.file.path;
  db.dbPostAnimeList(submitName, submitStudio, submitImage);
}

module.exports = {
  getAnimeList,
  postAnimeList,
};
