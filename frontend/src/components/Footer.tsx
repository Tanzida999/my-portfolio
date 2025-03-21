import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-6 mt-10">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-6">
        {/* Left Section */}
        <div>
          <h2 className="text-xl font-semibold text-white">Tanzida Nowshin</h2>
          <p className="text-sm mt-1">
            © {new Date().getFullYear()} All Rights Reserved
          </p>
        </div>

        {/* Middle Section - Social Links */}
        <div className="flex space-x-4 mt-4 md:mt-0">
          <a
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition"
          >
            LinkedIn
          </a>
          <a
            href="mailto:youremail@example.com"
            className="hover:text-blue-400 transition"
          >
            Email
          </a>
        </div>

        {/* Right Section - Quick Links */}
        <div className="mt-4 md:mt-0">
          <nav className="space-x-4">
            <Link to="/" className="hover:text-blue-400 transition">
              Home
            </Link>
            <Link to="/projects" className="hover:text-blue-400 transition">
              Projects
            </Link>
            <Link to="/contact" className="hover:text-blue-400 transition">
              Contact
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
