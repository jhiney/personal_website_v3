"use client";

import { Card } from "./ui/Card";
import { Badge } from "./ui/Badge";
import Link from "next/link";
import { SiSvelte, SiNodedotjs, SiPython, SiNextdotjs, SiTailwindcss, SiFramer, SiReact, SiTypescript } from "react-icons/si";
import { TbBrandSocketIo } from "react-icons/tb";

const projects = [
    {
        title: "tickertron v2",
        brief: "Real-time financial dashboard",
        description: "If modern financial data was available on a Pip-Boy.",
        stack: [
            { name: "SvelteKit", icon: SiSvelte },
            { name: "Node.js", icon: SiNodedotjs }
        ],
        demo: "https://thisdoesnot.work.com",
        github: "https://github.com/jhiney/tickertron_v2",
        color: "blue" as const,
        button: "X",
        slug: "tickertron-v2",
        href: "/projects/tickertron-v2",
        status: "construction"
    },
    {
        title: "Famicom Design System",
        brief: "Component Library",
        description: "A custom design system inspired by the Super Nintendo Entertainment System. Includes a full-ish suite of reusable components.",
        stack: [
            { name: "React", icon: SiReact },
            { name: "Tailwind", icon: SiTailwindcss },
            { name: "TypeScript", icon: SiTypescript },
        ],
        demo: "/style_guide",
        github: "#",
        color: "red" as const,
        button: "A",
        slug: "famicom-design-system",
        href: "/projects/famicom-design-system"
    },
    {
        title: "Personal Website v3",
        brief: "Next.js Portfolio",
        description: "The website you are looking at right now. Built with Next.js, Tailwind, and my Famicon Design System.",
        stack: [
            { name: "Next.js", icon: SiNextdotjs },
            { name: "Tailwind", icon: SiTailwindcss },
            { name: "Famicom Design System", icon: SiReact },
        ],
        demo: "#",
        github: "#",
        color: "green" as const,
        button: "Y",
        slug: "personal-website-v3",
        href: "/projects/personal-website-v3"
    },
    {
        title: "Shopify Inventory Monitor",
        brief: "Automated monitoring tool",
        description: "Python script to monitor various websites for new inventory and send notifications.",
        stack: [
            { name: "Python", icon: SiPython },
        ],
        demo: "#",
        github: "https://github.com/jhiney/inventory_monitor",
        color: "yellow" as const,
        button: "B",
        slug: "inventory-monitor",
        href: "/projects/inventory-monitor"
    },
];

export function Projects() {
    return (
        <section id="projects" className="py-20 px-4">
            <div className="max-w-7xl mx-auto space-y-12">

                <div className="flex items-end gap-4 mb-8 border-b-2 border-gray-300 pb-2">
                    <h2 className="text-4xl font-black italic text-[#2D2D2D]">
                        SELECTED PROJECTS
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {projects.map((project, idx) => (
                        <div key={idx} className="relative group">
                            <Link href={project.href} className="block">
                                <Card variant="feature" color={project.color} className="h-full hover:cursor-pointer transition-transform duration-200">
                                    <div className="flex justify-between items-start mb-4">
                                        <div className="flex gap-2">
                                            <Badge variant="default">{project.brief}</Badge>
                                            {project.status === 'construction' && (
                                                <Badge variant="hot" className="bg-yellow-400 text-black">CONSTRUCTION</Badge>
                                            )}
                                        </div>
                                        <div className={`w-8 h-8 rounded-full flex items-center justify-center text-white font-bold shadow-md
                                            ${project.color === 'blue' ? 'bg-blue-600' :
                                                project.color === 'red' ? 'bg-red-600' :
                                                    project.color === 'green' ? 'bg-green-600' :
                                                        'bg-yellow-500 text-black'}
                                        `}>
                                            {project.button}
                                        </div>
                                    </div>

                                    <h3 className="text-2xl font-black italic text-[#2D2D2D] mb-2">
                                        {project.title.toUpperCase()}
                                    </h3>

                                    <p className="text-gray-600 mb-6 min-h-[3rem]">
                                        {project.description}
                                    </p>

                                    <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-gray-100">
                                        {project.stack.map((tech) => (
                                            <div key={tech.name} className="flex items-center gap-1 text-xs font-bold text-gray-400 uppercase">
                                                <tech.icon className="w-3 h-3" />
                                                {tech.name}
                                            </div>
                                        ))}
                                    </div>
                                </Card>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </section >
    );
}
