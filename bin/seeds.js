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
      imgUrl: 'https://images-na.ssl-images-amazon.com/images/I/61QEH5tSzbL._SS500.jpg',
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
// User 9 info , 2 vinyls
          const user9 = new User({
            username: 'Ana Jules',
            email: 'jules@gmail.com',
            password: encryptedPass,
            location: {
              "type": "Point",
              "coordinates": [
                -3.7687216,
                40.4213941
              ]
            },
            imgUrl: 'http://lorempixel.com/100/100/people'
          });

          const vinyl10 = new Vinyl({
            albumName: 'Mothership',
            artistName: 'Led Zeppelin',
            genre: 'Hard rock, Heavy metal',
            imgUrl: 'http://www.progarchives.com/progressive_rock_discography_covers/2705/cover_437726112010.jpg',
            description: 'Sealed ',
            location: {
              "type": "Point",
              "coordinates": [
                -3.7687216,
                40.4213941
              ]
            },
            price: 70
          });

          const vinyl11 = new Vinyl({
            albumName: 'Bird with Strings',
            artistName: 'Charlie Parker',
            genre: 'Jazz',
            imgUrl: 'https://img.discogs.com/cMsbPtn07_c8fcv5JpvW3ED6w78=/fit-in/600x600/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-7503301-1442833991-1208.jpeg.jpg',
            description: 'Original',
            location: {
              "type": "Point",
              "coordinates": [
                -3.7687216,
                40.4213941
              ]
            },
            price: 150
          });
          User.create(user9)
            .then(user => {
              vinyl10.owner = user._id;
              vinyl11.owner = user._id;
              Vinyl.create(vinyl10)
                .then(Vinyl.create(vinyl11)
                  .then(() => mongoose.connection.close()));
            })
            .catch(err => console.log(err));
// user 10
            const user10 = new User({
              username: 'Alberto',
              email: 'alberto@gmail.com',
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

            const vinyl12 = new Vinyl({
              albumName: 'Celebration Day',
              artistName: 'Led Zeppelin',
              genre: 'Hard Rock',
              imgUrl: 'https://i.pinimg.com/originals/02/b4/0f/02b40f6ee20f5614946a4ac99bf06c9c.jpg',
              description: 'used remastered 2012 edition',
              location: {
                "type": "Point",
                "coordinates": [
                  -2.6742772,
                  42.8464432
                ]
              },
              price: 30
            });

            User.create(user10)
              .then(user => {
                vinyl12.owner = user._id;
                Vinyl.create(vinyl12)
                  .then(() => mongoose.connection.close());
              })
              .catch(err => console.log(err));

              const user11 = new User({
                username: 'Jonny',
                email: 'jonny@gmail.com',
                password: encryptedPass,
                location: {
                  "type": "Point",
                  "coordinates": [
                    -3.7712832,
                    40.3912236
                  ]
                },
                imgUrl: 'http://lorempixel.com/100/100/people'
              });

              const vinyl13 = new Vinyl({
                albumName: 'Electric Warrior',
                artistName: 'T. Rex',
                genre: 'Glam Rock',
                imgUrl: 'https://img.discogs.com/9G528p6O6ncz-U_V49hyHl0Zjis=/fit-in/600x600/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-451183-1384080656-2600.jpeg.jpg',
                description: 'Original but used',
                location: {
                  "type": "Point",
                  "coordinates": [
                    -3.7712832,
                    40.3912236
                  ]
                },
                price: 120
              });

              User.create(user11)
                .then(user => {
                  vinyl13.owner = user._id;
                  Vinyl.create(vinyl13)
                    .then(() => mongoose.connection.close());
                })
                .catch(err => console.log(err));

                const user12 = new User({
                  username: 'Pepe',
                  email: 'pepe@gmail.com',
                  password: encryptedPass,
                  location: {
                    "type": "Point",
                    "coordinates": [
                      -3.7011569,
                      40.3938903
                    ]
                  },
                  imgUrl: 'http://lorempixel.com/100/100/people'
                });

                const vinyl14 = new Vinyl({
                  albumName: 'Hot Rocks 1964-1971',
                  artistName: 'The Rolling Stones',
                  genre: 'Rock',
                  imgUrl: 'https://is1-ssl.mzstatic.com/image/thumb/Music2/v4/72/a5/1f/72a51f8c-ec7a-a51d-0dbb-24c9086ad47c/UMG_cvrart_00018771895725_01_RGB72_1500x1500_13ABKIM00053.jpg/600x600bf.jpg',
                  description: 'Sealed, remastered',
                  location: {
                    "type": "Point",
                    "coordinates": [
                      -3.7011569,
                      40.3938903
                    ]
                  },
                  price: 50
                });

                User.create(user12)
                  .then(user => {
                    vinyl14.owner = user._id;
                    Vinyl.create(vinyl14)
                      .then(() => mongoose.connection.close());
                  })
                  .catch(err => console.log(err));

                  const user13 = new User({
                    username: 'Erne',
                    email: 'erne@gmail.com',
                    password: encryptedPass,
                    location: {
                      "type": "Point",
                      "coordinates": [
                        -5.6124107,
                        42.6036003
                      ]
                    },
                    imgUrl: 'http://lorempixel.com/100/100/people'
                  });

                  const vinyl15 = new Vinyl({
                    albumName: 'Hot Rocks 1964-1971',
                    artistName: 'Bob Marley and The Wailers',
                    genre: 'Reggea',
                    imgUrl: 'http://www.thepier.org/wp-content/uploads/2013/04/lp-bob-marley-catch-a-fire-180-gram-vinyl.jpg',
                    description: 'New',
                    location: {
                      "type": "Point",
                      "coordinates": [
                        -5.6124107,
                        42.6036003
                      ]
                    },
                    price: 20
                  });

                  User.create(user13)
                    .then(user => {
                      vinyl15.owner = user._id;
                      Vinyl.create(vinyl15)
                        .then(() => mongoose.connection.close());
                    })
                    .catch(err => console.log(err));
// user 14 to edit
                    const user14 = new User({
                      username: 'Victor',
                      email: 'victor@gmail.com',
                      password: encryptedPass,
                      location: {
                        "type": "Point",
                        "coordinates": [
                        -3.7905429,
                        40.4222524
                      ]
                      },
                      imgUrl: 'http://lorempixel.com/100/100/people'
                    });

                    const vinyl16 = new Vinyl({
                      albumName: 'London Calling',
                      artistName: 'The Clash',
                      genre: 'Reggea',
                      imgUrl: 'https://img.discogs.com/h68VySaLpts6mIomNT0rfpvLpIU=/fit-in/600x600/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-470912-1248752385.jpeg.jpg',
                      description: 'New',
                      location: {
                        "type": "Point",
                        "coordinates": [
                          -3.7905429,
                          40.4222524
                        ]
                      },
                      price: 45
                    });

                    const vinyl17 = new Vinyl({
                      albumName: 'Coexist',
                      artistName: 'The XX',
                      genre: 'Post-punk',
                      imgUrl: 'https://img.discogs.com/vF9lQezMFNWjjNgZn5nDXx3Bir4=/fit-in/600x600/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-3855300-1410560930-6190.jpeg.jpg',
                      description: 'New, remastered',
                      location: {
                        "type": "Point",
                        "coordinates": [
                          -3.7905429,
                          40.4222524
                        ]
                      },
                      price: 40
                    });

                    User.create(user14)
                      .then(user => {
                        vinyl16.owner = user._id;
                        vinyl17.owner = user._id;
                        Vinyl.create(vinyl16)
                          .then(Vinyl.create(vinyl17)
                            .then(() => mongoose.connection.close()));
                      })
                      .catch(err => console.log(err));
//user 15
                      const user15 = new User({
                        username: 'Camila',
                        email: 'cam@gmail.com',
                        password: encryptedPass,
                        location: {
                          "type": "Point",
                          "coordinates": [
                          -3.7832934,
                          40.4249366
                        ]
                        },
                        imgUrl: 'http://lorempixel.com/100/100/people'
                      });

                      const vinyl18 = new Vinyl({
                        albumName: 'Never Mind the Bollocks, Heres the Sex Pistols',
                        artistName: 'Sex Pistols',
                        genre: 'Punk rock',
                        imgUrl: 'https://ssli.ebayimg.com/images/g/EYIAAOSwPpZZ~0Zk/s-l640.jpg',
                        description: 'Limited Edition',
                        location: {
                          "type": "Point",
                          "coordinates": [
                            -3.7832934,
                            40.4249366
                          ]
                        },
                        price: 70
                      });

                      const vinyl19 = new Vinyl({
                        albumName: 'Cheap Thrills',
                        artistName: 'Big Brother and the Holding Company',
                        genre: 'Psychedelic rock',
                        imgUrl: 'http://cdn.shopify.com/s/files/1/0825/8349/products/Big_Brother_and_the_holding_company_cheap_thrills_vinyl_record_lpIMG_9724_grande.jpg?v=1472059954',
                        description: 'Used, original, good conditions ',
                        location: {
                          "type": "Point",
                          "coordinates": [
                            -3.7832934,
                            40.4249366
                          ]
                        },
                        price: 50
                      });

                      User.create(user15)
                        .then(user => {
                          vinyl18.owner = user._id;
                          vinyl19.owner = user._id;
                          Vinyl.create(vinyl18)
                            .then(Vinyl.create(vinyl19)
                              .then(() => mongoose.connection.close()));
                        })
                        .catch(err => console.log(err));
