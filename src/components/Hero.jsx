import React from 'react';
import { motion } from 'framer-motion';
import {
    Github,
    Linkedin,
    Mail,
    Instagram,
    Facebook,
    MessageCircle,
    MapPin,
    Briefcase,
    Contact,
    Download,
    Terminal,
    Code2,
    Cpu
} from 'lucide-react';

const Hero = () => {
    const socialLinks = [
        { icon: <Linkedin size={24} />, url: 'https://www.linkedin.com/in/harish-d-420617328?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app', color: 'hover:text-blue-500' },
        { icon: <Github size={24} />, url: 'https://github.com/harishd3504-oss', color: 'hover:text-gray-400' },
        { icon: <Mail size={24} />, url: 'mailto:harishd3504@gmail.com', color: 'hover:text-red-500' },
        { icon: <MessageCircle size={24} />, url: 'https://whatsapp.com/dl/', color: 'hover:text-green-500' },
        { icon: <Instagram size={24} />, url: 'https://www.instagram.com/fraudual_harish?igsh=MWVjZWJzN3l4YzJnNw==', color: 'hover:text-pink-500' },
        { icon: <Facebook size={24} />, url: 'https://www.facebook.com/share/1QheUCqB6Y/', color: 'hover:text-blue-600' }
    ];

    return (
        <section id="home" className="min-h-screen pt-24 flex flex-col items-center justify-center px-6 relative overflow-hidden">
            {/* Background blobs for aesthetic */}
            <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-cyan-900/20 rounded-full blur-[100px] -z-10"></div>
            <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-blue-900/20 rounded-full blur-[100px] -z-10"></div>

            <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                {/* Profile Image with Ring */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="relative flex justify-center lg:justify-end"
                >
                    <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full p-2 bg-gradient-to-tr from-cyan-500 to-blue-600 neon-glow">
                        <div className="w-full h-full rounded-full border-4 border-dark overflow-hidden bg-dark-accent">
                            <img
                                src="/profile.png"
                                alt="Harish D"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        {/* Animated Ring */}
                        <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                            className="absolute -inset-4 border-2 border-dashed border-cyan-500/30 rounded-full"
                        ></motion.div>
                    </div>
                </motion.div>

                {/* Hero Content */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-center lg:text-left space-y-6"
                >
                    <div className="space-y-2">
                        <h2 className="text-2xl font-light text-cyan-400">Hi, I'm</h2>
                        <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
                            HARISH <span className="neon-text">D</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-gray-400 font-medium">
                            Ethical Hacking Enthusiast | Aspiring Fullstack Developer
                        </p>
                    </div>

                    <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
                        <span className="px-4 py-1 glass text-sm text-cyan-300">AI Enthusiast</span>
                        <span className="px-4 py-1 glass text-sm text-cyan-300">Developer</span>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <a
                            href="https://maps.app.goo.gl/qVFtk2E9ig2sCgBA9"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="glass p-4 flex items-center gap-3 hover:bg-cyan-500/10 transition-all cursor-pointer group"
                        >
                            <MapPin className="text-cyan-500 group-hover:scale-110 transition-transform" size={20} />
                            <div className="text-left">
                                <p className="text-xs text-gray-500 uppercase">Location</p>
                                <p className="text-sm group-hover:text-cyan-400 transition-colors">Mylapore, Chennai-600004, Tamil Nadu, India</p>
                            </div>
                        </a>
                        <div className="glass p-4 flex items-center gap-3">
                            <Briefcase className="text-cyan-500" size={20} />
                            <div className="text-left">
                                <p className="text-xs text-gray-500 uppercase">Expertise</p>
                                <p className="text-sm">Fullstack Development, AI Tools</p>
                            </div>
                        </div>
                        <div className="glass p-4 flex items-center gap-3 md:col-span-2">
                            <Contact className="text-cyan-500" size={20} />
                            <div className="text-left">
                                <p className="text-xs text-gray-500 uppercase">Contact</p>
                                <div className="text-sm flex items-center gap-2 flex-wrap">
                                    <a
                                        href="mailto:harishd3504@gmail.com"
                                        className="hover:text-cyan-400 transition-colors hover:underline"
                                    >
                                        harishd3504@gmail.com
                                    </a>
                                    <span className="text-gray-600">,</span>
                                    <a
                                        href="tel:+919092459913"
                                        className="hover:text-cyan-400 transition-colors hover:underline"
                                    >
                                        Phn No:+91 9092459913
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="pt-6 space-y-4">
                        <p className="text-lg font-semibold text-gray-300">Connect with me</p>
                        <div className="flex flex-wrap gap-6 justify-center lg:justify-start">
                            {socialLinks.map((link, idx) => (
                                <motion.a
                                    key={idx}
                                    href={link.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    whileHover={{ scale: 1.2, y: -5 }}
                                    className={`text-gray-400 transition-colors ${link.color}`}
                                >
                                    {link.icon}
                                </motion.a>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </div>

            {/* Floating Icons for vibe */}
            <motion.div
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute bottom-10 left-10 text-cyan-500/20 hidden lg:block"
            >
                <Terminal size={100} />
            </motion.div>
            <motion.div
                animate={{ y: [0, 20, 0] }}
                transition={{ duration: 5, repeat: Infinity }}
                className="absolute top-40 right-10 text-blue-500/20 hidden lg:block"
            >
                <Code2 size={120} />
            </motion.div>
        </section>
    );
};

export default Hero;
