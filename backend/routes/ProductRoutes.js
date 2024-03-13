const express = require('express');
const router = express.Router();
const Product = require('../models/Product');

router.get('/', async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

//ADD new product
router.post('/', async (req, res) => {
    const product = new Product({
      name: req.body.name,
      description: req.body.description,
      price: req.body.price,
      imageUrl: req.body.imageUrl
    });
  
    try {
      const newProduct = await product.save();
      res.status(201).json(newProduct);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  });

  //GET product with id
  router.get('/:id', async (req, res) => {
    const productId = req.params.id;
  
    try {
      const product = await Product.findById(productId);

      if (!product) {
        return res.status(404).json({ message: 'Product not found' });
      }
  
      
      res.json(product);
    } catch (err) {
      
      console.error('Error fetching product:', err);
      res.status(500).json({ message: 'Internal server error' });
    }
  });


module.exports = router;
