import React from 'react';
import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';
import fireH from '../assets/fire-h.png';

const Footer = () => {
    return (
        <footer className="py-12 px-6 border-t border-white/5 bg-dark">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
                <div className="flex items-center gap-3">
                    <div className="w-8 h-8 flex items-center justify-center">
                        <img src={fireH} alt="Fire H Logo" className="w-full h-full object-contain" />
                    </div>
                    <span className="text-gray-300 font-bold tracking-widest uppercase text-xs">Harish D • 2026</span>
                </div>

                <motion.div
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="flex items-center gap-2 text-gray-500 text-sm font-medium"
                >
                    Made with <Heart size={14} className="text-red-500 fill-red-500" /> for the Future
                </motion.div>

                <div className="flex gap-8">
                    <a href="#" className="text-xs font-bold text-gray-500 hover:text-cyan-400 transition-colors uppercase tracking-widest">Privacy</a>
                    <a href="#" className="text-xs font-bold text-gray-500 hover:text-cyan-400 transition-colors uppercase tracking-widest">Terms</a>
                    <a href="#home" className="text-xs font-bold text-gray-500 hover:text-cyan-400 transition-colors uppercase tracking-widest">Back to top</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
