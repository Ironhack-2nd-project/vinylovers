var express = require('express');
var router = express.Router();
const User = require('../models/User');
const Vinyl = require('../models/Vinyl');

router.get('/', function(req, res, next) {
  const distance = 20000;
  Vinyl.find({ location: { $near: {
            $geometry: { type: "Point", coordinates: [-3.698514, 40.392322199999995] },
            $minDistance: 0,
            $maxDistance: distance
          } } } )
    //Necesitamos el nombre del propietario del vinilo, no solo el id
    .populate('owner')
    .then(vinyls => {
      console.log("Vinyls filtered", vinyls);
      console.log("Owner", vinyls.owner);
      res.render('marketplace', {
        vinyls: vinyls,
        maxDistance : distance/1000
      });
    });
});

router.post('/', function(req, res, next) {
    const distance = req.body.rangevalue;
  Vinyl.find({ location: { $near: {
            $geometry: { type: "Point", coordinates: [-3.698514, 40.392322199999995] },
            $minDistance: 0,
            $maxDistance: distance*1000
          } } } )
    //Necesitamos el nombre del propietario del vinilo, no solo el id
    .populate('owner')
    .then(vinyls => {
      console.log("Vinyls filtered", vinyls);
      res.render('marketplace', {
        vinyls: vinyls,
        maxDistance : distance
      });
    });
});
module.exports = router;
// OLD ROUTER WITH NO LOCATION
// router.get('/', function(req, res, next) {
//   Vinyl.find()
//     //Necesitamos el nombre del propietario del vinilo, no solo el id
//     .populate('owner')
//     // .exec()
//     .then(vinyls => {
//       console.log(req.user);
//       res.render('marketplace', {
//         vinyls: vinyls,
//         user: req.user
//       });
//     });
// });
