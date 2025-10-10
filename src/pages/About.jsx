import { Navbar } from '../components/Navbar';
 
export function About() {
  return (
    <>
      <title>About</title>
      <Navbar />
      <section className="min-h-screen flex flex-col gap-10 justify-center items-center">
        <div className="text-center">
          <h3 className="text-6xl font-black">About Me</h3>
          <p className="text-xl">FULL-STACK DEVELOPER</p>
        </div>
        <div className="grid grid-cols-3 row-auto gap-20 max-w-6xl">
          <div>
            <p className="text-xl">Hey there! I'm Reniel, a BSIT graduate who's passionate for solving real-world problem. I am willingly to continue evolve in the field of web development.</p>
            <div className="place-self-stretch">
            </div>
          </div>
          
          <p className="text-xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis libero in totam voluptatem sapiente iusto rem voluptatibus, exercitationem labore nulla aliquid consectetur at officia dolor optio, neque minus voluptates quasi.</p>
          <img  className="w-full border-2 border-white bg-[#00A8CC]" src="/hero-img.png" alt="" />
        </div>
      </section>
       <div className="min-h-screen flex flex-col justify-center items-center">
        <div className="text-center mb-10">
          <h3 className="text-6xl font-black">About Me</h3>
          <p className="text-xl">FULL-STACK DEV BASED IN THE PHILIPPINES</p>
        </div>
        <div className="grid grid-cols-3 gap-2 max-w-5xl">
          <p className="text-xl">Hey there! I'm Reniel, a BSIT graduate who's passionate for solving real-world problem. I am willingly to continue evolve in the field of web development.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis libero in totam voluptatem sapiente iusto rem voluptatibus, exercitationem labore nulla aliquid consectetur at officia dolor optio, neque minus voluptates quasi.</p>
          <img  className="border-2 border-white bg-[#00A8CC]" src="/hero-img.png" alt="" />
        </div>
      </div>
    </>
  );
}
