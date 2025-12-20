import { Card } from "./ui/Card";
import { Badge } from "./ui/Badge";
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
    SiGo,
    SiNextdotjs,
    SiTailwindcss,
    SiVercel,
    SiPalantir,
    SiOpenai,
    SiAnthropic,
    SiGooglegemini,
    SiPerplexity,
    SiMeta,
    SiGithubcopilot,
    SiGoogle,
    SiDigitalocean,
    SiGithub,
    SiGitlab,
    SiPocketbase
} from "react-icons/si";

export function Skills() {
    return (
        <section className="py-20 w-full px-4">
            <div className="max-w-6xl mx-auto space-y-12">
                <div className="flex items-end gap-4 mb-8 border-b-2 border-gray-300 pb-2">
                    <h2 className="text-4xl font-black italic text-[#2D2D2D]">
                        TOOLS, LANGUAGES & FRAMEWORKS
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Frontend */}
                    <Card className="bg-white">
                        <h3 className="text-lg font-black italic text-[#2D2D2D] mb-6 border-b-2 border-zinc-100 pb-2">
                            FRONTEND ARCHITECTURE
                        </h3>
                        <div className="flex flex-wrap gap-3">
                            {[
                                { name: "React", icon: SiReact },
                                { name: "Next.js", icon: SiNextdotjs },
                                { name: "Svelte", icon: SiSvelte },
                                { name: "Tailwind", icon: SiTailwindcss },
                                { name: "TypeScript", icon: SiTypescript },
                            ].map((skill) => (
                                <Badge key={skill.name} variant="default" className="flex items-center gap-2 pl-2">
                                    <skill.icon className="w-4 h-4 opacity-50" />
                                    {skill.name}
                                </Badge>
                            ))}
                        </div>
                    </Card>

                    {/* Backend */}
                    <Card className="bg-white">
                        <h3 className="text-lg font-black italic text-[#2D2D2D] mb-6 border-b-2 border-zinc-100 pb-2">
                            BACKEND SYSTEMS
                        </h3>
                        <div className="flex flex-wrap gap-3">
                            {[
                                { name: "Node.js", icon: SiNodedotjs },
                                { name: "Python", icon: SiPython },
                                { name: "Go", icon: SiGo },
                                { name: "PocketBase", icon: SiPocketbase },
                            ].map((skill) => (
                                <Badge key={skill.name} variant="default" className="flex items-center gap-2 pl-2">
                                    <skill.icon className="w-4 h-4 opacity-50" />
                                    {skill.name}
                                </Badge>
                            ))}
                        </div>
                    </Card>

                    {/* Data */}
                    <Card className="bg-white">
                        <h3 className="text-lg font-black italic text-[#2D2D2D] mb-6 border-b-2 border-zinc-100 pb-2">
                            DATA PERSISTENCE
                        </h3>
                        <div className="flex flex-wrap gap-3">
                            {[
                                { name: "PostgreSQL", icon: SiPostgresql },
                                { name: "MongoDB", icon: SiMongodb },
                            ].map((skill) => (
                                <Badge key={skill.name} variant="default" className="flex items-center gap-2 pl-2">
                                    <skill.icon className="w-4 h-4 opacity-50" />
                                    {skill.name}
                                </Badge>
                            ))}
                        </div>
                    </Card>

                    {/* Tools */}
                    <Card className="bg-white">
                        <h3 className="text-lg font-black italic text-[#2D2D2D] mb-6 border-b-2 border-zinc-100 pb-2">
                            DEPLOYMENT / OPS
                        </h3>
                        <div className="flex flex-wrap gap-3">
                            {[
                                { name: "Git", icon: SiGit },
                                { name: "Docker", icon: SiDocker },
                                { name: "AWS", icon: SiAmazonwebservices },
                                { name: "Vercel", icon: SiVercel },
                                { name: "Palantir", icon: SiPalantir },
                                { name: "Digital Ocean", icon: SiDigitalocean },
                                { name: "Github", icon: SiGithub },
                                { name: "Gitlab", icon: SiGitlab },
                            ].map((skill) => (
                                <Badge key={skill.name} variant="default" className="flex items-center gap-2 pl-2">
                                    <skill.icon className="w-4 h-4 opacity-50" />
                                    {skill.name}
                                </Badge>
                            ))}
                        </div>
                    </Card>
                </div>

                {/* AI Tools */}
                <div className="flex justify-center">
                    <Card className="bg-white w-full md:w-1/2">
                        <h3 className="text-lg font-black italic text-[#2D2D2D] mb-6 border-b-2 border-zinc-100 pb-2">
                            AI TOOLS
                        </h3>
                        <div className="flex flex-wrap gap-3">
                            {[
                                { name: "ChatGPT", icon: SiOpenai },
                                { name: "Claude", icon: SiAnthropic },
                                { name: "Gemini", icon: SiGooglegemini },
                                { name: "Perplexity", icon: SiPerplexity },
                                { name: "Llama", icon: SiMeta },
                                { name: "Github Copilot", icon: SiGithubcopilot },
                                { name: "Claude Code", icon: SiAnthropic },
                                { name: "Google Antigravity", icon: SiGoogle },
                            ].map((skill) => (
                                <Badge key={skill.name} variant="default" className="flex items-center gap-2 pl-2">
                                    <skill.icon className="w-4 h-4 opacity-50" />
                                    {skill.name}
                                </Badge>
                            ))}
                        </div>
                    </Card>
                </div>
            </div>
        </section>
    );
}
