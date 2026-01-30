
import { motion } from 'framer-motion';
import { projects } from '@/data/projects';

export default function ProjectsSection() {
  const featuredProjects = projects.filter(project => project.featured);

  return (
    <section id="projects" className="py-20 bg-slate-900/30">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-6">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A showcase of my latest work, featuring innovative designs and creative approaches to best user interface implementations.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mt-6"></div>
        </motion.div>

        <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-8">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="glass-morphism rounded-2xl overflow-hidden hover-lift group"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="flex gap-2">
                    <motion.a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="glass-morphism p-2 rounded-lg hover:bg-primary/20"
                    >
                      <i className="fab fa-github text-white"></i>
                    </motion.a>
                    <motion.a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="glass-morphism p-2 rounded-lg hover:bg-primary/20"
                    >
                      <i className="fas fa-external-link-alt text-white"></i>
                    </motion.a>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="px-3 py-1 bg-primary/20 text-primary text-sm rounded-full border border-primary/30">
                    {project.category}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>

                <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.slice(0, 3).map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 py-1 bg-slate-800 text-gray-300 text-xs rounded border border-gray-700"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="px-2 py-1 bg-slate-800 text-gray-300 text-xs rounded border border-gray-700">
                      +{project.technologies.length - 3} more
                    </span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <motion.a
            href="/projects"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-3 glass-morphism px-8 py-4 rounded-full hover:bg-primary/20 transition-all duration-300 group"
          >
            <span className="text-lg font-medium">View All Projects</span>
            <i className="fas fa-arrow-right group-hover:translate-x-1 transition-transform"></i>
          </motion.a>
        </motion.div>
      </div >
    </section >
  );
}
