import React from 'react';
import { motion } from 'framer-motion';
import { AlertCircle, XCircle } from 'lucide-react';

const Problem = () => {
    const problems = [
        "Not knowing where their money goes",
        "No clear savings or investment plan",
        "Too many apps for budgeting, investing, and tracking",
        "No visibility on net worth or financial growth",
        "Stress about taxes, loans, and future planning"
    ];

    return (
        <section className="py-24 bg-slate-950/50 relative overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="grid md:grid-cols-2 gap-16 items-center">
                    <div>
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-red-500/10 text-red-500 text-xs font-bold uppercase tracking-wider mb-6"
                        >
                            <AlertCircle className="w-4 h-4" />
                            The Financial Struggle
                        </motion.div>

                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-4xl md:text-5xl font-bold mb-8 leading-tight"
                        >
                            Managing money shouldn’t feel <span className="text-red-400">confusing or stressful.</span>
                        </motion.h2>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-slate-400 text-lg mb-10"
                        >
                            Most people today struggle with fragmented financial data and lack a unified strategy. Paisawale solves this by bringing everything into one powerful platform.
                        </motion.p>

                        <div className="space-y-4">
                            {problems.map((problem, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.1 }}
                                    className="flex items-start gap-4 p-4 glass-card rounded-2xl hover:border-red-500/30"
                                >
                                    <XCircle className="w-5 h-5 text-red-500 shrink-0 mt-1" />
                                    <span className="text-slate-300 font-medium">{problem}</span>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="relative"
                    >
                        {/* Visual representation of confusion */}
                        <div className="relative z-10 p-8 glass rounded-[40px] border border-white/10 shadow-2xl">
                            <div className="bg-slate-900 rounded-2xl p-6 overflow-hidden">
                                <div className="flex justify-between items-center mb-8">
                                    <div className="h-8 w-32 bg-slate-800 rounded-lg animate-pulse" />
                                    <div className="h-10 w-10 bg-slate-800 rounded-full animate-pulse" />
                                </div>
                                <div className="space-y-6">
                                    <div className="h-40 w-full bg-slate-800/50 rounded-2xl relative flex items-center justify-center">
                                        <div className="text-slate-600 text-sm font-bold uppercase tracking-widest">Fragmented Data</div>
                                    </div>
                                    <div className="grid grid-cols-3 gap-4">
                                        <div className="h-20 bg-red-500/5 border border-red-500/20 rounded-xl" />
                                        <div className="h-20 bg-orange-500/5 border border-orange-500/20 rounded-xl" />
                                        <div className="h-20 bg-blue-500/5 border border-blue-500/20 rounded-xl" />
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Solution Overlay */}
                        <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.5 }}
                            className="absolute -bottom-10 -right-10 z-20 p-8 glass-card border-primary/30 rounded-3xl shadow-2xl max-w-[280px]"
                        >
                            <div className="flex items-center gap-3 mb-4 text-primary">
                                <div className="p-2 bg-primary/20 rounded-lg">
                                    <AlertCircle className="w-5 h-5" />
                                </div>
                                <span className="font-bold">The Solution</span>
                            </div>
                            <p className="text-sm text-slate-300 leading-relaxed italic">
                                "One dashboard. Total financial clarity. That's the Paisawale promise."
                            </p>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Problem;
