import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube, FaLinkedinIn } from 'react-icons/fa';

const SocialBar = () => {
    const socials = [
        { icon: <FaFacebookF />, href: '#', color: 'hover:text-white' },
        { icon: <FaTwitter />, href: '#', color: 'hover:text-white' },
        { icon: <FaInstagram />, href: '#', color: 'hover:text-white' },
        { icon: <FaYoutube />, href: '#', color: 'hover:text-white' },
        { icon: <FaLinkedinIn />, href: '#', color: 'hover:text-white' },
    ];

    return (
        <div className="fixed left-6 top-1/2 -translate-y-1/2 z-40 hidden xl:flex flex-col items-center gap-8 group">
            <div className="flex flex-col gap-6">
                {socials.map((social, index) => (
                    <a
                        key={index}
                        href={social.href}
                        className={`text-gray-400 text-xl transition-all duration-300 hover:scale-125 ${social.color}`}
                    >
                        {social.icon}
                    </a>
                ))}
            </div>
            <div className="flex flex-col items-center gap-4 mt-4">
                <div className="w-[1px] h-20 bg-gradient-to-t from-slate-400 to-transparent"></div>
                <span className="[writing-mode:vertical-lr] text-xs font-bold tracking-[0.3em] text-slate-400 uppercase">
                    Follow Us
                </span>
            </div>
        </div>
    );
};

export default SocialBar;
