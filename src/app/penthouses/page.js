// Example in apartments.js
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import Image from 'next/image';

const PentHouses = () => {
  return (
    <div>
      {/* <NavBar /> */}
      <header>
        <Image
          src="/images/towerbg.webp" // Replace with your image path
          alt="Header Image"
          width={1440}
          height={500}
          className="w-full h-[500px] object-cover"
        />
      </header>
      <div className="p-10 bg-black text-white">
        <h1 className="text-3xl font-bold">PentHouses</h1>
        <p className="mt-5 text-lg">PentHouses</p>
      </div>
      <Footer />
    </div>
  );
};

export default PentHouses;
