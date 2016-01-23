var mongoose = require('mongoose')

var PhoneSchema = new mongoose.Schma({
  name: String,
  url: String,
  description: String,
  price: Number,
  ship: String
})


