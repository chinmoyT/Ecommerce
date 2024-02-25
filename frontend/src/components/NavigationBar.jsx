import React from 'react';
import { Link } from 'react-router-dom';

const NavigationBar = () => {
  return (
    <nav className="bg-red-600 py-4">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <div className="flex-shrink-0">
            <Link to="/" className="text-white font-bold text-xl">ShopFx</Link>
          </div>
          <div className="flex">
            <Link to="/" className="text-white mx-4 hover:text-gray-300">Home</Link>
            <Link to="/cart" className="text-white mx-4 hover:text-gray-300">Cart</Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavigationBar;
