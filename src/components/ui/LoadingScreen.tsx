'use client';

import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

interface LoadingScreenProps {
    isLoading: boolean;
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({ isLoading }) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const logoRef = useRef<HTMLDivElement>(null);
    const progressRef = useRef<HTMLDivElement>(null);
    const textRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!containerRef.current || !logoRef.current || !progressRef.current || !textRef.current) return;

        if (isLoading) {
            // Loading animations
            const tl = gsap.timeline();

            // Logo entrance
            tl.fromTo(logoRef.current,
                { scale: 0, rotation: 180, opacity: 0 },
                { scale: 1, rotation: 0, opacity: 1, duration: 1, ease: "back.out(2)" }
            )
                // Progress bar animation
                .fromTo(progressRef.current,
                    { width: '0%' },
                    { width: '100%', duration: 2.5, ease: "power2.inOut" },
                    "-=0.5"
                )
                // Text animation
                .fromTo(textRef.current,
                    { y: 30, opacity: 0 },
                    { y: 0, opacity: 1, duration: 0.8 },
                    "-=1.5"
                );

            // Continuous logo glow
            gsap.to(logoRef.current, {
                textShadow: "0 0 30px #ff0040, 0 0 60px #ff0040, 0 0 90px #ff0040",
                duration: 1.5,
                repeat: -1,
                yoyo: true,
                ease: "power2.inOut"
            });

        } else {
            // Exit animation
            gsap.to(containerRef.current, {
                opacity: 0,
                scale: 1.1,
                duration: 0.8,
                ease: "power2.inOut",
                onComplete: () => {
                    if (containerRef.current) {
                        containerRef.current.style.display = 'none';
                    }
                }
            });
        }
    }, [isLoading]);

    if (!isLoading) return null;

    return (
        <div
            ref={containerRef}
            className="fixed inset-0 bg-crimson-black flex items-center justify-center z-50 overflow-hidden"
        >
            {/* Background Grid */}
            <div className="absolute inset-0 bg-grid-pattern bg-grid opacity-20" />

            {/* Matrix-style falling code */}
            <div className="absolute inset-0 overflow-hidden">
                {[...Array(20)].map((_, i) => (
                    <div
                        key={i}
                        className="absolute text-crimson-red font-mono text-xs opacity-30 animate-matrix"
                        style={{
                            left: `${(i * 5) % 100}%`,
                            animationDelay: `${i * 0.5}s`,
                            animationDuration: `${10 + (i % 5)}s`,
                        }}
                    >
                        {Array.from({ length: 20 }, () => Math.random() > 0.5 ? '1' : '0').join('')}
                    </div>
                ))}
            </div>

            {/* Central Loading Interface */}
            <div className="text-center relative z-10">
                {/* Logo */}
                <div
                    ref={logoRef}
                    className="text-8xl font-black text-crimson-red mb-8 font-display"
                >
                    BRM
                </div>

                {/* Loading Text */}
                <div ref={textRef} className="mb-8">
                    <p className="text-xl text-crimson-bright font-mono uppercase tracking-wider mb-2">
                        &gt; INITIALIZING SYSTEMS
                    </p>
                    <p className="text-sm text-crimson-gray font-mono">
                        &gt; LOADING NEURAL NETWORKS...
                    </p>
                </div>

                {/* Progress Bar Container */}
                <div className="w-80 h-1 bg-crimson-dark mx-auto mb-6 relative overflow-hidden">
                    {/* Progress Bar */}
                    <div
                        ref={progressRef}
                        className="h-full bg-gradient-to-r from-crimson-red via-electric-blue to-crimson-bright relative"
                    >
                        {/* Scan line effect */}
                        <div className="absolute top-0 right-0 w-4 h-full bg-white opacity-60 animate-pulse" />
                    </div>

                    {/* Progress Border */}
                    <div className="absolute inset-0 border border-crimson-red/50" />
                </div>

                {/* Status Indicators */}
                <div className="flex justify-center space-x-8 font-mono text-xs">
                    <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-electric-green rounded-full animate-pulse" />
                        <span className="text-crimson-gray">CORE SYSTEMS</span>
                    </div>
                    <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-electric-blue rounded-full animate-pulse" style={{ animationDelay: '0.5s' }} />
                        <span className="text-crimson-gray">GRAPHICS ENGINE</span>
                    </div>
                    <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-crimson-red rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
                        <span className="text-crimson-gray">UI INTERFACE</span>
                    </div>
                </div>

                {/* Tech Details */}
                <div className="mt-8 text-crimson-gray font-mono text-xs opacity-60">
                    <p>&gt; Next.js v15.0.0</p>
                    <p>&gt; Three.js v0.168.0</p>
                    <p>&gt; GSAP v3.12.5</p>
                    <p>&gt; TypeScript v5.6.0</p>
                </div>
            </div>

            {/* Corner Tech Elements */}
            <div className="absolute top-8 left-8 w-16 h-16 border border-crimson-red/30 rotate-45 animate-float" />
            <div className="absolute top-8 right-8 w-12 h-12 border border-electric-blue/30 rounded-full animate-float" style={{ animationDelay: '1s' }} />
            <div className="absolute bottom-8 left-8 w-20 h-2 bg-gradient-to-r from-crimson-red to-electric-purple animate-float" style={{ animationDelay: '2s' }} />
            <div className="absolute bottom-8 right-8 w-10 h-10 border border-electric-green/30 animate-float" style={{ animationDelay: '3s' }} />

            {/* Scan lines */}
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-crimson-red to-transparent animate-scan" />
            <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-electric-blue to-transparent animate-scan" style={{ animationDelay: '1s' }} />
        </div>
    );
};

export default LoadingScreen;