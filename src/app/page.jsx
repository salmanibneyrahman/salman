'use client';

import { useState } from 'react';
import { AnimatePresence } from 'motion/react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Education from '@/components/Education';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import CustomCursor from '@/components/CustomCursor';
import { LenisProvider } from '@/components/LenisProvider';
import Preloader from '@/components/Preloader';

export default function Home() {
  const [loading, setLoading] = useState(true);

  return (
    <>
      {/* Lando-style preloader — % counter শেষ হলে উপরে slide করে সরে যাবে */}
      <AnimatePresence>
        {loading && <Preloader onDone={() => setLoading(false)} />}
      </AnimatePresence>

      {!loading && (
        <LenisProvider>
          <CustomCursor />
          <Navbar />
          <main>
            <Hero />
            <About />
            <Skills />
            <Education />
            <Projects />
            <Contact />
          </main>
          <Footer />
        </LenisProvider>
      )}
    </>
  );
}
