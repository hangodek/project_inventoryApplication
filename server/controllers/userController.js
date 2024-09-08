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

async function deleteAnimeList(req, res) {
  const { animeToBeDeleted } = req.body;
  console.log(animeToBeDeleted);

  db.dbDeleteAnimeList(animeToBeDeleted);
}

async function searchAnimeList(req, res) {
  const searchBy = req.query.searchBy;
  const list = await db.dbSearchAnimeList(searchBy);
  console.log(list);
  res.json({ ...list });
}

module.exports = {
  getAnimeList,
  postAnimeList,
  deleteAnimeList,
  searchAnimeList,
};
