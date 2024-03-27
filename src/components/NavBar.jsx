// src/components/Navbar.jsx

import React, { useState, useEffect } from "react";
import logo from "../assets/logo.svg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 80) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={` bg-slate-950 shadow-md ${isSticky ? 'sticky top-0 shadow-md z-50' : ''}`}>
      <div className="container mx-auto px-4 ">
        <div className="flex justify-between items-center py-4 ">
          <div className="flex items-center ">
            <div className="text-white font-bold ">
              <img src={logo} alt="" />{" "}
            </div>
            <div className="text-white">
              anmay | PORTFO<span className="text-rose-600">LIO</span>
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-4 text-white">
            <a href="#About">About</a>
            <a href="#experience">Experience</a>
            <a href="#project">Projects</a>
            <a href="#contact">Contact</a>

            <a
              type="button"
              href="https://drive.google.com/file/d/1IL-AadcLDLQPoyZ6Owd6C4RdhI_mD0i1/view?usp=sharing"  target="_blank"
              class="text-white bg-gradient-to-r from-purple-500 to-pink-500 bg-transparent hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
            >
              Resume
            </a>
          </div>
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-white">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={
                    isOpen
                      ? "M6 18L18 6M6 6l12 12"
                      : "M4 6h16M7 10h13M4 14h16m-6 4h6"
                  }
                ></path>
              </svg>
            </button>
          </div>
        </div>
        {isOpen && (
          <div className="md:hidden pb-4">
            <a href="#About" className="block text-white py-2 px-1">
              About
            </a>
            <a href="#" className="block text-white py-2 px-1">
              Experience
            </a>
            <a href="#" className="block text-white py-2 px-1">
              Projects
            </a>
            <a href="#" className="block text-white py-2 px-1">
              Contact
            </a>
            <a
              type="button"
              href="https://drive.google.com/file/d/1IL-AadcLDLQPoyZ6Owd6C4RdhI_mD0i1/view?usp=sharing"  target="_blank"
              class="text-white bg-gradient-to-r from-purple-500 to-pink-500 bg-transparent hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
            >
              Resume
            </a>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
