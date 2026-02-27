import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Problem from './components/Problem';
import Features from './components/Features';
import Footer from './components/Footer';
import SIPCalculator from './pages/SIPCalculator';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';

const LandingPage = () => (
  <main>
    <Hero />
    <div className="container-tight">
      <div className="h-px w-full bg-slate-100" />
    </div>
    <Problem />
    <Features />

    <section className="py-32 bg-white">
      <div className="container-tight">
        <div className="flex items-center justify-between mb-16">
          <div>
            <span className="section-label">Latest Intelligence</span>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-secondary">Advanced <span className="gradient-text">Finance Insights.</span></h2>
          </div>
          <button className="flex items-center gap-2 text-primary font-bold hover:underline">Explore More Insights <ArrowRight size={18} /></button>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            { title: "The psychology of compound wealth generation in 2026.", date: "Feb 24, 2026", label: "Strategy" },
            { title: "Architecting a zero-tax freelance ecosystem: A guide.", date: "Feb 18, 2026", label: "Taxation" },
            { title: "How AI is redefining real-time net worth tracking.", date: "Feb 12, 2026", label: "Technology" },
          ].map((post, idx) => (
            <motion.div
              key={idx}
              className="group cursor-pointer"
              whileHover={{ y: -5 }}
            >
              <div className="aspect-video bg-slate-50 rounded-[28px] border border-slate-100 mb-6 overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-teal-500/10 group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <Sparkles className="w-12 h-12 text-slate-100 group-hover:text-primary/20 transition-colors" />
                </div>
              </div>
              <div className="flex items-center gap-3 mb-4">
                <span className="badge badge-indigo">{post.label}</span>
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{post.date}</span>
              </div>
              <h3 className="text-2xl font-display font-bold text-secondary group-hover:text-primary transition-colors leading-tight">
                {post.title}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    <section className="pb-32 container-tight">
      <div className="bg-slate-900 rounded-[60px] p-12 lg:p-24 text-center relative overflow-hidden group">
        <div className="absolute inset-0 border-[24px] border-white/5 rounded-[60px]" />
        <div className="absolute top-0 right-0 p-8">
          <Sparkles className="text-emerald-500 opacity-20 group-hover:scale-150 transition-transform duration-1000" size={120} />
        </div>

        <div className="relative z-10 max-w-3xl mx-auto space-y-10">
          <h2 className="text-4xl md:text-7xl font-display font-bold text-white leading-tight">
            Ready to master your <span className="text-emerald-400 italic">financial life?</span>
          </h2>
          <p className="text-slate-400 text-lg md:text-xl font-medium leading-relaxed">
            Join thousands of people who have already transformed their relationship with money using Paisawale's architectural approach.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <button className="btn-primary px-12 py-6 text-xl">
              Get Started for Free
            </button>
            <button className="px-12 py-6 rounded-full font-bold text-white border-2 border-white/10 hover:bg-white/5 transition-all">
              Explore Tools
            </button>
          </div>
        </div>
      </div>
    </section>
  </main>
);

function App() {
  return (
    <Router>
      <div className="bg-bg-base min-h-screen selection:bg-emerald-100 selection:text-emerald-900">
        <Navbar />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/calculators/sip" element={<SIPCalculator />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
