"use client";
import { useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const SpaceBackground = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollY } = useScroll();
    const y1 = useTransform(scrollY, [0, 1000], [0, 200]);
    const y2 = useTransform(scrollY, [0, 1000], [0, -150]);
    const y3 = useTransform(scrollY, [0, 1000], [0, 50]);

    return (
        <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
            {/* Deep Space Gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#020617] via-[#0f172a] to-[#1e1b4b]" />

            {/* Stars Layer */}
            <div className="absolute inset-0 opacity-50">
                {[...Array(50)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute bg-white rounded-full"
                        initial={{ opacity: Math.random() * 0.5 + 0.2, scale: Math.random() * 0.5 + 0.5 }}
                        animate={{ opacity: [0.2, 1, 0.2], scale: [1, 1.5, 1] }}
                        transition={{ duration: Math.random() * 3 + 2, repeat: Infinity, ease: "easeInOut" }}
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                            width: Math.random() * 3 + "px",
                            height: Math.random() * 3 + "px",
                        }}
                    />
                ))}
            </div>

            {/* Nebula Glows */}
            <motion.div
                className="absolute top-[10%] left-[15%] w-[400px] h-[400px] rounded-full bg-purple-500/20 blur-[100px]"
                animate={{ opacity: [0.4, 0.7, 0.4], scale: [1, 1.1, 1] }}
                transition={{ duration: 8, repeat: Infinity }}
            />
            <motion.div
                className="absolute bottom-[20%] right-[10%] w-[500px] h-[500px] rounded-full bg-blue-500/20 blur-[120px]"
                animate={{ opacity: [0.3, 0.6, 0.3], scale: [1, 1.2, 1] }}
                transition={{ duration: 10, repeat: Infinity, delay: 2 }}
            />

            {/* Jupiter-like Planet */}
            <motion.div
                style={{ y: y1 }}
                className="absolute top-[15%] right-[10%] w-32 h-32 md:w-48 md:h-48 rounded-full shadow-[inset_-10px_-10px_30px_rgba(0,0,0,0.5),0_0_60px_rgba(212,165,116,0.3)] overflow-hidden"
            >
                <div className="w-full h-full bg-gradient-to-br from-[#d4a574] via-[#b8926a] to-[#c9a882] relative">
                    <div className="absolute w-full h-2 top-[30%] bg-black/10 blur-[2px]" />
                    <div className="absolute w-full h-3 top-[45%] bg-black/20 blur-[4px]" />
                    <div className="absolute w-8 h-6 top-[50%] left-[60%] bg-[#c87a5a] rounded-full blur-[1px] opacity-80" />
                    <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-full" />
                </div>
            </motion.div>

            {/* Earth-like Planet */}
            <motion.div
                style={{ y: y2 }}
                className="absolute top-[60%] left-[8%] w-40 h-40 md:w-56 md:h-56 rounded-full shadow-[inset_-12px_-12px_40px_rgba(0,0,0,0.6),0_0_70px_rgba(45,90,123,0.4)] overflow-hidden"
            >
                <div className="w-full h-full bg-[#1e3a5f] relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#2d5a7b] to-[#1a4d2e] opacity-80" />
                    {/* Clouds */}
                    <div className="absolute w-20 h-6 top-[30%] left-[20%] bg-white/30 blur-[4px] rounded-full" />
                    <div className="absolute w-14 h-4 top-[60%] left-[50%] bg-white/20 blur-[3px] rounded-full" />
                    <div className="absolute inset-0 shadow-[inset_0_0_20px_rgba(100,200,255,0.4)] rounded-full" />
                </div>
            </motion.div>

            {/* Saturn-like Planet */}
            <motion.div
                style={{ y: y3 }}
                className="absolute bottom-[10%] left-[40%] md:left-[55%] w-64 h-64 opacity-90 hidden md:block" // Hidden on mobile to save space
            >
                <div className="relative w-full h-full flex items-center justify-center">
                    <div className="w-32 h-32 rounded-full bg-[#e6d4a8] shadow-[inset_-10px_-10px_30px_rgba(0,0,0,0.4)] z-10 relative">
                        <div className="absolute w-full h-full bg-gradient-to-b from-transparent via-[#cdb87d]/30 to-transparent" />
                    </div>
                    {/* Rings */}
                    <div className="absolute w-56 h-14 border-[12px] border-[#c8b48c]/60 rounded-[50%] rotate-[-15deg] blur-[1px] z-0" />
                    <div className="absolute w-56 h-14 border-[12px] border-[#c8b48c]/60 rounded-[50%] rotate-[-15deg] blur-[1px] z-20 [clip-path:polygon(0_50%,100%_50%,100%_100%,0_100%)]" />
                </div>
            </motion.div>

            {/* Floating Rocks / Particles */}
            <motion.div
                animate={{ y: [0, -20, 0], rotate: [0, 10, -10, 0] }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                className="absolute top-[30%] left-[20%] w-4 h-4 bg-gray-600 rounded-full blur-[1px] opacity-40"
            />
            <motion.div
                animate={{ y: [0, 30, 0], rotate: [0, -20, 20, 0] }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute bottom-[40%] right-[25%] w-6 h-6 bg-gray-500 rounded-full blur-[1px] opacity-30"
            />

        </div>
    );
};

export default SpaceBackground;
