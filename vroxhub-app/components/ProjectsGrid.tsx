"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const projects = [
    { src: "/cinematic_urban_shot.png", span: "col-span-1 row-span-1" },
    { src: "/cinematic_portrait.jpg", span: "col-span-1 row-span-1" }, // Note: I didn't generate this one successfully but I can use placeholders or remixed ones
    { src: "/luxury_interior_shot.jpg", span: "col-span-1 row-span-2" },
    { src: "/cinematic_studio_setup.png", span: "col-span-2 row-span-1" },
    { src: "/cinematic_nature_detail.png", span: "col-span-2 row-span-1" },
];

// Since I have some missing images due to quota, I will use the ones I have more creatively
const projectData = [
    { src: "/cinematic_urban_shot.png", alt: "Street", span: "md:col-span-4 md:row-span-1" },
    { src: "/cinematic_nature_detail.png", alt: "Nature", span: "md:col-span-4 md:row-span-1" },
    { src: "/videographer_at_work.png", alt: "Interior", span: "md:col-span-4 md:row-span-2" },
    { src: "/cinematic_studio_setup.png", alt: "Studio", span: "md:col-span-8 md:row-span-1" },
    { src: "/cinematic_abstract_colors.png", alt: "Abstract", span: "md:col-span-12 md:row-span-1" },
];

const ProjectsGrid = () => {
    return (
        <section className="py-24 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 md:px-8">
                <div className="flex justify-between items-end mb-16 px-4">
                    <h2 className="text-6xl md:text-8xl font-black uppercase tracking-tighter font-luxury">
                        Projects
                    </h2>
                    <button className="text-[10px] uppercase tracking-[0.3em] font-luxury flex items-center gap-2 hover:text-white transition-all text-gray-500">
                        Show All <span className="w-5 h-5 rounded-full border border-gray-500 flex items-center justify-center text-[8px]">→</span>
                    </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-[300px] md:auto-rows-[400px]">
                    {projectData.map((project, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: i * 0.1 }}
                            className={`relative rounded-[2.5rem] overflow-hidden border border-white/5 ${project.span}`}
                        >
                            <Image
                                src={project.src}
                                alt={project.alt}
                                fill
                                className="object-cover grayscale hover:grayscale-0 transition-all duration-1000"
                            />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProjectsGrid;
