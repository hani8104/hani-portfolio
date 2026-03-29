import React from 'react';
import { motion } from 'framer-motion';

const skillsData = [
  {
    category: "Frontend",
    items: [
      { name: "React.js", logo: "⚛️" },
      { name: "Tailwind CSS", logo: "🌬️" },
      { name: "Bootstrap", logo: "🅱️" },
      { name: "Vite", logo: "⚡" },
      { name: "HTML", logo: "📄" },
      { name: "CSS", logo: "🎨" },
      { name: "JavaScript", logo: "🟨" },
    ]
  },
  {
    category: "Backend",
    items: [
      { name: "Node.js", logo: "🟢" },
      { name: "Express.js", logo: "🚂" },
      { name: "REST API", logo: "🌐" },
      { name: "JWT, Bcrypt", logo: "🔐" },
      { name: "Multer", logo: "📂" },
    ]
  },
  {
    category: "Database",
    items: [
      { name: "MongoDB", logo: "🍃" },
      { name: "Mongoose", logo: "🦒" },
      { name: "Firebase", logo: "🔥" },
    ]
  },
  {
    category: "Tools",
    items: [
      { name: "Razorpay", logo: "💳" },
      { name: "Netlify", logo: "◈" },
      { name: "Render", logo: "☁️" },
      { name: "Git", logo: "🌿" },
      { name: "GitHub", logo: "🐙" },
      { name: "VS Code", logo: "💻" },
    ]
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 100 }
  }
};

const Skills = () => {
  return (
    <section id="skills" className="py-20 relative">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">My <span className="text-primary-cyan">Skills</span></h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-primary-cyan mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillsData.map((skillGroup, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="glass p-6 rounded-2xl border border-white/10 hover:border-primary/50 transition-colors group relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-primary-cyan opacity-50 group-hover:opacity-100 transition-opacity"></div>
              
              <h3 className="text-xl font-semibold mb-6 text-white">{skillGroup.category}</h3>
              
              <motion.div 
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="flex flex-col gap-4"
              >
                {skillGroup.items.map((skill, i) => (
                  <motion.div 
                    key={i}
                    variants={itemVariants}
                    whileHover={{ scale: 1.05, x: 5 }}
                    className="flex items-center gap-4 bg-white/5 p-3 rounded-xl border border-white/5 group-hover:bg-white/10 transition-all cursor-pointer"
                  >
                    <div className="w-10 h-10 rounded-lg glass flex items-center justify-center text-xl bg-dark-lighter">
                      {skill.logo}
                    </div>
                    <span className="font-medium text-gray-200">{skill.name}</span>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
