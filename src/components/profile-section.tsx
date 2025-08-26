
import { motion } from 'framer-motion';
//import juthiPhoto from '@/assets/profile/juthi-photo.jpg';

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
                  src="src/assets/profile/juthi-photo.jpg"
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
                Creative Developer
              </h2>
              <p className="text-xl text-gray-300 leading-relaxed">
                Passionate about creating digital experiences that make a difference. 
                I combine technical expertise with creative vision to build solutions 
                that are both beautiful and functional.
              </p>
            </div>

            <div className="space-y-6">
              <div className="glass-morphism p-6 rounded-xl">
                <h3 className="text-xl font-semibold text-primary mb-3">Education</h3>
                <p className="text-gray-300">
                  Bachelor of Science in Computer Science & Engineering
                  <br />
                  <span className="text-gray-400">Focus on Software Development & Web Technologies</span>
                </p>
              </div>

              <div className="glass-morphism p-6 rounded-xl">
                <h3 className="text-xl font-semibold text-primary mb-3">Specialization</h3>
                <div className="flex flex-wrap gap-3">
                  {[
                    "Full-Stack Development",
                    "UI/UX Design",
                    "Mobile Development",
                    "Database Design",
                    "Cloud Computing"
                  ].map((skill, index) => (
                    <motion.span
                      key={index}
                      whileHover={{ scale: 1.05 }}
                      className="px-3 py-1 bg-primary/20 text-primary rounded-full text-sm border border-primary/30"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </div>

              <div className="glass-morphism p-6 rounded-xl">
                <h3 className="text-xl font-semibold text-primary mb-3">Philosophy</h3>
                <p className="text-gray-300 italic">
                  "Code is poetry written in logic. Every line should be meaningful, 
                  every function should have purpose, and every application should 
                  tell a story that users want to be part of."
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
