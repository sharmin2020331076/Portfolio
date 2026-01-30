
import { motion } from 'framer-motion';

export default function TestimonialsSection() {
  const testimonials = [
    {
      name: "Farhana Khan",
      role: "Product Manager",
      company: "TechCorp",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKFvhF3wIMkCEJ_8y7t6QcvUBdfgGa13_o0Q&s",
      content: "Juthi's attention to detail and innovative approach to problem-solving made our project a huge success. Her technical skills are matched only by her professionalism."
    },
    {
      name: "Rahim Ahmed",
      role: "Senior Developer",
      company: "InnovateLab",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwL7fw_6Kl-9YcXUY8ucphfb3uYkJQd2Z2kA&s",
      content: "Working with Juthi was fantastic. She delivered exceptional code quality and her communication throughout the project was outstanding. Highly recommended!"
    },
    {
      name: "Tanvir Hasan",
      role: "UI/UX Designer",
      company: "DesignStudio",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&h=150",
      content: "Juthi perfectly translated our designs into beautiful, responsive applications. Her understanding of both design and development is truly impressive."
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-6">
            Client Testimonials
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            What clients and colleagues say about working with me.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mt-6"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="glass-morphism p-8 rounded-2xl hover-lift"
            >
              <div className="flex items-center mb-6">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover border-2 border-primary/30"
                />
                <div className="ml-4">
                  <h4 className="text-xl font-semibold text-white">{testimonial.name}</h4>
                  <p className="text-primary">{testimonial.role}</p>
                  <p className="text-gray-400 text-sm">{testimonial.company}</p>
                </div>
              </div>

              <div className="relative">
                <i className="fas fa-quote-left text-3xl text-primary/30 mb-4"></i>
                <p className="text-gray-300 leading-relaxed italic">
                  "{testimonial.content}"
                </p>
              </div>

              <div className="flex text-accent mt-6">
                {[...Array(5)].map((_, i) => (
                  <i key={i} className="fas fa-star"></i>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
