import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Play, CheckCircle2 } from 'lucide-react';

const Hero = () => {
    return (
        <section className="relative pt-32 pb-20 overflow-hidden">
            {/* Background Glows */}
            <div className="absolute top-0 right-0 -z-10 w-[500px] h-[500px] bg-primary/20 blur-[120px] rounded-full translate-x-1/2 -translate-y-1/2" />
            <div className="absolute bottom-0 left-0 -z-10 w-[400px] h-[400px] bg-blue-500/10 blur-[100px] rounded-full -translate-x-1/2 translate-y-1/2" />

            <div className="container mx-auto px-6">
                <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-white/10 text-primary text-sm font-semibold mb-8"
                    >
                        <span className="flex h-2 w-2 rounded-full bg-primary animate-pulse" />
                        Voted #1 Personal Finance Tool 2026
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="text-5xl md:text-7xl font-extrabold tracking-tight mb-8 leading-[1.1]"
                    >
                        Take Control of Your Money. <br />
                        <span className="gradient-text">Build Wealth With Confidence.</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="text-lg md:text-xl text-slate-400 mb-10 leading-relaxed max-w-2xl"
                    >
                        Paisawale is your all-in-one financial operating system to track, plan, grow, and optimize your money — powered by smart tools and AI insights.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="flex flex-col sm:flex-row items-center gap-4 mb-12"
                    >
                        <button className="px-8 py-4 bg-primary hover:bg-primary/90 text-white rounded-2xl font-bold flex items-center gap-2 transition-all glow-primary shadow-lg shadow-primary/20">
                            Start Free — Track Your Money in 60s
                            <ArrowRight className="w-5 h-5" />
                        </button>
                        <button className="px-8 py-4 glass hover:bg-white/5 text-white rounded-2xl font-bold flex items-center gap-2 transition-all border border-white/10">
                            <Play className="w-5 h-5 text-primary fill-primary" />
                            Explore Free Tools
                        </button>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 0.5 }}
                        className="flex flex-wrap justify-center items-center gap-8 py-6 px-10 glass rounded-3xl border border-white/5"
                    >
                        <div className="flex items-center gap-2 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all cursor-default">
                            <CheckCircle2 className="text-primary w-5 h-5" />
                            <span className="text-sm font-medium uppercase tracking-widest">Total Clarity</span>
                        </div>
                        <div className="flex items-center gap-2 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all cursor-default">
                            <CheckCircle2 className="text-primary w-5 h-5" />
                            <span className="text-sm font-medium uppercase tracking-widest">Growth Powered</span>
                        </div>
                        <div className="flex items-center gap-2 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all cursor-default">
                            <CheckCircle2 className="text-primary w-5 h-5" />
                            <span className="text-sm font-medium uppercase tracking-widest">AI Insights</span>
                        </div>
                    </motion.div>

                    <p className="mt-8 text-slate-500 text-sm italic font-medium">
                        Used by individuals who want clarity, control, and financial freedom.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Hero;
