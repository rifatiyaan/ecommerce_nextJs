import Link from 'next/link';
import React, { useState } from 'react';
import { FaTimes, FaMinusCircle } from 'react-icons/fa';

const CartDrawer = ({ isOpen, onClose, cartItems, onRemoveItem }) => {
  const [deletingItem, setDeletingItem] = useState(null);

  const handleRemoveItem = (index) => {
    setDeletingItem(index);

    // Wait for the animation to finish before removing the item
    setTimeout(() => {
      onRemoveItem(index);
      setDeletingItem(null);
    }, 300); // 300ms matches the duration of the CSS animation
  };

  const handleCheckout = () => {
    onClose(); // Close the cart drawer
  };

  return (
    <>
      {/* Background overlay for blur effect */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-[100]"
          onClick={onClose} // Closes the drawer when clicking outside of it
        ></div>
      )}

      {/* Cart Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-80 bg-white shadow-lg z-[200] transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="text-lg font-bold">Your Cart</h2>
          <FaTimes className="cursor-pointer" onClick={onClose} />
        </div>

        <div className="p-4 overflow-y-auto h-[calc(90%-8rem)]">
          {cartItems.length === 0 ? (
            <p className="text-gray-500">Your cart is empty.</p>
          ) : (
            cartItems.map((item, index) => (
              <div
                key={index}
                className={`flex justify-between items-center mb-4 transition-opacity duration-300 ${
                  deletingItem === index ? 'opacity-0' : 'opacity-100'
                }`}
              >
                <img src="a1.webp" alt={item.name} className="w-16 h-16 rounded" />
                <div className="flex-1 ml-4">
                  <h3 className="text-md font-semibold">{item.name}</h3>
                  <p className="text-sm text-gray-600">Qty: {item.quantity}</p>
                </div>
                <div className="text-right">
                  <p className="text-md font-semibold">${item.price.toFixed(2)}</p>
                </div>
                <FaMinusCircle
                  className="cursor-pointer text-red-500 ml-2"
                  onClick={() => handleRemoveItem(index)}
                />
              </div>
            ))
          )}
        </div>

        {cartItems.length > 0 && (
          <div className="p-4 border-t">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-bold">Total</h3>
              <p className="text-lg font-bold">
                $
                {cartItems
                  .reduce((total, item) => total + item.price * item.quantity, 0)
                  .toFixed(2)}
              </p>
            </div>
            <Link href="/cart" passHref>
              <button
                className="w-full bg-black text-white py-2 rounded mb-2"
                onClick={handleCheckout}
              >
                Go to Checkout
              </button>
            </Link>
          </div>
        )}
      </div>
    </>
  );
};

export default CartDrawer;
