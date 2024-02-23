const mongoose = require('mongoose')
const mongoosePaginate = require('mongoose-paginate-v2');

const songSchema = new mongoose.Schema({
    title:String,
    artist:String,
    album:String,
    genre:String
});

songSchema.plugin(mongoosePaginate);
const Song = mongoose.model('songs',songSchema)

module.exports = Song;