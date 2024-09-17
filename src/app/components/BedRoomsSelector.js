"use client"; // Add this line to make it a Client Component

import { useState } from 'react';

const BedroomsMultiSelector = () => {
  const [selectedOptions, setSelectedOptions] = useState([]); // Array to track multiple selections

  const options = ['1', '2', '3', '4', '5+']; // Bedroom options

  const handleSelect = (option) => {
    if (selectedOptions.includes(option)) {
      // If the option is already selected, deselect it
      setSelectedOptions(selectedOptions.filter((item) => item !== option));
    } else {
      // If the option is not selected, add it to the selection
      setSelectedOptions([...selectedOptions, option]);
    }
  };

  return (
    <div style={{ marginLeft: 20 }}>
      <h5 className="text-gray-500">Bedrooms</h5>
      <div className="flex  mt-2"> {/* Flex with space between boxes */}
        {options.map((option) => (
          <div
            key={option}
            className={`border border-gray-700 flex justify-center items-center text-center h-10 w-10 cursor-pointer ${
              selectedOptions.includes(option) ? 'bg-yellow-600 text-white' : 'transparent'
            }`} 
            onClick={() => handleSelect(option)} // Handle click to select/deselect the box
          >
            {option}
          </div>
        ))}
      </div>
    </div>
  );
};

export default BedroomsMultiSelector;
