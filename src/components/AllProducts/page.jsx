'use client';
import { useState } from 'react';
import Filter from '../Filter/page';
import ProductCard from '../ProductCard/page';

const dummyProducts = [
  {
    id: 1,
    name: 'Product 1',
    price: '29.99',
    imageUrl: ['a1.webp', 'a2.webp']
  },
  {
    id: 2,
    name: 'Product 2',
    price: '39.99',
    imageUrl: ['b1.webp', 'b2.webp']
  },
  {
    id: 3,
    name: 'Product 3',
    price: '49.99',
    imageUrl: ['c1.webp', 'c2.webp']
  },
  {
    id: 4,
    name: 'Product 4',
    price: '59.99',
    imageUrl: ['d1.webp', 'd2.webp']
  },
  {
    id: 5,
    name: 'Product 5',
    price: '69.99',
    imageUrl: ['e1.webp', 'e2.webp']
  },
  {
    id: 6,
    name: 'Product 6',
    price: '79.99',
    imageUrl: ['f1.webp', 'f2.webp']
  },
  {
    id: 7,
    name: 'Product 7',
    price: '89.99',
    imageUrl: ['g1.webp', 'g2.webp']
  },
  {
    id: 8,
    name: 'Product 8',
    price: '99.99',
    imageUrl: ['h1.webp', 'h2.jpg']
  },
  {
    id: 10,
    name: 'Product 10',
    price: '119.99',
    imageUrl: ['j1.webp', 'j2.webp']
  },
  {
    id: 11,
    name: 'Product 11',
    price: '129.99',
    imageUrl: ['k1.webp', 'k2.webp']
  },
  {
    id: 12,
    name: 'Product 12',
    price: '139.99',
    imageUrl: ['l1.webp', 'l2.jpg']
  },
  {
    id: 13,
    name: 'Product 13',
    price: '149.99',
    imageUrl: ['m1.webp', 'm2.webp']
  },
  {
    id: 14,
    name: 'Product 14',
    price: '159.99',
    imageUrl: ['n1.webp', 'n2.jpg']
  },
  {
    id: 15,
    name: 'Product 15',
    price: '169.99',
    imageUrl: ['o1.webp', 'o2.jpg']
  },
  {
    id: 16,
    name: 'Product 16',
    price: '179.99',
    imageUrl: ['p1.webp', 'p2.webp']
  },
  {
    id: 17,
    name: 'Product 17',
    price: '189.99',
    imageUrl: ['q1.webp', 'q2.webp']
  }
];

const AllProducts = () => {
  const [isFilterPanelOpen, setIsFilterPanelOpen] = useState(false);

  const toggleFilterPanel = () => {
    setIsFilterPanelOpen(!isFilterPanelOpen);
  };

  return (
    <div className="relative min-h-screen mt-12">
      {/* Banner Section */}
      <div className="h-[80vh] bg-cover mb-4" style={{ backgroundImage: "url('women-banner.jpg')" }}>
        {/* You can add any overlay text or elements here */}
      </div>

      <div className="relative flex items-center justify-between mb-4">
        <button 
          onClick={toggleFilterPanel} 
          className="flex items-center p-2 mx-4 rounded-full transition-transform">
          <svg 
            className="h-6 w-6 mr-2" 
            aria-hidden="true" 
            focusable="false" 
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 20 20" 
            fill="currentColor">
            <path fillRule="evenodd" d="M4.833 6.5a1.667 1.667 0 1 1 3.334 0 1.667 1.667 0 0 1-3.334 0ZM4.05 7H2.5a.5.5 0 0 1 0-1h1.55a2.5 2.5 0 0 1 4.9 0h8.55a.5.5 0 0 1 0 1H8.95a2.5 2.5 0 0 1-4.9 0Zm11.117 6.5a1.667 1.667 0 1 0-3.334 0 1.667 1.667 0 0 0 3.334 0ZM13.5 11a2.5 2.5 0 0 1 2.45 2h1.55a.5.5 0 0 1 0 1h-1.55a2.5 2.5 0 0 1-4.9 0H2.5a.5.5 0 0 1 0-1h8.55a2.5 2.5 0 0 1 2.45-2Z" />
          </svg>
          <span className="text-sm font-medium">
            {isFilterPanelOpen ? 'Close Filter' : 'Filter'}
          </span>
        </button>
      </div>

      <div className="flex">
        <div className={`flex flex-col ${isFilterPanelOpen ? 'w-64' : 'w-0'} transition-width duration-300 overflow-hidden`}>
          {isFilterPanelOpen && (
            <Filter toggleFilterPanel={toggleFilterPanel} />
          )}
        </div>
        <div className={`flex-1 transition-all duration-300 ease-in-out p-1`}>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-1">
            {dummyProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllProducts;
