import { Navbar } from '../components/Navbar';
import { SocialLinks } from '../components/SocialLinks';
import './Home.css';


export function Home() {
  return (
    <>
      <title>Home</title>
      <div className='min-h-screen bg-light'>
        <Navbar />
        <div className='flex flex-col items-center justify-center min-h-screen px-5'>
          <h1 className='text-[40px] xs:text-[65px] sm:text-7xl leading-none inline-block'>
            {'FRONT-END'.split('').map((letter, i) => (
              <span
                key={i}
                className='inline-block animate-[wave_2s_ease-in-out_infinite] bg-gradient-to-t from-[#6C63FF] to-[#00A8CC] bg-clip-text text-transparent'
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                {letter}
              </span>
            ))}
          </h1>
          <h1 className='text-[40px] xs:text-[65px] sm:text-7xl  bg-gradient-to-t from-[#00A8CC] to-[#6C63FF] text-transparent bg-clip-text leading-none mb-20'>
            DEVELOPER
          </h1>
          <h3 className="font-extrabold text-xl sm:text-3xl mb-2">I'm Reniel</h3>
          <p className='text-[13px] sm:text-lg text-center mb-20 max-w-[750px]'>
            I enjoy building modern web applications with React, Tailwind CSS,
            and JavaScript. I focus on creating clean, efficient, and
            user-centered experiences. My goal is to craft interfaces that feel
            intuitive and meaningful to use.
          </p>
          <SocialLinks />
          <footer className='text-center py-4 text-[#4B5563] text-[13px]   sm:text-lg'>
            <p>© {new Date().getFullYear()} Rainyel. All rights reserved.</p>
          </footer>
        </div>
      </div>
    </>
  );
}