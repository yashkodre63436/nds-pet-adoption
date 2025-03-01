import React, { useState } from "react";
import { Link } from "react-router-dom";

const CustomNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-900 text-white shadow-md">
      <div className="container mx-auto flex justify-between items-center p-4">
        {/* Brand */}
        <Link to="/" className="text-2xl font-bold text-white ">
          Pet Adoption
        </Link>

        {/* Hamburger Menu for Mobile */}
        <button
          className="lg:hidden text-white focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? "✖" : "☰"}
        </button>

        {/* Navbar Links */}
        <div className={`lg:flex items-center space-x-6 ${isOpen ? "block" : "hidden"} lg:block`}>
          <Link to="/" className="text-white hover:text-white transition">Home</Link>
          <Link to="/about" className="text-white hover:text-white transition">About</Link>
          <Link to="/adoption" className="text-white hover:text-white transition">Pet Adoption</Link>
          <Link to="/sheltermap" className="text-white hover:text-white transition">Shelter Map</Link>
          <Link to="/profile" className="text-white hover:text-white transition">Profile</Link>
        </div>
      </div>
    </nav>
  );
};

export default CustomNavbar;
