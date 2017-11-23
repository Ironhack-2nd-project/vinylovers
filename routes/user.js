const express = require('express');
const User = require('../models/User');
const Vinyl = require('../models/Vinyl');
const multer = require('multer');
const upload = multer({ dest: './public/uploads/' });
const router = express.Router();

router.get('/edit', (req, res, next) => {
  res.render('users/update');
});

router.post('/edit',upload.single('imgUrl'), (req, res, next) => {

const userID = req.user;

  const updates = {
    username: req.body.username,
    email: req.body.email,
    imgUrl: `/uploads/${req.file.filename}`
  };

  User.findByIdAndUpdate(userID, updates, (err) => {
    if (err){ return next(err); }
    return res.redirect('/marketplace');
  });


});

module.exports = router;
