import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ResumeModal from './components/ResumeModal';
import { motion, useScroll, AnimatePresence } from 'framer-motion';

function App() {
  const { scrollYProgress } = useScroll();
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  
  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isResumeOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isResumeOpen]);
  
  return (
    <div className="bg-dark text-white min-h-screen relative font-sans selection:bg-primary/30 selection:text-primary-cyan">
      {/* Scroll Progress Bar */}
      <motion.div 
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-primary-cyan origin-left z-50 rounded-r-md"
        style={{ scaleX: scrollYProgress }}
      />
      
      {/* Background Gradient Orbs */}
      <div className="fixed top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-[100px] -z-10 animate-pulse"></div>
      <div className="fixed bottom-20 right-10 w-96 h-96 bg-primary-cyan/10 rounded-full blur-[120px] -z-10 animate-pulse" style={{animationDelay: '2s'}}></div>

      <Navbar />
      
      <main>
        <Hero onOpenResume={() => setIsResumeOpen(true)} />
        <About onOpenResume={() => setIsResumeOpen(true)} />
        <Skills />
        <Education />
        <Projects />
        <Experience />
        <Contact />
      </main>

      <Footer />
      
      {/* Resume Modal */}
      <ResumeModal isOpen={isResumeOpen} onClose={() => setIsResumeOpen(false)} />
    </div>
  );
}

export default App;
