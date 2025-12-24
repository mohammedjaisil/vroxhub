"use client";

import { motion } from "framer-motion";

const SayHello = () => {
    return (
        <section className="py-24 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 md:px-8 flex flex-col items-center">
                <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
                    <div className="text-left">
                        <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-4 flex items-center gap-4">
                            Say hello <span className="animate-bounce">👋</span>
                        </h2>
                        <a
                            href="mailto:hello@vroxhub.com"
                            className="text-2xl md:text-4xl font-light hover:metallic-text-silver transition-all duration-300"
                        >
                            hello@vroxhub.com
                        </a>
                    </div>

                    <div className="flex flex-col md:items-end justify-center gap-4 text-xs font-luxury uppercase tracking-widest text-gray-400">
                        <a href="#" className="hover:text-white transition-all">LinkedIn</a>
                        <a href="#" className="hover:text-white transition-all">Instagram</a>
                        <a href="#" className="hover:text-white transition-all">Twitter</a>
                    </div>
                </div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1.5 }}
                    className="w-full pt-10 border-t border-white/10"
                >
                    <div className="text-white font-black text-[12vw] leading-none uppercase tracking-tighter text-center select-none opacity-10">
                        VROXHUB
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default SayHello;
