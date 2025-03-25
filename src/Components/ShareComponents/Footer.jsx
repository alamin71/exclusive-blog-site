import React from "react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 dark:bg-gray-800 text-white py-6 mt-10">
      <div className="container mx-auto text-center px-4">
        <p className="text-lg font-semibold">
          &copy; 2025 Exclusive Blogs. All Rights Reserved.
        </p>
        <div className="flex flex-col md:flex-row justify-center mt-4 space-y-2 md:space-y-0 md:space-x-4">
          <a href="#" className="hover:text-blue-400">
            Privacy Policy
          </a>
          <a href="#" className="hover:text-blue-400">
            Terms of Service
          </a>
          <a href="#" className="hover:text-blue-400">
            Contact Us
          </a>
        </div>
        <div className="mt-4">
          <p>Follow us on:</p>
          <div className="flex justify-center space-x-4 mt-2">
            <a href="#" className="text-2xl hover:text-blue-400">
              <FaFacebook />
            </a>
            <a href="#" className="text-2xl hover:text-blue-400">
              <FaTwitter />
            </a>
            <a href="#" className="text-2xl hover:text-pink-400">
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
