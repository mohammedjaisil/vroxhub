"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const services = [
    { title: 'Explainer Videos', image: '/assets/Images/explainer.jpg' },
    { title: 'Infographic Videos', image: '/assets/Images/text.jpg' },
    { title: 'Training Videos', image: '/assets/Images/training.jpg' },
    { title: 'Promotional Videos', image: '/assets/Images/promo.jpg' },
    { title: 'Corporate Videos', image: '/assets/Images/corporate.jpg' },
    { title: 'Social Media Ads', image: '/assets/Images/social.jpg' },
    { title: 'Product Demos', image: '/assets/Images/product.jpg' },
    { title: 'Tutorial Videos', image: '/assets/Images/tutorial.jpg' },
];

const categories = [
    '2D & 3D Animation',
    'Video Production',
    'Branding',
    'Digital Marketing',
    'Web Development',
];


const Services = () => {
    const [activeCategory, setActiveCategory] = useState(categories[0]);

    return (
        <section className="py-24 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 md:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-black text-white uppercase">
                        Our <span className="metallic-text-silver">Services</span>
                    </h2>
                </motion.div>

                {/* Categories Tab */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="flex flex-wrap justify-center gap-2 mb-12"
                >
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            className={`px-6 py-3 rounded-full text-sm font-bold transition-all duration-300 ${activeCategory === cat
                                ? 'bg-slate-800 text-white shadow-lg shadow-slate-900'
                                : 'bg-white/5 text-gray-400 hover:bg-white/10'
                                }`}
                            onClick={() => setActiveCategory(cat)}
                        >
                            {cat}
                        </button>
                    ))}
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                    className="max-w-3xl mx-auto text-center mb-16"
                >
                    <p className="text-lg text-gray-400 leading-relaxed italic">
                        At VroxHub, our <strong className="text-white font-black">{activeCategory}</strong> services create visually captivating
                        content that effectively communicates your message across various formats.
                    </p>
                </motion.div>

                <div className="relative flex flex-col gap-8 pb-24">
                    {services.map((service, index) => (
                        <motion.div
                            key={service.title}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="sticky top-[15vh] w-full"
                            style={{
                                top: `${15 + index * 5}vh`, // Each card sticks slightly lower creating a stack
                                zIndex: index + 1
                            }}
                        >
                            <div className="relative w-full aspect-video md:aspect-[2.4/1] bg-white/5 backdrop-blur-3xl border border-white/10 rounded-[3rem] overflow-hidden group shadow-2xl shadow-black/50">
                                <Image
                                    src={service.image}
                                    alt={service.title}
                                    fill
                                    className="object-cover opacity-60 group-hover:opacity-80 transition-all duration-700 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/50 to-transparent p-8 md:p-16 flex flex-col justify-center">
                                    <span className="text-sm md:text-base font-luxury text-gray-400 mb-4 tracking-[0.3em]">
                                        0{index + 1} — SERVICE
                                    </span>
                                    <h3 className="text-4xl md:text-7xl font-black text-white uppercase tracking-tighter mb-6 relative inline-block">
                                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-gray-500">
                                            {service.title}
                                        </span>
                                    </h3>
                                    <p className="text-gray-400 max-w-lg text-sm md:text-lg leading-relaxed mb-8 hidden md:block opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform translate-y-4 group-hover:translate-y-0">
                                        Premium videography services designed to elevate your brand presence through cinematic excellence and storytelling.
                                    </p>
                                    <button className="w-fit px-8 py-4 bg-white text-black rounded-full font-bold text-xs tracking-widest hover:bg-gray-200 transition-colors">
                                        VIEW DETAILS
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
