import { Navbar } from '../components/Navbar';

export function Contact() {
  return (
    <>
      <title>Contact</title>
      <title>About</title>
      <Navbar />
      <section className='min-h-screen flex flex-col gap-10 justify-center items-center'>
        <div className='mt-[88px]'>
          <div className='text-center mb-20'>
            <h3 className='text-6xl font-black'>Let's Connect</h3>
            <p className='text-base'>Have a project in mind?</p>
          </div>
          <div className='grid grid-cols-1 lg:grid-cols-3 gap-8'>
            <div className='space-y-6'>
              <a
                className='flex items-center gap-4 p-4 rounded-lg border bg-card/50 backdrop-blur-sm hover:bg-card/80 transition-colors group relative'
                href=''
              >
                <div className='flex-1'>
                  <h1>Email</h1>
                  <p>devrainyel@gmail.com</p>
                </div>
              </a>
              <a
                className='flex items-center gap-4 p-4 rounded-lg border bg-card/50 backdrop-blur-sm hover:bg-card/80 transition-colors group relative'
                href=''
              >
                <div>
                  <h1>Location</h1>
                  <p>Philippines</p>
                </div>
              </a>
            </div>
            <div className='border col-span-2 p-5'>
              <div>Send Message</div>
              <form className='grid-cols-2' action="">
              <div>
                  <input
                    className='w-full border border p-3'
                    placeholder='Your Name'
                    type='text'
                  />
                  <input
                    className='w-full border p-3'
                    placeholder='Your Email'
                    type='email'
                  />
              </div>
              <input
                className='w-full border p-3'
                placeholder='Subject'
                type='text'
              />
              <input
                className='w-full border p-3'
                placeholder='Your Message'
                type='text'
              />
              </form>
              <button>Send Message</button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
