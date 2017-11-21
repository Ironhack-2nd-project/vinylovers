var express = require('express');
const User = require('../models/User');
const Vinyl = require ('../models/Vinyl')
var router = express.Router();

//router.get('vinyl/add')

router.post('/add') (req, res, next) => {

  let vinylinfo = {
    albumName: req.body.albumName,
    artistName:req.body.artistName,
    genre: req.body.genre,
    imgUrl: req.body.imgUrl,
    description: req.body.description,
    price: req.body.price,
    owner: req.body.owner,
  };

  const newVinyl = new Vinyl (vinylinfo);

  newViny.save( (err) => {
    if (err) {
      console.log(err);
      return res.redirect('/add');
    } else {
      console.log('vinyl added');
      return res.redirect('/marketplace');
    }
  });
});

module.export = router;
