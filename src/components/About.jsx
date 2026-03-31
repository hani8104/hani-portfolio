import React, { useRef } from 'react';
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';
import { Code, Server, Database, Layout, FileUser, Rocket, Cpu, Globe, Eye, Download } from 'lucide-react';
import { FaReact, FaNodeJs, FaDatabase } from 'react-icons/fa';

const StatItem = ({ count, label }) => (
  <motion.div 
    initial={{ opacity: 0, y: 10 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="flex flex-col items-center p-4 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl min-w-[120px]"
  >
    <span className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pblue to-pcyan px-2">{count}</span>
    <span className="text-[10px] uppercase tracking-widest text-gray-400 font-semibold">{label}</span>
  </motion.div>
);

const SkillCard = ({ icon: Icon, title, label, color }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      whileHover={{ y: -10 }}
      className="relative group p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl flex flex-col items-center text-center transition-colors hover:bg-white/10 hover:border-white/20"
    >
      <div className={`p-4 rounded-xl mb-4 bg-white/5 shadow-inner transition-transform group-hover:scale-110 duration-500`}>
        <Icon size={32} className={`${color}`} />
      </div>
      <h4 className="font-bold text-white mb-1">{title}</h4>
      <span className="text-xs text-gray-400 uppercase tracking-wider font-medium">{label}</span>
      <div className="absolute -inset-0.5 bg-gradient-to-r opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500 rounded-2xl -z-10 from-pblue to-pcyan" />
    </motion.div>
  );
};

const About = ({ onOpenResume }) => {
  return (
    <section id="about" className="py-32 relative overflow-hidden bg-dark">
      {/* Background Decorative Elements */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-pblue/10 rounded-full blur-[120px] -z-10 animate-pulse"></div>
      <div className="absolute bottom-1/4 -right-20 w-[500px] h-[500px] bg-pcyan/5 rounded-full blur-[150px] -z-10 animate-pulse" style={{animationDelay: '1.5s'}}></div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-20">
          
          {/* Left Side: Profile Visuals */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:w-2/5 flex justify-center relative perspective-1000"
          >
            {/* Animated Profile Frame */}
            <div className="relative w-72 h-72 md:w-96 md:h-96 group">
              {/* Rotating Gradient Border */}
              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 rounded-full p-[3px] bg-gradient-to-r from-pblue via-purple-500 to-pcyan shadow-[0_0_40px_rgba(79,70,229,0.2)]"
              />
              
              {/* Profile Image Container */}
              <motion.div 
                animate={{ y: [0, -15, 0] }}
                transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
                className="absolute inset-[3px] rounded-full bg-dark flex items-center justify-center p-3 overflow-hidden shadow-2xl"
              >
                <div className="w-full h-full rounded-full bg-gradient-to-b from-[#151921] to-dark flex items-center justify-center overflow-hidden relative">
                  <img 
                    src="/profile.png" 
                    alt="Hani Pathak" 
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark/60 via-transparent to-transparent opacity-60"></div>
                </div>
              </motion.div>

              {/* Floating Tech Icons Around Image */}
              <motion.div 
                animate={{ 
                  y: [0, -10, 0],
                  x: [0, 5, 0]
                }}
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                className="absolute -top-4 -right-2 p-4 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl shadow-xl text-[#61DAFB] z-20 hover:border-pcyan/50 transition-colors"
              >
                <FaReact size={32} className="animate-[spin_4s_linear_infinite]" />
              </motion.div>
              
              <motion.div 
                animate={{ y: [0, 15, 0] }}
                transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
                className="absolute bottom-10 -left-10 p-4 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl shadow-xl text-[#339933] z-20 hover:border-green-500/50 transition-colors"
              >
                <FaNodeJs size={32} />
              </motion.div>

              <motion.div 
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ repeat: Infinity, duration: 3, ease: "easeInOut", delay: 0.5 }}
                className="absolute -bottom-6 right-10 p-4 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl shadow-xl text-[#47A248] z-20 hover:border-green-600/50 transition-colors"
                title="MongoDB"
              >
                <FaDatabase size={28} />
              </motion.div>
              
              {/* Outer Glow */}
              <div className="absolute -inset-10 bg-pblue/10 rounded-full blur-[60px] -z-10 group-hover:bg-pblue/20 transition-colors duration-500"></div>
            </div>
          </motion.div>

          {/* Right Side: Content */}
          <div className="lg:w-3/5 space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-block relative mb-4">
                <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">About <span className="text-pcyan">Me</span></h2>
                <motion.div 
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.5 }}
                  className="absolute -bottom-2 left-0 h-1 bg-gradient-to-r from-pblue to-pcyan rounded-full"
                />
              </div>
              <h3 className="text-2xl md:text-3xl font-semibold text-gray-200 mt-6 leading-tight">
                Full Stack <span className="text-transparent bg-clip-text bg-gradient-to-r from-pblue via-pcyan to-purple-500 font-bold px-2">MERN</span> Developer
              </h3>
            </motion.div>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-gray-400 text-lg leading-relaxed font-light"
            >
              Passionate developer specializing in the <span className="text-white font-medium">MERN Stack</span> with a focus on building scalable, performant applications. I have experience bringing platforms like <span className="text-pcyan font-medium underline underline-offset-4 decoration-pcyan/30 capitalize">Grocify</span> (Q-Commerce) and specialized <span className="text-pcyan font-medium underline underline-offset-4 decoration-pcyan/30 capitalize">RK The Complete Care - Health Care System</span> to life through efficient backend logic and intuitive UI designs. My mission is to solve complex problems through clean code and user-centric architecture.
            </motion.p>

            {/* Stats Implementation */}
            <div className="flex flex-wrap gap-4 pt-4">
              <StatItem count="5+" label="Projects Done" />
              <StatItem count="1+" label="Year Experience" />
              <StatItem count="10+" label="Technologies" />
            </div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="pt-6 flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto"
            >
              <button 
                onClick={onOpenResume}
                className="group relative px-8 py-4 bg-gradient-to-r from-pblue to-pcyan rounded-2xl text-white font-bold overflow-hidden shadow-[0_0_20px_rgba(79,70,229,0.3)] hover:shadow-[0_0_35px_rgba(6,182,212,0.5)] transition-all duration-300 transform active:scale-95 flex items-center gap-3 justify-center"
              >
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></div>
                <div className="relative z-10 flex items-center gap-3">
                  <Eye size={22} className="group-hover:rotate-12 transition-transform" />
                  <span>View Resume</span> 
                </div>
              </button>

              <a 
                href="/Resume_Hani_Pathak.pdf" 
                download="Resume_Hani_Pathak.pdf"
                className="p-4 bg-white/5 hover:bg-white/10 rounded-2xl border border-white/10 hover:border-pcyan/50 text-white transition-all backdrop-blur-md flex items-center justify-center group/dl shadow-lg hover:shadow-pcyan/10"
                title="Download Resume"
              >
                <Download size={22} className="text-pcyan group-hover/dl:scale-110 transition-transform" />
              </a>
            </motion.div>
          </div>
        </div>

        {/* Bottom Section: Skill Highlights */}
        <div className="mt-24">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h4 className="text-xl font-bold uppercase tracking-[0.2em] text-gray-500">Core Expertise</h4>
          </motion.div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <SkillCard 
              icon={Layout} 
              title="Frontend" 
              label="React.js" 
              color="text-pcyan" 
            />
            <SkillCard 
              icon={Server} 
              title="Backend" 
              label="Node.js / Express" 
              color="text-indigo-400" 
            />
            <SkillCard 
              icon={Database} 
              title="Database" 
              label="MongoDB / Atlas" 
              color="text-green-500" 
            />
            <SkillCard 
              icon={Globe} 
              title="API Design" 
              label="RESTful Arch" 
              color="text-amber-400" 
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
