'use client';

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';

const About = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

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

  return (
    <section
      ref={sectionRef}
      id="about"
      className="relative min-h-screen bg-gradient-to-br from-black via-gray-950 to-black py-20 px-6 overflow-hidden opacity-0 transform translate-y-8"
    >
      {/* Background geometric shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-32 h-32 border border-cyan-500/20 rotate-45 animate-pulse"></div>
        <div className="absolute bottom-32 right-16 w-24 h-24 border border-green-400/20 rotate-12 animate-bounce"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-gradient-to-r from-green-400/10 to-cyan-500/10 rotate-45"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-green-400 via-cyan-400 to-green-400 bg-clip-text text-transparent mb-6">
            ABOUT
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-green-400 to-cyan-400 mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Profile Image Side */}
          <div ref={imageRef} className="relative">
            <div className="relative group">
              {/* Animated border effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-green-400 via-cyan-400 to-green-400 rounded-2xl blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>

              {/* Image container */}
              <div className="relative w-80 h-80 mx-auto rounded-2xl bg-gradient-to-br from-gray-900 to-black p-1">
                <div className="w-full h-full rounded-xl overflow-hidden bg-gradient-to-br from-gray-800 to-gray-900">
                  {/* Placeholder for your photo */}
                  <div className="w-full h-full bg-gradient-to-br from-green-400/20 to-cyan-400/20 flex items-center justify-center">
                    <div className="text-6xl text-gray-500">
                      {/* You can replace this with your actual photo */}
                      <svg className="w-32 h-32" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating elements around image */}
              <div className="absolute -top-4 -right-4 w-8 h-8 border-2 border-green-400 rotate-45 animate-spin-slow"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 border-2 border-cyan-400 rotate-45 animate-bounce"></div>
            </div>
          </div>

          {/* Content Side */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h3 className="text-3xl md:text-4xl font-bold text-white">
                Multi-Disciplinary{' '}
                <span className="bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent">
                  Digital Innovator
                </span>
              </h3>

              <p className="text-lg text-gray-300 leading-relaxed">
                I'm a passionate full-stack developer and network engineer with a unique blend of technical expertise
                and creative vision. My journey spans across web development, network infrastructure, and graphic design,
                allowing me to approach problems from multiple angles and deliver comprehensive digital solutions.
              </p>

              <p className="text-lg text-gray-300 leading-relaxed">
                Based in Cape Town, I specialize in building scalable web applications with modern technologies like
                Next.js, React, and Python, while also designing robust network architectures and creating compelling
                visual experiences. This multidisciplinary approach enables me to bridge the gap between technical
                implementation and user experience.
              </p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-6 py-8">
              <div className="text-center p-6 bg-gradient-to-br from-gray-900/50 to-black/50 rounded-lg border border-gray-800 hover:border-green-400/50 transition-all duration-300">
                <div className="text-3xl font-bold bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent">5+</div>
                <div className="text-gray-400 text-sm uppercase tracking-wide">Years Experience</div>
              </div>

              <div className="text-center p-6 bg-gradient-to-br from-gray-900/50 to-black/50 rounded-lg border border-gray-800 hover:border-cyan-400/50 transition-all duration-300">
                <div className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-green-400 bg-clip-text text-transparent">50+</div>
                <div className="text-gray-400 text-sm uppercase tracking-wide">Projects Completed</div>
              </div>

              <div className="text-center p-6 bg-gradient-to-br from-gray-900/50 to-black/50 rounded-lg border border-gray-800 hover:border-green-400/50 transition-all duration-300">
                <div className="text-3xl font-bold bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent">3</div>
                <div className="text-gray-400 text-sm uppercase tracking-wide">Core Disciplines</div>
              </div>

              <div className="text-center p-6 bg-gradient-to-br from-gray-900/50 to-black/50 rounded-lg border border-gray-800 hover:border-cyan-400/50 transition-all duration-300">
                <div className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-green-400 bg-clip-text text-transparent">24/7</div>
                <div className="text-gray-400 text-sm uppercase tracking-wide">Dedication</div>
              </div>
            </div>

            {/* CTA Button */}
            <div className="pt-4">
              <button className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-white transition-all duration-300 bg-gradient-to-r from-green-400 to-cyan-400 rounded-lg hover:from-green-300 hover:to-cyan-300 hover:scale-105 hover:shadow-2xl hover:shadow-green-400/25">
                <span className="relative z-10">Download Resume</span>
                <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-green-400 to-cyan-400 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
              </button>
            </div>
          </div>
        </div>
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

        @keyframes tilt {
          0%, 50%, 100% {
            transform: rotate(0deg);
          }
          25% {
            transform: rotate(1deg);
          }
          75% {
            transform: rotate(-1deg);
          }
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
        }

        .animate-spin-slow {
          animation: spin-slow 3s linear infinite;
        }

        .animate-tilt {
          animation: tilt 3s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default About;