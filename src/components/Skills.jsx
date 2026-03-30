import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Layout, Server, Database, Monitor, Braces, Wind, Zap, Code, Terminal, 
  Cpu, Globe, Lock, FolderOpen, ShieldCheck, Flame, CreditCard, GitBranch, 
  ChevronRight, ExternalLink, Award, CheckCircle2, Rocket
} from 'lucide-react';

const skillsData = [
  {
    category: "Frontend",
    icon: <Layout className="text-pink-500" size={20} />,
    items: [
      { 
        title: "React.js", 
        icon: <Braces className="text-[#61DAFB]" size={24} />,
        description: "Library for building dynamic, performance-driven user interfaces with a component-based architecture.",
        project: "Used in Grocify E-commerce App & RK The Complete Care.",
        tech: "React Hooks, Context API, Redux Toolkit, Framer Motion",
        achievements: [
          "Built a scalable component library",
          "Optimized re-renders using useMemo/useCallback",
          "Implemented complex state management for cart systems"
        ],
        level: "Advanced"
      },
      { 
        title: "Tailwind CSS", 
        icon: <Wind className="text-[#06B6D4]" size={24} />,
        description: "Utility-first CSS framework for rapid UI development with a focus on responsive design.",
        project: "Used in all major portfolio projects including the Admin Command Center.",
        tech: "PostCSS, Customizable Themes, JIT Engine",
        achievements: [
          "Designed deep-dark glassmorphic interfaces",
          "Implemented fully responsive layouts across devices",
          "Reduced CSS bundle size significantly"
        ],
        level: "Expert"
      },
      { 
        title: "JavaScript", 
        icon: <Terminal className="text-[#F7DF1E]" size={24} />,
        description: "Core programming language used for adding interactivity and handling complex logic.",
        project: "Powering the logic of Grocify's product filtering and search.",
        tech: "ES6+, Async/Await, Array Methods",
        achievements: [
          "Developed complex filtering algorithms",
          "Handled asynchronous API integrations seamlessly",
          "Implemented secure local storage handling"
        ],
        level: "Expert"
      },
      { 
        title: "Vite", 
        icon: <Zap className="text-[#646CFF]" size={24} />,
        description: "Next-generation frontend tool that significantly improves the development experience.",
        project: "Used as the build tool for the Portfolio and Grocify.",
        tech: "Rollup, HMR, Module Preloading",
        achievements: [
          "Configured optimized production builds",
          "Implemented code-splitting for faster initial loads",
          "Integrated environment variable management"
        ],
        level: "Intermediate"
      },
      { 
        title: "CSS3", 
        icon: <Code className="text-[#1572B6]" size={24} />,
        description: "Modern styling language for web applications, focusing on layout, typography, and visual polish.",
        project: "Extensively used for custom glassmorphism and animations in this portfolio.",
        tech: "Flexbox, CSS Grid, Transitions, Variables",
        achievements: [
          "Built high-performance custom animations",
          "Mastered advanced layout techniques without frameworks",
          "Engineered reusable design tokens and global styles"
        ],
        level: "Expert"
      },
      { 
        title: "HTML5", 
        icon: <Globe className="text-[#E34F26]" size={24} />,
        description: "Standard markup language for creating web pages with a focus on semantic structure and SEO.",
        project: "Foundational structure for all web applications, including this portfolio.",
        tech: "Semantic HTML, Web APIs, SEO Best Practices",
        achievements: [
          "Implemented semantic markup for improved accessibility",
          "Optimized SEO scores through proper structural hierarchy",
          "Integrated local storage and other Web APIs seamlessly"
        ],
        level: "Expert"
      }
    ]
  },
  {
    category: "Backend",
    icon: <Server className="text-blue-500" size={20} />,
    items: [
      { 
        title: "Node.js", 
        icon: <Cpu className="text-[#339933]" size={24} />,
        description: "JavaScript runtime built on Chrome's V8 engine for server-side development.",
        project: "Core engine for Grocify's backend API services.",
        tech: "Express, Middleware, NPM Ecosystem",
        achievements: [
          "Built secure and efficient API endpoints",
          "Scaled application backend for growth",
          "Implemented server-side validation using Joi"
        ],
        level: "Advanced"
      },
      { 
        title: "Express.js", 
        icon: <Terminal className="text-white" size={24} />,
        description: "Minimalist web framework for Node.js to build robust APIs quickly.",
        project: "Used to handle routing and middleware in the Laundry Service system.",
        tech: "Restful Routing, Error Handling, JWT Auth",
        achievements: [
          "Implemented multi-role authentication (Admin/User)",
          "Designed clean and maintainable folder structures",
          "Integrated payment gateways securely"
        ],
        level: "Advanced"
      },
      { 
        title: "JWT Auth", 
        icon: <Lock className="text-amber-400" size={24} />,
        description: "Standard for securely transmitting information between parties as a JSON object.",
        project: "Security layer for all dashboard-enabled applications.",
        tech: "Bcrypt, Token Refresh Logic, Cookies",
        achievements: [
          "Ensured Zero-vulnerability login processes",
          "Managed secure session handling via HTTP-only cookies",
          "Implemented role-based access control (RBAC)"
        ],
        level: "Advanced"
      }
    ]
  },
  {
    category: "Database",
    icon: <Database className="text-green-500" size={20} />,
    items: [
      { 
        title: "MongoDB", 
        icon: <Database className="text-[#47A248]" size={24} />,
        description: "NoSQL document-oriented database for high-volume data storage.",
        project: "Main database for user orders and product inventories in Grocify.",
        tech: "Aggregation Pipelines, Indexing",
        achievements: [
          "Designed efficient data schemas for complex relationships",
          "Optimized query performance through indexing",
          "Handled dynamic product data efficiently"
        ],
        level: "Advanced"
      },
      { 
        title: "Firebase", 
        icon: <Flame className="text-[#FFCA28]" size={24} />,
        description: "Google's platform for building mobile and web applications with real-time sync.",
        project: "Used for real-time notifications in the Laundry Service app.",
        tech: "Firestore, Authentication, Cloud Storage",
        achievements: [
          "Implemented real-time status updates",
          "Managed secure asset uploads for user profiles",
          "Leveraged cloud functions for automated workflows"
        ],
        level: "Intermediate"
      }
    ]
  },
  {
    category: "Tools",
    icon: <Monitor className="text-blue-600" size={20} />,
    items: [
      { 
        title: "GitHub", 
        icon: <GitBranch className="text-[#F05032]" size={24} />,
        description: "Version control systems used to track changes and collaborate.",
        project: "Managed over 10+ professional project repositories.",
        tech: "Branching Strategies, PR Reviews, Git Actions",
        achievements: [
          "Maintained clean and structured commit histories",
          "Collaborated effectively using pull requests",
          "Set up CI/CD workflows for automated deployments"
        ],
        level: "Advanced"
      },
      { 
        title: "Razorpay", 
        icon: <CreditCard className="text-[#3395FF]" size={24} />,
        description: "Payment gateway integration for seamless financial transactions.",
        project: "Integrated into Grocify for secure user payments.",
        tech: "Webhooks, API Integration, Order Handling",
        achievements: [
          "Successfully processed over 500+ test transactions",
          "Handled payment failure scenarios gracefully",
          "Implemented secure checksum validation"
        ],
        level: "Intermediate"
      }
    ]
  }
];

const SkillCard = ({ skill, isSelected, onClick }) => (
  <motion.button
    whileHover={{ y: -2, x: 2 }}
    whileTap={{ scale: 0.98 }}
    onClick={onClick}
    className={`w-full text-left p-4 rounded-2xl border transition-all duration-300 relative overflow-hidden group ${
      isSelected 
        ? 'glass border-pblue shadow-[0_0_20px_rgba(79,70,229,0.2)] bg-pblue/5' 
        : 'glass-premium border-white/10 hover:border-white/20'
    }`}
  >
    <div className="flex items-center gap-4">
      <div className={`p-2.5 rounded-xl border transition-colors duration-300 ${
        isSelected ? 'bg-pblue/20 border-pblue/40' : 'bg-white/5 border-white/10 group-hover:bg-white/10'
      }`}>
        {skill.icon}
      </div>
      <div className="flex-1 min-w-0">
        <h4 className="text-sm font-bold text-white tracking-tight truncate">{skill.title}</h4>
        <p className="text-[10px] text-gray-500 truncate mt-0.5">{skill.description}</p>
      </div>
      {isSelected && (
        <motion.div layoutId="active-indicator" className="absolute right-3">
          <ChevronRight size={16} className="text-pblue" />
        </motion.div>
      )}
    </div>
  </motion.button>
);

const SkillDetail = ({ skill }) => (
  <motion.div
    initial={{ opacity: 0, x: 50, scale: 0.95 }}
    animate={{ opacity: 1, x: 0, scale: 1 }}
    exit={{ opacity: 0, x: -50, scale: 0.95 }}
    transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
    className="glass-premium rounded-[2rem] border border-white/10 p-8 md:p-12 relative overflow-hidden shadow-2xl h-full flex flex-col"
  >
    {/* Dynamic Background Glow */}
    <div className="absolute top-0 right-0 w-80 h-80 bg-pblue/15 blur-[120px] rounded-full -mr-32 -mt-32 pointer-events-none animate-pulse"></div>
    <div className="absolute bottom-0 left-0 w-64 h-64 bg-pcyan/10 blur-[100px] rounded-full -ml-20 -mb-20 pointer-events-none"></div>
    
    <div className="relative z-10 space-y-10 flex-1 overflow-y-auto custom-scrollbar pr-4">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
        <div className="flex items-center gap-8">
          <motion.div 
            initial={{ scale: 0.8, rotate: -10 }}
            animate={{ scale: 1, rotate: 0 }}
            className="p-6 bg-gradient-to-br from-white/10 to-white/5 rounded-[2rem] border border-white/10 shadow-2xl backdrop-blur-3xl"
          >
            {skill.icon}
          </motion.div>
          <div>
            <h3 className="text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight mb-3">
              {skill.title}
            </h3>
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2 px-3 py-1 bg-pcyan/10 border border-pcyan/20 rounded-full">
                <Award size={14} className="text-pcyan" />
                <span className="text-[10px] uppercase tracking-[0.2em] text-pcyan font-bold">{skill.level} Proficiency</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Description Area */}
      <div className="space-y-4">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10">
          <Flame size={12} className="text-amber-400" />
          <span className="text-[10px] uppercase tracking-widest text-gray-400 font-bold">Expertise Overview</span>
        </div>
        <p className="text-gray-300 text-xl leading-relaxed font-light">
          {skill.description}
        </p>
      </div>

      {/* Info Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="space-y-4 group"
        >
          <div className="flex items-center gap-3 text-pcyan">
            <Rocket size={14} className="animate-bounce" />
            <h5 className="text-[11px] uppercase tracking-widest font-bold">Real-World Impact</h5>
          </div>
          <div className="p-6 bg-white/5 rounded-3xl border border-white/5 group-hover:border-pcyan/30 transition-colors duration-500 shadow-xl">
             <p className="text-sm text-gray-200 font-medium leading-relaxed italic">
              "{skill.project}"
            </p>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="space-y-4 group"
        >
          <div className="flex items-center gap-3 text-pblue">
            <Cpu size={14} className="animate-pulse" />
            <h5 className="text-[11px] uppercase tracking-widest font-bold">Key Technologies</h5>
          </div>
          <div className="p-6 bg-white/5 rounded-3xl border border-white/5 group-hover:border-pblue/30 transition-colors duration-500 shadow-xl">
             <p className="text-sm text-gray-200 font-medium leading-relaxed tracking-wide">
              {skill.tech}
            </p>
          </div>
        </motion.div>
      </div>

      {/* Achievements Card */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="relative group mt-4 overflow-hidden rounded-[2.5rem] p-1 bg-gradient-to-br from-white/10 via-transparent to-white/10"
      >
        <div className="bg-[#0D121F] p-8 md:p-10 rounded-[2.4rem] space-y-6 relative z-10">
          <div className="flex items-center justify-between mb-2">
            <h5 className="text-[11px] uppercase tracking-widest text-green-400 font-bold flex items-center gap-3">
              <CheckCircle2 size={16} /> Professional Milestones
            </h5>
            <div className="flex gap-1">
              {[1, 2, 3].map(i => <div key={i} className="w-1 h-1 rounded-full bg-white/20" />)}
            </div>
          </div>
          
          <div className="grid gap-4">
            {skill.achievements.map((item, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, x: -15 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 + (idx * 0.1) }}
                className="flex items-center gap-5 p-4 rounded-2xl hover:bg-white/5 transition-all duration-300 border border-transparent hover:border-white/5"
              >
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-green-500/10 flex items-center justify-center border border-green-500/20">
                  <CheckCircle2 size={14} className="text-green-500" />
                </div>
                <p className="text-[15px] text-gray-300 font-medium leading-relaxed">{item}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  </motion.div>
);

const Skills = () => {
  const [selectedSkill, setSelectedSkill] = useState(null);

  return (
    <section id="skills" className="py-28 relative overflow-hidden bg-grid">
      {/* Decorative blurred backgrounds */}
      <div className="absolute top-0 -left-1/4 w-[50%] h-[50%] bg-pblue/5 blur-[150px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-0 -right-1/4 w-[50%] h-[50%] bg-pcyan/5 blur-[150px] rounded-full pointer-events-none"></div>
      
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-24"
        >
          <div className="inline-block px-4 py-1.5 mb-6 rounded-full bg-pblue/10 border border-pblue/20 backdrop-blur-md">
            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-pblue">Mastery & Experience</span>
          </div>
          <h2 className="text-5xl md:text-7xl font-bold mb-8 tracking-tight text-white italic pr-4 pb-4">
            Technical <span className="text-gradient pr-6 pb-1">Proficiency</span>
          </h2>
          <p className="max-w-3xl mx-auto text-gray-400 text-xl leading-relaxed font-light">
            An in-depth look at my professional skill set, illustrating complex problem solving and real-world impact across various tech landscapes.
          </p>
        </motion.div>

        {/* Dashboard-style Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Side: Skill Categories and Grid Cards */}
          <div className="lg:col-span-5 space-y-12">
            {skillsData.map((category, catIdx) => (
              <div key={catIdx} className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="p-2 bg-white/5 rounded-xl border border-white/10 shadow-sm">
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white tracking-widest uppercase">{category.category}</h3>
                  <div className="flex-grow h-[1px] bg-gradient-to-r from-white/10 to-transparent"></div>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {category.items.map((skill, skillIdx) => (
                    <SkillCard 
                      key={skillIdx} 
                      skill={skill} 
                      isSelected={selectedSkill?.title === skill.title}
                      onClick={() => setSelectedSkill(skill)}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Right Side: Skill Detail Panel */}
          <div className="lg:col-span-7 lg:sticky lg:top-32 h-fit min-h-[600px]">
            <AnimatePresence mode="wait">
              {selectedSkill ? (
                <SkillDetail key={selectedSkill.title} skill={selectedSkill} />
              ) : (
                <motion.div
                  key="empty-state"
                  initial={{ opacity: 0, scale: 0.9, y: 30 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9, x: -50 }}
                  transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  className="glass-premium rounded-[3rem] border border-white/10 p-12 h-full flex flex-col items-center justify-center text-center space-y-10 min-h-[600px] relative overflow-hidden"
                >
                  {/* Premium Background Glow */}
                  <div className="absolute inset-0 bg-gradient-to-br from-pblue/5 via-dark to-pcyan/5 opacity-40"></div>
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-pblue/10 blur-[120px] rounded-full"></div>
                  
                  <div className="relative z-10 space-y-10 group">
                    <motion.div 
                      animate={{ 
                        y: [0, -20, 0],
                        rotate: [0, 5, -5, 0],
                        scale: [1, 1.05, 1]
                      }}
                      transition={{ 
                        repeat: Infinity, 
                        duration: 6, 
                        ease: "easeInOut" 
                      }}
                      className="relative inline-block"
                    >
                      <div className="p-10 bg-white/5 rounded-full border border-white/10 shadow-2xl backdrop-blur-3xl relative">
                        <div className="absolute -inset-4 bg-gradient-to-r from-pblue to-pcyan rounded-full blur opacity-20 animate-pulse"></div>
                        <Cpu size={80} className="text-pcyan/60 group-hover:text-pcyan transition-colors duration-500" />
                      </div>
                    </motion.div>

                    <div className="space-y-4">
                      <h3 className="text-3xl md:text-4xl font-bold text-white tracking-tight leading-tight">
                        Explore My <span className="text-transparent bg-clip-text bg-gradient-to-r from-pblue to-pcyan">Technical Arsenal</span>
                      </h3>
                      <p className="text-gray-400 max-w-sm mx-auto text-lg leading-relaxed font-light">
                        Select a technical skill from the left to dive into my professional expertise and real-world impact.
                      </p>
                    </div>

                    <div className="flex flex-col items-center gap-6">
                      {/* Premium Dots Loader */}
                      <div className="flex gap-2.5">
                        {[0, 0.2, 0.4].map((delay, i) => (
                          <motion.div
                            key={i}
                            animate={{ 
                              scale: [1, 1.5, 1],
                              opacity: [0.3, 1, 0.3] 
                            }}
                            transition={{ 
                              repeat: Infinity, 
                              duration: 1.5, 
                              delay,
                              ease: "easeInOut" 
                            }}
                            className={`w-2.5 h-2.5 rounded-full ${i === 1 ? 'bg-pcyan' : 'bg-pblue'}`}
                          />
                        ))}
                      </div>

                      {/* Click Indicator Tooltip */}
                      <motion.div 
                        animate={{ x: [-5, 5, -5] }}
                        transition={{ repeat: Infinity, duration: 2 }}
                        className="flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-2xl text-[10px] text-gray-400 font-bold uppercase tracking-widest backdrop-blur-md"
                      >
                        <ChevronRight size={12} className="text-pblue rotate-180" />
                        Click a skill to start
                      </motion.div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
