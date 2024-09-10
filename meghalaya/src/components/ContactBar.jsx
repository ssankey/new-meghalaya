import React from 'react';
import { FiPhoneCall } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const ContactBar = () => {
    return (
      <div className="bg-gray-800 sm:py-1 px-4 text-white text-sm flex flex-col sm:flex-row justify-between items-center sm:gap-0 fixed top-0 w-full z-60">
        <div className="text-center sm:text-left sm:flex sm:items-center sm:gap-4">
          <div className="flex items-center gap-2 sm:mr-4">
            <FiPhoneCall />
            <span>+91 87947 95255</span>
          </div>
          <div className="flex items-center gap-2">
            <FiPhoneCall />
            <span>+91 81198 29466</span>
          </div>
          <div className="flex items-center gap-2 sm:ml-4">
            <span>services@meghalayaintothemountains.com</span>
          </div>
        </div>
        <Link to={'/contact-us'}>
          <button className="bg-green-900 px-4 py-2 font-black sm:inline-block hidden rounded-md">
            Submit Enquiry
          </button>
        </Link>
      </div>
    );
  };
  

export default ContactBar;
