import { Navbar } from '../components/Navbar';
import './Home.css';

export function Home() {
  return (
    <>
      <title>Home</title>
      <Navbar />
      <main className="flex flex-col min-h-screen">
        <section className="hero flex flex-1 justify-center items-center bg-gray-900">
          <div className="hexagon"></div>
          <div className="flex flex-row items-center justify-center">
            <div className="left-heading-container mb-40">
              <h6 className="font-black text-8xl mb-">FRONT-END</h6>
              <p >Building beautiful designs with code</p>
            </div>
            <img src="/hero-img.png" alt="hero-img" className="" />
            <div className="left-heading-container mt-40">
              <p>A developer with a passion for building websites</p>
              <h6 className="font-black text-8xl">DEVELOPER</h6>
            </div>
          </div>
        </section>
      </main>

    </>
  );
}
