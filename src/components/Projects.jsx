import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Layers, Target, Cpu } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';

const projects = [
  {
    title: "RK The Complete Care",
    description: "A comprehensive Healthcare Platform featuring a 7-page patient portal, secure admin dashboard, and seamless doctor consultations with Razorpay payment integration.",
    tech: ["React", "JWT, Bcrypt", "Multer", "Razorpay", "MongoDB", "Tailwind CSS"],
    image: "/projects/healthcare.png",
    liveLink: "https://rk-complete-care.vercel.app/",
    githubLink: "https://github.com/hani8104/rk-complete-care",
    icon: <Target className="text-blue-400" size={20} />
  },
  {
    title: "Grocify",
    description: "A professional Grocery Web Application built with the MERN stack, featuring REST APIs, secure user authentication, product listings, and a dynamic shopping cart.",
    tech: ["React", "Node.js", "Express", "MongoDB", "REST API", "Tailwind CSS"],
    image: "/projects/grocify.png",
    liveLink: "#",
    githubLink: "https://github.com/hani8104/grocify",
    icon: <Layers className="text-green-400" size={20} />
  },
  {
    title: "Workout Tracker",
    description: "A Full Stack Workout Tracking application with complete CRUD APIs, enabling users to log exercises and visualize progress, deployed on Render.",
    tech: ["MERN Stack", "CRUD APIs", "MongoDB", "Render", "Tailwind CSS"],
    image: "/projects/workout.png",
    liveLink: "https://workout-tracker-fawn.vercel.app/",
    githubLink: "https://github.com/hani8104/workout-tracker",
    icon: <Cpu className="text-orange-400" size={20} />
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 40 }
  }
};

const Projects = () => {
  return (
    <section id="projects" className="py-24 relative overflow-hidden bg-grid">
      <div className="absolute inset-0 bg-gradient-to-b from-dark via-transparent to-dark pointer-events-none"></div>
      
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">Featured <span className="text-gradient">Projects</span></h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-pblue to-pcyan mx-auto rounded-full shadow-lg shadow-pblue/20"></div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid lg:grid-cols-2 xl:grid-cols-3 gap-10"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="glass-premium rounded-3xl overflow-hidden group border border-white/5 hover:border-pblue/40 transition-all duration-500 card-hover flex flex-col h-full"
            >
              {/* Image Preview */}
              <div className="h-56 w-full relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 brightness-[0.8] group-hover:brightness-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark/80 to-transparent"></div>
                
                {/* Overlay Links */}
                <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 backdrop-blur-sm z-30">
                  <a 
                    href={project.liveLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-3.5 bg-pblue text-white rounded-2xl hover:bg-pcyan transition-all transform hover:scale-110 shadow-xl"
                    title="View Live"
                  >
                    <ExternalLink size={24} />
                  </a>
                  <a 
                    href={project.githubLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-3.5 bg-white/10 text-white rounded-2xl hover:bg-white/20 border border-white/10 transition-all transform hover:scale-110 shadow-xl"
                    title="View Code"
                  >
                    <FaGithub size={24} />
                  </a>
                </div>

                <div className="absolute bottom-4 left-6 flex items-center gap-2">
                  <div className="p-2 bg-dark/60 backdrop-blur-md rounded-lg border border-white/10 shadow-lg">
                    {project.icon}
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-8 flex flex-col flex-grow">
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-pcyan transition-colors">{project.title}</h3>
                <p className="text-gray-400 mb-6 text-sm leading-relaxed line-clamp-3">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2.5 mt-auto">
                  {project.tech.map((tech, i) => (
                    <span 
                      key={i} 
                      className="px-3 py-1.5 text-[10px] font-bold uppercase tracking-widest text-pcyan bg-pblue/10 border border-pblue/20 rounded-lg group-hover:border-pcyan/40 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
