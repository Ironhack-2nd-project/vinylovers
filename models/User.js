const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  location: [Number],
  money: { type: Number, required: true, default: 200 },
  imgUrl: { type: String, default: "http://lorempixel.com/100/100/people" }
});

userSchema.set('timestamps', true);

const User = mongoose.model('User', userSchema);

module.exports = User;
