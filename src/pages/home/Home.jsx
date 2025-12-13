import { useEffect, useState } from 'react';
import { Navbar } from '../../components/Navbar';
import { SocialLinks } from '../../components/SocialLinks';
import './Home.css';
import LiquidEther from '../LiquidEther';
import { HomeMainContent } from './HomeMainContent';

export function Home() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger animations after component mounts
    setIsVisible(true);
  }, []);

  return (
    <>
      <title>Home</title>
      <div className="h-screen relative overflow-hidden">
        <Navbar />
        <div className={`fixed inset-0 z-0 transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
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
        <div className="flex flex-col items-center justify-center h-[calc(100vh-88px)] mt-[88px] md:h-[calc(100vh-96px)] md:mt-[96px] relative z-10">
          {isVisible && <HomeMainContent />}
          <div className={isVisible ? 'animate-fade-in-scale' : 'opacity-0'} style={isVisible ? { animationDelay: '0.6s' } : {}}>
            <SocialLinks />
          </div>
          <footer className={`text-center py-4 text-[#4B5563] text-[13px] sm:text-base ${isVisible ? 'animate-fade-in' : 'opacity-0'}`} style={isVisible ? { animationDelay: '0.9s' } : {}}>
            © {new Date().getFullYear()} Rainyel. All rights reserved.
          </footer>
        </div>
      </div>
    </>
  );
}
