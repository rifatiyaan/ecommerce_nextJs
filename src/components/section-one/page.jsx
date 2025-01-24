'use client'
import React, { useState } from 'react';
import ItemCarousel from '../carousel/page';

// Dummy data to simulate API response
const dummyData = [
  { name: 'Ethnic Wear Kurti 1', category: 'TRENDING', price: 450, image: 'a1.webp' },
  { name: 'Ethnic Wear Kurti 2', category: 'JUST IN', price: 595, image: 'b1.webp' },
  { name: 'Ethnic Wear Kurti 3', category: 'TRENDING', price: 285, image: 'c1.webp' },
  { name: 'Ethnic Wear Kurti 4', category: 'JUST IN', price: 800, image: 'd1.webp' },
  { name: 'Ethnic Wear Kurti 5', category: 'TRENDING', price: 180, image: 'e1.webp' },
  { name: 'Ethnic Wear Kurti 6', category: 'JUST IN', price: 220, image: 'f1.webp' },
  { name: 'Ethnic Wear Kurti 7', category: 'TRENDING', price: 142.5, image: 'g1.webp' },
  { name: 'Ethnic Wear Kurti 8', category: 'JUST IN', price: 240, image: 'h1.webp' },
  { name: 'Ethnic Wear Kurti 1', category: 'TRENDING', price: 450, image: 'j1.webp' },
  { name: 'Ethnic Wear Kurti 2', category: 'JUST IN', price: 595, image: 'k1.webp' },
  { name: 'Ethnic Wear Kurti 3', category: 'TRENDING', price: 285, image: 'l1.webp' },
  { name: 'Ethnic Wear Kurti 4', category: 'JUST IN', price: 800, image: 'm1.webp' },
  { name: 'Ethnic Wear Kurti 5', category: 'TRENDING', price: 180, image: 'n1.webp' },
  { name: 'Ethnic Wear Kurti 6', category: 'JUST IN', price: 220, image: 'o1.webp' },
  { name: 'Ethnic Wear Kurti 7', category: 'TRENDING', price: 142.5, image: 'p1.webp' },
  { name: 'Ethnic Wear Kurti 8', category: 'JUST IN', price: 240, image: 'q1.webp' },
];

const SectionOne = () => {
  const [activeTab, setActiveTab] = useState('TRENDING');

  // Filter items based on the active tab
  const filteredItems = dummyData.filter(item => item.category === activeTab);

  return (
    <div className=' w-full m-auto flex flex-col'>
      <div className='flex justify-center gap-6 text-4xl font-bold mb-4'>
        <p
          className={`cursor-pointer text-xl md:text-3xl font-thin ${activeTab === 'TRENDING'
              ? 'underline-active'
              : 'underline-inactive'
            }`}
          onMouseEnter={() => setActiveTab('TRENDING')}
        >
          TRENDING
        </p>
        <p
          className={`cursor-pointer text-xl md:text-3xl font-thin ${activeTab === 'JUST IN'
              ? 'underline-active'
              : 'underline-inactive'
            }`}
          onMouseEnter={() => setActiveTab('JUST IN')}
        >
          JUST IN
        </p>
      </div>

      <div className='mt-2 md:mt-6'>
        <ItemCarousel items={filteredItems} />
      </div>
    </div>
  );
}

export default SectionOne;
