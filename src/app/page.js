"use client"; // Add this line to make it a Client Component
import Footer from '../app/components/Footer';
import { useState, useEffect } from 'react';
import PropertyTypeDropdown from '../app/components/PropertyDropDown';
import BedroomsSelector from '../app/components/BedRoomsSelector';
import AreaRangeSelector from '../app/components/AreaRangeSelector';
import RealEstateCard from '../app/components/RealEstateCard';
import ConsultantCard from '../app/components/ConsultantCard';
import ConsultationForm from '../app/components/ConsultationForm';
import FourColumnLayout from '../app/components/FourTextColumn';
import axios from 'axios';

const Home = () => {
  const [propertiesList, setPropertiesList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [hasNextPage, setHasNextPage] = useState(true);

  const fetchProperties = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        `https://test-cms-updated.onrender.com/api/properties?pagination[page]=${page}&pagination[pageSize]=10&populate=*`
      );
      setPropertiesList(prevList => [...prevList, ...response?.data?.data]);
      setHasNextPage(response?.data?.meta?.pagination?.page < response?.data?.meta?.pagination?.pageCount);
    } catch (err) {
      setError(err.message || "An error occurred while fetching data.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProperties();
  }, [page]);

  const loadMoreProperties = () => {
    if (hasNextPage) {
      setPage(prevPage => prevPage + 1);
    }
  };

  return (
    <div className="mt-14">
      <div className="p-5 md:p-10 bg-black text-white">
        <p className="text-lg font-bold text-gray-400">Properties For Sale In Dubai</p>
        <h1 className="mt-3 text-2xl md:text-3xl text-gray-300 text-center">
          {`Properties For Sale in Dubai`.toUpperCase()}
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

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-8">
          <div className="col-span-3 flex flex-wrap gap-4">
            {loading && page === 1 ? (
              <div className="text-white">Loading...</div>
            ) : propertiesList.length > 0 ? (
              propertiesList.map((data, index) => (
                <RealEstateCard
                  idRoute={`/buy/${data?.documentId}`}
                  data={data}
                  image="https://img.freepik.com/premium-photo/villa-design-dubai_1015255-107296.jpg?w=826"
                  key={index}
                />
              ))
            ) : (
              <div>Sorry, no property found at the moment. Please check your internet connection and try again!</div>
            )}
          </div>

          <div className="col-span-1">
            <div className="sticky top-14 md:top-0">
              <ConsultantCard />
            </div>
          </div>
        </div>

        {hasNextPage && !loading && (
          <div className="flex justify-center mt-4">
            <button
              onClick={loadMoreProperties}
              className="px-4 py-2 bg-gray-700 text-white rounded hover:bg-gray-600 w-full md:w-auto"
            >
              Load More
            </button>
          </div>
        )}
        
        {loading && page > 1 && <div className="text-white mt-4">Loading more properties...</div>}

        <div className="h-[60vh] flex items-center justify-center mt-10">
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

export default Home;
