"use client";
import { motion } from "framer-motion";
import { Code2, Brain, Database, Wrench, Layers, Terminal } from "lucide-react";

const skillsData = [
    {
        category: "Languages",
        icon: <Code2 size={32} className="text-primary mb-4" />,
        skills: ["C++", "Python (Basic)", "JavaScript", "TypeScript", "HTML/CSS"],
    },
    {
        category: "Frameworks & Libraries",
        icon: <Layers size={32} className="text-primary mb-4" />,
        skills: ["React.js", "Next.js", "Recat Native", "Tailwind CSS", "Node.js"],
    },
    {
        category: "Databases",
        icon: <Database size={32} className="text-primary mb-4" />,
        skills: ["MySQL", "PostgreSQL (Basic)", "NoSQL", "MongoDB", "Supabase (Basic)"],
    },
    {
        category: "DevOps & Tools",
        icon: <Terminal size={32} className="text-primary mb-4" />,
        skills: ["Git/GitHub", "Docker (Basic)", "Power BI", "MS Excel"],
    },
    {
        category: "Design & Simulation",
        icon: <Wrench size={32} className="text-primary mb-4" />,
        skills: ["AutoCAD", "SolidWorks", "Ansys", "Canva", "Adobe Premiere Pro"]
    }
];

export default function Skills() {
    return (
        <section id="skills" className="py-20 bg-bg text-white">
            <div className="max-w-7xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl font-bold mb-4">Technical Arsenal</h2>
                    <p className="text-gray-400">Tools and technologies I use to bring ideas to life</p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {skillsData.map((skillGroup, index) => (
                        <motion.div
                            key={skillGroup.category}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="bg-card p-6 rounded-xl border border-white/5 hover:border-primary/50 transition-colors group"
                        >
                            <div className="bg-white/5 p-3 rounded-lg w-fit mb-4 group-hover:bg-primary/10 transition-colors">
                                {skillGroup.icon}
                            </div>
                            <h3 className="text-xl font-semibold mb-4">{skillGroup.category}</h3>
                            <div className="flex flex-wrap gap-2">
                                {skillGroup.skills.map((skill) => (
                                    <span
                                        key={skill}
                                        className="px-3 py-1 bg-white/5 text-gray-300 text-xs rounded-full border border-white/5 hover:bg-white/10 transition-colors"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
