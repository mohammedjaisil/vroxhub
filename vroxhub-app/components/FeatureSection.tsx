"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const FeatureSection = () => {
    return (
        <section className="py-24 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 md:px-8">
                <div className="flex flex-col lg:flex-row items-center gap-16">

                    {/* LEFT SIDE */}
                    <div className="flex-1 space-y-12">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1 }}
                            className="relative group rounded-3xl overflow-hidden shadow-2xl shadow-white/5"
                        >
                            <Image
                                src="/assets/Images/films.jpg"
                                alt="Films"
                                width={800}
                                height={600}
                                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="space-y-6"
                        >
                            <div className="flex items-center gap-3">
                                <motion.div
                                    initial={{ width: 0 }}
                                    whileInView={{ width: 48 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.8, delay: 0.5 }}
                                    className="h-[2px] bg-slate-400"
                                ></motion.div>
                                <p className="metallic-text-silver font-bold uppercase tracking-[0.2em] text-sm">About Us</p>
                            </div>
                            <h3 className="text-3xl md:text-4xl font-black text-white leading-tight">
                                Contrary to popular belief, <br />
                                VroxHub is the standard.
                            </h3>
                            <p className="text-gray-400 text-lg leading-relaxed max-w-xl">
                                We believe film and moving image has the power to create significant change.
                                We help brands realise that power and agencies to bring their creative vision to fruition.
                            </p>
                            <button className="px-8 py-3 border-2 border-white hover:bg-white hover:text-black text-white rounded-full font-bold transition-all uppercase tracking-wider text-sm">
                                Know More
                            </button>
                        </motion.div>
                    </div>

                    {/* RIGHT SIDE */}
                    <div className="flex-1 flex flex-col items-center lg:items-end text-center lg:text-right space-y-12">
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1 }}
                            className="space-y-4"
                        >
                            <h1 className="text-6xl md:text-8xl font-black text-white leading-none tracking-tighter">
                                <span className="metallic-text-silver">TELLING</span> THE <br />
                                <span className="metallic-text-silver">BIGGER STORY</span>
                            </h1>
                            <div className="inline-block px-4 py-2 bg-white/5 border border-slate-700 rounded-lg">
                                <span className="text-slate-400 font-bold text-sm tracking-widest">🏆 BEST DIRECTOR 2024</span>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: 0.3 }}
                            className="relative group rounded-3xl overflow-hidden shadow-2xl shadow-white/5 w-full"
                        >
                            <Image
                                src="/assets/Images/photography.jpg"
                                alt="Photography"
                                width={800}
                                height={600}
                                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                        </motion.div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default FeatureSection;
