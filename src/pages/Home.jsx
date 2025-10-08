import { Navbar } from '../components/Navbar';
import { SocialLinks } from '../components/SocialLinks';
import './Home.css';

export function Home() {
  return (
    <>
      <title>Home</title>
      <div className="min-h-screen bg-light ">

        <Navbar />
        <div className="flex flex-col items-center justify-center min-h-screen">
      <h6 className="text-base font-black text-[#6C63FF]">FRONT-END</h6>
      <h6 className="text-base font-black text-[#6C63FF]">DEVELOPER</h6>
      </div>

      </div>
    </>
  );
}
