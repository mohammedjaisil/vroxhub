"use client";

import { motion } from "framer-motion";

const MarqueeSection = ({ text }: { text: string }) => {
    return (
        <div className="py-20 overflow-hidden border-y border-white/5 bg-black/20 backdrop-blur-sm">
            <motion.div
                animate={{ x: [0, -1000] }}
                transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear"
                }}
                className="flex whitespace-nowrap"
            >
                {[...Array(10)].map((_, i) => (
                    <span
                        key={i}
                        className="text-8xl md:text-[15rem] font-black uppercase tracking-tighter opacity-[0.03] mx-8 font-luxury"
                    >
                        {text} <span className="text-white/5">•</span>
                    </span>
                ))}
            </motion.div>
        </div>
    );
};

export default MarqueeSection;
