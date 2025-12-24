"use client";

import { motion } from "framer-motion";

const exhibitions = [
    { id: "01", title: "Cinematic Visions", subtitle: "Unveiled", location: "Madrid Gallery, Spain", date: "21 Nov 2023" },
    { id: "02", title: "Frames in", subtitle: "Motion", location: "Manchester Museum, UK", date: "20 Nov 2023" },
    { id: "03", title: "Journey Through", subtitle: "The Lens", location: "Milan Gallery, Italy", date: "19 Nov 2023" },
];

const ExhibitionsList = () => {
    return (
        <section className="py-24 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 md:px-8">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
                    <div>
                        <h2 className="text-6xl md:text-8xl font-black uppercase tracking-tighter leading-none mb-4 font-luxury">
                            Exhibitions <span className="text-gray-600">.</span>
                        </h2>
                    </div>
                    <div className="max-w-xs text-right">
                        <p className="text-sm text-gray-500 uppercase tracking-widest leading-relaxed">
                            Discover the artistry of moments captured in motion across the globe.
                        </p>
                    </div>
                </div>

                <div className="border-t border-white/10">
                    {exhibitions.map((item) => (
                        <motion.div
                            key={item.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="group flex flex-col md:flex-row items-center justify-between py-12 border-b border-white/10 hover:bg-white/[0.02] transition-colors gap-8 px-4"
                        >
                            <div className="flex items-center gap-12 w-full md:w-auto">
                                <span className="text-sm font-luxury text-gray-600">{item.id}</span>
                                <div>
                                    <h3 className="text-3xl md:text-5xl font-black uppercase tracking-tight group-hover:text-white transition-colors">
                                        {item.title} <br />
                                        <span className="text-gray-500 group-hover:text-white/80">{item.subtitle}</span>
                                    </h3>
                                </div>
                            </div>

                            <div className="flex flex-col md:flex-row items-center gap-12 w-full md:w-auto justify-between md:justify-end">
                                <div className="text-right">
                                    <div className="text-xs uppercase tracking-widest text-white mb-1 font-bold">{item.location}</div>
                                    <div className="text-xs uppercase tracking-widest text-gray-500">{item.date}</div>
                                </div>
                                <button className="px-8 py-3 border border-white/20 rounded-full text-[10px] uppercase tracking-[0.2em] font-luxury hover:bg-white hover:text-black transition-all">
                                    Buy Ticket
                                </button>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ExhibitionsList;
