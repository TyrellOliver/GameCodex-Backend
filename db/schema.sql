DROP DATABASE IF EXISTS games_dev;
CREATE DATABASE games_dev;

\c games_dev;

CREATE TABLE games (
 id SERIAL PRIMARY KEY,
 name TEXT NOT NULL,
 release_year INT NOT NULL,
 genre TEXT,
 rating VARCHAR(2) NOT NULL,
 discontinued BOOL,
 game_studio TEXT,
 system TEXT
);
