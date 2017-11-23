var express = require('express');
var router = express.Router();
const User = require('../models/User');
const Vinyl = require('../models/Vinyl');


router.get('/', function(req, res, next) {
  Vinyl.find()
    //Necesitamos el nombre del propietario del vinilo, no solo el id
    .populate('owner')
    // .exec()
    .then(vinyls => {
      console.log(req.user);
      res.render('marketplace', {
        vinyls: vinyls,
        user: req.user
      });
    });
});

module.exports = router;
