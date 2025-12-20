import * as React from "react"
import { ChevronRight } from "lucide-react"

export function Menu() {
    return (
        <div className="bg-[#2D2D2D] text-white rounded-[2rem] p-6 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-white opacity-5 rounded-full -mr-10 -mt-10 blur-2xl"></div>
            <h3 className="font-black italic text-lg mb-4 text-gray-200 border-b border-gray-700 pb-2">
                MENU SELECTION
            </h3>
            <ul className="space-y-2">
                {["1 PLAYER GAME", "2 PLAYER GAME", "OPTIONS"].map((item) => (
                    <li
                        key={item}
                        className="group flex items-center justify-between p-3 rounded-xl hover:bg-white hover:text-[#2D2D2D] transition cursor-pointer"
                    >
                        <span className="font-bold text-sm">{item}</span>
                        <ChevronRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </li>
                ))}
            </ul>
        </div>
    )
}
