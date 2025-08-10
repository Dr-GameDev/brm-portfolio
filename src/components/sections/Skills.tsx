'use client';

import React, { useEffect, useRef, useState } from 'react';

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
  const [activeCategory, setActiveCategory] = useState<string>('frontend');
  const [animatedSkills, setAnimatedSkills] = useState<Set<string>>(new Set());

  const categories = {
    frontend: { name: 'Frontend', color: 'from-blue-400 to-cyan-400' },
    backend: { name: 'Backend', color: 'from-green-400 to-emerald-400' },
    network: { name: 'Network', color: 'from-purple-400 to-pink-400' },
    design: { name: 'Design', color: 'from-orange-400 to-red-400' },
    tools: { name: 'Tools', color: 'from-yellow-400 to-orange-400' },
  };

  useEffect(() => {
    const observerOptions = {
      threshold: 0.3,
      rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in-up');

          // Animate skill bars with delay
          const skillBars = entry.target.querySelectorAll('.skill-bar');
          skillBars.forEach((bar, index) => {
            setTimeout(() => {
              bar.classList.add('animate-skill-bar');
              setAnimatedSkills(prev => new Set(prev).add(bar.getAttribute('data-skill') || ''));
            }, index * 100);
          });
        }
      });
    }, observerOptions);

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [activeCategory]);

  const filteredSkills = skillsData.filter(skill => skill.category === activeCategory);

  return (
    <section
      ref={sectionRef}
      id="skills"
      className="relative min-h-screen bg-gradient-to-br from-gray-950 via-black to-gray-950 py-20 px-6 overflow-hidden opacity-0 transform translate-y-8"
    >
      {/* Animated Background Grid */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,136,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,136,0.1)_1px,transparent_1px)] bg-[size:50px_50px] animate-pulse"></div>
      </div>

      {/* Floating geometric shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-20 w-40 h-40 border border-green-400/20 rotate-45 animate-spin-slow"></div>
        <div className="absolute bottom-40 left-16 w-28 h-28 border border-cyan-400/20 rotate-12 animate-bounce"></div>
        <div className="absolute top-1/3 right-1/4 w-20 h-20 bg-gradient-to-r from-green-400/10 to-cyan-400/10 rotate-45 animate-pulse"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-green-400 via-cyan-400 to-green-400 bg-clip-text text-transparent mb-6">
            SKILLS
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-green-400 to-cyan-400 mx-auto mb-8"></div>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            A comprehensive toolkit spanning full-stack development, network engineering, and creative design
          </p>
        </div>

        {/* Category Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {Object.entries(categories).map(([key, category]) => (
            <button
              key={key}
              onClick={() => setActiveCategory(key)}
              className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${activeCategory === key
                  ? `bg-gradient-to-r ${category.color} text-black shadow-lg scale-105`
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700 hover:scale-105'
                }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredSkills.map((skill, index) => (
            <div
              key={skill.name}
              className="group relative p-6 bg-gradient-to-br from-gray-900/50 to-black/50 rounded-lg border border-gray-800 hover:border-green-400/50 transition-all duration-300 hover:scale-105"
            >
              {/* Skill Header */}
              <div className="flex items-center gap-4 mb-4">
                <div className="text-3xl">{skill.icon}</div>
                <div>
                  <h3 className="text-lg font-semibold text-white">{skill.name}</h3>
                  <p className="text-sm text-gray-400 capitalize">{skill.category}</p>
                </div>
              </div>

              {/* Progress Bar */}
              <div className="relative">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm text-gray-400">Proficiency</span>
                  <span className="text-sm font-medium text-green-400">{skill.level}%</span>
                </div>

                <div className="w-full bg-gray-700 rounded-full h-3 overflow-hidden">
                  <div
                    className={`skill-bar h-full bg-gradient-to-r ${categories[skill.category].color} transform scale-x-0 origin-left transition-transform duration-1000 ease-out`}
                    data-skill={skill.name}
                    style={{
                      transform: animatedSkills.has(skill.name) ? `scaleX(${skill.level / 100})` : 'scaleX(0)'
                    }}
                  ></div>
                </div>
              </div>

              {/* Hover Effect Overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-green-400/10 to-cyan-400/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>

        {/* Skill Summary */}
        <div className="mt-16 text-center">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="p-6 bg-gradient-to-br from-gray-900/30 to-black/30 rounded-lg border border-gray-800">
              <div className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                {skillsData.filter(s => s.category === 'frontend').length}
              </div>
              <div className="text-gray-400 text-sm uppercase tracking-wide">Frontend Skills</div>
            </div>

            <div className="p-6 bg-gradient-to-br from-gray-900/30 to-black/30 rounded-lg border border-gray-800">
              <div className="text-3xl font-bold bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
                {skillsData.filter(s => s.category === 'backend').length}
              </div>
              <div className="text-gray-400 text-sm uppercase tracking-wide">Backend Skills</div>
            </div>

            <div className="p-6 bg-gradient-to-br from-gray-900/30 to-black/30 rounded-lg border border-gray-800">
              <div className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                {skillsData.filter(s => s.category === 'network').length}
              </div>
              <div className="text-gray-400 text-sm uppercase tracking-wide">Network Skills</div>
            </div>

            <div className="p-6 bg-gradient-to-br from-gray-900/30 to-black/30 rounded-lg border border-gray-800">
              <div className="text-3xl font-bold bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
                {skillsData.filter(s => s.category === 'design').length}
              </div>
              <div className="text-gray-400 text-sm uppercase tracking-wide">Design Skills</div>
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

        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
        }

        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }

        .animate-skill-bar {
          transform: scaleX(var(--skill-level, 1)) !important;
        }
      `}</style>
    </section>
  );
};

export default Skills;