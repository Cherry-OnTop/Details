const mongoose = require('mongoose');

let mongoUri = process.env.MONGOURI;
if (process.env.NODE_ENV === 'production') {
  mongoose.connect(mongoUri);
} else {
  mongoose.connect('mongodb://localhost/movieData');
}

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => console.log('mongodb connection established'));

module.exports = db;
