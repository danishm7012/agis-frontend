'use client'
import React, {useState,useEffect} from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; 
import Footer from '../../components/Footer';
import { useParams } from 'next/navigation'
const HouseDetail = () => {
  const params = useParams();
  const {id} = params
  const [propertyData, setPropertyData] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://test-cms-updated.onrender.com/api/properties/${id}?populate=*`);
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        setPropertyData(data?.data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [id]);
  return (
    <div className="min-h-screen bg-black">
      {/* Navbar */}
      <div className="fixed top-0 w-full bg-black shadow-lg z-10"></div>

      {/* Main content */}
      {loading ?  <div className="container mx-auto px-4 py-20"> <p className="mt-3 text-lg text-white">Loading...</p> </div> :
      <div className="container mx-auto px-4 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* House Carousel */}
          <div className="relative">
            <Carousel
              showArrows={true}
              showThumbs={false}
              infiniteLoop={true}
              autoPlay={true}
              interval={2000}
              className="rounded-lg shadow-lg"
              
            >
             {propertyData?.Images && propertyData?.Images?.length > 0 ?  
          propertyData?.Images.map((data,index) => 
          <div key={index}>
             <img
             className="w-full h-auto rounded-lg shadow-lg"
             src={data?.url}  // Replace with actual image
             alt="House"
           />
             </div>
          )
            :  <div>
            <img
            className="w-full h-auto rounded-lg shadow-lg"
            src="https://img.freepik.com/free-photo/3d-rendering-house-model_23-2150799725.jpg?t=st=1728196492~exp=1728200092~hmac=6f0385e97ea3f0a0596fb30f53a9c84f7f39e9c9df2c58c05590ce805ab45875&w=1380"  // Replace with actual image
            alt="House"
          />
            </div>}
              {/* Add more images as needed */}
            </Carousel>
          </div>

          {/* House Details */}
          <div className="flex flex-col justify-between">
            <div>
              <h2 className="text-3xl font-bold text-gray-400">
                {propertyData?.title}
              </h2>
              <p className="mt-3 text-lg text-gray-500">
                Beautiful {propertyData?.noOfBed}-bedroom {propertyData?.type}.
              </p>

              <div className="mt-5">
                <h4 className="text-xl font-bold text-gray-400">Property Details</h4>
                <ul className="mt-3 text-gray-500">
                  <li>Location: {propertyData?.location}</li>
                  <li>Price: AED {propertyData?.price}</li>
                  <li>Area: {propertyData?.areaSize} sqft</li>
                  <li>Bedrooms: {propertyData?.noOfBed}</li>
                  <li>Bathrooms: {propertyData?.noOfBath}</li>
                  <li>Furnishing: Fully Furnished</li>
                  <li>Parking: {propertyData?.noOfParking} Car Spaces</li>
                </ul>
              </div>

              <div className="mt-6">
                <h4 className="text-xl font-bold text-gray-400">Description</h4>
               {propertyData?.Description?.map((data,index) => 
                <p key={index} className="mt-2 text-gray-500">
                  {data?.children[0]?.text}
                </p> )}
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
}
      <Footer />
    </div>
  );
};

export default HouseDetail;
