import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, TrendingUp, Info, HelpCircle, Wallet, Download, Check, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

const SIPCalculator = () => {
    const [mode, setMode] = useState('SIP'); // 'SIP' or 'SWP'

    // SIP States
    const [monthlyInvestment, setMonthlyInvestment] = useState(5000);
    const [expectedReturn, setExpectedReturn] = useState(12);
    const [timePeriod, setTimePeriod] = useState(10);

    // SWP States
    const [totalInvestment, setTotalInvestment] = useState(500000);
    const [withdrawalPerMonth, setWithdrawalPerMonth] = useState(10000);
    const [swpReturn, setSwpReturn] = useState(12);
    const [swpYears, setSwpYears] = useState(5);

    const [calculation, setCalculation] = useState({
        totalInvested: 0,
        estimatedReturns: 0,
        totalValue: 0
    });

    useEffect(() => {
        if (mode === 'SIP') {
            const P = monthlyInvestment;
            const r = expectedReturn / 100 / 12;
            const n = timePeriod * 12;

            // Formula: M = P * [((1 + r)^n - 1) / r] * (1 + r)
            const totalValue = P * ((Math.pow(1 + r, n) - 1) / r) * (1 + r);
            const totalInvested = P * n;
            const estimatedReturns = totalValue - totalInvested;

            setCalculation({
                totalInvested: Math.round(totalInvested),
                estimatedReturns: Math.round(estimatedReturns),
                totalValue: Math.round(totalValue)
            });
        } else {
            const P = totalInvestment;
            const W = withdrawalPerMonth;
            const r = swpReturn / 100 / 12;
            const n = swpYears * 12;

            // Simple SWP Formula: B = P(1+r)^n - W * [((1+r)^n - 1) / r]
            const finalValue = P * Math.pow(1 + r, n) - W * ((Math.pow(1 + r, n) - 1) / r);
            const totalWithdrawal = W * n;

            setCalculation({
                totalInvested: Math.round(P),
                estimatedReturns: Math.round(totalWithdrawal),
                totalValue: Math.round(finalValue)
            });
        }
    }, [mode, monthlyInvestment, expectedReturn, timePeriod, totalInvestment, withdrawalPerMonth, swpReturn, swpYears]);

    const formatCurrency = (val) => {
        const absVal = Math.abs(val);
        const formatted = new Intl.NumberFormat('en-IN', {
            style: 'currency',
            currency: 'INR',
            maximumFractionDigits: 0
        }).format(absVal);
        return val < 0 ? `-${formatted}` : formatted;
    };

    return (
        <div className="pt-32 pb-24 bg-surface min-h-screen">
            <div className="container-tight">
                {/* Back Button */}
                <Link to="/" className="inline-flex items-center gap-2 text-slate-500 hover:text-primary font-bold mb-12 transition-colors group">
                    <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
                    Back to Platform
                </Link>

                {/* Mode Switcher */}
                <div className="flex justify-center mb-16">
                    <div className="bg-white p-2 rounded-3xl border border-slate-100 shadow-xl flex gap-2">
                        {['SIP', 'SWP'].map((m) => (
                            <button
                                key={m}
                                onClick={() => setMode(m)}
                                className={`px-12 py-4 rounded-2xl font-bold transition-all ${mode === m ? 'bg-primary text-white shadow-lg' : 'text-slate-400 hover:bg-slate-50'}`}
                            >
                                {m} Calculator
                            </button>
                        ))}
                    </div>
                </div>

                <div className="grid lg:grid-cols-12 gap-12">
                    {/* Input Controls */}
                    <div className="lg:col-span-12 xl:col-span-7">
                        <motion.div
                            layout
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="bg-white rounded-[40px] border border-slate-100 shadow-2xl p-8 md:p-12"
                        >
                            <div className="flex items-center gap-4 mb-10">
                                <div className="p-3 bg-emerald-50 text-primary rounded-2xl">
                                    {mode === 'SIP' ? <TrendingUp size={24} /> : <Download size={24} />}
                                </div>
                                <h1 className="text-3xl md:text-4xl font-display font-bold text-secondary">
                                    {mode} <span className="gradient-text italic">Calculator</span>
                                </h1>
                            </div>

                            <div className="space-y-12">
                                <AnimatePresence mode="wait">
                                    {mode === 'SIP' ? (
                                        <motion.div
                                            key="SIP-inputs"
                                            initial={{ opacity: 0, x: -10 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            exit={{ opacity: 0, x: 10 }}
                                            className="space-y-12"
                                        >
                                            {/* Monthly Investment */}
                                            <div className="space-y-6">
                                                <div className="flex items-center justify-between gap-4">
                                                    <label className="text-secondary font-bold text-lg">Monthly Investment</label>
                                                    <div className="relative flex items-center">
                                                        <span className="absolute left-4 text-primary font-bold">₹</span>
                                                        <input
                                                            type="number"
                                                            value={monthlyInvestment}
                                                            onChange={(e) => setMonthlyInvestment(Math.min(10000000, Math.max(0, parseInt(e.target.value) || 0)))}
                                                            className="pl-8 pr-4 py-2 bg-emerald-50 text-secondary rounded-xl font-mono font-bold text-lg border border-emerald-100 focus:outline-none focus:ring-2 focus:ring-primary/20 w-32 md:w-48 text-right"
                                                        />
                                                    </div>
                                                </div>
                                                <input
                                                    type="range"
                                                    min="500"
                                                    max="100000"
                                                    step="500"
                                                    value={monthlyInvestment > 100000 ? 100000 : monthlyInvestment}
                                                    onChange={(e) => setMonthlyInvestment(parseInt(e.target.value))}
                                                    className="w-full h-2 bg-slate-100 rounded-lg appearance-none cursor-pointer accent-primary"
                                                />
                                            </div>

                                            {/* Expected Return */}
                                            <div className="space-y-6">
                                                <div className="flex items-center justify-between gap-4">
                                                    <label className="text-secondary font-bold text-lg">Expected Return Rate (p.a)</label>
                                                    <div className="relative flex items-center">
                                                        <input
                                                            type="number"
                                                            step="0.1"
                                                            value={expectedReturn}
                                                            onChange={(e) => setExpectedReturn(Math.min(50, Math.max(0, parseFloat(e.target.value) || 0)))}
                                                            className="pl-4 pr-8 py-2 bg-emerald-50 text-secondary rounded-xl font-mono font-bold text-lg border border-emerald-100 focus:outline-none focus:ring-2 focus:ring-primary/20 w-24 md:w-32 text-right"
                                                        />
                                                        <span className="absolute right-4 text-primary font-bold">%</span>
                                                    </div>
                                                </div>
                                                <input
                                                    type="range"
                                                    min="1"
                                                    max="30"
                                                    step="0.1"
                                                    value={expectedReturn > 30 ? 30 : expectedReturn}
                                                    onChange={(e) => setExpectedReturn(parseFloat(e.target.value))}
                                                    className="w-full h-2 bg-slate-100 rounded-lg appearance-none cursor-pointer accent-primary"
                                                />
                                            </div>

                                            {/* Time Period */}
                                            <div className="space-y-6">
                                                <div className="flex items-center justify-between gap-4">
                                                    <label className="text-secondary font-bold text-lg">Time Period (Years)</label>
                                                    <div className="relative flex items-center">
                                                        <input
                                                            type="number"
                                                            value={timePeriod}
                                                            onChange={(e) => setTimePeriod(Math.min(40, Math.max(0, parseInt(e.target.value) || 0)))}
                                                            className="pl-4 pr-12 py-2 bg-emerald-50 text-secondary rounded-xl font-mono font-bold text-lg border border-emerald-100 focus:outline-none focus:ring-2 focus:ring-primary/20 w-24 md:w-32 text-right"
                                                        />
                                                        <span className="absolute right-4 text-primary font-bold text-sm">Yr</span>
                                                    </div>
                                                </div>
                                                <input
                                                    type="range"
                                                    min="1"
                                                    max="40"
                                                    step="1"
                                                    value={timePeriod}
                                                    onChange={(e) => setTimePeriod(parseInt(e.target.value))}
                                                    className="w-full h-2 bg-slate-100 rounded-lg appearance-none cursor-pointer accent-primary"
                                                />
                                            </div>
                                        </motion.div>
                                    ) : (
                                        <motion.div
                                            key="SWP-inputs"
                                            initial={{ opacity: 0, x: 10 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            exit={{ opacity: 0, x: -10 }}
                                            className="space-y-12"
                                        >
                                            {/* Total Investment */}
                                            <div className="space-y-6">
                                                <div className="flex items-center justify-between gap-4">
                                                    <label className="text-secondary font-bold text-lg">Total Investment</label>
                                                    <div className="relative flex items-center">
                                                        <span className="absolute left-4 text-primary font-bold">₹</span>
                                                        <input
                                                            type="number"
                                                            value={totalInvestment}
                                                            onChange={(e) => setTotalInvestment(Math.min(100000000, Math.max(0, parseInt(e.target.value) || 0)))}
                                                            className="pl-8 pr-4 py-2 bg-emerald-50 text-secondary rounded-xl font-mono font-bold text-lg border border-emerald-100 focus:outline-none focus:ring-2 focus:ring-primary/20 w-32 md:w-48 text-right"
                                                        />
                                                    </div>
                                                </div>
                                                <input
                                                    type="range"
                                                    min="5000"
                                                    max="1000000"
                                                    step="5000"
                                                    value={totalInvestment > 1000000 ? 1000000 : totalInvestment}
                                                    onChange={(e) => setTotalInvestment(parseInt(e.target.value))}
                                                    className="w-full h-2 bg-slate-100 rounded-lg appearance-none cursor-pointer accent-primary"
                                                />
                                            </div>

                                            {/* Withdrawal Per Month */}
                                            <div className="space-y-6">
                                                <div className="flex items-center justify-between gap-4">
                                                    <label className="text-secondary font-bold text-lg">Withdrawal / month</label>
                                                    <div className="relative flex items-center">
                                                        <span className="absolute left-4 text-primary font-bold">₹</span>
                                                        <input
                                                            type="number"
                                                            value={withdrawalPerMonth}
                                                            onChange={(e) => setWithdrawalPerMonth(Math.min(1000000, Math.max(0, parseInt(e.target.value) || 0)))}
                                                            className="pl-8 pr-4 py-2 bg-emerald-50 text-secondary rounded-xl font-mono font-bold text-lg border border-emerald-100 focus:outline-none focus:ring-2 focus:ring-primary/20 w-32 md:w-48 text-right"
                                                        />
                                                    </div>
                                                </div>
                                                <input
                                                    type="range"
                                                    min="500"
                                                    max="100000"
                                                    step="500"
                                                    value={withdrawalPerMonth > 100000 ? 100000 : withdrawalPerMonth}
                                                    onChange={(e) => setWithdrawalPerMonth(parseInt(e.target.value))}
                                                    className="w-full h-2 bg-slate-100 rounded-lg appearance-none cursor-pointer accent-primary"
                                                />
                                            </div>

                                            {/* Expected Return Rate */}
                                            <div className="space-y-6">
                                                <div className="flex items-center justify-between gap-4">
                                                    <label className="text-secondary font-bold text-lg">Expected Return Rate (p.a)</label>
                                                    <div className="relative flex items-center">
                                                        <input
                                                            type="number"
                                                            value={swpReturn}
                                                            onChange={(e) => setSwpReturn(Math.min(50, Math.max(0, parseFloat(e.target.value) || 0)))}
                                                            className="pl-4 pr-8 py-2 bg-emerald-50 text-secondary rounded-xl font-mono font-bold text-lg border border-emerald-100 focus:outline-none focus:ring-2 focus:ring-primary/20 w-24 md:w-32 text-right"
                                                        />
                                                        <span className="absolute right-4 text-primary font-bold">%</span>
                                                    </div>
                                                </div>
                                                <input
                                                    type="range"
                                                    min="0.1"
                                                    max="30"
                                                    step="0.1"
                                                    value={swpReturn > 30 ? 30 : swpReturn}
                                                    onChange={(e) => setSwpReturn(parseFloat(e.target.value))}
                                                    className="w-full h-2 bg-slate-100 rounded-lg appearance-none cursor-pointer accent-primary"
                                                />
                                            </div>

                                            {/* Time Period */}
                                            <div className="space-y-6">
                                                <div className="flex items-center justify-between gap-4">
                                                    <label className="text-secondary font-bold text-lg">Time Period (Years)</label>
                                                    <div className="relative flex items-center">
                                                        <input
                                                            type="number"
                                                            value={swpYears}
                                                            onChange={(e) => setSwpYears(Math.min(40, Math.max(0, parseInt(e.target.value) || 0)))}
                                                            className="pl-4 pr-12 py-2 bg-emerald-50 text-secondary rounded-xl font-mono font-bold text-lg border border-emerald-100 focus:outline-none focus:ring-2 focus:ring-primary/20 w-24 md:w-32 text-right"
                                                        />
                                                        <span className="absolute right-4 text-primary font-bold text-sm">Yr</span>
                                                    </div>
                                                </div>
                                                <input
                                                    type="range"
                                                    min="1"
                                                    max="40"
                                                    step="1"
                                                    value={swpYears}
                                                    onChange={(e) => setSwpYears(parseInt(e.target.value))}
                                                    className="w-full h-2 bg-slate-100 rounded-lg appearance-none cursor-pointer accent-primary"
                                                />
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>

                            <div className="mt-12 pt-8 border-t border-slate-50">
                                <p className="text-slate-400 text-sm flex items-start gap-3">
                                    <Info size={16} className="mt-1 flex-shrink-0" />
                                    <span>
                                        {mode === 'SIP'
                                            ? "Systematic Investment Plan (SIP) is a disciplined way of investing in mutual funds."
                                            : "Systematic Withdrawal Plan (SWP) allows you to withdraw a fixed amount at regular intervals from your investment."}
                                        &nbsp;Calculations are based on estimated interest rates.
                                    </span>
                                </p>
                            </div>
                        </motion.div>
                    </div>

                    {/* Result Display */}
                    <div className="lg:col-span-12 xl:col-span-5">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="bg-secondary rounded-[40px] p-8 md:p-12 text-white h-full flex flex-col justify-between border border-slate-800 relative overflow-hidden"
                        >
                            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 blur-[80px] rounded-full translate-x-1/2 -translate-y-1/2" />

                            <div className="relative z-10 space-y-10">
                                <div>
                                    <h2 className={`text-sm font-bold uppercase tracking-widest mb-2 ${calculation.totalValue < 0 ? 'text-red-400' : 'text-emerald-400'}`}>
                                        {mode === 'SIP' ? "Estimated Returns" : "Final Value"}
                                    </h2>
                                    <div className={`text-5xl md:text-6xl font-display font-bold truncate ${calculation.totalValue < 0 ? 'text-red-400' : ''}`}>
                                        {formatCurrency(calculation.totalValue)}
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 gap-6">
                                    <div className="p-6 rounded-3xl bg-white/5 border border-white/10">
                                        <div className="text-xs text-slate-400 uppercase font-bold tracking-widest mb-1">
                                            {mode === 'SIP' ? "Total Invested" : "Total Investment"}
                                        </div>
                                        <div className="text-2xl font-bold">{formatCurrency(calculation.totalInvested)}</div>
                                    </div>
                                    <div className="p-6 rounded-3xl bg-white/5 border border-white/10">
                                        <div className="text-xs text-slate-400 uppercase font-bold tracking-widest mb-1">
                                            {mode === 'SIP' ? "Wealth Gain" : "Total Withdrawal"}
                                        </div>
                                        <div className="text-2xl font-bold text-emerald-400">{formatCurrency(calculation.estimatedReturns)}</div>
                                    </div>
                                </div>

                                <div className="space-y-4 pt-10">
                                    <div className="flex items-center gap-2 mb-2">
                                        <Wallet className="w-5 h-5 text-primary" />
                                        <span className="text-sm font-bold">Projection Health</span>
                                    </div>
                                    <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden">
                                        <motion.div
                                            initial={{ width: 0 }}
                                            animate={{ width: mode === 'SIP' ? '100%' : `${Math.min(100, (calculation.totalValue / calculation.totalInvested) * 100)}%` }}
                                            className="h-full bg-primary"
                                        />
                                    </div>
                                    <p className="text-[10px] text-slate-400 uppercase font-bold tracking-widest leading-relaxed">
                                        {mode === 'SIP'
                                            ? "Your path to wealth building is on track."
                                            : calculation.totalValue > 0
                                                ? "Your capital will sustain this withdrawal rate."
                                                : "Warning: Your withdrawal rate may deplete your capital early."}
                                    </p>
                                </div>
                            </div>

                            <div className="relative z-10 pt-10">
                                <button className="btn-primary w-full py-5 text-lg">
                                    Generate Full Report
                                </button>
                            </div>
                        </motion.div>
                    </div>
                </div>

                {/* Advanced Tool Intelligence Section (Blog/Educational) */}
                <div className="mt-32 border-t border-slate-100 pt-32">
                    <div className="max-w-4xl mx-auto">
                        <div className="text-center mb-20">
                            <span className="section-label">Knowledge Base</span>
                            <h2 className="text-4xl md:text-5xl font-display font-bold text-secondary mb-6 leading-tight">
                                Mastering the Financial Lifecycle: <span className="gradient-text italic">Accumulation & Freedom</span>
                            </h2>
                            <p className="text-slate-500 text-lg font-medium leading-relaxed max-w-2xl mx-auto italic">
                                Understanding how your money moves is the first step toward true financial autonomy. Here is everything you need to know about the tools you're using.
                            </p>
                        </div>

                        <div className="space-y-24">
                            {/* Chapter 1: Accumulation */}
                            <section>
                                <div className="flex items-center gap-4 mb-8">
                                    <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-primary flex items-center justify-center">
                                        <TrendingUp size={24} />
                                    </div>
                                    <h3 className="text-2xl font-display font-bold text-secondary">The SIP Philosophy: Building the Wealth Engine</h3>
                                </div>
                                <div className="prose prose-slate max-w-none text-slate-600 space-y-6 leading-relaxed">
                                    <p className="font-medium text-lg text-slate-900">
                                        A Systematic Investment Plan (SIP) isn't just a financial product; it's a structural approach to wealth generation that exploits the two most powerful forces in finance: <span className="text-primary font-bold italic">Compounding</span> and <span className="text-primary font-bold italic">Time.</span>
                                    </p>
                                    <p>
                                        Unlike lump-sum investments which require market timing (a notoriously difficult task even for professionals), SIPs use <strong>Rupee Cost Averaging</strong>. When markets are high, your fixed amount buys fewer units. When markets dip, your amount buys more. Over a long horizon, this lowers your average cost per unit and significantly boosts overall returns.
                                    </p>

                                    <div className="grid md:grid-cols-2 gap-8 py-6">
                                        <div className="bg-slate-50 p-8 rounded-[32px] border border-slate-100">
                                            <h4 className="text-secondary font-bold mb-3 flex items-center gap-2">
                                                <div className="w-2 h-2 rounded-full bg-primary" />
                                                The 15-15-15 Rule
                                            </h4>
                                            <p className="text-sm">Invest ₹15,000 monthly for 15 years at an expected 15% return. This strategy can historically turn a modest monthly habit into a corpus exceeding ₹1 Crore.</p>
                                        </div>
                                        <div className="bg-slate-50 p-8 rounded-[32px] border border-slate-100">
                                            <h4 className="text-secondary font-bold mb-3 flex items-center gap-2">
                                                <div className="w-2 h-2 rounded-full bg-emerald-400" />
                                                Consistency Advantage
                                            </h4>
                                            <p className="text-sm">The primary reason SIPs succeed is behavioral. By automating the investment, you remove the emotional friction of "should I buy today?" from the equation.</p>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            {/* Chapter 2: The Harvest */}
                            <section>
                                <div className="flex items-center gap-4 mb-8">
                                    <div className="w-12 h-12 rounded-2xl bg-secondary text-emerald-400 flex items-center justify-center shadow-lg">
                                        <Sparkles size={24} />
                                    </div>
                                    <h3 className="text-2xl font-display font-bold text-secondary">The SWP Harvest: Designing Your Cash Flow</h3>
                                </div>
                                <div className="prose prose-slate max-w-none text-slate-600 space-y-6 leading-relaxed">
                                    <p className="font-medium text-lg text-slate-900">
                                        While the SIP builds the engine, the Systematic Withdrawal Plan (SWP) is the fruit of your labor. It is the gold standard for retirees and those seeking financial independence (FIRE).
                                    </p>
                                    <p>
                                        An SWP allows you to withdraw a fixed amount while the remaining capital continues to grow in the market. This is historically more tax-efficient than relying on mutual fund dividends or bank interest, as withdrawals are treated as capital gains, where only the profit portion attracted to the specific units sold is taxable.
                                    </p>
                                    <div className="bg-secondary text-white p-10 rounded-[40px] relative overflow-hidden group">
                                        <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:scale-125 transition-transform duration-700">
                                            <Info size={100} />
                                        </div>
                                        <h4 className="text-emerald-400 font-bold text-xl mb-4 italic">The Sustainability Threshold</h4>
                                        <p className="text-slate-300">
                                            The ultimate goal of an SWP is to find your "Sustainable Withdrawal Rate." If your withdrawal percentage is lower than your portfolio's growth rate, your corpus will continue to grow even as you take home a monthly paycheck. This is how <strong>generational wealth</strong> is maintained.
                                        </p>
                                    </div>
                                </div>
                            </section>

                            {/* Chapter 3: Strategy & Common Pitfalls */}
                            <section className="bg-emerald-50/50 p-12 rounded-[48px] border border-emerald-100/50">
                                <h3 className="text-2xl font-display font-bold text-secondary mb-10 text-center">Strategizing Your Success</h3>
                                <div className="grid md:grid-cols-2 gap-12">
                                    <div>
                                        <h4 className="text-primary font-bold mb-4 flex items-center gap-2 uppercase tracking-widest text-xs">Essential Strategies</h4>
                                        <ul className="space-y-4">
                                            {[
                                                "Step-up SIP: Increase your investment by 10% every year to beat inflation.",
                                                "Rebalance Semi-Annually: Adjust between growth and defensive assets.",
                                                "Emergency Buffer: Keep 6 months of expenses separate from your SIP fund."
                                            ].map((item, i) => (
                                                <li key={i} className="flex items-start gap-4 text-sm font-medium text-slate-700">
                                                    <div className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-emerald-500 text-white flex items-center justify-center">
                                                        <Check size={12} strokeWidth={3} />
                                                    </div>
                                                    {item}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div>
                                        <h4 className="text-red-500 font-bold mb-4 flex items-center gap-2 uppercase tracking-widest text-xs">Common Bitfalls</h4>
                                        <ul className="space-y-4">
                                            {[
                                                "Pausing during market dips: This is the time when SIPs perform best.",
                                                "Ignoring Inflation: Your ₹50k today won't buy as much in 2040.",
                                                "Aggressive SWP: Don't withdraw too much too early, or your capital will deplete."
                                            ].map((item, i) => (
                                                <li key={i} className="flex items-start gap-4 text-sm font-medium text-slate-700">
                                                    <div className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-red-100 text-red-500 flex items-center justify-center font-black">
                                                        !
                                                    </div>
                                                    {item}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </section>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default SIPCalculator;
