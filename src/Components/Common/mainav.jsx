import React, { useState } from 'react';
import school from '../images/school.png';
import { FaBars, FaTimes } from 'react-icons/fa'; // Import hamburger and close icons

function Mainav() {
  const [menuOpen, setMenuOpen] = useState(false);

  // Toggle the hamburger menu
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="bg-white h-[74px] w-full px-[20px] sticky top-0 z-50">
      <div className="flex justify-between items-center">
        {/* Left Section: Logo */}
        <div className="flex items-center justify-center py-2 space-x-[15px] ml-[20px]">
          <img
            className="h-[64px] w-[70px] sm:h-[50px] sm:w-[55px] md:h-[64px] md:w-[70px]"
            src={school}
            alt="School Logo"
          />
        </div>

        {/* Middle Section: Navigation Links */}
        <div className="flex items-center space-x-[25px] hidden md:flex">
          <div className="flex items-center">
            <p className="text-black text-sm cursor-pointer font-poppins font-semibold">Who We Are</p>
            <svg className="w-4 h-4 ml-1 text-black" fill="black" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M19 9l-7 7-7-7"></path>
            </svg>
          </div>

          <div className="flex items-center">
            <p className="text-black text-sm cursor-pointer font-poppins font-semibold">What We Do</p>
            <svg className="w-4 h-4 ml-1 text-black" fill="black" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M19 9l-7 7-7-7"></path>
            </svg>
          </div>

          <div className="flex items-center">
            <p className="text-black text-sm cursor-pointer font-poppins font-semibold">Achievements</p>
            <svg className="w-4 h-4 ml-1 text-black" fill="black" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M19 9l-7 7-7-7"></path>
            </svg>
          </div>

          <div className="flex items-center">
            <p className="text-black text-sm cursor-pointer font-poppins font-semibold">Media Centre</p>
            <svg className="w-4 h-4 ml-1 text-black" fill="black" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M19 9l-7 7-7-7"></path>
            </svg>
          </div>
        </div>

        {/* Hamburger Menu for Mobile */}
        <div className="md:hidden flex items-center space-x-[20px] mr-[40px]">
          <button onClick={toggleMenu} className="text-black">
            {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>

        {/* Right Section: Donate Button */}
        <div className="flex items-center space-x-[20px] mr-[40px] hidden md:flex">
          <button className="bg-[#B7302A] p-2 text-white font-poppins border-none rounded-lg">
            Donate Now
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden ${menuOpen ? 'block' : 'hidden'} absolute top-[74px] left-0 w-full bg-white shadow-lg`}>
        <div className="flex flex-col items-center py-4">
          <p className="text-black text-sm cursor-pointer font-poppins font-semibold py-2">Who We Are</p>
          <p className="text-black text-sm cursor-pointer font-poppins font-semibold py-2">What We Do</p>
          <p className="text-black text-sm cursor-pointer font-poppins font-semibold py-2">Achievements</p>
          <p className="text-black text-sm cursor-pointer font-poppins font-semibold py-2">Media Centre</p>
          <button className="bg-[#B7302A] p-2 text-white font-poppins border-none rounded-lg mt-4">
            Donate Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default Mainav;
