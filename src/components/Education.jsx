import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award } from 'lucide-react';

const educationData = [
  {
    degree: "BCA (Bachelor of Computer Applications)",
    institution: "Amity University, Jaipur",
    date: "2024 – Present",
    desc: "Currently pursuing a Bachelor's degree with a focus on core computer science foundations and software development."
  },
  {
    degree: "MERN Stack Development",
    institution: "Tutedude Certification",
    date: "",
    desc: "Completed an intensive training program on the MERN stack, covering building complex Full-Stack web applications with security and performance optimizations."
  }
];

const Education = () => {
  return (
    <section id="education" className="py-20 relative bg-dark-lighter/30">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">My <span className="text-primary-cyan">Education</span></h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-primary-cyan mx-auto rounded-full"></div>
        </motion.div>

        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
          {educationData.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="glass p-8 rounded-2xl border border-white/5 hover:border-primary/30 transition-all group relative overflow-hidden"
            >
              <div className="flex items-start gap-5">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary-cyan group-hover:bg-primary group-hover:text-white transition-all">
                  {index === 0 ? <GraduationCap size={24} /> : <Award size={24} />}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-1">{edu.degree}</h3>
                  <h4 className="text-primary-cyan font-medium mb-3">{edu.institution}</h4>
                  <div className="inline-block px-3 py-1 rounded bg-dark text-xs text-gray-400 mb-4 border border-white/5 font-mono">
                    {edu.date}
                  </div>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {edu.desc}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
