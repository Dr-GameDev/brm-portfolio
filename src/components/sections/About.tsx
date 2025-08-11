'use client';

import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const About = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    // Epic entrance animation
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0, y: 100 },
      {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
          end: 'bottom 20%',
          toggleActions: 'play none none reverse',
        },
      }
    );

    // Image animation
    if (imageRef.current) {
      gsap.fromTo(
        imageRef.current,
        { scale: 0.8, opacity: 0, rotationY: -45 },
        {
          scale: 1,
          opacity: 1,
          rotationY: 0,
          duration: 1.5,
          delay: 0.3,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: imageRef.current,
            start: 'top 85%',
          },
        }
      );
    }

    // Content animation
    if (contentRef.current) {
      gsap.fromTo(
        contentRef.current.children,
        { x: 100, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.2,
          delay: 0.6,
          ease: "power2.out",
          scrollTrigger: {
            trigger: contentRef.current,
            start: 'top 85%',
          },
        }
      );
    }
  }, []);

  return (
    <section
      ref={sectionRef}
      id="about"
      className="relative min-h-screen bg-crimson-black py-20 px-6 overflow-hidden"
    >
      {/* Background Grid */}
      <div className="absolute inset-0 bg-grid-pattern bg-grid opacity-10" />

      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-32 h-32 border border-crimson-red/20 rotate-45 animate-float"></div>
        <div className="absolute bottom-32 right-16 w-24 h-24 border border-electric-blue/20 rotate-12 animate-bounce"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-gradient-to-r from-electric-green/10 to-crimson-red/10 rotate-45 animate-pulse"></div>
      </div>

      {/* Scan lines */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-crimson-red to-transparent animate-scan opacity-60" />
        <div className="absolute top-2/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-electric-blue to-transparent animate-scan opacity-40"
          style={{ animationDelay: '2s' }} />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-6xl md:text-8xl font-black mb-8 font-display text-engine">
            ABOUT.
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-crimson-red to-electric-blue mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Profile Image Side */}
          <div ref={imageRef} className="relative">
            <div className="relative group perspective-1000">
              {/* Holographic border effect */}
              <div className="absolute -inset-2 bg-gradient-to-r from-crimson-red via-electric-blue to-crimson-red opacity-20 group-hover:opacity-60 transition duration-700 animate-tilt"></div>

              {/* Image container */}
              <div className="relative w-80 h-80 mx-auto bg-gradient-to-br from-crimson-dark to-crimson-black border border-crimson-red/30">
                <div className="w-full h-full overflow-hidden bg-gradient-to-br from-gray-800 to-crimson-black">
                  {/* Placeholder for photo */}
                  <div className="w-full h-full bg-gradient-to-br from-crimson-red/20 to-electric-blue/20 flex items-center justify-center relative">
                    {/* Tech grid overlay */}
                    <div className="absolute inset-0 bg-cyber-grid bg-cyber-grid opacity-30" />

                    <div className="text-6xl text-gray-500 relative z-10">
                      <svg className="w-32 h-32" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                      </svg>
                    </div>

                    {/* Scan line over image */}
                    <div className="absolute top-0 left-0 w-full h-1 bg-white opacity-60 animate-scan" />
                  </div>
                </div>
              </div>

              {/* Floating tech elements around image */}
              <div className="absolute -top-4 -right-4 w-8 h-8 border-2 border-electric-green rotate-45 animate-spin-slow"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 border-2 border-electric-blue rotate-45 animate-float"></div>
              <div className="absolute top-1/2 -right-8 w-4 h-4 bg-crimson-red animate-pulse"></div>
              <div className="absolute top-1/4 -left-8 w-3 h-3 bg-electric-purple animate-pulse" style={{ animationDelay: '1s' }}></div>
            </div>
          </div>

          {/* Content Side */}
          <div ref={contentRef} className="space-y-8">
            <div className="space-y-6">
              <h3 className="text-3xl md:text-4xl font-bold text-white font-display">
                MULTI-DISCIPLINARY{' '}
                <span className="bg-gradient-to-r from-crimson-red to-electric-blue bg-clip-text text-transparent">
                  DIGITAL INNOVATOR
                </span>
              </h3>

              <p className="text-lg text-crimson-gray leading-relaxed font-mono">
                &gt; Passionate full-stack developer and network engineer with a unique blend of technical expertise
                and creative vision. My journey spans across web development, network infrastructure, and graphic design,
                allowing me to approach problems from multiple angles and deliver comprehensive digital solutions.
              </p>

              <p className="text-lg text-crimson-gray leading-relaxed font-mono">
                &gt; Based in Cape Town, I specialize in building scalable web applications with modern technologies like
                Next.js, React, and Python, while also designing robust network architectures and creating compelling
                visual experiences. This multidisciplinary approach enables me to bridge the gap between technical
                implementation and user experience.
              </p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-6 py-8">
              <div className="text-center p-6 bg-crimson-dark/30 backdrop-blur-lg border border-crimson-red/20 hover:border-crimson-red transition-all duration-300 group">
                <div className="text-3xl font-bold bg-gradient-to-r from-crimson-red to-electric-blue bg-clip-text text-transparent font-display">5+</div>
                <div className="text-crimson-gray text-sm uppercase tracking-wider font-mono">Years Experience</div>
                <div className="absolute inset-0 bg-crimson-red opacity-0 group-hover:opacity-5 transition-opacity duration-500" />
              </div>

              <div className="text-center p-6 bg-crimson-dark/30 backdrop-blur-lg border border-electric-blue/20 hover:border-electric-blue transition-all duration-300 group">
                <div className="text-3xl font-bold bg-gradient-to-r from-electric-blue to-crimson-red bg-clip-text text-transparent font-display">50+</div>
                <div className="text-crimson-gray text-sm uppercase tracking-wider font-mono">Projects Completed</div>
                <div className="absolute inset-0 bg-electric-blue opacity-0 group-hover:opacity-5 transition-opacity duration-500" />
              </div>

              <div className="text-center p-6 bg-crimson-dark/30 backdrop-blur-lg border border-electric-green/20 hover:border-electric-green transition-all duration-300 group">
                <div className="text-3xl font-bold bg-gradient-to-r from-electric-green to-crimson-red bg-clip-text text-transparent font-display">3</div>
                <div className="text-crimson-gray text-sm uppercase tracking-wider font-mono">Core Disciplines</div>
                <div className="absolute inset-0 bg-electric-green opacity-0 group-hover:opacity-5 transition-opacity duration-500" />
              </div>

              <div className="text-center p-6 bg-crimson-dark/30 backdrop-blur-lg border border-electric-purple/20 hover:border-electric-purple transition-all duration-300 group">
                <div className="text-3xl font-bold bg-gradient-to-r from-electric-purple to-crimson-red bg-clip-text text-transparent font-display">24/7</div>
                <div className="text-crimson-gray text-sm uppercase tracking-wider font-mono">Dedication</div>
                <div className="absolute inset-0 bg-electric-purple opacity-0 group-hover:opacity-5 transition-opacity duration-500" />
              </div>
            </div>

            {/* CTA Button */}
            <div className="pt-4">
              <button className="group relative px-8 py-4 bg-transparent border-2 border-crimson-red text-crimson-red font-bold uppercase tracking-widest font-mono text-lg transition-all duration-500 hover:text-crimson-black hover:bg-crimson-red transform hover:scale-105">
                <span className="relative z-10">DOWNLOAD RESUME</span>

                {/* Scanning border effect */}
                <div className="absolute inset-0 border-2 border-electric-blue opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-cyber-pulse" />

                {/* Corner accents */}
                <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-electric-blue opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-electric-blue opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-electric-blue opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-electric-blue opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;