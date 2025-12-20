import * as React from "react"
import { cn } from "@/app/lib/utils"

export interface CheckboxProps
    extends React.InputHTMLAttributes<HTMLInputElement> {
    variant?: "default" | "switch"
}

const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
    ({ className, variant = "default", id, ...props }, ref) => {
        const generatedId = React.useId()
        const inputId = id || generatedId

        if (variant === "switch") {
            return (
                <div className="relative inline-block w-12 mr-2 align-middle select-none transition duration-200 ease-in">
                    <input
                        type="checkbox"
                        id={inputId}
                        className={cn(
                            "toggle-checkbox absolute block w-6 h-6 rounded-full bg-red-600 border-4 border-[#2D2D2D] appearance-none cursor-pointer transition-all duration-300 left-0 checked:left-[100%] checked:-translate-x-full",
                            className
                        )}
                        ref={ref}
                        {...props}
                    />
                    <label
                        htmlFor={inputId}
                        className="toggle-label block overflow-hidden h-6 rounded-full bg-gray-900 cursor-pointer border border-gray-600"
                    ></label>
                </div>
            )
        }

        return (
            <input
                type="checkbox"
                id={inputId}
                className={cn(
                    "w-6 h-6 rounded text-red-600 focus:ring-red-500 border-gray-300 bg-gray-100",
                    className
                )}
                ref={ref}
                {...props}
            />
        )
    }
)
Checkbox.displayName = "Checkbox"

export { Checkbox }
