import { Navbar } from '../components/Navbar';
import { SocialLinks } from '../components/SocialLinks';
import './Home.css';

export function Home() {
  return (
    <>
      <title>Home</title>
      <div className='min-h-screen bg-light '>
        <Navbar />
        <div className='flex flex-col items-center justify-center min-h-screen px-5'>
          <h6 className='text-4xl font-black bg-gradient-to-t from-[#00A8CC] to-[#6C63FF] text-transparent bg-clip-text'>
            FRONT-END
          </h6>
          <h6 className='text-4xl font-black bg-gradient-to-t from-[#6C63FF] to-[#00A8CC] text-transparent bg-clip-text'>
            DEVELOPER
          </h6>
          <p className='text-[#4B5563] text-[12px] text-center mt-10 mb-10'>
            I enjoy building modern web applications with React, Tailwind CSS,
            and JavaScript. I focus on creating clean, efficient, and
            user-centered experiences. My goal is to craft interfaces that feel
            intuitive and meaningful to use.
          </p>
          <SocialLinks />
        </div>
      </div>
    </>
  );
}
