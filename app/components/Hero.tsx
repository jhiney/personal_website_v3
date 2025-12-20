"use client";

import { motion } from "framer-motion";
import { Spotlight } from "./ui/Spotlight";
import { Button } from "./ui/Button";


export function Hero() {
    return (
        <div className="w-full py-20 md:py-32 flex flex-col items-center justify-center text-center space-y-8 relative overflow-hidden">
            {/* Decorative Background Elements (Simple/Plastic) */}
            <div className="absolute inset-0 pointer-events-none opacity-50"
                style={{
                    backgroundImage: "radial-gradient(#9E9E9E 1px, transparent 1px)",
                    backgroundSize: "24px 24px"
                }}
            />

            <div className="relative z-10 space-y-8 max-w-4xl mx-auto px-4">
                <div className="space-y-2">

                    <h1 className="text-6xl md:text-8xl font-black italic tracking-tighter text-[#2D2D2D]">
                        JACOB HINEY
                    </h1>
                </div>

                <p className="text-[#525252] text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
                    Software & Data Engineering Lead @ <strong className="text-[#2D2D2D]">BlueForge Alliance</strong>.
                    <br />
                    Passionate about Products, People, and trying to learn something new every day.
                </p>

                <div className="flex gap-4 justify-center pt-4">
                    <a href="#projects">
                        <Button variant="primary" shape="pill" className="min-w-[140px]">
                            PROJECTS
                        </Button>
                    </a>
                    <a href="#contact">
                        <Button variant="neutral" shape="pill" className="min-w-[140px]">
                            CONTACT
                        </Button>
                    </a>
                </div>
            </div>
        </div>
    );
}
