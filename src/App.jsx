import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Problem from './components/Problem';
import About from './components/About';
import Features from './components/Features';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-dark min-h-screen text-white selection:bg-primary/30 selection:text-primary">
      <Navbar />
      <main>
        <Hero />
        <Problem />
        <About />
        <Features />

        {/* Final CTA Section */}
        <section className="py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-primary/5 -z-10" />
          <div className="container mx-auto px-6">
            <div className="glass-card rounded-[50px] p-12 md:p-20 text-center border-primary/20 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent" />

              <h2 className="text-4xl md:text-6xl font-black mb-8">Ready to master your <span className="gradient-text">financial life?</span></h2>
              <p className="text-xl text-slate-400 mb-12 max-w-2xl mx-auto">
                Join thousands of people who have already transformed their relationship with money using Paisawale.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                <button className="px-10 py-5 bg-primary hover:bg-primary/90 text-white rounded-2xl font-black text-xl transition-all shadow-2xl shadow-primary/20 glow-primary border-b-4 border-primary-dark">
                  Start Free Now
                </button>
                <button className="px-10 py-5 glass hover:bg-white/5 text-white rounded-2xl font-bold text-xl transition-all border border-white/10">
                  Talk to an Advisor
                </button>
              </div>

              <div className="mt-12 flex items-center justify-center gap-8 grayscale opacity-50">
                <span className="font-bold tracking-tighter">SECURE</span>
                <span className="font-bold tracking-tighter">PRIVATE</span>
                <span className="font-bold tracking-tighter">TRUSTED</span>
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
