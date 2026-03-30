import React from 'react';
import { Link } from 'react-scroll';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';
import { FileText } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-dark pt-20 pb-10 border-t border-white/5">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12">
          {/* Logo/Brand */}
          <div className="text-xl font-bold tracking-tighter cursor-pointer mb-8 md:mb-0">
            <Link to="home" smooth={true} duration={500} className="flex items-center gap-1 group">
              <span className="text-white group-hover:text-pcyan transition-colors">Hani</span>
              <span className="text-pcyan">Pathak.</span>
            </Link>
          </div>

          {/* Social Links */}
          <div className="flex gap-6">
            <a 
              href="https://github.com/hani8104" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-pcyan transition-all transform hover:scale-110"
              title="GitHub"
            >
              <FaGithub size={20} />
            </a>
            <a 
              href="https://www.linkedin.com/in/hani-pathak-a756111a0/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-pcyan transition-all transform hover:scale-110"
              title="LinkedIn"
            >
              <FaLinkedin size={20} />
            </a>
            <a 
              href="https://www.instagram.com/honeypathak007?igsh=bHAzdXJucDJwc2Fq" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-pcyan transition-all transform hover:scale-110"
              title="Instagram"
            >
              <FaInstagram size={20} />
            </a>
            <a 
              href="/resume.pdf" 
              download="Hani_Pathak_Resume.pdf"
              className="text-gray-400 hover:text-pcyan transition-all transform hover:scale-110"
              title="Download Resume"
            >
              <FileText size={20} />
            </a>
          </div>
        </div>

        <div className="h-px w-full bg-gradient-to-r from-transparent via-white/5 to-transparent mb-8"></div>

        {/* Copyright */}
        <p className="text-gray-500 text-sm text-center">
          &copy; {new Date().getFullYear()} Hani Pathak. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
