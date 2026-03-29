import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';

const projects = [
  {
    title: "RK The Complete Care",
    description: "A comprehensive Healthcare Platform featuring a 7-page patient portal, secure admin dashboard, and seamless doctor consultations with Razorpay payment integration.",
    tech: ["React", "JWT, Bcrypt", "Multer", "Razorpay", "MongoDB", "Tailwind CSS"],
    liveLink: "https://rk-complete-care.vercel.app/",
    githubLink: "https://github.com/hani8104/rk-complete-care",
    bgColor: "from-blue-500/20 to-indigo-700/20"
  },
  {
    title: "Grocify",
    description: "A professional Grocery Web Application built with the MERN stack, featuring REST APIs, secure user authentication, product listings, and a dynamic shopping cart.",
    tech: ["React", "Node.js", "Express", "MongoDB", "REST API", "Tailwind CSS"],
    liveLink: "#",
    githubLink: "#",
    bgColor: "from-green-500/10 to-emerald-600/20"
  },
  {
    title: "Workout Tracker",
    description: "A Full Stack Workout Tracking application with complete CRUD APIs, enabling users to log exercises and visualize progress, deployed on Render.",
    tech: ["MERN Stack", "CRUD APIs", "MongoDB", "Render", "Tailwind CSS"],
    liveLink: "https://workout-tracker-fawn.vercel.app/",
    githubLink: "https://github.com/hani8104/workout-tracker",
    bgColor: "from-orange-500/20 to-red-700/20"
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 50 }
  }
};

const Projects = () => {
  return (
    <section id="projects" className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Featured <span className="text-primary-cyan">Projects</span></h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-primary-cyan mx-auto rounded-full"></div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ y: -10 }}
              className="glass rounded-2xl overflow-hidden group border border-white/5 hover:border-primary/50 transition-all duration-300"
            >
              {/* Image Preview / Placeholder */}
              <div className={`h-48 w-full bg-gradient-to-br ${project.bgColor} relative overflow-hidden flex items-center justify-center p-6`}>
                <div className="absolute inset-0 bg-dark/40 group-hover:bg-transparent transition-colors duration-500"></div>
                <h3 className="text-white/80 font-bold text-2xl z-10 font-mono tracking-wider drop-shadow-lg group-hover:scale-110 transition-transform duration-500">{project.title.split(' ')[0]}</h3>

                {/* Overlay Links on Hover for Desktop */}
                <div className="absolute inset-0 bg-dark/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4 z-20 backdrop-blur-sm">
                  <a href={project.liveLink} className="p-3 bg-primary text-white rounded-full hover:bg-primary-cyan transition-colors transform hover:scale-110">
                    <ExternalLink size={20} />
                  </a>
                  <a href={project.githubLink} className="p-3 bg-white/10 text-white rounded-full hover:bg-white/20 border border-white/20 transition-colors transform hover:scale-110">
                    <FaGithub size={20} />
                  </a>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-gray-400 mb-6 min-h-[48px]">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="px-3 py-1 text-xs font-medium text-primary-cyan bg-primary-cyan/10 border border-primary-cyan/20 rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Mobile Links */}
                <div className="md:hidden flex gap-4 mt-4 pt-4 border-t border-white/10">
                  <a href={project.liveLink} className="flex items-center gap-2 text-sm text-gray-300 hover:text-white">
                    <ExternalLink size={16} /> Live
                  </a>
                  <a href={project.githubLink} className="flex items-center gap-2 text-sm text-gray-300 hover:text-white">
                    <FaGithub size={16} /> Code
                  </a>
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
