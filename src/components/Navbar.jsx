import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FaTimes, FaBars } from 'react-icons/fa';
import './Navbar.css';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'HOME', path: '/' },
    { name: 'ABOUT', path: '/about' },
    { name: 'PROJECTS', path: '/projects' },
    { name: 'CONTACT', path: '/contact' },
  ];

  return (
    <>
      <nav className="fixed top-0 left-0 w-full bg-[#0b0c10]/80 backdrop-blur-md text-white z-50">
        <div className="flex items-center justify-between px-10 xl:px-40 py-4 w-full">
          {/* Logo / Name */}
          <p className="text-xs md:text-lg font-bold text-primary">Rainyel.dev</p>

          {/* Desktop Links */}
          <ul className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <li key={link.path}>
                <NavLink
                  to={link.path}
                  className={({ isActive }) =>
                    `font-semibold tracking-wide hover:text-primary transition-colors ${
                      isActive ? 'text-primary' : 'text-white'
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              </li>
            ))}
          </ul>

          {/* Mobile Menu Button */}
          <button
            id="menu-btn"
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white focus:outline-none z-50"
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </nav>

      {/* Mobile Dropdown Menu - Full Screen */}
      {isOpen && (
        <div className="md:hidden fixed inset-0 bg-[#0b0c10] z-40 flex flex-col items-center justify-center">
          <ul className="flex flex-col items-center space-y-8">
            {navLinks.map((link) => (
              <li key={link.path}>
                <NavLink
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) =>
                    `block font-semibold text-2xl tracking-wide py-2 hover:text-primary transition-colors ${
                      isActive ? 'text-primary' : 'text-white'
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
}