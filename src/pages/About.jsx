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
import {
  SiMongodb,
  SiExpress,
  SiMysql,
  SiPostman,
  SiVitest,
} from 'react-icons/si';
import {
  RiTailwindCssFill,
  RiMessageFill,
  RiLightbulbFlashFill,
} from 'react-icons/ri';
import { AiOutlineRise } from 'react-icons/ai';

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
              <h3 className='text-6xl font-black -rotate-3 bg-gradient-to-t from-[#00A8CC] to-[#6C63FF] text-transparent bg-clip-text'>
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
              className='w-full border-2 rotate-3 border-white'
              src='/hero-img.png'
              alt=''
            />
          </div>
        </div>
      </section>
      <section className='flex flex-col items-center gap-10 mt-10'>
        <h3 className='text-6xl font-black'>TECHNICAL SKILLS</h3>
        <div className='mb-20 md:flex md:justify-center md:gap-20 md:mx-0'>
          <div className='mb-10 text-center'>
            <h3 className='text-4xl font-semibold'>FRONT-END</h3>
            <ul className='tech-list flex gap-6 justify-center mt-4'>
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

          <div className='mb-10 text-center'>
            <h3 className='text-4xl font-semibold'>BACK-END</h3>
            <ul className='tech-list flex gap-6 justify-center mt-4'>
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

          <div className='text-center'>
            <h3 className='text-4xl font-semibold'>TOOLS</h3>
            <ul className='tech-list flex gap-6 justify-center mt-4'>
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
        <h3 className='text-6xl font-black'>SOFT SKILLS</h3>
        <div className='grid grid-cols-3 row-auto gap-20 max-w-6xl'>
          <div className='border border-[#4b5563] rounded-md p-10'>
            <div className='flex items-center gap-2 mb-5'>
              <RiLightbulbFlashFill className='icon' size={25} />
              <h3 className='text-xl font-extrabold'>Problem-Solving</h3>
            </div>
            <p>
              I enjoy identifying challenges and finding efficient solutions
              through logical thinking and creativity. I approach problems step
              by step, focusing on understanding the root cause and delivering
              practical results
            </p>
          </div>
          <div className='border border-[#4b5563] rounded-md p-10'>
            <div className='flex items-center gap-2 mb-5'>
              <AiOutlineRise className='icon' size={25} />
              <h3 className='text-xl font-extrabold'>Adaptability</h3>
            </div>
            <p>
              I can easily adjust to new tools, environments, and workflows. I
              see change as an opportunity to grow and learn, which helps me
              stay flexible and productive in different situations.
            </p>
          </div>
          <div className='border border-[#4b5563] rounded-md p-10'>
            <div className='flex items-center gap-2 mb-5'>
              <RiMessageFill className='icon' size={25} />
              <h3 className='text-xl font-extrabold'>Communication</h3>
            </div>
            <p>
              I value teamwork and believe great results come from working
              together. I communicate clearly, listen actively, and contribute
              ideas to achieve shared goals with others.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
