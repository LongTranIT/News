const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const News = new Schema({
    title: { type: String, maxLength: 255, },
    text: { type: String },
    tags: Array,
    catelogy:String,
    image: String,
    slug: String,
});

module.exports = mongoose.model('News', News);