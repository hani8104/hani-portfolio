import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Download, Maximize2 } from 'lucide-react';

const ResumeModal = ({ isOpen, onClose }) => {
  const [isMaximized, setIsMaximized] = useState(false);
  const [hasError, setHasError] = useState(false);

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
            className="absolute inset-0 bg-black/60 backdrop-blur-xl"
          />

          {/* Modal Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 30 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative w-full max-w-5xl h-[85vh] bg-[#0A0F1E]/90 border border-white/10 rounded-2xl shadow-2xl overflow-hidden flex flex-col backdrop-blur-2xl"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-white/10 bg-dark/50 backdrop-blur-md">
              <div className="flex items-center gap-3">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500/80 shadow-[0_0_8px_rgba(239,68,68,0.4)]"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80 shadow-[0_0_8px_rgba(234,179,8,0.4)]"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500/80 shadow-[0_0_8px_rgba(34,197,94,0.4)]"></div>
                </div>
                <span className="ml-2 text-xs font-medium text-gray-400 hidden sm:inline-block tracking-wide">Hani_Pathak_Resume.pdf</span>
              </div>

              <div className="flex items-center gap-3">
                <a
                  href="/Hani_Pathak_Resume.pdf"
                  download="Hani_Pathak_Resume.pdf"
                  className="flex items-center gap-2 text-xs font-semibold bg-gradient-to-r from-pblue to-pcyan text-white px-4 py-2 rounded-full hover:shadow-[0_0_15px_rgba(6,182,212,0.4)] transition-all duration-300"
                  title="Download Resume"
                >
                  <Download size={14} />
                  <span>Download</span>
                </a>

                <button
                  onClick={onClose}
                  className="p-2 rounded-full hover:bg-white/10 text-gray-400 hover:text-white transition-all duration-200"
                  title="Close"
                >
                  <X size={20} />
                </button>
              </div>
            </div>

            {/* Resume Viewer */}
            <div className="flex-1 bg-black/40 relative overflow-hidden group">
              {!hasError ? (
                <iframe
                  src="/Hani_Pathak_Resume.pdf#toolbar=0"
                  className="w-full h-full border-none"
                  title="Hani Pathak Resume"
                  onLoad={() => setHasError(false)}
                  onError={() => setHasError(true)}
                >
                  <div className="flex flex-col items-center justify-center h-full text-center p-8">
                    <p className="text-gray-400 mb-4 font-light">Your browser does not support PDF viewing.</p>
                    <a 
                      href="/Hani_Pathak_Resume.pdf" 
                      className="px-6 py-2 bg-pcyan/20 text-pcyan rounded-xl border border-pcyan/30 hover:bg-pcyan/30 transition-all font-medium"
                    >
                      Download to view
                    </a>
                  </div>
                </iframe>
              ) : (
                <div className="flex flex-col items-center justify-center h-full text-center p-8 bg-dark/50">
                   <div className="w-16 h-16 rounded-full bg-red-500/10 flex items-center justify-center text-red-500 mb-4 border border-red-500/20">
                     <X size={32} />
                   </div>
                   <h3 className="text-xl font-bold text-white mb-2">Resume not available</h3>
                   <p className="text-gray-400 max-w-md mx-auto mb-6">
                     We encountered an issue loading the PDF preview. Please try again later or download the file directly.
                   </p>
                   <a 
                      href="/Hani_Pathak_Resume.pdf" 
                      download
                      className="px-8 py-3 bg-gradient-to-r from-pblue to-pcyan text-white rounded-xl shadow-lg hover:shadow-cyan-500/20 transition-all font-bold"
                    >
                      Download Resume
                    </a>
                </div>
              )}

              {/* Decorative Frame Overlay */}
              <div className="absolute inset-0 pointer-events-none border-[1px] border-white/5 opacity-50"></div>
            </div>

            {/* Footer / Hint */}
            <div className="px-6 py-3 bg-dark/80 backdrop-blur-md text-center border-t border-white/5 flex justify-between items-center">
              <p className="text-[10px] text-gray-500 uppercase tracking-[0.2em] font-semibold">
                &copy; {new Date().getFullYear()} Hani Pathak
              </p>
              <p className="text-[10px] text-pcyan/70 uppercase tracking-[0.1em] font-bold">
                MERN Stack Specialist
              </p>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default ResumeModal;
