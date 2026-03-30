import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  ChevronRight, 
  Zap, 
  Rocket, 
  Users
} from 'lucide-react';
import { projectsData } from '../data/projectsData.jsx';

const ProjectCard = ({ project }) => {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="relative w-full group transition-all duration-500 rounded-[2rem] border overflow-hidden bg-[#0B1120] border-white/10 hover:border-pcyan/30 shadow-2xl"
    >
      {/* Animated Border Glow */}
      <div className="absolute -inset-[2px] bg-gradient-to-r from-pblue to-pcyan opacity-0 group-hover:opacity-100 blur-sm -z-10 transition-opacity duration-500" />

      <div className="p-6 md:p-8">
        <div className="flex flex-col lg:flex-row gap-8 items-start">
          {/* Project Image Preview */}
          <div className="relative rounded-2xl overflow-hidden w-full lg:w-[480px] aspect-video shrink-0">
            <img 
              src={project.image} 
              alt={project.title} 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-dark/80 via-transparent to-transparent opacity-60" />
            
            {/* Status Tags */}
            <div className="absolute top-4 left-4 flex gap-2">
              {project.isFeatured && (
                <span className="px-3 py-1 bg-amber-400 text-dark text-[10px] font-extrabold rounded-full uppercase tracking-tighter">
                  Featured
                </span>
              )}
              <span className={`px-3 py-1 text-[10px] font-extrabold rounded-full uppercase tracking-tighter shadow-lg ${
                project.status === 'Live' ? 'bg-green-500 text-white' : 'bg-pcyan text-dark'
              }`}>
                {project.status}
              </span>
            </div>
          </div>

          {/* Project Summary */}
          <div className="flex-1 space-y-4">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-xl border border-white/10 bg-white/5 text-pcyan shrink-0">
                {project.icon}
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-white group-hover:text-pcyan transition-colors break-words overflow-hidden">
                {project.title}
              </h3>
            </div>

            <p className="text-gray-400 text-sm md:text-base leading-relaxed line-clamp-2">
              {project.shortDescription}
            </p>

            {/* Metrics */}
            <div className="flex flex-wrap gap-4 sm:gap-6 pt-4 border-t border-white/5">
              <div className="flex flex-col min-w-fit">
                <span className="text-[10px] uppercase tracking-widest text-gray-500 mb-1 font-bold">Optimization</span>
                <div className="flex items-center gap-2">
                  <Zap size={14} className="text-amber-400" />
                  <span className="text-white font-bold">{project.metrics.performance}</span>
                </div>
              </div>
              <div className="flex flex-col border-white/5 sm:border-x sm:px-6 min-w-fit">
                <span className="text-[10px] uppercase tracking-widest text-gray-500 mb-1 font-bold">Endpoints</span>
                <div className="flex items-center gap-2">
                  <Rocket size={14} className="text-pblue" />
                  <span className="text-white font-bold">{project.metrics.apis}</span>
                </div>
              </div>
              <div className="flex flex-col min-w-fit">
                <span className="text-[10px] uppercase tracking-widest text-gray-500 mb-1 font-bold">Users</span>
                <div className="flex items-center gap-2">
                  <Users size={14} className="text-pcyan" />
                  <span className="text-white font-bold">{project.metrics.users}</span>
                </div>
              </div>
            </div>

            {/* View Details Link */}
            <div className="pt-6">
              <Link 
                to={`/project/${project.id}`}
                className="inline-flex items-center gap-2 px-6 py-3 bg-white/5 hover:bg-pcyan/10 border border-white/10 hover:border-pcyan/30 rounded-xl text-pcyan text-sm font-bold uppercase tracking-widest transition-all group/link"
              >
                <span>View Full Project Details</span>
                <ChevronRight size={16} className="group-hover/link:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
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
          className="text-center mb-16"
        >
          <div className="inline-block mb-3 px-4 py-1.5 rounded-full border border-pcyan/30 bg-pcyan/5 backdrop-blur-sm">
            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-pcyan">Professional Works</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-black mb-6 tracking-tight pr-4 pb-2">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
            Every project represents a unique challenge solved with modern technologies and a passion for exceptional user experiences.
          </p>
        </motion.div>

        <div className="flex flex-col gap-10 max-w-6xl mx-auto">
          {projectsData.map((project) => (
            <ProjectCard 
              key={project.id} 
              project={project} 
            />
          ))}
        </div>
      </div>

      {/* Decorative Orbs */}
      <div className="absolute top-1/4 -left-1/4 w-[50%] h-[50%] bg-pblue/10 rounded-full blur-[120px] -z-10 animate-pulse" />
      <div className="absolute bottom-1/4 -right-1/4 w-[50%] h-[50%] bg-pcyan/10 rounded-full blur-[120px] -z-10 animate-pulse" style={{ animationDelay: '2s' }} />
    </section>
  );
};

export default Projects;
