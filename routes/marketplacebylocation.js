var express = require('express');
var router = express.Router();
const User = require('../models/User');
const Vinyl = require('../models/Vinyl');


router.get('/', function(req, res, next) {
  User.find({ location: { $near: {
            $geometry: { type: "Point", coordinates: [-3.698514, 40.392322199999995] },
            $minDistance: 1000,
            $maxDistance: 400000
          } } } )
    //Necesitamos el nombre del propietario del vinilo, no solo el id
    //.populate('owner')
    .then(vinyls => {
      console.log("PEOPLE", vinyls);
      res.render('marketplace', {
        vinyls: vinyls
      });
    });
});

module.exports = router;
