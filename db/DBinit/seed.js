const fs = require("fs");
var MongoClient = require("mongodb").MongoClient;
var url = "mongodb://localhost:27017/movie";
var client = new MongoClient(url);
const connection = client.connect();

var movieData = fs.readFileSync("./data.json");
var parsedMovieData = JSON.parse(movieData);

var count = 101;

var assignNewMovieID = function() {
  for (var i = 0; i < parsedMovieData.length; i++) {
    parsedMovieData[i]["_id"] = count;
    parsedMovieData[i]["MovieId"] = count.toString();
    count++;
  }
  console.log("count:", count);
};

const connect = connection;

//splice dataToEnterTheDB into chunks to insert into DB
var start = 1;
var end = 1000;

connect.then(() => {
  console.time("dbinsert");
  var storeBatch = () => {
    assignNewMovieID();
    var db = client.db("movie");
    const coll = db.collection("movies");
    coll.insertMany(parsedMovieData, { ordered: false }, (err, data) => {
      if (err) {
        throw err;
      } else if (start < end) {
        start++;
        storeBatch();
      } else {
        console.timeEnd("dbinsert");
      }
    });
  };
  storeBatch();
});

module.exports = connection;

// in terminal, cd into DBinit
// run following command
// node seed.js to seed database