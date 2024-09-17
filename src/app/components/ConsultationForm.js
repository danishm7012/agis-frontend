import { FaPhoneAlt, FaWhatsapp, FaEnvelope, FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube, FaVk, FaXTwitter } from 'react-icons/fa';

export default function ConsultationForm() {
    return (
      <div className="w-full max-w-7xl mx-auto p-8 border border-gray-600 text-white">
        {/* Title Section */}
        <div className="flex justify-between items-center mb-6">
          <div>
            <h2 className="text-3xl font-bold">PROMPT CONSULTATION</h2>
            <p className="text-gray-400">Fill the form below and our agent will contact you shortly</p>
          </div>
        </div>
  
        {/* Form Inputs */}
        <div className="grid grid-cols-4 gap-4 mb-6">
          <input
            type="text"
            placeholder="Your Name"
            className="col-span-1 p-4 bg-transparent border-b border-gray-400 focus:outline-none text-white placeholder-gray-400"
          />
          <input
            type="text"
            placeholder="Your Phone"
            className="col-span-1 p-4 bg-transparent border-b border-gray-400 focus:outline-none text-white placeholder-gray-400"
          />
          <input
            type="email"
            placeholder="Your E-Mail"
            className="col-span-1 p-4 bg-transparent border-b border-gray-400 focus:outline-none text-white placeholder-gray-400"
          />
          <button className="col-span-1 p-4 border border-gray-400 hover:border-orange-500 hover:text-orange-500 transition-all">
            SEND
          </button>
        </div>
  
        {/* Contact via WhatsApp */}
        <div className="flex justify-between items-center">
          <p className="text-gray-400">Or contact us right now via</p>
          <a href="https://wa.me/" className="flex items-center space-x-2 text-gray-400 hover:text-orange-500 transition-all">
          <FaWhatsapp className="text-green-500 text-2xl" />
            <span>WhatsApp</span>
          </a>
        </div>
      </div>
    );
  }
  