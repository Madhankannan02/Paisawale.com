import React from 'react';
import { motion } from 'framer-motion';
import { Minus, Plus, ArrowRight } from 'lucide-react';

const Problem = () => {
    const problems = [
        { id: "01", title: "Financial Fragmentation", label: "Too many apps", desc: "Data scattered across budgeting, investing, and tracking apps. Nothing talks to each other." },
        { id: "02", title: "Strategic Blindness", label: "No clear plan", desc: "Absence of a cohesive long-term roadmap for savings or capital preservation." },
        { id: "03", title: "Operational Friction", label: "Loss of control", desc: "Not knowing exactly where your money goes. Every rupee matters, but none are tracked." },
        { id: "04", title: "Future Ambiguity", label: "Planning stress", desc: "Constant worry about taxes, loans, and future milestones without a clear trajectory." },
        { id: "05", title: "Portfolio Opacity", label: "Flying blind", desc: "Zero visibility on true net worth or financial growth. No central point of truth." },
        { id: "06", title: "Mental Tax", label: "Confusion", desc: "Managing money feels stressful and overwhelming. It drains your focus from what matters." },
    ];

    return (
        <section id="problem" className="py-32 bg-white border-t border-slate-100">
            <div className="container-tight">
                <div className="grid lg:grid-cols-12 gap-20">

                    {/* Left Column: Fixed Message (Sticky context) */}
                    <div className="lg:col-span-5">
                        <div className="sticky top-32">
                            <span className="section-label mb-6">Financial Friction</span>
                            <h2 className="text-4xl md:text-6xl font-display font-bold text-secondary mb-8 leading-[1.2] py-2">
                                Managing money shouldn’t feel <span className="gradient-text italic inline-block pr-4">stressful.</span>
                            </h2>
                            <p className="text-slate-500 text-lg font-medium leading-relaxed mb-10 max-w-sm">
                                Most people today struggle with fragmented tools and total lack of clarity. We solve the structural chaos.
                            </p>

                            <div className="p-8 rounded-[32px] bg-emerald-50 border border-emerald-100">
                                <div className="flex items-center gap-3 text-primary font-bold mb-4">
                                    <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center">
                                        <Plus size={18} />
                                    </div>
                                    <span>The Paisawale Solution</span>
                                </div>
                                <h3 className="text-xl font-bold text-secondary mb-2 whitespace-nowrap">Total clarity.</h3>
                                <p className="text-sm text-slate-500">Everything brought into one powerful, unified platform.</p>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Problem Index (Non-card layout) */}
                    <div className="lg:col-span-7 space-y-0 text-left">
                        {problems.map((problem, idx) => (
                            <motion.div
                                key={problem.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="group border-b border-slate-100 py-10 first:pt-0"
                            >
                                <div className="flex items-start gap-8">
                                    <div className="text-sm font-bold font-mono text-emerald-300 transition-colors group-hover:text-primary pt-1">
                                        {problem.id}
                                    </div>
                                    <div className="flex-1">
                                        <div className="flex items-center justify-between mb-4">
                                            <h4 className="text-2xl md:text-3xl font-display font-bold text-secondary group-hover:text-primary transition-colors">
                                                {problem.title}
                                            </h4>
                                            <span className="badge badge-indigo group-hover:bg-primary group-hover:text-white transition-all">
                                                {problem.label}
                                            </span>
                                        </div>
                                        <p className="text-slate-500 text-lg font-medium leading-relaxed max-w-xl group-hover:text-slate-700 transition-colors">
                                            {problem.desc}
                                        </p>

                                    </div>
                                </div>
                            </motion.div>
                        ))}

                        {/* <div className="pt-20">
                            <button className="btn-primary px-10 py-6 text-lg w-full md:w-auto">
                                Experience Simple Finance <ArrowRight size={20} />
                            </button>
                        </div> */}
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Problem;
