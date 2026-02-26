import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Zap, TrendingUp, Users } from 'lucide-react';

const About = () => {
    const highlights = [
        {
            icon: <Zap className="w-6 h-6 text-primary" />,
            title: "Smart Decisions",
            desc: "Make informed choices without complicated spreadsheets."
        },
        {
            icon: <TrendingUp className="w-6 h-6 text-primary" />,
            title: "Wealth Growth",
            desc: "Optimize spending and grow your net worth systematically."
        },
        {
            icon: <Shield className="w-6 h-6 text-primary" />,
            title: "Secure Planning",
            desc: "Plan your future, from retirement to passive income goals."
        }
    ];

    return (
        <section id="about" className="py-24 relative bg-white overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <motion.h2
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-6xl font-black mb-6 text-secondary"
                    >
                        What is <span className="text-primary italic">Paisa</span>wale?
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-slate-600 text-xl leading-relaxed"
                    >
                        Paisawale is a modern personal finance platform designed to help individuals manage their entire financial life in one place.
                    </motion.p>
                </div>

                <div className="grid lg:grid-cols-2 gap-20 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="space-y-8"
                    >
                        <p className="text-slate-600 text-lg leading-relaxed font-medium">
                            Whether you're a student, salaried professional, freelancer, or entrepreneur — Paisawale helps you become financially powerful. Track your money, plan your future, and grow wealth effortlessly.
                        </p>

                        <div className="grid gap-6">
                            {highlights.map((item, idx) => (
                                <div key={idx} className="flex gap-6 p-8 bg-slate-50 rounded-[32px] border border-slate-100 group hover:bg-white hover:shadow-xl hover:shadow-slate-100 transition-all duration-300">
                                    <div className="p-4 bg-white rounded-2xl shadow-sm group-hover:bg-primary/10 transition-colors">
                                        {item.icon}
                                    </div>
                                    <div>
                                        <h4 className="text-xl font-black text-secondary mb-2">{item.title}</h4>
                                        <p className="text-slate-600 font-medium">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="relative h-[600px] bg-slate-50 rounded-[80px] border border-slate-200 flex items-center justify-center p-8 overflow-hidden shadow-inner"
                    >
                        {/* Abstract Financial visual */}
                        <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 to-transparent pointer-events-none" />
                        <div className="relative w-full h-full border border-slate-200 rounded-[60px] bg-white p-10 shadow-2xl">
                            <div className="flex items-center justify-between mb-10">
                                <div className="flex gap-2">
                                    <div className="w-3 h-3 rounded-full bg-red-400" />
                                    <div className="w-3 h-3 rounded-full bg-yellow-400" />
                                    <div className="w-3 h-3 rounded-full bg-emerald-400" />
                                </div>
                                <div className="text-xs font-black text-slate-300 tracking-widest uppercase">PAISAWALE_CORE_v4</div>
                            </div>

                            <div className="space-y-8">
                                <div className="grid grid-cols-2 gap-6">
                                    <div className="h-32 bg-emerald-50 border border-emerald-100 rounded-[32px] flex flex-col justify-center px-8 shadow-sm">
                                        <div className="text-xs text-emerald-800 font-black uppercase tracking-widest mb-1">Growth</div>
                                        <div className="text-3xl font-black text-emerald-600">+24.5%</div>
                                    </div>
                                    <div className="h-32 bg-indigo-50 border border-indigo-100 rounded-[32px] flex flex-col justify-center px-8 shadow-sm">
                                        <div className="text-xs text-indigo-800 font-black uppercase tracking-widest mb-1">Savings</div>
                                        <div className="text-3xl font-black text-indigo-600">18.2%</div>
                                    </div>
                                </div>
                                <div className="h-56 bg-slate-50 border border-slate-100 rounded-[40px] p-10 relative">
                                    <div className="flex justify-between items-end h-full gap-3">
                                        {[40, 70, 45, 90, 65, 80, 55, 75].map((h, i) => (
                                            <motion.div
                                                key={i}
                                                initial={{ height: 0 }}
                                                whileInView={{ height: `${h}%` }}
                                                viewport={{ once: true }}
                                                transition={{ delay: i * 0.1, duration: 1, type: 'spring', damping: 15 }}
                                                className="flex-1 bg-primary/40 hover:bg-primary transition-all rounded-t-2xl shadow-sm"
                                            />
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
