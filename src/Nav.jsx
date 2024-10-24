import React, { useState } from 'react';
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import logo from "./assets/logo.png";
import heroBg from "./assets/hero-bg.png";
import contactUs from "./assets/contact-us.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLinkClick = () => {
    setIsOpen(false); // Close the menu when a link is clicked
  };

  return (
    <header
      className="fixed w-full top-0 z-50 bg-black py-4"
      style={{
        backgroundImage: `url(${heroBg})`,
        backgroundSize: "200%",
        backgroundPosition: "50% 15%",
      }}
    >
      <nav className="flex justify-between items-center p-5 mx-auto border-b-2 border-b-[#b69942]">
        {/* Logo */}
        <img src={logo} className="h-10" alt="HeallyHub Logo" loading="lazy" />

        {/* Hamburger Menu for Mobile */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-white focus:outline-none"
          aria-label="Toggle Menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            )}
          </svg>
        </button>

        {/* Menu Items */}
        <ul className="hidden md:flex space-x-8">
          <Link to="/" onClick={handleLinkClick} className="text-white hover:text-[#b69942] cursor-pointer">Home</Link>
          <a href="#about" onClick={handleLinkClick} className="text-white hover:text-[#b69942] cursor-pointer">About</a>
          <a href="#testimonial" onClick={handleLinkClick} className="text-white hover:text-[#b69942] cursor-pointer">Testimonial</a>
          <a href="#resources" onClick={handleLinkClick} className="text-white hover:text-[#b69942] cursor-pointer">Free Resources</a>
          <Link to="/newsletter" onClick={handleLinkClick} className="text-white hover:text-[#b69942] cursor-pointer">Newsletter</Link>
        </ul>

        {/* Contact Button */}
        <a href='#contact' className="hidden md:block bg-[#b69942] hover:bg-yellow-600 cursor-pointer text-black px-4 py-2 rounded">
          <img src={contactUs} alt="Contact Us" loading="lazy" />
        </a>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed inset-x-0 top-0 transform ${isOpen ? 'translate-y-0' : '-translate-y-full'} transition-transform duration-500 ease-in-out bg-black text-white shadow-lg z-40 p-8`}
      >
        <ul className="flex flex-col space-y-4 text-center">
          <Link to="/" onClick={handleLinkClick} className="text-white hover:text-[#b69942] cursor-pointer">Home</Link>
          <a href="#about" onClick={handleLinkClick} className="text-white hover:text-[#b69942] cursor-pointer">About</a>
          <a href="#testimonial" onClick={handleLinkClick} className="text-white hover:text-[#b69942] cursor-pointer">Testimonial</a>
          <a href="#resources" onClick={handleLinkClick} className="text-white hover:text-[#b69942] cursor-pointer">Free Resources</a>
          <Link to="/newsletter" onClick={handleLinkClick} className="text-white hover:text-[#b69942] cursor-pointer">Newsletter</Link>
        </ul>
        <div className="mt-4 flex justify-center">
          <a href='#contact' className="bg-[#b69942] hover:bg-yellow-600 cursor-pointer text-black px-4 py-2 rounded" onClick={handleLinkClick}> 
            <img src={contactUs} alt="Contact Us" loading="lazy" />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
