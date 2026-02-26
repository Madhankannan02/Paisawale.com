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
        <section id="about" className="py-24 relative">
            <div className="container mx-auto px-6">
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <motion.h2
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-bold mb-6"
                    >
                        What is <span className="text-primary italic">Paisa</span>wale?
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-slate-400 text-xl leading-relaxed"
                    >
                        Paisawale is a modern personal finance platform designed to help individuals manage their entire financial life in one place.
                    </motion.p>
                </div>

                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="space-y-8"
                    >
                        <p className="text-slate-300 text-lg leading-relaxed">
                            Whether you're a student, salaried professional, freelancer, or entrepreneur — Paisawale helps you become financially powerful. Track your money, plan your future, and grow wealth effortlessly.
                        </p>

                        <div className="grid gap-6">
                            {highlights.map((item, idx) => (
                                <div key={idx} className="flex gap-6 p-6 glass-card rounded-3xl group">
                                    <div className="p-4 bg-slate-900 rounded-2xl group-hover:bg-primary/20 transition-colors">
                                        {item.icon}
                                    </div>
                                    <div>
                                        <h4 className="text-xl font-bold text-white mb-2">{item.title}</h4>
                                        <p className="text-slate-400">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="relative h-[500px] glass rounded-[60px] border border-white/5 flex items-center justify-center p-12 overflow-hidden"
                    >
                        {/* Abstract Financial visual */}
                        <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-transparent pointer-events-none" />
                        <div className="relative w-full h-full border border-white/10 rounded-[40px] bg-slate-950/80 p-8 shadow-inner">
                            <div className="flex items-center justify-between mb-8">
                                <div className="flex gap-2">
                                    <div className="w-3 h-3 rounded-full bg-red-500/50" />
                                    <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                                    <div className="w-3 h-3 rounded-full bg-green-500/50" />
                                </div>
                                <div className="text-xs font-mono text-slate-500">PAISAWALE_OS_v4.0</div>
                            </div>

                            <div className="space-y-6">
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="h-24 bg-primary/5 border border-primary/10 rounded-2xl flex flex-col justify-center px-6">
                                        <div className="text-xs text-slate-500 uppercase">Growth</div>
                                        <div className="text-2xl font-bold text-primary">+24.5%</div>
                                    </div>
                                    <div className="h-24 bg-blue-500/5 border border-blue-500/10 rounded-2xl flex flex-col justify-center px-6">
                                        <div className="text-xs text-slate-500 uppercase">Saving</div>
                                        <div className="text-2xl font-bold text-blue-400">18.2%</div>
                                    </div>
                                </div>
                                <div className="h-40 bg-slate-900 border border-white/5 rounded-2xl p-6 relative">
                                    <div className="flex justify-between items-end h-full gap-2">
                                        {[40, 70, 45, 90, 65, 80, 55].map((h, i) => (
                                            <motion.div
                                                key={i}
                                                initial={{ height: 0 }}
                                                whileInView={{ height: `${h}%` }}
                                                viewport={{ once: true }}
                                                transition={{ delay: i * 0.1, duration: 1 }}
                                                className="flex-1 bg-primary/20 hover:bg-primary transition-colors rounded-t-lg"
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
