import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-neutral-800 text-gray-400 py-6   ">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4 ">
        
        {/* Left side - Copyright */}
        <p className="text-sm text-center md:text-left px-6">
          © {new Date().getFullYear()} Ankit Patidar. All rights reserved.
        </p>

        {/* Right side - Links */}
        <div className="flex gap-4 justify-center">
          <a
            href="https://github.com/ankitpatidar"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-yellow-400 transition"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/ankit-patidar-a84b672a5"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-yellow-400 transition"
          >
            LinkedIn
          </a>
          <a
            href="mailto:ankitpatidar7133.com"
            className="hover:text-yellow-400 transition"
          >
            Email
          </a>

           <Link
        to="/admin">
        <button className="hover:text-yellow-400 transition">Admin</button>
        </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
