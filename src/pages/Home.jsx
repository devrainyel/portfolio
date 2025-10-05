import { Navbar } from '../components/Navbar';
 
export function Home() {
  return (
    <>
      <title>Home</title>
      <Navbar />
      <section className="hero min-h-screen flex justify-center items-center bg-gray-900">
      <div>
            <p className='text-green-400 font-black'>Dev Rainyel</p>
      </div>
      </section>
    </>
  );
}
