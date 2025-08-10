import { type Config } from "tailwindcss";

export default {
    content: ["./src/**/*.tsx"],
    theme: {
        extend: {
            colors: {
                // Futuristic Red Theme
                crimson: {
                    black: '#0a0a0a',
                    dark: '#1a0505',
                    red: '#ff0040',
                    bright: '#ff4060',
                    neon: '#ff6b8a',
                    gray: '#808080',
                    white: '#ffffff',
                },
                // Electric accents
                electric: {
                    blue: '#00d4ff',
                    purple: '#8000ff',
                    green: '#00ff80',
                    yellow: '#ffff00',
                },
            },
            fontFamily: {
                sans: ["Orbitron", "Inter", "system-ui", "sans-serif"],
                mono: ["JetBrains Mono", "Courier New", "monospace"],
                display: ["Exo", "Arial Black", "sans-serif"],
            },
            animation: {
                "float": "float 6s ease-in-out infinite",
                "glow": "glow 2s ease-in-out infinite alternate",
                "pulse-red": "pulse-red 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
                "scan": "scan 2s linear infinite",
                "matrix": "matrix 20s linear infinite",
                "hologram": "hologram 3s ease-in-out infinite",
                "engine": "engine 1s ease-in-out infinite alternate",
                "cyber-pulse": "cyber-pulse 1.5s ease-in-out infinite",
            },
            keyframes: {
                float: {
                    "0%, 100%": {
                        transform: "translateY(0px) rotateX(0deg) rotateY(0deg)"
                    },
                    "50%": {
                        transform: "translateY(-20px) rotateX(10deg) rotateY(5deg)"
                    },
                },
                glow: {
                    from: {
                        boxShadow: "0 0 20px rgba(255, 0, 64, 0.5), inset 0 0 20px rgba(255, 0, 64, 0.1)"
                    },
                    to: {
                        boxShadow: "0 0 40px rgba(255, 0, 64, 0.8), inset 0 0 30px rgba(255, 0, 64, 0.3)"
                    },
                },
                "pulse-red": {
                    "0%, 100%": {
                        opacity: "1",
                        transform: "scale(1)",
                    },
                    "50%": {
                        opacity: "0.8",
                        transform: "scale(1.05)",
                    },
                },
                scan: {
                    "0%": { transform: "translateX(-100%)" },
                    "100%": { transform: "translateX(100%)" },
                },
                matrix: {
                    "0%": { transform: "translateY(-100%)" },
                    "100%": { transform: "translateY(100vh)" },
                },
                hologram: {
                    "0%, 100%": {
                        opacity: "0.8",
                        filter: "hue-rotate(0deg)",
                    },
                    "50%": {
                        opacity: "1",
                        filter: "hue-rotate(90deg)",
                    },
                },
                engine: {
                    from: {
                        textShadow: "0 0 10px rgba(255, 0, 64, 0.8), 0 0 20px rgba(255, 0, 64, 0.6)"
                    },
                    to: {
                        textShadow: "0 0 20px rgba(255, 0, 64, 1), 0 0 40px rgba(255, 0, 64, 0.8)"
                    },
                },
                "cyber-pulse": {
                    "0%, 100%": {
                        borderColor: "rgba(255, 0, 64, 0.3)",
                        boxShadow: "0 0 10px rgba(255, 0, 64, 0.2)",
                    },
                    "50%": {
                        borderColor: "rgba(255, 0, 64, 1)",
                        boxShadow: "0 0 30px rgba(255, 0, 64, 0.6), inset 0 0 10px rgba(255, 0, 64, 0.1)",
                    },
                },
            },
            backdropBlur: {
                xs: "2px",
            },
            backgroundImage: {
                'grid-pattern': `
          linear-gradient(rgba(255, 0, 64, 0.1) 1px, transparent 1px),
          linear-gradient(90deg, rgba(255, 0, 64, 0.1) 1px, transparent 1px)
        `,
                'cyber-grid': `
          linear-gradient(rgba(255, 0, 64, 0.2) 1px, transparent 1px),
          linear-gradient(90deg, rgba(255, 0, 64, 0.2) 1px, transparent 1px),
          radial-gradient(circle, rgba(255, 0, 64, 0.1) 1px, transparent 1px)
        `,
                'engine-glow': `
          radial-gradient(ellipse at center, rgba(255, 0, 64, 0.3) 0%, transparent 70%)
        `,
            },
            backgroundSize: {
                'grid': '50px 50px',
                'cyber-grid': '100px 100px, 100px 100px, 20px 20px',
            },
            perspective: {
                '1000': '1000px',
                '2000': '2000px',
            },
            transformStyle: {
                'preserve-3d': 'preserve-3d',
            },
        },
    },
    plugins: [
        function ({ addUtilities }: { addUtilities: (utilities: Record<string, any>) => void }) {
            addUtilities({
                '.perspective-1000': {
                    perspective: '1000px',
                },
                '.perspective-2000': {
                    perspective: '2000px',
                },
                '.transform-style-3d': {
                    transformStyle: 'preserve-3d',
                },
                '.backface-hidden': {
                    backfaceVisibility: 'hidden',
                },
                '.text-glow': {
                    textShadow: '0 0 10px currentColor, 0 0 20px currentColor, 0 0 40px currentColor',
                },
                '.text-engine': {
                    background: 'linear-gradient(45deg, #ff0040, #ff4060, #ff6b8a)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                },
                '.border-glow': {
                    borderImage: 'linear-gradient(45deg, #ff0040, #ff4060, #ff6b8a, #ff0040) 1',
                },
                '.glass-crimson': {
                    background: 'rgba(255, 0, 64, 0.1)',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(255, 0, 64, 0.2)',
                },
                '.hologram-effect': {
                    background: `
            linear-gradient(45deg, transparent 30%, rgba(255, 0, 64, 0.1) 50%, transparent 70%),
            linear-gradient(-45deg, transparent 30%, rgba(0, 212, 255, 0.1) 50%, transparent 70%)
          `,
                    animation: 'hologram 3s ease-in-out infinite',
                },
            });
        },
    ],
} satisfies Config;