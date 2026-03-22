import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  const skills = [
    "JavaScript",
    "TypeScript",
    "React",
    "Node.js",
    "Python",
    "HTML/CSS",
    "Tailwind CSS",
    "Git",
    "MongoDB",
    "PostgreSQL",
    "Express.js",
    "Next.js"
  ];

  return (
    <section id="about" className="py-20 px-4 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">About Me</h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Passionate Full-Stack Developer
            </h3>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                I'm a passionate full-stack developer with a keen eye for design and a love for creating 
                seamless user experiences. With expertise in modern web technologies, I build applications 
                that are not only functional but also beautiful and intuitive.
              </p>
              <p>
                My journey in web development started with curiosity and has evolved into a career 
                dedicated to solving complex problems and bringing ideas to life through code. I believe 
                in writing clean, maintainable code and staying up-to-date with the latest industry trends.
              </p>
              <p>
                When I'm not coding, you can find me exploring new technologies, contributing to open-source 
                projects, or enjoying a good cup of coffee while planning my next project.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">
              Skills & Technologies
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                  className="bg-white px-4 py-2 rounded-lg text-center border border-gray-200 hover:border-accent hover:shadow-md transition-all duration-200"
                >
                  <span className="text-gray-700 font-medium">{skill}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;