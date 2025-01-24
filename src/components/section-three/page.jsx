import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShippingFast, faTag, faExchangeAlt, faStar } from '@fortawesome/free-solid-svg-icons';

const SectionThree = () => {
  return (
    <div className="container mx-auto p-4">
      <div className='flex justify-center'>
        <h2 className="text-2xl w-fit font-bold border-b-2 border-black pb-2 mb-4">Our Promise</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 ">
        {/* Left Column */}
        <div className='flex flex-col justify-center gap-12'>
          <div className="mb-4">
            <h3 className="text-4xl font-normal">Header</h3>
          </div>
          <div>
            <p className="text-base">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident eum culpa cum, nostrum mollitia quam vero veniam, dolor modi beatae quisquam doloremque dolorum necessitatibus enim dignissimos impedit rem, excepturi consectetur!
            </p>
          </div>
        </div>
        
        {/* Center Column */}
        <div className="flex items-center justify-center">
          <div className="flex flex-col h-full justify-evenly items-start text-left">
            <div className="flex items-center mb-4"> {/* Increased margin-bottom */}
              <FontAwesomeIcon icon={faShippingFast} className="text-xl mr-2" />
              <span className="text-base">Fast Shipping And Delivery</span>
            </div>
            <div className="flex items-center mb-4"> {/* Increased margin-bottom */}
              <FontAwesomeIcon icon={faTag} className="text-xl mr-2" />
              <span className="text-base">Best Seller Offer</span>
            </div>
            <div className="flex items-center mb-4"> {/* Increased margin-bottom */}
              <FontAwesomeIcon icon={faExchangeAlt} className="text-xl mr-2" />
              <span className="text-base">Hassle-Free Exchange</span>
            </div>
            <div className="flex items-center mb-4"> {/* Increased margin-bottom */}
              <FontAwesomeIcon icon={faStar} className="text-xl mr-2" />
              <span className="text-base">Verified Trusted Reviews</span>
            </div>
          </div>
        </div>
        
        {/* Right Column */}
        <div className=''>
          <img src="n1.webp" alt="Right column picture" className="w-full " />
        </div>
      </div>
    </div>
  );
};

export default SectionThree;
