import React, { useState } from 'react';
import { FaChevronDown } from 'react-icons/fa';
import Modal from 'react-modal';

// Modal styles
const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    transform: 'translate(-50%, -50%)',
    padding: '20px',
    width: '80%',
    maxWidth: '600px',
  },
};

// Sample images
const images = [
  'https://via.placeholder.com/500',
  'https://via.placeholder.com/500',
];

const ProductDetail = () => {
  const [selectedColor, setSelectedColor] = useState('Red');
  const [sizeGuideOpen, setSizeGuideOpen] = useState(false);
  const [detailsOpen, setDetailsOpen] = useState(false);
  const [shippingOpen, setShippingOpen] = useState(false);
  const [returnPolicyOpen, setReturnPolicyOpen] = useState(false);
  const [paymentPolicyOpen, setPaymentPolicyOpen] = useState(false);

  const toggleModal = () => {
    setSizeGuideOpen(!sizeGuideOpen);
  };

  return (
    <div className="flex min-h-screen">
      {/* Images Section */}
      <div className="w-1/2 p-4">
        {images.map((image, index) => (
          <img key={index} src={image} alt={`Product ${index + 1}`} className="w-full h-auto mb-4" />
        ))}
      </div>
      
      {/* Details Section */}
      <div className="w-1/2 p-4">
        <h1 className="text-3xl font-semibold mb-4">Product Name</h1>
        
        {/* Price */}
        <p className="text-xl font-semibold mb-4">$XX.XX</p>
        
        {/* Color Selection */}
        <div className="mb-4">
          <h2 className="text-lg font-semibold mb-2">Color</h2>
          <div className="flex gap-2 mb-2">
            {['Red', 'Blue', 'Green'].map((color) => (
              <div
                key={color}
                onClick={() => setSelectedColor(color)}
                className={`w-8 h-8 rounded-full cursor-pointer ${color.toLowerCase()}-color`}
              />
            ))}
          </div>
          <p className="text-gray-500">Selected Color: {selectedColor}</p>
        </div>
        
        {/* Size Selection */}
        <div className="mb-4">
          <h2 className="text-lg font-semibold mb-2">Size</h2>
          <div className="flex gap-2 mb-2">
            {['S', 'M', 'L', 'XL', '2XL'].map((size) => (
              <button
                key={size}
                className="bg-black text-white px-4 py-2 rounded-md"
                onClick={toggleModal}
              >
                {size}
              </button>
            ))}
          </div>
        </div>
        
        {/* Buttons */}
        <div className="flex gap-4 mb-4">
          <button className="bg-green-500 text-white px-4 py-2 rounded-md">Add to Bag</button>
          <button className="bg-blue-500 text-white px-4 py-2 rounded-md">Buy It Now</button>
        </div>
        
        {/* Accordions */}
        <div className="space-y-3">
          <Accordion title="Details" isOpen={detailsOpen} toggle={() => setDetailsOpen(!detailsOpen)}>
            <p>Product details go here...</p>
          </Accordion>
          <Accordion title="Shipping & Return Policy" isOpen={shippingOpen} toggle={() => setShippingOpen(!shippingOpen)}>
            <p>Shipping and return policy details go here...</p>
          </Accordion>
          <Accordion title="Payment Policy" isOpen={paymentPolicyOpen} toggle={() => setPaymentPolicyOpen(!paymentPolicyOpen)}>
            <p>Payment policy details go here...</p>
          </Accordion>
        </div>
      </div>
      
      {/* Size Guide Modal */}
      <Modal
        isOpen={sizeGuideOpen}
        onRequestClose={toggleModal}
        style={customStyles}
        contentLabel="Size Guide Modal"
      >
        <h2 className="text-2xl font-semibold mb-4">Size Guide</h2>
        <p>Size guide content goes here...</p>
        <button onClick={toggleModal} className="mt-4 bg-gray-500 text-white px-4 py-2 rounded-md">Close</button>
      </Modal>
    </div>
  );
};

const Accordion = ({ title, isOpen, toggle, children }) => (
  <div className="bg-white shadow-lg rounded-lg">
    <button
      onClick={toggle}
      className="flex items-center justify-between font-semibold w-full text-left bg-black text-white px-4 py-2 rounded-t-lg"
    >
      {title}
      <FaChevronDown
        className={`transition-transform duration-300 ${isOpen ? 'rotate-180' : 'rotate-0'}`}
      />
    </button>
    <div className={`transition-all duration-300 overflow-hidden ${isOpen ? 'max-h-40' : 'max-h-0'}`}>
      <div className="p-4">{children}</div>
    </div>
  </div>
);

export default ProductDetail;

