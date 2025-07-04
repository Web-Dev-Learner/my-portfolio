// components/Navbar.jsx
import { Link } from "react-router-dom";
import {
  Home,
  User,
  Briefcase,
  FolderGit2,
  FileText,
} from "lucide-react";

export default function Navbar() {
  return (
    <nav className="bg-black text-white px-6 py-4 flex justify-between items-center fixed top-0 left-0 w-full z-50 shadow-md">
      {/* Brand Name */}
      <h1 className="text-2xl font-bold text-purple-500">Shrinedhi M R</h1>

      {/* Navigation Links */}
      <div className="space-x-6 text-lg font-medium flex items-center">
        <Link
          to="/"
          className="flex items-center gap-2 hover:text-purple-400 transition-colors duration-200"
        >
          <Home className="w-5 h-5" /> Home
        </Link>

        <Link
          to="/about"
          className="flex items-center gap-2 hover:text-purple-400 transition-colors duration-200"
        >
          <User className="w-5 h-5" /> About
        </Link>

        <Link
          to="/experience"
          className="flex items-center gap-2 hover:text-purple-400 transition-colors duration-200"
        >
          <Briefcase className="w-5 h-5" /> Experience
        </Link>

        <Link
          to="/projects"
          className="flex items-center gap-2 hover:text-purple-400 transition-colors duration-200"
        >
          <FolderGit2 className="w-5 h-5" /> Projects
        </Link>

        <Link
          to="/resume"
          className="flex items-center gap-2 hover:text-purple-400 transition-colors duration-200"
        >
          <FileText className="w-5 h-5" /> Resume
        </Link>
      </div>
    </nav>
  );
}
