import React from 'react';
import { Wallet, Twitter, Github, Linkedin, Mail, Heart } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="pt-32 pb-16 bg-white border-t border-slate-100">
            <div className="container mx-auto px-6">
                <div className="grid md:grid-cols-4 gap-16 mb-24">
                    <div className="col-span-2">
                        <div className="flex items-center gap-3 mb-8">
                            <div className="p-3 bg-primary rounded-2xl shadow-lg shadow-primary/20">
                                <Wallet className="w-6 h-6 text-white" />
                            </div>
                            <span className="text-3xl font-black tracking-tighter text-secondary">
                                Paisa<span className="text-primary italic">wale</span>
                            </span>
                        </div>
                        <p className="text-slate-600 font-medium max-w-sm mb-10 leading-relaxed text-lg">
                            Your complete personal finance operating system. Track, plan, grow, and optimize your money with ease and transparency.
                        </p>
                        <div className="flex gap-4">
                            {[Twitter, Github, Linkedin, Mail].map((Icon, idx) => (
                                <a key={idx} href="#" className="p-4 bg-slate-50 rounded-2xl text-slate-400 hover:text-primary hover:bg-emerald-50 hover:shadow-lg transition-all border border-slate-100">
                                    <Icon className="w-6 h-6" />
                                </a>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h4 className="text-secondary font-black text-xl mb-8">Platform</h4>
                        <ul className="space-y-5">
                            {['Features', 'Marketplace', 'Wealth Management', 'Security'].map(item => (
                                <li key={item}><a href="#" className="text-slate-600 font-bold hover:text-primary transition-colors text-lg">{item}</a></li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-secondary font-black text-xl mb-8">Company</h4>
                        <ul className="space-y-5">
                            {['About Us', 'Contact', 'Privacy Policy', 'Terms of Service'].map(item => (
                                <li key={item}><a href="#" className="text-slate-600 font-bold hover:text-primary transition-colors text-lg">{item}</a></li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className="pt-10 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-8">
                    <p className="text-slate-400 font-bold text-sm tracking-widest uppercase">
                        © 2026 Paisawale.com. All rights reserved.
                    </p>
                    <div className="flex items-center gap-2 text-slate-500 font-black text-sm uppercase tracking-widest">
                        Made with <Heart className="w-5 h-5 text-red-500 fill-red-500" /> by Financial Lovers
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
