import React from 'react';
import technicalOneLogo from '../assets/technical-one.jpg'; // adjust the path if needed

const Footer = () => {
  return (
    <footer className="w-full px-4 py-6 bg-gradient-to-br from-purple-100 to-purple-300 shadow-inner mt-10">
      <div className="max-w-7xl mx-auto flex flex-col items-center justify-center gap-4 text-center">
        
        {/* Text */}
        <p className="text-sm text-gray-800 font-medium">
          Made with 💜 by{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-fuchsia-600 font-semibold">
            Technical One
          </span>
        </p>

        {/* Logo */}
        <a
          href="https://www.linkedin.com/company/technical-one"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:scale-105 transition-transform"
        >
          <img
            src={technicalOneLogo}
            alt="Technical One Logo"
            className="w-10 h-10 rounded-full border border-purple-500 shadow-md"
          />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
