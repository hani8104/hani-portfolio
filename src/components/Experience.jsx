import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';

const experiences = [
  {
    role: "Full Stack MERN Developer",
    company: "Self Projects",
    date: "2023 - Present",
    description: "Built and deployed production-ready applications including 'RK The Complete Care' (Healthcare Platform) and 'Grocify' (E-commerce). Specialized in architecting secure MERN-stack backends with JWT authentication, role-based access control, and Razorpay payment integration."
  },
  {
    role: "Frontend Developer",
    company: "Freelance",
    date: "2022 - 2023",
    description: "Collaborated with clients to design and develop responsive landing pages and interactive UI components. Optimized web performance and ensured cross-browser compatibility."
  }
];

const Experience = () => {
  return (
    <section id="experience" className="py-20 relative">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">My <span className="text-primary-cyan">Experience</span></h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-primary-cyan mx-auto rounded-full"></div>
        </motion.div>

        <div className="max-w-3xl mx-auto relative px-4">
          {/* Vertical Line */}
          <div className="absolute left-0 md:left-1/2 md:-ml-px top-0 h-full w-0.5 bg-gradient-to-b from-primary via-primary-cyan to-transparent"></div>

          {experiences.map((exp, index) => (
            <div key={index} className={`relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group mb-12 last:mb-0`}>
              
              {/* Timeline Dot */}
              <div className="absolute left-[-24px] md:left-1/2 md:-ml-[20px] w-10 h-10 rounded-full bg-dark border-4 border-primary z-10 flex items-center justify-center group-hover:border-primary-cyan transition-colors shadow-[0_0_15px_rgba(79,70,229,0.5)] group-hover:shadow-[0_0_20px_rgba(6,182,212,0.6)]">
                <Briefcase size={16} className="text-primary-cyan" />
              </div>

              {/* Content Box */}
              <motion.div 
                initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className={`w-full md:w-5/12 pl-8 md:pl-0 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}
              >
                <div className="glass p-6 rounded-2xl border border-white/5 group-hover:border-primary/30 transition-all hover:-translate-y-1 relative">
                  {/* Decorative glowing sphere inside box */}
                  <div className="absolute top-0 right-0 w-24 h-24 bg-primary/10 rounded-full blur-[30px] -z-10"></div>
                  
                  <h3 className="text-xl font-bold text-white mb-1">{exp.role}</h3>
                  <h4 className="text-primary-cyan font-medium mb-3">{exp.company}</h4>
                  <div className="inline-block px-3 py-1 rounded bg-dark-lighter text-xs text-gray-300 mb-4 border border-white/10 font-mono">
                    {exp.date}
                  </div>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {exp.description}
                  </p>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
