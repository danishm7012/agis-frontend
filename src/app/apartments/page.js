// Example in apartments.js

import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import Image from 'next/image';
import PropertyTypeDropdown from '../components/PropertyDropDown'
import BedroomsSelector from '../components/BedRoomsSelector'
import AreaRangeSelector from '../components/AreaRangeSelector'
import RealEstateCard from '../components/RealEstateCard';
import ConsultantCard from '../components/ConsultantCard';
import ConsultationForm from '../components/ConsultationForm';
import FourColumnLayout from '../components/FourTextColumn';
const Apartments = () => {
  return (
    <div>
      {/* <NavBar /> */}
      {/* <header>
        <Image
          src="/images/towerbg.webp" // Replace with your image path
          alt="Header Image"
          width={1440}
          height={500}
          className="w-full h-[500px] object-cover"
        />
      </header> */}
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
    <RealEstateCard />
    <RealEstateCard />
    <RealEstateCard />
    <RealEstateCard />
    <RealEstateCard />
    <RealEstateCard />
    <RealEstateCard />
    <RealEstateCard />
    <RealEstateCard />
    <RealEstateCard />
    <RealEstateCard />
    <RealEstateCard />
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

export default Apartments;
