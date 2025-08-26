
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
              I'm Sharmin Akther Juthi, a passionate Computer Science student and web developer 
              with a keen eye for creating beautiful, functional digital experiences. My journey 
              in technology began with curiosity and has evolved into a deep love for crafting 
              innovative solutions.
            </p>
            
            <p className="text-lg text-gray-300 leading-relaxed">
              With expertise in modern web technologies, I specialize in building responsive, 
              user-centric applications that not only look stunning but also deliver exceptional 
              performance. I believe in the power of clean code, thoughtful design, and 
              continuous learning.
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
                  "🚀 Innovation-driven development",
                  "🎨 User-centered design approach",
                  "⚡ Performance optimization expert",
                  "🔧 Problem-solving enthusiast"
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
