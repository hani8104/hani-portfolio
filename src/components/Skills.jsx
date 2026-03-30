import React from 'react';
import { motion } from 'framer-motion';
import { 
  Layout, Server, Database, Globe, Lock, FolderOpen, Code, Terminal, Flame, ShieldCheck, GitBranch, CreditCard, Monitor, Cpu, Box, Wind, Zap, Braces
} from 'lucide-react';

const skillsData = [
  {
    category: "Frontend",
    icon: <Layout className="text-pink-500" size={20} />,
    items: [
      { name: "React.js", icon: <Braces className="text-[#61DAFB]" size={18} /> },
      { name: "Tailwind CSS", icon: <Wind className="text-[#06B6D4]" size={18} /> },
      { name: "Bootstrap", icon: <Box className="text-[#7952B3]" size={18} /> },
      { name: "Vite", icon: <Zap className="text-[#646CFF]" size={18} /> },
      { name: "HTML5", icon: <Code className="text-[#E34F26]" size={18} /> },
      { name: "CSS3", icon: <Code className="text-[#1572B6]" size={18} /> },
      { name: "JavaScript", icon: <Terminal className="text-[#F7DF1E]" size={18} /> },
    ]
  },
  {
    category: "Backend",
    icon: <Server className="text-blue-500" size={20} />,
    items: [
      { name: "Node.js", icon: <Cpu className="text-[#339933]" size={18} /> },
      { name: "Express.js", icon: <Terminal className="text-white" size={18} /> },
      { name: "REST API", icon: <Globe className="text-blue-400" size={18} /> },
      { name: "JWT Auth", icon: <Lock className="text-[#000000] bg-white rounded-full p-0.5" size={18} /> },
      { name: "Multer", icon: <FolderOpen className="text-amber-500" size={18} /> },
    ]
  },
  {
    category: "Database",
    icon: <Database className="text-green-500" size={20} />,
    items: [
      { name: "MongoDB", icon: <Database className="text-[#47A248]" size={18} /> },
      { name: "Mongoose", icon: <ShieldCheck className="text-[#880000]" size={18} /> },
      { name: "Firebase", icon: <Flame className="text-[#FFCA28]" size={18} /> },
    ]
  },
  {
    category: "Tools",
    icon: <Monitor className="text-blue-600" size={20} />,
    items: [
      { name: "Razorpay", icon: <CreditCard className="text-[#3395FF]" size={18} /> },
      { name: "Git", icon: <GitBranch className="text-[#F05032]" size={18} /> },
      { name: "GitHub", icon: <Box className="text-white" size={18} /> },
      { name: "VS Code", icon: <Monitor className="text-[#007ACC]" size={18} /> },
      { name: "Netlify", icon: <Globe className="text-[#00C7B7]" size={18} /> },
    ]
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.05 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, x: -10 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { type: "spring", stiffness: 100 }
  }
};

const Skills = () => {
  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-grid">
      <div className="absolute inset-0 bg-gradient-to-t from-dark via-transparent to-dark pointer-events-none"></div>
      
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">Technical <span className="text-gradient">Proficiency</span></h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-pblue to-pcyan mx-auto rounded-full shadow-lg shadow-pblue/20"></div>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillsData.map((skillGroup, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="glass-premium p-8 rounded-3xl border border-white/10 hover:border-pblue/40 transition-all duration-500 group flex flex-col h-full"
            >
              <div className="flex items-center gap-3 mb-8">
                <div className="p-2.5 bg-white/5 rounded-xl border border-white/10 group-hover:scale-110 transition-transform duration-300">
                  {skillGroup.icon}
                </div>
                <h3 className="text-xl font-bold text-white tracking-tight">{skillGroup.category}</h3>
              </div>
              
              <motion.div 
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="flex flex-col gap-3.5 mt-auto"
              >
                {skillGroup.items.map((skill, i) => (
                  <motion.div 
                    key={i}
                    variants={itemVariants}
                    whileHover={{ x: 5 }}
                    className="flex items-center gap-4 bg-white/5 p-3.5 rounded-2xl border border-white/5 hover:bg-white/10 hover:border-white/20 transition-all duration-300 cursor-default group/item"
                  >
                    <div className="text-2xl transition-transform duration-300 group-hover/item:scale-110">
                      {skill.icon}
                    </div>
                    <span className="font-semibold text-gray-300 text-sm group-hover/item:text-white transition-colors">{skill.name}</span>
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
