import { Navbar } from '../components/Navbar';
 
export function About() {
  return (
    <>
      <title>About</title>
      <Navbar />
      <section className="hero min-h-screen flex justify-center items-center bg-gray-900">
      <div>
            <p className='text-green-400 font-black'>About</p>
      </div>
      </section>
    </>
  );
}
