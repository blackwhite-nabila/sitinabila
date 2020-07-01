var express = require('express');
var router = express.Router();

const users = require('../models/users.model.js');

const mongoose = require('mongoose');
const url = 'mongodb://localhost:27017/sitinabila';
const dbName = 'sitinabila';

/* GET users listing. */
router.get('/', function(req, res, next) {
  mongoose.connect(url,{
    useUnifiedTopology : true
  }).then( client => {
    return users.find()
  }).then( users => {
    res.send(users);
  }).catch(error => {
    res.send({
      code: 500,
      message: error.message
    });
  });
});

/* GET users by account number. */
router.route('/')
.get( function(req, res, next) {
  mongoose.connect(url,{
    useUnifiedTopology : true
  }).then( client => {
    return users.find({ "accountNumber" : req.query.accNum}).exec();
  }).then( users => {
    res.send(users);
  }).catch(error => {
    res.send({
      code: 500,
      message: error.message
    });
  });
});

/* POST new user. */
router.post('/', function(req, res, next) {
  mongoose.connect(url,{
    useUnifiedTopology : true
  }).then( client => {
    const user = new users({
      userName: req.body.userName || "New User", 
      emailAddress: req.body.emailAddress,
      accountNumber: req.body.accountNumber,
      identityNumber: req.body.identityNumber
    });
  user.save()
  }).then( users => {
    res.send(users);
  }).catch(error => {
    res.send({
      code: 500,
      message: error.message
    });
  });
});

router.get('/test', function(req, res, next) {
  res.send( req.query.accNum);
});



module.exports = router;
