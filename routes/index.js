const routes = require("express").Router();
const testController = require("../controllers/test-connection.js"); 

routes.use('/contacts', require('./contacts.js'));

module.exports = routes;