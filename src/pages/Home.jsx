import { Navbar } from '../components/Navbar';
import { SocialLinks } from '../components/SocialLinks';

export function Home() {
  return (
    <>
      <title>Home</title>
      <Navbar />
      {/* <main className='flex min-h-screen'>
        <div className='flex flex-1 flex-col justify-center items-center'>
          <div className='flex'>
            <h6 className='text-8xl font-black'>FRONT-END DEVELOPER</h6>
          </div>
        </div>
      </main> */}
      <main>
        <section class='min-h-screen flex flex-col justify-center items-center gap-y-20'>
          <div className='flex justify-center items-center px-10'>
            <div>
              <h1 className='text-3xl 2xs:text-5xl xs:text-7xl sm:text-8xl font-black bg-gradient-to-r from-[#00A8CC] to-[#6C63FF] bg-clip-text text-transparent text-center'>
                FRONT-END
              </h1>
              <h1 className='text-3xl 2xs:text-5xl xs:text-7xl sm:text-8xl font-black bg-gradient-to-r from-[#00A8CC] to-[#6C63FF] bg-clip-text text-transparent text-center mb-10'>
                DEVELOPER
              </h1>

              <p className='text-2xs xs:text-base sm:text-xl text-justify text-[#EDEDED]'>
                I’m a passionate developer who brings ideas to life through
                clean and responsive web designs. I build smooth user
                experiences and can handle both front-end and back-end
                development. With a love for problem-solving and learning, I’m
                ready to help create projects that truly stand out.
              </p>
            </div>
          </div>
          <div className='relative border-b-2 border-[#6C63FF] w-[180px]'>
            <img
              src='/blob-haikei.png'
              alt='background blob'
              className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] -z-10 opacity-50'
            />
            <img
              src='/hero-img.png'
              className='w-[180px] relative z-10'
              alt=''
            />
          </div>
          <SocialLinks />
        </section>
      </main>
    </>
  );
}
