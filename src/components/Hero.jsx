import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Play, Layout, Shield, PieChart, Sparkles } from 'lucide-react';

const Hero = () => {
    return (
        <section className="relative pt-44 pb-32 overflow-hidden">
            {/* Background Decorative Elements */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -z-10 w-full max-w-[1400px] aspect-square bg-[radial-gradient(circle_at_50%_0%,rgba(16,185,129,0.08),transparent_70%)] opacity-70" />

            <div className="container-tight relative">
                <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
                    {/* Top Badge */}
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="badge badge-indigo flex items-center gap-2 mb-8 bg-emerald-50/50 backdrop-blur-sm px-4 py-2"
                    >
                        <Sparkles size={14} className="text-primary" />
                        <span>Introducing Paisawale v4.0</span>
                    </motion.div>

                    {/* Main Headline */}
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-5xl md:text-[84px] leading-[1.05] font-display font-bold tracking-tight text-secondary mb-8"
                    >
                        Take Control of Your Money. <br />
                        <span className="gradient-text italic">Build Wealth With Confidence.</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="text-lg md:text-xl text-slate-500 max-w-2xl font-medium leading-relaxed mb-12"
                    >
                        Paisawale is your all-in-one financial operating system to track, plan, grow, and optimize your money — powered by smart tools and AI insights.
                    </motion.p>

                    {/* CTA Buttons */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="flex flex-col sm:flex-row items-center gap-6 mb-12"
                    >
                        <button className="btn-primary px-8 py-5 text-lg shadow-xl shadow-emerald-200">
                            Start Free — Track Your Money in 60 Seconds
                            <ArrowRight size={20} />
                        </button>
                        <button className="px-8 py-5 rounded-full font-bold text-secondary bg-white border border-slate-200 hover:bg-slate-50 transition-all flex items-center gap-2 shadow-sm">
                            <Play size={18} className="text-primary fill-primary" />
                            Explore Free Finance Tools
                        </button>
                    </motion.div>

                    {/* Trust Line */}
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                        className="text-sm font-bold uppercase tracking-[0.2em] text-slate-400 flex items-center gap-3"
                    >
                        <span className="h-px w-8 bg-slate-200" />
                        Used by individuals who want clarity, control, and financial freedom.
                        <span className="h-px w-8 bg-slate-200" />
                    </motion.p>
                </div>

                {/* Thumbnail Grid below */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mt-32">
                    {[
                        { label: 'Uikit', title: 'Smart Financial Dashboard', icon: Layout, color: 'text-emerald-500' },
                        { label: 'Dashboard', title: 'Wealth Management Tools', icon: PieChart, color: 'text-teal-500' },
                        { label: 'Uikit', title: 'Automated Tax Optimizer', icon: Shield, color: 'text-emerald-600' },
                        { label: 'Pro', title: 'AI Portfolio Insights', icon: Sparkles, color: 'text-emerald-400' },
                    ].map((card, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6 + (idx * 0.1) }}
                            className="card-premium p-8 group cursor-pointer relative overflow-hidden"
                        >
                            <div className={`w-12 h-12 rounded-2xl bg-white shadow-sm border border-slate-100 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform ${card.color}`}>
                                <card.icon size={24} />
                            </div>
                            <div className="badge badge-indigo mb-4 block w-fit">{card.label}</div>
                            <h3 className="text-xl font-display font-bold text-secondary mb-2">{card.title}</h3>
                            <div className="h-1 w-8 bg-slate-100 group-hover:w-full transition-all duration-500" />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Hero;
