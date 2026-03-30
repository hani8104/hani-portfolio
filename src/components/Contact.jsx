import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle } from 'lucide-react';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';
import axios from 'axios';

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
      const response = await axios.post('http://localhost:5000/api/contact', formData);
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
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Get In <span className="text-pcyan">Touch</span></h2>
          <div className="w-24 h-1 bg-gradient-to-r from-pblue to-pcyan mx-auto rounded-full mb-6"></div>
          <p className="text-gray-400 max-w-2xl mx-auto">
            I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-8"
          >
            <div className="glass p-8 rounded-2xl border border-white/5 h-full space-y-8">
              <h3 className="text-2xl font-semibold text-white mb-6">Contact Information</h3>

              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-full bg-pblue/10 flex items-center justify-center text-pblue group-hover:bg-pblue group-hover:text-white transition-colors duration-300">
                  <Mail size={20} />
                </div>
                <div>
                  <h4 className="text-sm text-gray-400 font-medium">Email</h4>
                  <a href="mailto:hanipathak8104@gmail.com" className="text-lg text-white hover:text-pcyan transition-colors">hanipathak8104@gmail.com</a>
                </div>
              </div>

              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-full bg-pcyan/10 flex items-center justify-center text-pcyan group-hover:bg-pcyan group-hover:text-white transition-colors duration-300">
                  <Phone size={20} />
                </div>
                <div>
                  <h4 className="text-sm text-gray-400 font-medium">Phone</h4>
                  <a href="tel:+917568498022" className="text-lg text-white hover:text-pcyan transition-colors">+91 7568498022</a>
                </div>
              </div>

              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-full bg-purple-500/10 flex items-center justify-center text-purple-400 group-hover:bg-purple-500 group-hover:text-white transition-colors duration-300">
                  <MapPin size={20} />
                </div>
                <div>
                  <h4 className="text-sm text-gray-400 font-medium">Location</h4>
                  <span className="text-lg text-white">Jaipur, Rajasthan, India</span>
                </div>
              </div>

              {/* Social Links */}
              <div className="pt-8 border-t border-white/10 flex gap-4">
                <a
                  href="https://github.com/hani8104"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-dlighter flex items-center justify-center border border-white/10 hover:border-pblue hover:text-pblue transition-all hover:-translate-y-1"
                >
                  <FaGithub size={20} />
                </a>
                <a
                  href="https://www.linkedin.com/in/hani-pathak-a756111a0/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-dlighter flex items-center justify-center border border-white/10 hover:border-pcyan hover:text-pcyan transition-all hover:-translate-y-1"
                  title="LinkedIn"
                >
                  <FaLinkedin size={24} />
                </a>
                <a 
                  href="https://www.instagram.com/honeypathak007?igsh=bHAzdXJucDJwc2Fq" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-dlighter flex items-center justify-center border border-white/10 hover:border-pink-500 hover:text-pink-500 transition-all hover:-translate-y-1"
                  title="Instagram"
                >
                  <FaInstagram size={24} />
                </a>
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
            <form onSubmit={handleSubmit} className="glass-premium p-10 rounded-3xl border border-white/10 space-y-8 relative overflow-hidden h-full shadow-2xl">
              <AnimatePresence>
                {status === 'success' && (
                  <motion.div 
                    initial={{ opacity: 0, backdropFilter: 'blur(0px)' }}
                    animate={{ opacity: 1, backdropFilter: 'blur(4px)' }}
                    exit={{ opacity: 0, backdropFilter: 'blur(0px)' }}
                    className="absolute inset-0 z-10 bg-dark/60 flex flex-col items-center justify-center text-center p-6"
                  >
                    <motion.div
                      initial={{ scale: 0.5, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      className="w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center text-green-500 mb-4"
                    >
                      <CheckCircle size={32} />
                    </motion.div>
                    <h4 className="text-xl font-bold text-white mb-2">Message Sent!</h4>
                    <p className="text-gray-300 text-sm">Thank you for reaching out. I'll get back to you soon.</p>
                  </motion.div>
                )}
                {status === 'error' && (
                  <motion.div 
                    initial={{ opacity: 0, backdropFilter: 'blur(0px)' }}
                    animate={{ opacity: 1, backdropFilter: 'blur(4px)' }}
                    exit={{ opacity: 0, backdropFilter: 'blur(0px)' }}
                    className="absolute inset-0 z-10 bg-dark/60 flex flex-col items-center justify-center text-center p-6"
                  >
                    <motion.div
                      initial={{ scale: 0.5, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      className="w-16 h-16 rounded-full bg-red-500/20 flex items-center justify-center text-red-500 mb-4"
                    >
                      <AlertCircle size={32} />
                    </motion.div>
                    <h4 className="text-xl font-bold text-white mb-2">Oops!</h4>
                    <p className="text-gray-300 text-sm">Something went wrong. Please try again or email me directly.</p>
                    <button 
                      onClick={() => setStatus('idle')}
                      className="mt-4 text-sm text-pcyan hover:underline"
                    >
                      Try again
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>

              <div>
                <label htmlFor="name" className="block text-sm font-bold text-white mb-3 uppercase tracking-wider">Your Name</label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-pcyan focus:ring-1 focus:ring-pcyan transition-all placeholder-gray-500 font-medium"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-bold text-white mb-3 uppercase tracking-wider">Your Email</label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-pcyan focus:ring-1 focus:ring-pcyan transition-all placeholder-gray-500 font-medium"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-bold text-white mb-3 uppercase tracking-wider">Message</label>
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-pcyan focus:ring-1 focus:ring-pcyan transition-all placeholder-gray-500 resize-none font-medium"
                  placeholder="Hi Hani, I'd like to talk about..."
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={status === 'loading'}
                className={`w-full py-3 px-6 rounded-lg text-white font-medium flex items-center justify-center gap-2 transition-all transform hover:-translate-y-0.5 ${
                  status === 'loading' 
                  ? 'bg-gray-600 cursor-not-allowed opacity-70' 
                  : 'bg-gradient-to-r from-pblue to-pcyan hover:shadow-[0_0_20px_rgba(79,70,229,0.4)]'
                }`}
              >
                {status === 'loading' ? (
                  <>
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ repeat: Infinity, duration: 1, ease: 'linear' }}
                      className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full"
                    />
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message
                    <Send size={18} />
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
