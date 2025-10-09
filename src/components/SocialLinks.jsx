import { FaFacebook, FaLinkedin, FaTwitter, FaGithub } from 'react-icons/fa';

export function SocialLinks() {
  return (
    <div className='flex gap-7 text-2xl p-2 bg-[#ecedee] rounded-md drop-shadow-2xl'>
      <a
        href='https://facebook.com'
        target='_blank'
        rel='noopener noreferrer'
        className='text-[#4B5563] transition-colors hover:text-[#1c1d1e]'
      >
        <FaFacebook size={30} />
      </a>

      <a
        href='https://instagram.com'
        target='_blank'
        rel='noopener noreferrer'
        className='text-[#4B5563] transition-colors hover:text-[#1c1d1e]'
      >
        <FaLinkedin size={30} />
      </a>

      <a
        href='https://twitter.com'
        target='_blank'
        rel='noopener noreferrer'
        className='text-[#4B5563] transition-colors hover:text-[#1c1d1e]'
      >
        <FaTwitter size={30} />
      </a>

      <a
        href='https://github.com'
        target='_blank'
        rel='noopener noreferrer'
        className='text-[#4B5563] transition-colors hover:text-[#1c1d1e]'
      >
        <FaGithub size={30} />
      </a>
    </div>
  );
}
