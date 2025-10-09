import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FaTimes, FaBars } from 'react-icons/fa';
import { MdOutlineDarkMode, MdOutlineLightMode } from "react-icons/md";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDark, setDark] = useState(false);

  const setTheme = () => {
    if(isDark) {
      document.documentElement.classList.remove("dark");
      setDark(false);
    } else {
      document.documentElement.classList.add("dark");
      setDark(true);
    }
  }

  const navLinks = [
    { name: 'HOME', path: '/' },
    { name: 'ABOUT', path: '/about' },
    { name: 'PROJECTS', path: '/projects' },
    { name: 'CONTACT', path: '/contact' },
  ];

  return (
    <>
      <nav className="fixed top-0 left-0 w-full  backdrop-blur-md text-white z-50">
        <div className="flex items-center justify-between px-5 xl:px-40 py-5 lg:py-8 w-full">
          {/* Logo / Name */}
          <NavLink to="/" className="text-lg md:text-lg font-bold text-[#4B5563]">Rainyel.dev</NavLink>

          {/* Desktop Links */}
          <ul className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <li key={link.path}>
                <NavLink
                  to={link.path}
                  className={({ isActive }) =>
                    `font-black tracking-wide text-[#4B5563] hover:text-[#1c1d1e] transition-colors ${
                      isActive && 'border-b'
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              </li>
            ))}
                <li onClick={setTheme}>{isDark ? <MdOutlineLightMode className="text-[#4B5563] align-middle" size={25} />  : <MdOutlineDarkMode className="text-[#4B5563] align-middle" size={25}/>}</li>
          </ul>

          {/* Mobile Menu Button */}
          <button
            id="menu-btn"
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-[#4B5563] focus:outline-none z-50"
          >
            {isOpen ? <FaTimes size={25} /> : <FaBars size={25} />}
          </button>
        </div>
      </nav>

      {/* Mobile Dropdown Menu - Full Screen */}
      {isOpen && (
        <div className="mobile-dropdown md:hidden fixed inset-0 bg-[#E6EDF0] z-40 flex flex-col items-center justify-center">
          <ul className="flex flex-col items-center space-y-8">
            {navLinks.map((link) => (
              <li key={link.path}>
                <NavLink
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) =>
                    `block text-xl tracking-wide py-2 ${
                      isActive && 'border-b'
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              </li>
            ))}
            <li
        onClick={() => {
          setTheme();
          setIsOpen(false);
        }}
        className="flex items-center space-x-2 cursor-pointer text-xl tracking-wide py-2"
      >
        {isDark ? (
          <>
            <span>LIGHT MODE</span>
          </>
        ) : (
          <>
            <span>DARK MODE</span>
          </>
        )}
      </li>
          </ul>
        </div>
      )}
    </>
  );
}