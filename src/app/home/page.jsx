'use client';
import MainBanner from '@/components/main-banner/page';
import SectionOne from '@/components/section-one/page';
import SectionThree from '@/components/section-three/page';
import SectionTwo from '@/components/section-two/page';
import React from 'react';

const Homepage = () => {
  return (
    <div className="max-w-screen-3xl">
      <div className="relative">
        <MainBanner />
      </div>

      <div className=''>
      <div className="mb-4 w-full">
        <SectionOne />
      </div>
      <div className="mb-4">
        <SectionTwo />
      </div>
      <div className="mb-4">
        <SectionThree />
      </div>
      </div>
    </div>
  );
};

export default Homepage;
