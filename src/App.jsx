import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import ProjectPage from './pages/ProjectPage';
import Footer from './components/Footer';
import ResumeModal from './components/ResumeModal';
import { motion, useScroll, AnimatePresence } from 'framer-motion';

// ScrollToTop component to reset scroll on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

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
    <Router>
      <ScrollToTop />
      <div className="bg-dark text-white min-h-screen relative font-sans selection:bg-pblue/30 selection:text-pcyan">
        {/* Scroll Progress Bar */}
        <motion.div 
          className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-pblue to-pcyan origin-left z-50 rounded-r-md"
          style={{ scaleX: scrollYProgress }}
        />
        
        {/* Background Graduate Orbs */}
        <div className="fixed top-20 left-10 w-72 h-72 bg-pblue/20 rounded-full blur-[100px] -z-10 animate-pulse"></div>
        <div className="fixed bottom-20 right-10 w-96 h-96 bg-pcyan/10 rounded-full blur-[120px] -z-10 animate-pulse" style={{animationDelay: '2s'}}></div>

        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={
              <>
                <Navbar />
                <Home onOpenResume={() => setIsResumeOpen(true)} />
              </>
            } />
            <Route path="/project/:id" element={<ProjectPage />} />
          </Routes>
        </AnimatePresence>

        <Footer />
        
        {/* Resume Modal */}
        <ResumeModal isOpen={isResumeOpen} onClose={() => setIsResumeOpen(false)} />
      </div>
    </Router>
  );
}

export default App;
