import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Code, Globe, Database, PenTool, Users } from 'lucide-react';

const Skills = () => {
    const skillCategories = [
        {
            title: "Coding & Languages",
            icon: <Code size={20} />,
            skills: ["C", "Python", "PHP", "JavaScript"]
        },
        {
            title: "Web Technologies",
            icon: <Globe size={20} />,
            skills: ["HTML5", "CSS3", "React JS", "Framer Motion"]
        },
        {
            title: "Database & Tools",
            icon: <Database size={20} />,
            skills: ["MySQL", "Linux", "Github"]
        },
        {
            title: "Soft Skills",
            icon: <Users size={20} />,
            skills: ["Teamwork", "Collaboration", "Problem Solving", "Adaptability"]
        }
    ];

    const floatingSkills = [
        { name: "HTML5", slug: "html5", color: "E34F26", shadow: "shadow-orange-500/20" },
        { name: "CSS3", slug: "css3", color: "1572B6", shadow: "shadow-blue-500/20" },
        { name: "JS", slug: "javascript", color: "F7DF1E", shadow: "shadow-yellow-500/20" },
        { name: "React", slug: "react", color: "61DAFB", shadow: "shadow-cyan-400/20" },
        { name: "Python", slug: "python", color: "3776AB", shadow: "shadow-blue-400/20" },
        { name: "Linux", slug: "linux", color: "FCC624", shadow: "shadow-gray-300/20" },
        { name: "Github", slug: "github", color: "FFFFFF", shadow: "shadow-gray-100/20" },
        { name: "C", slug: "c", color: "A8B9CC", shadow: "shadow-blue-200/20" },
        { name: "PHP", slug: "php", color: "777BB4", shadow: "shadow-purple-500/20" },
        { name: "MySQL", slug: "mysql", color: "4479A1", shadow: "shadow-blue-700/20" }
    ];

    return (
        <section id="skills" className="py-24 px-6 relative">
            <div className="max-w-7xl mx-auto space-y-20">
                <div className="space-y-4">
                    <div className="flex items-center gap-2 text-cyan-400">
                        <Sparkles size={24} />
                        <h2 className="text-3xl font-bold uppercase tracking-widest">My Skills</h2>
                    </div>
                    <p className="text-gray-400 max-w-2xl">
                        Technical expertise blended with creativity — explore my core competencies below.
                    </p>
                </div>

                {/* Floating Skills Visualizer */}
                <div className="relative h-64 w-full flex flex-wrap justify-center items-center gap-8 lg:gap-16 glass py-12 px-6">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-500/5 to-transparent"></div>
                    {floatingSkills.map((skill, idx) => (
                        <motion.div
                            key={skill.name}
                            animate={{
                                y: [0, -15, 0],
                                rotate: [0, idx % 2 === 0 ? 5 : -5, 0]
                            }}
                            transition={{
                                duration: 3 + (idx % 3),
                                repeat: Infinity,
                                ease: "easeInOut",
                                delay: idx * 0.2
                            }}
                            className={`flex flex-col items-center gap-3 z-10`}
                        >
                            <div className={`w-16 h-16 rounded-full glass border-cyan-500/30 flex items-center justify-center p-3 ${skill.shadow} neon-glow`}>
                                <img
                                    src={skill.slug === 'css3' ? 'https://img.icons8.com/color/48/css3.png' : `https://cdn.simpleicons.org/${skill.slug}/${skill.color}`}
                                    alt={skill.name}
                                    className="w-full h-full object-contain"
                                    onError={(e) => {
                                        e.target.src = `https://ui-avatars.com/api/?name=${skill.name}&background=0D1117&color=00BCD4`;
                                    }}
                                />
                            </div>
                            <span className="text-xs font-bold tracking-widest uppercase text-gray-300">{skill.name}</span>
                        </motion.div>
                    ))}
                </div>

                {/* Detailed Categories */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {skillCategories.map((category, idx) => (
                        <motion.div
                            key={category.title}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            whileHover={{ y: -10 }}
                            className="glass p-6 space-y-6 hover:border-cyan-500/30 transition-all duration-300"
                        >
                            <div className="flex items-center gap-3 text-cyan-400 border-b border-white/5 pb-4">
                                {category.icon}
                                <h3 className="font-bold tracking-wide uppercase text-sm">{category.title}</h3>
                            </div>
                            <ul className="space-y-3">
                                {category.skills.map((skill) => (
                                    <li key={skill} className="flex items-center gap-2 text-gray-400 text-sm">
                                        <div className="w-1.5 h-1.5 rounded-full bg-cyan-700"></div>
                                        {skill}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
