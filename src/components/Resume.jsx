import React from 'react';
import { motion } from 'framer-motion';
import { FileText, GraduationCap, Calendar, Download, Building2 } from 'lucide-react';

const Resume = () => {
    const education = [
        {
            institution: "SRI SAIRAM ENGINEERING COLLEGE",
            degree: "Bachelor of Engineering CSE cybersecurity 2nd year",
            duration: "2024 - 2028",
            grade: "8.68(first year)",
            description: "Focusing on Fullstack Development and AI tools. Actively participating in technical workshops and projects."
        },
        {
            institution: "SSK Matric Higher Secondary School",
            degree: "11th and 12th Standard",
            duration: "2022 - 2024",
            grade: "89% and 90.1%",
            description: "Completed higher secondary education with a strong focus on Computer Science and Mathematics."
        },
        {
            institution: "SSK CBSE School",
            degree: "10th Standard",
            duration: "2021 - 2022",
            grade: "85.6%",
            description: "Foundational secondary education with consistent academic performance."
        }
    ];

    return (
        <section id="resume" className="py-24 px-6 relative">
            <div className="max-w-7xl mx-auto space-y-16">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
                    <div className="space-y-4">
                        <div className="flex items-center gap-2 text-cyan-400">
                            <FileText size={24} />
                            <h2 className="text-3xl font-bold uppercase tracking-widest">Resume</h2>
                        </div>
                        <p className="text-gray-400">
                            My academic journey and educational milestones.
                        </p>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4">
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-cyan-600 to-blue-700 rounded-xl font-bold text-white shadow-lg shadow-cyan-500/20"
                            onClick={() => window.open('/resume.png', '_blank')}
                        >
                            <Download size={20} />
                            Download CV
                        </motion.button>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                    <div className="space-y-8 relative before:absolute before:inset-y-0 before:left-0 md:before:left-0 before:w-[1px] before:bg-gradient-to-b before:from-transparent before:via-cyan-500/30 before:to-transparent pl-8">
                        {education.map((item, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="relative glass p-6 space-y-4 hover:border-cyan-500/30 transition-all"
                            >
                                <div className="absolute -left-[37px] top-8 w-4 h-4 rounded-full bg-cyan-500 shadow-[0_0_10px_#00bcd4]"></div>

                                <div className="flex items-start justify-between">
                                    <div className="p-3 glass rounded-lg text-cyan-500">
                                        <GraduationCap size={24} />
                                    </div>
                                    <div className="flex items-center gap-2 text-xs font-bold text-cyan-400 uppercase tracking-widest glass px-3 py-1">
                                        <Calendar size={14} />
                                        {item.duration}
                                    </div>
                                </div>

                                <div className="space-y-1">
                                    <h3 className="text-xl font-bold">{item.institution}</h3>
                                    <p className="text-cyan-500 text-sm font-medium">{item.degree}</p>
                                    {item.grade && (
                                        <p className="text-xs font-bold text-gray-300 uppercase tracking-widest bg-white/5 inline-block px-2 py-1 rounded">Score: {item.grade}</p>
                                    )}
                                </div>

                                <p className="text-gray-400 text-sm leading-relaxed">
                                    {item.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="glass p-4 relative group overflow-hidden"
                    >
                        <div className="absolute inset-0 bg-cyan-500/5 group-hover:bg-cyan-500/10 transition-colors duration-500"></div>
                        <img
                            src="/resume.png"
                            alt="Harish D Resume"
                            className="w-full h-auto rounded-lg shadow-2xl transition-transform duration-500 group-hover:scale-[1.02]"
                        />
                        <div className="mt-4 text-center">
                            <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">Resume Preview</p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Resume;
