'use client';
import React from 'react';
import { Card } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import Link from 'next/link';
import { FaHeart, FaShoppingCart } from 'react-icons/fa'; // Importing heart and cart icons from react-icons
import Swal from 'sweetalert2'; // Importing SweetAlert2

const ItemCarousel = ({ items }) => {
  const handleWishlistClick = (event) => {
    event.preventDefault(); // Prevent default behavior
    Swal.fire({
      icon: 'success',
      title: 'Added to Wishlist',
      showConfirmButton: false,
      timer: 1500,
      toast: true,
      position: 'top-end',
    });
  };

  const handleCartClick = (event) => {
    event.preventDefault(); // Prevent default behavior
    Swal.fire({
      icon: 'success',
      title: 'Added to Cart',
      showConfirmButton: false,
      timer: 1500,
      toast: true,
      position: 'top-end',
    });
  };

  return (
    <div className='flex flex-col items-center w-full'>
      <Carousel className='w-3/4 md:w-full max-w-6xl'>
        <CarouselContent className='-ml-1'>
          {items.map((item) => (
            <CarouselItem
              key={item.SkuID}
              className='pl-1 basis-1/2 md:basis-1/4 lg:basis-1/4'
            >
              <div className=''>
                <Link href="">
                  <Card className='h-full w-full hover:shadow-lg hover:scale-[102%] transition-transform duration-300 hover:cursor-pointer'>
                    <div className='relative flex flex-col h-full'>
                      <div className='flex justify-center h-full'>
                        <img className='h-full w-full object-contain' src={item.image} alt={item.name} />
                      </div>
                      <div className='flex flex-col w-full mt-2 px-2'>
                        <div className='text-sm font-semibold text-center'>{item.name}</div>
                        <div className='font-normal text-center mt-1'>{item.price} tk</div>
                      </div>
                      {/* Buy Now and Love Buttons */}
                      <div className=' bottom-0 left-0 right-0 bg-white/80 p-3 flex'>
                        {/* Love Button */}
                        <button
                          onClick={handleWishlistClick}
                          className='flex-1 p-2  bg-white text-black flex items-center justify-center space-x-2 transition-colors duration-300 hover:text-blue-500'
                        >
                          <FaHeart size={16} />
                        </button>
                        {/* Cart Button */}
                        <button
                          onClick={handleCartClick}
                          className='flex-1 p-2  bg-white text-black flex items-center justify-center space-x-2 transition-colors duration-300 hover:text-blue-500'
                        >
                          <FaShoppingCart size={16} />
                        </button>
                      </div>
                      
                    </div>
                  </Card>
                </Link>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}

export default ItemCarousel;
