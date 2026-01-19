"use client";
import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";

const projects = [
    {
        title: "Left2Right – Leftover Food Donation Web App",
        description: "Built a donation platform connecting donors with those in need. Implemented user auth, food listings, and REST APIs. Features scalable AWS Amplify deployment.",
        tags: ["React.js", "Node.js", "MongoDB", "AWS Amplify", "AWS Lambda"],
        image: "/project1.jpg",
        github: "#",
        demo: "#",
    },
    {
        title: "Sitaare (Platform for Orphan Girls)",
        description: "A responsive portfolio website highlighting creative skills. Features interactive animations and smooth UI. Hosted on Vercel.",
        tags: ["HTML", "CSS", "JavaScript", "Dialogflow", "Vercel"],
        image: "/project2.jpg",
        github: "#",
        demo: "#",
    },
    {
        title: "Smart Off-Road ADAS",
        description: "Innovative design for ATVs with Advanced Driver Assistance Systems (ADAS). Secured 2nd Runner-Up position for innovation.",
        tags: ["Power BI", "SQL", "SolidWorks", "Data Modelling"],
        image: "/project3.jpg",
        github: "#",
        demo: "#",
    },
];

export default function Projects() {
    return (
        <section id="projects" className="py-20 bg-bg text-white relative">
            <div className="max-w-7xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="mb-16"
                >
                    <h2 className="text-3xl font-bold mb-4">Featured Projects</h2>
                    <div className="h-1 w-20 bg-primary rounded-full" />
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="bg-card rounded-xl overflow-hidden border border-white/5 hover:transform hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 group"
                        >
                            <div className="h-48 bg-gray-800 relative group-hover:opacity-90 transition-opacity bg-gradient-to-br from-blue-900/20 to-purple-900/20">
                                <div className="absolute inset-0 flex items-center justify-center text-gray-500 font-bold text-xl">
                                    {project.title.split("–")[0]}
                                </div>
                            </div>

                            <div className="p-6">
                                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">{project.title}</h3>
                                <p className="text-gray-400 text-sm mb-4">
                                    {project.description}
                                </p>
                                <div className="flex flex-wrap gap-2 mb-6">
                                    {project.tags.map((tag) => (
                                        <span key={tag} className="text-xs text-primary bg-primary/10 px-2 py-1 rounded">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                                <div className="flex gap-4">
                                    <a href={project.github} className="flex items-center text-sm font-medium text-gray-300 hover:text-white transition-colors">
                                        <Github size={16} className="mr-2" /> Code
                                    </a>
                                    <a href={project.demo} className="flex items-center text-sm font-medium text-gray-300 hover:text-white transition-colors">
                                        <ExternalLink size={16} className="mr-2" /> Live Demo
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
