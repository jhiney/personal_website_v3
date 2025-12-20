"use client";

import { motion } from "framer-motion";
import {
    SiTypescript,
    SiPython,
    SiDocker,
    SiAmazonwebservices,
    SiReact,
    SiSvelte,
    SiNodedotjs,
    SiPostgresql,
    SiGit,
    SiMongodb,
    SiApachespark,
    SiGo,
    SiNextdotjs,
    SiTailwindcss,
    SiFramer,
    SiRedis,
    SiVercel,
} from "react-icons/si";


export function About() {

    return (
        <section className="py-12 w-full relative overflow-hidden">
            <div className="max-w-4xl mx-auto px-4 mb-12 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="p-8 rounded-2xl bg-white/50 dark:bg-black/50 backdrop-blur-md border border-white/20 dark:border-white/10 shadow-xl"
                >
                    <div className="space-y-12">
                        <div className="space-y-4 text-center">
                            <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 dark:text-white">
                                About Me
                            </h2>
                            <p className="text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed">
                                As a hands-on Data & Software Engineering Team Lead, I lead a talented team of engineers in building and delivering high-impact, data-driven products. My role blends technical contribution with strategic leadership, allowing me to architect solutions, mentor engineers, and manage project delivery from concept to launch. I specialize in translating business objectives into user-centric software, ensuring our products are both powerful and intuitive.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {/* Frontend */}
                            <div className="space-y-4">
                                <h3 className="text-xl font-semibold text-zinc-900 dark:text-white border-b border-zinc-200 dark:border-zinc-800 pb-2">
                                    Frontend
                                </h3>
                                <div className="flex flex-wrap gap-3">
                                    {[
                                        { name: "React", icon: SiReact, color: "text-[var(--famicom-blue)]" },
                                        { name: "Next.js", icon: SiNextdotjs, color: "text-black dark:text-white" },
                                        { name: "Svelte", icon: SiSvelte, color: "text-[var(--famicom-red)]" },
                                        { name: "Tailwind", icon: SiTailwindcss, color: "text-[var(--famicom-blue)]" },
                                        { name: "Framer", icon: SiFramer, color: "text-[var(--famicom-red)]" },
                                        { name: "TypeScript", icon: SiTypescript, color: "text-[var(--famicom-blue)]" },
                                    ].map((skill) => (
                                        <div
                                            key={skill.name}
                                            className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white/50 dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800 hover:border-zinc-400 dark:hover:border-zinc-600 transition-colors group cursor-default"
                                        >
                                            <skill.icon className={`w-5 h-5 ${skill.color} transition-colors`} />
                                            <span className="text-sm font-medium text-zinc-700 dark:text-zinc-300">
                                                {skill.name}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Backend */}
                            <div className="space-y-4">
                                <h3 className="text-xl font-semibold text-zinc-900 dark:text-white border-b border-zinc-200 dark:border-zinc-800 pb-2">
                                    Backend
                                </h3>
                                <div className="flex flex-wrap gap-3">
                                    {[
                                        { name: "Node.js", icon: SiNodedotjs, color: "text-[var(--famicom-green)]" },
                                        { name: "Python", icon: SiPython, color: "text-[var(--famicom-yellow)]" },
                                        { name: "Go", icon: SiGo, color: "text-[var(--famicom-blue)]" },
                                    ].map((skill) => (
                                        <div
                                            key={skill.name}
                                            className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white/50 dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800 hover:border-zinc-400 dark:hover:border-zinc-600 transition-colors group cursor-default"
                                        >
                                            <skill.icon className={`w-5 h-5 ${skill.color} transition-colors`} />
                                            <span className="text-sm font-medium text-zinc-700 dark:text-zinc-300">
                                                {skill.name}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Data */}
                            <div className="space-y-4">
                                <h3 className="text-xl font-semibold text-zinc-900 dark:text-white border-b border-zinc-200 dark:border-zinc-800 pb-2">
                                    Data
                                </h3>
                                <div className="flex flex-wrap gap-3">
                                    {[
                                        { name: "PostgreSQL", icon: SiPostgresql, color: "text-[var(--famicom-blue)]" },
                                        { name: "MongoDB", icon: SiMongodb, color: "text-[var(--famicom-green)]" },
                                        { name: "Redis", icon: SiRedis, color: "text-[var(--famicom-red)]" },
                                        { name: "Spark", icon: SiApachespark, color: "text-[var(--famicom-yellow)]" },
                                    ].map((skill) => (
                                        <div
                                            key={skill.name}
                                            className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white/50 dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800 hover:border-zinc-400 dark:hover:border-zinc-600 transition-colors group cursor-default"
                                        >
                                            <skill.icon className={`w-5 h-5 ${skill.color} transition-colors`} />
                                            <span className="text-sm font-medium text-zinc-700 dark:text-zinc-300">
                                                {skill.name}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Tools */}
                            <div className="space-y-4">
                                <h3 className="text-xl font-semibold text-zinc-900 dark:text-white border-b border-zinc-200 dark:border-zinc-800 pb-2">
                                    Tools
                                </h3>
                                <div className="flex flex-wrap gap-3">
                                    {[
                                        { name: "Git", icon: SiGit, color: "text-[var(--famicom-red)]" },
                                        { name: "Docker", icon: SiDocker, color: "text-[var(--famicom-blue)]" },
                                        { name: "AWS", icon: SiAmazonwebservices, color: "text-[var(--famicom-yellow)]" },
                                        { name: "Vercel", icon: SiVercel, color: "text-black dark:text-white" },
                                    ].map((skill) => (
                                        <div
                                            key={skill.name}
                                            className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white/50 dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800 hover:border-zinc-400 dark:hover:border-zinc-600 transition-colors group cursor-default"
                                        >
                                            <skill.icon className={`w-5 h-5 ${skill.color} transition-colors`} />
                                            <span className="text-sm font-medium text-zinc-700 dark:text-zinc-300">
                                                {skill.name}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>

            {/* Gradient masks for smooth fade edges */}
            <div className="pointer-events-none absolute inset-y-0 left-0 w-1/6 bg-gradient-to-r from-white dark:from-black to-transparent z-20"></div>
            <div className="pointer-events-none absolute inset-y-0 right-0 w-1/6 bg-gradient-to-l from-white dark:from-black to-transparent z-20"></div>
        </section>
    );
}
