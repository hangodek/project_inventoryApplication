const pool = require("./pool");

async function dbGetAnimeList() {
  const { rows } = await pool.query("SELECT * FROM animelist");
  return rows;
}

async function dbPostAnimeList(submitName, submitStudio) {
  await pool.query("INSERT INTO animelist (name, studioname) VALUES ($1, $2)", [
    submitName,
    submitStudio,
  ]);
}

module.exports = {
  dbGetAnimeList,
  dbPostAnimeList,
};
