// src/components/Navbar.jsx
import React, { useState } from 'react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="fixed top-0 left-0 w-full z-50 flex items-center justify-between p-4 bg-gray-800 text-white">
            <div className="text-2xl font-bold">
                YourLogo
            </div>
            <nav className="hidden md:flex space-x-4">
                <a href="#home" className="hover:text-gray-300">Home</a>
                <a href="#about" className="hover:text-gray-300">About Us</a>
                <a href="#services" className="hover:text-gray-300">Services</a>
                <a href="#career" className="hover:text-gray-300">Career</a>
                <a href="#contact" className="hover:text-gray-300">Contact Us</a>
                <a href="#reports" className="hover:text-gray-300">Reports</a>
                <a href="#blogs" className="hover:text-gray-300">Blogs</a>
                <a href="#shop" className="hover:text-gray-300">Shop</a>
            </nav>
            <div className="hidden md:flex items-center">
                <input
                    type="text"
                    placeholder="Search..."
                    className="p-2 rounded-md text-black"
                />
            </div>
            {/* Mobile Menu Toggle */}
            <button
                className="md:hidden p-2 rounded-md hover:bg-gray-700"
                onClick={() => setIsOpen(!isOpen)}
            >
                ☰
            </button>
            {/* Mobile Menu */}
            {isOpen && (
                <nav className="flex flex-col absolute top-16 left-0 w-full bg-gray-800 space-y-2 p-4 md:hidden">
                    <a href="#home" className="hover:text-gray-300">Home</a>
                    <a href="#about" className="hover:text-gray-300">About Us</a>
                    <a href="#services" className="hover:text-gray-300">Services</a>
                    <a href="#career" className="hover:text-gray-300">Career</a>
                    <a href="#contact" className="hover:text-gray-300">Contact Us</a>
                    <a href="#reports" className="hover:text-gray-300">Reports</a>
                    <a href="#blogs" className="hover:text-gray-300">Blogs</a>
                    <a href="#shop" className="hover:text-gray-300">Shop</a>
                    <input
                        type="text"
                        placeholder="Search..."
                        className="p-2 mt-2 rounded-md text-black"
                    />
                </nav>
            )}
        </header>
    );
};

export default Navbar;
