import React from 'react';
import { Wallet, Twitter, Github, Linkedin, Mail, Heart } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="pt-24 pb-12 bg-slate-950 border-t border-white/5">
            <div className="container mx-auto px-6">
                <div className="grid md:grid-cols-4 gap-12 mb-16">
                    <div className="col-span-2">
                        <div className="flex items-center gap-2 mb-6">
                            <div className="p-2 bg-primary rounded-lg">
                                <Wallet className="w-5 h-5 text-white" />
                            </div>
                            <span className="text-2xl font-bold tracking-tight text-white italic">
                                Paisa<span className="text-primary not-italic">wale</span>
                            </span>
                        </div>
                        <p className="text-slate-500 max-w-sm mb-8 leading-relaxed">
                            Your complete personal finance operating system. Track, plan, grow, and optimize your money with ease.
                        </p>
                        <div className="flex gap-4">
                            {[Twitter, Github, Linkedin, Mail].map((Icon, idx) => (
                                <a key={idx} href="#" className="p-3 glass rounded-xl text-slate-400 hover:text-primary hover:border-primary/50 transition-all">
                                    <Icon className="w-5 h-5" />
                                </a>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h4 className="text-white font-bold mb-6">Platform</h4>
                        <ul className="space-y-4">
                            {['Features', 'Marketplace', 'Wealth Management', 'Security'].map(item => (
                                <li key={item}><a href="#" className="text-slate-500 hover:text-white transition-colors">{item}</a></li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-bold mb-6">Company</h4>
                        <ul className="space-y-4">
                            {['About Us', 'Contact', 'Privacy Policy', 'Terms of Service'].map(item => (
                                <li key={item}><a href="#" className="text-slate-500 hover:text-white transition-colors">{item}</a></li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
                    <p className="text-slate-600 text-sm">
                        © 2026 Paisawale.com. All rights reserved.
                    </p>
                    <div className="flex items-center gap-2 text-slate-600 text-sm">
                        Made with <Heart className="w-4 h-4 text-red-500 fill-red-500" /> by Financial Lovers
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
