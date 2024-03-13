const express = require('express')
const router = express.Router()
const Cart = require('../models/Cart')


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
router.post('/add', async(req, res)=> {
    // const cart = new Cart({
    //     name:req.body.name,
    //     price:req.body.price,
    //     quantity:req.body.quantity
    // })
    // try{
    //     const newCart = cart.save()
    //     res.status(201).json(newcart)
    // }
    // catch(error){
    //     res.status(500).json({message: error.message})
    // }
    try{
        const {itemId} = req.body
        const userId = req.user.userId
        
        const cart = await Cart.findOne({user: userId})

    }
    catch(error){
        res.status(500).json({message: 'Error adding items to cart'})
    }
})

module.exports = router;
