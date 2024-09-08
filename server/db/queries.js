const pool = require("./pool");

async function dbGetAnimeList() {
  const { rows } = await pool.query("SELECT * FROM animelist");
  return rows;
}

async function dbPostAnimeList(submitName, submitStudio, submitImage) {
  await pool.query(
    "INSERT INTO animelist (name, studioname, imagepath) VALUES ($1, $2, $3)",
    [submitName, submitStudio, submitImage]
  );
}

async function dbDeleteAnimeList(identifier) {
  await pool.query("DELETE FROM animelist WHERE name = $1", [identifier]);
}

async function dbSearchAnimeList(identifier) {
  const { rows } = await pool.query(
    "SELECT * FROM animelist WHERE name ILIKE $1",
    [`%${identifier}%`]
  );
  return rows;
}

module.exports = {
  dbGetAnimeList,
  dbPostAnimeList,
  dbDeleteAnimeList,
  dbSearchAnimeList,
};
