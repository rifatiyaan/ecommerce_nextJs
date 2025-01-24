import React from 'react';
import { FaTimes } from 'react-icons/fa';

const CartDrawer = ({ isOpen, onClose, cartItems }) => {
  return (
    <div
      className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg z-[102] transition-transform duration-300 transform ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      }`}
    >
      <div className="flex flex-col h-full">
        <div className="flex justify-between items-center p-4 border-b">
          <span className="text-xl font-semibold">Cart</span>
          <FaTimes className="cursor-pointer text-xl" onClick={onClose} />
        </div>
        <div className="flex flex-col p-4 space-y-2 overflow-y-auto">
          {cartItems.length > 0 ? (
            cartItems.map((item, index) => (
              <div key={index} className="flex items-center space-x-4">
                <img src={item.image} alt={item.name} className="w-12 h-12 object-cover" />
                <div className="flex-1">
                  <h3 className="text-sm font-medium">{item.name}</h3>
                  <p className="text-sm text-gray-600">Qty: {item.quantity}</p>
                  <p className="text-sm text-gray-600">${item.price.toFixed(2)}</p>
                </div>
              </div>
            ))
          ) : (
            <p>Your cart is empty</p>
          )}
        </div>
        <div className="p-4 border-t">
          <button className="w-full bg-black text-white py-2 rounded">
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartDrawer;
