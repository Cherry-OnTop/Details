const express = require('express');
const app = express();
const port = 9002;

//TODO: set up webpack to make this work
app.use(express.static('./client/dist'));

app.listen(port, () => {
  console.log('listening on port: ', port);
});
