const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  location:{ type: {type: String}, coordinates: [Number]},
  money: { type: Number, required: true, default: 200 },
  imgUrl: { type: String}
});

userSchema.set('timestamps', true);

const User = mongoose.model('User', userSchema);

module.exports = User;
