'use client';
import React, { useState } from 'react';

const ProductCard = ({ product }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div 
            className="relative overflow-hidden mx-auto cursor-pointer" // Add cursor-pointer here
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <img 
                src={isHovered ? product.imageUrl[1] : product.imageUrl[0]} 
                alt={product.name} 
                className={`w-full h-full object-cover transition-transform duration-300 ${isHovered ? 'scale-110' : 'scale-100'}`}
            />
            <div className="absolute bottom-0 left-0 bg-black bg-opacity-50 text-white p-2 w-full text-center">
                <h2 className="text-sm font-bold">{product.name}</h2>
                <p className="text-xs">{product.price}</p>
            </div>
        </div>
    );
};

export default ProductCard;
