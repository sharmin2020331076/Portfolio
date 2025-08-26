
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  const navItems = [
    { id: 'home', label: 'HOME', icon: 'fas fa-home' },
    { id: 'about', label: 'ABOUT', icon: 'fas fa-user' },
    { id: 'profile', label: 'PROFILE', icon: 'fas fa-id-card' },
    { id: 'projects', label: 'PROJECTS', icon: 'fas fa-rocket' },
    { id: 'skills', label: 'SKILLS', icon: 'fas fa-brain' },
    { id: 'testimonials', label: 'REVIEWS', icon: 'fas fa-star' },
    { id: 'contact', label: 'CONTACT', icon: 'fas fa-satellite-dish' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = navItems.map(item => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 200;

      sections.forEach((section, index) => {
        if (section) {
          const sectionTop = section.offsetTop;
          const sectionBottom = sectionTop + section.offsetHeight;
          
          if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
            setActiveSection(navItems[index].id);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <>
      {/* Main Navigation */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? 'bg-space-deep/80 backdrop-blur-xl border-b border-neon-purple/30' : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="text-2xl font-bold cursor-pointer"
              onClick={() => scrollToSection('home')}
            >
              <span className="holographic-text">SAJ</span>
              <span className="text-neon-cyan">.</span>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-2">
              {navItems.map((item, index) => (
                <motion.button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`relative px-4 py-2 rounded-lg transition-all duration-300 group ${
                    activeSection === item.id 
                      ? 'text-neon-cyan' 
                      : 'text-gray-300 hover:text-white'
                  }`}
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div className="flex items-center gap-2">
                    <i className={`${item.icon} text-sm`}></i>
                    <span className="text-sm font-medium">{item.label}</span>
                  </div>
                  
                  {activeSection === item.id && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute inset-0 quantum-card rounded-lg"
                      initial={false}
                      transition={{ type: "spring", stiffness: 500, damping: 30 }}
                    />
                  )}
                </motion.button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden quantum-card p-3 rounded-lg text-neon-cyan relative overflow-hidden group"
            >
              <motion.div
                animate={{ rotate: isOpen ? 45 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <i className={`fas ${isOpen ? 'fa-times' : 'fa-bars'} text-xl`}></i>
              </motion.div>
              
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-neon-purple/20 to-neon-cyan/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                animate={{
                  scale: [1, 1.1, 1]
                }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed top-0 right-0 w-80 h-screen quantum-card backdrop-blur-xl z-40 lg:hidden overflow-hidden"
          >
            {/* Background pattern */}
            <div className="absolute inset-0 neural-network opacity-20"></div>
            
            <div className="relative p-8 pt-24">
              <div className="space-y-4">
                {navItems.map((item, index) => (
                  <motion.button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`w-full text-left p-4 rounded-lg transition-all duration-300 group relative overflow-hidden ${
                      activeSection === item.id 
                        ? 'neon-glow text-neon-cyan' 
                        : 'hover:bg-white/5 text-gray-300 hover:text-white'
                    }`}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ x: 10 }}
                  >
                    <div className="flex items-center gap-4">
                      <div className={`w-10 h-10 rounded-lg quantum-card flex items-center justify-center ${
                        activeSection === item.id ? 'bg-neon-cyan/20' : 'group-hover:bg-white/10'
                      }`}>
                        <i className={`${item.icon} text-lg`}></i>
                      </div>
                      <span className="text-lg font-medium">{item.label}</span>
                    </div>
                    
                    {activeSection === item.id && (
                      <motion.div
                        className="absolute left-0 top-1/2 w-1 h-8 bg-neon-cyan rounded-r-full"
                        initial={{ scaleY: 0 }}
                        animate={{ scaleY: 1 }}
                        transition={{ type: "spring", stiffness: 500, damping: 30 }}
                        style={{ originY: 0.5 }}
                      />
                    )}
                  </motion.button>
                ))}
              </div>

              {/* Contact info */}
              <div className="absolute bottom-8 left-8 right-8">
                <div className="text-center text-gray-400 text-sm">
                  <div className="mb-2">Connect with me</div>
                  <div className="flex justify-center gap-4">
                    {[
                      { icon: 'fab fa-github', href: '#' },
                      { icon: 'fab fa-linkedin', href: '#' },
                      { icon: 'fab fa-twitter', href: '#' }
                    ].map((social, index) => (
                      <motion.a
                        key={index}
                        href={social.href}
                        whileHover={{ scale: 1.2, y: -2 }}
                        className="w-10 h-10 quantum-card rounded-lg flex items-center justify-center text-neon-cyan hover:text-white transition-colors"
                      >
                        <i className={social.icon}></i>
                      </motion.a>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Floating particles */}
            {[...Array(8)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-neon-cyan rounded-full"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                animate={{
                  y: [0, -20, 0],
                  opacity: [0.3, 1, 0.3],
                  scale: [1, 1.5, 1]
                }}
                transition={{
                  duration: 2 + Math.random() * 2,
                  repeat: Infinity,
                  delay: Math.random() * 2,
                  ease: "easeInOut"
                }}
              />
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Backdrop */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-30 lg:hidden"
          />
        )}
      </AnimatePresence>
    </>
  );
}
