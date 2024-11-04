"use client";
import { FaWhatsapp } from 'react-icons/fa';
import axios from 'axios';
import { useState, useEffect } from 'react';

export default function ConsultationForm() {
  const [socialLinks, setSocialLinks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // State for form fields
  const [formData, setFormData] = useState({
    name: '',
    phoneNo: '',
    email: '',
  });
  const [submitError, setSubmitError] = useState(null);
  const [submitSuccess, setSubmitSuccess] = useState(null);

  useEffect(() => {
    const fetchSocialLinks = async () => {
      try {
        const response = await axios.get('https://test-cms-updated.onrender.com/api/social-link');
        setSocialLinks(response.data?.data);
      } catch (err) {
        setError(err.message || "An error occurred while fetching data.");
      } finally {
        setLoading(false);
      }
    };

    fetchSocialLinks();
  }, []);

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log("data before submitted a form:#@#@",formData)
      const response = await axios.post('https://test-cms-updated.onrender.com/api/contacts', {
        data: formData,
      },
      {
        headers: {
          'Content-Type': 'application/json', // Explicitly set content type
        },
      }
      );
      setSubmitSuccess("Form submitted successfully!");
      setSubmitError(null);
      setFormData({ name: '', phoneNo: '', email: '' }); // Reset form fields
    } catch (error) {
      setSubmitError("An error occurred while submitting the form.");
      setSubmitSuccess(null);
    }
  };

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
      <form onSubmit={handleSubmit} className="grid grid-cols-4 gap-4 mb-6">
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Your Name"
          className="col-span-1 p-4 bg-transparent border-b border-gray-400 focus:outline-none text-white placeholder-gray-400"
        />
        <input
          type="text"
          name="phoneNo"
          value={formData.phoneNo}
          onChange={handleChange}
          placeholder="Your Phone"
          className="col-span-1 p-4 bg-transparent border-b border-gray-400 focus:outline-none text-white placeholder-gray-400"
        />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Your E-Mail"
          className="col-span-1 p-4 bg-transparent border-b border-gray-400 focus:outline-none text-white placeholder-gray-400"
        />
        <button type="submit" className="col-span-1 p-4 border border-gray-400 hover:border-orange-500 hover:text-orange-500 transition-all">
          SEND
        </button>
      </form>

      {/* Submission Success/Error Messages */}
      {submitSuccess && <p className="text-green-500">{submitSuccess}</p>}
      {submitError && <p className="text-red-500">{submitError}</p>}

      {/* Contact via WhatsApp */}
      <div className="flex justify-between items-center">
        <p className="text-gray-400">Or contact us right now via</p>
        <a href={`https://wa.me/${socialLinks?.Whatsapp}`} className="flex items-center space-x-2 text-gray-400 hover:text-orange-500 transition-all">
          <FaWhatsapp className="text-green-500 text-2xl" />
          <span>WhatsApp</span>
        </a>
      </div>
    </div>
  );
}
