import * as React from "react"
import { Checkbox } from "@/app/components/ui/Checkbox"

export function Header() {
    return (
        <header className="bg-[#2D2D2D] text-white py-6 sticky top-0 z-50 border-b-4 border-gray-600 shadow-lg">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
                <div className="flex items-center gap-3">
                    <div className="flex gap-1 transform -skew-x-12">
                        <div className="w-3 h-8 bg-red-500 rounded-sm"></div>
                        <div className="w-3 h-8 bg-yellow-400 rounded-sm"></div>
                        <div className="w-3 h-8 bg-blue-500 rounded-sm"></div>
                        <div className="w-3 h-8 bg-green-500 rounded-sm"></div>
                    </div>
                    <div>
                        <h1 className="text-2xl font-black italic tracking-tighter leading-none">
                            SUPER<span className="font-light text-gray-400">FAMICOM</span>
                        </h1>
                        <span className="text-[10px] text-gray-400 tracking-widest font-bold uppercase block pl-1">
                            Design System v1.0
                        </span>
                    </div>
                </div>

                {/* Power Switch UI */}
                <div className="hidden md:flex items-center gap-3 bg-gray-800 px-4 py-2 rounded-lg border border-gray-700">
                    <span className="text-xs font-bold text-gray-400 uppercase">
                        Power
                    </span>
                    <Checkbox variant="switch" id="power-toggle" />
                </div>
            </div>
        </header>
    )
}
