import Footer from '../components/Footer';
import Image from 'next/image';

const Villas = () => {
  return (
    <div>
    <div className="relative w-screen h-screen bg-[rgba(15,15,15,0.5)]">
      {/* Image */}
      <Image
        src="/images/sell-banner.webp"
        alt="Sell Banner"
        layout="fill"
        objectFit="cover"
        fill={true}
        className="w-screen h-screen relative"
        
      />

      {/* Half-transparent background on the bottom half */}
      <div className="absolute bottom-0 w-full h-1/2 bg-[rgba(15,15,15,0.5)]"></div>

      {/* Text and Button */}
      <div className="absolute w-full bottom-[30px] text-center">
        <h1 className="text-3xl text-white font-bold tracking-[2px] mb-2">
          Let’s sell your property profitably
        </h1>
        <p className="mb-4 text-gray-300">Entire process is on us, from evaluation to a deal</p>
        <button className="px-6 py-2 border border-gold text-black bg-transparent">
          Contact An Agent
        </button>
      </div>
    </div>
    <Footer />
    </div>
  );
};

export default Villas;
