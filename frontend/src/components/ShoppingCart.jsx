import React, { useContext } from 'react';
import { CartContext } from '../context/cart';

const ShoppingCart = () => {
  const cart = useContext(CartContext);
  const total = cart.items.reduce((acc, item) => {
    return acc + item.price;
  }, 0);

  return (
    <div className="container mx-auto py-4">
      <h2 className="text-2xl font-bold mb-4">Shopping Cart</h2>
      {cart.items.length > 0 ? (
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Item
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Quantity
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Price
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {cart.items.map((item, index) => (
                <tr key={index}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-lg">{item.name}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-lg font-bold">
                    {item.quantity}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-lg font-bold">
                    Rs {item.price}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <p className="text-lg">Your cart is empty</p>
      )}
      <div className="flex justify-between items-center mt-4">
        <span className="text-xl font-bold">Total Amount:</span>
        <span className="text-xl font-bold">Rs {total}</span>
      </div>
    </div>
  );
};

export default ShoppingCart;
