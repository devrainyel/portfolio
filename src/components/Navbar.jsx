import { NavLink } from 'react-router';
import './Navbar.css';

export function Navbar() {
  const navLinks = [
    { name: 'HOME', path: '/' },
    { name: 'ABOUT', path: '/about' },
    { name: 'PROJECTS', path: '/projects' },
    { name: 'CONTACT', path: '/contact' },
  ];

  return (
    <header>
      <nav className='hidden lg:flex justify-between navbar fixed top-0 left-0 right-0 px-20 py-6 font-heading border-b border-[#9e9e9e]'>
        <img src="" alt="brand-logo" />
        <ul className='flex space-x-6'>
          {navLinks.map((link) => {
            return(
              <li key={link.path}>
            <NavLink
              to={link.path}
              className='hover:text-green-400 font-extrabold'
            >
              {link.name}
            </NavLink>
            </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}
