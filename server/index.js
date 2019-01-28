require("newrelic");
const express = require("express");
const compression = require("compression");
const path = require("path");
const redis = require("redis");
const redispassword = require("../redispassword.js").redispassword;

const client = redis.createClient({
  host: "18.221.137.55",
  port: 6379,
  password: redispassword
});

client.on("connect", function() {
  console.log("Redis client connected");
});

client.on("error", function(err) {
  console.log("Redis client failed to connect:", err);
});

const app = express();
const port = 9008;

const db = require("../db/index.js");
const getMovie = require("./helper.js");

app.use((req, res, next) => {
  // console.log(req);
  next();
});

app.use(express.static("./client/dist"));

app.use(compression());

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

//SERVER DATA
app.get("/movie/:number", (req, res) => {
  const params = req.params.number;
  client.get(params, (err, data) => {
    if (err) {
      console.log(err);
      res.send(500);
    } else if (!data) {
      getMovie(params, (err, movie) => {
        client.setex(params, 60, JSON.stringify(movie), (err, info) => {
          console.log(info);
        });
        if (err) {
          console.log(err);
          res.send(500);
        } else {
          console.log('sending from database')
          res.send(movie);
        }
      });
    } else {
      console.log('sending from redis')
      res.send(JSON.parse(data));
    }
  });
});

app.get("/loaderio-97e79fa4b6d42eb96364622a3db620f4", (req, res) => {
  res.send("loaderio-97e79fa4b6d42eb96364622a3db620f4");
});

app.listen(port, () => {
  console.log("listening on port: ", port);
});
