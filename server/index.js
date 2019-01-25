const express = require('express');
const compression = require('compression');
const path = require('path');
const redis = require('redis');

const client = redis.createClient({host: '18.221.137.55', port: 6379});

client.on('connect', function() {
  console.log('Redis client connected');
});

client.on('error', function(err) {
  console.log('Redis client failed to connect:', err)
})

client.set('my test key', 'my test value', redis.print);
client.get('my test key', function (error, result) {
    if (error) {
        console.log(error);
        throw error;
    }
    console.log('GET result ->' + result);
});

const app = express();
const port = 9008;

const db = require('../db/index.js');
const getMovie = require('./helper.js');

app.use((req, res, next) => {
  // console.log(req);
  next();
});

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
  client.get(params, (err, data) => {
    if(!data) {
      getMovie(params, (err, movie) => {
        client.setex(params, 60, JSON.stringify(movie), (err, info) => {
          console.log(info);
        })
        if (err) {
          console.log(err);
          res.send(500);
        } else {
          console.log(movie);
          res.send(movie);
        }
      });
    } else {
      res.send(JSON.parse(data));
    }
  })
  
});

app.get('/loaderio-ee1b25cf6c3d5dfd2282eb091ffad938', (req, res) => {
  res.send('loaderio-ee1b25cf6c3d5dfd2282eb091ffad938');
})

app.listen(port, () => {
  console.log('listening on port: ', port);
});