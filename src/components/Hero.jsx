import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Play, CheckCircle2 } from 'lucide-react';

const Hero = () => {
    return (
        <section className="relative pt-32 pb-24 overflow-hidden bg-white">
            {/* Soft Premium Background Elements */}
            <div className="absolute top-[-10%] right-[-5%] -z-10 w-[600px] h-[600px] bg-emerald-50 blur-[120px] rounded-full opacity-60" />
            <div className="absolute bottom-[-10%] left-[-5%] -z-10 w-[500px] h-[500px] bg-indigo-50 blur-[100px] rounded-full opacity-60" />

            <div className="container mx-auto px-6">
                <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-50 border border-emerald-100 text-primary text-sm font-bold mb-8 shadow-sm"
                    >
                        <span className="flex h-2 w-2 rounded-full bg-primary animate-pulse" />
                        Voted #1 Personal Finance Tool 2026
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="text-5xl md:text-8xl font-black tracking-tight mb-8 leading-[1.05] text-secondary"
                    >
                        Take Control of Your Money. <br />
                        <span className="gradient-text">Build Wealth With Confidence.</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="text-lg md:text-2xl text-slate-600 mb-12 leading-relaxed max-w-3xl"
                    >
                        Paisawale is your all-in-one financial operating system to track, plan, grow, and optimize your money — powered by smart tools and AI insights.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="flex flex-col sm:flex-row items-center gap-5 mb-16"
                    >
                        <button className="px-8 py-4.5 bg-primary hover:bg-primary-dark text-white rounded-2xl font-black text-lg flex items-center gap-2 transition-all shadow-xl shadow-primary/20 hover:shadow-primary/30 active:scale-95">
                            Start Free — Track in 60s
                            <ArrowRight className="w-5 h-5" />
                        </button>
                        <button className="px-8 py-4.5 bg-white hover:bg-slate-50 text-secondary rounded-2xl font-bold text-lg flex items-center gap-2 transition-all border border-slate-200 shadow-sm">
                            <Play className="w-5 h-5 text-primary fill-primary" />
                            Explore Free Tools
                        </button>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.5 }}
                        className="flex flex-wrap justify-center items-center gap-10 py-8 px-12 bg-white rounded-[40px] border border-slate-100 shadow-xl shadow-slate-200/50"
                    >
                        <div className="flex items-center gap-3 group transition-all cursor-default">
                            <div className="p-1.5 bg-emerald-50 rounded-lg group-hover:bg-emerald-100 transition-colors">
                                <CheckCircle2 className="text-primary w-5 h-5" />
                            </div>
                            <span className="text-sm font-bold uppercase tracking-wider text-slate-700">Total Clarity</span>
                        </div>
                        <div className="flex items-center gap-3 group transition-all cursor-default">
                            <div className="p-1.5 bg-emerald-50 rounded-lg group-hover:bg-emerald-100 transition-colors">
                                <CheckCircle2 className="text-primary w-5 h-5" />
                            </div>
                            <span className="text-sm font-bold uppercase tracking-wider text-slate-700">Growth Powered</span>
                        </div>
                        <div className="flex items-center gap-3 group transition-all cursor-default">
                            <div className="p-1.5 bg-emerald-50 rounded-lg group-hover:bg-emerald-100 transition-colors">
                                <CheckCircle2 className="text-primary w-5 h-5" />
                            </div>
                            <span className="text-sm font-bold uppercase tracking-wider text-slate-700">AI Insights</span>
                        </div>
                    </motion.div>

                    <p className="mt-10 text-slate-400 text-sm font-semibold tracking-wide flex items-center gap-2">
                        <span className="h-px w-8 bg-slate-200" />
                        TRUSTED BY 10,000+ USERS WORLDWIDE
                        <span className="h-px w-8 bg-slate-200" />
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Hero;
