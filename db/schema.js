const mongoose = require('mongoose');
const db = require('./index.js');

const dataSchema = new mongoose.Schema({
  _id: {type: Number, unique: true},
  MovieId: String,
  Title: String,
  Theater: String,
  Showtimes: {
    Standard: [String],
    Imax: [String]
  },
  TheaterDetails: {
    Standard: [String]
  },
  Trailer: {
    Links: [String]
  },
  Photos: {
    Links: [String]
  },
  Info: {
    Description: String,
    Rating: String,
    Genre: String,
    DirectedBy: String,
    WrittenBy: String,
    ReleaseDate: String,
    Runtime: String,
    Studio: String
  }
});

let MovieSchema = mongoose.model('Movie', dataSchema);

module.exports = MovieSchema;