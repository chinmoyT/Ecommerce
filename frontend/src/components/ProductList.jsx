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
    <div className="container py-4 flex justify-center">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 lg:w-4/5 gap-5 w-2/3 md:w-2/3 ">
        {products.map(product => (
          <div key={product._id} className="flex p-4 rounded-lg shadow hover:bg-gray-100 space-x-7 border-r-4 border-b-4 border-gray-600">
            {/* image */}
            <div>
              <img src={product.imageUrl} alt={product.name} className='h-20' />
            </div>
            {/* contents */}
            <div>
            <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
            <p className="text-gray-800 font-bold">Rs {product.price}</p>
            <Link to={`/product/${product._id}`} className="text-blue-600 hover:underline">
              Show Details
            </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
