import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import fireH from '../assets/fire-h.png';

const Navbar = ({ activeSection, setActiveSection }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home' },
        { name: 'Projects' },
        { name: 'Skills' },
        { name: 'Certificates' },
        { name: 'Blog' },
        { name: 'Resume' },
        { name: 'Coding Experience' },
        { name: 'About Me' },
        { name: 'Contact' }
    ];

    const handleNavClick = (name) => {
        setActiveSection(name);
        setIsOpen(false);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'glass py-3' : 'bg-dark/80 backdrop-blur-md py-4'}`}>
            <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    onClick={() => handleNavClick('Home')}
                    className="flex items-center gap-2 cursor-pointer group"
                >
                    <motion.div
                        animate={{
                            rotate: [0, 5, -5, 0],
                            filter: [
                                'drop-shadow(0 0 8px rgba(255, 100, 0, 0.6))',
                                'drop-shadow(0 0 16px rgba(255, 100, 0, 0.9))',
                                'drop-shadow(0 0 8px rgba(255, 100, 0, 0.6))'
                            ]
                        }}
                        transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                        className="w-12 h-12 flex items-center justify-center"
                    >
                        <img
                            src={fireH}
                            alt="Fire H Logo"
                            className="w-full h-full object-contain"
                        />
                    </motion.div>
                    <div className="hidden sm:block">
                        <h1 className="text-lg font-bold tracking-wider uppercase">Harish D</h1>
                        <p className="text-[10px] text-cyan-400 font-medium leading-tight">AI Enthusiast • Developer</p>
                    </div>
                </motion.div>

                {/* Desktop Links */}
                <div className="hidden lg:flex items-center gap-6">
                    {navLinks.map((link) => (
                        link.external ? (
                            <a
                                key={link.name}
                                href={link.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-sm font-bold uppercase tracking-widest transition-all relative group py-2 text-gray-400 hover:text-white"
                            >
                                {link.name}
                                <span className="absolute -bottom-1 left-0 h-0.5 bg-cyan-500 transition-all w-0 group-hover:w-full"></span>
                            </a>
                        ) : (
                            <button
                                key={link.name}
                                onClick={() => handleNavClick(link.name)}
                                className={`text-sm font-bold uppercase tracking-widest transition-all relative group py-2
                                    ${activeSection === link.name ? 'text-cyan-400' : 'text-gray-400 hover:text-white'}`}
                            >
                                {link.name}
                                <span className={`absolute -bottom-1 left-0 h-0.5 bg-cyan-500 transition-all 
                                    ${activeSection === link.name ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
                            </button>
                        )
                    ))}
                </div>

                {/* Mobile Menu Toggle */}
                <button
                    className="lg:hidden text-gray-400 hover:text-white p-2 glass rounded-lg"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -20, scale: 0.95 }}
                        className="absolute top-full left-0 right-0 glass mt-4 mx-4 p-8 lg:hidden flex flex-col gap-6 text-center border border-white/5"
                    >
                        {navLinks.map((link) => (
                            link.external ? (
                                <a
                                    key={link.name}
                                    href={link.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-xl font-bold uppercase tracking-[0.2em] transition-all text-gray-400 hover:text-cyan-400"
                                >
                                    {link.name}
                                </a>
                            ) : (
                                <button
                                    key={link.name}
                                    onClick={() => handleNavClick(link.name)}
                                    className={`text-xl font-bold uppercase tracking-[0.2em] transition-all
                                        ${activeSection === link.name ? 'text-cyan-400' : 'text-gray-400'}`}
                                >
                                    {link.name}
                                </button>
                            )
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
