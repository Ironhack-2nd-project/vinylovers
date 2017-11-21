var express = require('express');
const User = require('../models/User');
const Vinyl = require ('../models/Vinyl')
var router = express.Router();


  router.get('/', function (req, res, next){
    Vinyl.find()
    .then (vinyls => {
      res.render('marketplace', {vinyls})
    })
  });

module.exports = router;
