const express = require('express');
const User = require('../models/User');
const Vinyl = require('../models/Vinyl')
const router = express.Router();
const multer = require('multer');
const upload = multer({ dest: './public/uploads/' });


router.get('/add', (req, res, next) => {
  res.render('vinyls/new');
});

router.post('/add', upload.single('imgUrl'),(req, res, next) => {
  console.log(req.user);
  let vinylinfo = {
    albumName: req.body.albumName,
    artistName: req.body.artistName,
    genre: req.body.genre,
    imgUrl: `/uploads/${req.file.filename}`,
    description: req.body.description,
    price: req.body.price,
    owner: req.user._id,
  };

  const newVinyl = new Vinyl(vinylinfo);

  newVinyl.save((err) => {
    if (err) {
      console.log(err);
      return res.redirect('/add');
    } else {
      console.log('vinyl added');
      return res.redirect('/marketplace');
    }
  });
});

module.exports = router;
