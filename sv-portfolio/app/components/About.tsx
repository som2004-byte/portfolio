"use client";
import { motion } from "framer-motion";

export default function About() {
    return (
        <section id="about" className="py-20 bg-bg text-white relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10" />

            <div className="max-w-4xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl font-bold mb-4">About Me</h2>
                    <div className="h-1 w-20 bg-primary mx-auto rounded-full" />
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="bg-card p-8 rounded-2xl border border-white/5 shadow-xl"
                >
                    <p className="text-lg text-gray-300 leading-relaxed mb-6">
                        I am a <span className="text-primary font-semibold">Computer Science Undergraduate</span> at MIT-WPU, Pune, with a strong foundation in <span className="text-primary font-semibold">AI/ML</span> and <span className="text-primary font-semibold">Full-Stack Development</span>.
                        I specialize in building practical machine learning models and designing responsive, scalable web and mobile applications using React.js, Node.js, and React Native.
                    </p>
                    <p className="text-lg text-gray-300 leading-relaxed">
                        Beyond coding, I've demonstrated leadership as the <span className="text-primary font-semibold">Brakes Department Head</span> for a nationally ranked Go-Kart team, securing an All India Rank of 5th.
                        I am passionate about innovation, automation, and creating real-world tech solutions that make a difference.
                    </p>
                </motion.div>
            </div>
        </section >
    );
}
