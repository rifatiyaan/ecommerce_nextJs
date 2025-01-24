import { useState } from 'react';
import QuantityBox from './QuantityBox'; // Adjust the path as needed

const CartComponent = () => {
  const [shippingMethod, setShippingMethod] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('');
  const [useDifferentBilling, setUseDifferentBilling] = useState(false);

  // Dummy cart items for illustration
  const [cartItems, setCartItems] = useState([
    { id: 1, name: 'My demo product number 1', size: 'M', price: 10, quantity: 2, thumbnail: '/path/to/image1.jpg' },
    { id: 2, name: 'Product 2', size: 'L', price: 15, quantity: 1, thumbnail: '/path/to/image2.jpg' }
  ]);

  const handleQuantityChange = (id, newQuantity) => {
    setCartItems(items =>
      items.map(item =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const shipping = 5; // Example fixed shipping cost
  const estimatedTaxes = subtotal * 0.1; // Example tax rate
  const total = subtotal + shipping + estimatedTaxes;

  return (
    <div className="flex flex-col md:flex-row h-fit  mt-[3rem] font-thin">
      {/* Left Side: Contact, Delivery, Shipping Method, Payment, Billing Address */}
      <div className="w-full md:w-[45%] p-6 overflow-auto scrollbar-hidden mb-10">
        <h1 className="text-2xl font-bold mb-6">Checkout</h1>

        {/* Contact Section */}
        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Contact Information</h2>
          <input type="text" placeholder="Name" className="w-full p-2 border border-gray-300 rounded mb-2" aria-label="Name" />
          <input type="text" placeholder="Mobile Number" className="w-full p-2 border border-gray-300 rounded" aria-label="Mobile Number" />
        </div>

        {/* Delivery Section */}
        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Delivery Address</h2>
          <input type="text" placeholder="City" className="w-full p-2 border border-gray-300 rounded mb-2" aria-label="City" />
          <input type="text" placeholder="Address" className="w-full p-2 border border-gray-300 rounded" aria-label="Address" />
        </div>

        {/* Shipping Method Section */}
        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Shipping Method</h2>
          <div className="flex flex-col space-y-2">
            <label className={`flex items-center p-2 border rounded cursor-pointer transition-transform duration-300 ${shippingMethod === 'online' ? 'border-blue-500 bg-blue-100' : 'border-gray-300'}`} onClick={() => setShippingMethod('online')}>
              <input type="radio" id="online" name="shipping_method" className="hidden" checked={shippingMethod === 'online'} onChange={() => setShippingMethod('online')} />
              <span className="ml-2">Online Payment</span>
            </label>
            <label className={`flex items-center p-2 border rounded cursor-pointer transition-transform duration-300 ${shippingMethod === 'cash_on_delivery' ? 'border-blue-500 bg-blue-100' : 'border-gray-300'}`} onClick={() => setShippingMethod('cash_on_delivery')}>
              <input type="radio" id="cash_on_delivery" name="shipping_method" className="hidden" checked={shippingMethod === 'cash_on_delivery'} onChange={() => setShippingMethod('cash_on_delivery')} />
              <span className="ml-2">Cash on Delivery</span>
            </label>
          </div>
        </div>

        {/* Conditional Section: Payment Options */}
        <div className={`transition-opacity duration-300 ${shippingMethod === 'online' ? 'opacity-100' : 'opacity-0'}`}>
          {shippingMethod === 'online' && (
            <div className="mb-6">
              <h2 className="text-xl font-semibold mb-2">Payment Options</h2>
              <div className="flex flex-col space-y-2">
                <label className={`flex items-center p-2 border rounded cursor-pointer transition-transform duration-300 ${paymentMethod === 'sslcommerz' ? 'border-blue-500 bg-blue-100' : 'border-gray-300'}`} onClick={() => setPaymentMethod('sslcommerz')}>
                  <input type="radio" id="sslcommerz" name="payment_method" className="hidden" checked={paymentMethod === 'sslcommerz'} onChange={() => setPaymentMethod('sslcommerz')} />
                  <span className="ml-2">SSLCOMMERZE</span>
                </label>
                <label className={`flex items-center p-2 border rounded cursor-pointer transition-transform duration-300 ${paymentMethod === 'bkash' ? 'border-blue-500 bg-blue-100' : 'border-gray-300'}`} onClick={() => setPaymentMethod('bkash')}>
                  <input type="radio" id="bkash" name="payment_method" className="hidden" checked={paymentMethod === 'bkash'} onChange={() => setPaymentMethod('bkash')} />
                  <span className="ml-2">bKash</span>
                </label>
              </div>
            </div>
          )}
        </div>

        {/* Conditional Section: COD Location */}
        <div className={`transition-opacity duration-300 ${shippingMethod === 'cash_on_delivery' ? 'opacity-100' : 'opacity-0'}`}>
          {shippingMethod === 'cash_on_delivery' && (
            <div className="mb-6">
              <h2 className="text-xl font-semibold mb-2">COD Location</h2>
              <div className="flex flex-col space-y-2">
                <label className={`flex items-center p-2 border rounded cursor-pointer transition-transform duration-300 ${paymentMethod === 'inside_dhaka' ? 'border-blue-500 bg-blue-100' : 'border-gray-300'}`} onClick={() => setPaymentMethod('inside_dhaka')}>
                  <input type="radio" id="inside_dhaka" name="cod_location" className="hidden" />
                  <span className="ml-2">Inside Dhaka</span>
                </label>
                <label className={`flex items-center p-2 border rounded cursor-pointer transition-transform duration-300 ${paymentMethod === 'outside_dhaka' ? 'border-blue-500 bg-blue-100' : 'border-gray-300'}`} onClick={() => setPaymentMethod('outside_dhaka')}>
                  <input type="radio" id="outside_dhaka" name="cod_location" className="hidden" />
                  <span className="ml-2">Outside Dhaka</span>
                </label>
              </div>
            </div>
          )}
        </div>

        {/* Billing Address Section */}
        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Billing Address</h2>
          <div className="flex flex-col space-y-2">
            <label className={`flex items-center p-2 border rounded cursor-pointer transition-transform duration-300 ${!useDifferentBilling ? 'border-blue-500 bg-blue-100' : 'border-gray-300'}`} onClick={() => setUseDifferentBilling(false)}>
              <input type="radio" id="same_as_shipping" name="billing_address" className="hidden" checked={!useDifferentBilling} onChange={() => setUseDifferentBilling(false)} />
              <span className="ml-2">Same as Shipping Address</span>
            </label>
            <label className={`flex items-center p-2 border rounded cursor-pointer transition-transform duration-300 ${useDifferentBilling ? 'border-blue-500 bg-blue-100' : 'border-gray-300'}`} onClick={() => setUseDifferentBilling(true)}>
              <input type="radio" id="different_address" name="billing_address" className="hidden" checked={useDifferentBilling} onChange={() => setUseDifferentBilling(true)} />
              <span className="ml-2">Use a Different Billing Address</span>
            </label>
          </div>

          {/* Conditional Billing Address Input */}
          <div className={`transition-opacity duration-300 ${useDifferentBilling ? 'opacity-100' : 'opacity-0'}`}>
            {useDifferentBilling && (
              <input type="text" placeholder="Billing Address" className="w-full p-2 border border-gray-300 rounded mt-4" aria-label="Billing Address" />
            )}
          </div>
        </div>

        {/* Complete Order Button */}
        <button className="bg-black text-white py-2 px-4 rounded w-full">Complete Order</button>
      </div>

      {/* Right Side: Cart Items */}
      <div className="w-full md:w-[55%] bg-gray-100 p-4 md:p-6 ">
        <h2 className="text-xl md:text-2xl font-bold mb-4 md:mb-6">Your Cart</h2>
        <div className="space-y-4 p-4 rounded">
          {cartItems.map(item => (
            <div key={item.id} className="flex flex-col md:flex-row items-start md:items-center bg-white p-4 border border-gray-300 rounded">
              {/* Image */}
              <div className='mb-4 md:mb-0'>
                <img src='a1.webp' alt={item.name} className="w-full md:w-32 md:h-32 object-contain" />
              </div>
              {/* Details */}
              <div className="flex flex-col flex-1 gap-2 mb-4 md:mb-0">
                <h3 className="text-base md:text-lg font-semibold">{item.name}</h3>
                <p className="text-xs md:text-sm text-gray-600">Size: {item.size}</p>
                <p className="text-xs md:text-sm text-gray-600">Price: ${item.price.toFixed(2)}</p>
              </div>
              {/* Quantity and Price */}
              <div className="flex flex-col md:flex-row items-center">
                <div className="flex flex-1 items-center mb-2 md:mb-0">
                  <QuantityBox
                    quantity={item.quantity}
                    onQuantityChange={(newQuantity) => handleQuantityChange(item.id, newQuantity)}
                  />
                </div>
                <div className="w-full md:w-32 text-right">
                  <p className="text-base md:text-lg font-semibold">${(item.price * item.quantity).toFixed(2)}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Cart Summary */}
        <div className="mt-4 md:mt-6 bg-white font-thin p-4 border border-gray-300 rounded">
          <h2 className="text-lg md:text-xl font-semibold mb-4 md:mb-6 border-b-2 md:border-b-1 border-gray-600">Cart Summary</h2>
          <div className="flex flex-col md:flex-row justify-between mb-2">
            <span className="text-sm md:text-base">Subtotal:</span>
            <span className="text-sm md:text-base">${subtotal.toFixed(2)}</span>
          </div>
          <div className="flex flex-col md:flex-row justify-between mb-2">
            <span className="text-sm md:text-base">Shipping:</span>
            <span className="text-sm md:text-base">${shipping.toFixed(2)}</span>
          </div>
          <div className="flex flex-col md:flex-row justify-between mb-2">
            <span className="text-sm md:text-base">Estimated Taxes:</span>
            <span className="text-sm md:text-base">${estimatedTaxes.toFixed(2)}</span>
          </div>
          <div className="flex flex-col md:flex-row justify-between font-bold text-base md:text-lg">
            <span>Total:</span>
            <span>${total.toFixed(2)}</span>
          </div>
        </div>
      </div>








    </div>
  );
};

export default CartComponent;
