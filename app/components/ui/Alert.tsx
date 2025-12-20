import * as React from "react"
import { cn } from "@/app/lib/utils";
import { Info, CheckCircle, AlertTriangle } from "lucide-react"

export interface AlertProps extends React.HTMLAttributes<HTMLDivElement> {
    variant?: "info" | "success" | "warning"
    title: string
}

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(
    ({ className, variant = "info", title, children, ...props }, ref) => {
        const variants = {
            info: "bg-blue-50 border-blue-600 text-blue-900",
            success: "bg-green-50 border-green-600 text-green-900",
            warning: "bg-yellow-50 border-yellow-400 text-yellow-900",
        }

        const icons = {
            info: <Info className="text-blue-600 shrink-0" />,
            success: <CheckCircle className="text-green-600 shrink-0" />,
            warning: <AlertTriangle className="text-yellow-600 shrink-0" />,
        }

        return (
            <div
                ref={ref}
                className={cn(
                    "border-l-4 p-4 rounded-r-xl shadow-sm flex gap-3",
                    variants[variant],
                    className
                )}
                {...props}
            >
                {icons[variant]}
                <div>
                    <h4 className="font-bold text-sm">{title}</h4>
                    <div className="text-xs mt-1 opacity-90">{children}</div>
                </div>
            </div>
        )
    }
)
Alert.displayName = "Alert"

export { Alert }
