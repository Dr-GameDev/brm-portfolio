'use client';

import React, { useEffect, useRef, useState } from 'react';

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
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);

    useEffect(() => {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-fade-in-up');
                }
            });
        }, observerOptions);

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
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
                className={`text-xl ${i < rating ? 'text-yellow-400' : 'text-gray-600'}`}
            >
                ★
            </span>
        ));
    };

    return (
        <section
            ref={sectionRef}
            id="testimonials"
            className="relative min-h-screen bg-gradient-to-br from-black via-gray-950 to-black py-20 px-6 overflow-hidden opacity-0 transform translate-y-8"
        >
            {/* Background Effects */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-32 left-20 w-36 h-36 border border-cyan-500/20 rotate-45 animate-pulse"></div>
                <div className="absolute bottom-20 right-24 w-28 h-28 border border-green-400/20 rotate-12 animate-bounce"></div>
                <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-gradient-to-r from-green-400/10 to-cyan-400/10 rotate-45 animate-spin-slow"></div>
            </div>

            <div className="max-w-7xl mx-auto relative z-10">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-green-400 via-cyan-400 to-green-400 bg-clip-text text-transparent mb-6">
                        TESTIMONIALS
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-green-400 to-cyan-400 mx-auto mb-8"></div>
                    <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                        What clients say about working with me across web development, networking, and design projects
                    </p>
                </div>

                {/* Main Testimonial Display */}
                <div className="relative max-w-4xl mx-auto mb-12">
                    <div className="relative bg-gradient-to-br from-gray-900/50 to-black/50 rounded-2xl p-8 md:p-12 border border-gray-800 hover:border-green-400/50 transition-all duration-500">
                        {/* Quote Icon */}
                        <div className="absolute top-6 left-6 text-6xl text-green-400/30 font-serif">"</div>

                        {/* Testimonial Content */}
                        <div className="relative z-10 pt-8">
                            <div className="mb-6">
                                {renderStars(testimonialsData[currentIndex]?.rating ?? 0)}
                            </div>

                            <blockquote className="text-xl md:text-2xl text-gray-300 leading-relaxed mb-8 italic">
                                {testimonialsData[currentIndex]?.content}
                            </blockquote>

                            <div className="flex items-center justify-between">
                                <div>
                                    <div className="text-lg font-semibold text-white">
                                        {testimonialsData[currentIndex]?.name}
                                    </div>
                                    <div className="text-green-400 font-medium">
                                        {testimonialsData[currentIndex]?.role}
                                    </div>
                                    <div className="text-gray-400">
                                        {testimonialsData[currentIndex]?.company}
                                    </div>
                                </div>

                                <div className="text-right">
                                    <div className="text-sm text-cyan-400 font-medium uppercase tracking-wide">
                                        Project
                                    </div>
                                    <div className="text-gray-300">
                                        {testimonialsData[currentIndex]?.project}
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Gradient overlay effect */}
                        <div className="absolute inset-0 bg-gradient-to-r from-green-400/5 to-cyan-400/5 rounded-2xl opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                    </div>

                    {/* Navigation Arrows */}
                    <button
                        onClick={prevTestimonial}
                        className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-gray-800 hover:bg-green-400 text-white hover:text-black rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                    >
                        ←
                    </button>

                    <button
                        onClick={nextTestimonial}
                        className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-gray-800 hover:bg-cyan-400 text-white hover:text-black rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                    >
                        →
                    </button>
                </div>

                {/* Testimonial Indicators */}
                <div className="flex justify-center gap-3 mb-12">
                    {testimonialsData.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => goToSlide(index)}
                            className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentIndex
                                    ? 'bg-gradient-to-r from-green-400 to-cyan-400 scale-125'
                                    : 'bg-gray-600 hover:bg-gray-500'
                                }`}
                        />
                    ))}
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    <div className="text-center p-6 bg-gradient-to-br from-gray-900/30 to-black/30 rounded-lg border border-gray-800">
                        <div className="text-3xl font-bold bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent">
                            {testimonialsData.length}
                        </div>
                        <div className="text-gray-400 text-sm uppercase tracking-wide">Happy Clients</div>
                    </div>

                    <div className="text-center p-6 bg-gradient-to-br from-gray-900/30 to-black/30 rounded-lg border border-gray-800">
                        <div className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-green-400 bg-clip-text text-transparent">
                            5.0
                        </div>
                        <div className="text-gray-400 text-sm uppercase tracking-wide">Average Rating</div>
                    </div>

                    <div className="text-center p-6 bg-gradient-to-br from-gray-900/30 to-black/30 rounded-lg border border-gray-800">
                        <div className="text-3xl font-bold bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent">
                            98%
                        </div>
                        <div className="text-gray-400 text-sm uppercase tracking-wide">Client Satisfaction</div>
                    </div>

                    <div className="text-center p-6 bg-gradient-to-br from-gray-900/30 to-black/30 rounded-lg border border-gray-800">
                        <div className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-green-400 bg-clip-text text-transparent">
                            100%
                        </div>
                        <div className="text-gray-400 text-sm uppercase tracking-wide">Project Success</div>
                    </div>
                </div>

                {/* Auto-play indicator */}
                {isAutoPlaying && (
                    <div className="text-center mt-8">
                        <div className="inline-flex items-center gap-2 text-sm text-gray-500">
                            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                            Auto-playing testimonials
                        </div>
                    </div>
                )}
            </div>

            <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(2rem);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
        }

        .animate-spin-slow {
          animation: spin-slow 12s linear infinite;
        }
      `}</style>
        </section>
    );
};

export default Testimonials;