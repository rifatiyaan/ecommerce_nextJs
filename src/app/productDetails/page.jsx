'use client';
import React, { useState, useRef } from 'react';
import Modal from 'react-modal';
import { FaChevronDown } from 'react-icons/fa';

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

// Mock product data
const mockProduct = {
  name: 'Product Name',
  oldPrice: '$99.99',
  newPrice: '$79.99',
  images: ['a1.webp', 'b1.webp', 'c1.webp', 'd1.webp', 'e1.webp'],
  colors: [
    { name: 'Red', hex: '#FF0000' },
    { name: 'Blue', hex: '#0000FF' },
    { name: 'Green', hex: '#00FF00' },
  ],
  sizes: [
    { size: 'S', available: true },
    { size: 'M', available: false },
    { size: 'L', available: true },
    { size: 'XL', available: true },
    { size: '2XL', available: false },
  ],
  sizeGuide: 'Size guide content goes here...',
  details: 'Product details go here...',
  shipping: 'Shipping and return policy details go here...',
  payment: 'Payment policy details go here...',
};

const hideScrollbarStyle = {
  overflowY: 'scroll',
  scrollbarWidth: 'none', /* For Firefox */
};

const hideScrollbarWebkitStyle = {
  overflowY: 'scroll',
  WebkitOverflowScrolling: 'touch',
};

const ProductDetail = () => {
  const [selectedColor, setSelectedColor] = useState(mockProduct.colors[0].name);
  const [selectedSize, setSelectedSize] = useState(null);
  const [sizeGuideOpen, setSizeGuideOpen] = useState(false);
  const [detailsOpen, setDetailsOpen] = useState(false);
  const [shippingOpen, setShippingOpen] = useState(false);
  const [paymentPolicyOpen, setPaymentPolicyOpen] = useState(false);
  const [selectedThumbnailIndex, setSelectedThumbnailIndex] = useState(0);

  const imageRefs = useRef([]);

  const toggleModal = () => {
    setSizeGuideOpen(!sizeGuideOpen);
  };

  const scrollToImage = (index) => {
    if (imageRefs.current[index]) {
      imageRefs.current[index].scrollIntoView({ behavior: 'smooth', block: 'center' });
      setSelectedThumbnailIndex(index);
    }
  };

  return (
    <div className="flex min-h-screen mt-8 ml-2">
      {/* Image and Thumbnail Section */}
      <div className="flex flex-1/3 items-center h-[100vh]">
        {/* Thumbnail Section */}
        <div
          className="w-1/8 flex flex-col justify-center bg-white border-r-2 h-fit"
          style={{ ...hideScrollbarStyle, ...hideScrollbarWebkitStyle }}
        >
          {mockProduct.images.map((image, index) => (
            <div
              key={index}
              className={`w-full p-1 cursor-pointer ${index === selectedThumbnailIndex ? 'border-2 border-black' : ''}`}
              onClick={() => scrollToImage(index)}
            >
              <img
                src={image}
                alt={`Thumbnail ${index + 1}`}
                className="w-full h-20 auto border rounded-md"
              />
            </div>
          ))}
        </div>
        
        {/* Images Section */}
        <div
          className=" flex flex-col items-center mt-4 w-[80%] mx-2 "
          style={{ ...hideScrollbarStyle, ...hideScrollbarWebkitStyle, maxHeight: 'calc(100vh - 32px)' }}
        >
          {mockProduct.images.map((image, index) => (
            <div
              key={index}
              ref={(el) => (imageRefs.current[index] = el)}
              className="w-full p-2"
            >
              <img
                src={image}
                alt={`Product ${index + 1}`}
                className="w-full h-auto object-cover"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Description Section */}
      <div className="w-2/3 h-screen p-4 bg-white border-2 flex flex-col" style={{ ...hideScrollbarStyle, ...hideScrollbarWebkitStyle }}>
        {/* Product Name */}
        <h1 className="text-2xl font-semibold mb-4">{mockProduct.name}</h1>
        
        {/* Price */}
        <div className="mb-4">
          <p className="text-lg font-semibold mb-2">
            <span className="text-red-500 line-through">{mockProduct.oldPrice}</span> {/* Old Price */}
            <span className="text-lg font-semibold text-black pl-4">{mockProduct.newPrice}</span> {/* New Price */}
          </p>
        </div>
        
        {/* Color Selection */}
        <div className="mb-4">
          <h2 className="text-md font-semibold mb-2">Color</h2>
          <div className="flex gap-2 mb-2">
            {mockProduct.colors.map((color) => (
              <div
                key={color.name}
                onClick={() => setSelectedColor(color.name)}
                className={`w-6 h-6 rounded-full cursor-pointer border-2 ${color.name === selectedColor ? 'border-black' : 'border-gray-300'}`}
                style={{ backgroundColor: color.hex }}
              />
            ))}
          </div>
          <p className="text-gray-500 text-sm">Selected Color: {selectedColor}</p>
        </div>
        
        {/* Size Selection */}
        <div className="mb-4 flex items-center">
          <div className="flex-1">
            <h2 className="text-md font-semibold mb-2">Size</h2>
            <div className="flex gap-2 mb-2">
              {mockProduct.sizes.map((size) => (
                <div className="relative" key={size.size}>
                  <button
                    className={`relative text-sm px-4 py-2 rounded-md border-2 ${size.size === selectedSize ? 'bg-black text-white border-black' : 'bg-white text-black border-black'} ${!size.available ? 'opacity-50 cursor-not-allowed' : ''}`}
                    onClick={size.available ? () => setSelectedSize(size.size) : null}
                  >
                    {size.size}
                  </button>
                  {!size.available && (
                    <span className="absolute inset-0 w-full h-full flex items-center justify-center">
                      <svg width="100%" height="100%">
                        <line x1="0" y1="0" x2="100%" y2="100%" stroke="black" strokeWidth="2" />
                      </svg>
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>
          <button
            onClick={toggleModal}
            className="bg-gray-500 text-white mt-8 px-4 py-2 text-sm rounded-md ml-4"
          >
            Size Guide
          </button>
        </div>
        
        {/* Accordion Sections */}
        <div className="flex flex-col gap-4 mb-4">
          {/* Product Details Accordion */}
          <div className="border border-gray-200 rounded-lg shadow-sm overflow-hidden">
            <button
              onClick={() => setDetailsOpen(!detailsOpen)}
              className="w-full px-4 py-3 flex justify-between items-center bg-gray-100 text-gray-900 hover:bg-gray-200 transition-colors duration-300"
            >
              <span className="font-semibold text-lg">Product Details</span>
              <FaChevronDown
                className={`w-5 h-5 text-gray-500 transform transition-transform duration-300 ${detailsOpen ? 'rotate-180' : 'rotate-0'}`}
              />
            </button>
            {detailsOpen && <div className="p-4 bg-white text-gray-700">{mockProduct.details}</div>}
          </div>

          {/* Shipping & Returns Accordion */}
          <div className="border border-gray-200 rounded-lg shadow-sm overflow-hidden">
            <button
              onClick={() => setShippingOpen(!shippingOpen)}
              className="w-full px-4 py-3 flex justify-between items-center bg-gray-100 text-gray-900 hover:bg-gray-200 transition-colors duration-300"
            >
              <span className="font-semibold text-lg">Shipping & Returns</span>
              <FaChevronDown
                className={`w-5 h-5 text-gray-500 transform transition-transform duration-300 ${shippingOpen ? 'rotate-180' : 'rotate-0'}`}
              />
            </button>
            {shippingOpen && <div className="p-4 bg-white text-gray-700">{mockProduct.shipping}</div>}
          </div>

          {/* Payment Policy Accordion */}
          <div className="border border-gray-200 rounded-lg shadow-sm overflow-hidden">
            <button
              onClick={() => setPaymentPolicyOpen(!paymentPolicyOpen)}
              className="w-full px-4 py-3 flex justify-between items-center bg-gray-100 text-gray-900 hover:bg-gray-200 transition-colors duration-300"
            >
              <span className="font-semibold text-lg">Payment Policy</span>
              <FaChevronDown
                className={`w-5 h-5 text-gray-500 transform transition-transform duration-300 ${paymentPolicyOpen ? 'rotate-180' : 'rotate-0'}`}
              />
            </button>
            {paymentPolicyOpen && <div className="p-4 bg-white text-gray-700">{mockProduct.payment}</div>}
          </div>
        </div>
        
        {/* Footer */}
      
      </div>
      
      {/* Modal */}
      <Modal
        isOpen={sizeGuideOpen}
        onRequestClose={toggleModal}
        style={customStyles}
        contentLabel="Size Guide"
      >
        <h2 className="text-lg font-semibold mb-4">Size Guide</h2>
        <p>{mockProduct.sizeGuide}</p>
        <button
          onClick={toggleModal}
          className="mt-4 bg-red-500 text-white px-4 py-2 rounded-md"
        >
          Close
        </button>
      </Modal>
    </div>
  );
};

export default ProductDetail;
