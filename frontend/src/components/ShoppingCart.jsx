import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ShoppingCart = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const fetchCartItems = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/cart');
        setCartItems(response.data);
      } catch (error) {
        console.error('Error fetching cart items:', error);
      }
    };
    fetchCartItems();
  }, []);

  const handleRemoveItem = async (itemId) => {
    try {
      await axios.delete(`/api/cart/${itemId}`);
      setCartItems(cartItems.filter(item => item._id !== itemId));
    } catch (error) {
      console.error('Error removing item from cart:', error);
    }
  };

  const renderCartItems = () => {
    return cartItems.map(item => (
      <div key={item._id}>
        <p>{item.name}</p>
        <p>Quantity: {item.quantity}</p>
        <p>Price: Rs {item.price}</p>
        <button onClick={() => handleRemoveItem(item._id)}>Remove</button>
      </div>
    ));
  };

  return (
    <div>
      <h2>Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your shopping cart is empty</p>
      ) : (
        renderCartItems()
      )}
    </div>
  );
};

export default ShoppingCart;



