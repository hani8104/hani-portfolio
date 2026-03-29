import React from 'react';
import { motion } from 'framer-motion';
import { Code, Server, Database, Layout, FileUser } from 'lucide-react';

const About = ({ onOpenResume }) => {
  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">About <span className="text-primary-cyan">Me</span></h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-primary-cyan mx-auto rounded-full"></div>
        </motion.div>

        <div className="flex flex-col md:flex-row items-center gap-16">
          {/* Profile Image */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="md:w-1/3 flex justify-center"
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full p-1 bg-gradient-to-br from-primary via-purple-500 to-primary-cyan">
              <div className="w-full h-full rounded-full bg-dark flex items-center justify-center p-2 overflow-hidden">
                <div className="w-full h-full rounded-full bg-gradient-to-b from-dark-lighter to-dark flex items-center justify-center overflow-hidden relative group">
                  <img 
                    src="/profile.png" 
                    alt="Hani Pathak" 
                    className="w-full h-full object-cover rounded-full group-hover:scale-110 transition-transform duration-500 grayscale group-hover:grayscale-0"
                  />
                  <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                </div>
              </div>
              
              {/* Floating badges */}
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 3, delay: 0.5 }}
                className="absolute -right-4 top-10 glass p-3 rounded-xl border border-primary/30 text-primary-cyan"
              >
                <Code size={24} />
              </motion.div>
              <motion.div 
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 4 }}
                className="absolute -left-4 bottom-10 glass p-3 rounded-xl border border-primary/30 text-primary"
              >
                <Server size={24} />
              </motion.div>
            </div>
          </motion.div>

          {/* Text & Stats */}
          <div className="md:w-2/3">
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="glass p-8 rounded-2xl border border-white/5 relative overflow-hidden group hover:border-primary/30 transition-colors"
            >
              {/* Background gradient blob */}
              <div className="absolute -right-20 -top-20 w-40 h-40 bg-primary/10 rounded-full blur-[50px] group-hover:bg-primary/20 transition-colors"></div>
              
              <h3 className="text-2xl font-semibold mb-4 text-white">Full Stack MERN Developer</h3>
              <p className="text-gray-400 text-lg leading-relaxed mb-8">
                Skilled in React.js, Node.js, Express.js, MongoDB, JWT auth, and Razorpay integration. Experienced in building production-ready healthcare and e-commerce platforms with secure admin dashboards and REST APIs. I love solving problems and building modern web applications that provide seamless user experiences.
              </p>
              
              <div className="flex flex-wrap gap-4 mb-10">
                <button 
                  onClick={onOpenResume}
                  className="group px-6 py-3 bg-white/5 hover:bg-white/10 rounded-lg border border-gray-700 hover:border-primary-cyan text-primary-cyan hover:text-white transition-all font-medium flex items-center gap-2 shadow-lg"
                >
                  <FileUser size={18} className="group-hover:scale-110 transition-transform" />
                  View Resume
                </button>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
                {[
                  { icon: <Layout className="text-pink-500 mb-2" />, title: "Frontend", desc: "React.js" },
                  { icon: <Server className="text-blue-500 mb-2" />, title: "Backend", desc: "Node.js" },
                  { icon: <Database className="text-green-500 mb-2" />, title: "Database", desc: "MongoDB" },
                  { icon: <Code className="text-yellow-500 mb-2" />, title: "RESTful", desc: "Express.js" },
                ].map((item, index) => (
                  <motion.div 
                    key={index}
                    whileHover={{ y: -5 }}
                    className="p-4 rounded-xl bg-white/5 border border-white/5 flex flex-col items-center text-center hover:bg-white/10 transition-colors"
                  >
                    {item.icon}
                    <h4 className="font-semibold text-sm text-gray-200">{item.title}</h4>
                    <span className="text-xs text-gray-400 mt-1">{item.desc}</span>
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
