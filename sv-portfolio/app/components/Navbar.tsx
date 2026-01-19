"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Github, Linkedin, Mail, Code2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Contact", href: "#contact" },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? "bg-bg/80 backdrop-blur-md border-b border-white/10" : "bg-transparent"
                }`}
        >
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
                <div className="flex items-center justify-between h-20">
                    {/* Logo */}
                    <Link href="/" className="text-xl font-bold tracking-tight text-white hover:text-primary transition-colors">
                        Somya Verma
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center space-x-8">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="text-sm text-gray-300 hover:text-primary transition-colors font-medium"
                            >
                                {link.name}
                            </a>
                        ))}
                        <div className="h-6 w-px bg-white/10 mx-2" />
                        <div className="flex items-center space-x-4">
                            <a href="https://github.com/som2004-byte" target="_blank" className="text-gray-400 hover:text-white transition-colors"><Github size={20} /></a>
                            <a href="https://www.linkedin.com/in/somya-verma21" target="_blank" className="text-gray-400 hover:text-white transition-colors"><Linkedin size={20} /></a>
                            <a href="https://leetcode.com/u/som_2004/" target="_blank" className="text-gray-400 hover:text-white transition-colors"><Code2 size={20} /></a>
                        </div>
                        <a
                            href="/resume.html"
                            target="_blank"
                            className="px-4 py-2 border border-white/20 rounded-full text-sm font-medium hover:bg-white/10 transition-all text-white"
                        >
                            Download Resume
                        </a>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-white focus:outline-none"
                        >
                            {isOpen ? <X size={28} /> : <Menu size={28} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-bg/90 backdrop-blur-xl border-b border-white/10 overflow-hidden"
                    >
                        <div className="px-6 py-4 space-y-4 flex flex-col">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setIsOpen(false)}
                                    className="text-gray-300 hover:text-primary transition-colors text-lg"
                                >
                                    {link.name}
                                </a>
                            ))}
                            <a
                                href="/resume.html"
                                target="_blank"
                                className="text-primary font-medium"
                            >
                                Download Resume
                            </a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
