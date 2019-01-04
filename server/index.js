const express = require('express');
const db = require('../db/index.js');
const getMovie = require('./helper.js');
const app = express();
const port = 9002;

app.use(express.static('./client/dist'));
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
