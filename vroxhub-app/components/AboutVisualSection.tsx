"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const AboutVisualSection = () => {
    return (
        <section className="py-24 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                <div className="relative">
                    <motion.h2
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1 }}
                        className="text-6xl md:text-9xl font-black uppercase tracking-tighter leading-[0.85] font-luxury mb-8"
                    >
                        Visual <br /> <span className="text-white/20">Poetry</span>
                    </motion.h2>

                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                        className="flex items-center gap-4 mb-12"
                    >
                        <div className="flex gap-2">
                            {['YT', 'IG', 'FB', 'X'].map((social) => (
                                <div key={social} className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-[10px] font-bold hover:bg-white hover:text-black transition-all cursor-pointer">
                                    {social}
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.7 }}
                        className="text-lg text-gray-500 max-w-md leading-relaxed"
                    >
                        Welcome to a visual journey that transcends time and space. Discover the artistry of moments captured in motion.
                    </motion.p>
                </div>

                <div className="relative flex justify-center lg:justify-end">
                    {/* The "Golden Card" - Adapted to space theme but keeping the structure */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
                        whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                        transition={{ duration: 1, type: "spring" }}
                        className="relative w-[300px] md:w-[450px] aspect-square bg-[#eab308] rounded-[3rem] overflow-hidden"
                    >
                        <Image
                            src="/team-1.jpg" // Using an existing image if available, or just a placeholder logic
                            alt="Visual Artist"
                            fill
                            className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
                        />

                        {/* Decorative Notch/Badge */}
                        <div className="absolute top-4 right-4 w-12 h-12 bg-black rounded-full flex items-center justify-center border border-white/10">
                            <div className="w-6 h-6 border-t-2 border-r-2 border-white rotate-45 translate-x-[-2px] translate-y-[2px]" />
                        </div>

                        <div className="absolute bottom-8 left-8 right-8">
                            <div className="text-white font-luxury text-2xl tracking-widest drop-shadow-lg">CREATIVITY</div>
                        </div>
                    </motion.div>

                    {/* Floating Elements */}
                    <motion.div
                        animate={{ y: [0, -20, 0] }}
                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute -top-10 -left-10 w-24 h-24 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl flex items-center justify-center p-4"
                    >
                        <div className="text-[10px] text-gray-400 font-luxury uppercase tracking-widest text-center">Cinematic Excellence</div>
                    </motion.div>

                    <motion.div
                        animate={{ y: [0, 20, 0] }}
                        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                        className="absolute -bottom-10 right-20 w-32 h-32 bg-white/5 backdrop-blur-xl border border-white/10 rounded-full flex flex-col items-center justify-center p-4"
                    >
                        <div className="text-xl font-black">+10y</div>
                        <div className="text-[8px] text-gray-500 font-luxury uppercase tracking-widest">Experience</div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default AboutVisualSection;
