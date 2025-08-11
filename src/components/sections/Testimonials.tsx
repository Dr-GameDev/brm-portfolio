'use client';

import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);
}

interface Testimonial {
    id: number;
    name: string;
    role: string;
    company: string;
    content: string;
    rating: number;
    image?: string;
    project: string;
}

const testimonialsData: Testimonial[] = [
    {
        id: 1,
        name: "Sarah Johnson",
        role: "CTO",
        company: "TechFlow Solutions",
        content: "Babalo's full-stack expertise transformed our legacy system into a modern, scalable platform. His ability to understand both technical requirements and business needs is exceptional.",
        rating: 5,
        project: "E-commerce Platform Redesign"
    },
    {
        id: 2,
        name: "Marcus Williams",
        role: "Network Manager",
        company: "Cape Town Financial",
        content: "The network infrastructure Babalo designed for our office has been rock-solid for over two years. His security protocols and optimization techniques are top-notch.",
        rating: 5,
        project: "Enterprise Network Setup"
    },
    {
        id: 3,
        name: "Lisa Chen",
        role: "Marketing Director",
        company: "Digital Ventures",
        content: "Working with Babalo on our brand identity was incredible. He brought our vision to life with stunning graphics and a cohesive design system that elevated our entire brand.",
        rating: 5,
        project: "Brand Identity & Web Design"
    },
    {
        id: 4,
        name: "David Roberts",
        role: "Startup Founder",
        company: "InnovateLab",
        content: "Babalo built our MVP from scratch using Next.js and created a beautiful, responsive interface. His attention to detail and code quality is outstanding.",
        rating: 5,
        project: "SaaS Platform Development"
    },
    {
        id: 5,
        name: "Angela Thompson",
        role: "IT Director",
        company: "HealthTech Corp",
        content: "The combination of Babalo's network engineering and web development skills allowed us to build a secure, HIPAA-compliant patient portal. Highly recommended!",
        rating: 5,
        project: "Healthcare Portal"
    },
    {
        id: 6,
        name: "Michael Foster",
        role: "Creative Director",
        company: "Brand Studio",
        content: "Babalo's graphic design work exceeded our expectations. His modern aesthetic and technical skills in motion graphics brought our campaigns to life.",
        rating: 5,
        project: "Campaign Design & Animation"
    }
];

const Testimonials = () => {
    const sectionRef = useRef<HTMLElement>(null);
    const titleRef = useRef<HTMLHeadingElement>(null);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);

    useEffect(() => {
        if (!titleRef.current) return;

        gsap.fromTo(titleRef.current,
            { y: 100, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                duration: 1,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: titleRef.current,
                    start: 'top 80%',
                },
            }
        );
    }, []);

    useEffect(() => {
        if (!isAutoPlaying) return;

        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % testimonialsData.length);
        }, 5000);

        return () => clearInterval(interval);
    }, [isAutoPlaying]);

    const nextTestimonial = () => {
        setCurrentIndex((prev) => (prev + 1) % testimonialsData.length);
        setIsAutoPlaying(false);
    };

    const prevTestimonial = () => {
        setCurrentIndex((prev) => (prev - 1 + testimonialsData.length) % testimonialsData.length);
        setIsAutoPlaying(false);
    };

    const goToSlide = (index: number) => {
        setCurrentIndex(index);
        setIsAutoPlaying(false);
    };

    const renderStars = (rating: number) => {
        return Array.from({ length: 5 }, (_, i) => (
            <span
                key={i}
                className={`text-xl ${i < rating ? 'text-electric-blue' : 'text-gray-600'}`}
            >
                ★
            </span>
        ));
    };

    return (
        <section
            ref={sectionRef}
            id="testimonials"
            className="relative min-h-screen bg-crimson-black py-20 px-6 overflow-hidden"
        >
            {/* Background Grid */}
            <div className="absolute inset-0 bg-grid-pattern bg-grid opacity-10" />

            {/* Background Effects */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-32 left-20 w-36 h-36 border border-electric-blue/20 rotate-45 animate-float"></div>
                <div className="absolute bottom-20 right-24 w-28 h-28 border border-crimson-red/20 rotate-12 animate-spin-slow"></div>
                <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-gradient-to-r from-electric-green/10 to-electric-purple/10 rotate-45 animate-pulse"></div>
            </div>

            {/* Scan lines */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-electric-blue to-transparent animate-scan opacity-60" />
                <div className="absolute top-3/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-crimson-red to-transparent animate-scan opacity-40"
                    style={{ animationDelay: '2s' }} />
            </div>

            <div className="max-w-7xl mx-auto relative z-10">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2
                        ref={titleRef}
                        className="text-6xl md:text-8xl font-black mb-8 font-display text-engine"
                    >
                        TESTIMONIALS.
                    </h2>
                    <div className="w-32 h-1 bg-gradient-to-r from-crimson-red to-electric-blue mx-auto mb-8"></div>
                    <p className="text-xl text-crimson-gray max-w-3xl mx-auto font-mono">
                        &gt; CLIENT FEEDBACK ACROSS WEB DEVELOPMENT, NETWORKING, AND DESIGN PROJECTS
                    </p>
                </div>

                {/* Main Testimonial Display */}
                <div className="relative max-w-4xl mx-auto mb-12">
                    <div className="relative bg-crimson-dark/30 backdrop-blur-lg border border-crimson-red/20 p-8 md:p-12 hover:border-crimson-red transition-all duration-500 group perspective-1000">
                        {/* Tech corner indicators */}
                        <div className="absolute top-4 left-4 flex space-x-1">
                            <div className="w-2 h-2 bg-electric-green animate-pulse" />
                            <div className="w-2 h-2 bg-electric-blue animate-pulse" style={{ animationDelay: '0.5s' }} />
                            <div className="w-2 h-2 bg-crimson-red animate-pulse" style={{ animationDelay: '1s' }} />
                        </div>

                        {/* Quote markers */}
                        <div className="absolute top-6 right-6 text-4xl text-crimson-red/30 font-mono">&gt;&gt;</div>
                        <div className="absolute bottom-6 left-6 text-4xl text-electric-blue/30 font-mono">&lt;&lt;</div>

                        {/* Testimonial Content */}
                        <div className="relative z-10 pt-8">
                            <div className="mb-6">
                                {renderStars(testimonialsData[currentIndex]?.rating ?? 0)}
                            </div>

                            <blockquote className="text-xl md:text-2xl text-crimson-bright leading-relaxed mb-8 font-mono">
                                &gt; {testimonialsData[currentIndex]?.content}
                            </blockquote>

                            <div className="flex items-center justify-between border-t border-crimson-red/20 pt-6">
                                <div>
                                    <div className="text-lg font-bold text-white font-display uppercase tracking-wider">
                                        {testimonialsData[currentIndex]?.name}
                                    </div>
                                    <div className="text-crimson-red font-medium font-mono">
                                        {testimonialsData[currentIndex]?.role}
                                    </div>
                                    <div className="text-crimson-gray font-mono">
                                        {testimonialsData[currentIndex]?.company}
                                    </div>
                                </div>

                                <div className="text-right">
                                    <div className="text-sm text-electric-blue font-medium uppercase tracking-wider font-mono">
                                        PROJECT
                                    </div>
                                    <div className="text-crimson-bright font-mono">
                                        {testimonialsData[currentIndex]?.project}
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Hologram overlay */}
                        <div className="absolute inset-0 bg-gradient-to-br from-crimson-red/10 via-transparent to-electric-blue/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                        {/* Scan line effect */}
                        <div className="absolute top-0 left-0 w-full h-1 bg-white opacity-60 animate-scan" />
                    </div>

                    {/* Navigation Arrows */}
                    <button
                        onClick={prevTestimonial}
                        className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-transparent border-2 border-crimson-red hover:bg-crimson-red text-crimson-red hover:text-crimson-black transition-all duration-300 hover:scale-110 font-mono font-bold"
                    >
                        &lt;
                    </button>

                    <button
                        onClick={nextTestimonial}
                        className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-transparent border-2 border-electric-blue hover:bg-electric-blue text-electric-blue hover:text-crimson-black transition-all duration-300 hover:scale-110 font-mono font-bold"
                    >
                        &gt;
                    </button>
                </div>

                {/* Testimonial Indicators */}
                <div className="flex justify-center gap-3 mb-12">
                    {testimonialsData.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => goToSlide(index)}
                            className={`w-4 h-4 border transition-all duration-300 ${index === currentIndex
                                    ? 'bg-crimson-red border-crimson-red scale-125'
                                    : 'bg-transparent border-crimson-red/50 hover:border-crimson-red hover:bg-crimson-red/20'
                                }`}
                        />
                    ))}
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    <div className="text-center p-6 bg-crimson-dark/30 backdrop-blur-lg border border-electric-green/20 group hover:border-electric-green transition-all duration-300">
                        <div className="text-3xl font-bold bg-gradient-to-r from-electric-green to-electric-blue bg-clip-text text-transparent font-display">
                            {testimonialsData.length}
                        </div>
                        <div className="text-crimson-gray text-sm uppercase tracking-wider font-mono">Happy Clients</div>
                        <div className="absolute inset-0 bg-electric-green opacity-0 group-hover:opacity-5 transition-opacity duration-500" />
                    </div>

                    <div className="text-center p-6 bg-crimson-dark/30 backdrop-blur-lg border border-electric-blue/20 group hover:border-electric-blue transition-all duration-300">
                        <div className="text-3xl font-bold bg-gradient-to-r from-electric-blue to-crimson-red bg-clip-text text-transparent font-display">
                            5.0
                        </div>
                        <div className="text-crimson-gray text-sm uppercase tracking-wider font-mono">Average Rating</div>
                        <div className="absolute inset-0 bg-electric-blue opacity-0 group-hover:opacity-5 transition-opacity duration-500" />
                    </div>

                    <div className="text-center p-6 bg-crimson-dark/30 backdrop-blur-lg border border-electric-purple/20 group hover:border-electric-purple transition-all duration-300">
                        <div className="text-3xl font-bold bg-gradient-to-r from-electric-purple to-crimson-red bg-clip-text text-transparent font-display">
                            98%
                        </div>
                        <div className="text-crimson-gray text-sm uppercase tracking-wider font-mono">Client Satisfaction</div>
                        <div className="absolute inset-0 bg-electric-purple opacity-0 group-hover:opacity-5 transition-opacity duration-500" />
                    </div>

                    <div className="text-center p-6 bg-crimson-dark/30 backdrop-blur-lg border border-crimson-red/20 group hover:border-crimson-red transition-all duration-300">
                        <div className="text-3xl font-bold bg-gradient-to-r from-crimson-red to-electric-blue bg-clip-text text-transparent font-display">
                            100%
                        </div>
                        <div className="text-crimson-gray text-sm uppercase tracking-wider font-mono">Project Success</div>
                        <div className="absolute inset-0 bg-crimson-red opacity-0 group-hover:opacity-5 transition-opacity duration-500" />
                    </div>
                </div>

                {/* Auto-play indicator */}
                {isAutoPlaying && (
                    <div className="text-center mt-8">
                        <div className="inline-flex items-center gap-2 text-sm text-crimson-gray font-mono">
                            <div className="w-2 h-2 bg-electric-green animate-pulse"></div>
                            <span className="uppercase tracking-wider">AUTO-CYCLING TESTIMONIALS</span>
                        </div>
                    </div>
                )}

                {/* Status indicators */}
                <div className="text-center mt-12">
                    <div className="flex items-center justify-center space-x-8 font-mono text-sm">
                        <div className="flex items-center space-x-2">
                            <div className="w-2 h-2 bg-electric-green animate-pulse" />
                            <span className="text-crimson-gray uppercase tracking-wider">CLIENT DATA LOADED</span>
                        </div>
                        <div className="flex items-center space-x-2">
                            <div className="w-2 h-2 bg-crimson-red animate-pulse" />
                            <span className="text-crimson-gray uppercase tracking-wider">TESTIMONIALS ACTIVE</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;