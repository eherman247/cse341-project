const express = require('express');
const app = express();
const testController = require("./controllers/test-connection.js") 

app.get('/', testController.hello);
const port = 3000;

app.listen(process.env.PORT || port, () => {
  console.log('Web Server is listening at port ' + (process.env.PORT || port));
});
