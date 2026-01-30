
import { motion } from 'framer-motion';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

export default function ContactSection() {
  const { toast } = useToast();

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.target as HTMLFormElement);
    const data = Object.fromEntries(formData);

    try {
      const response = await fetch("https://formsubmit.co/ajax/sharminjuthi1080@gmail.com", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(data)
      });

      const result = await response.json();

      if (response.ok) {
        toast({
          title: "Message sent successfully!",
          description: "I'll get back to you as soon as possible.",
        });
        (e.target as HTMLFormElement).reset();
      } else {
        throw new Error(result.message || "Something went wrong");
      }
    } catch (error) {
      toast({
        title: "Error sending message",
        description: "Please try again or email me directly.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: "fas fa-envelope",
      title: "Email",
      value: "sharminjuthi1080@gmail.com",
      link: "mailto:sharminjuthi1080@gmail.com"
    },
    {
      icon: "fas fa-phone",
      title: "Phone",
      value: "+880 1797084137",
      link: "tel:+8801797084137"
    },
    {
      icon: "fas fa-map-marker-alt",
      title: "Location",
      value: "Sylhet, Bangladesh",
      link: "#"
    }
  ];

  const socialLinks = [
    { icon: "fab fa-github", href: "https://github.com/sharmin2020331076", label: "GitHub" },
    { icon: "fab fa-linkedin", href: "https://www.linkedin.com/in/sharmin-akther-juthi/", label: "LinkedIn" },
    { icon: "fab fa-twitter", href: "https://twitter.com", label: "Twitter" },
    { icon: "fab fa-instagram", href: "https://www.instagram.com/__sharminjuthi__/", label: "Instagram" },
    { icon: "fab fa-facebook", href: "https://www.facebook.com/sharmin.akther.juthi.2025", label: "Facebook" }
  ];

  return (
    <section id="contact" className="py-20 bg-slate-deep">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-6">
            Get In Touch
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Ready to start your next project? Let's collaborate and create something amazing together!
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mt-6"></div>
        </motion.div>

        <div className="flex lg:flex-row flex-col space-y-10 lg:space-x-12 space-x-0 lg:space-y-0 items-center justify-center">
          {/* Contact Form */}

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="glass-morphism p-8 rounded-2xl lg:w-1/2 w-full"
          >
            <h3 className="text-2xl font-bold text-gradient mb-6">Send Message</h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="group">
                  <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2 group-focus-within:text-primary transition-colors">
                    Full Name
                  </label>
                  <Input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="bg-slate-900/50 border-gray-700 text-white focus:border-primary focus:ring-1 focus:ring-primary/50 transition-all duration-300 h-12"
                    placeholder="John Doe"
                    autoComplete='name'
                  />
                </div>

                <div className="group">
                  <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2 group-focus-within:text-primary transition-colors">
                    Email Address
                  </label>
                  <Input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="bg-slate-900/50 border-gray-700 text-white focus:border-primary focus:ring-1 focus:ring-primary/50 transition-all duration-300 h-12"
                    placeholder="john@example.com"
                    autoComplete='email'
                  />
                </div>
              </div>

              <div className="group">
                <label htmlFor="subject" className="block text-sm font-medium text-gray-400 mb-2 group-focus-within:text-primary transition-colors">
                  Subject
                </label>
                <Input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  className="bg-slate-900/50 border-gray-700 text-white focus:border-primary focus:ring-1 focus:ring-primary/50 transition-all duration-300 h-12"
                  placeholder="Project Inquiry"
                />
              </div>

              <div className="group">
                <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2 group-focus-within:text-primary transition-colors">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  className="bg-slate-900/50 border-gray-700 text-white focus:border-primary focus:ring-1 focus:ring-primary/50 transition-all duration-300 resize-none p-4"
                  placeholder="Tell me about your project..."
                />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 disabled:opacity-50"
              >
                <div className="flex items-center gap-2">
                  <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
                  <i className="fas fa-paper-plane"></i>
                </div>
              </Button>
            </form>
          </motion.div>



          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8 lg:w-1/2 w-full"
          >
            <div className="glass-morphism p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-gradient mb-6">Contact Information</h3>

              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <motion.a
                    key={index}
                    href={info.link}
                    whileHover={{ scale: 1.02 }}
                    className="flex items-center gap-4 p-4 glass-morphism rounded-lg hover:bg-primary/10 transition-all duration-300 group"
                  >
                    <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center group-hover:bg-primary/30 transition-colors">
                      <i className={`${info.icon} text-primary text-xl`}></i>
                    </div>
                    <div>
                      <h4 className="text-white font-medium">{info.title}</h4>
                      <p className="text-gray-300">{info.value}</p>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>

            <div className="glass-morphism p-8 rounded-2xl">
              <h3 className="flex justify-center text-2xl font-bold text-gradient mb-6">Follow Me</h3>

              <div className="flex justify-between px-8">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-12 h-12 glass-morphism rounded-lg flex items-center justify-center hover:bg-primary/20 transition-all duration-300 group"
                    title={social.label}
                  >
                    <i className={`${social.icon} text-xl group-hover:text-primary transition-colors`}></i>
                  </motion.a>
                ))}
              </div>
            </div>

            {/* <div className="glass-morphism p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-gradient mb-4">Let's Work Together</h3>
              <p className="text-gray-300 leading-relaxed">
                I'm always interested in new opportunities and exciting projects. 
                Whether you need a full-stack developer, a creative problem solver, 
                or someone who can bring your ideas to life, let's connect!
              </p>
            </div> */}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
