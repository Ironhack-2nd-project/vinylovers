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
  // console.log(`EL USUARIO LOGEADO: ${req.user}`);
  Vinyl.findById(theVinyl)
    .then(vinyl => {
      seller = vinyl.owner;
      vinylPrice = vinyl.price;
    console.log(`EL USUARIO LOGEADO TIENE: ${req.user.money} €`);
    console.log(`EL DUEÑO DEL VINILO DE LA COMPRA: ${seller}`);
      if (buyerMoneyBefore > vinylPrice) console.log(`EL USUARIO PUEDE COMPRAR EL DISCO, EL DISCO CUESTA ${vinylPrice}`);
        User.findById(seller, (err, user) => {
        sellerMoneyBefore = user.money;
      })
      .then(() => {
        console.log(`SELLER MONEY BEFORE: ${sellerMoneyBefore}`);
        if (buyerMoneyBefore >= vinylPrice) {
          console.log(`EL USUARIO PUEDE COMPRAR EL DISCO, EL DISCO CUESTA ${vinylPrice}`);
          buyerMoneyAfter = buyerMoneyBefore - vinylPrice;
          sellerMoneyAfter = sellerMoneyBefore + vinylPrice;
          console.log(`AHORA EL COMPRADOR DEBERÍA TENER ${buyerMoneyAfter}`);
          console.log(`AHORA EL VENDEDOR TIENE ${sellerMoneyAfter}`);
          //Remove vinyl from seller
          console.log(theVinyl);
          Vinyl.findByIdAndRemove(theVinyl)
            .then(() => {
              console.log('DISCO ELIMINADO, AHORA ACTUALIZAMOS EL DINERO');
              console.log(buyerMoneyAfter);
              User.findByIdAndUpdate(buyerId, {$set : {money : buyerMoneyAfter}}, { new: true })
              .then((userAfterBuying) => console.log(`EL USUARIO LOGEADO DESPUÉS DE LA COMPRA TIENE: ${userAfterBuying.money} €`));
              User.findByIdAndUpdate(seller, {$set : {money : sellerMoneyAfter}}, { new: true })
              .then((userAfterSelling) => console.log(`EL VENDEDOR DESPUÉS DE LA COMPRA TIENE: ${userAfterSelling.money} €`));
            })
            .then(res.redirect('/marketplace'));
        }
      });
      .catch ((error) => {
        throw error; 
      })
  });
});

module.exports = router;
