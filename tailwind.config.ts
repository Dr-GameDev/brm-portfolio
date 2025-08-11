// tailwind.config.ts
import type { Config } from "tailwindcss";

const config: any = {
    content: [
        "./src/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./pages/**/*.{js,ts,jsx,tsx,mdx}"
    ],
    safelist: [
        /* animation tokens (if you use them dynamically) */
        "animate-float",
        "animate-glow",
        "animate-pulse-red",
        "animate-scan",
        "animate-matrix",
        "animate-hologram",
        "animate-engine",
        "animate-cyber-pulse",

        /* custom utilities we created in globals.css */
        "perspective-1000",
        "perspective-2000",
        "transform-style-3d",
        "backface-hidden",
        "text-glow",
        "text-engine",
        "border-glow",
        "glass-crimson",
        "hologram-effect",
        "bg-grid-pattern",
        "bg-cyber-grid",
        "bg-engine-glow"
    ]
};

export default config;
