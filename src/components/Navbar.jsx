import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { Menu, X } from 'lucide-react';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { name: 'Home', to: 'home' },
  { name: 'About', to: 'about' },
  { name: 'Skills', to: 'skills' },
  { name: 'Education', to: 'education' },
  { name: 'Projects', to: 'projects' },
  { name: 'Experience', to: 'experience' },
  { name: 'Contact', to: 'contact' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 w-full z-40 transition-all duration-300 ${isScrolled ? 'glass py-3' : 'bg-transparent py-5'}`}>
      <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold tracking-tighter">
          <Link to="home" smooth={true} duration={500} className="cursor-pointer flex items-center gap-1 group">
            <span className="text-white">HP</span>
            <span className="text-primary-cyan text-3xl leading-none">.</span>
          </Link>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-8 items-center">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              spy={true}
              activeClass="text-primary-cyan font-semibold border-b-2 border-primary-cyan"
              smooth={true}
              offset={-70}
              duration={500}
              className="cursor-pointer text-gray-300 hover:text-white transition-colors py-1 text-sm uppercase tracking-wider relative"
            >
              {link.name}
            </Link>
          ))}
          <div className="flex items-center gap-4 ml-6 border-l border-white/10 pl-6">
            <a 
              href="https://github.com/hani8104" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
              title="GitHub"
            >
              <FaGithub size={18} />
            </a>
            <a 
              href="https://www.linkedin.com/in/hani-pathak-a756111a0/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-400 transition-colors"
              title="LinkedIn"
            >
              <FaLinkedin size={18} />
            </a>
            <a 
              href="https://www.instagram.com/honeypathak007?igsh=bHAzdXJucDJwc2Fq" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-pink-500 transition-colors"
              title="Instagram"
            >
              <FaInstagram size={18} />
            </a>
          </div>
          
          <Link 
            to="contact" 
            smooth={true} 
            duration={500} 
            offset={-70}
            className="ml-4 px-5 py-2 rounded-full border border-primary/50 hover:border-primary-cyan text-sm font-medium transition-all hover:shadow-[0_0_15px_rgba(6,182,212,0.3)] bg-primary/10 cursor-pointer"
          >
            Hire Me
          </Link>
        </nav>

        {/* Mobile Menu Toggle */}
        <button className="md:hidden text-gray-200" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden absolute top-full left-0 w-full glass border-t border-white/5 py-4 flex flex-col items-center gap-6 shadow-2xl"
          >
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                spy={true}
                activeClass="text-primary-cyan font-semibold"
                smooth={true}
                offset={-70}
                duration={500}
                onClick={() => setIsOpen(false)}
                className="cursor-pointer text-gray-300 hover:text-white text-lg tracking-wide w-full text-center"
              >
                {link.name}
              </Link>
            ))}
            
            <div className="flex gap-8 mt-4 pt-6 border-t border-white/10 w-full justify-center">
              <a href="https://github.com/hani8104" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                <FaGithub size={24} />
              </a>
              <a href="https://www.linkedin.com/in/hani-pathak-a756111a0/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400">
                <FaLinkedin size={24} />
              </a>
              <a href="https://www.instagram.com/honeypathak007?igsh=bHAzdXJucDJwc2Fq" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-pink-500">
                <FaInstagram size={24} />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
