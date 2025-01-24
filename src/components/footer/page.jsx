import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faCcVisa, faCcMastercard, faCcAmex, faCcDiscover } from '@fortawesome/free-brands-svg-icons';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8 px-4">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* First Column */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Locations</h4>
          <ul>
            <li className="mb-2">
              <Link href="/location1" className="hover:underline">
                Fortis Downtown Resort
              </Link>
            </li>
            <li className="mb-2">
              <Link href="/location2" className="hover:underline">
                Jamuna Future Park
              </Link>
            </li>
            <li className="mb-2">
              <Link href="/location3" className="hover:underline">
                Sarah Resort
              </Link>
            </li>
            <li className="mb-2">
              <Link href="/location4" className="hover:underline">
                Mirpur ECB
              </Link>
            </li>
          </ul>
        </div>

        {/* Second Column */}
        <div className="flex flex-col items-center">
          <img src="TORR-white.png" alt="Logo" className="h-20 mb-4" />
          <h4 className="text-lg font-semibold">Grow & Live</h4>
          <div className="flex w-4/5 items-center space-x-2 text-black mt-4">
            <input className="rounded-none px-2 py-1" type="email" placeholder="Email" />
            <button className="bg-[#7f7f7f] rounded-none px-4 py-1 text-white">Subscribe</button>
          </div>

          <div className="flex space-x-4 mt-4">
            <a href="https://www.facebook.com" aria-label="Facebook">
              <FontAwesomeIcon icon={faFacebook} className="text-white text-2xl" />
            </a>
            <a href="https://www.instagram.com" aria-label="Instagram">
              <FontAwesomeIcon icon={faInstagram} className="text-white text-2xl" />
            </a>
            <a href="https://www.youtube.com" aria-label="YouTube">
              <FontAwesomeIcon icon={faYoutube} className="text-white text-2xl" />
            </a>
          </div>
        </div>

        {/* Third Column */}
        <div className='flex flex-col items-center'>
          <h4 className="text-lg font-semibold mb-4">Address</h4>
          <div>
            123 Main Street<br />
            City, State, ZIP Code<br />
            Country
          </div>
        </div>
      </div>

      {/* Payment Methods */}
      <hr className="my-8 border-gray-700" />

      <div className="container mx-auto flex flex-col ">
        <div className="flex space-x-4 mb-4 justify-center">
          <ul className="flex justify-center gap-4 w-full list list-payment" role="list">
            <li class="list-payment__item">
              <svg class="icon icon--full-color" viewBox="0 0 38 24" xmlns="http://www.w3.org/2000/svg" role="img" width="38" height="24" aria-labelledby="pi-visa">
                <title id="pi-visa">Visa</title>
                <path opacity=".07" d="M35 0H3C1.3 0 0 1.3 0 3v18c0 1.7 1.4 3 3 3h32c1.7 0 3-1.3 3-3V3c0-1.7-1.4-3-3-3z"></path>
                <path fill="#fff" d="M35 1c1.1 0 2 .9 2 2v18c0 1.1-.9 2-2 2H3c-1.1 0-2-.9-2-2V3c0-1.1.9-2 2-2h32"></path>
                <path d="M28.3 10.1H28c-.4 1-.7 1.5-1 3h1.9c-.3-1.5-.3-2.2-.6-3zm2.9 5.9h-1.7c-.1 0-.1 0-.2-.1l-.2-.9-.1-.2h-2.4c-.1 0-.2 0-.2.2l-.3.9c0 .1-.1.1-.1.1h-2.1l.2-.5L27 8.7c0-.5.3-.7.8-.7h1.5c.1 0 .2 0 .2.2l1.4 6.5c.1.4.2.7.2 1.1.1.1.1.1.1.2zm-13.4-.3l.4-1.8c.1 0 .2.1.2.1.7.3 1.4.5 2.1.4.2 0 .5-.1.7-.2.5-.2.5-.7.1-1.1-.2-.2-.5-.3-.8-.5-.4-.2-.8-.4-1.1-.7-1.2-1-.8-2.4-.1-3.1.6-.4.9-.8 1.7-.8 1.2 0 2.5 0 3.1.2h.1c-.1.6-.2 1.1-.4 1.7-.5-.2-1-.4-1.5-.4-.3 0-.6 0-.9.1-.2 0-.3.1-.4.2-.2.2-.2.5 0 .7l.5.4c.4.2.8.4 1.1.6.5.3 1 .8 1.1 1.4.2.9-.1 1.7-.9 2.3-.5.4-.7.6-1.4.6-1.4 0-2.5.1-3.4-.2-.1.2-.1.2-.2.1zm-3.5.3c.1-.7.1-.7.2-1 .5-2.2 1-4.5 1.4-6.7.1-.2.1-.3.3-.3H18c-.2 1.2-.4 2.1-.7 3.2-.3 1.5-.6 3-1 4.5 0 .2-.1.2-.3.2M5 8.2c0-.1.2-.2.3-.2h3.4c.5 0 .9.3 1 .8l.9 4.4c0 .1 0 .1.1.2 0-.1.1-.1.1-.1l2.1-5.1c-.1-.1 0-.2.1-.2h2.1c0 .1 0 .1-.1.2l-3.1 7.3c-.1.2-.1.3-.2.4-.1.1-.3 0-.5 0H9.7c-.1 0-.2 0-.2-.2L7.9 9.5c-.2-.2-.5-.5-.9-.6-.6-.3-1.7-.5-1.9-.5L5 8.2z" fill="#142688"></path>
              </svg>
            </li>
            <li class="list-payment__item">
              <svg class="icon icon--full-color" viewBox="0 0 38 24" xmlns="http://www.w3.org/2000/svg" role="img" width="38" height="24" aria-labelledby="pi-master">
                <title id="pi-master">Mastercard</title>
                <path opacity=".07" d="M35 0H3C1.3 0 0 1.3 0 3v18c0 1.7 1.4 3 3 3h32c1.7 0 3-1.3 3-3V3c0-1.7-1.4-3-3-3z"></path>
                <path fill="#fff" d="M35 1c1.1 0 2 .9 2 2v18c0 1.1-.9 2-2 2H3c-1.1 0-2-.9-2-2V3c0-1.1.9-2 2-2h32"></path>
                <circle fill="#EB001B" cx="15" cy="12" r="7"></circle>
                <circle fill="#F79E1B" cx="23" cy="12" r="7"></circle>
                <path fill="#FF5F00" d="M22 12c0-2.4-1.2-4.5-3-5.7-1.8 1.3-3 3.4-3 5.7s1.2 4.5 3 5.7c1.8-1.2 3-3.3 3-5.7z"></path>
              </svg>
            </li>
            <li class="list-payment__item">
              <svg class="icon icon--full-color" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="pi-american_express" viewBox="0 0 38 24" width="38" height="24">
                <title id="pi-american_express">American Express</title>
                <path fill="#000" d="M35 0H3C1.3 0 0 1.3 0 3v18c0 1.7 1.4 3 3 3h32c1.7 0 3-1.3 3-3V3c0-1.7-1.4-3-3-3Z" opacity=".07"></path>
                <path fill="#006FCF" d="M35 1c1.1 0 2 .9 2 2v18c0 1.1-.9 2-2 2H3c-1.1 0-2-.9-2-2V3c0-1.1.9-2 2-2h32Z"></path>
                <path fill="#FFF" d="M22.012 19.936v-8.421L37 11.528v2.326l-1.732 1.852L37 17.573v2.375h-2.766l-1.47-1.622-1.46 1.628-9.292-.02Z"></path>
                <path fill="#006FCF" d="M23.013 19.012v-6.57h5.572v1.513h-3.768v1.028h3.678v1.488h-3.678v1.01h3.768v1.531h-5.572Z"></path>
                <path fill="#006FCF" d="m28.557 19.012 3.083-3.289-3.083-3.282h2.386l1.884 2.083 1.89-2.082H37v.051l-3.017 3.23L37 18.92v.093h-2.307l-1.917-2.103-1.898 2.104h-2.321Z"></path>
                <path fill="#FFF" d="M1 19.936V11.53h4.62v2.351h2.827v-2.351h4.608v8.395H8.447v-2.346H5.657v2.346H1Z"></path>
                <path fill="#006FCF" d="M1.852 19.012v-6.57h1.61v5.056h3.228v1.514H1.852Z"></path>
                <path fill="#006FCF" d="M9.482 19.012v-1.492h-3.2v-5.078h3.2v-1.493h3.14v8.063H9.482Z"></path>
                <path fill="#006FCF" d="m14.94 19.012 3.093-3.282-3.093-3.289h2.381l1.885 2.083 1.89-2.082H24v.051l-3.017 3.23L24 18.92v.093h-2.302l-1.92-2.103-1.894 2.104h-2.318Z"></path>
                <path fill="#FFF" d="M2.076 13.194v-3.15H9.09v.887H3.804v.864h4.88v.887H3.804v.868h5.287v.887H2.076Zm7.368-3.15h6.792v.887h-5.388v.864h4.868v.887H10.85v.868h5.67v.887h-7.076v-4.393Z"></path>
                <path fill="#006FCF" d="M17.2 13.194v-3.15h2.43l1.16 1.463 1.155-1.463h2.416v.051l-1.95 2.136L24.35 13.2v.094h-2.228l-1.195-1.446-1.202 1.446H17.2Z"></path>
                <path fill="#FFF" d="M18.05 11.508h1.11l.805 1.012.8-1.012h1.12v1.099l-.894.978.906 1.1h-1.1l-.833-1.018-.84 1.018h-1.084v-.1l.928-1.112-.918-.966v-.091Z"></path>
              </svg>
            </li>
            <li class="list-payment__item">
              <svg class="icon icon--full-color" viewBox="0 0 38 24" xmlns="http://www.w3.org/2000/svg" role="img" width="38" height="24" aria-labelledby="pi-airtel_money">
                <title id="pi-airtel_money">Airtel Money</title>
                <path opacity=".07" d="M35 0H3C1.3 0 0 1.3 0 3v18c0 1.7 1.4 3 3 3h32c1.7 0 3-1.3 3-3V3c0-1.7-1.4-3-3-3z"></path>
                <path fill="#fff" d="M35 1c1.1 0 2 .9 2 2v18c0 1.1-.9 2-2 2H3c-1.1 0-2-.9-2-2V3c0-1.1.9-2 2-2h32"></path>
                <path fill="#E40000" d="M14.2 9.1c-.3 0-.5.1-.7.3-.5.5-.6 1.4-.6 2.1v2.3c.1.5 0 .8-.1 1.1s-.2.5-.4.7-.4.3-.6.3c-.3 0-.4-.1-.6-.4-.1-.2-.1-.5-.1-.8V8.7c0-.5 0-.9.1-1.1.1-.2.3-.4.6-.4.3 0 .5.2.6.4.1.3.1.7.1 1.1v.3c.3-.3.7-.6 1.2-.7.4-.1.9 0 1.2.3.4.3.7.8.7 1.4v2.8c-.1.5-.2.9-.5 1.2-.4.5-1 .7-1.6.7-.4 0-.9-.1-1.3-.3-.4-.2-.7-.6-.9-1V12c0-.3 0-.6.1-.8.1-.2.2-.4.4-.5.2-.1.5-.2.7 0 .2.1.3.3.4.5v.2c0 .1 0 .1.1.2 0 .1.1.1.2.1.2 0 .3-.1.4-.2.1-.2.1-.5.1-.7 0-.3-.1-.5-.2-.7s-.2-.3-.3-.3zm.8 1.2c-.2 0-.3 0-.3.2-.1.2-.1.4-.1.6v.2c0 .2 0 .3.1.5.1.1.2.2.3.2s.2 0 .3-.2c.1-.1.1-.2.1-.3V11c0-.2 0-.3-.1-.4 0-.2-.1-.3-.3-.3zm2.8 3.3v-5c.2-.2.4-.4.7-.5.4-.2.9-.2 1.3 0 .4.2.7.6.8 1 .1.4 0 .9 0 1.3s0 .9.1 1.3c0 .2.1.4.3.5.1.2.3.2.5.2.2 0 .4-.1.5-.2.1-.1.3-.3.3-.5v-2.5c0-.2 0-.4.1-.6.1-.2.2-.4.4-.6.2-.2.4-.2.6-.2.3 0 .4.1.5.3.1.2.1.4.1.6v2.5c0 .4 0 .8-.2 1.1-.1.3-.4.5-.6.7-.6.4-1.4.4-2.1.2-.2-.1-.5-.2-.7-.3-.1-.1-.3-.2-.4-.3-.1 0-.1 0-.2-.1v.2c0 .3 0 .7-.1 1-.1.3-.2.6-.4.8-.2.3-.5.5-.8.7-.3.2-.7.2-1 .2-.2 0-.5 0-.7-.1-.2-.1-.5-.1-.7-.2v-1c.4 0 .8.1 1.1 0 .4-.1.7-.3.9-.6.2-.3.3-.6.3-1zm3.3-4.7c-.1-.3-.4-.5-.7-.5-.3 0-.5.2-.7.4-.1.3-.1.6-.1.9v1.3c0 .2 0 .4.1.6.1.2.2.4.4.5.2.1.5.1.7.1.3 0 .5-.2.7-.4.2-.3.2-.7.2-1v-1c0-.2 0-.5-.1-.7v-.2z"></path>
                <path fill="#6A6A6A" d="M26.4 8.8c0-.3-.1-.6-.2-.9-.2-.2-.5-.4-.8-.5-.4-.1-.8-.1-1.2-.1-.5 0-1.1 0-1.7.2-.5.1-1 .2-1.5.4-.4.2-.9.4-1.4.6s-1 .5-1.6.8c-.4.2-.9.3-1.4.3-.4.1-.8.1-1.2.2-.2 0-.4.1-.6.1h-.4c.1-.1.1-.2.2-.2 0-.1.1-.1.1-.2s.1-.2.2-.3l.3-.3.3-.3c.2-.2.4-.4.6-.7.1-.1.3-.2.3-.3.1-.1.2-.2.2-.3.1-.1.2-.2.3-.2.1-.1.2-.2.3-.3.1-.1.2-.2.2-.3.1-.1.2-.2.3-.3.1-.1.2-.2.2-.3.1-.1.2-.2.2-.3.2-.3.3-.7.3-1.1 0-.4 0-.7-.2-1.1-.1-.3-.4-.6-.6-.8-.3-.2-.6-.3-1-.3s-.8 0-1.1.1c-.4.1-.8.3-1.1.5-.3.2-.7.5-1 1-.3.4-.5.8-.6 1.3-.1.5-.1 1-.1 1.6v.6c0 .1 0 .1-.1.2 0 .1-.1.1-.1.2l-.1.2c-.1.2-.2.3-.4.5 0 0 0 .1-.1.1 0 .1-.1.1-.1.2s-.1.1-.2.2h-.1c0-.1 0-.1.1-.2 0 0 .1-.1.1-.2l.1-.1.1-.1c.1-.1.2-.2.2-.3l.1-.2c0-.1.1-.2.1-.3 0-.1.1-.2.1-.3s.1-.2.1-.3c.1-.4.1-.8.1-1.1 0-.3 0-.6-.1-.8 0-.3-.1-.5-.3-.8 0-.2-.3-.4-.4-.6-.2-.2-.4-.3-.6-.4-.4-.1-.8 0-1.1.1-.3.2-.6.5-.7.8-.2.4-.3.9-.3 1.4v.3c0 .2.1.4.1.5v.1s0 .1.1.1v.1c.2-.2.4-.4.7-.5.3-.1.7-.1 1-.1.3 0 .7.1 1.1.2.4.1.7.3 1.1.5.3.2.7.4 1 .7.3.3.7.5 1 .7.3.2.7.4 1 .5.3.1.7.2 1 .2.4.1.7.1 1.1.1.3 0 .7-.1 1-.2.3-.1.6-.2.9-.4.3-.1.6-.3.8-.5.2-.2.4-.4.5-.7.2-.2.2-.6.2-.9"></path>
              </svg>
            </li>
          </ul>


        </div>

        {/* Legal and Contact Information */}
        <div className="flex justify-center gap-8">
          <Link href="/refund-policy" className="hover:underline">Refund Policy</Link>
          <Link href="/privacy-policy" className="hover:underline">Privacy Policy</Link>
          <Link href="/terms-of-service" className="hover:underline">Terms of Service</Link>
          <Link href="/shipping-policy" className="hover:underline">Shipping Policy</Link>
          <Link href="/contact-information" className="hover:underline">Contact Information</Link>
        </div>
      </div>

      <div className="text-center mt-8">
        <p>© 2024, TORR</p>
      </div>
    </footer>
  );
};

export default Footer;
