const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const VinylSchema = new Schema({
  albumName: {trype: String, required: true},
  artistName:{trype: String, required: true},
  genre: {trype: String, required: true},
  description: {trype: String, required: true},
  price: {trype: Number, required: true},
  Owner: {type: Schema.Types.ObjectId, ref: 'User', required: true},
});

const Vinyl = mongoose.model('Vinyl', VinylSchema);

module.exports = Vinyl;
