import * as React from "react"
import { cn } from "@/app/lib/utils"

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
    variant?: "hot" | "new" | "default"
}

const Badge = React.forwardRef<HTMLSpanElement, BadgeProps>(
    ({ className, variant = "default", ...props }, ref) => {
        const variants = {
            hot: "bg-red-600 text-white",
            new: "bg-blue-600 text-white",
            default: "bg-gray-200 text-gray-800",
        }

        return (
            <span
                ref={ref}
                className={cn(
                    "text-xs font-bold px-3 py-1 rounded-full shadow-md",
                    variants[variant],
                    className
                )}
                {...props}
            />
        )
    }
)
Badge.displayName = "Badge"

export { Badge }
