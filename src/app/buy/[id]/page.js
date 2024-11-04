import React from 'react';
import Footer from '../../components/Footer';
const HouseDetail = () => {

  return (
    <div className="min-h-screen bg-black">
      {/* Navbar */}
      <div className="fixed top-0 w-full bg-black shadow-lg z-10">
        {/* <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-xl font-bold">Real Estate</h1>
          <nav>
            <ul className="flex space-x-4">
              <li className="hover:text-blue-500"><a href="/">Home</a></li>
              <li className="hover:text-blue-500"><a href="/contact">Contact</a></li>
            </ul>
          </nav>
        </div> */}
      </div>

      {/* Main content */}
      <div className="container mx-auto px-4 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* House Image */}
          <div className="relative">
            <img
              className="w-full h-auto rounded-lg shadow-lg"
              src="https://img.freepik.com/free-photo/3d-rendering-house-model_23-2150799725.jpg?t=st=1728196492~exp=1728200092~hmac=6f0385e97ea3f0a0596fb30f53a9c84f7f39e9c9df2c58c05590ce805ab45875&w=1380"  // Replace with actual image
              alt="House"
            />
          </div>

          {/* House Details */}
          <div className="flex flex-col justify-between">
            <div>
              <h2 className="text-3xl font-bold text-gray-400">
                Luxury Villa in Downtown Dubai
              </h2>
              <p className="mt-3 text-lg text-gray-500">
                Beautiful 4-bedroom villa with private pool, garden, and panoramic views of the Dubai skyline.
              </p>

              <div className="mt-5">
                <h4 className="text-xl font-bold text-gray-400">Property Details</h4>
                <ul className="mt-3 text-gray-500">
                  <li>Location: Downtown Dubai</li>
                  <li>Price: AED 5,000,000</li>
                  <li>Area: 3,500 sqft</li>
                  <li>Bedrooms: 4</li>
                  <li>Bathrooms: 5</li>
                  <li>Furnishing: Fully Furnished</li>
                  <li>Parking: 2 Car Spaces</li>
                </ul>
              </div>

              <div className="mt-6">
                <h4 className="text-xl font-bold text-gray-400">Description</h4>
                <p className="mt-2 text-gray-500">
                  This villa offers luxury living in the heart of Dubai, with spacious living areas, modern design, and world-class amenities. Perfect for families who value privacy and high-end lifestyle.
                </p>
              </div>
            </div>

            {/* Contact/Call-to-Action */}
            <div className="mt-10">
              <a
                href="/contact"
                className="bg-blue-600 text-white font-bold py-3 px-6 rounded-lg shadow hover:bg-blue-700 transition duration-300"
              >
                Contact Agent
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      {/* <div className="bg-gray-900 text-white py-8 mt-10">
        <div className="container mx-auto px-4">
          <p className="text-center">&copy; 2024 Real Estate. All rights reserved.</p>
        </div>
      </div> */}
      <Footer />
    </div>
  );
};

export default HouseDetail;
