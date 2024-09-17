"use client"; // Add this line to make it a Client Component
import Image from 'next/image';
import { FaPhoneAlt, FaWhatsapp, FaEnvelope, FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube, FaVk, FaXTwitter } from 'react-icons/fa';

const ConsultantCard = () => {
  return (
    <div className="bg-gray-900 text-white p-5 rounded-lg shadow-lg max-w-md mx-auto sticky top-0">
      {/* Profile Section */}
      <div className="flex items-center mb-6">
        <div className="mr-4">
          <Image
            src="https://img.freepik.com/premium-photo/close-up-portrait-smiling-young-woman-city_1048944-12068603.jpg" // Replace with actual image path
            alt="Anukampa Prithviraj"
            width={80}
            height={80}
            className="rounded-lg"
          />
        </div>
        <div>
          <h2 className="text-xl font-semibold">Anukampa Prithviraj</h2>
          <p className="text-gray-400">Property Consultant</p>
        </div>
      </div>

      {/* Call to Action Buttons */}
      <div className="flex justify-between mb-4">
        <button className="border border-gray-500 w-1/2 text-center py-2 mx-1 rounded-lg hover:bg-gray-700">
          CALL US
        </button>
        <button className="border border-gray-500 w-1/2 text-center py-2 mx-1 rounded-lg hover:bg-gray-700">
          INQUIRY
        </button>
      </div>

      {/* WhatsApp Contact */}
      <div className="text-center mb-6">
        <p className="text-gray-400">Or contact us via</p>
        <div className="flex justify-center items-center mt-2">
          <FaWhatsapp className="text-green-500 text-2xl" />
          <span className="ml-2 text-lg text-gray-400">WhatsApp</span>
        </div>
      </div>

      {/* Social Icons */}
      <div className="text-center border-t border-gray-700 pt-4">
        <p className="mb-4 text-gray-400">Share</p>
        <div className="flex justify-center space-x-4 text-2xl">
          <FaEnvelope className="hover:text-gray-300 cursor-pointer" />
          <FaFacebookF className="hover:text-gray-300 cursor-pointer" />
          {/* <FaXTwitter className="hover:text-gray-300 cursor-pointer" /> */}
          <FaLinkedinIn className="hover:text-gray-300 cursor-pointer" />
          <FaWhatsapp className="hover:text-gray-300 cursor-pointer" />
          <FaInstagram className="hover:text-gray-300 cursor-pointer" />
          <FaVk className="hover:text-gray-300 cursor-pointer" />
          <FaYoutube className="hover:text-gray-300 cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

export default ConsultantCard;
