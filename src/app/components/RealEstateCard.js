"use client"; // Add this line to make it a Client Component
// import React from 'react'
import Image from 'next/image';

const RealEstateCard = () => {
  return (
    <div className="bg-black text-white rounded-lg overflow-hidden w-72 m-5 shadow-lg">
      {/* Image Section */}
      <div className="relative">
        <Image
          src="https://img.freepik.com/premium-photo/beautiful-modern-house-poland-with-white-walls-black-roof-large-windows-flowers_1097265-114073.jpg" // Replace with your own image path
          alt="The Address Sky View Tower"
          width={500}
          height={300}
          className="w-full h-auto border-b border-gray-700"
        />
        <div className="absolute top-2 right-2 flex gap-2">
          <button className="bg-black bg-opacity-60 text-white p-1 rounded-full">+</button>
          <button className="bg-black bg-opacity-60 text-white p-1 rounded-full">⋮</button>
        </div>
      </div>

      {/* Property Details */}
      <div className="p-4">
        <h2 className="text-xl mb-2 text-white">The Address Sky View Tower 2</h2>
        <p className="flex items-center text-gray-400 text-sm mb-1">
          📍 The Address Sky View
        </p>
        <p className="text-sm text-gray-400 mb-3">Apartment</p>

        {/* Property Features */}
        <div className="flex gap-3 mb-4 text-sm text-gray-400">
          <span>🛏️ 2</span>
          <span>🛁 3</span>
          <span>📏 1700 sq.ft</span>
        </div>

        {/* Price */}
        <div className="text-teal-400 text-2xl">AED 7,300,000</div>
      </div>

      {/* Footer Icons */}
      <div className="flex justify-between p-3 border border-gray-700">
        <button className="text-gray-400 text-lg hover:text-white">📞</button>
        <button className="text-gray-400 text-lg hover:text-white">✉️</button>
        <button className="text-gray-400 text-lg hover:text-white">💬</button>
      </div>
    </div>
  );
};

export default RealEstateCard;
