"use client"; // Add this line to make it a Client Component
import Image from 'next/image';
import { useState,useEffect } from 'react';
import { FaPhoneAlt, FaWhatsapp, FaEnvelope, FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube, FaVk, FaXTwitter } from 'react-icons/fa';
import axios from 'axios'
import Link from 'next/link';
const ConsultantCard = () => {
  const [socialLinks, setSocialLinks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    const fetchSocialLinks = async () => {
      try {
        const response = await axios.get('https://test-cms-updated.onrender.com/api/social-link');
        setSocialLinks(response.data?.data); // Assuming response data is in the correct format
      } catch (err) {
        setError(err.message || "An error occurred while fetching data.");
      } finally {
        setLoading(false);
      }
    };

    fetchSocialLinks();
  }, []);
  console.log("social links are:#@#@#@",socialLinks)
  return (
    <div className="bg-gray-900 text-white p-5 rounded-lg shadow-lg max-w-md mx-auto sticky top-16">
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
        <a href={`https://wa.me/${socialLinks?.Whatsapp}`} target="_blank">
          CALL US
          </a>
        </button>
        <button className="border border-gray-500 w-1/2 text-center py-2 mx-1 rounded-lg hover:bg-gray-700">
          <Link href="/contact">INQUIRY</Link>
        </button>
      </div>

      {/* WhatsApp Contact */}
      <div className="text-center mb-6">
        <p className="text-gray-400">Or contact us via</p>
        <div className="flex justify-center items-center mt-2">
        <a href={`https://wa.me/${socialLinks?.Whatsapp}`} target="_blank">
          <FaWhatsapp className="text-green-500 text-2xl" />
          </a>
          <span className="ml-2 text-lg text-gray-400">WhatsApp</span>
          
        </div>
      </div>

      {/* Social Icons */}
      <div className="text-center border-t border-gray-700 pt-4">
        <p className="mb-4 text-gray-400">Share</p>
        <div className="flex justify-center space-x-4 text-2xl">
        <a href={`mailto:${socialLinks?.Mail}`} target="_blank">
          <FaEnvelope className="hover:text-gray-300 cursor-pointer" />
          </a>
          <a href={socialLinks?.Facebook} target="_blank">
          <FaFacebookF className="hover:text-gray-300 cursor-pointer" />
          </a>
          {/* <FaXTwitter className="hover:text-gray-300 cursor-pointer" /> */}
          <a href={socialLinks?.LinkedIn} target="_blank">
          <FaLinkedinIn className="hover:text-gray-300 cursor-pointer" />
          </a>
          <a href={`https://wa.me/${socialLinks?.Whatsapp}`} target="_blank">
          <FaWhatsapp className="hover:text-gray-300 cursor-pointer" />
          </a>
          <a href={socialLinks?.Instagram} target="_blank">
          <FaInstagram className="hover:text-gray-300 cursor-pointer" />
          </a>
          <a href={socialLinks?.Twitter} target="_blank">
          <FaVk className="hover:text-gray-300 cursor-pointer" />
          </a>
          <a href={socialLinks?.Youtube} target="_blank">
          <FaYoutube className="hover:text-gray-300 cursor-pointer" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ConsultantCard;
