"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const VideographySection = () => {
    return (
        <section className="py-24">
            <div className="max-w-7xl mx-auto px-4 md:px-8">
                <div className="flex flex-col-reverse lg:flex-row items-center gap-16">

                    {/* LEFT SIDE: Image */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className="flex-1 w-full"
                    >
                        <div className="relative group rounded-[2rem] overflow-hidden border border-white/10 shadow-[0_0_50px_rgba(255,255,255,0.05)]">
                            <Image
                                src="/assets/Images/videography.jpg"
                                alt="Videography"
                                width={800}
                                height={600}
                                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 font-bold flex items-center justify-center">
                                <span className="text-white text-sm tracking-[0.5em] uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                    Capture Every Fragment
                                </span>
                            </div>
                        </div>
                    </motion.div>

                    {/* RIGHT SIDE: Content */}
                    <div className="flex-1 space-y-8">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="space-y-4"
                        >
                            <h2 className="text-5xl md:text-7xl font-black text-white tracking-[0.1em] italic metallic-text-silver">
                                VIDEOGRAPHY
                            </h2>
                            <motion.div
                                initial={{ width: 0 }}
                                whileInView={{ width: 80 }}
                                viewport={{ once: true }}
                                transition={{ duration: 1, delay: 0.5 }}
                                className="h-1 bg-slate-500"
                            ></motion.div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: 0.3 }}
                            className="space-y-6"
                        >
                            <p className="text-xl text-gray-400 leading-relaxed">
                                Our videography services bring your stories to life through cinematic visuals, dynamic editing, and impactful narratives.
                            </p>
                            <p className="text-gray-500 leading-relaxed italic border-l-2 border-slate-700 pl-6">
                                From commercials to documentaries, our team delivers top-tier production with creativity and precision.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.6 }}
                        >
                            <button className="group flex items-center gap-4 text-white font-bold text-lg hover:text-white transition-colors">
                                <span className="px-8 py-3 bg-white/5 border border-white/20 rounded-full group-hover:border-white/50 group-hover:bg-white/10 transition-all">
                                    LEARN MORE
                                </span>
                                <div className="w-12 h-[2px] bg-white/20 group-hover:w-20 group-hover:bg-white transition-all duration-500"></div>
                            </button>
                        </motion.div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default VideographySection;
