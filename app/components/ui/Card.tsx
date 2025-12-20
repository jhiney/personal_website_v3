import * as React from "react"
import { cn } from "@/app/lib/utils";

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
    variant?: "default" | "feature"
    color?: "red" | "yellow" | "blue" | "green"
}

const Card = React.forwardRef<HTMLDivElement, CardProps>(
    ({ className, variant = "default", color, ...props }, ref) => {
        const borderColors = {
            red: "border-red-600",
            yellow: "border-yellow-400",
            blue: "border-blue-600",
            green: "border-green-600",
        }

        return (
            <div
                ref={ref}
                className={cn(
                    "plastic-card p-8",
                    variant === "feature" && [
                        "transform hover:-translate-y-2 border-t-8",
                        color && borderColors[color]
                    ],
                    className
                )}
                {...props}
            />
        )
    }
)
Card.displayName = "Card"

export { Card }
