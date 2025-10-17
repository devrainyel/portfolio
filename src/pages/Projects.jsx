import { Navbar } from '../components/Navbar';

export function Projects() {
  return (
    <>
      <title>Projects</title>
      <Navbar />
      <section className='min-h-screen flex flex-col gap-10 justify-center'>
        <div className="max-w-5xl mx-auto">
          <div className='text-center mb-20'>
            <h3 className='text-6xl font-black'>PROJECTS</h3>
            <p className='text-xl'>These are the projects I worked on</p>
          </div>
            <div className='card border border-[#4b5563] w-1/2 mb-10'>
              <div>
                <div className="w-full bg-amber-300 h-60">
                  
                </div>
              </div>
              <p className="p-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit laboriosam quia quod consectetur delectus placeat neque eveniet fugiat animi sint saepe, expedita sunt eligendi quae molestiae necessitatibus doloribus recusandae autem.</p>
            </div>
            <div className='card border border-[#4b5563] w-1/2'>
              <div>
                <img src='' alt='' />
              </div>
              <p>dasdas</p>
            </div>
        </div>
      </section>
    </>
  );
}
