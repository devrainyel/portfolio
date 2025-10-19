import { Navbar } from '../components/Navbar';
import { FaStarOfLife } from 'react-icons/fa6';
import {
  siHtml5,
  siBootstrap,
  siJavascript,
  siPhp,
  siMysql,
} from 'simple-icons';

const technologies = [
  { icon: siHtml5, name: 'HTML' },
  { icon: siBootstrap, name: 'Bootstrap' },
  { icon: siJavascript, name: 'JavaScript' },
  { icon: siPhp, name: 'PHP' },
  { icon: siMysql, name: 'Mysql' },
];

export function Projects() {
  return (
    <>
      <title>Projects</title>
      <Navbar />
      <section className='min-h-screen flex-col gap-10 justify-center'>
        <div className='text-center mb-20 mt-[120px]'>
          <h3 className='text-6xl font-black'>PROJECTS</h3>
          <p className='text-xl'>These are the projects I worked on</p>
        </div>
        <div className='flex justify-center gap-20 mb-[400px]'>
          <div className='w-full max-w-2xl space-y-28'>
            <div className='card border border-[#4b5563] w-full'>
              <div>
                <div className='w-full bg-amber-300 h-96'></div>
              </div>
              <h3 className='p-5 font-black text-center'>
                TESDA LEAVE MANAGEMENT SYSTEM (TLMS)
              </h3>
            </div>
            <div className='card border border-[#4b5563] w-full'>
              <div>
                <div className='w-full bg-amber-300 h-96'></div>
              </div>
              <h3 className='p-5 font-black text-center'>
                TESDA LEAVE MANAGEMENT SYSTEM (TLMS)
              </h3>
            </div>
            
          </div>
          
          <div className='max-w-sm sticky top-25 h-fit'>
            <h3 className="text-xl">Internship Project</h3>
            <p>
              A full stack system that allows users to request a leave and admin
              to manage the request that has role-based dashbooard for user and
              admin.
            </p>
            <ul>
              <li className='flex items-center gap-2 text-white'>
                <FaStarOfLife className='text-[#00a8cc]' />
                User leave request
              </li>
              <li className='flex items-center gap-2 text-white'>
                <FaStarOfLife className='text-[#00a8cc]' />
                User leave request
              </li>
              <li className='flex items-center gap-2 text-white'>
                <FaStarOfLife className='text-[#00a8cc]' />
                User leave request
              </li>
              <li className='flex items-center gap-2 text-white'>
                <FaStarOfLife className='text-[#00a8cc]' />
                User leave request
              </li>
            </ul>
            <div className='flex gap-2 mt-8'>
              {technologies.map((technology, index) => (
                <div
                  key={index}
                  className='rounded-full relative group border border-gray-800 p-3'
                >
                  <svg
                    role='img'
                    viewBox='0 0 24 24'
                    width='2em'
                    height='2em'
                    xmlns='http://www.w3.org/2000/svg'
                    fill={`#${technology.icon.hex}`}
                  >
                    <path d={technology.icon.path} />
                  </svg>
                   <span className='absolute top-full mb-2 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition bg-gray-800 text-white text-xs rounded px-2 py-1 whitespace-nowrap'>
                  {technology.name}
                </span>
                </div>
              ))}
            </div>
        </div>
        </div>
      </section>
    </>
  );
}
