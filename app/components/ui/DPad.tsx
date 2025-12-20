import * as React from "react"
import { cn } from "@/app/lib/utils"

export interface DPadProps extends React.HTMLAttributes<HTMLDivElement> {
    onUp?: () => void
    onDown?: () => void
    onLeft?: () => void
    onRight?: () => void
}

const DPad = React.forwardRef<HTMLDivElement, DPadProps>(
    ({ className, onUp, onDown, onLeft, onRight, ...props }, ref) => {
        return (
            <div
                ref={ref}
                className={cn("relative w-32 h-32", className)}
                {...props}
            >
                {/* Cross vertical */}
                <div className="absolute left-1/2 top-0 bottom-0 w-10 -ml-5 bg-plastic-text rounded-md shadow-[inset_0_2px_4px_rgba(255,255,255,0.1)]" />
                {/* Cross horizontal */}
                <div className="absolute top-1/2 left-0 right-0 h-10 -mt-5 bg-plastic-text rounded-md shadow-[inset_0_2px_4px_rgba(255,255,255,0.1)]" />

                {/* Center divot */}
                <div className="absolute top-1/2 left-1/2 w-6 h-6 -ml-3 -mt-3 rounded-full bg-[#1a1a1a] opacity-50 pointer-events-none z-10 radial-gradient-center" />

                {/* Up Button */}
                <button
                    onClick={onUp}
                    className="absolute top-0 left-1/2 -ml-5 w-10 h-12 bg-transparent hover:bg-white/10 active:bg-black/20 rounded-t-md z-20 flex items-start justify-center pt-1"
                    aria-label="Up"
                >
                    <div className="w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-b-[8px] border-b-[#1a1a1a] opacity-50" />
                </button>

                {/* Down Button */}
                <button
                    onClick={onDown}
                    className="absolute bottom-0 left-1/2 -ml-5 w-10 h-12 bg-transparent hover:bg-white/10 active:bg-black/20 rounded-b-md z-20 flex items-end justify-center pb-1"
                    aria-label="Down"
                >
                    <div className="w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[8px] border-t-[#1a1a1a] opacity-50" />
                </button>

                {/* Left Button */}
                <button
                    onClick={onLeft}
                    className="absolute left-0 top-1/2 -mt-5 w-12 h-10 bg-transparent hover:bg-white/10 active:bg-black/20 rounded-l-md z-20 flex items-center justify-start pl-1"
                    aria-label="Left"
                >
                    <div className="w-0 h-0 border-t-[6px] border-t-transparent border-b-[6px] border-b-transparent border-r-[8px] border-r-[#1a1a1a] opacity-50" />
                </button>

                {/* Right Button */}
                <button
                    onClick={onRight}
                    className="absolute right-0 top-1/2 -mt-5 w-12 h-10 bg-transparent hover:bg-white/10 active:bg-black/20 rounded-r-md z-20 flex items-center justify-end pr-1"
                    aria-label="Right"
                >
                    <div className="w-0 h-0 border-t-[6px] border-t-transparent border-b-[6px] border-b-transparent border-l-[8px] border-l-[#1a1a1a] opacity-50" />
                </button>
            </div>
        )
    }
)
DPad.displayName = "DPad"

export { DPad }
