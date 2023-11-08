const checkName = (req, res, next) => {
  if (req.body.name) {
    return next();
  } else {
    res.status(400).json({ error: "Name is required" });
  }
};

const checkReleaseYear = (req, res, next) => {
  if (req.body.release_year) {
    return next();
  } else {
    res.status(400).json({ error: "Release year is required" });
  }
};

const checkGenre = (req, res, next) => {
  if (req.body.genre) {
    return next();
  } else {
    res.status(400).json({ error: "Genre is required" });
  }
};

const checkRating = (req, res, next) => {
  if (req.body.rating) {
    return next();
  } else {
    res.status(400).json({ error: "Rating is required" });
  }
};

const checkBoolean = (req, res, next) => {
  const fav = req.body.discontinued;
  if (typeof fav === "boolean") {
    next();
  } else {
    res.status(400).json({ error: "discontinued must be type boolean" });
  }
};

const checkGameStudio = (req, res, next) => {
    if (req.body.game_studio) {
        return next();
      } else {
        res.status(400).json({ error: "game_studio is required" });
      }
};

module.exports = { checkName, checkReleaseYear, checkGenre, checkRating, checkBoolean, checkGameStudio };
