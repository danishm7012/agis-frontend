"use client"; // Add this line to make it a Client Component
import Footer from '../app/components/Footer';
import { useState,useEffect } from 'react';
import PropertyTypeDropdown from '../app/components/PropertyDropDown'
import BedroomsSelector from '../app/components/BedRoomsSelector'
import AreaRangeSelector from '../app/components/AreaRangeSelector'
import RealEstateCard from '../app/components/RealEstateCard';
import ConsultantCard from '../app/components/ConsultantCard';
import ConsultationForm from '../app/components/ConsultationForm';
import FourColumnLayout from '../app/components/FourTextColumn';
import axios from 'axios'
const Home = () => {

  const [propertiesList, setPropertiesList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const response = await axios.get('https://test-cms-updated.onrender.com/api/properties?pagination[page]=1&pagination[pageSize]=10&populate=*');
        setPropertiesList(response?.data?.data); // Assuming response data is in the correct format
        
      } catch (err) {
        setError(err.message || "An error occurred while fetching data.");
      } finally {
        setLoading(false);
      }
    };

    fetchProperties();
  }, []);
  return (
    <div className='mt-14'>
      <div className="p-10 bg-black text-white">
        <p className="text-lg font-bold" style={{color:'gray'}}>Properties For Sale In Dubai</p>
        <h1 className="mt-5 text-3xl text-gray-300" style={{textAlign:'center'}}>{`Properties For Sale in dubai`.toUpperCase()}</h1>
        <div className='pt-6' style={{display:'flex',flexDirection:'row'}}>
          <div style={{display:'flex',flex:0.3,flexDirection:'column',}}>
            <h5 className='text-gray-500'>Real Estate Category</h5>
            <div style={{display:'flex',flexDirection:'row',marginTop:6}}>
            <div className='border border-gray-700' style={{display:'flex',height:42,width:120,justifyContent:'center',alignItems:'center'}}>
              <h6>All</h6>
            </div>
            <div className='border border-gray-700' style={{display:'flex',height:42,width:120,justifyContent:'center',alignItems:'center'}}>
              <h6>Primary</h6>
            </div>
            <div className='border border-gray-700' style={{display:'flex',height:42,width:120,justifyContent:'center',alignItems:'center'}}>
              <h6>Secondary</h6>
            </div>
            </div>
          </div>
<PropertyTypeDropdown/>
          {/* <div style={{marginLeft:20}}>
            <h5 className='text-gray-500'>Bedrooms</h5>
            <div style={{display:'flex'}}>
              <div className='border border-gray-700' style={{
                 display:'flex',
                 justifyContent:'center',
                 alignItems:'center',
                 textAlign:'center',
                 height: 42,
                 width: 42,
                 marginTop: 6,

              }}>
1
              </div>
              <div className='border border-gray-700' style={{
                 display:'flex',
                 justifyContent:'center',
                 alignItems:'center',
                 textAlign:'center',
                 height: 42,
                 width: 42,
                 marginTop: 6,

              }}>
2
              </div>
              <div className='border border-gray-700' style={{
                 display:'flex',
                 justifyContent:'center',
                 alignItems:'center',
                 textAlign:'center',
                 height: 42,
                 width: 42,
                 marginTop: 6,

              }}>
3
              </div>
              <div className='border border-gray-700' style={{
                 display:'flex',
                 justifyContent:'center',
                 alignItems:'center',
                 textAlign:'center',
                 height: 42,
                 width: 42,
                 marginTop: 6,

              }}>
4
              </div>
              <div className='border border-gray-700' style={{
                 display:'flex',
                 justifyContent:'center',
                 alignItems:'center',
                 textAlign:'center',
                 height: 42,
                 width: 42,
                 marginTop: 6,

              }}>
5+
              </div>
            </div>
          </div> */}
<BedroomsSelector/>
          {/* <div>
            <h5 className='text-gray-500'>Area</h5>
          </div> */}
<AreaRangeSelector title={"Area"} unite={'sqm'} mValue={0} mxValue={100}/>

<AreaRangeSelector title={"Currency"} unite = {"AE"} mValue={1000} mxValue={100000}/>
          {/* <div>
            <h5 className='text-gray-500'>Currency</h5>
          </div> */}
        </div>
        <div className="grid grid-cols-4">
  {/* Real estate column */}
  <div className="col-span-3" style={{display:'flex',flex:1, flexDirection:'row',flexWrap:'wrap'}}>
    { loading ? 
    <div className='text-white' >
      loading...
      </div>
    
    : propertiesList?.length > 0 ? propertiesList?.map((data,index) => ( 
      <RealEstateCard idRoute={'/buy/123'} data = {data} image = {"https://img.freepik.com/premium-photo/villa-design-dubai_1015255-107296.jpg?w=826"} key={index}/>
    ))
      
      :
      <div>
        sorry no property found at the moment please check your internet connection and try again!
        </div>
      }
   
  </div>
  {/* Consultant column with sticky behavior */}
  <div className="col-span-1 sticky top-0">
    <ConsultantCard />
  </div>
</div>
<div className="h-[60vh] flex items-center justify-center">
  <ConsultationForm />
</div>
    <div>
      <FourColumnLayout/>
      </div>   
      </div>
      <Footer />
    </div>
  );
};

export default Home;
