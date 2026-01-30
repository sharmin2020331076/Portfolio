
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface PreloaderProps {
  onComplete: () => void;
}

export default function Preloader({ onComplete }: PreloaderProps) {
  const [progress, setProgress] = useState(0);
  const [currentPhase, setCurrentPhase] = useState(0);
  
  const phases = [
    'Initializing Neural Network...',
    'Loading Quantum Matrices...',
    'Synchronizing Data Streams...',
    'Activating Holographic Interface...',
    'Welcome to the Future!'
  ];

  const name = "SHARMIN AKTHER";

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        const newProgress = prev + Math.random() * 3 + 1;
        
        // Update phase based on progress
        const phaseIndex = Math.floor((newProgress / 100) * phases.length);
        setCurrentPhase(Math.min(phaseIndex, phases.length - 1));
        
        if (newProgress >= 100) {
          clearInterval(timer);
          setTimeout(onComplete, 1000);
          return 100;
        }
        return newProgress;
      });
    }, 50);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1 }}
        className="fixed inset-0 bg-space-deep z-50 flex items-center justify-center neural-preloader overflow-hidden"
      >
        {/* Animated background grid */}
        <div className="absolute inset-0">
          <svg className="w-full h-full opacity-20" viewBox="0 0 100 100" preserveAspectRatio="none">
            <defs>
              <pattern id="neural-grid" width="5" height="5" patternUnits="userSpaceOnUse">
                <path d="M 5 0 L 0 0 0 5" fill="none" stroke="url(#neural-gradient)" strokeWidth="0.1"/>
              </pattern>
              <linearGradient id="neural-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="hsl(280, 100%, 70%)" stopOpacity="0.4"/>
                <stop offset="100%" stopColor="hsl(180, 100%, 60%)" stopOpacity="0.4"/>
              </linearGradient>
            </defs>
            <rect width="100" height="100" fill="url(#neural-grid)"/>
          </svg>
        </div>

        {/* Floating data nodes */}
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-neon-cyan rounded-full"
            style={{
              left: `${20 + (i % 4) * 20}%`,
              top: `${20 + Math.floor(i / 4) * 20}%`,
            }}
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.5, 1, 0.5],
              y: [0, -10, 0]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: i * 0.2,
              ease: "easeInOut"
            }}
          />
        ))}

        <div className="text-center max-w-2xl mx-auto px-6 relative z-10">
          {/* Name Animation */}
          <motion.div className="mb-12">
            <div className="text-4xl md:text-6xl font-bold mb-4">
              {name.split('').map((letter, index) => (
                <motion.span
                  key={index}
                  className="quantum-letter inline-block holographic-text"
                  initial={{ opacity: 0, y: 50, rotateX: -90 }}
                  animate={{ 
                    opacity: 1, 
                    y: 0, 
                    rotateX: 0,
                    textShadow: [
                      '0 0 10px rgba(200, 50, 255, 0.8)',
                      '0 0 20px rgba(0, 255, 255, 0.8)',
                      '0 0 10px rgba(200, 50, 255, 0.8)'
                    ]
                  }}
                  transition={{
                    duration: 0.8,
                    delay: index * 0.1,
                    repeat: Infinity,
                    repeatType: "reverse",
                    repeatDelay: 3
                  }}
                  style={{ transformStyle: 'preserve-3d' }}
                >
                  {letter === ' ' ? '\u00A0' : letter}
                </motion.span>
              ))}
            </div>
          </motion.div>

          {/* Progress Bar */}
          <div className="mb-8">
            <div className="relative w-full h-2 bg-gray-800 rounded-full overflow-hidden data-bar">
              <motion.div
                className="h-full bg-gradient-to-r from-neon-purple via-neon-cyan to-neon-pink rounded-full"
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.3 }}
                style={{
                  boxShadow: '0 0 20px rgba(200, 50, 255, 0.6)'
                }}
              />
              
              {/* Progress glow effect */}
              <motion.div
                className="absolute top-0 h-full w-8 bg-white/30 rounded-full blur-sm"
                animate={{
                  left: `${progress - 4}%`
                }}
                transition={{ duration: 0.3 }}
              />
            </div>
            
            <div className="flex justify-between items-center mt-4">
              <span className="text-neon-cyan font-mono text-sm">
                {Math.round(progress)}%
              </span>
              <span className="text-neon-pink font-mono text-sm">
                LOADING...
              </span>
            </div>
          </div>

          {/* Status Text */}
          <motion.div
            key={currentPhase}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="text-lg text-gray-300 font-mono mb-8"
          >
            {phases[currentPhase]}
          </motion.div>

          {/* Neural Network Visualization */}
          <div className="relative w-32 h-32 mx-auto">
            <svg viewBox="0 0 100 100" className="w-full h-full">
              {/* Network nodes */}
              {[
                { x: 20, y: 20, delay: 0 },
                { x: 80, y: 20, delay: 0.2 },
                { x: 50, y: 50, delay: 0.4 },
                { x: 20, y: 80, delay: 0.6 },
                { x: 80, y: 80, delay: 0.8 }
              ].map((node, i) => (
                <motion.circle
                  key={i}
                  cx={node.x}
                  cy={node.y}
                  r="3"
                  fill="url(#node-gradient)"
                  animate={{
                    r: [3, 6, 3],
                    opacity: [0.7, 1, 0.7]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: node.delay,
                    ease: "easeInOut"
                  }}
                />
              ))}
              
              {/* Network connections */}
              {[
                { x1: 20, y1: 20, x2: 50, y2: 50 },
                { x1: 80, y1: 20, x2: 50, y2: 50 },
                { x1: 50, y1: 50, x2: 20, y2: 80 },
                { x1: 50, y1: 50, x2: 80, y2: 80 }
              ].map((line, i) => (
                <motion.line
                  key={i}
                  x1={line.x1}
                  y1={line.y1}
                  x2={line.x2}
                  y2={line.y2}
                  stroke="url(#line-gradient)"
                  strokeWidth="1"
                  strokeDasharray="2,2"
                  animate={{
                    strokeDashoffset: [0, -4],
                    opacity: [0.5, 1, 0.5]
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    delay: i * 0.2,
                    ease: "linear"
                  }}
                />
              ))}

              <defs>
                <radialGradient id="node-gradient" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="hsl(180, 100%, 60%)" />
                  <stop offset="100%" stopColor="hsl(280, 100%, 70%)" />
                </radialGradient>
                <linearGradient id="line-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="hsl(320, 100%, 75%)" stopOpacity="0.8"/>
                  <stop offset="100%" stopColor="hsl(180, 100%, 60%)" stopOpacity="0.8"/>
                </linearGradient>
              </defs>
            </svg>
          </div>

          {/* System info */}
          <motion.div
            className="text-xs text-gray-500 font-mono mt-8 space-y-1"
            animate={{
              opacity: [0.5, 1, 0.5]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <div>SYSTEM: QUANTUM.OS v3.14</div>
            <div>ARCH: NEURAL_NETWORK_X64</div>
            <div>MODE: HOLOGRAPHIC_INTERFACE</div>
          </motion.div>
        </div>

        {/* Corner decorations */}
        {[
          { corner: 'top-left', rotation: 0 },
          { corner: 'top-right', rotation: 90 },
          { corner: 'bottom-left', rotation: -90 },
          { corner: 'bottom-right', rotation: 180 }
        ].map((decoration, i) => (
          <motion.div
            key={i}
            className={`absolute ${decoration.corner.includes('top') ? 'top-8' : 'bottom-8'} ${decoration.corner.includes('left') ? 'left-8' : 'right-8'}`}
            animate={{
              rotate: decoration.rotation + 360,
              scale: [1, 1.1, 1]
            }}
            transition={{
              rotate: { duration: 10, repeat: Infinity, ease: "linear" },
              scale: { duration: 2, repeat: Infinity, delay: i * 0.5 }
            }}
          >
            <div className="w-8 h-8 border-2 border-neon-cyan/40 border-l-transparent border-b-transparent rotate-45"></div>
          </motion.div>
        ))}
      </motion.div>
    </AnimatePresence>
  );
}
