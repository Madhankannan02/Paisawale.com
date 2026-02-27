import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, Search, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.svg';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Products', href: '#features' },
        { name: 'Pricing', href: '#' },
        { name: 'Components', href: '#problem' },
        { name: 'Docs', href: '#about' },
    ];

    return (
        <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'glass py-3 shadow-sm border-b border-slate-200' : 'bg-transparent py-6'
            }`}>
            <div className="container-tight flex items-center justify-between">
                {/* Logo */}
                <Link to="/" className="flex items-center group cursor-pointer">
                    <img src={logo} className="h-10 md:h-12 w-auto transition-transform duration-500 group-hover:scale-105" alt="Paisawale Logo" />
                </Link>

                {/* Desktop Links (Centered) */}
                <div className="hidden lg:flex items-center gap-10">
                    {navLinks.map((link) => (
                        <a key={link.name} href={link.href} className="text-sm font-semibold text-slate-600 hover:text-primary transition-colors">
                            {link.name}
                        </a>
                    ))}
                </div>

                {/* Action Buttons */}
                <div className="hidden lg:flex items-center gap-6">
                    <button className="text-slate-500 hover:text-primary transition-colors">
                        <Search size={18} />
                    </button>
                    <button className="text-sm font-bold text-slate-600 hover:text-primary transition-colors flex items-center gap-1">
                        <Globe size={16} /> <span>EN</span>
                    </button>
                    <div className="h-4 w-px bg-slate-200" />
                    <button className="text-sm font-bold text-slate-600 hover:text-primary transition-colors">
                        Login
                    </button>
                    <button className="px-5 py-2.5 bg-primary hover:bg-primary-dark text-white rounded-xl text-sm font-bold transition-all shadow-lg shadow-emerald-200 active:scale-95">
                        Get Started
                    </button>
                </div>

                {/* Mobile Toggle */}
                <button className="lg:hidden text-secondary" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                    {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="lg:hidden absolute top-full left-0 right-0 bg-white p-6 flex flex-col gap-5 shadow-2xl border-t border-slate-100"
                >
                    {navLinks.map((link) => (
                        <a key={link.name} href={link.href} className="text-lg font-bold text-slate-700 hover:text-primary" onClick={() => setIsMobileMenuOpen(false)}>
                            {link.name}
                        </a>
                    ))}
                    <div className="h-px bg-slate-100 my-2" />
                    <button className="w-full py-4 bg-primary text-white rounded-2xl font-bold">
                        Get Started Free
                    </button>
                </motion.div>
            )}
        </nav>
    );
};

export default Navbar;
