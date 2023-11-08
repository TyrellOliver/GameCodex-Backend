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
    const oneGame = await db.one("SELECT * FROM games WHERE id=$1", id);
    return oneGame;
  } catch (error) {
    return error;
  }
};

// POST - Creating a game to add to the database
const createGame = async (game) => {
  try {
    const newGame = await db.one(
      "INSERT INTO games ( name, release_year, genre, rating, discontinued, game_studio, system ) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *",
      [
        game.name,
        game.release_year,
        game.genre,
        game.rating,
        game.discontinued,
        game.game_studio,
        game.system,
      ]
    );
    return newGame;
  } catch (error) {
    return error;
  }
};

// DELETE - Deleting a game in the database
const deleteGame = async (id) => {
  try {
    const deletedGame = await db.one(
      "DELETE FROM games WHERE id=$1 RETURNING *",
      id
    );
    return deletedGame;
  } catch (error) {
    return error;
  }
};

// UPDATE - Updating an already existing game in the database
const updateGame = async (id, game) => {
  try {
    const updatedGame = await db.one(
      "UPDATE games SET name=$1, release_year=$2, genre=$3, rating=$4, discontinued=$5, game_studio=$6, system=$7 WHERE id=$8 RETURNING *",
      [
        game.name,
        game.release_year,
        game.genre,
        game.rating,
        game.discontinued,
        game.game_studio,
        game.system,
        id,
      ]
    );
    return updatedGame;
  } catch (error) {
    return error;
  }
};

module.exports = {
  getAllGames,
  getGame,
  createGame,
  deleteGame,
  updateGame,
};
