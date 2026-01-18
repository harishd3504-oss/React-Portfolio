import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, ThumbsUp, ThumbsDown, Share2, PenTool } from 'lucide-react';

const Blog = () => {
    const blogPosts = [
        {
            title: "Why I Love Building AI Projects",
            content: "Working on AI-based systems like sign language recognition has taught me how impactful technology can be when applied to accessibility. Combining deep learning with real-world problems is my favorite way to innovate.",
            likes: 42,
            dislikes: 2
        },
        {
            title: "My Thoughts on Design & Aesthetics",
            content: "I believe design should be a balance between functionality and emotion. Dark themes with minimalist layouts always inspire me to create something that feels personal and futuristic.",
            likes: 38,
            dislikes: 0
        },
        {
            title: "Balancing Tech and Creativity",
            content: "As someone who codes and designs, I've realized creativity isn't limited to art — it also lives in algorithms. Each project is like choreography for the mind, where logic meets aesthetic excellence.",
            likes: 56,
            dislikes: 1
        },
        {
            title: "The Beauty of Simple Code",
            content: "Clean code isn't just about fewer lines — it's about clarity. Elegance in code feels like poetry to me — each function should have rhythm and purpose.",
            likes: 49,
            dislikes: 3
        }
    ];

    const BlogCard = ({ post }) => {
        const [likes, setLikes] = useState(post.likes);
        const [dislikes, setDislikes] = useState(post.dislikes);
        const [hasLiked, setHasLiked] = useState(false);
        const [hasDisliked, setHasDisliked] = useState(false);

        const handleLike = () => {
            if (hasLiked) {
                // Remove like
                setLikes(likes - 1);
                setHasLiked(false);
            } else {
                // Add like
                setLikes(likes + 1);
                setHasLiked(true);
                // If disliked, remove dislike
                if (hasDisliked) {
                    setDislikes(dislikes - 1);
                    setHasDisliked(false);
                }
            }
        };

        const handleDislike = () => {
            if (hasDisliked) {
                // Remove dislike
                setDislikes(dislikes - 1);
                setHasDisliked(false);
            } else {
                // Add dislike
                setDislikes(dislikes + 1);
                setHasDisliked(true);
                // If liked, remove like
                if (hasLiked) {
                    setLikes(likes - 1);
                    setHasLiked(false);
                }
            }
        };

        const handleShare = () => {
            const message = `Check out this blog post: "${post.title}"\n\n${post.content}\n\nFrom Harish D's Portfolio`;
            const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(message)}`;
            window.open(whatsappUrl, '_blank');
        };

        return (
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="glass p-8 space-y-6 flex flex-col justify-between hover:border-cyan-500/30 transition-all duration-300"
            >
                <div className="space-y-4">
                    <div className="flex items-center justify-between">
                        <span className="text-xs font-bold text-cyan-500 uppercase tracking-widest px-3 py-1 glass bg-cyan-900/10">Reflection</span>
                        <span className="text-xs text-gray-500 font-medium">Jan 2026</span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-100 leading-tight group-hover:text-cyan-400 transition-colors">
                        {post.title}
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed">
                        {post.content}
                    </p>
                </div>

                <div className="pt-6 border-t border-white/5 flex items-center justify-between">
                    <div className="flex items-center gap-6">
                        <motion.button
                            onClick={handleLike}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            className={`flex items-center gap-2 transition-colors ${hasLiked ? 'text-cyan-400' : 'text-gray-500 hover:text-cyan-400'
                                }`}
                        >
                            <ThumbsUp size={16} className={hasLiked ? 'fill-cyan-400' : ''} />
                            <span className="text-xs font-bold">{likes}</span>
                        </motion.button>
                        <motion.button
                            onClick={handleDislike}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            className={`flex items-center gap-2 transition-colors ${hasDisliked ? 'text-red-400' : 'text-gray-500 hover:text-red-400'
                                }`}
                        >
                            <ThumbsDown size={16} className={hasDisliked ? 'fill-red-400' : ''} />
                            <span className="text-xs font-bold">{dislikes}</span>
                        </motion.button>
                    </div>
                    <motion.button
                        onClick={handleShare}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="text-gray-500 hover:text-green-400 transition-colors"
                        title="Share on WhatsApp"
                    >
                        <Share2 size={16} />
                    </motion.button>
                </div>
            </motion.div>
        );
    };

    return (
        <section id="blog" className="py-24 px-6 relative overflow-hidden">
            <div className="max-w-7xl mx-auto space-y-16">
                <div className="text-center space-y-4">
                    <div className="flex items-center justify-center gap-2 text-cyan-400">
                        <PenTool size={24} />
                        <h2 className="text-3xl font-bold uppercase tracking-widest italic">My Blog</h2>
                    </div>
                    <p className="text-gray-400 max-w-xl mx-auto">
                        Personal thoughts, experiences, and reflections — feel free to react!
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {blogPosts.map((post, idx) => (
                        <BlogCard key={idx} post={post} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Blog;
