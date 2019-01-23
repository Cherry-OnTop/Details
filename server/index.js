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

// '/:movieId', 

// app.use(express.static(path.join(__dirname, '../client/dist')));
app.use(express.static('./client/dist'));

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
  // console.log(params);
  getMovie(params, (err, movie) => {
    if (err) {
      console.log(err);
      res.send(500);
    } else {
      console.log(movie);
      res.send(movie);
    }
  });
});

app.get('/loaderio-ee1b25cf6c3d5dfd2282eb091ffad938', (req, res) => {
  res.send('loaderio-ee1b25cf6c3d5dfd2282eb091ffad938');
})

app.listen(port, () => {
  console.log('listening on port: ', port);
});
