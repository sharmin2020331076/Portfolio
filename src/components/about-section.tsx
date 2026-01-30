
import { motion } from 'framer-motion';

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-6">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <p className="text-lg text-gray-300 leading-relaxed">
              I'm Sharmin Akther Juthi, a passionate Computer Science student and frontend developer dedicated to crafting beautiful, intuitive digital experiences that feel as good as they look.

            </p>
            
            <p className="text-lg text-gray-300 leading-relaxed">
              I specialize in modern frontend technologies to build responsive, user-centric interfaces that are visually stunning, accessible, and highly performant across devices.

            </p>

            <div className="grid grid-cols-2 gap-6 mt-8">
              {[
                { label: "Years Experience", value: "3+" },
                { label: "Projects Completed", value: "50+" },
                { label: "Technologies Mastered", value: "15+" },
                { label: "Client Satisfaction", value: "100%" }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  className="text-center glass-morphism p-4 rounded-lg"
                >
                  <div className="text-2xl font-bold text-primary mb-1">{stat.value}</div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="glass-morphism p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-gradient mb-6">My Mission</h3>
              <p className="text-gray-300 leading-relaxed mb-6">
                To bridge the gap between design and functionality, creating digital experiences 
                that inspire, engage, and empower users. I'm committed to pushing the boundaries 
                of what's possible on the web while maintaining a focus on accessibility and 
                user experience.
              </p>
              
              <div className="space-y-4">
                {[
                  "🚀 Modern frontend development",
                  "🎨 Pixel-perfect, responsive UI design",
                  "⚡ Performance & optimization focused",
                  "🔧 Problem-solving with clean, maintainable code"
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center space-x-3"
                  >
                    <span className="text-lg">{item.split(' ')[0]}</span>
                    <span className="text-gray-300">{item.substring(2)}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
