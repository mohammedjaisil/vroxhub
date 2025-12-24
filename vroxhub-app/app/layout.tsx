import type { Metadata } from "next";
import { Geist, Geist_Mono, Outfit, Syncopate } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SocialBar from "@/components/SocialBar";
import SmoothScroll from "@/components/SmoothScroll";
import { FaWhatsapp, FaPhoneAlt } from 'react-icons/fa';

const syncopate = Syncopate({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-syncopate",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "VROXHUB | Crafting Engaging Visuals",
  description: "VROXHUB is a creative agency specialized in 2D & 3D Animation, Video Production, and Digital Marketing.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} ${outfit.variable} ${syncopate.variable} font-sans antialiased text-white`}>
        <SmoothScroll>
          <Navbar />
          <SocialBar />

          <main className="min-h-screen">
            {children}
          </main>

          {/* Floating Contact Icons */}
          <div className="fixed bottom-8 right-8 z-50 flex flex-col gap-4">
            <a
              href="https://wa.me/971505051495"
              target="_blank"
              rel="noopener noreferrer"
              className="w-14 h-14 bg-green-500 text-white rounded-full flex items-center justify-center text-2xl shadow-2xl hover:bg-green-600 transition-all transform hover:scale-110 active:scale-95 group relative"
            >
              <FaWhatsapp />
              <span className="absolute right-full mr-4 px-3 py-1 bg-green-500 text-white text-sm font-bold rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                Chat on WhatsApp
              </span>
            </a>

            <a
              href="tel:+971505051495"
              className="w-14 h-14 bg-slate-900 text-white rounded-full flex items-center justify-center text-xl shadow-2xl hover:bg-black transition-all transform hover:scale-110 active:scale-95 group relative"
            >
              <FaPhoneAlt />
              <span className="absolute right-full mr-4 px-3 py-1 bg-slate-900 text-white text-sm font-bold rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                Call Us Now
              </span>
            </a>
          </div>

          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
