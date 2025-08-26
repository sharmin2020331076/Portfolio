import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Navigation from '@/components/navigation';
import Preloader from '@/components/preloader';
import HeroSection from '@/components/hero-section';
import AboutSection from '@/components/about-section';
import ProfileSection from '@/components/profile-section';
import ProjectsSection from '@/components/projects-section';
import SkillsSection from '@/components/skills-section';
import TestimonialsSection from '@/components/testimonials-section';
import ContactSection from '@/components/contact-section';

export default function Portfolio() {
  const [isLoading, setIsLoading] = useState(() => {
    // Show preloader on page refresh, skip only when navigating back from other pages
    const isNavigatingBack = sessionStorage.getItem('navigating-back');
    if (isNavigatingBack) {
      sessionStorage.removeItem('navigating-back');
      return false;
    }
    return true;
  });

  const handlePreloaderComplete = () => {
    setIsLoading(false);
  };

  useEffect(() => {
    // Scroll to top button functionality
    const scrollTopBtn = document.getElementById('scrollTop');

    const handleScroll = () => {
      if (scrollTopBtn) {
        if (window.pageYOffset > 300) {
          scrollTopBtn.classList.remove('opacity-0', 'invisible');
          scrollTopBtn.classList.add('opacity-100', 'visible');
        } else {
          scrollTopBtn.classList.add('opacity-0', 'invisible');
          scrollTopBtn.classList.remove('opacity-100', 'visible');
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <>
      {isLoading && <Preloader onComplete={handlePreloaderComplete} />}

      <motion.div 
        className="min-h-screen bg-space-deep text-space-light neural-network"
        initial={{ opacity: 0 }}
        animate={{ opacity: isLoading ? 0 : 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <Navigation />
        <HeroSection />
        <AboutSection />
        <ProfileSection />
        <ProjectsSection />
        <SkillsSection />
        <TestimonialsSection />
        <ContactSection />

        {/* Futuristic Footer */}
        <footer className="relative bg-space-deep py-16 border-t border-neon-purple/30 overflow-hidden">
          {/* Animated background elements */}
          <div className="absolute inset-0">
            <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-neon-cyan/50 to-transparent"></div>
            <div className="absolute top-0 right-1/4 w-px h-full bg-gradient-to-b from-transparent via-neon-pink/50 to-transparent"></div>
          </div>

          <div className="relative max-w-7xl mx-auto px-6">
            <div className="text-center">
              <motion.div 
                className="text-4xl font-bold holographic-text mb-6 animate-hologram-flicker"
                whileHover={{ scale: 1.05 }}
              >
                Sharmin Akther Juthi<span className="text-neon-cyan">.</span>
              </motion.div>
              <p className="text-gray-300 mb-10 text-lg">
                Architecting tomorrow's digital experiences, today
              </p>

              <div className="flex justify-center gap-8 mb-10">
                {[
                  { icon: 'fab fa-github', href: 'https://github.com', color: 'neon-purple' },
                  { icon: 'fab fa-linkedin', href: 'https://linkedin.com', color: 'neon-cyan' },
                  { icon: 'fab fa-twitter', href: 'https://twitter.com', color: 'neon-pink' },
                  { icon: 'fab fa-instagram', href: 'https://instagram.com', color: 'neon-purple' }
                ].map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.2, y: -5 }}
                    whileTap={{ scale: 0.9 }}
                    className="quantum-card p-4 rounded-xl hover:neon-glow transition-all duration-300 group relative overflow-hidden"
                  >
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-neon-purple/20 to-neon-cyan/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      animate={{
                        background: [
                          'linear-gradient(45deg, rgba(200, 50, 255, 0.2), rgba(0, 255, 255, 0.2))',
                          'linear-gradient(45deg, rgba(0, 255, 255, 0.2), rgba(255, 0, 150, 0.2))',
                          'linear-gradient(45deg, rgba(255, 0, 150, 0.2), rgba(200, 50, 255, 0.2))'
                        ]
                      }}
                      transition={{ duration: 3, repeat: Infinity }}
                    />
                    <i className={`${social.icon} text-2xl text-${social.color} group-hover:text-white transition-colors relative z-10`}></i>
                  </motion.a>
                ))}
              </div>

              <div className="text-gray-400 text-sm relative">
                <div className="flex items-center justify-center gap-2">
                  <span className="w-2 h-2 bg-neon-cyan rounded-full animate-pulse"></span>
                  <span>© 2024 Sharmin Akther Juthi</span>
                  <span className="w-2 h-2 bg-neon-pink rounded-full animate-pulse"></span>
                </div>
                <div className="mt-2 text-xs">
                  Crafted with React.js & Futuristic Vision
                </div>
              </div>
            </div>
          </div>

          {/* Floating data streams */}
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className={`absolute w-1 h-20 bg-gradient-to-t from-neon-${i === 0 ? 'cyan' : i === 1 ? 'pink' : 'purple'}/50 to-transparent`}
              style={{
                left: `${20 + i * 30}%`,
                bottom: 0
              }}
              animate={{
                y: [0, -400],
                opacity: [0, 1, 0]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                delay: i * 1.5,
                ease: "easeInOut"
              }}
            />
          ))}
        </footer>

        {/* Quantum Scroll to Top Button */}
        <motion.button
          id="scrollTop"
          onClick={scrollToTop}
          whileHover={{ scale: 1.15, rotate: 360 }}
          whileTap={{ scale: 0.9 }}
          className="fixed bottom-8 right-8 quantum-card p-4 rounded-full opacity-0 invisible transition-all duration-300 hover:neon-glow z-50 group"
        >
          <div className="relative">
            <i className="fas fa-arrow-up text-2xl text-neon-purple group-hover:text-white transition-colors"></i>
            <motion.div
              className="absolute inset-0 border-2 border-neon-cyan/50 rounded-full"
              animate={{ rotate: 360 }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            />
          </div>
        </motion.button>

        {/* Ambient particle effects */}
        <div className="fixed inset-0 pointer-events-none overflow-hidden">
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-neon-cyan rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -20, 0],
                opacity: [0.5, 1, 0.5],
                scale: [1, 1.5, 1]
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
                ease: "easeInOut"
              }}
            />
          ))}
        </div>
      </motion.div>
    </>
  );
}