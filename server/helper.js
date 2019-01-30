const connect = require("../db/index.js");
const MONGO_URI = "mongodb://localhost:27017/movie";
var MongoClient = require("mongodb").MongoClient;
const client = new MongoClient(MONGO_URI);
const connection = client.connect();

module.exports = (movieId, cb) => {
  const db = client.db("movie");
  const collection = db.collection("movies");
  collection.findOne({ _id: Number(movieId) }, (err, movie) => {
    if (err) throw err;
    else {
      cb(null, movie);
    }
  });
};

// module.exports = (movieId, cb) => {
//   MovieSchema.findOne({ _id: Number(movieId) }, (err, movie) => {
//     return cb(err, movie);
//   });
// };
