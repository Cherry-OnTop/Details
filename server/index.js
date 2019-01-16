const express = require('express');
const compression = require('compression');
const path = require('path');

const app = express();
const port = 9008;

const db = require('../db/index.js');
const getMovie = require('./helper.js');

app.use((req, res, next) => {
  // console.log(req);
  next();
});
app.use('/:movieId', express.static(path.join(__dirname, '../client/dist')));
app.use(compression());
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  next();
});

//SERVER DATA
app.get('/movie/:number', (req, res) => {
  const params = req.params.number;
  console.log(params);
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
