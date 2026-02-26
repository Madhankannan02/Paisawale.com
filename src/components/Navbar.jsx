import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Wallet, Menu, X } from 'lucide-react';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Services', href: '#services' },
        { name: 'Features', href: '#features' },
        { name: 'Budgeting', href: '#budgeting' },
        { name: 'Wealth', href: '#wealth' },
    ];

    return (
        <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'glass py-3' : 'bg-transparent py-5'}`}>
            <div className="container mx-auto px-6 flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <motion.div
                        initial={{ rotate: -10 }}
                        animate={{ rotate: 0 }}
                        className="p-2 bg-primary rounded-lg shadow-primary/30 shadow-lg"
                    >
                        <Wallet className="w-6 h-6 text-white" />
                    </motion.div>
                    <span className="text-2xl font-bold tracking-tight text-white italic">
                        Paisa<span className="text-primary not-italic">wale</span>
                    </span>
                </div>

                {/* Desktop Links */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="text-sm font-medium text-slate-300 hover:text-primary transition-colors"
                        >
                            {link.name}
                        </a>
                    ))}
                    <button className="px-5 py-2.5 bg-primary hover:bg-primary/90 text-white rounded-full font-semibold transition-all glow-primary">
                        Get Started
                    </button>
                </div>

                {/* Mobile Toggle */}
                <button
                    className="md:hidden text-white"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <X /> : <Menu />}
                </button>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="md:hidden absolute top-full left-0 right-0 glass border-t border-white/10 p-6 flex flex-col gap-4"
                >
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="text-lg font-medium text-slate-300"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            {link.name}
                        </a>
                    ))}
                    <button className="w-full mt-4 px-5 py-3 bg-primary text-white rounded-xl font-semibold">
                        Get Started
                    </button>
                </motion.div>
            )}
        </nav>
    );
};

export default Navbar;
