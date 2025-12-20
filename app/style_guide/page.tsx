import { Button } from "../components/ui/Button";
import { Card } from "../components/ui/Card";
import { Input } from "../components/ui/Input";
import { Checkbox } from "../components/ui/Checkbox";
import { Alert } from "../components/ui/Alert";
import { Badge } from "../components/ui/Badge";
import { DPad } from "../components/ui/DPad";
import { Toggle } from "../components/ui/Toggle";
import { Header } from "../components/layout/Header";
import { Menu } from "../components/layout/Menu";
import { Gamepad2, Plus, Zap, Layers, Star, Heart } from "lucide-react";

export default function Home() {
    return (
        <div className="min-h-screen pb-20 bg-plastic-light text-plastic-text font-sans">
            <Header />

            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 space-y-16">
                {/* 1. Color Palette Section */}
                <section>
                    <div className="flex items-end gap-4 mb-8 border-b-2 border-gray-300 pb-2">
                        <h2 className="text-4xl font-black italic text-[#2D2D2D]">
                            01. PALETTE
                        </h2>
                        <span className="text-gray-500 font-bold mb-1">
                            Plastic & Pigment
                        </span>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {/* Base Greys */}
                        <div className="space-y-2">
                            <div className="h-32 rounded-2xl bg-[#E2E2E2] shadow-md border border-white flex items-center justify-center text-gray-500 font-mono text-sm">
                                #E2E2E2
                            </div>
                            <div className="flex justify-between items-center px-2">
                                <span className="font-bold">Chassis Grey</span>
                                <span className="text-xs bg-gray-200 px-2 py-1 rounded">
                                    Base
                                </span>
                            </div>
                        </div>
                        <div className="space-y-2">
                            <div className="h-32 rounded-2xl bg-[#9E9E9E] shadow-inner flex items-center justify-center text-white font-mono text-sm">
                                #9E9E9E
                            </div>
                            <div className="flex justify-between items-center px-2">
                                <span className="font-bold">Faceplate Grey</span>
                                <span className="text-xs bg-gray-200 px-2 py-1 rounded">
                                    Accent
                                </span>
                            </div>
                        </div>
                        <div className="space-y-2">
                            <div className="h-32 rounded-2xl bg-[#2D2D2D] shadow-lg flex items-center justify-center text-gray-400 font-mono text-sm">
                                #2D2D2D
                            </div>
                            <div className="flex justify-between items-center px-2">
                                <span className="font-bold">D-Pad Black</span>
                                <span className="text-xs bg-gray-200 px-2 py-1 rounded">
                                    Text/UI
                                </span>
                            </div>
                        </div>
                        {/* The Rainbow */}
                        <div className="h-32 rounded-2xl bg-white p-4 shadow-sm grid grid-cols-2 gap-2">
                            <div className="bg-red-600 rounded-lg flex items-center justify-center text-[10px] text-white font-mono">
                                #DD2C00
                            </div>
                            <div className="bg-yellow-400 rounded-lg flex items-center justify-center text-[10px] text-black font-mono">
                                #FFD600
                            </div>
                            <div className="bg-blue-600 rounded-lg flex items-center justify-center text-[10px] text-white font-mono">
                                #2962FF
                            </div>
                            <div className="bg-green-600 rounded-lg flex items-center justify-center text-[10px] text-white font-mono">
                                #00C853
                            </div>
                        </div>
                    </div>
                </section>

                {/* 2. Typography Section */}
                <section>
                    <div className="flex items-end gap-4 mb-8 border-b-2 border-gray-300 pb-2">
                        <h2 className="text-4xl font-black italic text-[#2D2D2D]">
                            02. TYPOGRAPHY
                        </h2>
                        <span className="text-gray-500 font-bold mb-1">
                            Inter / Sans-Serif
                        </span>
                    </div>

                    <Card className="bg-white">
                        <div className="space-y-8">
                            <div>
                                <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">
                                    Display Header (Black Italic)
                                </p>
                                <h1 className="text-6xl font-black italic tracking-tighter text-[#2D2D2D]">
                                    SUPER POWER
                                </h1>
                            </div>
                            <div>
                                <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">
                                    Section Header (Bold)
                                </p>
                                <h2 className="text-3xl font-bold text-[#2D2D2D]">
                                    Controller Input Test
                                </h2>
                            </div>
                            <div className="grid md:grid-cols-2 gap-8">
                                <div>
                                    <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">
                                        Body Text
                                    </p>
                                    <p className="text-[#525252] leading-relaxed">
                                        The Super Famicom design language relies on soft curves and
                                        high readability. Use{" "}
                                        <strong className="text-[#2D2D2D]">bold weights</strong> for
                                        emphasis rather than color changes within body text. Keep
                                        line-heights loose to mimic the friendly nature of the
                                        console.
                                    </p>
                                </div>
                                <div>
                                    <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">
                                        Label / Meta
                                    </p>
                                    <div className="flex flex-col gap-2">
                                        <span className="text-xs font-bold text-gray-500 uppercase">
                                            PLAYER 1 START
                                        </span>
                                        <span className="text-sm font-medium text-gray-600">
                                            High Score: 50,000
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Card>
                </section>

                {/* 3. Button / Interactive Section */}
                <section>
                    <div className="flex items-end gap-4 mb-8 border-b-2 border-gray-300 pb-2">
                        <h2 className="text-4xl font-black italic text-[#2D2D2D]">
                            03. CONTROLS
                        </h2>
                        <span className="text-gray-500 font-bold mb-1">
                            Interactive Elements
                        </span>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-12">
                        {/* The Action Buttons */}
                        <div className="faceplate-zone p-10 flex flex-col items-center justify-center relative overflow-hidden">
                            <span className="absolute top-4 left-6 text-white/20 font-black text-6xl italic pointer-events-none">
                                INPUT
                            </span>

                            <div className="grid grid-cols-2 gap-6 p-4 rotate-12 transform">
                                {/* X Button (Blue) */}
                                <div className="flex flex-col items-center gap-2">
                                    <Button variant="primary" shape="round">
                                        <span className="text-blue-900 font-bold text-xl drop-shadow-sm opacity-50">
                                            X
                                        </span>
                                    </Button>
                                    <span className="text-white/60 font-bold text-xs">
                                        Primary
                                    </span>
                                </div>

                                {/* A Button (Red) */}
                                <div className="flex flex-col items-center gap-2 mt-8">
                                    <Button variant="danger" shape="round">
                                        <span className="text-red-900 font-bold text-xl drop-shadow-sm opacity-50">
                                            A
                                        </span>
                                    </Button>
                                    <span className="text-white/60 font-bold text-xs">
                                        Danger/Hot
                                    </span>
                                </div>

                                {/* Y Button (Green) */}
                                <div className="flex flex-col items-center gap-2 -mt-8">
                                    <Button variant="success" shape="round">
                                        <span className="text-green-900 font-bold text-xl drop-shadow-sm opacity-50">
                                            Y
                                        </span>
                                    </Button>
                                    <span className="text-white/60 font-bold text-xs">
                                        Success
                                    </span>
                                </div>

                                {/* B Button (Yellow) */}
                                <div className="flex flex-col items-center gap-2">
                                    <Button variant="warning" shape="round">
                                        <span className="text-yellow-700 font-bold text-xl drop-shadow-sm opacity-50">
                                            B
                                        </span>
                                    </Button>
                                    <span className="text-white/60 font-bold text-xs">
                                        Warning
                                    </span>
                                </div>
                            </div>
                        </div>

                        {/* Standard UI Elements */}
                        <div className="space-y-8">
                            {/* Standard Pills */}
                            <div>
                                <h3 className="text-lg font-bold mb-4">Functional Buttons</h3>
                                <div className="flex flex-wrap gap-4">
                                    <Button variant="neutral" shape="pill">
                                        SELECT
                                    </Button>
                                    <Button variant="neutral" shape="pill">
                                        START
                                    </Button>
                                    <Button variant="white">Default UI Action</Button>
                                </div>
                            </div>

                            {/* Colored Action Pills (Added) */}
                            <div>
                                <h3 className="text-lg font-bold mb-4">Action Pills</h3>
                                <div className="space-y-3">
                                    <Button variant="danger" shape="action">
                                        <span>DELETE / CANCEL</span>
                                        <span>(A)</span>
                                    </Button>
                                    <Button variant="warning" shape="action">
                                        <span>WARNING / BACK</span>
                                        <span>(B)</span>
                                    </Button>
                                    <Button variant="primary" shape="action">
                                        <span>SUBMIT DATA</span>
                                        <span>(X)</span>
                                    </Button>
                                    <Button variant="success" shape="action">
                                        <span>CONFIRM ENTRY</span>
                                        <span>(Y)</span>
                                    </Button>
                                </div>
                            </div>

                            {/* Form Inputs */}
                            <div>
                                <h3 className="text-lg font-bold mb-4">Input Fields</h3>
                                <Card className="p-6 bg-white space-y-4">
                                    <div>
                                        <label className="block text-xs font-bold text-gray-500 uppercase mb-1">
                                            Player Name
                                        </label>
                                        <Input type="text" placeholder="ENTER NAME" />
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <Checkbox id="chk1" />
                                        <label htmlFor="chk1" className="font-medium text-gray-600">
                                            Remember Settings
                                        </label>
                                    </div>
                                </Card>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 4. Components Section */}
                <section>
                    <div className="flex items-end gap-4 mb-8 border-b-2 border-gray-300 pb-2">
                        <h2 className="text-4xl font-black italic text-[#2D2D2D]">
                            04. COMPONENTS
                        </h2>
                        <span className="text-gray-500 font-bold mb-1">Cards & Alerts</span>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* Product/Feature Card */}
                        <div className="bg-white rounded-[2rem] p-2 shadow-xl border border-gray-100">
                            <div className="bg-gray-100 rounded-[1.5rem] h-48 flex items-center justify-center mb-4 relative overflow-hidden group">
                                {/* Icon */}
                                <Gamepad2 className="w-16 h-16 text-gray-300 group-hover:scale-110 transition duration-300" />
                                {/* Badge */}
                                <Badge
                                    variant="hot"
                                    className="absolute top-4 right-4 uppercase"
                                >
                                    Hot
                                </Badge>
                            </div>
                            <div className="px-4 pb-4">
                                <h3 className="font-black italic text-xl text-gray-800 mb-1">
                                    SUPER COMPONENT
                                </h3>
                                <p className="text-sm text-gray-500 leading-snug mb-4">
                                    A standard card container with rounded corners (2rem) and soft
                                    shadows.
                                </p>
                                <div className="flex justify-between items-center">
                                    <span className="font-bold text-xl text-gray-800">
                                        $19.99
                                    </span>
                                    <button className="bg-blue-600 hover:bg-blue-500 text-white p-2 rounded-full shadow-lg transition">
                                        <Plus className="w-5 h-5" />
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* Alert Variations */}
                        <div className="space-y-4">
                            <Alert variant="info" title="System Update">
                                New levels available for download.
                            </Alert>
                            <Alert variant="success" title="Save Complete">
                                Your progress has been recorded.
                            </Alert>
                            <Alert variant="warning" title="Low Battery">
                                Please connect charger soon.
                            </Alert>
                        </div>

                        {/* Nav/List Component */}
                        <Menu />
                    </div>

                    {/* Colored Feature Cards (Added) */}
                    <div className="mt-16">
                        <h3 className="text-lg font-bold mb-8">Feature Cards (Colored)</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {/* Card 1: Green/Y */}
                            <Card variant="feature" color="green">
                                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4 text-green-600">
                                    <Zap className="w-6 h-6" />
                                </div>
                                <h3 className="text-xl font-bold mb-2">Turbo Speed</h3>
                                <p className="text-gray-600 text-sm leading-snug">
                                    Optimized for high performance rendering and quick load times.
                                </p>
                            </Card>

                            {/* Card 2: Blue/X */}
                            <Card variant="feature" color="blue">
                                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4 text-blue-600">
                                    <Layers className="w-6 h-6" />
                                </div>
                                <h3 className="text-xl font-bold mb-2">Multi-Layer</h3>
                                <p className="text-gray-600 text-sm leading-snug">
                                    Stackable components that fit together perfectly.
                                </p>
                            </Card>

                            {/* Card 3: Yellow/B */}
                            <Card variant="feature" color="yellow">
                                <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mb-4 text-yellow-600">
                                    <Star className="w-6 h-6" />
                                </div>
                                <h3 className="text-xl font-bold mb-2">Star Power</h3>
                                <p className="text-gray-600 text-sm leading-snug">
                                    Highlight your best content with our "B-Button" yellow
                                    accents.
                                </p>
                            </Card>

                            {/* Card 4: Red/A */}
                            <Card variant="feature" color="red">
                                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mb-4 text-red-600">
                                    <Heart className="w-6 h-6" />
                                </div>
                                <h3 className="text-xl font-bold mb-2">User Love</h3>
                                <p className="text-gray-600 text-sm leading-snug">
                                    Designed with user experience as the primary directive.
                                </p>
                            </Card>
                        </div>
                    </div>
                </section>

                {/* 5. New Controller Inputs Section */}
                <section>
                    <div className="flex items-end gap-4 mb-8 border-b-2 border-gray-300 pb-2">
                        <h2 className="text-4xl font-black italic text-[#2D2D2D]">
                            05. INPUTS
                        </h2>
                        <span className="text-gray-500 font-bold mb-1">
                            extended controls
                        </span>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-12">
                        {/* D-Pad and Toggles */}
                        <div className="space-y-12">
                            <div className="flex flex-col gap-6">
                                <h3 className="text-2xl font-bold text-gray-700">Directional Control</h3>
                                <div className="bg-gray-100 p-12 rounded-3xl flex items-center justify-center shadow-inner">
                                    <DPad />
                                </div>
                            </div>

                            <div className="flex flex-col gap-6">
                                <h3 className="text-2xl font-bold text-gray-700">System Power</h3>
                                <div className="bg-gray-100 p-8 rounded-3xl flex items-center justify-start gap-12 shadow-inner">
                                    <Toggle label="Power" defaultChecked />
                                    <Toggle label="Turbo" />
                                </div>
                            </div>
                        </div>

                        {/* Shoulder and Menu Buttons */}
                        <div className="space-y-12">
                            <div className="flex flex-col gap-6">
                                <h3 className="text-2xl font-bold text-gray-700">Shoulder Buttons</h3>
                                <div className="bg-gray-100 p-8 rounded-3xl flex items-center justify-between gap-4 shadow-inner">
                                    <Button shape="shoulder" variant="neutral">L</Button>
                                    <div className="h-10 border-l-2 border-gray-300 mx-4"></div>
                                    <Button shape="shoulder" variant="neutral">R</Button>
                                </div>
                            </div>

                            <div className="flex flex-col gap-6">
                                <h3 className="text-2xl font-bold text-gray-700">Menu Actions</h3>
                                <div className="bg-gray-100 p-12 rounded-3xl flex items-center justify-center gap-8 shadow-inner">
                                    <div className="flex flex-col items-center gap-1">
                                        <Button shape="start-select" variant="neutral" />
                                        <span className="text-xs font-bold text-gray-400 uppercase tracking-widest -rotate-12 mt-2">Select</span>
                                    </div>
                                    <div className="flex flex-col items-center gap-1">
                                        <Button shape="start-select" variant="neutral" />
                                        <span className="text-xs font-bold text-gray-400 uppercase tracking-widest -rotate-12 mt-2">Start</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <footer className="mt-20 border-t border-gray-300 py-10 text-center">
                <p className="text-gray-500 font-medium">SUPER FAMICOM DESIGN SYSTEM</p>
            </footer>
        </div>
    );
}
