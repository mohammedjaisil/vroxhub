"use client";

import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import CameraObject from './CameraObject';

const Hero = () => {
    const { scrollY } = useScroll();
    const y1 = useTransform(scrollY, [0, 500], [0, 200]);
    const rotate = useTransform(scrollY, [0, 500], [0, 45]);

    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 px-4 md:px-0">
            {/* Dynamic Space Background - Nebulae only, stars are global */}
            <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
                {/* Metallic Nebulae */}
                <motion.div
                    animate={{
                        x: [0, 30, 0],
                        y: [0, -20, 0],
                        scale: [1, 1.1, 1],
                        opacity: [0.1, 0.2, 0.1]
                    }}
                    transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-[10%] left-[10%] w-[60%] h-[60%] bg-slate-400/20 blur-[150px] rounded-full mix-blend-screen"
                ></motion.div>
                <motion.div
                    animate={{
                        x: [0, -40, 0],
                        y: [0, 30, 0],
                        scale: [1.1, 1, 1.1],
                        opacity: [0.1, 0.15, 0.1]
                    }}
                    transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute bottom-[10%] right-[10%] w-[70%] h-[70%] bg-gray-500/20 blur-[160px] rounded-full mix-blend-screen"
                ></motion.div>
            </div>

            <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
                {/* Text Content - Left Side */}
                <div className="w-full md:w-3/5 text-left">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                    >
                        <h1 className="text-6xl md:text-9xl font-black text-white mb-6 uppercase tracking-tight leading-[0.9]">
                            <motion.span
                                initial={{ filter: "blur(10px)", opacity: 0 }}
                                animate={{ filter: "blur(0px)", opacity: 1 }}
                                transition={{ duration: 0.8, delay: 0.1 }}
                                className="block text-sm md:text-lg tracking-[0.5em] text-gray-400 mb-4 font-luxury opacity-80"
                            >
                                WELCOME TO
                            </motion.span>
                            <motion.span
                                initial={{ scale: 0.9, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                                className="metallic-text-silver block mt-2 drop-shadow-[0_0_30px_rgba(255,255,255,0.1)]"
                            >
                                VROXHUB
                            </motion.span>
                        </h1>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="flex items-center gap-3 mb-8"
                    >
                        <div className="flex -space-x-2">
                            {[1, 2, 3].map((i) => (
                                <div key={i} className="w-8 h-8 rounded-full border-2 border-black bg-gray-800" />
                            ))}
                        </div>
                        <span className="text-[10px] font-luxury tracking-[0.2em] text-gray-500 uppercase">
                            Available for new projects
                        </span>
                    </motion.div>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.5 }}
                        className="text-xl md:text-2xl text-gray-400 mb-10 max-w-xl font-light leading-relaxed"
                    >
                        Directed with passion. Produced with precision. <br />
                        We transform your vision into cinematic reality.
                    </motion.p>

                    <div className="flex flex-wrap gap-12 mb-12">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.6 }}
                        >
                            <div className="text-4xl md:text-6xl font-black text-white">+250k</div>
                            <p className="text-[10px] uppercase tracking-[0.2em] text-gray-500 mt-2 max-w-[150px] leading-relaxed">
                                reaching a wide audience and give lasting impression
                            </p>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.7 }}
                        >
                            <div className="text-4xl md:text-6xl font-black text-white">+800k</div>
                            <p className="text-[10px] uppercase tracking-[0.2em] text-gray-500 mt-2 max-w-[150px] leading-relaxed">
                                Hours watched, engaging storytelling that captivates viewers
                            </p>
                        </motion.div>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.8 }}
                        className="flex flex-col sm:flex-row items-center gap-6"
                    >
                        <motion.button
                            whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(255,255,255,0.2)" }}
                            whileTap={{ scale: 0.95 }}
                            className="w-full sm:w-auto px-10 py-4 bg-white text-black rounded-full text-lg font-bold transition-all shadow-xl shadow-white/10"
                        >
                            View Showreel
                        </motion.button>
                        <motion.button
                            whileHover={{ backgroundColor: "rgba(255,255,255,0.1)" }}
                            className="w-full sm:w-auto px-10 py-4 border border-gray-700 text-white rounded-full text-lg font-bold transition-all bg-white/5 backdrop-blur-sm"
                        >
                            Our Production
                        </motion.button>
                    </motion.div>
                </div>

                {/* 3D Object - Right Side */}
                <div className="w-full md:w-1/2 h-[400px] md:h-[700px] relative pointer-events-auto">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8, x: 50 }}
                        animate={{ opacity: 1, scale: 1, x: 0 }}
                        transition={{ duration: 1.5, ease: "easeOut", delay: 0.5 }}
                        className="w-full h-full"
                    >
                        <CameraObject />
                    </motion.div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2"
            >
                <div className="w-6 h-10 border-2 border-gray-500 rounded-full flex justify-center p-1">
                    <motion.div
                        animate={{ y: [0, 15, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                        className="w-1.5 h-1.5 bg-white rounded-full"
                    ></motion.div>
                </div>
            </motion.div>
        </section>
    );
};

export default Hero;
