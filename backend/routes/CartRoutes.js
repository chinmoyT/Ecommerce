const express = require('express')
const router = express.Router()
const Cart = require('../models/Cart')
const Product = require('../models/Product')

//get all cart items
router.get('/', async (req, res)=> {
    try{
        const cart = Cart.find();
        res.status(201).json(cart)
    }
    catch(error){
        res.status(500).json({message:'Error fetching cart'})
    }
})

//add new item to card
// router.post('/add', async(req, res)=> {
//     // const cart = new Cart({
//     //     name:req.body.name,
//     //     price:req.body.price,
//     //     quantity:req.body.quantity
//     // })
//     // try{
//     //     const newCart = cart.save()
//     //     res.status(201).json(newcart)
//     // }
//     // catch(error){
//     //     res.status(500).json({message: error.message})
//     // }
//     try{
//         const {itemId} = req.body
//         const userId = req.user.userId
        
//         const cart = await Cart.findOne({user: userId})

//     }
//     catch(error){
//         res.status(500).json({message: 'Error adding items to cart'})
//     }
// })

//add items to cart
router.post('/add', async (req, res)=> {
    const {productId, quantity, userId} = req.body
    const product = await Product.findById(productId);
    if(!product){
        return res.status(404).json({error: 'Product not found'})
    }

})

module.exports = router;
