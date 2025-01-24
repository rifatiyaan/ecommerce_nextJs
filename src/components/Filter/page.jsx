import { useState } from 'react';
import { FaChevronDown } from 'react-icons/fa';

const Filter = ({ toggleFilterPanel }) => {
  const [priceOpen, setPriceOpen] = useState(false);
  const [colorOpen, setColorOpen] = useState(false);
  const [sizeOpen, setSizeOpen] = useState(false);
  const [priceRangeOpen, setPriceRangeOpen] = useState(false);
  const [priceRange, setPriceRange] = useState([0, 1000]);

  const handlePriceRangeChange = (e) => {
    const { name, value } = e.target;
    setPriceRange((prevRange) => {
      const newRange = [...prevRange];
      newRange[name === 'min' ? 0 : 1] = Number(value);
      return newRange;
    });
  };

  return (
    <div className="bg-white p-4 mt-4 w-full transition-all duration-300 ease-in-out">
      <div className="overflow-y-auto h-full space-y-4 pb-4">
        <div className="bg-white shadow-lg rounded-lg mx-2">
          <button 
            onClick={() => setPriceOpen(!priceOpen)} 
            className="flex items-center justify-between font-semibold w-full text-left bg-black text-white px-4 py-2 rounded-t-lg"
          >
            Price
            <span
              className={`transition-transform duration-300 ease-in-out ${priceOpen ? 'rotate-180' : 'rotate-0'}`}
            >
              <FaChevronDown />
            </span>
          </button>
          <div className={`transition-all duration-300 ease-in-out overflow-hidden ${priceOpen ? 'max-h-40' : 'max-h-0'}`}>
            <div className="p-4 space-y-2">
              <label className="flex items-center">
                <input type="radio" name="price" value="low" className="mr-2" />
                <span className="text-gray-500">Low to High</span>
              </label>
              <label className="flex items-center">
                <input type="radio" name="price" value="high" className="mr-2" />
                <span className="text-gray-500">High to Low</span>
              </label>
              <label className="flex items-center">
                <input type="radio" name="price" value="range" className="mr-2" onClick={() => setPriceRangeOpen(!priceRangeOpen)} />
                <span className="text-gray-500">Custom Range</span>
              </label>
            </div>
          </div>
        </div>

        <div className="bg-white shadow-lg rounded-lg mx-2">
          <button 
            onClick={() => setColorOpen(!colorOpen)} 
            className="flex items-center justify-between font-semibold w-full text-left bg-black text-white px-4 py-2 rounded-t-lg"
          >
            Color
            <span
              className={`transition-transform duration-300 ease-in-out ${colorOpen ? 'rotate-180' : 'rotate-0'}`}
            >
              <FaChevronDown />
            </span>
          </button>
          <div className={`transition-all duration-300 ease-in-out overflow-hidden ${colorOpen ? 'max-h-40' : 'max-h-0'}`}>
            <div className="p-4 space-y-2">
              <label className="flex items-center">
                <input type="radio" name="color" value="red" className="mr-2" />
                <span className="text-gray-500">Red</span>
              </label>
              <label className="flex items-center">
                <input type="radio" name="color" value="blue" className="mr-2" />
                <span className="text-gray-500">Blue</span>
              </label>
              <label className="flex items-center">
                <input type="radio" name="color" value="green" className="mr-2" />
                <span className="text-gray-500">Green</span>
              </label>
            </div>
          </div>
        </div>

        <div className="bg-white shadow-lg rounded-lg mx-2">
          <button 
            onClick={() => setSizeOpen(!sizeOpen)} 
            className="flex items-center justify-between font-semibold w-full text-left bg-black text-white px-4 py-2 rounded-t-lg"
          >
            Size
            <span
              className={`transition-transform duration-300 ease-in-out ${sizeOpen ? 'rotate-180' : 'rotate-0'}`}
            >
              <FaChevronDown />
            </span>
          </button>
          <div className={`transition-all duration-300 ease-in-out overflow-hidden ${sizeOpen ? 'max-h-40' : 'max-h-0'}`}>
            <div className="p-4 space-y-2">
              <label className="flex items-center">
                <input type="radio" name="size" value="small" className="mr-2" />
                <span className="text-gray-500">Small</span>
              </label>
              <label className="flex items-center">
                <input type="radio" name="size" value="medium" className="mr-2" />
                <span className="text-gray-500">Medium</span>
              </label>
              <label className="flex items-center">
                <input type="radio" name="size" value="large" className="mr-2" />
                <span className="text-gray-500">Large</span>
              </label>
            </div>
          </div>
        </div>

        {/* Price Range Picker Section */}
        <div className={`bg-white shadow-lg rounded-lg mx-2 p-4 ${priceRangeOpen ? '' : 'hidden'}`}>
          <label className="block text-gray-500 font-semibold mb-2">Price Range</label>
          <div className="flex items-center space-x-4">
            <input 
              type="range" 
              name="min" 
              min="0" 
              max="1000" 
              value={priceRange[0]} 
              onChange={handlePriceRangeChange} 
              className="w-full"
            />
            <input 
              type="range" 
              name="max" 
              min="0" 
              max="1000" 
              value={priceRange[1]} 
              onChange={handlePriceRangeChange} 
              className="w-full"
            />
          </div>
          <div className="flex justify-between mt-2">
            <span className="text-gray-500">${priceRange[0]}</span>
            <span className="text-gray-500">${priceRange[1]}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filter;
