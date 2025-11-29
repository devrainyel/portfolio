import { Navbar } from '../../components/Navbar';
import { Footer } from '../../components/Footer';
import { ContactForm } from './ContactForm';
import { ContactInfo } from './ContactInfo';

export function Contact() {
  return (
    <>
      <title>Contact</title>
      <Navbar />
      <section className='min-h-screen flex flex-col gap-10 justify-center items-center'>
        <div className='mt-[88px]'>
          <div className='text-center mb-20'>
            <h3 className='text-6xl font-black'>LET'S CONNECT</h3>
            <h4 className='text-lg font-black'>Have a project in mind? Let's hear it</h4>
          </div>
          <div className='grid grid-cols-1 lg:grid-cols-[1fr_3fr] gap-8 mx-5'>
            <ContactInfo />
            <ContactForm />
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
