import { FaFacebook, FaLinkedin, FaTwitter, FaGithub } from 'react-icons/fa';

export function SocialLinks() {
  return (
    <div className='flex gap-4 text-2xl'>
      <a
        href='https://facebook.com'
        target='_blank'
        rel='noopener noreferrer'
        className='text-[#111827] transition-colors'
      >
        <FaFacebook />
      </a>

      <a
        href='https://instagram.com'
        target='_blank'
        rel='noopener noreferrer'
        className='text-[#111827] transition-colors'
      >
        <FaLinkedin />
      </a>

      <a
        href='https://twitter.com'
        target='_blank'
        rel='noopener noreferrer'
        className='text-[#111827] transition-colors'
      >
        <FaTwitter />
      </a>

      <a
        href='https://github.com'
        target='_blank'
        rel='noopener noreferrer'
        className='text-[#111827] transition-colors'
      >
        <FaGithub />
      </a>
    </div>
  );
}
