"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const works = [
    { role: "Art Director", year: "2021", image: "/cinematic_abstract_colors.png" },
    { role: "Photographer", year: "2021", image: "/cinematic_studio_setup.png" },
    { role: "Videographer", year: "2022", image: "/videographer_at_work.png" },
];

const WorksSection = () => {
    return (
        <section className="py-24 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 md:px-8">
                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="text-6xl md:text-8xl font-black uppercase tracking-tighter font-luxury mb-20 text-center"
                >
                    Featured Works
                </motion.h2>

                <div className="flex flex-col gap-6">
                    {works.map((work, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: i * 0.1 }}
                            className="group relative h-40 md:h-56 rounded-[2rem] overflow-hidden border border-white/5 cursor-pointer"
                        >
                            <Image
                                src={work.image}
                                alt={work.role}
                                fill
                                className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000 opacity-60 group-hover:opacity-100"
                            />
                            <div className="absolute inset-0 flex items-center justify-between px-10 md:px-20 z-10">
                                <h3 className="text-3xl md:text-6xl font-black uppercase tracking-tighter group-hover:metallic-text-silver transition-all">
                                    {work.role}
                                </h3>
                                <span className="text-sm md:text-lg font-luxury tracking-widest text-gray-400">
                                    {work.year}
                                </span>
                            </div>
                            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/0 transition-all duration-700"></div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WorksSection;
