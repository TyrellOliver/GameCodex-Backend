DROP DATABASE IF EXISTS games_dev;
CREATE DATABASE games_dev;

\c games_dev;

CREATE TABLE games (
 id SERIAL PRIMARY KEY,
 name TEXT NOT NULL,
 "release year" TIMESTAMP,
 genre TEXT,
 rating INT,
 discontinued BOOL,
 "game studio" TEXT
);

ALTER TABLE games RENAME "game studio" TO platform;
