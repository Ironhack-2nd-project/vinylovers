require('dotenv').config();

const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const bcryptSalt = 10;
const User = require('../models/User');
const Vinyl = require('../models/Vinyl');

mongoose.connect(process.env.DBURL, {
  useMongoClient: true
});
var salt = bcrypt.genSaltSync(bcryptSalt);
const password = 'vinylovers';
var encryptedPass = bcrypt.hashSync(password, salt);

const user1 = new User({
  username: 'Darío',
  email: 'dario@gmail.com',
  password: encryptedPass,
  location: {
    "type": "Point",
    "coordinates": [
      -0.3221189,
      39.4786079
    ]
  },
  imgUrl: 'http://lorempixel.com/100/100/people'
});

const vinyl1 = new Vinyl({
  albumName: 'Rubber Soul',
  artistName: 'The Beatles',
  genre: 'Pop',
  imgUrl: 'https://is5-ssl.mzstatic.com/image/thumb/Music/5b/17/1b/mzi.gljnvqzc.tif/600x600bf.jpg',
  description: 'Sealed copy of remastered edition',
  location: {
    "type": "Point",
    "coordinates": [
      -0.3221189,
      39.4786079
    ]
  },
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
  location: {
    "type": "Point",
    "coordinates": [
      -3.75404,
      40.4027785
    ]
  },

  imgUrl: 'http://lorempixel.com/100/100/people'
});

const vinyl2 = new Vinyl({
  albumName: 'Sticky Fingers',
  artistName: 'The Rolling Stones',
  genre: 'Rock',
  imgUrl: 'https://img.discogs.com/opltRShfrbknHcmXbOLcf0rU3WU=/fit-in/600x600/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-451342-1265844984.jpeg.jpg',
  description: 'First edition',
  location: {
    "type": "Point",
    "coordinates": [
      -3.75404,
      40.4027785
    ]
  },
  price: 90
});

const vinyl3 = new Vinyl({
  albumName: 'Blue & Lonesome',
  artistName: 'The Rolling Stones',
  genre: 'Rock',
  imgUrl: 'https://img.discogs.com/2Siq-Y4cvleNxC8eFTL9k63qUCE=/fit-in/600x598/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-9437886-1480592395-1641.jpeg.jpg',
  description: 'First edition',
  location: {
    "type": "Point",
    "coordinates": [
      -3.75404,
      40.4027785
    ]
  },
  price: 100
});

User.create(user2)
  .then(user => {
    vinyl2.owner = user._id;
    vinyl3.owner = user._id;
    Vinyl.create(vinyl2)
      .then(Vinyl.create(vinyl3)
        .then(() => mongoose.connection.close()));
  })
  .catch(err => console.log(err));

const user3 = new User({
  username: 'Yaiza',
  email: 'yaiza@gmail.com',
  password: encryptedPass,
  location: {
    "type": "Point",
    "coordinates": [
      2.1679939,
      41.3851341
    ]
  },
  imgUrl: 'http://lorempixel.com/100/100/people'
});

const vinyl4 = new Vinyl({
  albumName: 'Meddle',
  artistName: 'Pink Floyd',
  genre: 'Rock',
  imgUrl: 'https://img.discogs.com/TwWUUEhc7tKdHglqhRJurcY-NDc=/fit-in/600x600/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-4491548-1403429581-6990.jpeg.jpg',
  description: 'Worn copy of limited edition',
  location: {
    "type": "Point",
    "coordinates": [
      2.1679939,
      41.3851341
    ]
  },
  price: 60
});

User.create(user3)
  .then(user => {
    vinyl4.owner = user._id;
    Vinyl.create(vinyl4)
      .then(() => mongoose.connection.close());
  })
  .catch(err => console.log(err));

const user4 = new User({
  username: 'Ana',
  email: 'ana@gmail.com',
  password: encryptedPass,
  location: {
    "type": "Point",
    "coordinates": [
      -5.5688593,
      42.5997032
    ]
  },
  imgUrl: 'http://lorempixel.com/100/100/people'
});

const vinyl5 = new Vinyl({
  albumName: 'Meddle',
  artistName: 'Pink Floyd',
  genre: 'Rock',
  imgUrl: 'https://img.discogs.com/TwWUUEhc7tKdHglqhRJurcY-NDc=/fit-in/600x600/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-4491548-1403429581-6990.jpeg.jpg',
  description: 'Sealed remastered 2010 edition',
  location: {
    "type": "Point",
    "coordinates": [
      -5.5688593,
      42.5997032
    ]
  },
  price: 35
});

User.create(user4)
  .then(user => {
    vinyl5.owner = user._id;
    Vinyl.create(vinyl5)
      .then(() => mongoose.connection.close());
  })
  .catch(err => console.log(err));

  const user5 = new User({
    username: 'Igna',
    email: 'igna@gmail.com',
    password: encryptedPass,
    location: {
      "type": "Point",
      "coordinates": [
        -3.6250898,
        40.4398256
      ]
    },
    imgUrl: 'http://lorempixel.com/100/100/people'
  });

  const vinyl6 = new Vinyl({
    albumName: 'Speaking in Tongues',
    artistName: 'Talking Heads',
    genre: 'Electronic Rock',
    imgUrl: 'https://img.discogs.com/pKm5mGrvSjx5yCQjTswpWJwEL_8=/fit-in/600x603/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-2627660-1430943583-6611.jpeg.jpg',
    description: 'Sealed',
    location: {
      "type": "Point",
      "coordinates": [
        -3.6250898,
        40.4398256
      ]
    },
    price: 50
  });

  User.create(user5)
    .then(user => {
      vinyl6.owner = user._id;
      Vinyl.create(vinyl6)
        .then(() => mongoose.connection.close());
    })
    .catch(err => console.log(err));

    const user6 = new User({
      username: 'Juan',
      email: 'juan@gmail.com',
      password: encryptedPass,
      location: {
        "type": "Point",
        "coordinates": [
          -2.6742772,
          42.8464432
        ]
      },
      imgUrl: 'http://lorempixel.com/100/100/people'
    });

    const vinyl7 = new Vinyl({
      albumName: 'Sgt. Peppers Lonely Hearts Club Band',
      artistName: 'The Beatles',
      genre: 'Rock, Pop',
      imgUrl: 'https://img.discogs.com/pKm5mGrvSjx5yCQjTswpWJwEL_8=/fit-in/600x603/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-2627660-1430943583-6611.jpeg.jpg',
      description: 'Limited edition, used',
      location: {
        "type": "Point",
        "coordinates": [
          -2.6742772,
          42.8464432
        ]
      },
      price: 100
    });

    User.create(user6)
      .then(user => {
        vinyl7.owner = user._id;
        Vinyl.create(vinyl7)
          .then(() => mongoose.connection.close());
      })
      .catch(err => console.log(err));

      const user7 = new User({
        username: 'Juan',
        email: 'juan@gmail.com',
        password: encryptedPass,
        location: {
          "type": "Point",
          "coordinates": [
            -2.6742772,
            42.8464432
          ]
        },
        imgUrl: 'http://lorempixel.com/100/100/people'
      });

      const vinyl8 = new Vinyl({
        albumName: 'Currents',
        artistName: 'Tame Impala',
        genre: 'Psychedelic pop',
        imgUrl: 'https://i.scdn.co/image/c253c1f0eaf702620d45c1c7041d1ba161859b33',
        description: 'Sealed remastered 2012 edition',
        location: {
          "type": "Point",
          "coordinates": [
            -2.6742772,
            42.8464432
          ]
        },
        price: 50
      });

      User.create(user7)
        .then(user => {
          vinyl8.owner = user._id;
          Vinyl.create(vinyl8)
            .then(() => mongoose.connection.close());
        })
        .catch(err => console.log(err));

        const user8 = new User({
          username: 'Lucas',
          email: 'lucas@gmail.com',
          password: encryptedPass,
          location: {
            "type": "Point",
            "coordinates": [
              -3.6911267,
              42.8464432
            ]
          },
          imgUrl: 'http://lorempixel.com/100/100/people'
        });

        const vinyl9 = new Vinyl({
          albumName: 'Unknown Pleasures',
          artistName: 'Joy Division',
          genre: 'Post-punk',
          imgUrl: 'https://consequenceofsound.files.wordpress.com/2012/07/unknownpleasures.jpeg',
          description: 'Sealed remastered 2000 edition',
          location: {
            "type": "Point",
            "coordinates": [
              -3.6911267,
              42.8464432
            ]
          },
          price: 65
        });

        User.create(user8)
          .then(user => {
            vinyl9.owner = user._id;
            Vinyl.create(vinyl9)
              .then(() => mongoose.connection.close());
          })
          .catch(err => console.log(err));
