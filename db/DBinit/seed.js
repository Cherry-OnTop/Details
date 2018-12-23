const fs = require('fs');
const mongoose = require('mongoose');
const MovieSchema = require('../schema.js');
const videos = require('./youtubeLinks.js');

const mockarooData = fs.readFileSync('./MOCK_DATA.json');
const movieData = JSON.parse(mockarooData.toString());

const adjustData = (movieData) => {
  let movieId = 100;

  const possibleDetails = [
    'Closed Caption',
    'Accessibility Devices Available',
    'Dolby Cinema @ AMC',
    'Recliner Seats',
    'Seat Side Service',
    'Reserved Seating',
    'Intermission'
  ];

  let ratings = ['G', 'PG', 'PG-13', 'R'];
  for (var i = 0; i < movieData.length; i++) {
    const movie = movieData[i];

    //MOVIE ID
    movie['MovieId'] = movieId++;

    //THEATER DETAILS
    let amountOfDetails = Math.floor(
      Math.random() * (possibleDetails.length - 2) + 2
    );
    let details = [];
    for (var x = 0; x < amountOfDetails; x++) {
      details.push(possibleDetails[x]);
    }
    movie['TheaterDetails'] = details;

    //MOVIE RATING
    let randomIndexRating = Math.floor(Math.random() * ratings.length);
    movie.Info['Rating'] = ratings[randomIndexRating];

    //MOVIE RUNTIME
    let runtime = Math.floor(Math.random() * (130 - 85) + 85);
    movie.Info['Runtime'] = runtime + ' min';

    //PHOTOS
    for (var k = 0; k < movie.Photos.links.length; k++) {
      movie.Photos.links[k] = 'https://picsum.photos/300/300/?random';
    }
    movie.Cast[0].Photo = 'https://picsum.photos/300/300/?random';
    movie.Cast[1].Photo = 'https://picsum.photos/300/300/?random';

    //MOVIES
    for (var y = 0; y < movie.Trailer.links.length; y++) {
      let randomIndexMovie = Math.floor(Math.random() * videos.length);
      movie.Trailer.links[y] = videos[randomIndexMovie];
    }
  }
  for (var i = 0; i < movieData.length; i++) {
    dataToEnterTheDB.push(movieData[i]);
  }
};

let dataToEnterTheDB = [];

adjustData();

for (var i = 0; i < movieData.length; i++) {
  let movie = movieData[i];
  let newMovie = new MovieSchema({
    MovieId: movie.MovieId,
    Title: movie.Title,
    Theater: movie.Theater,
    Showtimes: {
      Standard: movie.Showtimes.Standard,
      Imax: movie.Showtimes.Imax
    },
    TheaterDetails: {
      Standard: movie.TheaterDetails
    },
    Trailer: {
      Links: movie.Trailer.links
    },
    Photos: {
      Links: movie.Photos.links
    },
    Info: {
      Description: movie.Info.Description,
      Rating: movie.Info.Rating,
      Genre: movie.Info.Genre,
      DirectedBy: movie.Info.DirectedBy,
      WrittenBy: movie.Info.WrittenBy,
      ReleaseDate: movie.Info.ReleaseDate,
      Runtime: movie.Info.Runtime,
      Studio: movie.Info.Studio
    },
    Cast: movie.Cast
  });
  newMovie.save((err) => {
    if (err) console.log('there was an error: ', err);
  });
}

exports.adjustData = adjustData;
