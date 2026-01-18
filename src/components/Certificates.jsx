import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Award, ExternalLink, Shield, Cpu, BookOpen } from 'lucide-react';

const Certificates = () => {
    const [activeTab, setActiveTab] = useState('Tech');

    const categories = {
        Tech: [
            {
                title: "Networking Devices and Initial Configuration",
                issuer: "Cisco Networking Academy",
                year: "2025",
                image: "/certificates/cisco.png",
                icon: <Shield className="text-blue-500" />
            },
            {
                title: "Classifying Data Using IBM Granite",
                issuer: "IBM SkillsBuild",
                year: "2025",
                image: "/certificates/ibm.png",
                icon: <Cpu className="text-cyan-500" />
            },
            {
                title: "Intro to Machine Learning",
                issuer: "Kaggle",
                year: "2025",
                image: "/certificates/kaggle.png",
                icon: <Award className="text-yellow-500" />
            },
            {
                title: "The Joy of Computing using Python",
                issuer: "NPTEL Online Certification",
                year: "2025",
                image: "/certificates/nptel.jpg",
                icon: <BookOpen className="text-purple-500" />
            }
        ],
        Others: [
            {
                title: "Cyber Warrior Quiz Competition",
                issuer: "Project Cyber Shield",
                year: "2025",
                image: "/certificates/cyber_warrior_others_new.png",
                icon: <Shield className="text-cyan-400" />
            },
            {
                title: "Cyber Synapse 2.0 Symposium",
                issuer: "Sri Sairam Institute of Technology",
                year: "2025",
                image: "/certificates/cyber_synapse_others_new.png",
                icon: <Award className="text-yellow-500" />
            },
            {
                title: "Embedded Systems and IoT Webinar",
                issuer: "Igniters",
                year: "2025",
                image: "/certificates/igniters_real.jpg",
                icon: <Cpu className="text-blue-500" />
            }
        ]
    };

    function Sparkles({ className }) {
        return <Award className={className} />;
    }

    return (
        <section id="certificates" className="py-24 px-6 relative bg-dark/50">
            <div className="max-w-7xl mx-auto space-y-12">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
                    <div className="space-y-4">
                        <div className="flex items-center gap-2 text-cyan-400">
                            <Award size={24} />
                            <h2 className="text-3xl font-bold uppercase tracking-widest">Certificates</h2>
                        </div>
                        <p className="text-gray-400">
                            Explore my certifications — technical expertise and professional growth.
                        </p>
                    </div>

                    <div className="flex glass p-1 rounded-xl">
                        {['Tech', 'Others'].map((tab) => (
                            <button
                                key={tab}
                                onClick={() => setActiveTab(tab)}
                                className={`px-8 py-2 rounded-lg text-sm font-bold transition-all duration-300 ${activeTab === tab ? 'bg-cyan-600 text-white shadow-lg' : 'text-gray-400 hover:text-white'}`}
                            >
                                {tab}
                            </button>
                        ))}
                    </div>
                </div>

                <motion.div
                    layout
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
                >
                    <AnimatePresence mode="popLayout">
                        {categories[activeTab].map((cert, idx) => (
                            <motion.div
                                key={cert.title}
                                layout
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.3 }}
                                className="glass group hover:border-cyan-500/50 transition-all duration-300 overflow-hidden"
                            >
                                <div className="relative h-40 overflow-hidden bg-dark-accent">
                                    <img src={cert.image} alt={cert.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 opacity-60 group-hover:opacity-100" />
                                    <div className="absolute inset-0 flex items-center justify-center bg-dark/40 opacity-100 group-hover:opacity-0 transition-opacity">
                                        <div className="p-4 glass rounded-full ring-2 ring-cyan-500/30">
                                            {React.cloneElement(cert.icon, { size: 32 })}
                                        </div>
                                    </div>
                                </div>
                                <div className="p-6 space-y-4">
                                    <div>
                                        <h3 className="font-bold text-gray-100 line-clamp-1">{cert.title}</h3>
                                        <p className="text-xs text-cyan-400 font-medium">{cert.issuer} • {cert.year}</p>
                                    </div>
                                    <button
                                        onClick={() => window.open(cert.image, '_blank')}
                                        className="w-full py-2 bg-white/5 hover:bg-cyan-600/20 text-xs font-bold uppercase tracking-widest border border-white/5 hover:border-cyan-500/30 transition-all flex items-center justify-center gap-2"
                                    >
                                        <ExternalLink size={14} />
                                        View Certificate
                                    </button>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>
            </div>
        </section>
    );
};

export default Certificates;
