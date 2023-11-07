const express = require('express');
const games = express.Router();
const { getAllGames, getGame, createGame, deleteGame, updateGame } = require('../queries/game');

// INDEX/GET - all video games
games.get('/', async (req,res)=>{
    const allGames = await getAllGames()
    if(allGames[0]){
        res.status(200).json(allGames)
    } else {
        res.status(500).json({error: "server error"}
        )
    }
    
    });

    games.get('/:id', async (req,res) => {
        const { id } = req.params
        const oneGame = await getGame(id)
        if(oneGame){
            res.status(200).json(oneGame)
        }else{
            res.status(404).json({error: 'Not Found'})
        }
    })

    // games.post('/', checkName, checkReleaseYear, checkGenre, checkRating, checkBoolean, checkGameStudio, async (req, res) => {
    //     const body = req.body
    //     const game = await createGame(body)
    //     res.status(200).json(game)
    // })

    games.delete('/:id', async (req, res) => {
        const { id } = req.params
        const deletedGame = await deleteGame(id)
        if(deletedGame.id){
            res.status(200).json(deletedGame)
        } else {
            res.status(404).json({error: "Game Not Found"})
        }
    })

    // games.put("/:id", checkName, checkBoolean, async(req, res) => {
    //     const { id } = req.params
    //     const body = req.body
    //     const updatedGame = await updateGame(id, body)
    //     if(updatedGame.id){
    //         res.status(200).json(updatedColor)
    //     } else {
    //         res.status(404).json({ error: "Game not Found "})
    //     }
    // })

    

module.exports = games;