"use client";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import React, { useState } from "react";

export default function Contact() {
    const [formState, setFormState] = useState({ name: "", email: "", subject: "", message: "" });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate API call
        setTimeout(() => {
            setIsSubmitting(false);
            setIsSubmitted(true);
            // Optional: open mailto
            window.location.href = `mailto:hello@somyaverma.com?subject=${encodeURIComponent(formState.subject)}&body=${encodeURIComponent("Name: " + formState.name + "\nEmail: " + formState.email + "\n\n" + formState.message)}`;

            // Reset after 3 seconds
            setTimeout(() => setIsSubmitted(false), 5000);
        }, 1500);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormState({ ...formState, [e.target.id]: e.target.value });
    };

    return (
        <section id="contact" className="py-20 bg-bg text-white relative">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-4xl font-bold mb-6">Let's Create Something Amazing Together</h2>
                        <p className="text-gray-400 mb-12 text-lg">
                            I'm always open to discussing product design work or partnership opportunities.
                        </p>

                        <div className="space-y-8">
                            <div className="flex items-start space-x-4">
                                <div className="bg-primary/10 p-3 rounded-lg text-primary">
                                    <Mail size={24} />
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold mb-1">Email</h3>
                                    <p className="text-gray-400">hello@somyaverma.com</p>
                                </div>
                            </div>

                            <div className="flex items-start space-x-4">
                                <div className="bg-primary/10 p-3 rounded-lg text-primary">
                                    <Phone size={24} />
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold mb-1">Phone</h3>
                                    <p className="text-gray-400">+1 (555) 123-4567</p>
                                </div>
                            </div>

                            <div className="flex items-start space-x-4">
                                <div className="bg-primary/10 p-3 rounded-lg text-primary">
                                    <MapPin size={24} />
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold mb-1">Location</h3>
                                    <p className="text-gray-400">San Francisco, CA</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="bg-card p-8 rounded-2xl border border-white/5 shadow-2xl"
                    >
                        <form className="space-y-6" onSubmit={handleSubmit}>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        value={formState.name}
                                        onChange={handleChange}
                                        required
                                        className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors"
                                        placeholder="John Doe"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">Email</label>
                                    <input
                                        type="email"
                                        id="email"
                                        value={formState.email}
                                        onChange={handleChange}
                                        required
                                        className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors"
                                        placeholder="john@example.com"
                                    />
                                </div>
                            </div>

                            <div>
                                <label htmlFor="subject" className="block text-sm font-medium text-gray-400 mb-2">Subject</label>
                                <input
                                    type="text"
                                    id="subject"
                                    value={formState.subject}
                                    onChange={handleChange}
                                    required
                                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors"
                                    placeholder="Project Inquiry"
                                />
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">Message</label>
                                <textarea
                                    id="message"
                                    rows={4}
                                    value={formState.message}
                                    onChange={handleChange}
                                    required
                                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors resize-none"
                                    placeholder="Tell me about your project..."
                                />
                            </div>

                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className={`w-full bg-primary hover:bg-blue-600 text-white font-medium py-3 rounded-lg transition-all flex items-center justify-center gap-2 ${isSubmitting ? "opacity-70 cursor-not-allowed" : ""}`}
                            >
                                {isSubmitting ? "Sending..." : isSubmitted ? "Sent Successfully!" : "Send Message"}
                                {!isSubmitting && !isSubmitted && <Send size={18} />}
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
