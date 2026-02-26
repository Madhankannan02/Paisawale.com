import React from 'react';
import { Twitter, Github, Linkedin, Mail, ArrowUpRight } from 'lucide-react';
import logo from '../assets/logo.svg';

const Footer = () => {
    return (
        <footer id="footer" className="bg-white pt-32 pb-12 border-t border-slate-100">
            <div className="container-tight">
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-12 gap-12 lg:gap-8 mb-24">

                    {/* Brand Column */}
                    <div className="col-span-12 lg:col-span-4 space-y-8">
                        <div className="flex items-center group cursor-pointer">
                            <img src={logo} className="h-10 w-auto transition-transform duration-500 group-hover:scale-105" alt="Paisawale Logo" />
                        </div>
                        <p className="text-slate-500 font-medium max-w-sm leading-relaxed">
                            The world's most advanced personal finance operating system for individuals who demand clarity, privacy, and growth.
                        </p>
                        <div className="flex gap-4">
                            {[Twitter, Github, Linkedin, Mail].map((Icon, idx) => (
                                <a key={idx} href="#" className="p-3 bg-slate-50 text-slate-400 hover:text-primary hover:bg-emerald-50 rounded-xl transition-all border border-slate-100">
                                    <Icon size={20} />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Links Columns */}
                    <div className="col-span-1 lg:col-span-2 space-y-8">
                        <h4 className="text-sm font-bold uppercase tracking-widest text-secondary">Product</h4>
                        <ul className="space-y-4">
                            {['Features', 'Marketplace', 'Wealth Plan', 'Security', 'Pricing'].map(item => (
                                <li key={item}><a href="#" className="text-slate-500 hover:text-primary transition-colors font-medium text-sm flex items-center group">{item} <ArrowUpRight className="opacity-0 group-hover:opacity-100 transition-opacity" size={12} /></a></li>
                            ))}
                        </ul>
                    </div>

                    <div className="col-span-1 lg:col-span-2 space-y-8">
                        <h4 className="text-sm font-bold uppercase tracking-widest text-secondary">Resources</h4>
                        <ul className="space-y-4">
                            {['Documentation', 'Components', 'UI Kits', 'Templates', 'Release Notes'].map(item => (
                                <li key={item}><a href="#" className="text-slate-500 hover:text-primary transition-colors font-medium text-sm flex items-center group">{item} <ArrowUpRight className="opacity-0 group-hover:opacity-100 transition-opacity" size={12} /></a></li>
                            ))}
                        </ul>
                    </div>

                    <div className="col-span-1 lg:col-span-2 space-y-8">
                        <h4 className="text-sm font-bold uppercase tracking-widest text-secondary">Community</h4>
                        <ul className="space-y-4">
                            {['Dribbble', 'Behance', 'Twitter', 'Instagram', 'Discord'].map(item => (
                                <li key={item}><a href="#" className="text-slate-500 hover:text-primary transition-colors font-medium text-sm flex items-center group">{item} <ArrowUpRight className="opacity-0 group-hover:opacity-100 transition-opacity" size={12} /></a></li>
                            ))}
                        </ul>
                    </div>

                    <div className="col-span-1 lg:col-span-2 space-y-8">
                        <h4 className="text-sm font-bold uppercase tracking-widest text-secondary">Company</h4>
                        <ul className="space-y-4">
                            {['About Paisawale', 'Contact Us', 'Privacy Policy', 'Terms of Use', 'Affiliates'].map(item => (
                                <li key={item}><a href="#" className="text-slate-500 hover:text-primary transition-colors font-medium text-sm flex items-center group">{item} <ArrowUpRight className="opacity-0 group-hover:opacity-100 transition-opacity" size={12} /></a></li>
                            ))}
                        </ul>
                    </div>

                </div>

                <div className="pt-12 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-6">
                    <p className="text-slate-400 font-bold text-[10px] uppercase tracking-[0.2em]">
                        © 2026 PAISAWALE.COM — MADE WITH PRECISION BY FINANCIAL ARCHITECTS
                    </p>
                    <div className="flex gap-8">
                        <a href="#" className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400 hover:text-primary transition-colors">PRIVACY POLICY</a>
                        <a href="#" className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400 hover:text-primary transition-colors">TERMS OF USE</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
