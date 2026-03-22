import React from 'react';
import { motion } from 'framer-motion';

interface Project {
  id: number;
  name: string;
  description: string;
  techStack: string[];
  githubUrl: string;
}

const Projects = () => {
  const projects: Project[] = [
    {
      id: 1,
      name: "E-Commerce Platform",
      description: "A modern e-commerce platform with real-time inventory management and secure payment processing.",
      techStack: ["React", "Node.js", "MongoDB", "Stripe"],
      githubUrl: "https://github.com"
    },
    {
      id: 2,
      name: "Task Management App",
      description: "Collaborative task management application with real-time updates and team collaboration features.",
      techStack: ["TypeScript", "Next.js", "PostgreSQL", "Socket.io"],
      githubUrl: "https://github.com"
    },
    {
      id: 3,
      name: "Weather Dashboard",
      description: "Beautiful weather dashboard with detailed forecasts, interactive maps, and location-based alerts.",
      techStack: ["React", "Tailwind CSS", "OpenWeather API", "Chart.js"],
      githubUrl: "https://github.com"
    },
    {
      id: 4,
      name: "Blog Platform",
      description: "Full-featured blogging platform with markdown support, comment system, and SEO optimization.",
      techStack: ["Next.js", "TypeScript", "Prisma", "MySQL"],
      githubUrl: "https://github.com"
    },
    {
      id: 5,
      name: "Portfolio Generator",
      description: "Dynamic portfolio generator that creates beautiful portfolio websites from JSON configuration.",
      techStack: ["React", "Framer Motion", "Tailwind CSS", "Vite"],
      githubUrl: "https://github.com"
    },
    {
      id: 6,
      name: "Chat Application",
      description: "Real-time chat application with end-to-end encryption, file sharing, and video calls.",
      techStack: ["React", "WebRTC", "Socket.io", "Express"],
      githubUrl: "https://github.com"
    }
  ];

  return (
    <section id="projects" className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Projects</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills and expertise
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="bg-gray-50 rounded-xl p-6 border border-gray-200 hover:shadow-lg transition-shadow duration-300"
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {project.name}
              </h3>
              
              <p className="text-gray-600 mb-4 line-clamp-3">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-accent/10 text-accent text-sm rounded-full font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              
              <motion.a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 text-accent hover:text-blue-600 font-medium transition-colors duration-200"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                View on GitHub
              </motion.a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;