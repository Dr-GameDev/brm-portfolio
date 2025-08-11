'use client';

import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

interface Skill {
  name: string;
  level: number;
  category: 'frontend' | 'backend' | 'network' | 'design' | 'tools';
  icon: string;
}

const skillsData: Skill[] = [
  // Frontend
  { name: 'React/Next.js', level: 95, category: 'frontend', icon: '⚛️' },
  { name: 'TypeScript', level: 90, category: 'frontend', icon: '🔷' },
  { name: 'Tailwind CSS', level: 92, category: 'frontend', icon: '🎨' },
  { name: 'Three.js', level: 85, category: 'frontend', icon: '🎮' },
  { name: 'GSAP', level: 88, category: 'frontend', icon: '✨' },

  // Backend
  { name: 'Python', level: 93, category: 'backend', icon: '🐍' },
  { name: 'Node.js', level: 87, category: 'backend', icon: '🟢' },
  { name: 'PostgreSQL', level: 85, category: 'backend', icon: '🐘' },
  { name: 'MongoDB', level: 82, category: 'backend', icon: '🍃' },
  { name: 'FastAPI', level: 88, category: 'backend', icon: '⚡' },

  // Network
  { name: 'Network Design', level: 91, category: 'network', icon: '🌐' },
  { name: 'Cisco Technologies', level: 89, category: 'network', icon: '📡' },
  { name: 'Security Protocols', level: 86, category: 'network', icon: '🔒' },
  { name: 'Cloud Networking', level: 84, category: 'network', icon: '☁️' },
  { name: 'Infrastructure', level: 87, category: 'network', icon: '🏗️' },

  // Design
  { name: 'UI/UX Design', level: 88, category: 'design', icon: '🎯' },
  { name: 'Adobe Creative', level: 85, category: 'design', icon: '🎨' },
  { name: 'Figma', level: 90, category: 'design', icon: '🔧' },
  { name: 'Branding', level: 83, category: 'design', icon: '🏷️' },
  { name: 'Motion Graphics', level: 80, category: 'design', icon: '🎬' },

  // Tools
  { name: 'Git/GitHub', level: 92, category: 'tools', icon: '📦' },
  { name: 'Docker', level: 85, category: 'tools', icon: '🐳' },
  { name: 'AWS/Vercel', level: 83, category: 'tools', icon: '☁️' },
  { name: 'Linux', level: 88, category: 'tools', icon: '🐧' },
  { name: 'VS Code', level: 95, category: 'tools', icon: '💻' },
];

const Skills = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const [activeCategory, setActiveCategory] = useState<string>('frontend');
  const [animatedSkills, setAnimatedSkills] = useState<Set<string>>(new Set());

  const categories = {
    frontend: { name: 'FRONTEND', color: 'from-crimson-red to-electric-blue' },
    backend: { name: 'BACKEND', color: 'from-electric-green to-electric-blue' },
    network: { name: 'NETWORK', color: 'from-electric-purple to-crimson-red' },
    design: { name: 'DESIGN', color: 'from-electric-blue to-electric-purple' },
    tools: { name: 'TOOLS', color: 'from-electric-green to-crimson-red' },
  };

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
    const skillBars = document.querySelectorAll('.skill-bar');
    skillBars.forEach((bar, index) => {
      setTimeout(() => {
        bar.classList.add('animate-skill-bar');
        const skillName = bar.getAttribute('data-skill');
        if (skillName) {
          setAnimatedSkills(prev => new Set(prev).add(skillName));
        }
      }, index * 100);
    });
  }, [activeCategory]);

  const filteredSkills = skillsData.filter(skill => skill.category === activeCategory);

  return (
    <section
      ref={sectionRef}
      id="skills"
      className="relative min-h-screen bg-crimson-black py-20 px-6 overflow-hidden"
    >
      {/* Background Grid */}
      <div className="absolute inset-0 bg-grid-pattern bg-grid opacity-10" />

      {/* Floating geometric shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-20 w-40 h-40 border border-electric-blue/20 rotate-45 animate-spin-slow"></div>
        <div className="absolute bottom-40 left-16 w-28 h-28 border border-crimson-red/20 rotate-12 animate-float"></div>
        <div className="absolute top-1/3 right-1/4 w-20 h-20 bg-gradient-to-r from-electric-green/10 to-electric-purple/10 rotate-45 animate-pulse"></div>
      </div>

      {/* Scan lines */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-electric-blue to-transparent animate-scan opacity-60" />
        <div className="absolute top-3/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-crimson-red to-transparent animate-scan opacity-40"
          style={{ animationDelay: '3s' }} />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2
            ref={titleRef}
            className="text-6xl md:text-8xl font-black mb-8 font-display text-engine"
          >
            SKILLS.
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-crimson-red to-electric-blue mx-auto mb-8"></div>
          <p className="text-xl text-crimson-gray max-w-3xl mx-auto font-mono">
            &gt; COMPREHENSIVE TOOLKIT SPANNING FULL-STACK DEVELOPMENT, NETWORK ENGINEERING, AND CREATIVE DESIGN
          </p>
        </div>

        {/* Category Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {Object.entries(categories).map(([key, category]) => (
            <button
              key={key}
              onClick={() => setActiveCategory(key)}
              className={`px-6 py-3 font-mono text-sm uppercase tracking-wider transition-all duration-300 border relative overflow-hidden group ${activeCategory === key
                  ? 'bg-crimson-red text-crimson-black border-crimson-red shadow-lg scale-105'
                  : 'bg-transparent text-crimson-bright border-crimson-red/30 hover:border-crimson-red hover:scale-105'
                }`}
            >
              <span className="relative z-10">{category.name}</span>
              {activeCategory !== key && (
                <div className="absolute inset-0 bg-crimson-red transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300" />
              )}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredSkills.map((skill, index) => (
            <div
              key={skill.name}
              className="group relative p-6 bg-crimson-dark/30 backdrop-blur-lg border border-crimson-red/20 hover:border-crimson-red transition-all duration-300 perspective-1000 transform-style-3d"
            >
              {/* Tech corner indicators */}
              <div className="absolute top-2 left-2 flex space-x-1">
                <div className="w-2 h-2 bg-electric-green animate-pulse" />
                <div className="w-2 h-2 bg-electric-blue animate-pulse" style={{ animationDelay: '0.5s' }} />
              </div>

              {/* Skill Header */}
              <div className="flex items-center gap-4 mb-4">
                <div className="text-3xl">{skill.icon}</div>
                <div>
                  <h3 className="text-lg font-semibold text-white font-display">{skill.name}</h3>
                  <p className="text-sm text-crimson-bright capitalize font-mono">{skill.category}</p>
                </div>
              </div>

              {/* Progress Bar */}
              <div className="relative">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm text-crimson-gray font-mono">PROFICIENCY</span>
                  <span className="text-sm font-medium text-crimson-red font-mono">{skill.level}%</span>
                </div>

                <div className="w-full bg-crimson-black border border-crimson-red/30 h-3 overflow-hidden">
                  <div
                    className={`skill-bar h-full bg-gradient-to-r ${categories[skill.category].color} transform scale-x-0 origin-left transition-transform duration-1000 ease-out relative`}
                    data-skill={skill.name}
                    style={{
                      transform: animatedSkills.has(skill.name) ? `scaleX(${skill.level / 100})` : 'scaleX(0)'
                    }}
                  >
                    {/* Progress bar scan line */}
                    <div className="absolute top-0 left-0 w-full h-px bg-white opacity-60 animate-scan" />
                  </div>
                </div>
              </div>

              {/* Hologram overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-crimson-red/10 via-transparent to-electric-blue/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Border scan effect */}
              <div className="absolute inset-0 border border-electric-blue opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-cyber-pulse" />
            </div>
          ))}
        </div>

        {/* Skill Summary */}
        <div className="mt-16 text-center">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="p-6 bg-crimson-dark/30 backdrop-blur-lg border border-electric-blue/20 group hover:border-electric-blue transition-all duration-300">
              <div className="text-3xl font-bold bg-gradient-to-r from-electric-blue to-crimson-red bg-clip-text text-transparent font-display">
                {skillsData.filter(s => s.category === 'frontend').length}
              </div>
              <div className="text-crimson-gray text-sm uppercase tracking-wider font-mono">Frontend Skills</div>
              <div className="absolute inset-0 bg-electric-blue opacity-0 group-hover:opacity-5 transition-opacity duration-500" />
            </div>

            <div className="p-6 bg-crimson-dark/30 backdrop-blur-lg border border-electric-green/20 group hover:border-electric-green transition-all duration-300">
              <div className="text-3xl font-bold bg-gradient-to-r from-electric-green to-electric-blue bg-clip-text text-transparent font-display">
                {skillsData.filter(s => s.category === 'backend').length}
              </div>
              <div className="text-crimson-gray text-sm uppercase tracking-wider font-mono">Backend Skills</div>
              <div className="absolute inset-0 bg-electric-green opacity-0 group-hover:opacity-5 transition-opacity duration-500" />
            </div>

            <div className="p-6 bg-crimson-dark/30 backdrop-blur-lg border border-electric-purple/20 group hover:border-electric-purple transition-all duration-300">
              <div className="text-3xl font-bold bg-gradient-to-r from-electric-purple to-crimson-red bg-clip-text text-transparent font-display">
                {skillsData.filter(s => s.category === 'network').length}
              </div>
              <div className="text-crimson-gray text-sm uppercase tracking-wider font-mono">Network Skills</div>
              <div className="absolute inset-0 bg-electric-purple opacity-0 group-hover:opacity-5 transition-opacity duration-500" />
            </div>

            <div className="p-6 bg-crimson-dark/30 backdrop-blur-lg border border-crimson-red/20 group hover:border-crimson-red transition-all duration-300">
              <div className="text-3xl font-bold bg-gradient-to-r from-crimson-red to-electric-blue bg-clip-text text-transparent font-display">
                {skillsData.filter(s => s.category === 'design').length + skillsData.filter(s => s.category === 'tools').length}
              </div>
              <div className="text-crimson-gray text-sm uppercase tracking-wider font-mono">Design & Tools</div>
              <div className="absolute inset-0 bg-crimson-red opacity-0 group-hover:opacity-5 transition-opacity duration-500" />
            </div>
          </div>
        </div>

        {/* Status indicators */}
        <div className="text-center mt-12">
          <div className="flex items-center justify-center space-x-8 font-mono text-sm">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-electric-green animate-pulse" />
              <span className="text-crimson-gray uppercase tracking-wider">SKILLS LOADED</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-crimson-red animate-pulse" />
              <span className="text-crimson-gray uppercase tracking-wider">READY FOR DEPLOYMENT</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;