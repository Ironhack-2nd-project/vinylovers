const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const VinylSchema = new Schema({
  albumName: {type: String, required: true},
  artistName:{type: String, required: true},
  genre: {type: String, required: true},
  description: {type: String, required: true},
  price: {type: Number, required: true},
  Owner: {type: Schema.Types.ObjectId, ref: 'User', required: true},
});

const Vinyl = mongoose.model('Vinyl', VinylSchema);

module.exports = Vinyl;
