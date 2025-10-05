import { NavLink } from 'react-router';
import './Navbar.css';

export function Navbar() {
  return (
    <nav className='hidden lg:flex justify-end navbar bg-gray-800 p-4 sticky'>
      <ul className='flex space-x-6'>
        <li>
          <NavLink
            to='/'
            className='text-white hover:text-green-400 font-semibold'
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/about'
            className='text-white hover:text-green-400 font-semibold'
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/projects'
            className='text-white hover:text-green-400 font-semibold'
          >
            Projects
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/contact'
            className='text-white hover:text-green-400 font-semibold'
          >
            Contact
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
