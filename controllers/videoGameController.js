const express = require("express");
const games = express.Router();
const {
  getAllGames,
  getGame,
  createGame,
  deleteGame,
  updateGame,
} = require("../queries/game");
const {
  checkName,
  checkReleaseYear,
  checkGenre,
  checkRating,
  checkBoolean,
  checkGameStudio,
  checkSystem,
} = require("../validations/checkGames");

// INDEX/GET - all video games
games.get("/", async (req, res) => {
  const allGames = await getAllGames();
  if (allGames[0]) {
    res.status(200).json(allGames);
  } else {
    res.status(500).json({ error: "server error" });
  }
});

//SHOW/GET - one game
games.get("/:id", async (req, res) => {
  const { id } = req.params;
  const oneGame = await getGame(id);
  if (oneGame) {
    res.status(200).json(oneGame);
  } else {
    res.status(404).json({ error: "Not Found" });
  }
});

// CREATE/POST - creating a new game
games.post(
  "/",
  checkName,
  checkReleaseYear,
  checkGenre,
  checkRating,
  checkBoolean,
  checkGameStudio,
  checkSystem,
  async (req, res) => {
    const body = req.body;
    const game = await createGame(body);
    res.status(200).json(game);
  }
);

// DESTROY/DELETE - deleting a game
games.delete("/:id", async (req, res) => {
  const { id } = req.params;
  const deletedGame = await deleteGame(id);
  if (deletedGame.id) {
    res.status(200).json(deletedGame);
  } else {
    res.status(404).json({ error: "Game Not Found" });
  }
});

// UPDATE/PUT - updating a game
games.put(
  "/:id",
  checkName,
  checkBoolean,
  checkGenre,
  checkRating,
  checkBoolean,
  checkGameStudio,
  async (req, res) => {
    const { id } = req.params;
    const body = req.body;
    const updatedGame = await updateGame(+id, body);
    console.log(updatedGame);
    if (updatedGame.id) {
      res.status(200).json(updatedGame);
    } else {
      res.status(404).json({ error: "Game not Found " });
    }
  }
);

module.exports = games;
