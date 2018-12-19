const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/movieData');

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => console.log('mongodb connection established'));

const dataSchema = new mongoose.Schema({
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
    Written_By: String,
    ReleaseDate: String,
    Runtime: String,
    Studio: String
  },
  Cast: [{ Name: String, Photo: String }, { Name: String, Photo: String }]
});

let MovieSchema = mongoose.model('Movie', dataSchema);

module.exports = MovieSchema;
