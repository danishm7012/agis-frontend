"use client"; // Add this line to make it a Client Component
// components/Footer.js
import Image from 'next/image';
import { FaPhoneAlt, FaWhatsapp, FaEnvelope, FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube, FaVk, FaXTwitter } from 'react-icons/fa';
import { AiOutlineMail } from 'react-icons/ai';
import { useState,useEffect } from 'react';
import axios from 'axios'
const Footer = () => {
  const [socialLinks, setSocialLinks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [aboutInfo , setAboutInfo] = useState()
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
    const fetchAboutInfo = async () => {
      try {
        const response = await axios.get('https://test-cms-updated.onrender.com/api/about');
        setAboutInfo(response.data?.data); // Assuming response data is in the correct format
      } catch (err) {
        setError(err.message || "An error occurred while fetching data.");
      } finally {
        setLoading(false);
      }
    };
    fetchSocialLinks();
    fetchAboutInfo();
  }, []);
  console.log("social links are:#@#@#",aboutInfo)
  return (
    <footer className="border-t bg-black text-white border-gray-700 pb-6">
        <div style={{display:'flex',justifyContent:'center',alignItems:'center',width:'100%',height:'30vh'}}>
      <div className="flex items-center justify-between" style={{display:'flex',width:'85%'}}>
        <Image src='/images/agisLogo.png' alt="AX Logo" width={200} height={200} />
        <div className="text-xl font-bold" style={{fontSize:28,color:'gray'}}>CONTACTS</div>
      </div>
      </div>
      <div style={{display:'flex',justifyContent:'center',alignItems:'center',width:'100%'}}> 
      <div className="border-t border-gray-700  pt-6 pb-6" style={{width:'85%',display:'flex',paddingTop:32}}>
        <div className="grid grid-cols-1 md:grid-cols-2" style={{display:'flex',flex:1,justifyContent:'space-between'}}>
          {/* Links Section */}
          <div className="pb-24" style={{display:'flex',flex:0.5}}>
            <div className="container mx-auto grid grid-cols-2 md:grid-cols-4 gap-4">
              <div>
                <a href="#" className="block py-2 text-gray-400 hover:text-white">Apartment</a>
                <a href="#" className="block py-2 text-gray-400 hover:text-white">Penthouse</a>
                <a href="#" className="block py-2 text-gray-400 hover:text-white">Villas</a>
                <a href="#" className="block py-2 text-gray-400 hover:text-white">Townhouses</a>
              </div>
              <div>
                <a href="#" className="block py-2 text-gray-400 hover:text-white">Off Plans</a>
                <a href="#" className="block py-2 text-gray-400 hover:text-white">Catalogs</a>
                <a href="#" className="block py-2 text-gray-400 hover:text-white">Area Guide</a>
                <a href="#" className="block py-2 text-gray-400 hover:text-white">Sell</a>
              </div>
              <div>
                <a href="#" className="block py-2 text-gray-400 hover:text-white">Developers</a>
                <a href="#" className="block py-2 text-gray-400 hover:text-white">About</a>
                <a href="#" className="block py-2 text-gray-400 hover:text-white">Reviews</a>
                <a href="/contact" className="block py-2 text-gray-400 hover:text-white">Contact Us</a>
              </div>
              {/* <div>
                <a href="#" className="block py-2 text-gray-400 hover:text-white">Careers</a>
                <a href="#" className="block py-2 text-gray-400 hover:text-white">Contact Us</a>
              </div> */}
            </div>
          </div>

          {/* Contact Info Section */}
          <div style={{display:'flex',flex:0.5,justifyContent:'flex-end'}}>
            <div className='' style={{width:350}}>
              <div className="font-bold text-lg pb-2 text-gray-400" style={{textAlign:'right'}}>{aboutInfo?.title}</div>
              <div className='pb-4 text-gray-400' style={{textAlign:'right'}}>{aboutInfo?.Address}</div>
              <div className="flex space-x-2 pb-2 gap-4" style={{display:'flex',justifyContent:'flex-end'}}>
              <a href={`mailto:${socialLinks?.Mail}`} target="_blank">
          <FaEnvelope  className = "cursor-pointer" size={24} color={'#FFD700'}/>
          </a>
          <a href={socialLinks?.Facebook} target="_blank">
          <FaFacebookF className = " cursor-pointer" size={24} color={'#FFD700'}/>
          </a>
          {/* <FaXTwitter className = " cursor-pointer" /> */}
          <a href={socialLinks?.LinkedIn} target="_blank">
          <FaLinkedinIn className = " cursor-pointer" size={24} color={'#FFD700'}/>
          </a>
          <a href={`https://wa.me/${socialLinks?.Whatsapp}`} target="_blank">
          <FaWhatsapp className = " cursor-pointer" size={24} color={'#FFD700'}/>
          </a>
          <a href={socialLinks?.Instagram} target="_blank">
          <FaInstagram className = " cursor-pointer" size={24} color={'#FFD700'}/>
          </a>
          <a href={socialLinks?.Twitter} target="_blank">
          <FaVk className = " cursor-pointer" size={24} color={'#FFD700'}/>
          </a>
          <a href={socialLinks?.Youtube} target="_blank">
          <FaYoutube className = " cursor-pointer" size={24} color={'#FFD700'}/>
          </a>
              </div>
              {/* #FFD700 */}
            <div className="pt-4" style={{display:'flex',alignSelf:'right',justifyContent:'flex-end',width:350,height:60}}>
              <button className="border border-yellowGolden-500 text-yellowGolden-500 px-14 py-2 transition hover:bg-yellowGolden-500 hover:text-white" style={{width:300,height:60,color:"#FFD700",borderColor:'#FFD700'}}>
              <a href={`https://wa.me/${socialLinks?.Whatsapp}`} target="_blank">
                CALL US
                </a>
              </button>
            </div>
          </div>
          </div>
        </div>
      </div>
      </div>
    </footer>
  );
};

export default Footer;
