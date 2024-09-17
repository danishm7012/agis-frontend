"use client"; // Add this line to make it a Client Component
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { FaWhatsapp } from 'react-icons/fa'; // Import WhatsApp Icon
import { useState } from 'react';


const NavBar = () => {
  const [dropdownENOpen, setDropdownENOpen] = useState(false);
  const [dropdownFollowOpen, setDropdownFollowOpen] = useState(false);
//   const router = useRouter();
const router = typeof window !== 'undefined' ? useRouter() : null;
  // Helper function to determine if the route is active
  const isActive = (pathname) => router?.pathname === pathname;
  return (
    <nav className="sticky top-0 bg-black text-white p-4 border-b border-gray-700 h-18">
      <div className="container mx-auto flex justify-between items-center">
        {/* Left Side: Logo */}
        <div className="text-3xl font-bold">
          <Link href="/">
          <Image src="https://fnst.axflare.com/assets/public/svg/logo/logo.svg" alt="AX Logo" width={100} height={100} />
          </Link>
        </div>

        {/* Center: Navigation Links */}
        <div className="flex space-x-6 h-full">
        <ul className="flex space-x-6">
          <li>
            <Link href="/apartments">
                Apartments
                </Link>
          </li>
          <li>
            <Link href="/penthouses">Penthouses</Link>
          </li>
          <li>
            <Link href="/villas">Villas</Link>
          </li>
          <li>
            <Link href="/services">Services</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
        </div>
        {/* Right Side: EN, Follow Us, WhatsApp, Call Us */}
        <ul className="flex space-x-6 items-center">
          {/* EN Dropdown */}
          <li
            className="relative"
            onMouseEnter={() => setDropdownENOpen(true)}
            onMouseLeave={() => setDropdownENOpen(false)}
          >
            <span className="cursor-pointer">EN</span>
            {dropdownENOpen && (
              <div className="absolute bg-black text-white left-1/2 transform -translate-x-1/2 mt-2 py-2 w-24 shadow-lg rounded-lg"
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
              <div className="absolute bg-black text-white left-1/2 transform -translate-x-1/2 mt-2 py-2 w-40 shadow-lg rounded-lg"
                   onMouseEnter={() => setDropdownFollowOpen(true)} // Keep it open when hovering on dropdown
                   onMouseLeave={() => setDropdownFollowOpen(false)} // Close when leaving the dropdown
              >
                <Link href="https://facebook.com" target="_blank" className="block px-4 py-2 hover:bg-gray-200">Facebook</Link>
                <Link href="https://instagram.com" target="_blank" className="block px-4 py-2 hover:bg-gray-200">Instagram</Link>
                <Link href="https://linkedin.com" target="_blank" className="block px-4 py-2 hover:bg-gray-200">LinkedIn</Link>
                <Link href="https://twitter.com" target="_blank" className="block px-4 py-2 hover:bg-gray-200">Twitter</Link>
              </div>
            )}
          </li>

          {/* WhatsApp Icon */}
          <li>
            <a href="https://wa.me/123456789" target="_blank">
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
