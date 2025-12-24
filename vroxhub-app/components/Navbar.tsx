"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();

    const navLinks = [
        { name: 'Home', href: '/' },
        { name: 'Services', href: '/service' },
    ];

    const isActive = (href: string) => pathname === href;

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="fixed top-0 left-0 w-full z-50 bg-black/20 backdrop-blur-md border-b border-white/5"
        >
            <div className="max-w-7xl mx-auto px-4 md:px-0">
                <div className="flex justify-between items-center h-20">
                    {/* Logo */}
                    <div className="flex-shrink-0 flex items-center gap-2">
                        <Link href="/" className="flex items-center gap-2">
                            <Image
                                src="/vxlogo.png"
                                alt="Vroxhub Logo"
                                width={40}
                                height={40}
                                className="w-10 h-10 object-contain"
                            />
                            <span className="text-xl font-bold font-luxury tracking-[0.2em] metallic-text-silver">
                                VROXHUB
                            </span>
                        </Link>
                    </div>

                    {/* Desktop Nav */}
                    <div className="hidden md:flex items-center space-x-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className={`text-[10px] uppercase tracking-[0.3em] font-luxury transition-colors hover:text-white ${isActive(link.href) ? 'text-white font-bold' : 'text-gray-400'
                                    }`}
                            >
                                {link.name}
                            </Link>
                        ))}
                        <a
                            href="https://wa.me/971505051495"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-8 py-3 bg-white/10 backdrop-blur-md border border-white/20 text-white rounded-full text-xs font-luxury tracking-widest hover:bg-white hover:text-black transition-all shadow-lg shadow-black/50"
                        >
                            Get in Touch
                        </a>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-white hover:text-slate-300 transition-colors"
                        >
                            {isOpen ? <X size={28} /> : <Menu size={28} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Nav */}
            {isOpen && (
                <div className="md:hidden bg-black/95 border-t border-white/10 animate-in slide-in-from-top duration-300">
                    <div className="px-4 pt-2 pb-6 space-y-1">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                onClick={() => setIsOpen(false)}
                                className={`block px-3 py-4 text-base font-medium border-b border-white/5 ${isActive(link.href) ? 'text-white font-semibold' : 'text-gray-300'
                                    }`}
                            >
                                {link.name}
                            </Link>
                        ))}
                        <div className="pt-4">
                            <a
                                href="https://wa.me/971505051495"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block w-full text-center px-6 py-3 bg-slate-900 text-white rounded-xl text-lg font-semibold shadow-lg"
                            >
                                Get in Touch
                            </a>
                        </div>
                    </div>
                </div>
            )}
        </motion.nav>
    );
};

export default Navbar;
