const mongoose = require('mongoose')

const cartSchema = new mongoose.Schema({
    name:[{
        type: String,
        required: true
    }],
    price: {
        type: Number,
        required: true
    },
    quantity:{
        type:Number,
        default: 1
    }
    , user: {
        type:mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
})

module.exports = new mongoose.model('Cart', cartSchema);