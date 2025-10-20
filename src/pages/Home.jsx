import { Navbar } from '../components/Navbar';
import { SocialLinks } from '../components/SocialLinks';
import './Home.css';
import LiquidEther from './LiquidEther';

export function Home() {
  return (
    <>
      <title>Home</title>
      
      <div className='min-h-screen relative'>
        <Navbar />
        <div className='fixed inset-0 z-0'>
        <LiquidEther
          colors={['#00a8cc', '#6c63ff', '#B19EEF']}
          mouseForce={20}
          cursorSize={30}
          isViscous={false}
          viscous={30}
          iterationsViscous={32}
          iterationsPoisson={32}
          resolution={0.5}
          isBounce={false}
          autoDemo={true}
          autoSpeed={0.5}
          autoIntensity={2.2}
          takeoverDuration={0.25}
          autoResumeDelay={3000}
          autoRampDuration={0.6}
        />
      </div>
        <div className='flex flex-col items-center justify-center min-h-[calc(100vh-88px)] mt-[88px] md:min-h-[calc(100vh-96px)] md:mt-[96px]'>
          <h1 className='text-[40px] xs:text-[65px] sm:text-7xl leading-none inline-block'>
            {'FULL-STACK'.split('').map((letter, i) => (
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
          <h3 className='font-extrabold text-xl sm:text-3xl mb-2'>
            I'm Reniel
          </h3>
          <p className='text-[13px] sm:text-lg text-center mb-20 px-5 max-w-[750px]'>
            I enjoy building modern web applications with React, Tailwind CSS,
            and JavaScript. I focus on creating clean, efficient, and
            user-centered experiences. My goal is to craft interfaces that feel
            intuitive and meaningful to use.
          </p>
          <SocialLinks />
          <footer className='text-center py-4 text-[#4B5563] text-[13px]   sm:text-base'>
            © {new Date().getFullYear()} Rainyel. All rights reserved.
          </footer>
        </div>
      </div>
    </>
  );
}
