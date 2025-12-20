
import Link from "next/link";
import { SiGithub } from "react-icons/si";

export function SiteHeader() {
    return (
        <header className="bg-[#2D2D2D] text-white py-4 sticky top-0 z-50 border-b-4 border-gray-600 shadow-lg">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
                <Link href="/" className="hover:opacity-80 transition-opacity group">
                    <div className="flex items-center gap-3">
                        <div className="flex gap-1 transform -skew-x-12 opacity-80 group-hover:opacity-100 transition-opacity">
                            <div className="w-2 h-6 bg-red-500 rounded-sm"></div>
                            <div className="w-2 h-6 bg-yellow-400 rounded-sm"></div>
                            <div className="w-2 h-6 bg-blue-500 rounded-sm"></div>
                            <div className="w-2 h-6 bg-green-500 rounded-sm"></div>
                        </div>
                        <div>
                            <h1 className="text-xl font-black italic tracking-tighter leading-none">
                                JACOB<span className="font-light text-gray-400">HINEY</span>
                            </h1>
                        </div>
                    </div>
                </Link>

                <nav className="flex items-center gap-6">
                    <Link href="/#projects" className="text-sm font-bold text-gray-300 hover:text-white transition-colors uppercase tracking-wide">
                        Projects
                    </Link>
                    <Link href="/#contact" className="text-sm font-bold text-gray-300 hover:text-white transition-colors uppercase tracking-wide">
                        Contact
                    </Link>
                    <a
                        href="https://github.com/jhiney"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-300 hover:text-white transition-colors"
                    >
                        <SiGithub className="w-5 h-5" />
                    </a>
                </nav>
            </div>
        </header>
    );
}
