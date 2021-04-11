const mongoose = require('mongoose');

const countriesSchema = new mongoose.Schema({
  name: {
    type: String,
    unique: true
  },
  code: {
    type: String,
    maxlength: 2
  },
  flag: {
    type: String
  }
}, {
  timestamp: true
});


const Countries = mongoose.model('Countries', countriesSchema)

module.exports = Countries;
