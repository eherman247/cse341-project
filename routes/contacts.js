const routes = require("express").Router();
const mongodb = require("../db/connect")


// async function getContacts(client){
//     contacts = await mongodb.getDb().db().collection('contacts').find();
//     client.db('cluster0')
// }

const contactsController = require('../controllers/test-connection.js');

routes.get('/', contactsController.getAll);

routes.get('/:id', contactsController.getSingle);

module.exports = routes;