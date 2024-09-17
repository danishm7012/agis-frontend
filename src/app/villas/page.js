// Example in apartments.js
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import Image from 'next/image';

const Villas = () => {
  return (
    <div>
      {/* <NavBar /> */}
      <header>
        <Image
          src="/path-to-your-image.jpg" // Replace with your image path
          alt="Header Image"
          width={1440}
          height={500}
          className="w-full h-[500px] object-cover"
        />
      </header>
      <div className="p-10">
        <h1 className="text-3xl font-bold">Villas</h1>
        <p className="mt-5 text-lg">Villas</p>
      </div>
      <Footer />
    </div>
  );
};

export default Villas;
