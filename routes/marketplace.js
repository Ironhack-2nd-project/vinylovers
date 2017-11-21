var express = require('express');
var router = express.Router();
const User = require('../models/User');
const Vinyl = require ('../models/Vinyl');


  router.get('/', function (req, res, next){
    Vinyl.find()
    .then (vinyls => {
      console.log(vinyls)
      res.render('marketplace', {vinyls})
    })
  });

module.exports = router;
