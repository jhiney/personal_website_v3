
import React from 'react';
import ReactMarkdown from 'react-markdown';
import { cn } from "@/app/lib/utils";

interface MarkdownRendererProps {
    content: string;
    className?: string;
}

export function MarkdownRenderer({ content, className }: MarkdownRendererProps) {
    return (
        <div className={cn("space-y-4", className)}>
            <ReactMarkdown
                components={{
                    h1: ({ node, ...props }) => <h1 className="text-4xl md:text-5xl font-black italic tracking-tighter text-[#2D2D2D] mb-4" {...props} />,
                    h2: ({ node, ...props }) => <h2 className="text-2xl font-black italic text-[#2D2D2D] mt-8 mb-4 border-b-2 border-gray-100 pb-2" {...props} />,
                    h3: ({ node, ...props }) => <h3 className="text-xl font-bold italic text-[#2D2D2D] mt-6 mb-2" {...props} />,
                    p: ({ node, ...props }) => <p className="text-[#525252] leading-relaxed mb-4 text-base" {...props} />,
                    ul: ({ node, ...props }) => <ul className="list-disc pl-5 space-y-2 mb-4 text-[#525252]" {...props} />,
                    ol: ({ node, ...props }) => <ol className="list-decimal pl-5 space-y-2 mb-4 text-[#525252]" {...props} />,
                    li: ({ node, ...props }) => <li className="pl-1" {...props} />,
                    strong: ({ node, ...props }) => <strong className="font-bold text-[#2D2D2D]" {...props} />,
                    a: ({ node, ...props }) => <a className="text-blue-600 hover:underline font-medium" target="_blank" rel="noopener noreferrer" {...props} />,
                    blockquote: ({ node, ...props }) => <blockquote className="border-l-4 border-gray-300 pl-4 italic text-gray-600 my-4" {...props} />,
                    code: ({ node, ...props }) => <code className="bg-gray-100 text-[#2D2D2D] px-1 py-0.5 rounded font-mono text-sm" {...props} />,
                }}
            >
                {content}
            </ReactMarkdown>
        </div>
    );
}
