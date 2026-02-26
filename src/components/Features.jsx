import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, ArrowRight, Layout, PieChart, Shield, Landmark, Calculator } from 'lucide-react';

const Features = () => {
    const featureGroups = [
        {
            id: "01",
            title: "Smart Financial Dashboard",
            label: "Uikit",
            icon: Layout,
            items: ["Global Net Worth Sync", "Real-time Asset Audit", "Integrated Yield Analysis", "Portfolio Health Scoring"]
        },
        {
            id: "02",
            title: "Wealth & Investment Tools",
            label: "Dashboard",
            icon: PieChart,
            items: ["Capital Allocation Tools", "Compound Growth Projection", "Retirement Modeling", "FIRE Trajectory Sync"]
        },
        {
            id: "03",
            title: "Security & Vault",
            label: "Pro",
            icon: Shield,
            items: ["AES-256 Encryption", "Biometric Authentication", "Private Data Architecture", "Zero-Knowledge Storage"]
        },
        {
            id: "04",
            title: "Debt Architecture",
            label: "System",
            icon: Landmark,
            items: ["Loan Comparison Studio", "Interest Optimization", "EMI Payoff Planning", "Credit Stratification"]
        },
        {
            id: "05",
            title: "Tax Optimization",
            label: "Core",
            icon: Calculator,
            items: ["Capital Gains Audit", "Salary Net Calculation", "Optimization Proposals", "Freelance Estimation"]
        }
    ];

    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <section id="features" className="py-32 bg-surface">
            <div className="container-tight">
                <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-20 px-2">
                    <span className="section-label">Core Capabilities</span>
                    <h2 className="text-4xl md:text-6xl font-display font-bold text-secondary mb-8 leading-tight">
                        A comprehensive suite of tools built for <span className="gradient-text italic">total control.</span>
                    </h2>
                    <p className="text-slate-500 font-medium leading-relaxed">
                        Every module is designed with precision to provide the most accurate and actionable financial intelligence available.
                    </p>
                </div>

                <div className="grid lg:grid-cols-12 gap-8 items-start">
                    {/* Index Selector */}
                    <div className="lg:col-span-12 xl:col-span-4 space-y-4 order-2 xl:order-1">
                        {featureGroups.map((group, idx) => (
                            <button
                                key={group.id}
                                onClick={() => setActiveIndex(idx)}
                                className={`w-full text-left p-6 rounded-[24px] group transition-all duration-500 border relative overflow-hidden ${activeIndex === idx
                                        ? 'bg-white border-emerald-200 shadow-xl shadow-emerald-100 flex-1'
                                        : 'bg-transparent border-transparent hover:bg-white/50 hover:border-slate-200'
                                    }`}
                            >
                                {activeIndex === idx && (
                                    <motion.div layoutId="active-bg" className="absolute left-1 top-1 bottom-1 w-1 bg-primary rounded-full" />
                                )}
                                <div className="flex items-center gap-5">
                                    <div className={`p-3 rounded-xl transition-colors ${activeIndex === idx ? 'bg-emerald-50 text-primary' : 'bg-slate-100 text-slate-400 group-hover:bg-slate-200 group-hover:text-slate-600'}`}>
                                        <group.icon size={20} />
                                    </div>
                                    <div>
                                        <div className="flex items-center gap-2 mb-1">
                                            <span className={`text-[10px] font-bold uppercase transition-colors ${activeIndex === idx ? 'text-primary' : 'text-slate-400'}`}>Module {group.id}</span>
                                            <span className="badge badge-indigo text-[8px] py-0">{group.label}</span>
                                        </div>
                                        <h4 className={`text-lg font-display font-bold transition-colors ${activeIndex === idx ? 'text-secondary' : 'text-slate-500 group-hover:text-secondary'}`}>
                                            {group.title}
                                        </h4>
                                    </div>
                                </div>
                            </button>
                        ))}
                    </div>

                    {/* Feature Details Content */}
                    <div className="lg:col-span-12 xl:col-span-8 order-1 xl:order-2">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeIndex}
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                transition={{ duration: 0.4 }}
                                className="bg-white rounded-[40px] border border-slate-100 shadow-2xl overflow-hidden p-8 md:p-14"
                            >
                                <div className="grid md:grid-cols-2 gap-12">
                                    <div>
                                        <div className="badge badge-indigo mb-6">Active Module</div>
                                        <h3 className="text-3xl md:text-4xl font-display font-bold text-secondary mb-8">{featureGroups[activeIndex].title}</h3>
                                        <p className="text-slate-500 font-medium leading-relaxed mb-10">
                                            Access military-grade financial intelligence tools that simplify complex decisions and drive confident wealth growth strategies.
                                        </p>
                                        <button className="btn-primary">
                                            Explore This Module <ArrowRight size={18} />
                                        </button>
                                    </div>

                                    <div className="space-y-6">
                                        <div className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-2">Specifications:</div>
                                        {featureGroups[activeIndex].items.map((item, i) => (
                                            <div key={i} className="flex items-center gap-4 group p-4 bg-slate-50 rounded-2xl hover:bg-emerald-50 transition-colors">
                                                <div className="p-1 bg-white rounded-lg shadow-sm group-hover:text-primary transition-colors">
                                                    <Check size={16} />
                                                </div>
                                                <span className="text-slate-700 font-bold tracking-tight">{item}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Visual Mockup Area */}
                                <div className="mt-14 h-48 bg-gradient-to-br from-emerald-50 to-teal-50 rounded-[28px] border border-emerald-100 flex items-center justify-center relative overflow-hidden group">
                                    <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#10b981_1px,transparent_1px)] [background-size:24px_24px]" />
                                    <div className="text-emerald-200 uppercase font-display font-black text-6xl tracking-[0.2em] transform -rotate-3 group-hover:scale-110 transition-transform duration-700">PAISAWALE</div>
                                    <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-transparent via-emerald-400 to-transparent opacity-50" />
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Features;
