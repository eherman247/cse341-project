const express = require('express');
const bodyParser = require('body-parser');
const mongodb = require('./db/connect');

const app = express();
const port = 8080;

app
  .use(bodyParser.json())
  .use((req, res, next) =>{
    res.setHeader('Access-Control-Allow-Origin', '*')
    next();
  })
  .use('/', require('./routes/index'));

mongodb.initDb((err, mongodb) => {
  if(err) {
    console.log(err);
  }
  else{
    app.listen(port);
    console.log("connected");
  }
})
