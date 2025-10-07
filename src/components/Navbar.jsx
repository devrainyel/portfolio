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
      <nav className='flex justify-between items-center navbar fixed top-0 left-0 right-0 px-10 py-8 font-heading'>
        <p className="font-heading font-extrabold text-sm 2xs:text-lg sm:text-2xl text-[#EDEDED]">Rainyel.dev</p>
        <ul className='flex space-x-6'>
          {navLinks.map((link) => {
            return(
              <li key={link.path}>
            <NavLink
              to={link.path}
              className='hidden md:flex hover:color-primary font-extrabold p-3'
            >
              {link.name}
            </NavLink>
            </li>
            );
          })}
          <button id="menu-btn" class="md:hidden text-white focus:outline-none">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="2"
                viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round"
                    d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </ul>
      </nav>
    </header>
  );
}
