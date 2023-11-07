const express = require("express");
const cors = require("cors");

const app = express();

const videoGameController = require('./controllers/videoGameController')

// Middleware
app.use(cors());
app.use(express.json());
app.use('/games', videoGameController);


// Routes
app.get("/", (req, res) => {
  res.send("Welcome to the home page");
});

app.get("*", (req, res) => {
  res.status(404).json({ error: "Page Not Found" });
});

module.exports = app;
