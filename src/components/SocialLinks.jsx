import { FaFacebook, FaLinkedin, FaGithub } from 'react-icons/fa';
import { FaSquareXTwitter } from "react-icons/fa6";

export function SocialLinks() {
  return (
    <div className="flex gap-7 text-2xl p-2 rounded-md drop-shadow-2xl pointer-events-auto">
      {/* Facebook */}
      <div className="relative group">
        <a
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#4B5563] transition-colors hover:text-[#1c1d1e]"
        >
          <FaFacebook size={30} />
        </a>
        <span className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition bg-gray-800 text-white text-xs rounded px-2 py-1 whitespace-nowrap">
          Facebook
        </span>
      </div>

      {/* LinkedIn */}
      <div className="relative group">
        <a
          href="https://www.linkedin.com/in/reniel-ryand-cuellar-b9343b242/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#4B5563] transition-colors hover:text-[#1c1d1e]"
        >
          <FaLinkedin size={30} />
        </a>
        <span className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition bg-gray-800 text-white text-xs rounded px-2 py-1 whitespace-nowrap">
          LinkedIn
        </span>
      </div>

      {/* Twitter */}
      <div className="relative group">
        <a
          href="https://twitter.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#4B5563] transition-colors hover:text-[#1c1d1e]"
        >
          <FaSquareXTwitter size={30} />
        </a>
        <span className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition bg-gray-800 text-white text-xs rounded px-2 py-1 whitespace-nowrap">
          Twitter
        </span>
      </div>

      {/* GitHub */}
      <div className="relative group">
        <a
          href="https://github.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#4B5563] transition-colors hover:text-[#1c1d1e]"
        >
          <FaGithub size={30} />
        </a>
        <span className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition bg-gray-800 text-white text-xs rounded px-2 py-1 whitespace-nowrap">
          GitHub
        </span>
      </div>
    </div>
  );
}
