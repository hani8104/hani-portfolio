import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download, Eye } from 'lucide-react';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';
import { Link } from 'react-scroll';

const Hero = ({ onOpenResume }) => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 grid md:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="order-2 md:order-1 flex flex-col items-start gap-6 text-left"
        >
          <div className="flex items-center gap-4 mb-2">
            <motion.div 
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="relative w-16 h-16 md:w-20 md:h-20 rounded-full p-1 bg-gradient-to-tr from-primary to-primary-cyan shadow-lg shadow-primary/20 overflow-hidden"
            >
              <img 
                src="/profile.png" 
                alt="Hani Pathak" 
                className="w-full h-full object-cover rounded-full"
              />
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-block py-1 px-3 rounded-full border border-primary/30 bg-primary/10 text-primary-cyan text-sm font-medium tracking-wide font-mono self-end mb-2"
            >
              Available for Projects
            </motion.div>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            Hi, I’m <br/>
            <span className="text-gradient">Hani Pathak</span> 👋
          </h1>
          
          <h2 className="text-2xl md:text-3xl text-gray-300 font-light">
            Full Stack Web Developer (MERN)
          </h2>
          
          <p className="text-gray-400 text-lg max-w-lg mt-2 leading-relaxed">
            Building modern, scalable, and responsive web applications with a focus on exceptional user experiences.
          </p>

          <div className="flex flex-wrap gap-4 mt-8">
            <Link 
              to="projects" 
              smooth={true} 
              offset={-70} 
              duration={500}
              className="cursor-pointer group relative px-6 py-3 bg-gradient-to-r from-primary to-primary-cyan rounded-lg text-white font-medium flex items-center gap-2 overflow-hidden shadow-lg shadow-primary/25 hover:shadow-primary-cyan/40 transition-all"
            >
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></div>
              <span className="relative z-10 flex items-center gap-2">
                View Projects 
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
            
            <div className="flex items-center gap-4">
              <a 
                href="/resume.pdf" 
                download="Hani_Pathak_Resume.pdf"
                className="group px-6 py-3 bg-white/5 hover:bg-white/10 rounded-lg border border-gray-700 hover:border-primary-cyan text-white font-medium flex items-center gap-2 transition-all shadow-lg"
              >
                <span>Download Resume</span>
                <Download size={18} className="group-hover:translate-y-0.5 transition-transform" />
              </a>
              
              <button 
                onClick={onOpenResume}
                className="group px-6 py-3 bg-white/5 hover:bg-white/10 rounded-lg border border-gray-700 hover:border-primary-cyan text-gray-400 hover:text-primary-cyan font-medium flex items-center gap-2 transition-all shadow-lg"
                title="View Resume"
              >
                <span>View</span>
                <Eye size={18} className="group-hover:scale-110 transition-transform" />
              </button>
            </div>

            <div className="flex items-center gap-6 mt-4">
              <a 
                href="https://github.com/hani8104" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-all transform hover:scale-110"
                title="GitHub"
              >
                <FaGithub size={24} />
              </a>
              <a 
                href="https://www.linkedin.com/in/hani-pathak-a756111a0/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-400 transition-all transform hover:scale-110"
                title="LinkedIn"
              >
                <FaLinkedin size={24} />
              </a>
              <a 
                href="https://www.instagram.com/honeypathak007?igsh=bHAzdXJucDJwc2Fq" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-pink-500 transition-all transform hover:scale-110"
                title="Instagram"
              >
                <FaInstagram size={24} />
              </a>
            </div>
          </div>
        </motion.div>

        {/* Art/Illustration */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="order-1 md:order-2 flex justify-center items-center relative"
        >
          {/* Decorative glowing circles behind the image */}
          <div className="absolute inset-0 bg-primary/20 blur-[100px] rounded-full w-full h-full -z-10"></div>
          
          {/* Abstract Code Illustration / Developer Graphic */}
          <div className="relative w-full aspect-square max-w-md">
            <motion.div 
              animate={{ y: [0, -15, 0] }}
              transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
              className="absolute inset-0 rounded-2xl glass p-6 overflow-hidden border border-white/10 shadow-2xl"
            >
              <div className="flex gap-2 mb-4">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <div className="space-y-4 font-mono text-xs md:text-sm">
                <div className="text-purple-400"><span className="text-pink-500">const</span> developer = {'{'}</div>
                <div className="pl-4 text-blue-300">name: <span className="text-green-300">'Hani Pathak'</span>,</div>
                <div className="pl-4 text-blue-300">stack: <span className="text-green-300">'MERN'</span>,</div>
                <div className="pl-4 text-blue-300">skills: [<span className="text-green-300">'React'</span>, <span className="text-green-300">'Node.js'</span>, <span className="text-green-300">'MongoDB'</span>],</div>
                <div className="pl-4 text-blue-300">passion: <span className="text-green-300">'Building awesome UI'</span></div>
                <div className="text-purple-400">{'}'};</div>
                <br/>
                <div className="text-gray-400">// Keep coding, keep building</div>
                <motion.div 
                  animate={{ opacity: [0, 1, 0] }}
                  transition={{ repeat: Infinity, duration: 1 }}
                  className="w-2 h-4 bg-primary-cyan inline-block align-middle ml-1"
                ></motion.div>
              </div>
            </motion.div>
            
            {/* Floating UI Elements */}
            <motion.div 
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut", delay: 1 }}
              className="absolute -right-8 top-12 glass p-3 rounded-xl border border-white/10 flex items-center gap-3 backdrop-blur-xl"
            >
              <div className="w-8 h-8 rounded bg-blue-500/20 flex items-center justify-center">⚛️</div>
              <div className="text-sm font-semibold">React.js</div>
            </motion.div>
            
            <motion.div 
              animate={{ x: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 2 }}
              className="absolute -left-6 bottom-20 glass p-3 rounded-xl border border-white/10 flex items-center gap-3 backdrop-blur-xl"
            >
              <div className="w-8 h-8 rounded bg-green-500/20 flex items-center justify-center text-green-400 font-bold">M</div>
              <div className="text-sm font-semibold">MongoDB</div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
