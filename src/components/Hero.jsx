import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Download, Eye } from 'lucide-react';
import { FaGithub, FaLinkedin, FaInstagram, FaReact, FaNodeJs, FaDatabase } from 'react-icons/fa';
import { Link } from 'react-scroll';

const TypewriterText = ({ text }) => {
  const [displayText, setDisplayText] = useState("");
  const [isTypingComplete, setIsTypingComplete] = useState(false);

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setDisplayText(text.slice(0, index + 1));
      index++;
      if (index >= text.length) {
        clearInterval(interval);
        setIsTypingComplete(true);
      }
    }, 100);
    return () => clearInterval(interval);
  }, [text]);

  return (
    <span className="relative">
      {displayText}
      <motion.span
        animate={{ opacity: [1, 0] }}
        transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
        className={`inline-block w-[3px] h-[1em] bg-pcyan ml-1 align-middle ${isTypingComplete ? 'hidden' : ''}`}
      />
    </span>
  );
};

const Hero = ({ onOpenResume }) => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 relative overflow-hidden bg-dark">
      {/* Dynamic Background Blobs */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, 50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] bg-pblue/20 rounded-full blur-[120px]"
        />
        <motion.div
          animate={{
            x: [0, -80, 0],
            y: [0, 120, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute top-[20%] -right-[5%] w-[35%] h-[35%] bg-pcyan/20 rounded-full blur-[100px]"
        />
        <motion.div
          animate={{
            x: [0, 50, 0],
            y: [0, -100, 0],
          }}
          transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-[10%] left-[20%] w-[30%] h-[30%] bg-indigo-500/10 rounded-full blur-[110px]"
        />
      </div>

      <div className="container mx-auto px-6 md:px-12 grid lg:grid-cols-2 gap-16 items-center relative z-10">
        {/* Left Side: Content */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col items-start gap-8"
        >
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-4">
              <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                whileHover={{ scale: 1.05 }}
                className="relative group"
              >
                <div className="absolute -inset-1 bg-gradient-to-r from-pblue to-pcyan rounded-full blur opacity-40 group-hover:opacity-75 transition duration-1000 group-hover:duration-200 animate-pulse"></div>
                <div className="relative w-20 h-20 md:w-24 md:h-24 rounded-full p-[2px] bg-gradient-to-tr from-pblue to-pcyan overflow-hidden shadow-2xl">
                  <img 
                    src="/profile.png" 
                    alt="Hani Pathak" 
                    className="w-full h-full object-cover rounded-full bg-dark"
                  />
                </div>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="flex flex-col justify-center"
              >
                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-pcyan/10 text-pcyan border border-pcyan/20 backdrop-blur-sm">
                  <span className="relative flex h-2 w-2 mr-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-pcyan opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-pcyan"></span>
                  </span>
                  Available for Projects
                </span>
              </motion.div>
            </div>

            <div className="space-y-4">
              <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
                Hi, I'm <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-pblue to-pcyan px-2">Hani Pathak</span>
                <motion.span
                  animate={{ rotate: [0, 14, -8, 14, -4, 10, 0] }}
                  transition={{ duration: 2.5, repeat: Infinity, repeatDelay: 1 }}
                  className="inline-block origin-[70%_70%] ml-3"
                > 👋</motion.span>
              </h1>
              
              <div className="h-10 md:h-12 overflow-hidden">
                 <h2 className="text-2xl md:text-3xl text-gray-300 font-medium">
                  <TypewriterText text="Full Stack Web Developer (MERN)" />
                </h2>
              </div>
              
              <p className="text-gray-400 text-lg max-w-lg leading-relaxed font-light">
                Crafting exceptional digital experiences through clean code and modern aesthetics. Specialized in building scalable web applications.
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-5 w-full sm:w-auto">
            <Link 
              to="projects" 
              smooth={true} 
              offset={-80} 
              duration={800}
              className="group relative px-8 py-4 bg-gradient-to-r from-pblue to-pcyan rounded-2xl text-white font-semibold overflow-hidden shadow-[0_0_20px_rgba(79,70,229,0.3)] hover:shadow-[0_0_30px_rgba(6,182,212,0.5)] transition-all duration-300 text-center"
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                View Projects 
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></div>
            </Link>
            
            <div className="flex items-center gap-3 w-full sm:w-auto">
              <button 
                onClick={onOpenResume}
                className="flex-1 sm:flex-none px-6 py-4 bg-white/5 hover:bg-white/10 rounded-2xl border border-white/10 hover:border-pcyan/50 text-white font-medium transition-all backdrop-blur-md flex items-center justify-center gap-2"
              >
                <Eye size={18} />
                <span>View CV</span>
              </button>
              
              <a 
                href="/Resume.pdf" 
                download="Hani_Pathak_Resume.pdf"
                className="p-4 bg-white/5 hover:bg-white/10 rounded-2xl border border-white/10 hover:border-pcyan/50 text-white transition-all backdrop-blur-md flex items-center justify-center"
                title="Download Resume"
              >
                <Download size={20} />
              </a>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-6 pt-4">
            {[
              { icon: FaGithub, href: "https://github.com/hani8104", color: "hover:text-white" },
              { icon: FaLinkedin, href: "https://www.linkedin.com/in/hani-pathak-a756111a0/", color: "hover:text-[#0077B5]" },
              { icon: FaInstagram, href: "https://www.instagram.com/honeypathak007", color: "hover:text-[#E4405F]" }
            ].map((social, idx) => (
              <motion.a
                key={idx}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -5, scale: 1.1 }}
                className={`text-gray-500 transition-colors duration-300 ${social.color}`}
              >
                <social.icon size={26} />
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Right Side: Code Experience */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9, rotateY: 20 }}
          animate={{ opacity: 1, scale: 1, rotateY: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="relative perspective-1000 hidden lg:block"
        >
          {/* Main Code Card */}
          <div className="relative group">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-pblue/30 to-pcyan/30 rounded-3xl blur-2xl opacity-50 group-hover:opacity-80 transition duration-1000"></div>
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
              className="relative rounded-3xl border border-white/10 bg-[#0A0F1E]/80 backdrop-blur-3xl pl-20 pr-8 py-10 shadow-2xl overflow-hidden"
            >
              <div className="flex items-center justify-between mb-8">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-[#FF5F56]"></div>
                  <div className="w-3 h-3 rounded-full bg-[#FFBD2E]"></div>
                  <div className="w-3 h-3 rounded-full bg-[#27C93F]"></div>
                </div>
                <div className="text-xs font-mono text-gray-500 uppercase tracking-widest">developer.js</div>
              </div>

              <div className="font-mono text-sm md:text-base leading-relaxed">
                <div className="flex">
                  <span className="text-pink-500 mr-2">const</span>
                  <span className="text-blue-400">developer</span>
                  <span className="text-white ml-2">=</span>
                  <span className="text-white ml-2">{'{'}</span>
                </div>
                <div className="pl-6 mt-1 flex border-l border-white/5 ml-2">
                  <span className="text-pcyan">name:</span>
                  <span className="text-amber-300 ml-2">"Hani Pathak"</span>,
                </div>
                <div className="pl-6 mt-1 flex border-l border-white/5 ml-2">
                  <span className="text-pcyan">stack:</span>
                  <span className="text-amber-300 ml-2">"MERN"</span>,
                </div>
                <div className="pl-6 mt-1 flex border-l border-white/5 ml-2">
                  <span className="text-pcyan">skills:</span>
                  <span className="text-white ml-2">[</span>
                  <span className="text-amber-300">"React"</span>,
                  <span className="text-amber-300 ml-1">"Node.js"</span>,
                  <span className="text-amber-300 ml-1">"MongoDB"</span>
                  <span className="text-white">]</span>,
                </div>
                <div className="pl-6 mt-1 flex border-l border-white/5 ml-2">
                  <span className="text-pcyan">passion:</span>
                  <span className="text-amber-300 ml-2">"Building modern UI"</span>
                </div>
                <div className="text-white">{'}'};</div>
                
                <div className="mt-4 text-gray-500 italic text-xs md:text-sm">
                  {"// Keep coding, keep building..."}
                  <motion.span
                    animate={{ opacity: [0, 1, 0] }}
                    transition={{ duration: 0.8, repeat: Infinity }}
                    className="ml-1 w-[2px] h-[1em] bg-pcyan inline-block align-middle"
                  />
                </div>
              </div>
            </motion.div>
          </div>

          {/* Floating Tech Badges */}
          <motion.div 
            animate={{ 
              y: [0, -20, 0],
              rotate: [0, 2, -2, 0]
            }}
            transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
            className="absolute top-[10%] -right-12 px-4 py-3 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl shadow-xl flex items-center gap-3 group hover:border-pcyan/50 transition-colors"
          >
            <div className="w-10 h-10 rounded-xl bg-pblue/10 flex items-center justify-center text-[#61DAFB]">
              <FaReact size={24} className="animate-[spin_6s_linear_infinite]" />
            </div>
            <div>
              <div className="text-[10px] text-gray-500 font-bold uppercase tracking-tighter">Library</div>
              <div className="text-xs font-bold text-white">React.js</div>
            </div>
          </motion.div>

          <motion.div 
            animate={{ 
              y: [0, 25, 0],
              x: [0, 10, 0]
            }}
            transition={{ repeat: Infinity, duration: 7, ease: "easeInOut", delay: 1 }}
            className="absolute bottom-[20%] -left-20 px-4 py-3 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl shadow-xl flex items-center gap-3 group hover:border-green-500/50 transition-colors"
          >
            <div className="w-10 h-10 rounded-xl bg-green-500/10 flex items-center justify-center text-[#47A248]">
              <FaDatabase size={22} />
            </div>
            <div>
              <div className="text-[10px] text-gray-500 font-bold uppercase tracking-tighter">Database</div>
              <div className="text-xs font-bold text-white">MongoDB</div>
            </div>
          </motion.div>

          <motion.div 
            animate={{ 
              scale: [1, 1.05, 1],
              y: [0, -15, 0]
            }}
            transition={{ repeat: Infinity, duration: 6, ease: "easeInOut", delay: 2 }}
            className="absolute -bottom-10 right-4 px-4 py-3 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl shadow-xl flex items-center gap-3 group hover:border-green-600/50 transition-colors"
          >
            <div className="w-10 h-10 rounded-xl bg-green-600/10 flex items-center justify-center text-[#339933]">
              <FaNodeJs size={24} />
            </div>
            <div>
              <div className="text-[10px] text-gray-500 font-bold uppercase tracking-tighter">Runtime</div>
              <div className="text-xs font-bold text-white">Node.js</div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
