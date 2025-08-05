// components/Header.jsx
import React from 'react';

const Header = () => {
  return (
    <header className="flex items-center justify-between px-8 py-4 shadow-md bg-white">
      {/* Logo */}
      <div className="flex items-center space-x-2">
        <img src="/logo.png" alt="Logo" className="h-10 w-auto" />
        <span className="text-xl font-bold">MySite</span>
      </div>

      {/* Navigation Links */}
      <nav>
        <ul className="flex space-x-6">
          <li><a href="#home" className="hover:text-blue-600">Home</a></li>
          <li><a href="#about" className="hover:text-blue-600">About</a></li>
          <li><a href="#services" className="hover:text-blue-600">Services</a></li>
          <li><a href="#portfolio" className="hover:text-blue-600">Portfolio</a></li>
          <li><a href="#blog" className="hover:text-blue-600">Blog</a></li>
          <li><a href="#contact" className="hover:text-blue-600">Contact</a></li>
          <li><a href="#faq" className="hover:text-blue-600">FAQ</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
