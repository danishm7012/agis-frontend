"use client"; // Add this line to make it a Client Component

import Image from 'next/image';
import Link from 'next/link';
import { FaWhatsapp } from 'react-icons/fa'; // Import WhatsApp Icon
import { useState, useEffect } from 'react';
import axios from 'axios';

const NavBar = () => {
  const [dropdownENOpen, setDropdownENOpen] = useState(false);
  const [dropdownFollowOpen, setDropdownFollowOpen] = useState(false);
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

  return (
    <nav className="fixed top-0 w-full z-50 bg-black text-white p-4 border-b border-gray-700">
      <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center">
        {/* Left Side: Logo */}
        <div className="text-3xl font-bold mb-2 sm:mb-0">
          <Link href="/buy">
            <Image src='/images/agisLogo.png' alt="AX Logo" width={100} height={100} />
          </Link>
        </div>

        {/* Center: Navigation Links */}
        <div className="flex flex-wrap justify-center sm:justify-start w-full sm:w-auto">
          <ul className="flex space-x-6">
            <li>
              <Link href="/buy">Buy</Link>
            </li>
            <li>
              <Link href="/rent">Sell</Link>
            </li>
            <li>
              <Link href="/villas">Off Plan</Link>
            </li>
            <li>
              <Link href="/catalog">Catalog</Link>
            </li>
            <li>
              <Link href="/blog">Blogs</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </div>

        {/* Right Side: EN, Follow Us, WhatsApp, Call Us */}
        <ul className="flex items-center space-x-4 mt-2 sm:mt-0">
          {/* EN Dropdown */}
          <li
            className="relative"
            onMouseEnter={() => setDropdownENOpen(true)}
            onMouseLeave={() => setDropdownENOpen(false)}
          >
            <span className="cursor-pointer">EN</span>
            {dropdownENOpen && (
              <div className="absolute bg-black text-white left-1/2 transform -translate-x-1/2 mt-2 py-2 w-24 shadow-lg rounded-lg z-50"
                onMouseEnter={() => setDropdownENOpen(true)} // Keep it open when hovering on dropdown
                onMouseLeave={() => setDropdownENOpen(false)} // Close when leaving the dropdown
              >
                <Link href="#" className="block px-4 py-2 hover:bg-gray-200">EN</Link>
                <Link href="#" className="block px-4 py-2 hover:bg-gray-200">FR</Link>
                <Link href="#" className="block px-4 py-2 hover:bg-gray-200">AR</Link>
              </div>
            )}
          </li>

          {/* Follow Us Dropdown */}
          <li
            className="relative"
            onMouseEnter={() => setDropdownFollowOpen(true)}
            onMouseLeave={() => setDropdownFollowOpen(false)}
          >
            <span className="cursor-pointer">Follow Us</span>
            {dropdownFollowOpen && (
              <div className="absolute bg-black text-white left-1/2 transform -translate-x-1/2 mt-2 py-2 w-40 shadow-lg rounded-lg z-50"
                onMouseEnter={() => setDropdownFollowOpen(true)} // Keep it open when hovering on dropdown
                onMouseLeave={() => setDropdownFollowOpen(false)} // Close when leaving the dropdown
              >
                <Link href={socialLinks?.Facebook} target="_blank" className="block px-4 py-2 hover:bg-gray-200">Facebook</Link>
                <Link href={socialLinks?.Instagram} target="_blank" className="block px-4 py-2 hover:bg-gray-200">Instagram</Link>
                <Link href={socialLinks?.LinkedIn} target="_blank" className="block px-4 py-2 hover:bg-gray-200">LinkedIn</Link>
                <Link href={socialLinks?.Twitter} target="_blank" className="block px-4 py-2 hover:bg-gray-200">Twitter</Link>
              </div>
            )}
          </li>

          {/* WhatsApp Icon */}
          <li>
            <a href={`https://wa.me/${socialLinks?.Whatsapp}`} target="_blank">
              <FaWhatsapp size={24} color="#FFD700"/>
            </a>
          </li>

          {/* Call Us (no link) */}
          <li>
            <span className="cursor-pointer font-semibold" style={{ color: '#FFD700' }}>Call Us</span>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
