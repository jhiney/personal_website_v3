import * as React from "react"
import { cn } from "@/app/lib/utils"

export interface ToggleProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label?: string
}

const Toggle = React.forwardRef<HTMLInputElement, ToggleProps>(
    ({ className, label, ...props }, ref) => {
        return (
            <label className={cn("inline-flex items-center cursor-pointer gap-3", className)}>
                <div className="relative">
                    <input type="checkbox" className="sr-only peer" ref={ref} {...props} />
                    {/* Track */}
                    <div className="w-14 h-8 bg-plastic-dark rounded-full peer-checked:bg-plastic-dark shadow-[inset_0_2px_4px_rgba(0,0,0,0.3)]" />
                    {/* Slider */}
                    <div className="absolute top-1 left-1 bg-plastic-light w-6 h-6 rounded-full transition-all peer-checked:translate-x-6 shadow-md border-b-2 border-gray-400 group-active:border-b-0" />
                </div>
                {label && <span className="font-bold text-plastic-subtext uppercase tracking-widest text-sm">{label}</span>}
            </label>
        )
    }
)
Toggle.displayName = "Toggle"

export { Toggle }
