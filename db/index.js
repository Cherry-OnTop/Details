const mongoose = require("mongoose");

const serverOptions = {
  socketTimeoutMS: 30000,
  connectTimeoutMS: 30000,
  useNewUrlParser: true,
  keepAlive: true,
  poolSize: 30,
  autoReconnect: true,
  reconnectTries: 30000
};

//change mongodbUri to "mongodb://127.0.0.1:27017/movieData" to connect to local database
//change mongodbUri to "mongodb://18.191.232.101:27017/movieData"; to connect to deployed mongodb on EC2
if (process.env.NODE_ENV === "production") {
  mongoose.connect(process.env.MONGOURI);
} else {
  var mongodbUri = "mongodb://3.17.32.68:27017/movieData";
  mongoose.connect(
    mongodbUri,
    serverOptions
  );
}

const db = mongoose.connection;

db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => console.log("mongodb connection established"));

module.exports = db;
