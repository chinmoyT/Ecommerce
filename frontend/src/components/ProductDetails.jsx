import React, { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { CartContext } from '../context/cart';
import {toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1)
  // const cart = useContext(CartContext)
  // console.log(cart)

  useEffect(() => {  
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/products/${id}`);
        setProduct(response.data);
      } catch (error) {
        console.error('Error fetching product:', error);
      }
    };
    fetchProduct();
  }, [id]); 

  // const addToCart = ()=> {
  //   cart.setItems([...cart.items, {name:product.name, price:product.price, quantity}])
  //   toast.success('Added to cart successfully',{ autoClose: 1000 });
  //   setQuantity((prevQuantity)=> prevQuantity+1)
  // }

  const addItemsToCart = async ()=> {
    try{
      if(quantity < 1 || quantity==""){
        alert('Add quantity to proceed')
      }
      await axios.post('http://localhost:5000/api/cart/add', {product, quantity})
      toast.success('Added to cart successfully',{ autoClose: 1000 });
      console.log("Items added to cart successfullly")
    }
    catch(error){
      console.log('Error adding items to cart', )
    }
  }

  // const manageQuantity = (e)=> {
  //   setQuantity(parseInt(e.target.value))
  // }

  return (
    <div className="container mx-auto py-4">
      {product ? (
        <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden ">
          <div className="p-4 ">
            <img className='items-center' src={product.imageUrl} alt="ImageUrl" />
            <h2 className="text-2xl font-bold mb-2">{product.name}</h2>
            <p className="text-gray-600 mb-2">Description: {product.description}</p>
            <p className="text-gray-800 font-bold">Price: Rs {product.price}</p>
            <label htmlFor="quantity" className="block text-gray-700 font-bold mb-2">
              Quantity:
            </label>
            <input
              type="number"
              id="quantity"
              name="quantity"
              min="1"
              // value={quantity}
              onChange={(e)=> setQuantity(e.target.value)}
              className="w-full px-3 py-2 border rounded mb-3"
            />
            <button onClick={addItemsToCart} 
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">
              Add to Cart
            </button>
          </div>
        </div>
      ) : (
        <p>Loading</p>
      )}
    </div>
  );
};

export default ProductDetails;
