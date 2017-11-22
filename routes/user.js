const express = require('express');
const User = require('../models/User');
const Vinyl = require('../models/Vinyl');
const multer = require('multer');
const upload = multer({ dest: './public/uploads/' });
const router = express.Router();

router.get('/edit', (req, res, next) => {
  res.render('/users/update')
});

// router.post('/edit',upload.single('imgUrl'), (req, res, next) => {
//   let update = {
//     username: req.body.username,
//     email: req.body.email,
//     password: req.body.password,
//     imgUrl: `/uploads/${req.file.filename}`,
//     location: req.body.location,
//   };
//
//
//
// });


module.exports = router;
