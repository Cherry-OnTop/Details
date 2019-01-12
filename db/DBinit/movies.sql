CREATE DATABASE movies;

use movies;

CREATE TABLE IF NOT EXISTS Movies {
    id INT NOT NULL PRIMARY KEY,
    movieId VARCHAR(250) NOT NULL,
    title VARCHAR(500) NOT NULL,
    theater VARCHAR(1000) NOT NULL,
    showTimeStandard JSONB,
    showTimeImax JSONB,
    theaterDetails JSONB,
    trailers JSONB,
    photos JSONB,
    info JSONB
};

-- CREATE TABLE IF NOT EXISTS Showtimes {
--     id INT NOT NULL PRIMARY KEY,
--     movieId INT NOT NULL REFERENCES Movies(id),
--     screenType VARCHAR(500) NOT NULL,
--     showtime VARCHAR(500) NOT NULL
-- };

-- CREATE TABLE IF NOT EXISTS TheaterDetails {
--     id INT NOT NULL PRIMARY KEY,
--     movieId INT NOT NULL REFERENCES Movies(id),
--     details VARCHAR(500) NOT NULL
-- };

-- CREATE TABLE IF NOT EXISTS Trailer {
--     id INT NOT NULL PRIMARY KEY,
--     movieId INT NOT NULL REFERENCES Movies(id),
--     link VARCHAR(500) NOT NULL
-- };

-- CREATE TABLE IF NOT EXISTS Photos {
--     id INT NOT NULL PRIMARY KEY,
--     movieId INT NOT NULL REFERENCES Movies(id),
--     link VARCHAR(500) NOT NULL
-- };