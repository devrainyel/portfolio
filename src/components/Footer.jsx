import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { FaXTwitter } from "react-icons/fa6";
import { IoChevronUp } from "react-icons/io5";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-gray-800 text-white p-8 rounded-t-xl shadow-2xl">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
        {/* Copyright */}
        <p className="text-sm text-gray-400">
          &copy; {currentYear} Reniel. All rights reserved.
        </p>

        {/* Social Links */}
        <div className="flex space-x-6">
          <a
            href="https://github.com/rainyeldev"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
            className="text-gray-300 transition transform hover:scale-120"
          >
            <FaGithub size={24} />
          </a>
          <a
            href="https://linkedin.com/in/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
            className="text-gray-300 transition transform hover:scale-120"
          >
            <FaLinkedin size={24} />
          </a>
          <a
            href="mailto:devrainyel@gmail.com"
            aria-label="Email Address"
            className="text-gray-300 transition transform hover:scale-120"
          >
            <IoMdMail size={24} />
          </a>
          <a
            href="https://twitter.com/yourhandle"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter Profile"
            className="text-gray-300 transition transform hover:scale-120"
          >
            <FaXTwitter size={24} />
          </a>
        </div>

        {/* Back to Top Button */}
        <button
          onClick={handleScrollToTop}
          className="p-3 bg-gradient-to-r from-[#00A8CC] to-[#6C63FF] hover:bg-gradient-to-l text-white rounded-full shadow-lg transition duration-300 flex items-center space-x-2"
          aria-label="Scroll to top"
        >
          <IoChevronUp  size={20} />
          <span className="text-gray-300 text-sm font-medium hidden sm:inline">
            Back to Top
          </span>
        </button>
      </div>
    </footer>
  );
}
