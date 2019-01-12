const mongoose = require("mongoose");

const serverOptions = {
  socketTimeoutMS: 500000,
  connectTimeoutMS: 500000,
  useNewUrlParser: true,
  keepAlive: 300000,
  poolSize: 30,
  autoReconnect: true,
  reconnectTries: 30000
};

if (process.env.NODE_ENV === "production") {
  mongoose.connect(process.env.MONGOURI);
} else {
  var mongodbUri = "mongodb://localhost:27017/movieData?keepAlive=true&poolSize=30&autoReconnect=true&socketTimeoutMS=360000&connectTimeoutMS=360000";
  mongoose.connect(
    mongodbUri
  );
}

const db = mongoose.connection;

db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => console.log("mongodb connection established"));

module.exports = db;
