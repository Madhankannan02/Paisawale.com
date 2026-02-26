import React from 'react';
import { motion } from 'framer-motion';
import { AlertCircle, XCircle, ShieldCheck } from 'lucide-react';

const Problem = () => {
    const problems = [
        "Not knowing where their money goes",
        "No clear savings or investment plan",
        "Too many apps for budgeting, investing, and tracking",
        "No visibility on net worth or financial growth",
        "Stress about taxes, loans, and future planning"
    ];

    return (
        <section className="py-24 bg-slate-50 relative overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="grid lg:grid-cols-2 gap-20 items-center">
                    <div>
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-red-100 text-red-600 text-xs font-black uppercase tracking-widest mb-6"
                        >
                            <AlertCircle className="w-4 h-4" />
                            The Financial Struggle
                        </motion.div>

                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-4xl md:text-6xl font-black mb-8 leading-tight text-secondary"
                        >
                            Managing money shouldn’t feel <span className="text-red-500 underline decoration-red-200 decoration-8 underline-offset-8">stressful.</span>
                        </motion.h2>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-slate-600 text-xl mb-12 leading-relaxed"
                        >
                            Fragmented data leads to poor decisions. Paisawale simplifies your financial life into a single, unified view.
                        </motion.p>

                        <div className="space-y-4">
                            {problems.map((problem, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.1 }}
                                    className="flex items-center gap-5 p-5 bg-white rounded-2xl border border-slate-100 hover:border-red-200 transition-all group"
                                >
                                    <div className="p-2 bg-red-50 rounded-full group-hover:bg-red-100 transition-colors">
                                        <XCircle className="w-5 h-5 text-red-500 shrink-0" />
                                    </div>
                                    <span className="text-slate-800 font-bold">{problem}</span>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="relative"
                    >
                        {/* Visual representation of confusion */}
                        <div className="relative z-10 p-10 bg-white rounded-[60px] border border-slate-200 shadow-2xl overflow-hidden">
                            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500" />

                            <div className="space-y-8">
                                <div className="flex justify-between items-center">
                                    <div className="h-4 w-32 bg-slate-100 rounded-full" />
                                    <div className="h-10 w-10 bg-slate-50 rounded-xl" />
                                </div>

                                <div className="space-y-6">
                                    <div className="h-48 w-full bg-slate-50 rounded-[32px] border border-dashed border-slate-300 flex flex-col items-center justify-center gap-4">
                                        <div className="p-4 bg-white rounded-full shadow-sm">
                                            <AlertCircle className="w-8 h-8 text-slate-300" />
                                        </div>
                                        <div className="text-slate-400 text-sm font-black uppercase tracking-widest text-center">
                                            Missing Visibility <br />
                                            <span className="font-normal normal-case text-xs">Fragmented across 5+ apps</span>
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-3 gap-5">
                                        <div className="h-24 bg-red-50/50 border border-red-100 rounded-[24px]" />
                                        <div className="h-24 bg-orange-50/50 border border-orange-100 rounded-[24px]" />
                                        <div className="h-24 bg-blue-50/50 border border-blue-100 rounded-[24px]" />
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Solution Overlay */}
                        <motion.div
                            initial={{ opacity: 0, y: 40, x: 20 }}
                            whileInView={{ opacity: 1, y: 0, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.5, type: 'spring' }}
                            className="absolute -bottom-8 -right-8 z-20 p-8 bg-white rounded-[40px] border-2 border-emerald-500 shadow-2xl max-w-[320px]"
                        >
                            <div className="flex items-center gap-4 mb-4 text-emerald-600">
                                <div className="p-3 bg-emerald-100 rounded-2xl">
                                    <ShieldCheck className="w-6 h-6" />
                                </div>
                                <span className="font-black text-xl">The Solution</span>
                            </div>
                            <p className="text-slate-600 font-medium leading-relaxed italic">
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
