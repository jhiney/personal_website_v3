import * as React from "react"
import { cn } from "@/app/lib/utils"

export interface InputProps
    extends React.InputHTMLAttributes<HTMLInputElement> { }

const Input = React.forwardRef<HTMLInputElement, InputProps>(
    ({ className, type, ...props }, ref) => {
        return (
            <input
                type={type}
                className={cn(
                    "w-full bg-[#f0f0f0] border-2 border-gray-300 rounded-lg px-4 py-3 font-bold text-gray-700 focus:outline-none focus:border-blue-500 focus:bg-white transition shadow-inner placeholder-gray-400",
                    className
                )}
                ref={ref}
                {...props}
            />
        )
    }
)
Input.displayName = "Input"

export { Input }
