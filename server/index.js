const express = require('express');
const cors = require('cors');
const db = require('../db/index.js');
const getMovie = require('./helper.js');
const app = express();
const port = 9002;

//app.use(express.static('./client/dist'));

//SERVE FILES
app.get('/', cors(), (req, res) => {
  res.sendFile(
    '/Users/tmunayyer/Desktop/Themyscira/Details/client/dist/bundle.js'
  );
});

app.get('/client/dist/styles/app.css', cors(), (req, res) => {
  res.sendFile(
    '/Users/tmunayyer/Desktop/Themyscira/Details/client/dist/styles/app.css'
  );
});

//SERVER DATA
app.get('/movie/:number', cors(), (req, res) => {
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
