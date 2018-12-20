const express = require('express');
const db = require('../db/index.js');
const getMovie = require('./helper.js');
const app = express();
const port = 9002;

//TODO: set up webpack to make this work
app.use(express.static('./client/dist'));

app.get('/movie/:number', (req, res) => {
  const params = req.params.number.slice(1);
  getMovie(params, (err, movie) => {
    if (err) {
      console.log(err);
      res.send(500);
    } else {
      res.send(movie);
    }
  });
});

app.listen(port, () => {
  console.log('listening on port: ', port);
});
