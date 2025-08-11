'use client';

import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const Hero: React.FC = () => {
    const heroRef = useRef<HTMLDivElement>(null);
    const titleRef = useRef<HTMLHeadingElement>(null);
    const subtitleRef = useRef<HTMLParagraphElement>(null);
    const ctaRef = useRef<HTMLButtonElement>(null);
    const scanLineRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!heroRef.current || !titleRef.current || !subtitleRef.current || !ctaRef.current) return;

        // Epic entrance animation
        const tl = gsap.timeline();

        // Scan line effect
        tl.fromTo(scanLineRef.current,
            { scaleX: 0, opacity: 0 },
            { scaleX: 1, opacity: 1, duration: 0.8, ease: "power2.out" }
        )
            .fromTo(titleRef.current,
                { y: 100, opacity: 0, rotationX: -90 },
                { y: 0, opacity: 1, rotationX: 0, duration: 1.2, ease: "back.out(1.7)" },
                "-=0.5"
            )
            .fromTo(subtitleRef.current,
                { y: 50, opacity: 0 },
                { y: 0, opacity: 1, duration: 0.8, ease: "power2.out" },
                "-=0.6"
            )
            .fromTo(ctaRef.current,
                { scale: 0, opacity: 0, rotation: 180 },
                { scale: 1, opacity: 1, rotation: 0, duration: 0.8, ease: "back.out(2)" },
                "-=0.4"
            );

        // Continuous title glow animation
        gsap.to(titleRef.current, {
            textShadow: "0 0 30px #ff0040, 0 0 60px #ff0040, 0 0 90px #ff0040",
            duration: 2,
            repeat: -1,
            yoyo: true,
            ease: "power2.inOut"
        });

    }, []);

    const scrollToProjects = () => {
        document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section
            id="home"
            ref={heroRef}
            className="min-h-screen flex items-center justify-center relative overflow-hidden bg-crimson-black"
        >
            {/* Background Grid */}
            <div className="absolute inset-0 bg-grid-pattern bg-grid opacity-30" />

            {/* Scan Lines */}
            <div className="absolute inset-0 pointer-events-none">
                <div
                    ref={scanLineRef}
                    className="absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-crimson-red to-transparent animate-scan"
                />
                <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-electric-blue to-transparent animate-scan opacity-60"
                    style={{ animationDelay: '1s', animationDuration: '3s' }} />
                <div className="absolute top-3/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-electric-purple to-transparent animate-scan opacity-40"
                    style={{ animationDelay: '2s', animationDuration: '4s' }} />
            </div>

            {/* Central Content */}
            <div className="text-center z-10 px-6 perspective-2000">

                {/* Main Title */}
                <h1
                    ref={titleRef}
                    className="text-8xl md:text-[12rem] font-black tracking-tighter mb-8 font-display text-engine transform-style-3d"
                    style={{
                        background: 'linear-gradient(45deg, #ff0040, #ff4060, #ff6b8a, #00d4ff)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text',
                        backgroundSize: '400% 400%',
                        animation: 'engine 2s ease-in-out infinite alternate'
                    }}
                >
                    BRM
                </h1>

                {/* Subtitle */}
                <div ref={subtitleRef} className="mb-16">
                    <p className="text-2xl md:text-3xl text-crimson-bright mb-3 tracking-wider uppercase font-mono font-bold">
                        &gt; FULL-STACK <span className="text-electric-blue">ENGINEER</span>
                    </p>
                    <p className="text-lg md:text-xl text-crimson-gray mb-3 tracking-wider uppercase font-mono">
                        &gt; NETWORK <span className="text-electric-green">ARCHITECT</span>
                    </p>
                    <p className="text-lg md:text-xl text-crimson-gray tracking-wider uppercase font-mono">
                        &gt; VISUAL <span className="text-electric-purple">DESIGNER</span>
                    </p>
                </div>

                {/* CTA Button */}
                <button
                    ref={ctaRef}
                    onClick={scrollToProjects}
                    className="group relative px-12 py-6 bg-transparent border-2 border-crimson-red text-crimson-red font-bold rounded-none uppercase tracking-widest font-mono text-lg transition-all duration-500 hover:text-crimson-black hover:bg-crimson-red transform hover:scale-110 hover:rotate-2"
                >
                    <span className="relative z-10">INITIATE SEQUENCE</span>

                    {/* Button glow effect */}
                    <div className="absolute inset-0 bg-crimson-red opacity-0 group-hover:opacity-20 transition-opacity duration-500" />

                    {/* Scanning border effect */}
                    <div className="absolute inset-0 border-2 border-electric-blue opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-cyber-pulse" />

                    {/* Corner accents */}
                    <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-electric-blue opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-electric-blue opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-electric-blue opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-electric-blue opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </button>

                {/* Status Indicators */}
                <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 flex space-x-8 font-mono text-sm">
                    <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-electric-green rounded-full animate-pulse" />
                        <span className="text-crimson-gray">SYSTEMS ONLINE</span>
                    </div>
                    <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-electric-blue rounded-full animate-pulse" />
                        <span className="text-crimson-gray">READY TO DEPLOY</span>
                    </div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 animate-bounce flex flex-col items-center">
                <div className="w-8 h-16 border-2 border-crimson-red rounded-full flex justify-center relative">
                    <div className="w-1 h-4 bg-crimson-red rounded-full mt-3 animate-pulse" />

                    {/* Side indicators */}
                    <div className="absolute -left-8 top-1/2 w-4 h-px bg-crimson-red" />
                    <div className="absolute -right-8 top-1/2 w-4 h-px bg-crimson-red" />
                </div>
                <p className="text-crimson-gray text-xs font-mono mt-2 tracking-wider">SCROLL TO EXPLORE</p>
            </div>

            {/* Floating Tech Elements */}
            <div className="absolute top-20 left-20 opacity-30">
                <div className="w-16 h-16 border border-crimson-red rotate-45 animate-float"
                    style={{ animationDelay: '0s' }} />
            </div>
            <div className="absolute top-40 right-32 opacity-20">
                <div className="w-12 h-12 border border-electric-blue rounded-full animate-float"
                    style={{ animationDelay: '1s' }} />
            </div>
            <div className="absolute bottom-40 left-16 opacity-25">
                <div className="w-20 h-2 bg-gradient-to-r from-crimson-red to-electric-purple animate-float"
                    style={{ animationDelay: '2s' }} />
            </div>
            <div className="absolute bottom-32 right-20 opacity-30">
                <div className="w-10 h-10 border border-electric-green transform rotate-12 animate-float"
                    style={{ animationDelay: '3s' }} />
            </div>
        </section>
    );
};

export default Hero;