import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowLeft, 
  Globe, 
  ChevronRight, 
  Code2, 
  Rocket, 
  Lightbulb, 
  Layers, 
  Zap, 
  Users,
  Cpu,
  ArrowUpRight
} from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import { projectsData } from '../data/projectsData.jsx';

const ProjectPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = projectsData.find((p) => p.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!project) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-dark text-white p-6">
        <h2 className="text-3xl font-bold mb-4">Project Not Found</h2>
        <Link to="/" className="text-pcyan flex items-center gap-2 hover:underline">
          <ArrowLeft size={20} />
          <span>Back to Portfolio</span>
        </Link>
      </div>
    );
  }

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-dark text-white selection:bg-pblue/30 selection:text-pcyan"
    >
      {/* Background Gradients */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-pblue/10 rounded-full blur-[150px] -mr-40 -mt-40" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-pcyan/10 rounded-full blur-[150px] -ml-40 -mb-40" />
      </div>

      <div className="relative z-10">
        {/* Navigation Header */}
        <header className="sticky top-0 z-50 backdrop-blur-xl border-b border-white/10 bg-dark/50">
          <div className="container mx-auto px-6 h-20 flex items-center justify-between">
            <Link 
              to="/" 
              className="group flex items-center gap-3 text-gray-400 hover:text-pcyan transition-colors"
            >
              <div className="p-2 rounded-xl group-hover:bg-pcyan/10 border border-transparent group-hover:border-pcyan/30 transition-all">
                <ArrowLeft size={20} />
              </div>
              <span className="font-bold tracking-tight">Return to Showcase</span>
            </Link>

            <div className="hidden sm:flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-gray-500">
              <span>Showcase</span>
              <ChevronRight size={14} />
              <span className="text-pcyan">{project.title}</span>
            </div>
          </div>
        </header>

        <main className="container mx-auto px-6 py-12 lg:py-24">
          <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-stretch">
            {/* Left Column: Visual Showcase */}
            <motion.div 
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="w-full lg:w-1/2 static lg:sticky lg:top-40 h-fit"
            >
              <div className="group relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
                <div className="absolute -inset-[2px] bg-gradient-to-tr from-pblue to-pcyan opacity-30 blur-sm group-hover:opacity-60 transition-opacity" />
                <div className="relative aspect-video lg:aspect-video overflow-hidden bg-dark-lighter">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-[3000ms] group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark/90 via-transparent to-transparent" />
                </div>

                {/* Overlaid Badges */}
                <div className="absolute bottom-8 left-8 flex gap-4">
                  <div className="p-4 rounded-2xl backdrop-blur-2xl bg-white/5 border border-white/10 shadow-2xl">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-pcyan/20 text-pcyan">
                        {project.icon}
                      </div>
                      <div>
                        <p className="text-[10px] uppercase tracking-widest text-gray-400 font-bold">Category</p>
                        <p className="text-white font-bold">{project.status}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Buttons (Repetitive but good for UX) */}
              <div className="mt-12 flex flex-col sm:flex-row gap-4">
                {project.liveLink && project.liveLink !== "#" && (
                  <a 
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-3 px-8 py-5 bg-gradient-to-r from-pblue to-pcyan rounded-2xl text-white font-bold hover:shadow-[0_0_30px_rgba(6,182,212,0.4)] transform hover:-translate-y-1 transition-all text-center"
                  >
                    <Globe size={20} className="shrink-0" />
                    <span>{project.liveLinkLabel || "Interactive Live Demo"}</span>
                  </a>
                )}
                {project.githubLink && (
                  <a 
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 sm:flex-none flex items-center justify-center gap-3 px-8 py-5 bg-white/5 text-white border border-white/10 rounded-2xl font-bold hover:bg-white/10 hover:border-white/20 transform hover:-translate-y-1 transition-all text-center"
                  >
                    <FaGithub size={22} className="shrink-0" />
                    <span>Repository</span>
                  </a>
                )}
              </div>
            </motion.div>

            {/* Right Column: Narrative & Technical Depth */}
            <motion.div 
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="w-full lg:w-1/2 space-y-16"
            >
              {/* Header Info */}
              <div className="space-y-6">
                <div className="flex items-center gap-2">
                  <div className="h-[2px] w-12 bg-pcyan" />
                  
                </div>
                <h1 className="text-5xl md:text-7xl font-black tracking-tight leading-tight pb-2">
                  {project.title.split(' ').map((word, i) => (
                    <span key={i} className={`${i % 2 !== 0 ? 'text-gradient px-2' : ''}`}>
                      {word}{' '}
                    </span>
                  ))}
                </h1>
                <p className="text-2xl text-gray-400 font-light leading-relaxed">
                  {project.shortDescription}
                </p>
              </div>

              {/* Project Overview */}
              <div className="space-y-6">
                <div className="flex items-center gap-2 text-pcyan">
                  <Code2 size={24} />
                  <h2 className="text-xl font-bold uppercase tracking-widest italic">Project Overview</h2>
                </div>
                <p className="text-xl text-gray-300 leading-relaxed font-light first-letter:text-5xl first-letter:font-bold first-letter:mr-3 first-letter:float-left first-letter:text-pcyan">
                  {project.fullDescription}
                </p>
              </div>

              {/* Highlights & Metrics */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
                {(project.stats || [
                  { label: "Optimization", value: project.metrics.performance, icon: <Zap size={20} className="text-amber-400" /> },
                  { label: "Endpoints", value: project.metrics.apis, icon: <Rocket size={20} className="text-pblue" /> },
                  { label: "Active Users", value: project.metrics.users, icon: <Users size={20} className="text-pcyan" /> }
                ]).map((stat, idx) => (
                  <div key={idx} className="p-6 rounded-3xl bg-white/5 border border-white/10 hover:border-pcyan/30 transition-colors">
                    <div className="mb-3">
                      {stat.icon || <Zap size={20} className="text-pcyan" />}
                    </div>
                    <p className="text-2xl font-black text-white">{stat.value}</p>
                    <p className="text-[10px] uppercase tracking-widest text-gray-500 font-bold mt-1">{stat.label}</p>
                  </div>
                ))}
              </div>

              {/* Technical Challenges */}
              <div className="space-y-6">
                <div className="flex items-center gap-2 text-amber-500">
                  <Lightbulb size={24} />
                  <h2 className="text-xl font-bold uppercase tracking-widest">Solutions & Challenges</h2>
                </div>
                <div className="relative p-8 rounded-3xl bg-dark-lighter border border-white/5 overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/5 rounded-full blur-2xl -mr-16 -mt-16" />
                  <p className="text-gray-300 leading-relaxed italic relative z-10 text-lg">
                    "{project.challenges}"
                  </p>
                </div>
              </div>

              {/* Core Features */}
              {project.coreFeatures && (
                <div className="space-y-6">
                  <div className="flex items-center gap-2 text-pcyan">
                    <Rocket size={24} />
                    <h2 className="text-xl font-bold uppercase tracking-widest">Core Functionalities</h2>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {project.coreFeatures?.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 group/feat border border-transparent hover:border-white/10 transition-all">
                        <div className="w-2 h-2 rounded-full bg-pcyan group-hover/feat:scale-150 transition-transform" />
                        <span className="text-gray-400 group-hover/feat:text-white transition-colors">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Admin Panel Features */}
              {project.adminFeatures && (
                <div className="space-y-6">
                  <div className="flex items-center gap-2 text-amber-400">
                    <Layers size={24} />
                    <h2 className="text-xl font-bold uppercase tracking-widest">Admin Control Center</h2>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {project.adminFeatures?.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 group/feat border border-transparent hover:border-white/10 transition-all">
                        <div className="w-2 h-2 rounded-full bg-amber-400 group-hover/feat:scale-150 transition-transform" />
                        <span className="text-gray-400 group-hover/feat:text-white transition-colors">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Technological Features */}
              <div className="space-y-6">
                <div className="flex items-center gap-2 text-pblue">
                  <Cpu size={24} />
                  <h2 className="text-xl font-bold uppercase tracking-widest">Technological Stack</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {(project.techFeatures || project.features)?.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 group/feat border border-transparent hover:border-white/10 transition-all">
                      <div className="w-2 h-2 rounded-full bg-pblue group-hover/feat:scale-150 transition-transform" />
                      <span className="text-gray-400 group-hover/feat:text-white transition-colors">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Impact Section */}
              {project.impact && (
                <div className="space-y-6">
                  <div className="flex items-center gap-2 text-emerald-400">
                    <Zap size={24} />
                    <h2 className="text-xl font-bold uppercase tracking-widest">Project Impact</h2>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {project.impact?.map((item, idx) => (
                      <div key={idx} className="flex items-center gap-4 p-4 rounded-2xl bg-emerald-500/5 group/feat border border-emerald-500/10 hover:border-emerald-500/30 transition-all">
                        <div className="w-2 h-2 rounded-full bg-emerald-400 group-hover/feat:scale-150 transition-transform" />
                        <span className="text-gray-300 group-hover/feat:text-emerald-100 transition-colors">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Tech Stack Tags */}
              <div className="space-y-6">
                <div className="flex items-center gap-2 text-pcyan">
                  <Code2 size={24} />
                  <h2 className="text-xl font-bold uppercase tracking-widest">Development Ecosystem</h2>
                </div>
                <div className="flex flex-wrap gap-3">
                  {project.techStack?.map((tech, idx) => (
                    <span 
                      key={idx}
                      className="px-6 py-3 text-xs font-bold uppercase tracking-widest text-pcyan bg-pcyan/5 border border-pcyan/20 rounded-2xl hover:bg-pcyan/10 hover:border-pcyan/50 transition-all cursor-default"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </main>
      </div>

      <style jsx>{`
        .text-gradient {
          background: linear-gradient(to right, #4F46E5, #06B6D4);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
      `}</style>
    </motion.div>
  );
};

export default ProjectPage;
