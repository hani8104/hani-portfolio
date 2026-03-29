import React from 'react';
import { Link } from 'react-scroll';
import { FileText } from 'lucide-react';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-dark-lighter py-10 border-t border-white/5 relative z-10">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-8">
          
          {/* Logo/Brand */}
          <div className="text-xl font-bold tracking-tighter cursor-pointer">
            <Link to="home" smooth={true} duration={500} className="flex items-center gap-1 group">
              <span className="text-white group-hover:text-primary-cyan transition-colors">Hani</span>
              <span className="text-primary-cyan">Pathak.</span>
            </Link>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-6">
            <a 
              href="https://github.com/hani8104" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-all transform hover:scale-110"
              title="GitHub"
            >
              <FaGithub size={20} />
            </a>
            <a 
              href="https://www.linkedin.com/in/hani-pathak-a756111a0/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-500 transition-colors"
              title="LinkedIn"
            >
              <FaLinkedin size={20} />
            </a>
            <a 
              href="https://www.instagram.com/honeypathak007?igsh=bHAzdXJucDJwc2Fq" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-pink-500 transition-colors"
              title="Instagram"
            >
              <FaInstagram size={20} />
            </a>
            <a 
              href="/resume.pdf" 
              download="Hani_Pathak_Resume.pdf"
              className="text-gray-400 hover:text-primary-cyan transition-all transform hover:scale-110"
              title="Download Resume"
            >
              <FileText size={20} />
            </a>
          </div>
        </div>

        <div className="h-px w-full bg-gradient-to-r from-transparent via-white/5 to-transparent mb-8"></div>

        {/* Copyright */}
        <p className="text-gray-500 text-sm text-center">
          &copy; {new Date().getFullYear()} Designed & Built by Hani Pathak. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
