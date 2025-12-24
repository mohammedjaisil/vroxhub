"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const CapturingSection = () => {
    return (
        <section className="py-24 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 md:px-8">
                <motion.h2
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1 }}
                    className="text-7xl md:text-[10rem] font-black uppercase tracking-tighter leading-[0.8] font-luxury mb-12 text-center"
                >
                    Capturing
                </motion.h2>
                <p className="text-center text-sm md:text-lg uppercase tracking-[0.4em] text-gray-500 mb-20 font-luxury">
                    The moments that captivate your heart
                </p>

                <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-stretch">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="md:col-span-4 bg-white/5 backdrop-blur-md border border-white/10 rounded-[2rem] p-10 flex flex-col justify-between"
                    >
                        <p className="text-xl md:text-2xl text-gray-300 leading-relaxed font-light italic">
                            "Amelia Allen is a lifestyle, portrait and documentary photographer from Somerset who now lives and works in London."
                        </p>
                        <motion.button
                            whileHover={{ x: 10 }}
                            className="flex items-center gap-4 text-xs font-luxury uppercase tracking-widest text-white mt-12"
                        >
                            About Us <span className="w-6 h-6 rounded-full border border-white flex items-center justify-center text-[10px]">→</span>
                        </motion.button>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1 }}
                        className="md:col-span-8 relative aspect-video md:aspect-auto h-[400px] md:h-auto rounded-[2rem] overflow-hidden border border-white/5"
                    >
                        <Image
                            src="/videographer_at_work.png"
                            alt="Professional Videographer"
                            fill
                            className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
                        />
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default CapturingSection;
