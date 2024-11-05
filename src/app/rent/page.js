"use client"; // Add this line to make it a Client Component
import Footer from '../components/Footer';
import { useState, useEffect } from 'react';
import PropertyTypeDropdown from '../components/PropertyDropDown';
import BedroomsSelector from '../components/BedRoomsSelector';
import AreaRangeSelector from '../components/AreaRangeSelector';
import RealEstateCard from '../components/RealEstateCard';
import ConsultantCard from '../components/ConsultantCard';
import ConsultationForm from '../components/ConsultationForm';
import FourColumnLayout from '../components/FourTextColumn';
import axios from 'axios';

const Rent = () => {
  const [propertiesList, setPropertiesList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    const fetchProperties = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          `https://test-cms-updated.onrender.com/api/properties?pagination[page]=${page}&pagination[pageSize]=10&populate=*`
        );
        const newProperties = response?.data?.data || [];
        const total = response?.data?.meta?.pagination?.pageCount || 1;

        setPropertiesList((prevProperties) => [
          ...prevProperties,
          ...newProperties,
        ]); // Append new properties to the existing list
        setTotalPages(total);
      } catch (err) {
        setError(err.message || 'An error occurred while fetching data.');
      } finally {
        setLoading(false);
      }
    };

    fetchProperties();
  }, [page]);

  const handleNextPage = () => {
    if (page < totalPages) {
      setPage((prevPage) => prevPage + 1);
    }
  };

  return (
    <div className="mt-14">
      <div className="p-5 md:p-10 bg-black text-white">
        <p className="text-lg font-bold text-gray-400">Properties For Rent In Dubai</p>
        <h1 className="mt-5 text-3xl text-gray-300 text-center">
          {`PROPERTIES FOR RENT IN DUBAI`}
        </h1>
        <div className="pt-6 flex flex-col md:flex-row gap-4 md:gap-6">
          <div className="flex flex-col w-full md:w-1/4">
            <h5 className="text-gray-500">Real Estate Category</h5>
            <div className="flex flex-wrap gap-3 mt-3">
              <div className="border border-gray-700 flex items-center justify-center w-full md:w-24 h-10">
                <h6>All</h6>
              </div>
              <div className="border border-gray-700 flex items-center justify-center w-full md:w-24 h-10">
                <h6>Primary</h6>
              </div>
              <div className="border border-gray-700 flex items-center justify-center w-full md:w-24 h-10">
                <h6>Secondary</h6>
              </div>
            </div>
          </div>

          <PropertyTypeDropdown className="w-full md:w-1/4" />
          <BedroomsSelector className="w-full md:w-1/4" />
          <AreaRangeSelector className="w-full md:w-1/4" title="Area" unite="sqm" mValue={0} mxValue={100} />
          <AreaRangeSelector className="w-full md:w-1/4" title="Currency" unite="AE" mValue={1000} mxValue={100000} />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-6">
          {/* Real estate column */}
          <div className="col-span-3 flex flex-wrap">
            {loading ? (
              <div className="text-white">Loading...</div>
            ) : propertiesList.length > 0 ? (
              propertiesList.map((data, index) => (
                <RealEstateCard 
                  idRoute={`/buy/${data?.documentId}`} 
                  data={data} 
                  image="https://img.freepik.com/premium-photo/villa-design-dubai_1015255-107296.jpg?w=826" 
                  key={index} 
                  className="w-full sm:w-1/2 lg:w-1/3 xl:w-1/4"
                />
              ))
            ) : (
              <div>Sorry, no property found at the moment. Please check your internet connection and try again!</div>
            )}
          </div>
          {/* Consultant column with sticky behavior */}
          <div className="col-span-1 sticky top-14">
            <ConsultantCard />
          </div>
        </div>

        {/* Pagination Button */}
        {page < totalPages && (
          <div className="flex justify-center mt-6">
            <button
              onClick={handleNextPage}
              className="bg-blue-600 text-white font-bold py-2 px-4 rounded-lg shadow hover:bg-blue-700 transition duration-300"
            >
              Load More
            </button>
          </div>
        )}

        <div className="h-[60vh] flex items-center justify-center">
          <ConsultationForm />
        </div>
        <div>
          <FourColumnLayout />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Rent;
