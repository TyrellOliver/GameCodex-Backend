const express = require('express');
const games = express.Router();
const { getAllGames } = require('../queries/game');

// INDEX/GET - all video games
games.get('/', async (req,res)=>{
    const allGames = await getAllGames();
    res.json(allGames);
    });

module.exports = games;