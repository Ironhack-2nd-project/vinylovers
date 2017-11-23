const express = require('express');
const User = require('../models/User');
const Vinyl = require('../models/Vinyl');
const router = express.Router();
const multer = require('multer');
const upload = multer({
  dest: './public/uploads/'
});


router.get('/add', (req, res, next) => {
  res.render('vinyls/new');
});

router.post('/add', upload.single('imgUrl'),(req, res, next) => {
  let vinylinfo = {
    albumName: req.body.albumName,
    artistName: req.body.artistName,
    genre: req.body.genre,
    imgUrl: `/uploads/${req.file.filename}`,
    description: req.body.description,
    price: req.body.price,
    owner: req.user.id,
    location : {
        type: 'Point',
        coordinates: [req.body.longitude, req.body.latitude]
    }
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

router.get('/buy/:id', (req, res, next) => {
  let seller;
  let buyerId = req.user._id;
  let vinylPrice;
  let buyerMoneyBefore = req.user.money;
  let buyerMoneyAfter;
  let sellerMoneyBefore;
  let sellerMoneyAfter;
  let theVinyl = req.params.id;
  Vinyl.findById(theVinyl)
    .then(vinyl => {
      seller = vinyl.owner;
      vinylPrice = vinyl.price;
        User.findById(seller, (err, user) => {
        sellerMoneyBefore = user.money;
      })
      .then(() => {
        if (buyerMoneyBefore >= vinylPrice) {
          buyerMoneyAfter = buyerMoneyBefore - vinylPrice;
          sellerMoneyAfter = sellerMoneyBefore + vinylPrice;
          //Remove vinyl from seller
          Vinyl.findByIdAndRemove(theVinyl)
            .then(() => {
              User.findByIdAndUpdate(buyerId, {$set : {money : buyerMoneyAfter}}, { new: true })
              .then((userAfterBuying) => console.log(`EL USUARIO LOGEADO DESPUÉS DE LA COMPRA TIENE: ${userAfterBuying.money} €`));
              User.findByIdAndUpdate(seller, {$set : {money : sellerMoneyAfter}}, { new: true })
              .then((userAfterSelling) => console.log(`EL VENDEDOR DESPUÉS DE LA COMPRA TIENE: ${userAfterSelling.money} €`));
            })
            .then(res.redirect('/marketplace'));
        }
      });
      // .catch ((error) => {
      //   throw errtor;
      // })
  });
});

module.exports = router;
