  'use client';
  import React, { useState } from 'react';
  import { FaSearch, FaUser, FaShoppingCart, FaTimes, FaBars, FaChevronDown } from 'react-icons/fa';
  import Link from 'next/link';
  import CartDrawer from '../CartAndCheckout/cartDrawer';

  const Navbar = () => {
    const [isSearchActive, setIsSearchActive] = useState(false);
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    const [activeMenu, setActiveMenu] = useState(null);

    // Example cart items (replace with your actual cart state)
    const cartItems = [
      {
        name: 'Product 1',
        image: '/path-to-image.jpg',
        quantity: 2,
        price: 29.99,
      },
      {
        name: 'Product 2',
        image: '/path-to-image.jpg',
        quantity: 1,
        price: 49.99,
      },
    ];

    // Actual menu data
    const menus = {
      Men: {
        label: 'Men',
        children: {
          AllMenProducts: { label: "All Men's Product", href: '/men/all' },
          Polo: {
            label: 'Polo',
            href: '/men/polo',
            children: {
              AllPoloCollections: { label: 'All Polo Collections', href: '/men/polo/all' },
              PerformancePolo: { label: 'Performance Polo', href: '/men/polo/performance' },
              PremiumPolo: { label: 'Premium Polo', href: '/men/polo/premium' },
              ClassicPolo: { label: 'Classic Polo', href: '/men/polo/classic' },
            },
          },
          MenTShirt: {
            label: "Men's T-shirt",
            href: '/men/t-shirt',
            children: {
              RegularFitTShirt: { label: 'Regular Fit T-shirt', href: '/men/t-shirt/regular' },
              DropShoulderTShirt: { label: 'Drop Shoulder T-shirt', href: '/men/t-shirt/drop-shoulder' },
            },
          },
          MenActivewear: {
            label: "Men's Activewear",
            href: '/men/activewear',
            children: {
              ActivewearTShirt: { label: 'Activewear T-shirt', href: '/men/activewear/t-shirt' },
            },
          },
          Denim: { label: 'Denim', href: '/men/denim' },
          Joggers: { label: 'Joggers', href: '/men/joggers' },
          Jacket: { label: 'Jacket', href: '/men/jacket' },
          Sweatshirt: { label: 'Sweatshirt', href: '/men/sweatshirt' },
        },
      },
      Women: {
        label: 'Women',
        children: {
          AllWomenProducts: { label: "All Women's Product", href: '/women/all' },
          Ethnic: { label: 'Ethnic', href: '/women/ethnic' },
          Tops: {
            label: 'Tops',
            href: '/women/tops',
            children: {
              WomenTops: { label: "Women's Tops", href: '/women/tops/all' },
              WomenLongTop: { label: "Women's Long Top", href: '/women/tops/long' },
              WomenCropTop: { label: "Women's Crop Top", href: '/women/tops/crop' },
            },
          },
          WomenTShirt: { label: "Women's T-shirt", href: '/women/t-shirt' },
          WomenJacket: { label: "Women's Jacket", href: '/women/jacket' },
          WomenSweatshirt: { label: "Women's Sweatshirt", href: '/women/sweatshirt' },
        },
      },
      Kids: {
        label: 'Kids',
        children: {
          GirlsFrock: { label: "Girl's Frock", href: '/kids/frock' },
          BoysTShirt: { label: "Boy's T-shirt", href: '/kids/t-shirt' },
        },
      },
    };

    const handleMenuClick = (menu) => {
      setActiveMenu(activeMenu === menu ? null : menu);
    };

    return (
      <>
        <div className="z-[100] fixed top-0 left-0 w-full bg-white text-black shadow-md px-2">
          <div className="container mx-auto flex justify-between items-center px-4 py-2">
            <div className="md:hidden flex items-center">
              <FaBars
                className="cursor-pointer hover:text-blue-500"
                onClick={() => setIsDrawerOpen(true)}
              />
            </div>

            <div className="">
              <Link href="/" className="flex items-center ml-16 md:ml-0">
                <img
                  src="TORR-Logo.avif"
                  alt="Logo"
                  className="h-6 w-auto"
                />
              </Link>
            </div>

            <div className="hidden md:flex items-center relative">
              <Link href="/" className="flex items-center font-thin text-sm px-3 py-2 rounded text-black hover:text-blue-500">
                Home
              </Link>
              <Link href="/products" className="flex items-center font-thin text-sm px-3 py-2 rounded text-black hover:text-blue-500">
                Our Products
              </Link>
              {Object.entries(menus).map(([key, menu]) => (
                <div key={key} className="relative group">
                  <button
                    onClick={() => handleMenuClick(key)}
                    className="flex items-center font-thin text-sm px-3 py-2 rounded text-black hover:text-blue-500"
                  >
                    {menu.label}
                    <FaChevronDown className="ml-2" />
                  </button>
                </div>
              ))}
              <Link href="/contact" className="flex items-center font-thin text-sm px-3 py-2 rounded text-black hover:text-blue-500">
                Contact
              </Link>
              <Link href="/our-story" className="flex items-center font-thin text-sm px-3 py-2 rounded text-black hover:text-blue-500">
                Our Story
              </Link>
            </div>

            <div className="flex space-x-6 items-center md:space-x-4">


              <img
                src="search.png" // Replace with the path to your search PNG
                alt="Search"
                className="cursor-pointer hover:text-blue-500"
                onClick={() => setIsSearchActive(true)}
                width={24} // Adjust width as needed
                height={24} // Adjust height as needed
              />


              <Link href="/account">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                  focusable="false"
                  className="icon icon-account cursor-pointer h-5 w-5 hover:text-blue-600"
                  fill="none"
                  viewBox="0 0 18 19"
                >
                  <path fillRule="evenodd" clipRule="evenodd" d="M6 4.5a3 3 0 116 0 3 3 0 01-6 0zm3-4a4 4 0 100 8 4 4 0 000-8zm5.58 12.15c1.12.82 1.83 2.24 1.91 4.85H1.51c.08-2.6.79-4.03 1.9-4.85C4.66 11.75 6.5 11.5 9 11.5s4.35.26 5.58 1.15zM9 10.5c-2.5 0-4.65.24-6.17 1.35C1.27 12.98.5 14.93.5 18v.5h17V18c0-3.07-.77-5.02-2.33-6.15-1.52-1.1-3.67-1.35-6.17-1.35z" fill="currentColor"></path>
                </svg>
              </Link>


              <svg
                className="icon icon-cart cursor-pointer h-10 w-10 hover:text-blue-600"
                aria-hidden="true"
                focusable="false"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 40 40"
                fill="none"
                onClick={() => setIsCartOpen(true)} // Add this line to handle the cart opening logic
              >
                <path
                  fill="currentColor"
                  fillRule="evenodd"
                  d="M20.5 6.5a4.75 4.75 0 00-4.75 4.75v.56h-3.16l-.77 11.6a5 5 0 004.99 5.34h7.38a5 5 0 004.99-5.33l-.77-11.6h-3.16v-.57A4.75 4.75 0 0020.5 6.5zm3.75 5.31v-.56a3.75 3.75 0 10-7.5 0v.56h7.5zm-7.5 1h7.5v.56a3.75 3.75 0 11-7.5 0v-.56zm-1 0v.56a4.75 4.75 0 109.5 0v-.56h2.22l.71 10.67a4 4 0 01-3.99 4.27h-7.38a4 4 0 01-4-4.27l.72-10.67h2.22z"
                ></path>
              </svg>

            </div>
          </div>

          {isSearchActive && (
            <div className="absolute top-0 left-0 w-full bg-white flex items-center justify-center z-[101] py-2">
              <div className="relative w-full max-w-md">
                <input
                  type="text"
                  className="w-full h-10 px-4 py-2 bg-white text-black shadow-lg"
                  placeholder="Search..."
                  autoFocus
                />
                <FaTimes
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 text-black cursor-pointer"
                  onClick={() => setIsSearchActive(false)}
                />
              </div>
            </div>
          )}

          {/* Dropdown Menu for Medium and Large Screens */}

          {activeMenu && (
            <div className="hidden md:block fixed top-12 left-0 w-full bg-white text-black z-[102] shadow-lg">
              <div className="container mx-auto flex">
                <div className="w-full flex">
                  {Object.entries(menus[activeMenu].children).map(([key, child]) => (
                    <div key={key} className="flex-1 p-4 border-r font-thin text-center text-sm border-gray-200">
                      <div className="font-semibold text-base underline hover:text-blue-600 mb-2">
                        <Link href={child.href}>{child.label}</Link>
                      </div>
                      {child.children && (
                        <div className="space-y-2">
                          {Object.entries(child.children).map(([grandchildKey, grandchild]) => (
                            <Link
                              key={grandchildKey}
                              href={grandchild.href}
                              className="block px-4 py-2 hover:underline hover:text-blue-600"
                            >
                              {grandchild.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Drawer and Vertical Menu for Small Screens */}
        <div
          className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg z-[102] transition-transform duration-300 transform ${isDrawerOpen ? 'translate-x-0' : '-translate-x-full'
            }`}
        >
          <div className="flex flex-col h-full">
            <div className="flex justify-between items-center p-4 border-b">
              <span className="text-xl font-semibold">Menu</span>
              <FaTimes
                className="cursor-pointer text-xl"
                onClick={() => setIsDrawerOpen(false)}
              />
            </div>
            <div className="flex-1 overflow-y-auto">
              <Link href="/" className="block  px-4 py-2 hover:text-blue-700">
                Home
              </Link>
              <Link href="/products" className="block px-4 py-2 hover:text-blue-700">
                Our Products
              </Link>
              {Object.entries(menus).map(([key, menu]) => (
                <div key={key}>
                  <div
                    className="flex justify-between items-center px-4 py-2 font-semibold hover:text-blue-700 cursor-pointer"
                    onClick={() => handleMenuClick(key)}
                  >
                    <span>{menu.label}</span>
                    <FaChevronDown />
                  </div>
                  {activeMenu === key && (
                    <div className="ml-4 space-y-2">
                      {Object.entries(menu.children).map(([childKey, child]) => (
                        <div key={childKey}>
                          <Link href={child.href} className="block px-4 py-2 hover:text-blue-700">
                            {child.label}
                          </Link>
                          {child.children && (
                            <div className="ml-4 space-y-2">
                              {Object.entries(child.children).map(([grandchildKey, grandchild]) => (
                                <Link
                                  key={grandchildKey}
                                  href={grandchild.href}
                                  className="block px-4 py-2 hover:text-blue-700"
                                >
                                  {grandchild.label}
                                </Link>
                              ))}
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <Link href="/contact" className="px-3  py-2 rounded font-thin text-sm text-black hover:text-blue-500">
                Contact
              </Link>
              <Link href="/our-story" className="px-3 py-2 rounded font-thin text-sm text-black hover:text-blue-500">
                Our Story
              </Link>
            </div>
          </div>
        </div>

        {/* Cart Drawer */}
        {isCartOpen && (
          <CartDrawer isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} cartItems={cartItems} />
        )}
      </>
    );
  };

  export default Navbar;
