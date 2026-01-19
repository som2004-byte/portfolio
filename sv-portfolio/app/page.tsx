"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import Navbar from "./components/Navbar";
import SpaceBackground from "./components/SpaceBackground";
import { Github, Linkedin, ExternalLink, Mail, Code2, Layers, Database, Terminal, Wrench, Briefcase, MapPin, Calendar, FileText, GraduationCap, Phone, Triangle, FolderOpen } from "lucide-react";

// Project Data from Resume
const projects = [
  {
    title: "Left2Right – Food Donation App",
    description: "Built a donation platform connecting donors with those in need. Implemented user auth, food listings, and REST APIs. Features scalable AWS Amplify deployment.",
    tags: ["MERN Stack", "AWS Amplify", "AWS Lambda"],
    icon: "🍲",
    color: "from-green-500 to-emerald-600",
    links: {
      code: "https://github.com/som2004-byte",
      demo: "https://vercel.com/som2004-bytes-projects"
    }
  },
  {
    title: "Sitaare - Platform for Orphan Girls",
    description: "A responsive portfolio website highlighting creative skills. Features interactive animations and smooth UI. Hosted on Vercel.",
    tags: ["HTML/CSS", "JavaScript", "Dialogflow"],
    icon: "✨",
    color: "from-yellow-400 to-amber-600",
    links: {
      demo: "https://sitaare.in"
    }
  },
  {
    title: "Smart Off-Road ADAS",
    description: "Innovative design for ATVs with Advanced Driver Assistance Systems (ADAS). Secured 2nd Runner-Up for innovation. Utilized SolidWorks for modeling.",
    tags: ["Power BI", "SQL", "SolidWorks", "Ansys"],
    icon: "🚜",
    color: "from-orange-500 to-red-600",
    links: {
      report: "https://drive.google.com/drive/folders/1Ti_FUvjbjydwT5IClMlKZHboaupWPVJj?usp=drive_link"
    }
  },
];

// Experience Data from Resume
const experiences = [
  {
    role: "Software Developer Intern",
    company: "iNEW, Pune",
    period: "April 2025 – Present",
    desc: "Developing cross-platform mobile apps using React Native. Handling backend operations with Supabase. Creating technical documentation for API workflows."
  },
  {
    role: "Brakes Department Head",
    company: "Indian Karting Race (IKR)",
    period: "Oct 2024",
    desc: "Led the Brakes Department securing All India Rank 5th. Used Ansys for thermal analysis and SolidWorks for component design."
  }
];

// Education Data from Resume
const education = [
  {
    school: "MIT-WPU, Pune",
    degree: "B.Tech in Computer Science and Business Systems",
    year: "2022-2026 (Expected)",
    grade: "CGPA: 7.7"
  },
  {
    school: "Mumbai Junior College, Mumbai",
    degree: "HSC (12th Grade)",
    year: "2022",
    grade: "Percentage: 60%"
  },
  {
    school: "Auxilium Convent High School, Mumbai",
    degree: "SSC (10th Grade)",
    year: "2020",
    grade: "Percentage: 85%"
  }
];

// Skills Data from Resume
const skillCategories = [
  { title: "Languages & Core", skills: ["C++", "Python", "JavaScript", "HTML/CSS", "React.js", "Node.js", "Tailwind"] },
  { title: "Engineering Design", skills: ["SolidWorks", "Ansys", "AutoCAD", "MATLAB"] },
  { title: "Data & Tools", skills: ["MS Excel", "Power BI", "SQL", "Docker", "Git/GitHub"] },
  { title: "Professional", skills: ["Technical Documentation", "Problem Solving", "Leadership", "Communication"] }
];

// Research Papers Data (Placeholder - Update with your real papers)
// Research Papers & Innovation Data
const researchPapers = [
  {
    title: "Smart Off-Road ADAS for All-Terrain Vehicles",
    publication: "National Innovation Award - ISIE India (2nd Runner Up)",
    date: "2024",
    desc: "Designed a low-cost Advanced Driver Assistance System tailored for off-road vehicles. Integrated obstacle detection and safety alerts for defense and adventure applications.",
    link: "https://drive.google.com/drive/folders/1Ti_FUvjbjydwT5IClMlKZHboaupWPVJj?usp=drive_link"
  },
  {
    title: "Strategic Business Plan for Automotive Development",
    publication: "Best Business Plan Report - IKR 2024",
    date: "2024",
    desc: "Authored the winning business strategy report focusing on the manufacturing and market viability of custom go-kart braking systems.",
    link: "https://drive.google.com/drive/folders/1Ti_FUvjbjydwT5IClMlKZHboaupWPVJj?usp=drive_link"
  }
];

// Certificates Data
const certificates = [
  {
    title: "Machine Learning & Deep Learning Training",
    issuer: "NIT Goa",
    date: "2023",
    desc: "Comprehensive training program on core ML algorithms and Deep Learning neural networks."
  },
  {
    title: "Brakes Lead Appreciation Award",
    issuer: "HACKMIT",
    date: "2024",
    desc: "Recognized for exceptional leadership and technical contribution in the braking department."
  },
  {
    title: "2nd Runner Up - Business Plan",
    issuer: "ISIE India (IKR 2024)",
    date: "2024",
    desc: "Awarded for the best business plan report in the National Go-Karting Race."
  }
];

export default function Home() {
  const { scrollYProgress } = useScroll();
  // ... existing code ...

  const heroY = useTransform(scrollYProgress, [0, 0.2], [0, -50]);

  return (
    <main className="relative min-h-screen overflow-x-hidden">
      <SpaceBackground />
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-6 pt-20">
        <motion.div
          style={{ y: heroY }}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="relative z-10 text-center max-w-5xl"
        >
          {/* Avatar Ring */}
          <div className="mb-12 inline-block relative group">
            <div className="absolute inset-0 rounded-full bg-[conic-gradient(from_0deg,#8b5cf6,#60a5fa,#ec4899,#8b5cf6)] blur-[20px] opacity-70 animate-spin-slow" />
            <div className="relative w-40 h-40 rounded-full border-4 border-violet-500/50 bg-gradient-to-br from-[#1e1b4b] to-[#312e81] overflow-hidden flex items-center justify-center">
              <span className="text-7xl group-hover:scale-110 transition-transform duration-500">👩🏻‍💻</span>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <span className="inline-block px-4 py-2 rounded-full font-rajdhani text-sm tracking-widest bg-violet-500/20 border border-violet-500/40 text-violet-200 mb-6">
              ◆ COMPUTER SCIENCE UNDERGRADUATE
            </span>
            <h1 className="font-michroma text-5xl md:text-7xl lg:text-8xl font-bold mb-6 shimmer-text leading-tight">
              SOMYA VERMA
            </h1>
            <p className="font-rajdhani text-2xl md:text-3xl mb-4 tracking-wide text-violet-300">
              Full-Stack Developer & AI Enthusiast
            </p>
            <p className="font-rajdhani text-lg md:text-xl mb-12 max-w-3xl mx-auto text-slate-400">
              Building scalable web apps and intelligent systems. From crafting <b>React Native</b> apps to leading <b>National Go-Kart</b> teams.
            </p>

            <div className="flex flex-wrap gap-4 justify-center">
              <a href="#projects" className="px-8 py-4 rounded-full font-rajdhani font-semibold text-lg bg-gradient-to-br from-violet-600 to-indigo-600 text-white shadow-[0_10px_40px_rgba(139,92,246,0.4)] hover:scale-105 transition-transform">
                View Projects
              </a>
              <a href="/resume.html" className="px-8 py-4 rounded-full font-rajdhani font-semibold text-lg border-2 border-violet-500 text-violet-300 hover:bg-violet-500/10 hover:scale-105 transition-transform">
                View Resume
              </a>
            </div>

            <div className="mt-16 flex flex-wrap gap-4 justify-center">
              <a href="https://github.com/som2004-byte" target="_blank" className="bg-white/5 p-3 rounded-full hover:bg-white/10 transition-colors text-white border border-white/10">
                <Github size={24} />
              </a>
              <a href="https://www.linkedin.com/in/somya-verma21" target="_blank" className="bg-white/5 p-3 rounded-full hover:bg-white/10 transition-colors text-white border border-white/10">
                <Linkedin size={24} />
              </a>
              <a href="https://vercel.com/som2004-bytes-projects" target="_blank" className="bg-white/5 p-3 rounded-full hover:bg-white/10 transition-colors text-white border border-white/10 group">
                <Triangle size={24} className="group-hover:text-white fill-current" />
              </a>
              <a href="https://leetcode.com/u/som_2004/" target="_blank" className="bg-white/5 p-3 rounded-full hover:bg-white/10 transition-colors text-white border border-white/10">
                <Code2 size={24} />
              </a>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="relative py-32 px-6">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          {/* Experience Card */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="glass-effect rounded-3xl p-8 md:p-12 relative overflow-hidden">
              <h3 className="font-michroma text-2xl mb-8 text-white flex items-center gap-3">
                <Briefcase className="text-violet-400" /> Experience
              </h3>
              <div className="space-y-8">
                {experiences.map((exp, i) => (
                  <div key={i} className="relative pl-6 border-l-2 border-violet-500/30">
                    <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-violet-500" />
                    <h4 className="font-bold text-lg text-white">{exp.role}</h4>
                    <div className="text-violet-300 text-sm mb-2">{exp.company} • {exp.period}</div>
                    <p className="text-slate-400 text-sm">{exp.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="inline-block px-4 py-2 rounded-full font-rajdhani text-sm tracking-widest bg-blue-500/20 border border-blue-500/40 text-blue-300 mb-6">
              ◆ ABOUT ME
            </span>
            <h2 className="font-michroma text-4xl md:text-5xl font-bold mb-8 leading-tight text-slate-100">
              Engineering Innovation
            </h2>
            <p className="font-rajdhani text-lg md:text-xl leading-relaxed mb-6 text-slate-300">
              I am a <b>Computer Science Undergraduate at MIT-WPU</b>, combining code with engineering precision.
            </p>
            <p className="font-rajdhani text-lg leading-relaxed mb-8 text-slate-400">
              Beyond full-stack development, I have led technical teams in national competitions, securing <b>AIR 5th</b> in the Indian Karting Race as the <b>Brakes Department Head</b>. I thrive on solving complex problems, whether it's optimizing a React app or designing mechanical systems.
            </p>

            <div className="grid grid-cols-2 gap-4">
              {skillCategories.map((cat, i) => (
                <div key={i} className="bg-white/5 p-4 rounded-xl border border-white/5">
                  <h4 className="font-bold text-violet-300 mb-2 font-michroma text-sm">{cat.title}</h4>
                  <div className="flex flex-wrap gap-2">
                    {cat.skills.slice(0, 3).map(skill => (
                      <span key={skill} className="text-xs bg-white/10 px-2 py-1 rounded text-slate-300">{skill}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8">
              <a href="https://drive.google.com/drive/folders/1ws3o5efbsKWUattxtOik8OAa7t_426Ya?usp=drive_link" target="_blank" className="inline-flex items-center gap-2 text-violet-300 hover:text-white transition-colors border-b border-violet-500/30 hover:border-violet-500 pb-1 font-rajdhani">
                <FolderOpen size={18} /> View Technical Documents & Visualizations (Excel, Docs)
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Work */}
      <section id="projects" className="relative py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 rounded-full font-rajdhani text-sm tracking-widest bg-violet-500/20 border border-violet-500/40 text-violet-300 mb-6">
              ◆ PORTFOLIO
            </span>
            <h2 className="font-michroma text-4xl md:text-5xl font-bold text-slate-100">Featured Work</h2>
          </div>

          <div className="space-y-12">
            {projects.map((project, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="glass-effect rounded-3xl overflow-hidden hover:shadow-[0_0_40px_rgba(139,92,246,0.3)] transition-shadow duration-500"
              >
                <div className={`grid lg:grid-cols-2 ${i % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                  {/* Image Placeholder */}
                  <div className={`h-80 relative bg-gradient-to-br ${project.color} flex items-center justify-center ${i % 2 === 1 ? 'lg:order-2' : ''}`}>
                    <span className="text-9xl opacity-50">{project.icon}</span>
                  </div>

                  {/* Content */}
                  <div className={`p-12 flex flex-col justify-center ${i % 2 === 1 ? 'lg:order-1' : ''}`}>
                    <h3 className="font-michroma text-2xl font-bold mb-4 text-slate-100">{project.title}</h3>
                    <p className="font-rajdhani text-lg mb-6 text-slate-400">{project.description}</p>

                    <div className="flex flex-wrap gap-2 mb-8">
                      {project.tags.map(tag => (
                        <span key={tag} className="px-3 py-1 rounded-full font-rajdhani text-sm bg-white/10 text-indigo-300">
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="flex gap-4">
                      {project.links?.code && (
                        <a href={project.links.code} target="_blank" className="flex items-center text-sm font-bold text-slate-300 hover:text-white transition-colors">
                          <Github size={18} className="mr-2" /> Code
                        </a>
                      )}
                      {project.links?.demo && (
                        <a href={project.links.demo} target="_blank" className="flex items-center text-sm font-bold text-slate-300 hover:text-white transition-colors">
                          <ExternalLink size={18} className="mr-2" /> Live Demo
                        </a>
                      )}
                      {project.links?.report && (
                        <a href={project.links.report} target="_blank" className="flex items-center text-sm font-bold text-slate-300 hover:text-white transition-colors">
                          <FileText size={18} className="mr-2" /> View Report
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Research Papers Section */}
      <section className="relative py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 rounded-full font-rajdhani text-sm tracking-widest bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 mb-6">
              ◆ PUBICATIONS
            </span>
            <h2 className="font-michroma text-4xl md:text-5xl font-bold text-slate-100">Research & Innovations</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {researchPapers.map((paper, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="glass-effect p-8 rounded-2xl relative group hover:bg-white/5 transition-colors"
              >
                <div className="absolute top-0 right-0 p-6 opacity-20 text-emerald-400">
                  <FileText size={48} />
                </div>
                <div className="relative z-10">
                  <div className="text-emerald-400 font-rajdhani text-sm mb-2">{paper.publication} • {paper.date}</div>
                  <h3 className="font-michroma text-xl font-bold mb-4 text-slate-100 group-hover:text-emerald-300 transition-colors pr-12">
                    {paper.title}
                  </h3>
                  <p className="font-rajdhani text-slate-400 leading-relaxed mb-6">
                    {paper.desc}
                  </p>
                  <a href={paper.link} className="inline-flex items-center text-emerald-300 font-rajdhani font-semibold hover:text-emerald-200 transition-colors">
                    Read Paper <ExternalLink size={16} className="ml-2" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="relative py-32 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 rounded-full font-rajdhani text-sm tracking-widest bg-blue-500/20 border border-blue-500/40 text-blue-300 mb-6">
              ◆ ACADEMICS
            </span>
            <h2 className="font-michroma text-4xl md:text-5xl font-bold text-slate-100">Education</h2>
          </div>

          <div className="space-y-6">
            {education.map((edu, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="glass-effect p-8 rounded-2xl flex flex-col md:flex-row justify-between items-start md:items-center gap-4 hover:border-blue-500/30 transition-colors"
              >
                <div>
                  <h3 className="font-michroma text-xl font-bold text-slate-100 flex items-center gap-3">
                    <GraduationCap className="text-blue-400" /> {edu.school}
                  </h3>
                  <p className="font-rajdhani text-blue-300 mt-2">{edu.degree}</p>
                </div>
                <div className="text-right md:text-right w-full md:w-auto">
                  <div className="text-slate-400 font-rajdhani">{edu.year}</div>
                  <div className="text-emerald-400 font-bold font-rajdhani mt-1">{edu.grade}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Certificates Section */}
      <section className="relative py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 rounded-full font-rajdhani text-sm tracking-widest bg-amber-500/20 border border-amber-500/40 text-amber-300 mb-6">
              ◆ ACHIEVEMENTS
            </span>
            <h2 className="font-michroma text-4xl md:text-5xl font-bold text-slate-100">Certifications & Awards</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {certificates.map((cert, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="glass-effect p-8 rounded-2xl border-t-4 border-amber-500 relative hover:-translate-y-2 transition-transform"
              >
                <h3 className="font-michroma text-lg font-bold text-slate-100 mb-2 min-h-[3.5rem] flex items-center">{cert.title}</h3>
                <div className="text-amber-400 font-rajdhani text-sm font-bold mb-4">{cert.issuer} • {cert.date}</div>
                <p className="font-rajdhani text-slate-400 text-sm leading-relaxed">{cert.desc}</p>
              </motion.div>
            ))}
          </div>

          <div className="text-center">
            <a href="https://drive.google.com/drive/folders/1VkqmfJYGBvBGJ45pIOKpO9fq1LDTqEpl" target="_blank" className="inline-flex items-center px-8 py-3 rounded-full bg-amber-500/10 border border-amber-500/50 text-amber-300 hover:bg-amber-500/20 transition-colors font-bold tracking-wide">
              View All Certificates <ExternalLink size={16} className="ml-2" />
            </a>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative py-32 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="glass-effect rounded-3xl p-16 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-violet-500 via-pink-500 to-blue-500" />

            <span className="inline-block px-4 py-2 rounded-full font-rajdhani text-sm tracking-widest bg-violet-500/20 border border-violet-500/40 text-violet-300 mb-8">
              ◆ GET IN TOUCH
            </span>
            <h2 className="font-michroma text-4xl md:text-5xl font-bold mb-8 text-slate-100">Let's Connect</h2>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="p-6 rounded-2xl bg-white/5 border border-white/10 flex flex-col items-center justify-center gap-4">
                <div className="w-12 h-12 rounded-full bg-violet-500/20 flex items-center justify-center text-violet-400">
                  <Phone size={24} />
                </div>
                <div>
                  <div className="text-slate-400 text-sm font-rajdhani uppercase tracking-widest mb-1">Phone</div>
                  <div className="text-xl font-bold text-white">+91 9967698252</div>
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-white/5 border border-white/10 flex flex-col items-center justify-center gap-4">
                <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400">
                  <MapPin size={24} />
                </div>
                <div>
                  <div className="text-slate-400 text-sm font-rajdhani uppercase tracking-widest mb-1">Location</div>
                  <div className="text-xl font-bold text-white">Pune, Maharashtra, India</div>
                </div>
              </div>
            </div>

            <div className="flex gap-6 justify-center">
              <a href="mailto:somyaverma21@gmail.com" className="flex items-center gap-2 px-8 py-3 rounded-full bg-slate-100 text-slate-900 font-bold hover:scale-105 transition-transform">
                <Mail size={20} /> Email Me
              </a>
              <a href="https://www.linkedin.com/in/somyaverma21" target="_blank" className="flex items-center gap-2 px-8 py-3 rounded-full border border-slate-600 text-slate-300 font-bold hover:bg-white/5 transition-colors">
                <Linkedin size={20} /> LinkedIn
              </a>
              <a href="https://vercel.com/som2004-bytes-projects" target="_blank" className="flex items-center gap-2 px-8 py-3 rounded-full border border-slate-600 text-slate-300 font-bold hover:bg-white/5 transition-colors">
                <Triangle size={20} className="fill-current" /> Vercel
              </a>
              <a href="https://leetcode.com/u/som_2004/" target="_blank" className="flex items-center gap-2 px-8 py-3 rounded-full border border-slate-600 text-slate-300 font-bold hover:bg-white/5 transition-colors">
                <Code2 size={20} /> LeetCode
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative py-12 px-6 border-t border-violet-500/20 text-center">
        <p className="font-rajdhani text-slate-500">
          © {new Date().getFullYear()} Somya Verma. Built with ✦ using Next.js
        </p>
      </footer>

    </main >
  );
}
