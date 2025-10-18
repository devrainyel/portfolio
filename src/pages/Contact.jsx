import { Navbar } from '../components/Navbar';
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";

export function Contact() {
  return (
    <>
      <title>Contact</title>
      <Navbar />
      <section className='min-h-screen flex flex-col gap-10 justify-center items-center'>
        <div className='mt-[88px]'>
          <div className='text-center mb-20'>
            <h3 className='text-6xl font-black'>LET'S CONNECT</h3>
            <p className='text-base'>Have a project in mind?</p>
          </div>
          <div className='grid grid-cols-1 lg:grid-cols-[1fr_3fr] gap-8 mx-5'>
            <div className='space-y-6 order-2 lg:order-1'>
              <a
                className='flex items-center gap-4 p-4 rounded-lg border border-[#4b5563] group relative'
                href='mailto:devrainyel@gmail.com'
              >
                  <MdEmail className="icon" />
                  <div>
                  <h3 className='font-extrabold'>Email</h3>
                  <p>devrainyel@gmail.com</p>
                  </div>
              </a>
              <div className='flex items-center gap-4 p-4 rounded-lg border border-[#4b5563]'>
                <FaLocationDot className="icon" />
                <div>
                  <h3 className='font-extrabold'>Location</h3>
                  <p>Philippines</p>
                </div>
              </div>
            </div>
            <div className='border border-[#4b5563] rounded-lg order-1 lg:order-2 p-6  backdrop-blur-sm'>
              <h2 className='text-2xl font-extrabold mb-6'>Send Message</h2>
              <form className='space-y-4'>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor='name' className='block text-sm font-bold mb-1'>
                      Your Name
                    </label>
                    <input
                      id='name'
                      name='name'
                      className='w-full border border-[#4b5563] rounded-md p-3 placeholder:text-[#4b5563] focus:border-0 focus:outline-0'
                      placeholder='Enter your name'
                      type='text'
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor='email' className='block text-sm font-bold mb-1'>
                      Your Email
                    </label>
                    <input
                      id='email'
                      name='email'
                      className='w-full border border-[#4b5563] rounded-md p-3 placeholder:text-[#4b5563] focus:border-0 focus:outline-0'
                      placeholder='Enter your email'
                      type='email'
                      required
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor='subject' className='block text-sm font-bold mb-1'>
                    Subject
                  </label>
                  <input
                    id='subject'
                    name='subject'
                    className='w-full border border-[#4b5563] rounded-md p-3 placeholder:text-[#4b5563] focus:border-0 focus:outline-0'
                    placeholder='Enter subject'
                    type='text'
                    required
                  />
                </div>
                <div>
                  <label htmlFor='message' className='block text-sm font-bold mb-1'>
                    Your Message
                  </label>
                  <textarea
                    id='message'
                    name='message'
                    rows={4}
                    className='w-full border border-[#4b5563] rounded-md p-3 placeholder:text-[#4b5563] focus:border-0 focus:outline-0 resize-none'
                    placeholder='Enter your message'
                    required
                  />
                </div>
                <button
                  type='submit'
                  className='w-full bg-gradient-to-r from-[#00A8CC] to-[#6C63FF] hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-md cursor-pointer hover:bg-gradient-to-l'
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
