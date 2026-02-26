import React from 'react';
import { motion } from 'framer-motion';
import { AlertCircle, ArrowRight } from 'lucide-react';

const Problem = () => {
    const problems = [
        { title: "Financial Fragmentation", label: "Complexity", desc: "Data scattered across legacy systems and incompatible applications." },
        { title: "Strategic Blindness", label: "UI Kit", desc: "Absence of a cohesive long-term roadmap for capital preservation." },
        { title: "Operational Friction", label: "Dashboard", desc: "Complex tax, loan, and overhead management slow down growth." },
        { title: "Future Ambiguity", label: "Pro", desc: "Lack of clarity on retirement trajectories and wealth duration." },
        { title: "Portfolio Opacity", label: "Components", desc: "No central visibility on true net worth or asset performance." },
        { title: "Tax Complexity", label: "Uikit", desc: "Stress about diverse regulations and optimization opportunities." },
    ];

    return (
        <section id="problem" className="py-32 bg-surface">
            <div className="container-tight">
                <div className="flex items-center justify-between mb-16 px-2">
                    <div>
                        <span className="section-label">Problem Sets</span>
                        <h2 className="text-4xl md:text-5xl font-display font-bold text-secondary">Why complexity <span className="gradient-text italic">kills growth.</span></h2>
                    </div>
                    <button className="hidden md:flex items-center gap-2 text-primary font-bold hover:gap-3 transition-all">
                        View All Insights <ArrowRight size={18} />
                    </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {problems.map((item, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.05 }}
                            className="card-premium p-1 flex flex-col group cursor-pointer"
                        >
                            <div className="aspect-[4/3] bg-slate-50 rounded-[20px] overflow-hidden mb-6 relative border border-slate-100">
                                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-teal-500/5 group-hover:opacity-100 opacity-0 transition-opacity" />
                                <div className="flex items-center justify-center h-full">
                                    <AlertCircle className="w-16 h-16 text-slate-200 group-hover:text-primary/20 transition-all duration-500 group-hover:scale-110" />
                                </div>
                                <div className="absolute top-4 right-4 badge badge-indigo bg-white/80 backdrop-blur-md opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all">
                                    Detail View
                                </div>
                            </div>

                            <div className="px-6 pb-6">
                                <div className="flex items-center gap-2 mb-3">
                                    <span className="badge badge-indigo">{item.label}</span>
                                    <span className="w-1 h-1 bg-slate-200 rounded-full" />
                                    <span className="text-[10px] uppercase font-bold text-slate-400">Paisa.v4</span>
                                </div>
                                <h3 className="text-2xl font-display font-bold text-secondary mb-3 group-hover:text-primary transition-colors">{item.title}</h3>
                                <p className="text-slate-500 text-sm leading-relaxed line-clamp-2">{item.desc}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Mid-page banner style */}
                <div className="mt-32 relative rounded-[40px] overflow-hidden bg-slate-900 p-12 lg:p-24 text-center">
                    <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/20 to-teal-600/20" />
                    <div className="relative z-10 max-w-2xl mx-auto">
                        <span className="text-emerald-400 font-bold tracking-[0.3em] uppercase text-xs mb-8 block">Member Exclusive</span>
                        <h3 className="text-3xl md:text-5xl font-display font-bold text-white mb-10 leading-tight">
                            Unlock the full potential of your <span className="text-emerald-400 italic">financial future.</span>
                        </h3>
                        <button className="btn-primary mx-auto">
                            Join the Membership <ArrowRight size={20} />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Problem;
