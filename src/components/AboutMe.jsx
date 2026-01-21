import React from 'react';
import { motion } from 'framer-motion';
import { User, Heart, Coffee, Laptop, ShieldCheck } from 'lucide-react';

const AboutMe = () => {
    return (
        <section id="about" className="py-24 px-6 relative overflow-hidden">
            <div className="max-w-7xl mx-auto space-y-16">
                <div className="space-y-4">
                    <div className="flex items-center gap-2 text-cyan-400">
                        <User size={24} />
                        <h2 className="text-3xl font-bold uppercase tracking-widest">About Me</h2>
                    </div>
                    <p className="text-gray-400">
                        A deeper look into who I am and what drives my passion for technology.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="glass p-8 space-y-6"
                    >
                        <h3 className="text-2xl font-bold text-gray-100">The Journey of a Developer 🚀</h3>
                        <div className="space-y-4 text-gray-400 leading-relaxed">
                            <p>
                                I am <span className="text-cyan-400 font-bold">Harish D</span>, a student at Sri Sairam Engineering College with a deep fascination for the digital world. My journey started with a curiosity about how things work behind the scenes, which naturally led me to the world of <span className="text-white">Cyber Security</span> and <span className="text-white">Fullstack Development</span>.
                            </p>
                            <p>
                                I thrive at the intersection of security and creation. While I enjoy building robust applications from scratch, I also find immense satisfaction in understanding system vulnerabilities to make the digital space safer. My focus is on leveraging <span className="text-cyan-500">AI tools</span> to enhance developmental efficiency and create innovative solutions.
                            </p>
                            <p>
                                Beyond the screen, I am a firm believer in continuous learning. Whether it's mastering a new framework or exploring the depths of cybersecurity, I approach every challenge with a problem-solving mindset and a collaborative spirit.
                            </p>
                        </div>
                    </motion.div>

                    <div className="grid grid-cols-2 gap-4">
                        {[
                            { icon: <Heart className="text-red-500" />, title: "Passion", desc: "For Cyber Security" },
                            { icon: <Laptop className="text-blue-500" />, title: "Focus", desc: "Fullstack Dev" },
                            { icon: <ShieldCheck className="text-green-500" />, title: "Goal", desc: "Ethical Hacker" },
                            { icon: <Coffee className="text-orange-500" />, title: "Mindset", desc: "Always Learning" }
                        ].map((item, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                whileHover={{ scale: 1.05 }}
                                className="glass p-6 text-center space-y-3"
                            >
                                <div className="flex justify-center">{item.icon}</div>
                                <h4 className="font-bold text-gray-100 text-sm uppercase tracking-widest">{item.title}</h4>
                                <p className="text-xs text-gray-500">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div >
        </section >
    );
};

export default AboutMe;
