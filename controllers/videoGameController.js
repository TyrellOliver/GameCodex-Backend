const express = require('express');
const games = express.Router();

games.get('/',(req,res)=>{
    res.send('Video Games Route')
})

module.exports = games;