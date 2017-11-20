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
  name: 'Ana',
  email: 'ana@gmail.com',
  password: encryptedPass,
  location: '',
  imgUrl: 'http://lorempixel.com/200/200/'
});
const courses = [
  {
    name: 'Introduction to Ruby on Rails',
    startingDate: new Date('2017-03-01'),
    endDate: new Date('2017-04-01'),
    level: 'Beginner',
    available: true
  },
  {
    name: 'Ruby on Rails Advanced',
    startingDate: new Date('2017-02-01'),
    endDate: new Date('2017-03-27'),
    level: 'Advanced',
    available: true
  },
  {
    name: 'Angular 2',
    startingDate: new Date('2017-04-15'),
    endDate: new Date('2017-06-30'),
    level: 'Advanced',
    available: true
  },
  {
    name: 'MongoDB',
    startingDate: new Date('2017-04-04'),
    endDate: new Date('2017-05-04'),
    level: 'Advanced',
    available: true
  },
  {
    name: 'Express Introduction',
    startingDate: new Date('2017-03-01'),
    endDate: new Date('2017-04-01'),
    level: 'Beginner',
    available: true
  },
];

User.create(boss, (err, user) => {
  if (err) {
    throw err;
  }
  console.log(user);
});

Course.create(courses, (err, docs)=>{
  if (err) throw err;
    docs.forEach( (course) => {
      console.log(course.name);
    });
    mongoose.connection.close();
});
