import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Wallet, PieChart, ShieldCheck, Zap } from 'lucide-react';

const About = () => {
    const categories = [
        { title: "Smart Dashboard", desc: "Unified financial view", icon: Wallet, color: "bg-emerald-500" },
        { title: "Wealth Tracking", desc: "Growth & Net Worth", icon: PieChart, color: "bg-teal-500" },
        { title: "Security First", desc: "Encrypted intelligence", icon: ShieldCheck, color: "bg-emerald-600" },
        { title: "AI Automation", desc: "Intelligent insights", icon: Zap, color: "bg-teal-400" },
    ];

    return (
        <section id="about" className="py-32 bg-white overflow-hidden">
            <div className="container-tight">
                <div className="grid lg:grid-cols-12 gap-20 items-center mb-32">
                    {/* Left Visual */}
                    <div className="lg:col-span-12 xl:col-span-5 order-2 xl:order-1">
                        <div className="relative">
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 w-[120%] aspect-square bg-emerald-50 rounded-full blur-[100px] opacity-60" />
                            <motion.div
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="card-premium p-10 bg-white relative z-10"
                            >
                                <div className="section-label">Enterprise Architecture</div>
                                <h3 className="text-4xl font-display font-bold text-secondary mb-8">What exactly is <span className="gradient-text italic">Paisawale?</span></h3>
                                <p className="text-slate-500 text-lg leading-relaxed mb-10">
                                    Paisawale is more than an application; it is a structural standard for the modern individual. We bring clarity to capital through precision design.
                                </p>

                                <div className="grid grid-cols-2 gap-6">
                                    {categories.map((cat, idx) => (
                                        <div key={idx} className="space-y-3">
                                            <div className={`w-10 h-10 rounded-xl ${cat.color} bg-opacity-10 flex items-center justify-center`}>
                                                <cat.icon className={cat.color.replace('bg-', 'text-')} size={20} />
                                            </div>
                                            <h4 className="text-sm font-bold text-secondary tracking-tight">{cat.title}</h4>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>

                            <motion.div
                                animate={{ y: [0, -15, 0] }}
                                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                                className="absolute -top-12 -right-8 card-premium p-6 shadow-2xl bg-white hidden xl:block z-20"
                            >
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600">
                                        <ShieldCheck size={20} />
                                    </div>
                                    <div>
                                        <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Status</div>
                                        <div className="text-xs font-bold text-secondary">Secured & Encrypted</div>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </div>

                    {/* Right Cards Showcase */}
                    <div className="lg:col-span-12 xl:col-span-7 order-1 xl:order-2">
                        <div className="flex items-center justify-between mb-12">
                            <h3 className="text-3xl font-display font-bold text-secondary italic underline decoration-emerald-200">Premium Solutions</h3>
                            <button className="text-primary font-bold text-sm tracking-widest uppercase hover:underline">Explore All</button>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {[
                                { title: "Collective Management", label: "Pro", tag: "Legacy" },
                                { title: "Explorer Dashboard", label: "Uikit", tag: "Growth" },
                            ].map((item, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    className="card-premium p-1 group cursor-pointer"
                                >
                                    <div className="aspect-[4/3] bg-slate-900 rounded-[20px] mb-6 overflow-hidden relative">
                                        <div className="absolute inset-0 bg-gradient-to-br from-emerald-600/50 to-teal-600/50 mix-blend-overlay group-hover:scale-110 transition-transform duration-700" />
                                        <div className="absolute inset-0 flex items-center justify-center p-8">
                                            <div className="w-full h-full border border-white/20 rounded-xl relative overflow-hidden">
                                                <div className="absolute top-0 left-0 w-full h-8 bg-white/10" />
                                                <div className="p-4 space-y-4">
                                                    <div className="h-2 w-1/2 bg-white/20 rounded-full" />
                                                    <div className="grid grid-cols-3 gap-2">
                                                        <div className="h-10 bg-white/10 rounded-lg" />
                                                        <div className="h-10 bg-white/10 rounded-lg" />
                                                        <div className="h-10 bg-white/10 rounded-lg" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="px-6 pb-6">
                                        <div className="flex items-center gap-2 mb-3">
                                            <span className="badge badge-indigo">{item.label}</span>
                                            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{item.tag}</span>
                                        </div>
                                        <h4 className="text-2xl font-display font-bold text-secondary group-hover:text-primary transition-colors">{item.title}</h4>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="relative p-12 lg:p-24 rounded-[60px] bg-gradient-to-br from-emerald-50 to-teal-50 text-center border border-white">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-px bg-gradient-to-r from-transparent via-emerald-200 to-transparent" />
                    <div className="max-w-2xl mx-auto space-y-8">
                        <h2 className="text-4xl md:text-6xl font-display font-bold text-secondary tracking-tight">
                            Unlock the <span className="gradient-text">full clarity</span> of your capital.
                        </h2>
                        <p className="text-slate-500 font-medium">Over 10,000+ individuals use Paisawale to architecture their wealth generation journey.</p>
                        <button className="btn-primary mx-auto px-12 py-5 text-lg">
                            Start Now for Free <ArrowRight size={22} />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
