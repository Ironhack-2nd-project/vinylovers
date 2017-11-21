var express = require('express');
const User = require('../models/User');
const Vinyl = require ('../models/Vinyl')
var router = express.Router();


  router.get('/', function (req, res, next){
    Vinyl.find()
    .then (vinyls => {
      console.log(vinyls)
      res.render('marketplace', {vinyls:vinyls})
    })
  });

module.exports = router;
