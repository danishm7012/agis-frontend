// components/FourColumnLayout.js

export default function FourColumnLayout() {
    return (
      <div className="container mx-auto px-4 py-8 text-gray-300">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          <div className="bg-black p-6 shadow-md rounded-md">
            <h2 className="text-xl font-bold mb-4 text-center">Discover Luxury Living in Dubai</h2>
            <p className="text-center">
            Experience the ultimate in modern living with Dubai finest properties. From waterfront residences to high-rise penthouses, explore homes that offer unmatched luxury and convenience.
            </p>
          </div>
          <div className="bg-black p-6 shadow-md rounded-md text-center">
            <h2 className="text-xl font-bold mb-4">Invest in Dubai Thriving Real Estate Market</h2>
            <p>
            Dubai property market offers unique opportunities for investors worldwide. Discover why this dynamic city is an ideal destination for securing high-return real estate investments.
            </p>
          </div>
          <div className="bg-black p-6 shadow-md rounded-md text-center">
            <h2 className="text-xl font-bold mb-4">Find Your Dream Home in the Heart of Dubai</h2>
            <p>
            Whether you are looking for a family villa, a stylish apartment, or a cozy studio, our listings showcase diverse options across Dubai is most sought-after neighborhoods
            </p>
          </div>
          <div className="bg-black p-6 shadow-md rounded-md text-center">
            <h2 className="text-xl font-bold mb-4">Seamless Property Buying Experience</h2>
            <p>
            Our dedicated team is here to guide you through every step of the buying process, ensuring a smooth and rewarding experience as you secure your ideal property in Dubai.
            </p>
          </div>
        </div>
      </div>
    );
  }
  