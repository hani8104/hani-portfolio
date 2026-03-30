import React from 'react';
import { motion } from 'framer-motion';
import { Code, Server, Database, Layout, FileUser } from 'lucide-react';

const About = ({ onOpenResume }) => {
  return (
    <section id="about" className="py-24 relative overflow-hidden bg-grid">
      <div className="absolute inset-0 bg-gradient-to-b from-dark via-transparent to-dark pointer-events-none"></div>
      
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">About <span className="text-gradient">Me</span></h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-pblue to-pcyan mx-auto rounded-full shadow-lg shadow-pblue/20"></div>
        </motion.div>

        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Profile Image */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:w-2/5 flex justify-center relative"
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full p-1 bg-gradient-to-br from-pblue via-purple-500 to-pcyan shadow-2xl shadow-pblue/20">
              <div className="w-full h-full rounded-full bg-dark flex items-center justify-center p-2 overflow-hidden">
                <div className="w-full h-full rounded-full bg-gradient-to-b from-dark-lighter to-dark flex items-center justify-center overflow-hidden relative group">
                  <img 
                    src="/profile.png" 
                    alt="Hani Pathak" 
                    className="w-full h-full object-cover rounded-full group-hover:scale-110 transition-transform duration-700 grayscale-[20%] group-hover:grayscale-0"
                  />
                  <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                </div>
              </div>
              
              {/* Floating badges - repositioned to avoid overlap bugs */}
              <motion.div 
                animate={{ y: [0, -15, 0] }}
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                className="absolute -right-8 top-10 glass p-3.5 rounded-2xl border border-white/20 text-pcyan shadow-xl z-20"
              >
                <Code size={28} />
              </motion.div>
              <motion.div 
                animate={{ y: [0, 15, 0] }}
                transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
                className="absolute -left-8 bottom-10 glass p-3.5 rounded-2xl border border-white/20 text-indigo-400 shadow-xl z-20"
              >
                <Server size={28} />
              </motion.div>
            </div>
          </motion.div>

          {/* Text & Stats */}
          <div className="lg:w-3/5">
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="glass-premium p-10 rounded-3xl border border-white/10 relative overflow-hidden group hover:border-primary/40 transition-all duration-500"
            >
              <h3 className="text-3xl font-bold mb-6 text-white tracking-tight">Full Stack <span className="text-gradient">MERN</span> Developer</h3>
              <p className="text-gray-300 text-lg leading-relaxed mb-8 font-light">
                Skilled in React.js, Node.js, Express.js, MongoDB, JWT auth, and Razorpay integration. Experienced in building production-ready healthcare and e-commerce platforms with secure admin dashboards and REST APIs. I love solving problems and building modern web applications that provide seamless user experiences.
              </p>
              
              <div className="flex flex-wrap gap-4 mb-12">
                <button 
                  onClick={onOpenResume}
                  className="group px-8 py-3.5 bg-gradient-to-r from-pblue/10 to-pcyan/10 hover:from-pblue hover:to-pcyan rounded-xl border border-pblue/30 hover:border-transparent text-pcyan hover:text-white transition-all duration-300 font-semibold flex items-center gap-2 shadow-lg hover:shadow-pblue/40"
                >
                  <FileUser size={20} className="group-hover:translate-x-1 transition-transform" />
                  View Detailed Resume
                </button>
              </div>
              
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
                {[
                  { icon: <Layout className="text-pink-400 mb-2" />, title: "Frontend", desc: "React.js" },
                  { icon: <Server className="text-blue-400 mb-2" />, title: "Backend", desc: "Node.js" },
                  { icon: <Database className="text-green-400 mb-2" />, title: "Database", desc: "MongoDB" },
                  { icon: <Code className="text-amber-400 mb-2" />, title: "API Design", desc: "RESTful" },
                ].map((item, index) => (
                  <motion.div 
                    key={index}
                    whileHover={{ y: -8 }}
                    className="p-5 rounded-2xl bg-white/5 border border-white/5 flex flex-col items-center text-center hover:bg-white/10 transition-all duration-300 card-hover"
                  >
                    <div className="p-2 bg-white/5 rounded-lg mb-3">
                      {item.icon}
                    </div>
                    <h4 className="font-bold text-white text-sm">{item.title}</h4>
                    <span className="text-xs text-gray-400 mt-1.5 uppercase tracking-wider font-semibold">{item.desc}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
