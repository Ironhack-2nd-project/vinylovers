var express = require('express');
var router = express.Router();
const User = require('../models/User');
const Vinyl = require('../models/Vinyl');


router.get('/', function(req, res, next) {
  Vinyl.find()
    //Necesitamos el nombre del propietario del vinilo, no solo el id
    .populate('owner')
    .then(vinyls => {
      // console.log('AAAAAAAAAA'+vinyls[0]);
      res.render('marketplace', {
        vinyls: vinyls
      });
    });
});

module.exports = router;
