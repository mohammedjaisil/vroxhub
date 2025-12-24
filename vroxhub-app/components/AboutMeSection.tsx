"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const AboutMeSection = () => {
    return (
        <section className="py-24 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 md:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20 items-start">
                    <motion.h2
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        className="text-4xl md:text-5xl font-black uppercase tracking-tighter font-luxury"
                    >
                        About Me
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        className="text-gray-400 leading-relaxed font-light"
                    >
                        Starting her career in fashion photography at the age of 18, it was on the sets of high-end brand campaigns and fashion shows that Amelia learnt the technicalities of what has become her signature style. Having always been drawn to sociological documentary photography, Amelia applies her classic and energetic style seamlessly to her portraiture and documentary projects.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {[
                        { src: "/cinematic_nature_detail.png", alt: "Nature Detail" },
                        { src: "/cinematic_urban_shot.png", alt: "Urban Atmosphere" },
                        { src: "/cinematic_studio_setup.png", alt: "Studio Technicals" }
                    ].map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.2 }}
                            className="relative aspect-[3/4] rounded-[2rem] overflow-hidden border border-white/5"
                        >
                            <Image
                                src={item.src}
                                alt={item.alt}
                                fill
                                className="object-cover grayscale hover:grayscale-0 transition-all duration-500"
                            />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default AboutMeSection;
