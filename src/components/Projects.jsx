import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Rocket, Box } from 'lucide-react';

const Projects = () => {
    const projects = [
        {
            title: "Library database management system",
            description: "A smart library management system with AI-powered book organization and database optimization.",
            image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?auto=format&fit=crop&q=80&w=800",
            tags: ["PHP", "CRUD", "Database", "Web"],
            demoUrl: "https://github.com/harishd3504-oss",
            codeUrl: "https://github.com/harishd3504-oss/DBMS-.git"
        },
        {
            title: "AI projects",
            description: "Personalized recommendation engine integrated with a conversational AI chatbot for enhanced user interaction.",
            image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800",
            tags: ["Python", "Machine Learning", "Chatbot", "Artificial Intelligence"],
            demoUrl: "https://github.com/harishd3504-oss",
            codeUrl: "https://github.com/harishd3504-oss/AI-projects.git"
        },
        {
            title: "AI ML Email Spam Detection",
            description: "Machine learning model designed to accurately classify and filter spam emails using advanced textual analysis.",
            image: "https://images.unsplash.com/photo-1557200134-90327ee9fafa?auto=format&fit=crop&q=80&w=800",
            tags: ["Python", "Data Science", "Machine Learning", "Text Classification", "Spam Detection"],
            demoUrl: "https://github.com/harishd3504-oss",
            codeUrl: "https://github.com/harishd3504-oss/MACHINE-LEARNING-EMAIL-SPAM-DETECTION.git"
        },
        {
            title: "Encryption and Decryption System",
            description: "A secure cryptographic tool for protecting sensitive data through advanced encryption and decryption algorithms.",
            image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800",
            tags: ["C", "Encryption", "Cybersecurity", "Decryption"],
            demoUrl: "https://github.com/harishd3504-oss",
            codeUrl: "https://github.com/harishd3504-oss/Encryption-And-Decryption.git"
        },
        {
            title: "Cybersecurity Portfolio Website",
            description: "A modern and responsive portfolio built with React and Framer Motion, showcasing projects, skills, and achievements.",
            image: "/project-portfolio.png",
            tags: ["React", "Framer Motion", "Tailwind CSS"],
            demoUrl: "https://github.com/harishd3504-oss",
            codeUrl: "https://github.com/harishd3504-oss/React-Portfolio.git"
        }
    ];

    return (
        <section id="projects" className="py-24 px-6 relative overflow-hidden">
            <div className="max-w-7xl mx-auto space-y-16">
                <div className="space-y-4">
                    <div className="flex items-center gap-2 text-cyan-400">
                        <Rocket size={24} />
                        <h2 className="text-3xl font-bold uppercase tracking-widest">Projects</h2>
                    </div>
                    <p className="text-gray-400 max-w-2xl">
                        A collection of my major works — blending research, AI innovation, and full-stack expertise.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {projects.map((project, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="glass overflow-hidden group hover:border-cyan-500/50 transition-all duration-500"
                        >
                            <div className="relative h-64 overflow-hidden">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-dark via-transparent to-transparent opacity-60"></div>
                            </div>

                            <div className="p-8 space-y-6">
                                <div className="space-y-2">
                                    <div className="flex items-center gap-2 text-cyan-500 text-sm font-semibold uppercase tracking-wider">
                                        <Box size={16} />
                                        <span>Selected Project</span>
                                    </div>
                                    <h3 className="text-2xl font-bold group-hover:text-cyan-400 transition-colors">
                                        {project.title}
                                    </h3>
                                    <p className="text-gray-400 leading-relaxed">
                                        {project.description}
                                    </p>
                                </div>

                                <div className="flex flex-wrap gap-2">
                                    {project.tags.map((tag) => (
                                        <span
                                            key={tag}
                                            className="px-3 py-1 bg-cyan-900/20 text-cyan-300 text-xs font-medium rounded-full border border-cyan-800/30"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                <div className="flex gap-4 pt-4 border-t border-white/5">
                                    <motion.a
                                        href={project.codeUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        whileHover={{ scale: 1.05 }}
                                        className="flex flex-1 items-center justify-center gap-2 py-3 glass hover:bg-white/5 transition-colors text-sm font-semibold"
                                    >
                                        <Github size={18} />
                                        Code
                                    </motion.a>
                                    <motion.a
                                        href={project.demoUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        whileHover={{ scale: 1.05 }}
                                        className="flex flex-1 items-center justify-center gap-2 py-3 bg-gradient-to-r from-cyan-600 to-blue-700 hover:from-cyan-500 hover:to-blue-600 transition-all text-sm font-bold text-white shadow-lg shadow-cyan-500/20"
                                    >
                                        <ExternalLink size={18} />
                                        Live
                                    </motion.a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
