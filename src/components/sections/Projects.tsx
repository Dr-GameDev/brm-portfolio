'use client';

import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { PROJECTS } from '@/lib/constants';

if (typeof window !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);
}

interface ProjectCardProps {
    project: typeof PROJECTS[0];
    index: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
    const cardRef = useRef<HTMLDivElement>(null);
    const hologramRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!cardRef.current) return;

        // Epic entrance animation
        gsap.fromTo(
            cardRef.current,
            {
                y: 150,
                opacity: 0,
                rotationX: -45,
                scale: 0.8
            },
            {
                y: 0,
                opacity: 1,
                rotationX: 0,
                scale: 1,
                duration: 1.2,
                delay: index * 0.2,
                ease: "back.out(1.7)",
                scrollTrigger: {
                    trigger: cardRef.current,
                    start: 'top 85%',
                    end: 'bottom 15%',
                    toggleActions: 'play none none reverse',
                },
            }
        );

        // Continuous hologram effect
        if (hologramRef.current) {
            gsap.to(hologramRef.current, {
                opacity: 0.3,
                duration: 2,
                repeat: -1,
                yoyo: true,
                ease: "power2.inOut"
            });
        }

    }, [index]);

    return (
        <div
            ref={cardRef}
            className="group relative bg-crimson-dark/30 backdrop-blur-lg rounded-none p-8 border border-crimson-red/20 hover:border-crimson-red transition-all duration-700 cursor-pointer perspective-1000 transform-style-3d"
        >
            {/* Hologram overlay */}
            <div
                ref={hologramRef}
                className="absolute inset-0 bg-gradient-to-br from-crimson-red/10 via-transparent to-electric-blue/10 opacity-0 pointer-events-none"
            />

            {/* Corner Tech Details */}
            <div className="absolute top-2 left-2 flex space-x-1">
                <div className="w-2 h-2 bg-electric-green rounded-full animate-pulse" />
                <div className="w-2 h-2 bg-electric-blue rounded-full animate-pulse" style={{ animationDelay: '0.5s' }} />
                <div className="w-2 h-2 bg-crimson-red rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
            </div>

            {/* Project Preview */}
            <div className={`w-full h-48 bg-gradient-to-br ${project.color} rounded-none mb-6 relative overflow-hidden group-hover:scale-105 transition-transform duration-500`}>
                {/* Scan line effect */}
                <div className="absolute top-0 left-0 w-full h-1 bg-white opacity-60 animate-scan" />

                {/* Data grid overlay */}
                <div className="absolute inset-0 bg-cyber-grid bg-cyber-grid opacity-20" />

                {/* Central tech icon placeholder */}
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 border-2 border-white/50 rotate-45 animate-float" />
                </div>
            </div>

            {/* Category Badge */}
            <div className="flex items-center mb-4">
                <div className="w-3 h-3 bg-crimson-red mr-3 animate-pulse" />
                <span className="text-sm text-crimson-bright font-mono uppercase tracking-wider">
                    {project.category}
                </span>
            </div>

            {/* Project Title */}
            <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-crimson-bright transition-colors duration-300 font-display">
                {project.title}
            </h3>

            {/* Description */}
            <p className="text-crimson-gray text-sm leading-relaxed mb-6 font-mono">
                {project.description}
            </p>

            {/* Tech Stack */}
            <div className="flex flex-wrap gap-2 mb-6">
                {project.technologies.map((tech, techIndex) => (
                    <span
                        key={tech}
                        className="px-3 py-1 bg-crimson-red/10 border border-crimson-red/30 text-crimson-bright text-xs font-mono rounded-none uppercase tracking-wider hover:bg-crimson-red/20 transition-colors duration-300"
                        style={{ animationDelay: `${techIndex * 0.1}s` }}
                    >
                        {tech}
                    </span>
                ))}
            </div>

            {/* Action Buttons */}
            <div className="flex space-x-4">
                {project.liveUrl && (
                    <button className="flex-1 py-3 px-4 bg-transparent border border-crimson-red text-crimson-red uppercase font-mono text-xs tracking-wider hover:bg-crimson-red hover:text-crimson-black transition-all duration-300 relative overflow-hidden group">
                        <span className="relative z-10">DEPLOY</span>
                        <div className="absolute inset-0 bg-crimson-red transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300" />
                    </button>
                )}
                {project.githubUrl && (
                    <button className="flex-1 py-3 px-4 bg-transparent border border-electric-blue text-electric-blue uppercase font-mono text-xs tracking-wider hover:bg-electric-blue hover:text-crimson-black transition-all duration-300 relative overflow-hidden group">
                        <span className="relative z-10">SOURCE</span>
                        <div className="absolute inset-0 bg-electric-blue transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300" />
                    </button>
                )}
            </div>

            {/* Hover glow effect */}
            <div className="absolute inset-0 bg-crimson-red opacity-0 group-hover:opacity-5 transition-opacity duration-500 pointer-events-none" />

            {/* Border scan effect */}
            <div className="absolute inset-0 border-2 border-electric-blue opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-cyber-pulse pointer-events-none" />
        </div>
    );
};

const Projects: React.FC = () => {
    const sectionRef = useRef<HTMLDivElement>(null);
    const titleRef = useRef<HTMLHeadingElement>(null);

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
                    end: 'bottom 20%',
                    toggleActions: 'play none none reverse',
                },
            }
        );
    }, []);

    return (
        <section id="projects" ref={sectionRef} className="py-32 relative bg-crimson-black">
            {/* Background Grid */}
            <div className="absolute inset-0 bg-grid-pattern bg-grid opacity-10" />

            <div className="max-w-7xl mx-auto px-6">
                {/* Section Header */}
                <div className="text-center mb-20">
                    <h2
                        ref={titleRef}
                        className="text-6xl md:text-8xl font-black mb-8 font-display text-engine"
                    >
                        PROJECTS.
                    </h2>
                    <div className="w-32 h-1 bg-gradient-to-r from-crimson-red to-electric-blue mx-auto mb-8" />
                    <p className="text-xl text-crimson-gray font-mono max-w-3xl mx-auto">
                        &gt; ENGINEERED SOLUTIONS FOR DIGITAL SUPREMACY
                    </p>
                </div>

                {/* Projects Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {PROJECTS.map((project, index) => (
                        <ProjectCard key={project.id} project={project} index={index} />
                    ))}
                </div>

                {/* Bottom Status */}
                <div className="text-center mt-20">
                    <div className="flex items-center justify-center space-x-8 font-mono text-sm">
                        <div className="flex items-center space-x-2">
                            <div className="w-2 h-2 bg-electric-green rounded-full animate-pulse" />
                            <span className="text-crimson-gray">ALL SYSTEMS OPERATIONAL</span>
                        </div>
                        <div className="flex items-center space-x-2">
                            <div className="w-2 h-2 bg-crimson-red rounded-full animate-pulse" />
                            <span className="text-crimson-gray">READY FOR DEPLOYMENT</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Projects;