const fs = require("fs");

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
}

var start = 1;
var end = 1000;

let data = await JSON.parse(fs.readFileSync('./mock.json'));
await Movie.bulkCreate(data.map(movie) => {
  return {
    movieid: id++,
    title: movie.title,
    
  }
})