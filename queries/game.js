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
const getGame = async () => {
  try {
    
  } catch (error) {

  }
};

// POST - Creating a game to add to the database
const createGame = async () => {
  try {

  } catch (error) {

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
  getAllGames
};
