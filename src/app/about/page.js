import Footer from '../components/Footer';
import Image from 'next/image';

const About = () => {
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
        <h1 className="text-3xl font-bold">About Page</h1>
        <p className="mt-5 text-lg">Details about Us...</p>
      </div>
      <Footer />
    </div>
  );
};

export default About;
