import React, { useState } from 'react';
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import logo from "./assets/logo.png";
import heroBg from "./assets/hero-bg.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-black w-full py-4" style={{ backgroundImage: `url(${heroBg})`, backgroundSize: "200%", backgroundPosition: "50% 15%" }}>
      <nav className="flex justify-between items-center p-[20px] mx-auto border-b-2 border-b-[#b69942]">
        {/* Logo */}
        <img src={logo} className="h-10" alt="Logo" />

        {/* Hamburger Menu for Mobile */}
        <button
          onClick={toggleMenu}
          className="sm:hidden text-white focus:outline-none"
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
        <ul className="hidden sm:flex space-x-8">
          <Link to="/" className="text-white hover:text-[#b69942] cursor-pointer">Home</Link>
          <a href="#about" className="text-white hover:text-[#b69942] cursor-pointer">About</a>
          <a href="#testimonial" className="text-white hover:text-[#b69942] cursor-pointer">Testimonial</a>
          <a href="#resources" className="text-white hover:text-[#b69942] cursor-pointer">Free Resources</a>
          <Link to="/newsletter" className="text-white hover:text-[#b69942] cursor-pointer">Newsletter</Link>
        </ul>

        {/* Contact Button */}
        <button className="hidden sm:block bg-[#b69942] hover:bg-yellow-600 text-black px-4 py-2 rounded">
          Contact Us
        </button>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="sm:hidden mt-4">
          <ul className="flex flex-col space-y-4 text-center">
            <Link to="/" className="text-white hover:text-[#b69942] cursor-pointer">Home</Link>
            <a href="#about" className="text-white hover:text-[#b69942] cursor-pointer">About</a>
            <a href="#testimonial" className="text-white hover:text-[#b69942] cursor-pointer">Testimonial</a>
            <a href="#resources" className="text-white hover:text-[#b69942] cursor-pointer">Free Resources</a>
            <Link to="/newsletter" className="text-white hover:text-[#b69942] cursor-pointer">Newsletter</Link>
          </ul>
          <div className="mt-4 flex justify-center">
            <button className="bg-[#b69942] hover:bg-yellow-600 text-black px-4 py-2 rounded">
              Contact Us
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
