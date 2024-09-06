const db = require("../db/queries");

async function getAnimeList(req, res) {
  const list = await db.dbGetAnimeList();
  console.log(list);
  res.json({ ...list });
}

async function postAnimeList(req, res) {
  const { submitName, submitStudio } = req.body;
  console.log(req.body);
  db.dbPostAnimeList(submitName, submitStudio);
}

module.exports = {
  getAnimeList,
  postAnimeList,
};
