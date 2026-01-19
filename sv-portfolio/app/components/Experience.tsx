"use client";
import { motion } from "framer-motion";
import { Calendar, Briefcase, MapPin } from "lucide-react";

const experiences = [
    {
        role: "Software Developer Intern",
        company: "iNEW",
        period: "April 2025 – Present",
        location: "Pune",
        description: [
            "Contributing to custom client projects at a project-based software company. Developing cross-platform mobile apps using React Native with modular, scalable architecture.",
            "Handling backend operations and data management using DBeaver, Supabase, and REST APIs. Integrated responsive UIs, API workflows, and real-time features across Android/iOS using WSL tools.",
            "Collaborated with designers and engineers to deliver optimized, client-ready solutions."
        ]
    },
    {
        role: "Brakes Department Head / Team Member",
        company: "Indian Karting Race (IKR)",
        period: "Oct 2024",
        location: "Greater Noida",
        description: [
            "Represented MIT-WPU in the prestigious national-level IKR 2024 competition. Achieved All India Rank 5th among 100+ teams for design and performance.",
            "Led the Brakes Department as Head in 3rd year and contributed as a designer in 2nd year. Earned national-level certification for kart engineering excellence."
        ]
    },
];

export default function Experience() {
    return (
        <section id="experience" className="py-20 bg-bg text-white">
            <div className="max-w-4xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="mb-16 text-center"
                >
                    <h2 className="text-3xl font-bold mb-4">Professional Journey</h2>
                    <p className="text-gray-400">My timeline of professional growth</p>
                </motion.div>

                <div className="relative border-l border-white/10 ml-6 md:ml-12 space-y-12">
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="relative pl-8 md:pl-12"
                        >
                            {/* Timeline Dot */}
                            <div className="absolute -left-3 top-0 bg-primary h-6 w-6 rounded-full border-4 border-bg flex items-center justify-center">
                                <div className="h-2 w-2 bg-white rounded-full" />
                            </div>

                            <div className="bg-card p-6 rounded-xl border border-white/5 hover:border-white/10 transition-colors">
                                <div className="flex flex-col md:flex-row md:items-start justify-between mb-4">
                                    <div>
                                        <h3 className="text-xl font-bold text-white flex items-center gap-2">
                                            <Briefcase size={18} className="text-primary" /> {exp.role}
                                        </h3>
                                        <p className="text-primary font-medium mt-1">{exp.company}</p>
                                        <p className="text-gray-500 text-sm flex items-center mt-1">
                                            <MapPin size={14} className="mr-1" /> {exp.location}
                                        </p>
                                    </div>
                                    <div className="flex items-center text-gray-400 text-sm mt-2 md:mt-0 whitespace-nowrap">
                                        <Calendar size={16} className="mr-2" />
                                        {exp.period}
                                    </div>
                                </div>

                                <ul className="space-y-2 mt-4">
                                    {exp.description.map((item, i) => (
                                        <li key={i} className="text-gray-300 leading-relaxed text-sm flex items-start">
                                            <span className="mr-2 mt-1.5 h-1.5 w-1.5 bg-gray-500 rounded-full flex-shrink-0" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
