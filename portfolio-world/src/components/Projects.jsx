import React, { useRef } from 'react';
import { Github, ExternalLink } from 'lucide-react';

const projects = [
  {
    title: "FurniMart",
    description: "Online furniture marketplace connecting users with manufacturers for best prices",
    image: "/src/assets/furnimart.png",
    tags: ["WebRTC", "Socket.io", "Redux"],
    stack: ["React", "Node.js", "MongoDB", "TailwindCSS"],
    github: "https://github.com/jagjeet027/my-furniture-app",
    demo: "https://code-assistant-demo.com",
    featured: true
  },
  {
    title: "CareerBridge",
    description: "Platform helping students find career paths and internships based on their skills",
    image: "/src/assets/careerbridge.png",
    tags: ["WebRTC", "Socket.io", "Redux"],
    stack: ["React", "Node.js", "MongoDB"],
    github: "https://github.com/yourusername/collab-platform",
    demo: "https://collab-platform-demo.com",
    featured: true
  },
  {
    title: "Myntra Shopping Cart",
    description: "Frontend clone of Myntra's shopping cart interface",
    image: "/src/assets/myntra.png",
    tags: ["HTML", "CSS", "JavaScript"],
    stack: ["HTML", "CSS", "JavaScript", "Bootstrap"],
    github: "https://github.com/jagjeet027/ALPHA-INTERN-2.0-PROJECT/tree/main/myntra-app%20-clone",
    demo: "https://portfolio-generator-demo.com",
    featured: false
  }
];

const ProjectCard = ({ project }) => (
  <div className="group bg-gray-800 rounded-xl overflow-hidden border border-gray-700 hover:border-purple-500/30 transition-all duration-300">
    <div className="relative aspect-video">
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="absolute bottom-4 right-4 flex gap-3">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors"
          >
            <Github className="text-white" size={20} />
          </a>
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors"
          >
            <ExternalLink className="text-white" size={20} />
          </a>
        </div>
      </div>
    </div>
    <div className="p-6">
      <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
      <p className="text-gray-300 mb-4 line-clamp-2">{project.description}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {project.tags.map((tag, index) => (
          <span
            key={index}
            className="px-3 py-1 bg-purple-600/20 rounded-full text-sm text-purple-300"
          >
            {tag}
          </span>
        ))}
      </div>
      <div className="flex flex-wrap gap-2">
        {project.stack.map((tech, index) => (
          <span
            key={index}
            className="px-3 py-1 bg-gray-700 rounded-full text-sm text-gray-300"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  </div>
);

const ProjectsGrid = ({ items }) => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    const { current } = scrollRef;
    if (current) {
      const scrollAmount = direction === 'left' ? -current.offsetWidth : current.offsetWidth;
      current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <div className="relative group">
      <div
        ref={scrollRef}
        className="grid grid-flow-col auto-cols-[100%] md:auto-cols-[calc(50%-12px)] lg:auto-cols-[calc(33.333%-16px)] gap-6 overflow-x-auto snap-x snap-mandatory hide-scrollbar"
      >
        {items.map((project, index) => (
          <div key={index} className="snap-start">
            <ProjectCard project={project} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default function Projects() {
  const featuredProjects = projects.filter(p => p.featured);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900/20 to-gray-900 p-4 md:p-8 pt-20 pb-24 md:pb-8">
      <div className="max-w-7xl mx-auto space-y-12">
        <section>
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-white">Featured Projects</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {featuredProjects.map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-white">All Projects</h2>
          <ProjectsGrid items={projects} />
        </section>
      </div>
    </div>
  );
}