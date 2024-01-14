const routes = require("express").Router();
const testController = require("../controllers/test-connection.js"); 

routes.get('/', testController.erica);
routes.get('/athena', testController.athena);

module.exports = routes;