const mongoose = require('mongoose')
const Product = require('./Product')

const cartSchema = new mongoose.Schema({
    items: [{
        product: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Product'
        }
    }]
    , user: {
        type:mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }, 
    quantity: {
        type: Number
    }
})

module.exports = new mongoose.model('Cart', cartSchema);