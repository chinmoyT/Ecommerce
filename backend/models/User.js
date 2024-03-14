const mongoose = require('mongoose');
const Cart = require('./Cart')

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  cart: [{
    type: mongoose.Schema.Types.ObjectId,
    ref:'Cart'
}]
 });

module.exports = mongoose.model('User', userSchema);
