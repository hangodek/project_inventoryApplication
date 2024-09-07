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

module.exports = {
  dbGetAnimeList,
  dbPostAnimeList,
};
