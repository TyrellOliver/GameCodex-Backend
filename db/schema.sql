DROP DATABASE IF EXISTS games_dev;
CREATE DATABASE games_dev;

\c games_dev;

CREATE TABLE games (
 id SERIAL PRIMARY KEY,
 name TEXT NOT NULL,
 "release year" INT NOT NULL,
 genre TEXT,
 rating INT NOT NULL,
 discontinued BOOL,
 "game studio" TEXT
);

ALTER TABLE games RENAME "game studio" TO platform;

ALTER TABLE games DROP COLUMN platform;


CREATE TABLE platforms (
    id SERIAL PRIMARY KEY,
    name VARCHAR(50) NOT NULL
);

CREATE TABLE games_platforms (
  game_id INTEGER NOT NULL REFERENCES games(id),
  platform_id INTEGER NOT NULL REFERENCES platforms(id)
);


ALTER TABLE games DROP COLUMN "release year";

ALTER TABLE games ADD COLUMN "release year" INT NOT NULL;

ALTER TABLE games DROP COLUMN rating;

ALTER TABLE games ADD COLUMN rating TEXT NOT NULL;