import React, { useState, useEffect } from 'react';
import {Link} from 'react-router-dom'
import axios from 'axios';

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/products');
        
        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="container mx-auto py-4 ">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {products.map(product => (
          <div key={product._id} className="border p-4 rounded shadow">
            <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
            <p className="text-gray-800 font-bold">Rs {product.price}</p>
            <Link to={`/product/${product._id}`} className="text-blue-600 hover:underline">
              Show Details
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
