import React from 'react';
import Link from 'next/link';
import { FaLinkedin, FaGithub, FaXTwitter } from 'react-icons/fa6';

const Footer = () => {
    const sections = [
        {
            title: 'FEATURES',
            links: ['Create', 'Approve', 'Negotiate', 'Sign', 'Store', 'Track']
        },
        {
            title: 'SOLUTIONS',
            links: ['Legal', 'Sales', 'HR', 'Procurement', 'Finance']
        },
        {
            title: 'SITE LICENSE',
            links: ['PDF Editing', 'Web forms', 'Online Surveys', 'Accept Payments']
        },
        {
            title: 'COMPARE',
            links: ['Spotdraft', 'Juro', 'Contractsign', 'Contractbook', 'Oneflow', 'Docusign']
        },
        {
            title: 'COMPANY',
            links: ['About', 'Careers', 'Privacy Policy', 'Terms & Conditions']
        }
    ];

    return (
        <footer className="text-gray-400 py-16 px-4">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-12 mb-16 px-4">
                    {sections.map((section) => (
                        <div key={section.title}>
                            <h5 className="text-white font-bold text-sm tracking-wider mb-6">{section.title}</h5>
                            <ul className="space-y-4">
                                {section.links.map((link) => (
                                    <li key={link}>
                                        <Link href="#" className="hover:text-white transition-colors text-sm">
                                            {link}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                <div className="border-t border-gray-800 pt-12 flex flex-col items-center">
                    <div className="text-3xl font-bold metallic-text-silver mb-8">VROXHUB</div>

                    <div className="flex gap-6 mb-8 text-2xl">
                        <Link href="#" className="hover:text-white transition-colors">
                            <FaLinkedin />
                        </Link>
                        <Link href="#" className="hover:text-white transition-colors">
                            <FaXTwitter />
                        </Link>
                        <Link href="#" className="hover:text-white transition-colors">
                            <FaGithub />
                        </Link>
                    </div>

                    <p className="text-gray-500 text-sm">© 2024 VroxHub, Inc. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
