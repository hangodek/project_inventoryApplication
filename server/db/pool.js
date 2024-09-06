const { Pool } = require("pg");

module.exports = new Pool({
  user: "postgres",
  password: "123",
  host: "127.0.0.1",
  port: "5432",
  database: "mydb",
});
