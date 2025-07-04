// components/Footer.jsx
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-5 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center text-sm">
        {/* Left */}
        <div className="mb-2 md:mb-0">
          Designed & Developed by <span className="font-semibold text-purple-400">Shrinedhi M.R</span>
        </div>

        {/* Center */}
        <div className="mb-2 md:mb-0 text-center">
          © {new Date().getFullYear()} All rights reserved
        </div>

        {/* Right - Social Icons */}
        <div className="flex space-x-4">
          <a
            href="https://github.com/Web-Dev-Learner"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-purple-400 transition-colors duration-200"
            aria-label="GitHub"
          >
            <FaGithub size={20} />
          </a>
          <a
            href="https://www.linkedin.com/in/shrinedhi-m-r/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-purple-400 transition-colors duration-200"
            aria-label="LinkedIn"
          >
            <FaLinkedin size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
}
