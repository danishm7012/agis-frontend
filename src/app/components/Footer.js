// components/Footer.js
import Image from 'next/image';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter, FaWhatsapp, FaYoutube } from 'react-icons/fa';
import { AiOutlineMail } from 'react-icons/ai';

const Footer = () => {
  return (
    <footer className="border-t bg-black text-white border-gray-700 pb-6">
        <div style={{display:'flex',justifyContent:'center',alignItems:'center',width:'100%',height:'30vh'}}>
      <div className="flex items-center justify-between" style={{display:'flex',width:'85%'}}>
        <Image src="https://fnst.axflare.com/assets/public/svg/logo/logo.svg" alt="AX Logo" width={200} height={200} />
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
                <a href="#" className="block py-2 text-gray-400 hover:text-white">Apartments</a>
                <a href="#" className="block py-2 text-gray-400 hover:text-white">Penthouses</a>
                <a href="#" className="block py-2 text-gray-400 hover:text-white">Villas</a>
                <a href="#" className="block py-2 text-gray-400 hover:text-white">Townhouses</a>
              </div>
              <div>
                <a href="#" className="block py-2 text-gray-400 hover:text-white">Rent</a>
                <a href="#" className="block py-2 text-gray-400 hover:text-white">Developers</a>
              </div>
              <div>
                <a href="#" className="block py-2 text-gray-400 hover:text-white">AX CORPORATE</a>
                <a href="#" className="block py-2 text-gray-400 hover:text-white">Reviews</a>
              </div>
              <div>
                <a href="#" className="block py-2 text-gray-400 hover:text-white">Careers</a>
                <a href="#" className="block py-2 text-gray-400 hover:text-white">Contact Us</a>
              </div>
            </div>
          </div>

          {/* Contact Info Section */}
          <div style={{display:'flex',flex:0.5,justifyContent:'flex-end'}}>
            <div className='' style={{width:350}}>
              <div className="font-bold text-lg pb-2 text-gray-400" style={{textAlign:'right'}}>Dubai, UAE</div>
              <div className='pb-4 text-gray-400' style={{textAlign:'right'}}>14th Floor, Westburry Office, Business Bay</div>
              <div className="flex space-x-2 pb-2 gap-4" style={{display:'flex',justifyContent:'flex-end'}}>
                <FaFacebookF  size={24} color='#FFD700'/>
                <FaInstagram  size={24} color='#FFD700'/>
                <FaLinkedinIn  size={24} color='#FFD700'/>
                <AiOutlineMail  size={24} color='#FFD700'/>
                <FaTwitter  size={24} color='#FFD700'/>
                <FaWhatsapp  size={24} color='#FFD700'/>
                <FaYoutube  size={24} color='#FFD700'/>
              </div>
           
            <div className="pt-4" style={{display:'flex',alignSelf:'right',justifyContent:'flex-end',width:350,height:60}}>
              <button className="border border-yellowGolden-500 text-yellowGolden-500 px-14 py-2 transition hover:bg-yellowGolden-500 hover:text-white" style={{width:300,height:60,color:"#FFD700",borderColor:'#FFD700'}}>
                CALL US
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
