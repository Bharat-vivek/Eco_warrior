// src/components/Navbar.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="fixed top-0 left-0 w-full z-50 flex items-center justify-between p-4 bg-gray-800 text-white">
            {/* Logo and Menu Toggle */}
            <div className="flex items-center justify-between w-full md:w-auto">
                {/* Logo */}
                {!isOpen && (
                    <div className="flex items-center justify-center w-20 h-20 rounded-full overflow-hidden bg-gray-200" id="logo">
                        <img src="logo.jpg" alt="Logo" className="w-full h-full object-cover" />
                    </div>
                )}

                {/* Mobile Menu Toggle */}
                <button
                    className="md:hidden p-2 rounded-md hover:bg-gray-700 ml-auto"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    ☰
                </button>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-4">
                <Link to="/Home" className="px-2 hover:text-gray-400">Home</Link>
                <Link to="#about" className="px-2 hover:text-gray-400">About Us</Link>
                <Link to="#services" className="px-2 hover:text-gray-400">Services</Link>
                <Link to="#career" className="px-2 hover:text-gray-400">Career</Link>
                <Link to="#contact" className="px-2 hover:text-gray-400">Contact Us</Link>
                <Link to="#reports" className="px-2 hover:text-gray-400">Reports</Link>
                <Link to="#blogs" className="px-2 hover:text-gray-400">Blogs</Link>
                <Link to="/Login" className="px-2 hover:text-gray-400">Login</Link>
                <Link to="#shop" className="px-2 hover:text-gray-400">Shop</Link>
            </nav>

            {/* Search Input for Desktop */}
            <div className="hidden md:flex items-center">
                <input
                    type="text"
                    placeholder="Search..."
                    className="p-2 rounded-md text-gray-800"
                    tabIndex="0"
                />
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <nav
                    className="absolute top-0 left-0 w-full h-screen bg-gray-800 text-white flex flex-col space-y-4 p-6 md:hidden"
                >
                    <button
                        className="self-end p-2 hover:bg-gray-700 rounded-md"
                        onClick={() => setIsOpen(false)}
                    >
                        ✕
                    </button>
                    <Link to="/Home" className="px-2 hover:text-gray-400">Home</Link>
                    <Link to="#about" className="px-2 hover:text-gray-400">About Us</Link>
                    <Link to="#services" className="px-2 hover:text-gray-400">Services</Link>
                    <Link to="#career" className="px-2 hover:text-gray-400">Career</Link>
                    <Link to="#contact" className="px-2 hover:text-gray-400">Contact Us</Link>
                    <Link to="#reports" className="px-2 hover:text-gray-400">Reports</Link>
                    <Link to="#blogs" className="px-2 hover:text-gray-400">Blogs</Link>
                    <Link to="#Login" className="px-2 hover:text-gray-400">Login</Link>
                    <Link to="#shop" className="px-2 hover:text-gray-400">Shop</Link>
                    <input
                        type="text"
                        placeholder="Search..."
                        className="p-2 mt-4 rounded-md text-gray-800"
                        tabIndex="0"
                    />
                </nav>
            )}
        </header>
    );
};

export default Navbar;
