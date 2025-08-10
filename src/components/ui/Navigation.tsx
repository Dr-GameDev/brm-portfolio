'use client';

import React, { useCallback, useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';

const Navigation: React.FC = () => {
    const navRef = useRef<HTMLElement>(null);
    const logoRef = useRef<HTMLDivElement>(null);
    const navItems = ['home', 'about', 'projects', 'skills', 'contact'];
    const [activeSection, setActiveSection] = useState('home');

    useEffect(() => {
        if (!navRef.current || !logoRef.current) return;

        // Epic entrance animation
        gsap.fromTo(navRef.current,
            { y: -100, opacity: 0 },
            { y: 0, opacity: 1, duration: 1, ease: "power2.out", delay: 0.5 }
        );

        // Logo glow animation
        gsap.to(logoRef.current, {
            textShadow: "0 0 20px #ff0040, 0 0 40px #ff0040",
            duration: 2,
            repeat: -1,
            yoyo: true,
            ease: "power2.inOut"
        });
    }, []);

    useEffect(() => {
        // Section observer for navigation
        const sections = ['home', 'about', 'projects', 'skills', 'contact'];
        const observers = sections.map(id => {
            const element = document.getElementById(id);
            if (!element) return null;

            const observer = new IntersectionObserver(
                ([entry]) => {
                    if (entry?.isIntersecting) {
                        setActiveSection(id);
                    }
                },
                { threshold: 0.5 }
            );

            observer.observe(element);
            return observer;
        });

        return () => {
            observers.forEach(observer => observer?.disconnect());
        };
    }, []);

    const scrollToSection = useCallback((sectionId: string) => {
        const element = document.getElementById(sectionId);
        element?.scrollIntoView({ behavior: 'smooth' });
    }, []);

    return (
        <nav
            ref={navRef}
            className="fixed top-0 left-0 right-0 z-50 p-6 backdrop-blur-md bg-crimson-black/20 border-b border-crimson-red/20"
        >
            <div className="max-w-7xl mx-auto flex justify-between items-center">
                {/* Logo */}
                <div
                    ref={logoRef}
                    className="text-4xl font-black tracking-tighter text-crimson-red font-display cursor-pointer"
                    onClick={() => scrollToSection('home')}
                >
                    BRM
                    <div className="w-full h-0.5 bg-gradient-to-r from-crimson-red to-transparent" />
                </div>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center space-x-8">
                    {navItems.map((item, index) => (
                        <button
                            key={item}
                            onClick={() => scrollToSection(item)}
                            className={`relative group font-mono uppercase tracking-wider text-sm transition-all duration-300 ${activeSection === item
                                    ? 'text-crimson-red'
                                    : 'text-crimson-gray hover:text-crimson-bright'
                                }`}
                        >
                            {/* Nav item text */}
                            <span className="relative z-10">{item}</span>

                            {/* Active indicator */}
                            {activeSection === item && (
                                <div className="absolute -bottom-2 left-0 w-full h-0.5 bg-crimson-red animate-pulse" />
                            )}

                            {/* Hover effect */}
                            <div className="absolute inset-0 bg-crimson-red/10 scale-0 group-hover:scale-100 transition-transform duration-300 rounded" />

                            {/* Tech corners */}
                            <div className="absolute top-0 left-0 w-1 h-1 bg-electric-blue opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            <div className="absolute top-0 right-0 w-1 h-1 bg-electric-blue opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            <div className="absolute bottom-0 left-0 w-1 h-1 bg-electric-blue opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            <div className="absolute bottom-0 right-0 w-1 h-1 bg-electric-blue opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        </button>
                    ))}

                    {/* Status indicator */}
                    <div className="flex items-center space-x-2 ml-8 px-4 py-2 border border-crimson-red/30 bg-crimson-red/10">
                        <div className="w-2 h-2 bg-electric-green rounded-full animate-pulse" />
                        <span className="text-crimson-gray font-mono text-xs uppercase tracking-wider">
                            ONLINE
                        </span>
                    </div>
                </div>

                {/* Mobile Menu Button */}
                <div className="md:hidden">
                    <button className="relative w-8 h-8 flex flex-col justify-center items-center space-y-1 group">
                        <div className="w-6 h-0.5 bg-crimson-red group-hover:bg-electric-blue transition-colors duration-300" />
                        <div className="w-6 h-0.5 bg-crimson-red group-hover:bg-electric-blue transition-colors duration-300" />
                        <div className="w-6 h-0.5 bg-crimson-red group-hover:bg-electric-blue transition-colors duration-300" />

                        {/* Glow effect */}
                        <div className="absolute inset-0 bg-crimson-red/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded" />
                    </button>
                </div>
            </div>

            {/* Scan line effect */}
            <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-crimson-red to-transparent animate-scan opacity-50" />
        </nav>
    );
};

export default Navigation;