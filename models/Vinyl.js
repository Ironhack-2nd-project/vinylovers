const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const VinylSchema = new Schema({
  albumName: {type: String, required: true},
  artistName:{type: String, required: true},
  genre: {type: String, required: true},
  imgUrl: {type: String, required: true},
  description: {type: String, required: true},
  price: {type: Number, required: true},
  location: { type: {type: String}, coordinates: [Number]},
  owner: {type: Schema.Types.ObjectId, ref: 'User', required: true},
});

VinylSchema.index({location:'2dsphere'});
VinylSchema.set('timestamps', true);

const Vinyl = mongoose.model('Vinyl', VinylSchema);

module.exports = Vinyl;
