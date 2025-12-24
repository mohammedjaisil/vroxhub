"use client";

import React from 'react';
import Slider from 'react-slick';
import Image from 'next/image';
import { FaFacebook, FaTwitter, FaInstagram, FaPinterest } from 'react-icons/fa';
import { motion } from 'framer-motion';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const teamMembers = [
    {
        name: 'DANIYEL FEATHER',
        role: 'JUNIOR DIRECTOR',
        image: '/assets/Images/model1.jpg',
    },
    {
        name: 'MARY GAUTREAUX',
        role: 'MAKEUP ARTIST',
        image: '/assets/Images/model2.jpg',
    },
    {
        name: 'LEDSMA MILDRED',
        role: 'MAKEUP ARTIST',
        image: '/assets/Images/model3.jpg',
    },
    {
        name: 'STEPHEN KETCHUM',
        role: 'SCRIPT WRITER',
        image: '/assets/Images/model4.jpg',
    },
];

const TeamSection = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 600,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        responsive: [
            { breakpoint: 1200, settings: { slidesToShow: 3 } },
            { breakpoint: 768, settings: { slidesToShow: 2 } },
            { breakpoint: 576, settings: { slidesToShow: 1 } },
        ],
    };

    return (
        <section className="py-24 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 md:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <p className="metallic-text-silver font-bold tracking-widest text-sm mb-4 uppercase">Expert Team</p>
                    <h2 className="text-4xl md:text-5xl font-black text-white uppercase italic">Meet My Team</h2>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.3 }}
                >
                    <Slider {...settings} className="team-slider -mx-4">
                        {teamMembers.map((member, index) => (
                            <div key={index} className="px-4">
                                <motion.div
                                    whileHover={{ y: -10 }}
                                    className={`relative group transition-all duration-500 rounded-2xl overflow-hidden ${index % 2 === 1 ? 'translate-y-8' : '-translate-y-4'
                                        }`}
                                >
                                    <div className="aspect-[3/4] relative">
                                        <Image
                                            src={member.image}
                                            alt={member.name}
                                            fill
                                            className="object-cover transition-transform duration-700 group-hover:scale-110"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8 text-center">
                                            <div className="flex justify-center gap-4 mb-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                                <a href="#" className="text-white hover:text-gray-400"><FaFacebook size={20} /></a>
                                                <a href="#" className="text-white hover:text-blue-400"><FaTwitter size={20} /></a>
                                                <a href="#" className="text-white hover:text-pink-500"><FaInstagram size={20} /></a>
                                                <a href="#" className="text-white hover:text-red-600"><FaPinterest size={20} /></a>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="py-6 text-center bg-gray-900 group-hover:bg-slate-800 transition-colors duration-500">
                                        <p className="text-slate-400 group-hover:text-white text-xs font-bold uppercase tracking-widest mb-1">
                                            {member.role}
                                        </p>
                                        <h5 className="text-white font-black text-lg tracking-tight">
                                            {member.name}
                                        </h5>
                                    </div>
                                </motion.div>
                            </div>
                        ))}
                    </Slider>
                </motion.div>
            </div>
        </section>
    );
};

export default TeamSection;
