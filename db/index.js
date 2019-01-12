const mongoose = require("mongoose");

const serverOptions = {
  socketTimeoutMS: 500000,
    connectTimeoutMS: 500000,
  useNewUrlParser: true
};

if (process.env.NODE_ENV === "production") {
  mongoose.connect(process.env.MONGOURI);
} else {
  var mongodbUri = "mongodb://localhost/movieData";
  mongoose.connect(
    mongodbUri,
    serverOptions
  );
}

const db = mongoose.connection;

db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => console.log("mongodb connection established"));

module.exports = db;
