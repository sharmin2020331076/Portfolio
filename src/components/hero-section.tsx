
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function HeroSection() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Dynamic Quantum Background */}
      <div className="absolute inset-0">
        {/* Animated neural network grid */}
        <div className="absolute inset-0 opacity-30">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <defs>
              <pattern id="quantum-grid" width="10" height="10" patternUnits="userSpaceOnUse">
                <path d="M 10 0 L 0 0 0 10" fill="none" stroke="url(#quantum-gradient)" strokeWidth="0.1"/>
              </pattern>
              <linearGradient id="quantum-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="hsl(280, 100%, 70%)" stopOpacity="0.6"/>
                <stop offset="50%" stopColor="hsl(180, 100%, 60%)" stopOpacity="0.4"/>
                <stop offset="100%" stopColor="hsl(320, 100%, 75%)" stopOpacity="0.6"/>
              </linearGradient>
            </defs>
            <rect width="100" height="100" fill="url(#quantum-grid)"/>
          </svg>
        </div>

        {/* Floating holographic elements */}
        <motion.div
          animate={{
            y: [0, -30, 0],
            rotateX: [0, 180, 360],
            rotateY: [0, 180, 360]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-20 left-20 w-32 h-32 border-2 border-neon-purple/40 rounded-lg"
          style={{
            transform: `perspective(1000px) rotateX(45deg) rotateY(45deg)`,
            boxShadow: '0 0 50px rgba(200, 50, 255, 0.3)'
          }}
        />

        <motion.div
          animate={{
            y: [0, -40, 0],
            rotate: [0, 360],
            scale: [1, 1.2, 1]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
          className="absolute top-40 right-32 w-24 h-24 rounded-full border-2 border-neon-cyan/60"
          style={{
            background: 'radial-gradient(circle, rgba(0, 255, 255, 0.1) 0%, transparent 70%)',
            boxShadow: '0 0 40px rgba(0, 255, 255, 0.4)'
          }}
        />

        <motion.div
          animate={{
            y: [0, -25, 0],
            rotateZ: [0, 180, 360],
            scale: [0.8, 1.1, 0.8]
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 4
          }}
          className="absolute bottom-40 left-1/3 w-40 h-40"
          style={{
            background: 'conic-gradient(from 0deg, rgba(255, 0, 150, 0.2), rgba(200, 50, 255, 0.2), rgba(0, 255, 255, 0.2), rgba(255, 0, 150, 0.2))',
            clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)',
            filter: 'blur(1px)'
          }}
        />

        {/* Interactive mouse-following elements */}
        <motion.div
          className="absolute w-96 h-96 rounded-full pointer-events-none"
          style={{
            background: 'radial-gradient(circle, rgba(200, 50, 255, 0.15) 0%, transparent 70%)',
            filter: 'blur(40px)'
          }}
          animate={{
            x: mousePosition.x - 192,
            y: mousePosition.y - 192,
          }}
          transition={{ type: "spring", damping: 30, stiffness: 200 }}
        />

        <motion.div
          className="absolute w-64 h-64 rounded-full pointer-events-none"
          style={{
            background: 'radial-gradient(circle, rgba(0, 255, 255, 0.1) 0%, transparent 70%)',
            filter: 'blur(20px)'
          }}
          animate={{
            x: mousePosition.x - 128,
            y: mousePosition.y - 128,
          }}
          transition={{ type: "spring", damping: 40, stiffness: 300, delay: 0.1 }}
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 1.2 }}
        >
          {/* Greeting Animation */}
          <motion.div
            className="text-lg md:text-xl text-neon-cyan pt-16 font-mono"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="text-neon-pink">{'>> '}</span>
            <span>Hello, Digital World!</span>
            <motion.span
              animate={{ opacity: [1, 0] }}
              transition={{ duration: 1, repeat: Infinity }}
              className="text-neon-purple"
            >
              _
            </motion.span>
          </motion.div>

          {/* Name with 3D effect */}
          <motion.h1
            className="text-5xl md:text-8xl lg:text-9xl font-bold mb-8 leading-tight relative"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            <motion.div
              className="holographic-text relative inline-block"
              whileHover={{ scale: 1.05 }}
              style={{
                textShadow: '0 0 30px rgba(200, 50, 255, 0.8), 0 0 60px rgba(0, 255, 255, 0.4)'
              }}
            >
              Sharmin
            </motion.div>
            <br />
            <motion.div
              className="holographic-text relative inline-block mt-2"
              whileHover={{ scale: 1.05 }}
              style={{
                textShadow: '0 0 30px rgba(0, 255, 255, 0.8), 0 0 60px rgba(255, 0, 150, 0.4)'
              }}
            >
              Akther Juthi
            </motion.div>
          </motion.h1>

          {/* Professional Title with Matrix Effect */}
          <motion.div
            className="text-xl md:text-3xl mb-8 font-mono relative"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <div className="cyber-border p-4 rounded-lg inline-block">
              <span className="text-neon-cyan">&lt;</span>
              <span className="text-white mx-2">Full Stack Developer</span>
              <span className="text-neon-cyan">/&gt;</span>
            </div>
          </motion.div>

          {/* Description with typing effect */}
          <motion.p
            className="text-lg md:text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            Pushing the boundaries of web development with cutting-edge technologies.
            Transforming ideas into immersive digital realities through innovation and creativity.
          </motion.p>

          {/* Action Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <motion.button
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection('projects')}
              className="cyber-border p-[3px] rounded-full group relative overflow-hidden"
            >
              <div className="quantum-card px-10 py-5 rounded-full group-hover:bg-transparent transition-all duration-300 relative z-10">
                <span className="text-white font-semibold text-lg">Explore My Universe</span>
              </div>
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection('contact')}
              className="neon-glow px-10 py-5 rounded-full hover:bg-neon-purple/20 transition-all duration-300 relative overflow-hidden group"
            >
              <span className="text-white font-semibold text-lg relative z-10">Connect Dimensions</span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-neon-purple/30 to-neon-cyan/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                animate={{
                  x: ['-100%', '100%']
                }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </motion.button>
          </motion.div>
        </motion.div>
      </div>

      {/* Futuristic Scroll Indicator */}
      <motion.div
        className="absolute bottom-12 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="text-neon-cyan text-sm mb-2 font-mono">SCROLL</div>
        <div className="w-8 h-12 border-2 border-neon-cyan/60 rounded-full flex justify-center relative overflow-hidden">
          <motion.div
            animate={{ y: [0, 16, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-4 bg-neon-cyan/80 rounded-full mt-2"
          />
          <motion.div
            className="absolute inset-0 border-2 border-neon-purple/40 rounded-full"
            animate={{ scale: [1, 1.2, 1], opacity: [1, 0.5, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>

      {/* Data streams */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          className={`absolute w-px h-screen bg-gradient-to-b from-transparent via-neon-${i % 2 === 0 ? 'cyan' : 'purple'}/30 to-transparent`}
          style={{ left: `${10 + i * 20}%` }}
          animate={{
            opacity: [0.3, 0.8, 0.3],
            scaleY: [1, 1.5, 1]
          }}
          transition={{
            duration: 3 + i,
            repeat: Infinity,
            delay: i * 0.5,
            ease: "easeInOut"
          }}
        />
      ))}
    </section>
  );
}
