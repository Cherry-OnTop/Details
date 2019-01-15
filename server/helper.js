const MovieSchema = require('../db/schema.js');

module.exports = (movieId, cb) => {
  MovieSchema.findOne({ _id: Number(movieId) }, (err, movie) => {
    cb(err, movie);
  });
};
