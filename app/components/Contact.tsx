"use client";

import { Button } from "./ui/Button";
import { SiGithub, SiLinkedin } from "react-icons/si";

export function Contact() {
    return (
        <section id="contact" className="py-20 px-4">
            <div className="max-w-2xl mx-auto text-center space-y-8">
                <div className="flex items-center justify-center gap-4 mb-4">
                    <span className="h-[2px] w-12 bg-gray-300"></span>
                    <h2 className="text-4xl font-black italic text-[#2D2D2D]">
                        GAME OVER
                    </h2>
                    <span className="h-[2px] w-12 bg-gray-300"></span>
                </div>

                <p className="text-[#525252] text-lg">
                    Connect with me.
                </p>

                <div className="flex justify-center gap-8">
                    <a
                        href="https://github.com/jhiney"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex flex-col items-center gap-2 group"
                    >
                        <Button shape="round" variant="neutral" className="group-hover:scale-110 transition-transform duration-200">
                            <SiGithub className="w-6 h-6 text-white" />
                        </Button>
                        <span className="text-xs font-bold text-gray-400 uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
                            GitHub
                        </span>
                    </a>

                    <a
                        href="https://www.linkedin.com/in/jhiney"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex flex-col items-center gap-2 group"
                    >
                        <Button shape="round" variant="neutral" className="group-hover:scale-110 transition-transform duration-200">
                            <SiLinkedin className="w-6 h-6 text-white" />
                        </Button>
                        <span className="text-xs font-bold text-gray-400 uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
                            LinkedIn
                        </span>
                    </a>
                </div>
            </div>
        </section>
    );
}
