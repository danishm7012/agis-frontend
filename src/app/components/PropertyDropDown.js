"use client"; // Add this line to make it a Client Component

import { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa'; // Chevron icons

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
    <div style={{ marginLeft: 20 }}>
      <h5 className="text-gray-500">Property Type</h5>

      {/* Dropdown Container */}
      <div
        className="border border-gray-700 cursor-pointer flex items-center justify-between px-4"
        style={{
          height: 42,
          width: 230,
          marginTop: 6,
          position: 'relative', // Ensure dropdown stays aligned with parent
        }}
        onClick={toggleDropdown}
      >
        {/* Left-aligned text */}
        <h6 className="text-left">{selectedOption}</h6>

        {/* Chevron icon on the right */}
        {isOpen ? <FaChevronUp className="text-gray-500" /> : <FaChevronDown className="text-gray-500" />}
      </div>

      {/* Dropdown Menu */}
      {isOpen && (
        <div
          className="absolute mt-2 bg-black text-white border border-gray-700 shadow-lg"
          style={{ width: 230, zIndex: 10 }} // Dropdown menu styling
        >
          <div
            className="px-4 py-2 hover:bg-gray-800 cursor-pointer"
            onClick={() => handleOptionClick('Appartment')}
          >
            Appartment
          </div>
          <div
            className="px-4 py-2 hover:bg-gray-800 cursor-pointer"
            onClick={() => handleOptionClick('Villas')}
          >
            Villas
          </div>
          <div
            className="px-4 py-2 hover:bg-gray-800 cursor-pointer"
            onClick={() => handleOptionClick('PentHouses')}
          >
            PentHouses
          </div>
        </div>
      )}
    </div>
  );
};

export default PropertyTypeDropdown;

