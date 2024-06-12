import React from 'react';
import { FaLinkedin, FaInstagram } from 'react-icons/fa';

const Footer = ({ className = "" }) => {
  return (
    <footer className={`self-stretch flex flex-col items-center justify-center py-4 px-10 box-border w-full text-center text-lg text-black font-righteous ${className}`}>
      {/* Grey line */}
      <div className="w-full border-t border-gray-300 mb-4" style={{ height: '1px' }}></div>
      
      <div className="w-full flex flex-col md:flex-row items-center justify-between text-sm font-heading">
        <div className="flex flex-row items-center justify-start gap-4 mb-4 md:mb-0">
          <a href="https://www.linkedin.com" aria-label="LinkedIn" className="text-2xl hover:text-gray-400">
            <FaLinkedin />
          </a>
          <a href="https://www.instagram.com" aria-label="Instagram" className="text-2xl hover:text-gray-400">
            <FaInstagram />
          </a>
        </div>
        
        <div className="flex flex-col md:flex-row items-center justify-center gap-4">
          <a href="/about" className="hover:text-gray-400">About</a>
          <a href="/terms" className="hover:text-gray-400">Terms & Conditions</a>
          <a href="/privacy" className="hover:text-gray-400">Privacy Policy</a>
          <a href="/contact" className="hover:text-gray-400">Contact Us</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
