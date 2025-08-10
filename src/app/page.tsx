import { Suspense } from 'react';
import { HydrateClient } from "@/trpc/server";
import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Projects from '@/components/sections/Projects';
import Skills from '@/components/sections/Skills';
import Contact from '@/components/sections/Contact';
import Navigation from '@/components/ui/Navigation';
import CustomCursor from '@/components/ui/CustomCursor';
import ParticleSystem from '@/components/three/ParticleSystem';
import LoadingWrapper from '@/components/layout/LoadingWrapper';
import Testimonials from '@/components/sections/Testimonials';

export default function Home() {
  return (
    <HydrateClient>
      <LoadingWrapper>
        <div className="bg-crimson-black text-black min-h-screen overflow-x-hidden">
          {/* Custom Cursor */}
          <CustomCursor />

          {/* Three.js Background */}
          <Suspense fallback={<div className="fixed inset-0 bg-crimson-black" />}>
            <ParticleSystem />
          </Suspense>

          {/* Navigation */}
          <Navigation />

          {/* Sections */}
          <main>
            <Hero />
            <About />
            <Projects />
            <Skills />
            <Testimonials />
            <Contact />
          </main>

          {/* Footer */}
          <footer className="py-8 border-t border-crimson-red/20 bg-crimson-black/50 backdrop-blur-sm">
            <div className="max-w-7xl mx-auto px-6 text-center">
              <p className="text-crimson-gray/70 font-mono">
                © 2025 BRM. <span className="text-crimson-red">ENGINEERED</span> FOR EXCELLENCE.
              </p>
            </div>
          </footer>
        </div>
      </LoadingWrapper>
    </HydrateClient>
  );
}