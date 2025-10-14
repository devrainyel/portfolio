import { Navbar } from '../components/Navbar';
import {
  FaReact,
  FaHtml5,
  FaBootstrap,
  FaPhp,
  FaNode,
  FaGitAlt,
  FaGithub,
} from 'react-icons/fa';
import { SiMongodb, SiExpress, SiMysql, SiPostman, SiVitest } from 'react-icons/si';
import { RiTailwindCssFill } from 'react-icons/ri';

export function About() {
  return (
    <>
      <title>About</title>
      <Navbar />
      <section className='min-h-screen flex flex-col gap-10 justify-center items-center'>
        <div className='mt-[88px]'>
          <div className='text-center mb-20'>
            <h3 className='text-6xl font-black'>ABOUT ME</h3>
            <p className='text-xl'>FULL-STACK DEVELOPER</p>
          </div>
          <div className='grid grid-cols-3 row-auto gap-20 max-w-6xl'>
            <div>
              <h3 className='text-5xl font-black -rotate-3 bg-gradient-to-t from-[#00A8CC] to-[#6C63FF] text-transparent bg-clip-text'>
                DRIVEN TO LEARN. INSPIRED TO CREATE.
              </h3>
            </div>
            <div>
              <p className='text-xl'>
                Hey there! I'm Reniel, a BSIT graduate who's passionate for
                solving real-world problem. I love working on projects where I
                can design user-friendly systems and make apps interactive. I’m
                continuously learning new tools and technologies to become a
                more versatile developer.
              </p>
              <div className='place-self-stretch'></div>
            </div>
            <img
              className='w-full border-2 rotate-3 border-white bg-[#00A8CC]'
              src='/hero-img.png'
              alt=''
            />
          </div>
        </div>
      </section>
      <section className='flex flex-col gap-10 mt-10'>
        <div>
          <div className='mb-20 px-80'>
            <div className='mb-10'>
              <h3 className='text-6xl font-black'>FRONT-END</h3>
              <ul className='tech-list flex gap-6 ml-10 mt-4'>
                <li>
                  <FaHtml5 size={50} />
                </li>
                <li>
                  <FaBootstrap size={50} />
                </li>
                <li>
                  <RiTailwindCssFill size={50} />
                </li>
                <li>
                  <FaReact size={50} />
                </li>
              </ul>
            </div>
            <div className='mb-10'>
              <h3 className='text-6xl font-black'>BACK-END</h3>
              <ul className='tech-list flex gap-6 ml-10 mt-4'>
                <li>
                  <FaPhp size={50} />
                </li>
                <li>
                  <FaNode size={50} />
                </li>
                <li>
                  <SiExpress size={50} />
                </li>
                <li>
                  <SiMongodb size={50} />
                </li>
                <li>
                  <SiMysql size={50} />
                </li>
              </ul>
            </div>
            <div>
              <h3 className='text-6xl font-black'>TOOLS</h3>
              <ul className='tech-list flex gap-6 ml-10 mt-4'>
                <li>
                  <FaGitAlt size={50} />
                </li>
                <li>
                  <FaGithub size={50} />
                </li>
                <li>
                  <SiPostman size={50} />
                </li>
                <li>
                  <SiVitest size={50} />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
