var MongoClient = require('mongodb').MongoClient;
const MONGO_URI = 'mongodb://localhost/movie';
const client = new MongoClient(MONGO_URI);
const connection = client.connect();

const connect = connection;

module.exports = connection;