const pgp = require("pg-promise")();
require("dotenv").config();

const cn = {
  host: process.env.PG_HOST,
  port: process.env.PG_PORT,
  database: process.env.PG_DATABASE,
  user: process.env.PG_USER
};

// Passing an object with the necessary information to connect the server to the database

const db = pgp(cn);

module.exports = db;
