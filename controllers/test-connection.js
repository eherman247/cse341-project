// const erica = (req, res) => {
//     res.send("Erica Herman");
//   };

//   const athena = (req, res) => {
//     res.send("athena");
//   };

// module.exports = {
//     erica,
//     athena
// };

// const mongodb = require("../db/connect");

// const getData = async (req, res, next) =>{
//   const result = await mongodb.getDb().db().collection('user').find();
//   result.toArray().then((lists) => {
//     res.setHeader('Content-Type', 'application/json');
//     res.status(200).json(lists[0]);
//   });
// };

// module.exports = {getData};

const mongodb = require('../db/connect');
const ObjectId = require('mongodb').ObjectId;

const getAll = async (req, res, next) => {
  const result = await mongodb.getDb().db().collection('contacts').find();
  result.toArray().then((lists) => {
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(lists);
  });
};

const getSingle = async (req, res, next) => {
  const userId = new ObjectId(req.params.id);
  const result = await mongodb
    .getDb()
    .db()
    .collection('contacts')
    .find({ _id: userId });
  result.toArray().then((lists) => {
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(lists[0]);
  });
};

module.exports = { getAll, getSingle };