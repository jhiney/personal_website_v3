import * as React from "react"
import { cn } from "@/app/lib/utils"
import { ChevronRight } from "lucide-react"

export function Menu({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
    const items = [
        { label: "New Game", active: true },
        { label: "Continue", active: false },
        { label: "Options", active: false },
    ]

    return (
        <div className={cn("bg-zinc-900 p-4 rounded-xl border-4 border-zinc-700 shadow-xl max-w-xs w-full", className)} {...props}>
            <ul className="space-y-1">
                {items.map((item, idx) => (
                    <li
                        key={idx}
                        className={cn(
                            "group flex items-center justify-between px-4 py-3 rounded-lg cursor-pointer transition-all",
                            item.active
                                ? "bg-red-600 text-white shadow-md transform scale-105 font-bold"
                                : "text-zinc-400 hover:bg-zinc-800 hover:text-white"
                        )}
                    >
                        <span>{item.label}</span>
                        {item.active && <ChevronRight className="w-5 h-5 animate-pulse" />}
                    </li>
                ))}
            </ul>
        </div>
    )
}
