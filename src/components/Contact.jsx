import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, Linkedin, Instagram, Facebook, MessageCircle, Mail, Sparkles } from 'lucide-react';

const Contact = () => {
    const socialLinks = [
        { icon: <Github size={20} />, url: 'https://github.com/harishd3504-oss' },
        { icon: <Linkedin size={20} />, url: 'https://www.linkedin.com/in/harish-d-420617328?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app' },
        { icon: <Mail size={20} />, url: 'mailto:harishd3504@gmail.com' },
        { icon: <MessageCircle size={20} />, url: 'https://whatsapp.com/dl/' },
        { icon: <Instagram size={20} />, url: 'https://www.instagram.com/fraudual_harish?igsh=MWVjZWJzN3l4YzJnNw==' },
        { icon: <Facebook size={20} />, url: 'https://www.facebook.com/share/1QheUCqB6Y/' }
    ];

    const moods = [
        {
            emoji: '😊',
            label: 'Happy',
            color: 'from-yellow-400 to-orange-500',
            response: 'That\'s wonderful! Your positive energy is contagious! ✨'
        },
        {
            emoji: '😢',
            label: 'Sad',
            color: 'from-blue-400 to-indigo-500',
            response: 'I hope things get better soon. Remember, tough times don\'t last! 💙'
        },
        {
            emoji: '🎉',
            label: 'Excited',
            color: 'from-pink-400 to-purple-500',
            response: 'Amazing! That excitement is inspiring! Keep that energy going! 🚀'
        },
        {
            emoji: '😌',
            label: 'Calm',
            color: 'from-green-400 to-teal-500',
            response: 'Peace and tranquility - that\'s the way to be! 🧘‍♂️'
        },
        {
            emoji: '😰',
            label: 'Stressed',
            color: 'from-red-400 to-orange-500',
            response: 'Take a deep breath. You\'ve got this! One step at a time. 💪'
        },
        {
            emoji: '⚡',
            label: 'Energetic',
            color: 'from-cyan-400 to-blue-500',
            response: 'Love that energy! Channel it into something amazing! ⚡'
        }
    ];

    const [selectedMood, setSelectedMood] = useState(null);
    const [showResponse, setShowResponse] = useState(false);

    const handleMoodSelect = (mood) => {
        setSelectedMood(mood);
        setShowResponse(true);
        setTimeout(() => setShowResponse(false), 4000);
    };

    return (
        <section id="contact" className="py-24 px-6 flex items-center justify-center min-h-screen bg-dark/50">
            <div className="max-w-4xl w-full mx-auto">
                <div className="text-center mb-12 space-y-4">
                    <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-cyan-400">Let's Connect & Collaborate 👋</h2>
                    <p className="text-gray-400 max-w-2xl mx-auto leading-relaxed">
                        Whether it's a new project, a collaboration, or just to say hi — I'd love to hear from you!
                    </p>
                </div>

                <div className="flex flex-wrap justify-center gap-4 mb-12">
                    {socialLinks.map((link, idx) => (
                        <motion.a
                            key={idx}
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.1, borderColor: '#22d3ee', color: '#22d3ee' }}
                            className="w-12 h-12 flex items-center justify-center rounded-full border border-white/20 text-gray-400 transition-all duration-300"
                        >
                            {link.icon}
                        </motion.a>
                    ))}
                </div>

                <div className="max-w-3xl mx-auto">
                    <div className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-3xl p-8 md:p-10 shadow-2xl">
                        <div className="text-center mb-8">
                            <div className="flex items-center justify-center gap-2 mb-3">
                                <Sparkles className="text-cyan-400" size={24} />
                                <h3 className="text-2xl font-bold text-white">How's Your Mood Today?</h3>
                                <Sparkles className="text-cyan-400" size={24} />
                            </div>
                            <p className="text-gray-400 text-sm">Select your current vibe and let me predict your energy! ✨</p>
                        </div>

                        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
                            {moods.map((mood, index) => (
                                <motion.button
                                    key={index}
                                    onClick={() => handleMoodSelect(mood)}
                                    whileHover={{ scale: 1.05, y: -5 }}
                                    whileTap={{ scale: 0.95 }}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                    className={`relative p-6 rounded-2xl bg-gradient-to-br ${mood.color} bg-opacity-10 border border-white/20 hover:border-white/40 transition-all duration-300 group`}
                                >
                                    <div className="text-5xl mb-2 transform group-hover:scale-110 transition-transform duration-300">
                                        {mood.emoji}
                                    </div>
                                    <div className="text-white font-semibold text-sm">{mood.label}</div>

                                    {selectedMood?.label === mood.label && (
                                        <motion.div
                                            initial={{ scale: 0 }}
                                            animate={{ scale: 1 }}
                                            className="absolute -top-2 -right-2 bg-cyan-400 text-dark rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold"
                                        >
                                            ✓
                                        </motion.div>
                                    )}
                                </motion.button>
                            ))}
                        </div>

                        <AnimatePresence>
                            {showResponse && selectedMood && (
                                <motion.div
                                    initial={{ opacity: 0, y: 20, scale: 0.9 }}
                                    animate={{ opacity: 1, y: 0, scale: 1 }}
                                    exit={{ opacity: 0, y: -20, scale: 0.9 }}
                                    className={`p-6 rounded-2xl bg-gradient-to-r ${selectedMood.color} text-white text-center font-medium shadow-lg`}
                                >
                                    <div className="text-3xl mb-2">{selectedMood.emoji}</div>
                                    <p className="text-lg">{selectedMood.response}</p>
                                </motion.div>
                            )}
                        </AnimatePresence>

                        {!showResponse && selectedMood && (
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                className="text-center text-gray-400 text-sm"
                            >
                                Click another mood to see a different prediction! 🔮
                            </motion.div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
