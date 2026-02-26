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
        <section id="features" className="py-32 bg-slate-50 relative overflow-hidden">
            {/* Background Decor - Soft radial gradients */}
            <div className="absolute top-1/2 left-1/2 -z-10 w-[1000px] h-[1000px] bg-emerald-50/50 blur-[150px] rounded-full -translate-x-1/2 -translate-y-1/2" />

            <div className="container mx-auto px-6">
                <div className="flex flex-col items-center text-center mb-20">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="p-4 bg-emerald-100/50 rounded-[20px] text-primary mb-8 shadow-sm border border-emerald-100"
                    >
                        <Sparkles className="w-8 h-8" />
                    </motion.div>
                    <h2 className="text-4xl md:text-7xl font-black mb-8 text-secondary">Core Features</h2>
                    <p className="text-slate-600 text-xl max-w-2xl font-medium">
                        A comprehensive suite of tools built to give you total control over every aspect of your financial world.
                    </p>
                </div>

                <div className="grid lg:grid-cols-12 gap-10">
                    {/* Navigation */}
                    <div className="lg:col-span-4 space-y-4">
                        {featureGroups.map((group) => (
                            <button
                                key={group.id}
                                onClick={() => setActiveGroup(group)}
                                className={`w-full flex items-center gap-5 p-6 rounded-[32px] transition-all text-left border-2 ${activeGroup.id === group.id
                                        ? 'bg-white border-primary shadow-2xl shadow-emerald-100 scale-[1.02]'
                                        : 'bg-transparent border-transparent hover:bg-white/50 hover:border-slate-200'
                                    }`}
                            >
                                <div className={`p-4 rounded-2xl transition-all shadow-sm ${activeGroup.id === group.id ? 'bg-primary text-white scale-110' : 'bg-white text-slate-400'
                                    }`}>
                                    {group.icon}
                                </div>
                                <span className={`font-black text-lg transition-colors ${activeGroup.id === group.id ? 'text-secondary' : 'text-slate-500'
                                    }`}>
                                    {group.title}
                                </span>
                                <ChevronRight className={`ml-auto w-6 h-6 transition-transform ${activeGroup.id === group.id ? 'translate-x-1 text-primary' : 'text-slate-300'
                                    }`} />
                            </button>
                        ))}
                    </div>

                    {/* Details Content */}
                    <div className="lg:col-span-8">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeGroup.id}
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -30 }}
                                transition={{ duration: 0.4, type: 'spring' }}
                                className="bg-white rounded-[50px] p-10 md:p-16 h-full flex flex-col border border-slate-100 shadow-2xl shadow-slate-200/50"
                            >
                                <div className="flex items-center gap-6 mb-12">
                                    <div className="p-5 bg-emerald-50 rounded-[24px] text-primary shadow-sm border border-emerald-100">
                                        {activeGroup.icon}
                                    </div>
                                    <h3 className="text-4xl font-black text-secondary">{activeGroup.title}</h3>
                                </div>

                                <div className="grid md:grid-cols-2 gap-8 flex-grow">
                                    {activeGroup.items.map((item, idx) => (
                                        <motion.div
                                            key={idx}
                                            initial={{ opacity: 0, x: 20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: idx * 0.05 }}
                                            className="flex items-center gap-5 p-6 rounded-[28px] bg-slate-50 border border-slate-100 hover:bg-emerald-50/30 hover:border-emerald-100 transition-all group"
                                        >
                                            <div className="h-3 w-3 rounded-full bg-emerald-200 group-hover:bg-primary transition-colors shadow-sm" />
                                            <span className="text-slate-700 font-bold text-lg">{item}</span>
                                        </motion.div>
                                    ))}
                                </div>

                                <div className="mt-16 p-10 bg-gradient-to-br from-secondary to-slate-800 rounded-[40px] flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl">
                                    <div className="flex items-center gap-6 text-left">
                                        <div className="w-16 h-16 rounded-[24px] bg-white/10 flex items-center justify-center text-primary backdrop-blur-md">
                                            <Target className="w-8 h-8" />
                                        </div>
                                        <div>
                                            <div className="text-white font-black text-2xl tracking-tight">Set Your First Goal</div>
                                            <div className="text-slate-300 font-medium italic text-lg opacity-80">Start your journey to financial freedom today.</div>
                                        </div>
                                    </div>
                                    <button className="px-10 py-5 bg-primary hover:bg-primary-dark text-white rounded-2xl font-black text-xl hover:shadow-2xl hover:shadow-primary/30 transition-all active:scale-95">
                                        Get Started Free
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
