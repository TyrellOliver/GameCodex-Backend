const db = require("../db/dbConfig");

// GET - Getting all games from the database
const getAllGames = async () => {
  try {
    const allGames = await db.any("SELECT * FROM games");
    return allGames;
  } catch (error) {
    return error;
  }
};

// GET - Getting one gane from the database
const getGame = async (id) => {
  try {
    const oneGame = await db.one('SELECT * FROM games WHERE id=$1', id);
    return oneGame;
  } catch (error) {
    return error;
  }
};

// POST - Creating a game to add to the database
const createGame = async (game) => {
  try {
    const newGame = await db.one("INSERT INTO games ( name, release_year, genre, rating, discontinued, game_studio, system ) VALUES($1, $2, $3, $4, $5, $6, $7) RETURNING *", [game.name, game.release_year, game.genre, game.rating, game.discontinued, game.game_studio, game.system ]
    );
    return newGame;
  } catch (error) {
    return error;
  }
};

// DELETE - Deleting a game in the database
const deleteGame = async () => {
  try {

  } catch (error) {

  }
};

// UPDATE - Updating an already existing game in the database
const updateGame = async () => {
  try {

  } catch (error) {

  }
};

module.exports = {
  getAllGames,
  getGame,
  createGame,
  deleteGame,
  updateGame
};
