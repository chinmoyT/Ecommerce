const express = require('express');
const router = express.Router();
const Order = require('../models/Order');

// GET all orders
router.get('/', async (req, res) => {
  try {
    const orders = await Order.find();
    res.json(orders);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// GET order with id
router.get('/:id', getOrder, (req, res) => {
  res.json(res.order);
});

// Create new order
router.post('/', async (req, res) => {
  const order = new Order({
    user: req.body.user,
    products: req.body.products,
    totalPrice: req.body.totalPrice,
    status: req.body.status,
    shippingAddress: req.body.shippingAddress,
    paymentDetails: req.body.paymentDetails
  });

  try {
    const newOrder = await order.save();
    res.status(201).json(newOrder);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Update order
router.patch('/:id', getOrder, async (req, res) => {
  if (req.body.user != null) {
    res.order.user = req.body.user;
  }
  if (req.body.products != null) {
    res.order.products = req.body.products;
  }
  if (req.body.totalPrice != null) {
    res.order.totalPrice = req.body.totalPrice;
  }
  if (req.body.status != null) {
    res.order.status = req.body.status;
  }
  if (req.body.shippingAddress != null) {
    res.order.shippingAddress = req.body.shippingAddress;
  }
  if (req.body.paymentDetails != null) {
    res.order.paymentDetails = req.body.paymentDetails;
  }
  try {
    const updatedOrder = await res.order.save();
    res.json(updatedOrder);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Delete order
router.delete('/:id', getOrder, async (req, res) => {
  try {
    await res.order.remove();
    res.json({ message: 'Order deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

async function getOrder(req, res, next) {
  let order;
  try {
    order = await Order.findById(req.params.id);
    if (order == null) {
      return res.status(404).json({ message: 'Order not found' });
    }
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }

  res.order = order;
  next();
}

module.exports = router;
