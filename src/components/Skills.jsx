import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Layout, Server, Database, Monitor, Braces, Wind, Zap, Code, Terminal, 
  Cpu, Globe, Lock, FolderOpen, ShieldCheck, Flame, CreditCard, GitBranch, 
  ChevronRight, ExternalLink, Award, CheckCircle2
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
    initial={{ opacity: 0, x: 20 }}
    animate={{ opacity: 1, x: 0 }}
    exit={{ opacity: 0, x: -20 }}
    transition={{ duration: 0.4, ease: "easeOut" }}
    className="glass-premium rounded-3xl border border-white/10 p-8 md:p-10 relative overflow-hidden shadow-2xl h-full flex flex-col"
  >
    {/* Decorative Background Blob */}
    <div className="absolute top-0 right-0 w-64 h-64 bg-pblue/10 blur-[100px] rounded-full -mr-20 -mt-20 pointer-events-none"></div>
    
    <div className="relative z-10 space-y-8 flex-1 overflow-y-auto custom-scrollbar pr-2">
      {/* Header */}
      <div className="flex items-start justify-between gap-6">
        <div className="flex items-center gap-6">
          <div className="p-5 bg-white/5 rounded-3xl border border-white/10 shadow-inner">
            {skill.icon}
          </div>
          <div>
            <h3 className="text-3xl md:text-4xl font-bold text-white tracking-tight leading-none mb-3">{skill.title}</h3>
            <div className="flex items-center gap-2">
              <Award size={14} className="text-pcyan" />
              <span className="text-[11px] uppercase tracking-[0.2em] text-pcyan font-bold">{skill.level} Proficiency</span>
            </div>
          </div>
        </div>
      </div>

      {/* Description Area */}
      <div className="space-y-4">
        <div className="inline-block px-3 py-1 rounded-lg bg-white/5 border border-white/10">
          <span className="text-[10px] uppercase tracking-widest text-gray-400 font-bold">About the Skill</span>
        </div>
        <p className="text-gray-300 text-lg leading-relaxed font-inter">
          {skill.description}
        </p>
      </div>

      {/* Info Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-4">
        <div className="space-y-3">
          <h5 className="text-[11px] uppercase tracking-widest text-pcyan font-bold flex items-center gap-2">
            <ExternalLink size={12} /> Real Project Usage
          </h5>
          <p className="text-sm text-white/90 font-medium leading-normal bg-white/5 p-4 rounded-2xl border border-white/5">
            {skill.project}
          </p>
        </div>

        <div className="space-y-3">
          <h5 className="text-[11px] uppercase tracking-widest text-pblue font-bold flex items-center gap-2">
            <Code size={12} /> Key Technologies
          </h5>
          <p className="text-sm text-white/90 font-medium leading-normal bg-white/5 p-4 rounded-2xl border border-white/5">
            {skill.tech}
          </p>
        </div>
      </div>

      {/* Achievements */}
      <div className="space-y-4 p-6 bg-white/5 rounded-3xl border border-white/10 shadow-lg">
        <h5 className="text-[11px] uppercase tracking-widest text-green-400 font-bold flex items-center gap-2 mb-2">
          <Zap size={12} /> Key Achievements / Contributions
        </h5>
        <div className="grid gap-3">
          {skill.achievements.map((item, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="flex items-start gap-4"
            >
              <div className="mt-1.5">
                <CheckCircle2 size={14} className="text-green-500" />
              </div>
              <p className="text-[14px] text-gray-300 leading-snug">{item}</p>
            </motion.div>
          ))}
        </div>
      </div>
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
          <h2 className="text-5xl md:text-7xl font-bold mb-8 tracking-tight text-white italic">Technical <span className="text-gradient">Proficiency</span></h2>
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
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="glass-premium rounded-3xl border border-white/5 p-12 h-full flex flex-col items-center justify-center text-center space-y-6 min-h-[600px]"
                >
                  <div className="p-8 bg-pblue/5 rounded-full border border-pblue/10 animate-float">
                    <Braces size={60} className="text-pblue/40" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-2xl font-bold text-white tracking-tight">Explore My Technical Arsenal</h3>
                    <p className="text-gray-400 max-w-xs mx-auto leading-relaxed">
                      Select a technical skill from the left to dive deep into my professional expertise and real-world impact.
                    </p>
                  </div>
                  <div className="flex gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-pblue/50"></div>
                    <div className="w-1.5 h-1.5 rounded-full bg-pcyan/50"></div>
                    <div className="w-1.5 h-1.5 rounded-full bg-pblue/50"></div>
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
