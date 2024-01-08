import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-gray-800 text-white p-4 flex items-center justify-between">
      {/* Hamburger Icon for smaller screens */}
      <button onClick={toggleMenu} className="sm:hidden mr-4">
        <svg
          className="w-6 h-6"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M4 6h16M4 12h16M4 18h16"></path>
        </svg>
      </button>

      {/* Navigation Links - visible on larger screens */}
      <nav className="hidden sm:flex">
        <Link
          to="/whats-new"
          className="px-4 py-2 text-white hover:bg-gray-700"
        >
          What's New
        </Link>
        <Link to="/trending" className="px-4 py-2 text-white hover:bg-gray-700">
          Trending
        </Link>
      </nav>

      {/* Menu items for smaller screens */}
      {isMenuOpen && (
        <div className="absolute top-16 left-0 w-full bg-gray-800 shadow-lg sm:hidden">
          <nav className="flex flex-col">
            <Link
              to="/whats-new"
              className="px-4 py-2 text-white hover:bg-gray-700"
              onClick={toggleMenu}
            >
              What's New
            </Link>
            <Link
              to="/trending"
              className="px-4 py-2 text-white hover:bg-gray-700"
              onClick={toggleMenu}
            >
              Trending
            </Link>
          </nav>
        </div>
      )}

      {/* Rest of the header content */}
    </header>
  );
};

export default Header;
