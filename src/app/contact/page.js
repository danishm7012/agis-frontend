import Footer from '../components/Footer';
import ConsultationForm from '../components/ConsultationForm'
const Contact = () => {
  return (
    <div className='bg-black'>
      <div className="p-10">
      <div className="h-[60vh] flex items-center justify-center">
  <ConsultationForm />
</div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
