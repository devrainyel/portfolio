import { Navbar } from '../components/Navbar';
 
export function Projects() {
  return (
    <>
      <title>Projects</title>
      <Navbar />
      <section className='min-h-screen flex flex-col gap-10 justify-center items-center'>
        <div className='mt-[88px]'>
          <div className='text-center mb-20'>
            <h3 className='text-6xl font-black'>PROJECTS</h3>
            <p className='text-xl'>FULL-STACK DEVELOPER</p>
          </div>
          <div className='grid grid-cols-3 row-auto gap-20 max-w-6xl'>
            <div>
              <h3 className='text-6xl font-black -rotate-3 bg-gradient-to-t from-[#00A8CC] to-[#6C63FF] text-transparent bg-clip-text'>
                DRIVEN TO LEARN. INSPIRED TO CREATE.
              </h3>
            </div>
            <div>
              <p className='text-xl'>
                Hey there! I'm Reniel, a BSIT graduate who's passionate for
                solving real-world problem. I love working on projects where I
                can design user-friendly systems and make apps interactive. I’m
                continuously learning new tools and technologies to become a
                more versatile developer.
              </p>
              <div className='place-self-stretch'></div>
            </div>
            <img
              className='w-full border-2 rotate-3 border-white'
              src='/hero-img.png'
              alt=''
            />
          </div>
        </div>
      </section>
    </>
  );
}
