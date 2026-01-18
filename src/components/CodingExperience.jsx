import React from 'react';
import { motion } from 'framer-motion';
import { Code2, ExternalLink, Trophy, Award, Medal, BookOpen } from 'lucide-react';
import fireH from '../assets/fire-h.png';
import codingLogo from '../assets/coding-logo.png';

const CodingExperience = () => {
    // Programming Summary Stats
    const summaryStats = [
        { icon: <Trophy size={24} />, label: 'RANK', value: '33225', color: 'text-green-400', bgColor: 'bg-green-500/20' },
        { icon: <Code2 size={24} />, label: 'PROGRAMS SOLVED', value: '818', color: 'text-cyan-400', bgColor: 'bg-cyan-500/20' },
        { icon: <BookOpen size={24} />, label: 'CODE TEST', value: '0', color: 'text-orange-400', bgColor: 'bg-orange-500/20' },
        { icon: <Code2 size={24} />, label: 'CODE TRACK', value: '700', color: 'text-orange-400', bgColor: 'bg-orange-500/20' },
        { icon: <Code2 size={24} />, label: 'DC', value: '13', color: 'text-orange-400', bgColor: 'bg-orange-500/20' },
        { icon: <Code2 size={24} />, label: 'DT', value: '91', color: 'text-orange-400', bgColor: 'bg-orange-500/20' },
        { icon: <BookOpen size={24} />, label: 'CODE TUTOR', value: '14', color: 'text-orange-400', bgColor: 'bg-orange-500/20' }
    ];

    // Language-specific stats
    const languageStats = [
        { label: 'C', value: '524', color: 'text-gray-400', bgColor: 'bg-gray-500/20' },
        { label: 'PYTHON3', value: '197', color: 'text-gray-400', bgColor: 'bg-gray-500/20' },
        { label: 'JAVA', value: '87', color: 'text-gray-400', bgColor: 'bg-gray-500/20' },
        { label: 'CPP23', value: '10', color: 'text-gray-400', bgColor: 'bg-gray-500/20' }
    ];

    // Medal stats
    const medalStats = [
        { label: 'GOLD', value: '0', color: 'text-yellow-400' },
        { label: 'SILVER', value: '0', color: 'text-gray-300' },
        { label: 'BRONZE', value: '246', color: 'text-orange-400' }
    ];

    return (
        <section id="coding-experience" className="min-h-screen py-20 px-6">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <div className="flex items-center justify-center gap-3 mb-4">
                        <Code2 size={40} className="text-cyan-400" />
                        <h2 className="text-5xl font-bold">
                            Coding <span className="neon-text">Experience</span>
                        </h2>
                    </div>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                        My journey in competitive programming and problem-solving on SkillRack
                    </p>
                </motion.div>

                {/* Profile Card */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="glass p-8 mb-8"
                >
                    <div className="flex items-center justify-between mb-6">
                        <div className="flex items-center gap-4">
                            <div className="w-16 h-16 flex items-center justify-center">
                                <img src={fireH} alt="Fire H Logo" className="w-full h-full object-contain" />
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold">HARISH D</h3>
                                <p className="text-gray-400">342405017</p>
                                <p className="text-sm text-gray-500">CSC</p>
                                <p className="text-sm text-gray-500">Sairam Engineering College, Chennai</p>
                                <p className="text-sm text-gray-500">(Second Year) 2028</p>
                            </div>
                        </div>
                        <motion.a
                            href="http://www.skillrack.com/profile/495922/83f02be2f395a0daf9e04840cc8a6552338de040"
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-600 px-6 py-3 rounded-lg font-bold hover:shadow-lg hover:shadow-cyan-500/50 transition-all group"
                        >
                            View Profile
                            <ExternalLink size={18} className="group-hover:translate-x-1 transition-transform" />
                        </motion.a>
                    </div>

                    {/* Programming Summary */}
                    <div className="mb-6">
                        <h4 className="text-xl font-bold mb-4 flex items-center gap-2">
                            <span className="bg-black text-white px-3 py-1 text-sm">PROGRAMMING SUMMARY</span>
                        </h4>
                        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
                            {summaryStats.map((stat, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.05 }}
                                    className="text-center"
                                >
                                    <div className={`${stat.bgColor} rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-2 ${stat.color}`}>
                                        {stat.icon}
                                    </div>
                                    <p className="text-2xl font-bold">{stat.value}</p>
                                    <p className="text-xs text-gray-400 uppercase">{stat.label}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Language Stats */}
                    <div className="mb-6">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            {languageStats.map((lang, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.05 }}
                                    className="text-center"
                                >
                                    <div className={`${lang.bgColor} rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-2`}>
                                        <Code2 size={24} className={lang.color} />
                                    </div>
                                    <p className="text-2xl font-bold">{lang.value}</p>
                                    <p className="text-xs text-gray-400 uppercase">{lang.label}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Medals */}
                    <div className="flex items-center justify-center gap-8 pt-6 border-t border-white/10">
                        {medalStats.map((medal, idx) => (
                            <div key={idx} className="text-center">
                                <p className="text-3xl font-bold">{medal.value}</p>
                                <p className={`text-sm ${medal.color} uppercase font-semibold`}>{medal.label}</p>
                            </div>
                        ))}
                    </div>
                </motion.div>

                {/* Certificates Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="glass p-6 text-center"
                >
                    <div className="flex items-center justify-center gap-3 mb-2">
                        <Award size={24} className="text-cyan-400" />
                        <h4 className="text-xl font-bold">CERTIFICATE(S)</h4>
                    </div>
                    <p className="text-4xl font-bold text-cyan-400">6</p>
                    <p className="text-sm text-gray-400 mt-2">Earned certificates on SkillRack</p>
                </motion.div>

                {/* Additional Info */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6"
                >
                    <div className="glass p-6">
                        <h4 className="text-lg font-bold mb-2 text-cyan-400">Problem Solving</h4>
                        <p className="text-gray-400 text-sm">
                            Solved 818 diverse problems across data structures, algorithms, and competitive programming
                        </p>
                    </div>
                    <div className="glass p-6">
                        <h4 className="text-lg font-bold mb-2 text-cyan-400">Multi-Language Expertise</h4>
                        <p className="text-gray-400 text-sm">
                            Proficient in C (524), Python3 (197), Java (87), and C++ with hands-on problem-solving
                        </p>
                    </div>
                    <div className="glass p-6">
                        <h4 className="text-lg font-bold mb-2 text-cyan-400">Continuous Learning</h4>
                        <p className="text-gray-400 text-sm">
                            Regularly practicing with 700+ code track problems and earning 246 bronze medals
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default CodingExperience;
