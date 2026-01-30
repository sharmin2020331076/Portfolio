
import { motion } from 'framer-motion';

export default function ProfileSection() {
  return (
    <section id="profile" className="py-20 bg-slate-deep">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative w-full max-w-md mx-auto">
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent rounded-2xl rotate-3 opacity-20"></div>
              <div className="glass-morphism rounded-2xl p-2 relative">
                <img
                  src='/juthi-photo.jpg'
                  alt="Sharmin Akther Juthi"
                  className="w-full h-auto rounded-xl object-cover"
                />
              </div>
              
              {/* Floating Elements */}
              <motion.div
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -top-4 -right-4 glass-morphism p-3 rounded-full"
              >
                <i className="fas fa-code text-primary text-xl"></i>
              </motion.div>
              
              <motion.div
                animate={{ y: [10, -10, 10] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -bottom-4 -left-4 glass-morphism p-3 rounded-full"
              >
                <i className="fas fa-heart text-accent text-xl"></i>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-4">
                Frontend Developer
              </h2>
              <p className="text-xl text-gray-300 leading-relaxed">
               Passionate about building responsive and user-friendly web interfaces. I combine clean code with modern design principles to create fast, accessible, and visually engaging digital experiences.
              </p>
            </div>

            <div className="space-y-8">
              {/* Availability Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/10 border border-green-500/20">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                </span>
                <span className="text-sm font-medium text-green-400">Available for Work</span>
              </div>

              {/* Education Logic */}
              <div className="glass-morphism p-6 rounded-xl relative overflow-hidden group hover:border-primary/40 transition-colors duration-300">
                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                  <i className="fas fa-graduation-cap text-6xl text-primary"></i>
                </div>
                <h3 className="text-xl font-semibold text-primary mb-3">Education</h3>
                <p className="text-gray-300">
                  Bachelor of Science in Computer Science & Engineering
                  <br />
                  <span className="text-gray-400 text-sm">Focus on Software Development & Web Technologies</span>
                </p>
              </div>

              {/* Tech Stack / Toolkit */}
              <div className="grid grid-cols-2 gap-4">
                <div className="glass-morphism p-4 rounded-xl hover:bg-primary/5 transition-colors duration-300">
                  <h4 className="text-sm font-semibold text-neon-cyan mb-2">Frontend Arsenal</h4>
                  <p className="text-xs text-gray-400">React, Next.js, TypeScript, Tailwind, Framer Motion, GSAP</p>
                </div>
                <div className="glass-morphism p-4 rounded-xl hover:bg-accent/5 transition-colors duration-300">
                  <h4 className="text-sm font-semibold text-accent mb-2">Design Tools</h4>
                  <p className="text-xs text-gray-400">Figma, Adobe XD, Photoshop, UI/UX Principles</p>
                </div>
              </div>

              {/* Call to Actions */}
              <div className="flex justify-center gap-4 pt-4 px-8">
                 <motion.a
                  href="/resume.pdf"
                  download
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-2.5 bg-primary rounded-lg text-white font-medium flex items-center gap-2 shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-shadow cursor-pointer"
                >
                  <i className="fas fa-download"></i> Download CV
                </motion.a>
                
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="px-6 py-2.5 border border-gray-600 rounded-lg text-gray-300 font-medium hover:border-white hover:text-white transition-colors"
                >
                  Contact Me
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
