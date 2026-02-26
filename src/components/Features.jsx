import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    BarChart3, Wallet, LineChart, CreditCard, Receipt,
    ChevronRight, Sparkles, Target, History, Landmark, PieChart
} from 'lucide-react';

const Features = () => {
    const featureGroups = [
        {
            id: 'dashboard',
            icon: <BarChart3 className="w-5 h-5" />,
            title: "Smart Financial Dashboard",
            items: [
                "See all your finances in one place",
                "Track income, expenses, savings & investments",
                "Real-time net worth tracking",
                "Visual financial insights",
                "Monthly financial health score"
            ]
        },
        {
            id: 'budget',
            icon: <Wallet className="w-5 h-5" />,
            title: "Budget & Expense Management",
            items: [
                "Smart monthly budget planner",
                "Automatic expense categorization",
                "Daily spending tracker",
                "Subscription tracker",
                "Bill & payment reminders",
                "Savings goal planner"
            ]
        },
        {
            id: 'wealth',
            icon: <LineChart className="w-5 h-5" />,
            title: "Wealth & Investment Tools",
            items: [
                "Net worth tracker",
                "Investment tracker",
                "Portfolio growth insights",
                "Compound growth tools",
                "Retirement planner",
                "Passive income calculator",
                "FIRE (financial freedom) planner"
            ]
        },
        {
            id: 'debt',
            icon: <CreditCard className="w-5 h-5" />,
            title: "Debt & Loan Management",
            items: [
                "EMI calculator",
                "Debt payoff planner",
                "Loan comparison tools",
                "Credit card payoff strategy",
                "Interest savings calculator"
            ]
        },
        {
            id: 'tax',
            icon: <Receipt className="w-5 h-5" />,
            title: "Tax & Income Tools",
            items: [
                "Income tax calculator",
                "Salary take-home calculator",
                "Tax optimization suggestions",
                "Capital gains calculator",
                "Freelance income estimator"
            ]
        }
    ];

    const [activeGroup, setActiveGroup] = useState(featureGroups[0]);

    return (
        <section id="features" className="py-24 bg-slate-950 relative overflow-hidden">
            {/* Background Decor */}
            <div className="absolute top-1/2 left-1/2 -z-10 w-[800px] h-[800px] bg-primary/5 blur-[150px] rounded-full -translate-x-1/2 -translate-y-1/2" />

            <div className="container mx-auto px-6">
                <div className="flex flex-col items-center text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="p-3 bg-primary/10 rounded-2xl text-primary mb-6"
                    >
                        <Sparkles className="w-6 h-6" />
                    </motion.div>
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">Core Features</h2>
                    <p className="text-slate-400 text-lg max-w-2xl">
                        A comprehensive suite of tools built to give you total control over every aspect of your financial world.
                    </p>
                </div>

                <div className="grid lg:grid-cols-12 gap-12">
                    {/* Navigation */}
                    <div className="lg:col-span-4 space-y-3">
                        {featureGroups.map((group) => (
                            <button
                                key={group.id}
                                onClick={() => setActiveGroup(group)}
                                className={`w-full flex items-center gap-4 p-5 rounded-3xl transition-all text-left border ${activeGroup.id === group.id
                                        ? 'bg-primary/10 border-primary shadow-lg shadow-primary/5'
                                        : 'bg-transparent border-white/5 hover:bg-white/5'
                                    }`}
                            >
                                <div className={`p-3 rounded-xl transition-colors ${activeGroup.id === group.id ? 'bg-primary text-white' : 'bg-slate-900 text-slate-400'
                                    }`}>
                                    {group.icon}
                                </div>
                                <span className={`font-bold transition-colors ${activeGroup.id === group.id ? 'text-white' : 'text-slate-500'
                                    }`}>
                                    {group.title}
                                </span>
                                <ChevronRight className={`ml-auto w-5 h-5 transition-transform ${activeGroup.id === group.id ? 'translate-x-1 text-primary' : 'text-slate-700'
                                    }`} />
                            </button>
                        ))}
                    </div>

                    {/* Details Content */}
                    <div className="lg:col-span-8">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeGroup.id}
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                transition={{ duration: 0.3 }}
                                className="glass-card rounded-[40px] p-8 md:p-12 h-full flex flex-col"
                            >
                                <div className="flex items-center gap-4 mb-8">
                                    <div className="p-4 bg-primary/20 rounded-2xl text-primary">
                                        {activeGroup.icon}
                                    </div>
                                    <h3 className="text-3xl font-bold text-white">{activeGroup.title}</h3>
                                </div>

                                <div className="grid md:grid-cols-2 gap-6 flex-grow">
                                    {activeGroup.items.map((item, idx) => (
                                        <motion.div
                                            key={idx}
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: idx * 0.05 }}
                                            className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/5 transition-colors group"
                                        >
                                            <div className="h-2 w-2 rounded-full bg-primary/40 group-hover:bg-primary transition-colors" />
                                            <span className="text-slate-300 font-medium">{item}</span>
                                        </motion.div>
                                    ))}
                                </div>

                                <div className="mt-12 p-8 bg-slate-900/50 rounded-3xl border border-white/5 flex flex-col md:flex-row items-center justify-between gap-6">
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                                            <Target className="w-6 h-6" />
                                        </div>
                                        <div>
                                            <div className="text-white font-bold tracking-tight">Set Your First Goal</div>
                                            <div className="text-slate-500 text-sm">Start your journey to financial freedom today.</div>
                                        </div>
                                    </div>
                                    <button className="px-6 py-3 bg-primary text-white rounded-xl font-bold hover:glow-primary transition-all">
                                        Try This Feature
                                    </button>
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
