import React, { useState, useEffect } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { Link as RouterLink, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, Rocket, Zap, Globe, ArrowRight } from 'lucide-react';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';
import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion';

const navLinks = [
  { name: 'Home', to: 'home', icon: <Rocket size={14} /> },
  { name: 'About', to: 'about', icon: <Zap size={14} /> },
  { name: 'Skills', to: 'skills', icon: <Globe size={14} /> },
  { name: 'Education', to: 'education', icon: <Rocket size={14} /> },
  { name: 'Projects', to: 'projects', icon: <Zap size={14} /> },
  { name: 'Experience', to: 'experience', icon: <Globe size={14} /> },
  { name: 'Contact', to: 'contact', icon: <Rocket size={14} /> },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeTab, setActiveTab] = useState('home');
  
  const location = useLocation();
  const navigate = useNavigate();
  const isHomePage = location.pathname === '/';

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (to) => {
    if (!isHomePage) {
      navigate('/');
      // Delay to allow navigation before scrolling
      setTimeout(() => {
        const element = document.getElementById(to);
        if (element) element.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
    setIsOpen(false);
  };

  const NavItem = ({ link, mobile = false }) => {
    const content = (
      <span className="relative z-10">{link.name}</span>
    );

    const baseStyles = mobile 
      ? `group flex items-center justify-between py-5 px-6 rounded-2xl border transition-all duration-300 ${
          activeTab === link.to 
          ? 'bg-gradient-to-r from-pblue/10 to-pcyan/10 border-pcyan/20 text-pcyan' 
          : 'bg-white/3 border-transparent text-gray-400'
        }`
      : `cursor-pointer px-4 py-2 text-xs uppercase tracking-[0.15em] font-bold transition-all duration-300 relative rounded-xl hover:text-white ${
          activeTab === link.to ? 'text-pcyan' : 'text-gray-400'
        }`;

    if (isHomePage) {
      return (
        <ScrollLink
          to={link.to}
          spy={true}
          smooth={true}
          offset={-80}
          duration={500}
          onSetActive={() => setActiveTab(link.to)}
          onClick={() => setIsOpen(false)}
          className={baseStyles}
        >
          {mobile ? (
            <div className="flex items-center gap-4">
              <span className={`p-2 rounded-lg bg-white/5 transition-colors ${activeTab === link.to ? 'text-pcyan' : 'text-gray-500 group-hover:text-white'}`}>
                {link.icon}
              </span>
              <span className="text-lg font-bold tracking-wide">{link.name}</span>
            </div>
          ) : content}
          
          {!mobile && activeTab === link.to && (
            <motion.div
              layoutId="navbar-pill"
              transition={{ type: "spring", bounce: 0.25, duration: 0.5 }}
              className="absolute inset-0 bg-white/10 rounded-xl z-0"
            />
          )}
          {!mobile && activeTab === link.to && (
            <motion.div 
              layoutId="navbar-dot"
              className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 bg-pcyan rounded-full mb-0.5"
            />
          )}
          {mobile && <ArrowRight size={18} className={`transition-transform duration-300 ${activeTab === link.to ? 'translate-x-0' : '-translate-x-4 opacity-0'}`} />}
        </ScrollLink>
      );
    }

    return (
      <RouterLink
        to={`/#${link.to}`}
        onClick={() => handleNavClick(link.to)}
        className={baseStyles}
      >
        {mobile ? (
          <div className="flex items-center gap-4">
            <span className={`p-2 rounded-lg bg-white/5 transition-colors ${activeTab === link.to ? 'text-pcyan' : 'text-gray-500 group-hover:text-white'}`}>
              {link.icon}
            </span>
            <span className="text-lg font-bold tracking-wide">{link.name}</span>
          </div>
        ) : content}
        {mobile && <ArrowRight size={18} className={`transition-transform duration-300 ${activeTab === link.to ? 'translate-x-0' : '-translate-x-4 opacity-0'}`} />}
      </RouterLink>
    );
  };

  return (
    <header className="fixed top-0 w-full z-[100] transition-all duration-500">
      <motion.div
        className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-pblue via-pcyan to-pblue bg-[length:200%_auto] z-[110] origin-left"
        style={{ scaleX }}
      />

      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className={`w-full transition-all duration-500 ${
          isScrolled 
          ? 'bg-dark/80 backdrop-blur-2xl py-3 border-b border-white/5 shadow-2xl' 
          : 'bg-transparent py-6'
        }`}
      >
        <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
          {/* Logo */}
          <RouterLink 
            to="/" 
            className="cursor-pointer flex items-center gap-2 group"
          >
            <motion.div 
              whileHover={{ rotate: 360, scale: 1.1 }}
              transition={{ duration: 0.8 }}
              className="w-10 h-10 rounded-xl bg-gradient-to-tr from-pblue to-pcyan flex items-center justify-center text-white shadow-lg shadow-pblue/30"
            >
              <Rocket size={20} className="group-hover:animate-pulse" />
            </motion.div>
            <div className="flex flex-col -gap-1">
              <span className="text-xl font-bold tracking-tight text-white flex items-center gap-1 leading-none">
                Hani <span className="text-gradient">Pathak.</span>
              </span>
              <span className="text-[9px] uppercase tracking-[0.3em] text-pcyan font-bold leading-none opacity-0 group-hover:opacity-100 transition-opacity">Full Stack Dev</span>
            </div>
          </RouterLink>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex gap-1 items-center bg-white/5 border border-white/5 p-1.5 rounded-2xl backdrop-blur-md">
            {navLinks.map((link) => (
              <NavItem key={link.to} link={link} />
            ))}
          </nav>

          {/* Socials & CTA */}
          <div className="hidden lg:flex items-center gap-6">
            <div className="flex items-center gap-4 border-r border-white/10 pr-6">
              {[
                { icon: <FaGithub size={18} />, link: "https://github.com/hani8104" },
                { icon: <FaLinkedin size={18} />, link: "https://www.linkedin.com/in/hani-pathak-a756111a0/" },
                { icon: <FaInstagram size={18} />, link: "https://www.instagram.com/honeypathak007?igsh=bHAzdXJucDJwc2Fq" }
              ].map((s, i) => (
                <motion.a
                  key={i}
                  href={s.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, color: "#06B6D4" }}
                  className="text-gray-400 transition-colors"
                >
                  {s.icon}
                </motion.a>
              ))}
            </div>
            
            <RouterLink 
              to="/#contact"
              onClick={() => handleNavClick('contact')}
              className="group relative px-6 py-2.5 rounded-xl text-xs font-bold uppercase tracking-widest text-white overflow-hidden transition-all duration-300 hover:shadow-[0_0_30px_rgba(6,182,212,0.4)] cursor-pointer"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-pblue to-pcyan transition-all duration-300 group-hover:scale-110" />
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              <div className="relative flex items-center gap-2">
                <span>Hire Me</span>
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </div>
            </RouterLink>
          </div>

          {/* Mobile Menu Toggle */}
          <motion.button 
            whileTap={{ scale: 0.9 }}
            className="lg:hidden w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white" 
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>
      </motion.div>

      {/* Mobile Nav Drawer */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="lg:hidden fixed inset-0 bg-dark/60 backdrop-blur-md z-[120]"
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="lg:hidden fixed top-0 right-0 w-[80%] max-w-[400px] h-full bg-[#0D121F] z-[130] p-10 flex flex-col border-l border-white/5 shadow-2xl"
            >
              <div className="flex justify-between items-center mb-16">
                <div className="text-xl font-bold italic tracking-tight">Hani <span className="text-gradient">Pathak.</span></div>
                <button onClick={() => setIsOpen(false)} className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-white">
                  <X size={24} />
                </button>
              </div>

              <nav className="flex flex-col gap-2">
                {navLinks.map((link) => (
                  <NavItem key={link.to} link={link} mobile={true} />
                ))}
              </nav>

              {/* Mobile Socials */}
              <div className="mt-auto pt-10 border-t border-white/5 flex gap-6 justify-center">
                <motion.a whileHover={{ scale: 1.1 }} href="https://github.com/hani8104" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-gray-400 hover:text-white"><FaGithub size={24} /></motion.a>
                <motion.a whileHover={{ scale: 1.1 }} href="https://www.linkedin.com/in/hani-pathak-a756111a0/" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-gray-400 hover:text-blue-400"><FaLinkedin size={24} /></motion.a>
                <motion.a whileHover={{ scale: 1.1 }} href="https://www.instagram.com/honeypathak007?igsh=bHAzdXJucDJwc2Fq" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-gray-400 hover:text-pink-500"><FaInstagram size={24} /></motion.a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
