/*jshint esversion: 6 */
const mongoose = require('mongoose');
const bcrypt         = require('bcrypt');
const bcryptSalt     = 10;
const User = require('../models/User');
const Vinyl = require('../models/Vinyl');

mongoose.connect('mongodb://localhost/vinylovers', {useMongoClient: true});
var salt = bcrypt.genSaltSync(bcryptSalt);
const password = 'vinylovers';
var encryptedPass = bcrypt.hashSync(password, salt);

const user1 = new User({
  username: 'Darío',
  email: 'dario@gmail.com',
  password: encryptedPass,
  location: [39.4786079, -0.3221189],
  imgUrl: 'http://lorempixel.com/100/100/people'
});

const vinyl1 = new Vinyl({
  albumName: 'Rubber Soul',
  artistName: 'The Beatles',
  genre: 'Pop',
  imgUrl: 'https://is5-ssl.mzstatic.com/image/thumb/Music/5b/17/1b/mzi.gljnvqzc.tif/600x600bf.jpg',
  description: 'Sealed copy of remastered edition',
  price: 40
});

User.create(user1)
  .then(user => {
    vinyl1.owner = user._id;
    Vinyl.create(vinyl1)
    .then(() => mongoose.connection.close());
  })
  .catch(err => console.log(err));

const user2 = new User({
  username: 'Niko',
  email: 'niko@gmail.com',
  password: encryptedPass,
  location: [40.4027785,-3.75404],
  imgUrl: 'http://lorempixel.com/100/100/people'
});

const vinyl2 = new Vinyl({
  albumName: 'Sticky Fingers',
  artistName: 'The Rolling Stones',
  genre: 'Rock',
  imgUrl: 'https://img.discogs.com/opltRShfrbknHcmXbOLcf0rU3WU=/fit-in/600x600/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-451342-1265844984.jpeg.jpg',
  description: 'First edition',
  price: 90
});

const vinyl3 = new Vinyl({
  albumName: 'Blue & Lonesome',
  artistName: 'The Rolling Stones',
  genre: 'Rock',
  imgUrl: 'https://img.discogs.com/2Siq-Y4cvleNxC8eFTL9k63qUCE=/fit-in/600x598/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-9437886-1480592395-1641.jpeg.jpg',
  description: 'First edition',
  price: 100
});

User.create(user2)
  .then(user => {
    vinyl2.owner = user._id;
    vinyl3.owner = user._id;
    Vinyl.create(vinyl2)
      .then( Vinyl.create(vinyl3)
          .then(() => mongoose.connection.close()));
    })
.catch(err => console.log(err));

const user3 = new User({
  username: 'Yaiza',
  email: 'yaiza@gmail.com',
  password: encryptedPass,
  location: [41.3851341,2.1679939],
  imgUrl: 'http://lorempixel.com/100/100/people'
});

const vinyl4 = new Vinyl({
  albumName: 'Meddle',
  artistName: 'Pink Floyd',
  genre: 'Rock',
  imgUrl: 'https://img.discogs.com/TwWUUEhc7tKdHglqhRJurcY-NDc=/fit-in/600x600/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-4491548-1403429581-6990.jpeg.jpg',
  description: 'Worn copy of limited edition',
  price: 60
});

User.create(user3)
  .then(user => {
    vinyl4.owner = user._id;
    Vinyl.create(vinyl4)
    .then(() => mongoose.connection.close())
  })
  .catch(err => console.log(err));

const user4 = new User({
  username: 'Ana',
  email: 'ana@gmail.com',
  password: encryptedPass,
  location: [42.5997032,-5.5688593],
  imgUrl: 'http://lorempixel.com/100/100/people'
});

const vinyl5 = new Vinyl({
  albumName: 'Meddle',
  artistName: 'Pink Floyd',
  genre: 'Rock',
  imgUrl: 'https://img.discogs.com/TwWUUEhc7tKdHglqhRJurcY-NDc=/fit-in/600x600/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-4491548-1403429581-6990.jpeg.jpg',
  description: 'Sealed remastered 2010 edition',
  price: 35
});

User.create(user4)
  .then(user => {
    vinyl5.owner = user._id;
    Vinyl.create(vinyl5)
    .then(() => mongoose.connection.close());
  })
  .catch(err => console.log(err));
