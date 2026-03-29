import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Download, Maximize2 } from 'lucide-react';

const ResumeModal = ({ isOpen, onClose }) => {
  const [isMaximized, setIsMaximized] = useState(false);

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') onClose();
    };

    window.addEventListener('keydown', handleEsc);

    // scroll lock
    document.body.style.overflow = isOpen ? 'hidden' : 'auto';

    return () => {
      window.removeEventListener('keydown', handleEsc);
      document.body.style.overflow = 'auto';
    };
  }, [onClose, isOpen]);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8">
          {/* Backdrop with blur */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-dark/80 backdrop-blur-md"
          />

          {/* Modal Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative w-full max-w-5xl h-[85vh] bg-dark-lighter border border-white/10 rounded-2xl shadow-2xl overflow-hidden flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-white/5 bg-dark">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                <span className="ml-2 text-sm font-medium text-gray-400 hidden sm:inline-block">Resume_Hani_Pathak.pdf</span>
              </div>

              <div className="flex items-center gap-4">
                <a
                  href="/resume.pdf"
                  download="Hani_Pathak_Resume.pdf"
                  className="flex items-center gap-2 text-xs font-medium bg-primary/20 text-primary-cyan px-3 py-1.5 rounded-full hover:bg-primary/30 transition-colors"
                  title="Download PDF"
                >
                  <Download size={14} />
                  <span>Download</span>
                </a>

                <button
                  onClick={onClose}
                  className="p-1 rounded-full hover:bg-white/5 text-gray-400 hover:text-white transition-colors"
                  title="Close"
                >
                  <X size={24} />
                </button>
              </div>
            </div>

            {/* Resume Viewer */}
            <div className="flex-1 bg-white/5 relative overflow-hidden">
              <iframe
                src="/resume.pdf#toolbar=0"
                className="w-full h-full border-none"
                title="Hani Pathak Resume"
              >
                <p>Your browser does not support iframes.
                  <a href="/resume.pdf">Download to view</a>
                </p>
              </iframe>

              {/* Optional overlay for better look in some browsers */}
              <div className="absolute inset-0 pointer-events-none border-[12px] border-dark-lighter opacity-50"></div>
            </div>

            {/* Footer / Hint */}
            <div className="p-3 bg-dark text-center border-t border-white/5">
              <p className="text-[10px] text-gray-500 uppercase tracking-widest font-medium">
                Professional Resume • Hani Pathak • MERN Developer
              </p>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default ResumeModal;
