'use client';
import React from 'react';

const MainBanner = () => {
  return (
    <div className="relative w-full overflow-hidden">
      {/* Aspect Ratio Container */}
      <div className="relative w-full aspect-[16/9] md:aspect-[21/9] lg:aspect-[21/9]">
        {/* Image */}
        <img 
          className="absolute inset-0 w-full h-full object-contain" 
          src="banner.webp" 
          alt="Banner" 
        />
      </div>
    </div>
  );
};

export default MainBanner;
