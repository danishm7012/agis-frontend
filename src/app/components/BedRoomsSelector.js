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
    <div className="ml-4 sm:ml-4 md:ml-4 lg:ml-4 mt-4 md:mt-0">
      <h5 className="text-gray-500 text-sm sm:text-base md:text-lg">Bedrooms</h5>
      <div className="flex flex-wrap mt-2 justify-center md:justify-start"> {/* Flex with space between boxes */}
        {options.map((option) => (
          <div
            key={option}
            className={`border border-gray-700 flex justify-center items-center text-center h-10 w-10 sm:h-10 sm:w-10 md:h-10 md:w-10 cursor-pointer m-1 ${
              selectedOptions.includes(option) ? 'bg-yellow-600 text-white' : 'bg-transparent'
            }`} 
            onClick={() => handleSelect(option)} // Handle click to select/deselect the box
          >
            <span className="text-sm sm:text-base md:text-lg">{option}</span> {/* Responsive text size */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default BedroomsMultiSelector;
