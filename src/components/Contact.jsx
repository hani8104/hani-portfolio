import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle, MessageSquare, ExternalLink, Sparkles } from 'lucide-react';
import { FaGithub, FaLinkedin, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import axios from 'axios';

const FloatingInput = ({ label, id, value, onChange, type = "text", required = false }) => {
  const [isFocused, setIsFocused] = useState(false);
  
  return (
    <div className="relative group">
      <motion.label
        htmlFor={id}
        initial={false}
        animate={{
          y: isFocused || value ? -28 : 0,
          scale: isFocused || value ? 0.85 : 1,
          color: isFocused ? "#06B6D4" : "#94A3B8",
        }}
        className="absolute left-4 top-4 pointer-events-none origin-left font-medium transition-colors"
      >
        {label}
      </motion.label>
      <input
        type={type}
        id={id}
        value={value}
        onChange={onChange}
        required={required}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        className={`w-full bg-white/5 border rounded-2xl px-4 py-4 text-white focus:outline-none transition-all duration-300 placeholder-transparent font-medium shadow-inner ${
          isFocused ? 'border-pcyan shadow-[0_0_15px_rgba(6,182,212,0.2)]' : 'border-white/10 hover:border-white/20'
        }`}
      />
    </div>
  );
};

const FloatingTextarea = ({ label, id, value, onChange, required = false, rows = "5" }) => {
  const [isFocused, setIsFocused] = useState(false);
  
  return (
    <div className="relative group">
      <motion.label
        htmlFor={id}
        initial={false}
        animate={{
          y: isFocused || value ? -28 : 0,
          scale: isFocused || value ? 0.85 : 1,
          color: isFocused ? "#06B6D4" : "#94A3B8",
        }}
        className="absolute left-4 top-4 pointer-events-none origin-left font-medium transition-colors"
      >
        {label}
      </motion.label>
      <textarea
        id={id}
        value={value}
        onChange={onChange}
        required={required}
        rows={rows}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        className={`w-full bg-white/5 border rounded-2xl px-4 py-4 text-white focus:outline-none transition-all duration-300 placeholder-transparent resize-none font-medium shadow-inner ${
          isFocused ? 'border-pcyan shadow-[0_0_15px_rgba(6,182,212,0.2)]' : 'border-white/10 hover:border-white/20'
        }`}
      />
    </div>
  );
};

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState('idle'); // idle, loading, success, error

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    
    try {
      const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:5000';
      const response = await axios.post(`${apiUrl}/api/contact`, formData);
      if (response.status === 200) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setStatus('idle'), 5000);
      }
    } catch (error) {
      console.error("Submission error:", error);
      setStatus('error');
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-grid">
      <div className="absolute inset-0 bg-gradient-to-b from-dark via-transparent to-dark pointer-events-none"></div>
      
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-24 relative"
        >
          {/* Availability Badge */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 mb-8 rounded-full bg-green-500/10 border border-green-500/20 backdrop-blur-md"
          >
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse shadow-[0_0_10px_rgba(34,197,94,0.5)]"></div>
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-green-500">Available for Projects</span>
          </motion.div>

          <h2 className="text-5xl md:text-7xl font-bold mb-8 tracking-tight italic pr-4 pb-4">
            Get In <span className="text-gradient pr-6 pb-1">Touch</span>
          </h2>
          <p className="max-w-3xl mx-auto text-gray-400 text-xl leading-relaxed font-light">
            I'm currently open to new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="glass-premium p-8 md:p-12 rounded-[2.5rem] border border-white/10 h-full space-y-12 shadow-2xl relative overflow-hidden group">
              {/* Background Glow */}
              <div className="absolute top-0 left-0 w-64 h-64 bg-pblue/10 blur-[100px] rounded-full -ml-32 -mt-32 pointer-events-none"></div>
              
              <div className="relative z-10 space-y-10">
                <div className="flex items-center gap-6 group/item">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-pblue/20 to-pblue/5 flex items-center justify-center text-pblue border border-pblue/20 group-hover/item:scale-110 transition-transform duration-500 shadow-xl flex-shrink-0">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h4 className="text-xs text-gray-500 font-bold uppercase tracking-widest mb-1">Direct Email</h4>
                    <a href="mailto:hanipathak8104@gmail.com" className="text-lg md:text-xl text-white hover:text-pcyan transition-colors font-medium break-all block">
                      hanipathak8104@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-6 group/item">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-pcyan/20 to-pcyan/5 flex items-center justify-center text-pcyan border border-pcyan/20 group-hover/item:scale-110 transition-transform duration-500 shadow-xl flex-shrink-0">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h4 className="text-xs text-gray-500 font-bold uppercase tracking-widest mb-1">Phone / WhatsApp</h4>
                    <a href="tel:+917568498022" className="text-xl text-white hover:text-pcyan transition-colors font-medium">+91 7568498022</a>
                  </div>
                </div>

                <div className="flex items-center gap-6 group/item">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-purple-500/20 to-purple-500/5 flex items-center justify-center text-purple-400 border border-purple-500/20 group-hover/item:scale-110 transition-transform duration-500 shadow-xl flex-shrink-0">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4 className="text-xs text-gray-500 font-bold uppercase tracking-widest mb-1">Operating From</h4>
                    <span className="text-xl text-white font-medium">Jaipur, India</span>
                  </div>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="grid grid-cols-2 gap-4 py-6">
                <a
                  href="https://wa.me/917568498022"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3 px-4 py-4 bg-green-500/10 border border-green-500/20 rounded-2xl text-green-500 font-bold text-sm hover:bg-green-500 hover:text-white transition-all duration-300"
                >
                  <FaWhatsapp size={18} />
                  WhatsApp
                </a>
                <a
                  href="mailto:hanipathak8104@gmail.com"
                  className="flex items-center justify-center gap-3 px-4 py-4 bg-pblue/10 border border-pblue/20 rounded-2xl text-pblue font-bold text-sm hover:bg-pblue hover:text-white transition-all duration-300"
                >
                  <Mail size={18} />
                  Email Me
                </a>
              </div>

              {/* Social Links */}
              <div className="pt-10 border-t border-white/5 flex items-center gap-6">
                <h5 className="text-[10px] text-gray-500 font-bold uppercase tracking-widest">Connect:</h5>
                <div className="flex gap-4">
                  {[
                    { icon: <FaGithub size={22} />, link: "https://github.com/hani8104", color: "hover:text-white hover:border-white" },
                    { icon: <FaLinkedin size={22} />, link: "https://www.linkedin.com/in/hani-pathak-a756111a0/", color: "hover:text-pblue hover:border-pblue" },
                    { icon: <FaInstagram size={22} />, link: "https://www.instagram.com/honeypathak007?igsh=bHAzdXJucDJwc2Fq", color: "hover:text-pink-500 hover:border-pink-500" }
                  ].map((social, idx) => (
                    <motion.a
                      key={idx}
                      href={social.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ y: -5, scale: 1.1 }}
                      className={`w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center border border-white/10 transition-all duration-300 shadow-lg ${social.color}`}
                    >
                      {social.icon}
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="h-full"
          >
            <form onSubmit={handleSubmit} className="glass-premium p-10 md:p-14 rounded-[3rem] border border-white/10 space-y-10 relative overflow-hidden h-full shadow-2xl">
              <AnimatePresence>
                {status === 'success' && (
                  <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="absolute inset-0 z-20 bg-dark/80 backdrop-blur-xl flex flex-col items-center justify-center text-center p-8"
                  >
                    <motion.div
                      initial={{ scale: 0, rotate: -180 }}
                      animate={{ scale: 1, rotate: 0 }}
                      className="w-24 h-24 rounded-full bg-green-500/20 flex items-center justify-center text-green-500 mb-6 border border-green-500/30 shadow-[0_0_30px_rgba(34,197,94,0.3)]"
                    >
                      <CheckCircle size={48} />
                    </motion.div>
                    <h4 className="text-3xl font-bold text-white mb-3">Cinema-grade Success!</h4>
                    <p className="text-gray-300 text-lg">Your message has been beamed successfully. I'll respond shortly.</p>
                    <button 
                      onClick={() => setStatus('idle')}
                      className="mt-8 px-8 py-3 rounded-full bg-pblue/20 border border-pblue/30 text-pblue font-bold hover:bg-pblue hover:text-white transition-all shadow-lg"
                    >
                      Send Another
                    </button>
                  </motion.div>
                )}
                {status === 'error' && (
                  <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="absolute inset-0 z-20 bg-dark/80 backdrop-blur-xl flex flex-col items-center justify-center text-center p-8"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className="w-20 h-20 rounded-full bg-red-500/20 flex items-center justify-center text-red-500 mb-6 border border-red-500/30"
                    >
                      <AlertCircle size={40} />
                    </motion.div>
                    <h4 className="text-2xl font-bold text-white mb-3">Transmission Failed</h4>
                    <p className="text-gray-300">Something went wrong. Please try again or email me directly.</p>
                    <button 
                      onClick={() => setStatus('idle')}
                      className="mt-8 px-8 py-3 rounded-full bg-white/5 border border-white/10 text-white font-bold hover:bg-red-500 transition-all shadow-lg"
                    >
                      Try Again
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>

              <div className="space-y-12">
                <FloatingInput
                  label="Name"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />

                <FloatingInput
                  label="Email"
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />

                <FloatingTextarea
                  label="Your Message"
                  id="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </div>

              <button
                type="submit"
                disabled={status === 'loading'}
                className={`w-full py-5 rounded-2xl text-white font-bold text-lg flex items-center justify-center gap-3 transition-all relative overflow-hidden group/btn ${
                  status === 'loading' 
                  ? 'bg-gray-800 cursor-not-allowed' 
                  : 'bg-gradient-to-r from-pblue to-pcyan hover:shadow-[0_0_30px_rgba(79,70,229,0.5)] transform hover:-translate-y-1'
                }`}
              >
                {status === 'loading' ? (
                  <div className="flex items-center gap-3">
                    <motion.div
                      animate={{ rotate: 360, scale: [1, 1.2, 1] }}
                      transition={{ repeat: Infinity, duration: 1.5, ease: 'linear' }}
                      className="w-6 h-6 border-3 border-white/30 border-t-white rounded-full"
                    />
                    <span className="animate-pulse tracking-widest text-sm uppercase">Transmitting...</span>
                  </div>
                ) : (
                  <>
                    <span className="relative z-10 group-hover/btn:translate-x-1 transition-transform">Send Message</span>
                    <Send size={20} className="relative z-10 group-hover/btn:rotate-12 transition-transform" />
                    <div className="absolute inset-0 bg-white/20 translate-y-full group-hover/btn:translate-y-0 transition-transform duration-300" />
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
