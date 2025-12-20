import { projectsData } from "@/app/lib/projectData";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import Link from "next/link";
import { SiGithub } from "react-icons/si";
import { cn } from "@/app/lib/utils";
import { SiteHeader } from "@/app/components/layout/SiteHeader";
import { Card } from "@/app/components/ui/Card";
import { Badge } from "@/app/components/ui/Badge";
import { Alert } from "@/app/components/ui/Alert";
import { Button } from "@/app/components/ui/Button";
import { MarkdownRenderer } from "@/app/components/ui/MarkdownRenderer";

type Props = {
    params: Promise<{ slug: string }>;
};

export async function generateMetadata(props: Props): Promise<Metadata> {
    const params = await props.params;
    const project = projectsData.find((p) => p.slug === params.slug);
    if (!project) return { title: "Project Not Found" };
    return { title: `${project.title} | Jacob Hiney` };
}

export function generateStaticParams() {
    return projectsData.map((project) => ({
        slug: project.slug,
    }));
}

export default async function ProjectPage(props: Props) {
    const params = await props.params;
    const project = projectsData.find((p) => p.slug === params.slug);

    if (!project) {
        notFound();
    }

    return (
        <div className="min-h-screen pb-20 bg-plastic-light text-plastic-text font-sans">
            <SiteHeader />

            <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 space-y-8">
                {/* Navigation */}
                <Link
                    href="/#projects"
                    className="inline-flex items-center gap-2 text-sm font-bold text-gray-500 hover:text-[#2D2D2D] transition-colors"
                >
                    <span className="text-lg">←</span> RETURN TO SELECT
                </Link>

                {/* Hero / Header Card */}
                <Card className="bg-white">
                    <div className="flex flex-col md:flex-row gap-8 items-start">
                        {project.icon && (
                            <div className="p-4 bg-gray-100 rounded-2xl border-2 border-gray-200">
                                <project.icon className="w-16 h-16 text-[#2D2D2D]" />
                            </div>
                        )}
                        <div className="space-y-4 flex-1">
                            {project.status === 'construction' && (
                                <Alert variant="warning" title="Under Construction">
                                    I'm actively working on this project. Features and documentation may be incomplete.
                                </Alert>
                            )}
                            <div>
                                <h1 className="text-4xl md:text-5xl font-black italic tracking-tighter text-[#2D2D2D] mb-2">
                                    {project.title.toUpperCase()}
                                </h1>
                                <p className="text-xl text-[#525252] leading-relaxed">
                                    {project.description}
                                </p>
                            </div>

                            <div className="flex flex-wrap gap-2">
                                {project.stack.map((tech) => (
                                    <Badge key={tech.name} variant="default" className="flex items-center gap-1">
                                        <tech.icon className="w-3 h-3 opacity-50" />
                                        {tech.name}
                                    </Badge>
                                ))}
                            </div>

                            <div className="flex flex-wrap gap-4 pt-4 border-t border-gray-100 mt-6">
                                {project.repoUrl && (
                                    <a href={project.repoUrl} target="_blank" rel="noopener noreferrer">
                                        <Button variant="neutral" shape="pill" className="text-sm px-4 py-2 h-auto min-h-0">
                                            <div className="flex items-center gap-2">
                                                <SiGithub />
                                                GITHUB REPO
                                            </div>
                                        </Button>
                                    </a>
                                )}
                                {project.demoUrl && (
                                    <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                                        <Button variant="primary" shape="pill" className="text-sm px-4 py-2 h-auto min-h-0">
                                            DEMO
                                        </Button>
                                    </a>
                                )}
                            </div>
                        </div>
                    </div>
                </Card>

                {/* Gallery */}
                {project.screenshots && project.screenshots.length > 0 && (
                    <section>
                        <div className="flex items-end gap-4 mb-4 border-b-2 border-gray-300 pb-2">
                            <h2 className="text-2xl font-black italic text-[#2D2D2D]">
                                SCREENSHOTS
                            </h2>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {project.screenshots.map((src, idx) => (
                                <div key={idx} className="aspect-video bg-gray-200 rounded-xl overflow-hidden border-4 border-white shadow-md relative group">
                                    {/* Placeholder for actual image if src was real */}
                                    <div className="absolute inset-0 flex items-center justify-center text-gray-400 font-bold bg-gray-100 group-hover:bg-gray-50 transition-colors">
                                        SCREENSHOT {idx + 1}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>
                )}

                {/* The Story / Content */}
                <Card className="bg-white">
                    <div className="flex items-end gap-4 mb-6 border-b-2 border-gray-100 pb-2">
                        <h2 className="text-2xl font-black italic text-[#2D2D2D]">
                            ABOUT
                        </h2>
                    </div>
                    <MarkdownRenderer content={project.content} />
                </Card>
            </main>
        </div>
    );
}
