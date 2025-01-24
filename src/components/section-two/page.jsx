'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useInView } from 'react-intersection-observer'; // Ensure you have this package installed

const images = {
  Ethnic: ['a1.webp', 'b1.webp'],
  Polo: ['m1.webp', 'n1.webp'],
  Kids: ['kids.jpg', 'kids2.webp'],
  Pants: ['pant1.webp', 'pant2.webp'],
  Tshirt: ['tshirt1.webp', 'tshirt2.webp'],
  Tops: ['k1.webp', 'l1.webp'],
};

const transitionInterval = 5000; // 5 seconds

const CategoryCard = ({ category, index, images, link }) => (
  <div className="relative w-full h-full bg-cover bg-center flex items-end group cursor-pointer"
       style={{ backgroundImage: `url(${images[index]})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
  >
    {/* Darken Effect on Hover */}
    <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-40 transition-opacity duration-300"></div>

    {/* Drawer Effect */}
    <div className="absolute bottom-0 w-full bg-white bg-opacity-80 backdrop-blur-sm text-center p-4 transition-all duration-300 ease-in-out transform translate-y-0 group-hover:translate-y-0 group-hover:h-[30%] h-[20%]">
      <Link href={link}>
        <h2 className="text-3xl font-bold text-black">{category}</h2>
      </Link>
      {/* Explore Button */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <Link href={link} className="bg-black text-white py-2 px-4 rounded flex items-center gap-2">
          <span>Explore</span>
          <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
    </div>
  </div>
);

export default function SectionTwo() {
  const [ethnicIndex, setEthnicIndex] = useState(0);
  const [poloIndex, setPoloIndex] = useState(0);
  const [kidsIndex, setKidsIndex] = useState(0);
  const [pantsIndex, setPantsIndex] = useState(0);
  const [tshirtIndex, setTshirtIndex] = useState(0);
  const [topsIndex, setTopsIndex] = useState(0);

  const { ref, inView } = useInView({
    triggerOnce: false, // Trigger animation every time it comes into view
  });

  useEffect(() => {
    const intervals = [
      setInterval(() => setEthnicIndex((prev) => (prev + 1) % images.Ethnic.length), transitionInterval),
      setInterval(() => setPoloIndex((prev) => (prev + 1) % images.Polo.length), transitionInterval),
      setInterval(() => setKidsIndex((prev) => (prev + 1) % images.Kids.length), transitionInterval),
      setInterval(() => setPantsIndex((prev) => (prev + 1) % images.Pants.length), transitionInterval),
      setInterval(() => setTshirtIndex((prev) => (prev + 1) % images.Tshirt.length), transitionInterval),
      setInterval(() => setTopsIndex((prev) => (prev + 1) % images.Tops.length), transitionInterval),
    ];

    return () => intervals.forEach(clearInterval);
  }, []);

  return (
    <div className="container md:flex md:flex-wrap w-full gap-4 px-4 md:px-12 mt-20">
      <div className="w-full mb-8">
        <div
          ref={ref}
          className={`flex justify-center text-4xl font-bold relative overflow-hidden ${inView ? 'underline-animation' : ''}`}
          style={{
            '--underline-width': inView ? '100%' : '0%',
            transition: 'all 0.5s ease-in-out',
          }}
        >
          <p className="relative mb-4 font-thin text-3xl"> {/* Added margin-bottom */}
            Categories
            <span
              className="absolute bottom-[-10px] left-0 h-2 bg-black" 
              style={{
                width: 'var(--underline-width)',
                transition: 'width 0.5s ease-in-out',
              }}
            ></span>
          </p>
        </div>
      </div>

      {/* Ethnic, Polo, and Pants Categories */}
      <div className="w-full h-[90vh] flex gap-4 mb-20">
        <div className="relative w-full h-[90vh] flex-1 mb-12">
          <CategoryCard
            category="Ethnic"
            index={ethnicIndex}
            images={images.Ethnic}
            link="/allProducts"
          />
        </div>
        <div className="relative w-full h-[90vh] flex-1 mb-12">
          <CategoryCard
            category="Polo"
            index={poloIndex}
            images={images.Polo}
            link="/shop/leggings"
          />
        </div>
        <div className="relative w-full h-[90vh] flex-1 mb-12">
          <CategoryCard
            category="Pants"
            index={pantsIndex}
            images={images.Pants}
            link="/shop/category2"
          />
        </div>
      </div>

      {/* Kids, Tshirt, and Tops Categories */}
      <div className="mb-12 w-full h-[90vh] grid grid-cols-3 gap-4">
        <div className="relative w-full h-[90vh] flex-1 mb-12">
          <CategoryCard
            category="Kids"
            index={kidsIndex}
            images={images.Kids}
            link="/shop/category1"
          />
        </div>
        <div className="relative w-full h-[90vh] flex-1 mb-12">
          <CategoryCard
            category="T-shirt"
            index={tshirtIndex}
            images={images.Tshirt}
            link="/shop/category3"
          />
        </div>
        <div className="relative w-full h-[90vh] flex-1 mb-12">
          <CategoryCard
            category="Jacket"
            index={topsIndex}
            images={images.Tops}
            link="/shop/category4"
          />
        </div>
      </div>
    </div>
  );
}

// Inject TailwindCSS Styles
const styles = `
@keyframes underline-animation {
  from {
    width: 0;
  }
  to {
    width: 100%;
  }
}

.underline-animation span {
  display: block;
  height: 4px; /* Adjust based on your design */
  background: black; /* Adjust color based on your design */
  width: 0;
  animation: underline-animation 0.5s ease-in-out forwards;
}
`;

// Inject styles into document head
if (typeof window !== 'undefined') {
  const styleElement = document.createElement('style');
  styleElement.innerHTML = styles;
  document.head.appendChild(styleElement);
}
