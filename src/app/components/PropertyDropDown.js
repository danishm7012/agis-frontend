"use client"; // Add this line to make it a Client Component

import { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

const PropertyTypeDropdown = () => {
  const [isOpen, setIsOpen] = useState(false); // To manage the dropdown state
  const [selectedOption, setSelectedOption] = useState('Any'); // To track selected option

  const toggleDropdown = () => {
    setIsOpen(!isOpen); // Toggle the dropdown open/close
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option); // Set the selected option
    setIsOpen(false); // Close the dropdown after selecting
  };

  return (
    <div className="ml-4 sm:ml-4 md:ml-4 lg:ml-4 mt-4 md:mt-0">
      <h5 className="text-gray-500 text-sm sm:text-base md:text-lg">Property Type</h5>

      {/* Dropdown Container */}
      <div
        className="border border-gray-700 cursor-pointer flex items-center justify-between px-3 py-1 mt-2 md:mt-3 bg-black text-white"
        style={{
          width: '100%', 
          maxWidth: '230px', // Set max width
          position: 'relative',
        }}
        onClick={toggleDropdown}
      >
        {/* Left-aligned text */}
        <h6 className="text-left text-sm sm:text-base md:text-lg">{selectedOption}</h6>

        {/* Chevron icon on the right */}
        {isOpen ? <FaChevronUp className="text-gray-500" /> : <FaChevronDown className="text-gray-500" />}
      </div>

      {/* Dropdown Menu */}
      {isOpen && (
        <div
          className="absolute mt-2 bg-black text-white border border-gray-700 shadow-lg w-full max-w-[230px] z-10"
        >
          <div
            className="px-4 py-2 text-sm sm:text-base md:text-lg hover:bg-gray-800 cursor-pointer"
            onClick={() => handleOptionClick('Buy')}
          >
            Buy
          </div>
          <div
            className="px-4 py-2 text-sm sm:text-base md:text-lg hover:bg-gray-800 cursor-pointer"
            onClick={() => handleOptionClick('Villas')}
          >
            Villas
          </div>
          <div
            className="px-4 py-2 text-sm sm:text-base md:text-lg hover:bg-gray-800 cursor-pointer"
            onClick={() => handleOptionClick('Rent')}
          >
            Rent
          </div>
        </div>
      )}
    </div>
  );
};

export default PropertyTypeDropdown;
