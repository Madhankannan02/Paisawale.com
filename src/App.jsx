import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Problem from './components/Problem';
import About from './components/About';
import Features from './components/Features';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-white min-h-screen text-secondary selection:bg-primary/20 selection:text-primary">
      <Navbar />
      <main>
        <Hero />
        <div className="w-full h-px bg-slate-100" />
        <Problem />
        <About />
        <Features />

        {/* Final CTA Section */}
        <section className="py-32 relative overflow-hidden bg-white">
          {/* Background Mesh */}
          <div className="absolute top-1/2 left-1/2 -z-10 w-[800px] h-[800px] bg-indigo-50/50 blur-[120px] rounded-full -translate-x-1/2 -translate-y-1/2" />

          <div className="container mx-auto px-6">
            <div className="bg-slate-50 rounded-[80px] p-16 md:p-24 text-center border-2 border-white shadow-2xl relative overflow-hidden">
              {/* Decorative top bar */}
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-transparent via-primary to-transparent" />

              <h2 className="text-4xl md:text-7xl font-black mb-10 text-secondary leading-tight">Ready to master your <span className="gradient-text">financial life?</span></h2>
              <p className="text-xl md:text-2xl text-slate-600 mb-16 max-w-3xl mx-auto font-medium">
                Join thousands of people who have already transformed their relationship with money using Paisawale.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
                <button className="px-12 py-6 bg-primary hover:bg-primary-dark text-white rounded-[24px] font-black text-2xl transition-all shadow-2xl shadow-primary/30 hover:shadow-primary/50 active:scale-95 border-b-[6px] border-emerald-800">
                  Start Free Now
                </button>
                <button className="px-12 py-6 bg-white hover:bg-slate-100 text-secondary rounded-[24px] font-black text-2xl transition-all border-2 border-slate-200 shadow-sm hover:shadow-lg">
                  Explore Tools
                </button>
              </div>

              <div className="mt-20 flex flex-wrap items-center justify-center gap-12 grayscale opacity-40">
                <div className="flex flex-col items-center">
                  <span className="font-black text-2xl tracking-tighter">AES-256</span>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500">Encryption</span>
                </div>
                <div className="w-px h-10 bg-slate-300 hidden md:block" />
                <div className="flex flex-col items-center">
                  <span className="font-black text-2xl tracking-tighter">PRIVACY</span>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500">First Design</span>
                </div>
                <div className="w-px h-10 bg-slate-300 hidden md:block" />
                <div className="flex flex-col items-center">
                  <span className="font-black text-2xl tracking-tighter">100% SECURE</span>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500">Cloud Data</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
