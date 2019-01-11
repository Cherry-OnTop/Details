const fs = require("fs");
const mongoose = require("mongoose");
const MovieSchema = require("../schema.js");
// const videos = require("./youtubeLinks.js");

var movieData = fs.readFileSync("./data.json");
// console.log(movieData);
var parsedMovieData = JSON.parse(movieData);
// console.log(parsedMovieData)

var count = 101;

var assignNewMovieID = function() {
  for (var i = 0; i < parsedMovieData.length; i++) {
    parsedMovieData[i]['_id'] = count;
    parsedMovieData[i]['MovieId'] = count.toString();
    count++;
  }
  console.log('count:', count);
}

//splice dataToEnterTheDB into chunks to insert into DB
var start = 1;
// var batchSize = 10000;
var end = 1000;

var storeBatch = () => {
  // dataToEnterTheDB = [];
  // generateData();
  assignNewMovieID();
  MovieSchema.collection.insertMany(parsedMovieData, {ordered: false}, (err, data) => {
    if (err) {
      console.log(err)
    } else if (start < end) {
      // console.log('start', start, 'end', end)
      console.log(parsedMovieData)
      start++;
      storeBatch();
    } else {
      console.timeEnd("dbinsert");
    }
  });
};

console.time("dbinsert");
storeBatch();

// in terminal, cd into DBinit
// run following command
// node seed.js to seed database