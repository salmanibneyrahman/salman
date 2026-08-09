'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'motion/react';
import { gsap } from 'gsap';
import Image from 'next/image';

/* ─── Scramble-text hook ─────────────────────────────────────── */
function useScramble(text, trigger, speed = 28) {
  const [display, setDisplay] = useState(text);
  const chars = '!<>-_\\/[]{}—=+*^?#@$%&~`|';
  useEffect(() => {
    if (!trigger) return;
    let frame = 0;
    let raf;
    const iterations = text.length * 3;
    const tick = () => {
      setDisplay(
        text
          .split('')
          .map((ch, i) => {
            if (ch === ' ') return ' ';
            if (i < frame / 3) return text[i];
            return chars[Math.floor(Math.random() * chars.length)];
          })
          .join('')
      );
      frame++;
      if (frame < iterations) raf = requestAnimationFrame(tick);
      else setDisplay(text);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [trigger, text]);
  return display;
}

/* ─── Magnetic wrapper ───────────────────────────────────────── */
function Magnetic({ children, strength = 0.35 }) {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 200, damping: 18 });
  const sy = useSpring(y, { stiffness: 200, damping: 18 });

  const onMove = (e) => {
    const r = ref.current.getBoundingClientRect();
    x.set((e.clientX - r.left - r.width / 2) * strength);
    y.set((e.clientY - r.top - r.height / 2) * strength);
  };
  const onLeave = () => { x.set(0); y.set(0); };

  return (
    <motion.div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={{ x: sx, y: sy, display: 'inline-block' }}
    >
      {children}
    </motion.div>
  );
}

/* ─── Floating data chip ─────────────────────────────────────── */
function Chip({ style, delay, children }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.7, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.6, delay, ease: [0.23, 1, 0.32, 1] }}
      style={{
        position: 'absolute',
        display: 'flex',
        alignItems: 'center',
        gap: 8,
        padding: '8px 14px',
        borderRadius: 100,
        background: 'rgba(5,5,10,0.75)',
        border: '1px solid rgba(52,211,153,0.25)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        fontSize: 11,
        fontWeight: 700,
        letterSpacing: '0.06em',
        textTransform: 'uppercase',
        color: '#6ee7b7',
        whiteSpace: 'nowrap',
        zIndex: 20,
        boxShadow: '0 8px 32px rgba(0,0,0,0.4)',
        ...style,
      }}
    >
      {children}
    </motion.div>
  );
}

/* ─── Vertical marquee strip ─────────────────────────────────── */
const WORDS = [
  'NEXT.JS', 'PYTHON', 'REACT', 'ML', 'NODE', 'MONGO',
  'SCIKIT', 'EXPRESS', 'STRIPE', 'KERAS', 'VERCEL', 'TAILWIND',
];
function MarqueeStrip() {
  return (
    <div
      style={{
        position: 'absolute',
        right: 0,
        top: 0,
        bottom: 0,
        width: 44,
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        borderLeft: '1px solid rgba(52,211,153,0.08)',
        zIndex: 1,
      }}
    >
      <motion.div
        animate={{ y: ['0%', '-50%'] }}
        transition={{ duration: 18, repeat: Infinity, ease: 'linear' }}
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: 28,
          paddingTop: 20,
        }}
      >
        {[...WORDS, ...WORDS].map((w, i) => (
          <span
            key={i}
            style={{
              fontSize: 9,
              fontWeight: 800,
              letterSpacing: '0.18em',
              color: 'rgba(52,211,153,0.3)',
              writingMode: 'vertical-rl',
              textOrientation: 'mixed',
              transform: 'rotate(180deg)',
              fontFamily: "'JetBrains Mono','Fira Code',monospace",
            }}
          >
            {w}
          </span>
        ))}
      </motion.div>
    </div>
  );
}

/* ─── Noise SVG overlay ──────────────────────────────────────── */
function Noise() {
  return (
    <svg
      style={{
        position: 'absolute', inset: 0, width: '100%', height: '100%',
        opacity: 0.035, pointerEvents: 'none', zIndex: 2,
      }}
    >
      <filter id="hero-noise">
        <feTurbulence type="fractalNoise" baseFrequency="0.75" numOctaves="4" stitchTiles="stitch" />
        <feColorMatrix type="saturate" values="0" />
      </filter>
      <rect width="100%" height="100%" filter="url(#hero-noise)" />
    </svg>
  );
}

/* ─── Scan-line ring ─────────────────────────────────────────── */
function ScanRing() {
  return (
    <motion.div
      style={{
        position: 'absolute',
        inset: -3,
        borderRadius: '50%',
        border: '1px solid rgba(52,211,153,0.18)',
        pointerEvents: 'none',
      }}
      animate={{ rotate: 360 }}
      transition={{ duration: 24, repeat: Infinity, ease: 'linear' }}
    >
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: -5,
          width: 9,
          height: 9,
          borderRadius: '50%',
          background: '#34d399',
          boxShadow: '0 0 16px 4px #34d399',
          transform: 'translateY(-50%)',
        }}
      />
    </motion.div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   MAIN COMPONENT
═══════════════════════════════════════════════════════════════ */
export default function Hero() {
  const sectionRef = useRef(null);
  const lineRef = useRef(null);
  const [booted, setBooted] = useState(false);
  const [scramble1, setScramble1] = useState(false);
  const [scramble2, setScramble2] = useState(false);

  const headLine1 = useScramble('Engineering', scramble1);
  const headLine2 = useScramble('the possible.', scramble2);

  /* Boot sequence */
  useEffect(() => {
    const t1 = setTimeout(() => setBooted(true), 300);
    const t2 = setTimeout(() => setScramble1(true), 600);
    const t3 = setTimeout(() => setScramble2(true), 900);
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); };
  }, []);

  /* GSAP horizontal rule draw */
  useEffect(() => {
    if (!lineRef.current || !booted) return;
    gsap.fromTo(
      lineRef.current,
      { scaleX: 0, transformOrigin: 'left center' },
      { scaleX: 1, duration: 1.2, delay: 0.4, ease: 'power3.inOut' }
    );
  }, [booted]);

  /* Parallax orbs on mouse */
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const orb1X = useSpring(useTransform(mouseX, [0, 1], [-30, 30]), { stiffness: 60, damping: 20 });
  const orb1Y = useSpring(useTransform(mouseY, [0, 1], [-20, 20]), { stiffness: 60, damping: 20 });
  const orb2X = useSpring(useTransform(mouseX, [0, 1], [20, -20]), { stiffness: 40, damping: 20 });

  const onMouseMove = (e) => {
    const { innerWidth, innerHeight } = window;
    mouseX.set(e.clientX / innerWidth);
    mouseY.set(e.clientY / innerHeight);
  };

  return (
    <section
      ref={sectionRef}
      onMouseMove={onMouseMove}
      style={{
        minHeight: '100vh',
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        overflow: 'hidden',
        background: '#03030a',
        paddingTop: '7rem',
        paddingBottom: '4rem',
      }}
    >
      <Noise />

      {/* ── Deep-space gradient orbs ── */}
      <motion.div
        style={{
          position: 'absolute', top: '8%', left: '18%',
          width: 560, height: 560,
          background: 'radial-gradient(circle, rgba(52,211,153,0.09) 0%, transparent 68%)',
          borderRadius: '50%', pointerEvents: 'none', zIndex: 0, x: orb1X, y: orb1Y,
        }}
      />
      <motion.div
        style={{
          position: 'absolute', bottom: '5%', right: '12%',
          width: 420, height: 420,
          background: 'radial-gradient(circle, rgba(6,182,212,0.07) 0%, transparent 65%)',
          borderRadius: '50%', pointerEvents: 'none', zIndex: 0, x: orb2X,
        }}
      />
      <div
        style={{
          position: 'absolute', top: '35%', left: '-5%',
          width: 300, height: 300,
          background: 'radial-gradient(circle, rgba(16,185,129,0.05) 0%, transparent 70%)',
          borderRadius: '50%', pointerEvents: 'none', zIndex: 0,
        }}
      />

      {/* ── Top editorial bar ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: booted ? 1 : 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        style={{
          position: 'absolute', top: 112, left: 0, right: 0,
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          padding: '0 3rem', zIndex: 10, pointerEvents: 'none',
        }}
      >
        <span style={{
          fontSize: 10, fontWeight: 800, letterSpacing: '0.22em',
          color: 'rgba(52,211,153,0.45)', textTransform: 'uppercase',
          fontFamily: "'JetBrains Mono','Fira Code',monospace",
        }}>
          PORTFOLIO // 2025
        </span>
        <span style={{
          fontSize: 10, fontWeight: 800, letterSpacing: '0.22em',
          color: 'rgba(52,211,153,0.45)', textTransform: 'uppercase',
          fontFamily: "'JetBrains Mono','Fira Code',monospace",
        }}>
          SIR ◈ 01
        </span>
      </motion.div>

      {/* ── Main grid ── */}
      <div
        style={{
          position: 'relative', zIndex: 10,
          maxWidth: 1280, margin: '0 auto',
          padding: '0 3rem', width: '100%',
          display: 'grid',
          gridTemplateColumns: '1fr max-content',
          gap: '5rem',
          alignItems: 'center',
        }}
        className="hero-outer-grid"
      >

        {/* ════ LEFT COLUMN ════ */}
        <div style={{ display: 'flex', flexDirection: 'column' }}>

          {/* Index + status row */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: [0.23, 1, 0.32, 1] }}
            style={{
              display: 'flex', alignItems: 'center', gap: 20, marginBottom: 36,
            }}
          >
            <span style={{
              fontFamily: "'JetBrains Mono','Fira Code',monospace",
              fontSize: 11, fontWeight: 700, color: 'rgba(52,211,153,0.5)',
              letterSpacing: '0.15em',
            }}>
              00 — INTRO
            </span>
            <div style={{ flex: 1, maxWidth: 80, height: 1, background: 'rgba(52,211,153,0.2)' }} />
            <div style={{ display: 'flex', alignItems: 'center', gap: 7 }}>
              <motion.span
                animate={{ opacity: [1, 0.2, 1] }}
                transition={{ duration: 1.8, repeat: Infinity }}
                style={{
                  display: 'inline-block', width: 7, height: 7, borderRadius: '50%',
                  background: '#34d399', boxShadow: '0 0 10px #34d399',
                }}
              />
              <span style={{
                fontSize: 10, fontWeight: 800, letterSpacing: '0.2em',
                color: '#34d399', textTransform: 'uppercase',
                fontFamily: "'JetBrains Mono','Fira Code',monospace",
              }}>
                OPEN TO WORK
              </span>
            </div>
          </motion.div>

          {/* ── Display headline ── */}
          <div
            style={{ overflow: 'hidden', marginBottom: 8 }}
          >
            <motion.h1
              initial={{ y: '102%' }}
              animate={{ y: booted ? '0%' : '102%' }}
              transition={{ duration: 0.9, delay: 0.45, ease: [0.76, 0, 0.24, 1] }}
              style={{
                fontFamily: "'Syne','Inter',sans-serif",
                fontSize: 'clamp(3.8rem, 8.5vw, 9rem)',
                fontWeight: 800,
                lineHeight: 0.92,
                letterSpacing: '-0.045em',
                color: '#f0f0f8',
                margin: 0,
              }}
            >
              {headLine1}
            </motion.h1>
          </div>

          <div style={{ overflow: 'hidden', marginBottom: 32 }}>
            <motion.h1
              initial={{ y: '102%' }}
              animate={{ y: booted ? '0%' : '102%' }}
              transition={{ duration: 0.9, delay: 0.6, ease: [0.76, 0, 0.24, 1] }}
              style={{
                fontFamily: "'Syne','Inter',sans-serif",
                fontSize: 'clamp(3.8rem, 8.5vw, 9rem)',
                fontWeight: 800,
                lineHeight: 0.92,
                letterSpacing: '-0.045em',
                background: 'linear-gradient(100deg,#34d399 0%,#22d3ee 55%,#818cf8 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                margin: 0,
              }}
            >
              {headLine2}
            </motion.h1>
          </div>

          {/* ── Horizontal rule ── */}
          <div
            ref={lineRef}
            style={{
              height: 1,
              background: 'linear-gradient(90deg, rgba(52,211,153,0.5), rgba(34,211,238,0.2), transparent)',
              marginBottom: 32,
              transformOrigin: 'left center',
            }}
          />

          {/* ── Sub-headline ── */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.85, ease: [0.23, 1, 0.32, 1] }}
            style={{
              fontSize: 'clamp(0.95rem, 1.6vw, 1.12rem)',
              color: 'rgba(148,163,184,0.85)',
              lineHeight: 1.75,
              maxWidth: 560,
              marginBottom: 44,
              fontWeight: 400,
            }}
          >
            I'm{' '}
            <span style={{ color: '#e2e8f0', fontWeight: 600 }}>Salman Ibney Rahman</span>
            {' '}— CS graduate, Dhaka. By day I ship{' '}
            <span style={{ color: '#34d399', fontWeight: 500 }}>
              production web apps
            </span>{' '}
            with Next.js &amp; Node. In the same breath I build{' '}
            <span style={{ color: '#22d3ee', fontWeight: 500 }}>
              machine-learning pipelines
            </span>{' '}
            in Python. Two crafts, one obsession: things that work in the real world.
          </motion.p>

          {/* ── CTA row ── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1.0, ease: [0.23, 1, 0.32, 1] }}
            style={{ display: 'flex', alignItems: 'center', gap: 14, flexWrap: 'wrap' }}
          >
            {/* Resume — primary magnetic CTA */}
            <Magnetic strength={0.3}>
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  position: 'relative',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 12,
                  padding: '15px 32px',
                  borderRadius: 4,
                  background: 'linear-gradient(135deg,#34d399,#22d3ee)',
                  color: '#030712',
                  fontWeight: 800,
                  fontSize: 13,
                  letterSpacing: '0.06em',
                  textTransform: 'uppercase',
                  textDecoration: 'none',
                  overflow: 'hidden',
                  boxShadow: '0 0 40px rgba(52,211,153,0.3), 0 4px 20px rgba(0,0,0,0.4)',
                  transition: 'box-shadow 0.3s ease, transform 0.2s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow =
                    '0 0 60px rgba(52,211,153,0.5), 0 8px 30px rgba(0,0,0,0.5)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow =
                    '0 0 40px rgba(52,211,153,0.3), 0 4px 20px rgba(0,0,0,0.4)';
                }}
              >
                {/* shimmer sweep */}
                <motion.div
                  animate={{ x: ['-120%', '220%'] }}
                  transition={{ duration: 2.5, repeat: Infinity, repeatDelay: 1.5, ease: 'easeInOut' }}
                  style={{
                    position: 'absolute', inset: 0,
                    background: 'linear-gradient(105deg,transparent 40%,rgba(255,255,255,0.28) 50%,transparent 60%)',
                    pointerEvents: 'none',
                  }}
                />
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none"
                  stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3" />
                </svg>
                View Resume
              </a>
            </Magnetic>

            {/* Divider tick */}
            <span style={{
              width: 1, height: 36,
              background: 'rgba(52,211,153,0.2)',
            }} />

            {/* GitHub */}
            <Magnetic strength={0.4}>
              <a
                href="https://github.com/salmanibneyrahman"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                style={{
                  display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                  width: 48, height: 48,
                  borderRadius: 4,
                  border: '1px solid rgba(52,211,153,0.2)',
                  background: 'rgba(52,211,153,0.04)',
                  color: 'rgba(52,211,153,0.75)',
                  textDecoration: 'none',
                  transition: 'all 0.25s ease',
                  backdropFilter: 'blur(8px)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(52,211,153,0.55)';
                  e.currentTarget.style.background = 'rgba(52,211,153,0.1)';
                  e.currentTarget.style.color = '#34d399';
                  e.currentTarget.style.boxShadow = '0 0 20px rgba(52,211,153,0.15)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(52,211,153,0.2)';
                  e.currentTarget.style.background = 'rgba(52,211,153,0.04)';
                  e.currentTarget.style.color = 'rgba(52,211,153,0.75)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                <svg width="19" height="19" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
                </svg>
              </a>
            </Magnetic>

            {/* LinkedIn */}
            <Magnetic strength={0.4}>
              <a
                href="https://linkedin.com/in/salman-ibney-rahman"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                style={{
                  display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                  width: 48, height: 48,
                  borderRadius: 4,
                  border: '1px solid rgba(34,211,238,0.2)',
                  background: 'rgba(34,211,238,0.04)',
                  color: 'rgba(34,211,238,0.75)',
                  textDecoration: 'none',
                  transition: 'all 0.25s ease',
                  backdropFilter: 'blur(8px)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(34,211,238,0.55)';
                  e.currentTarget.style.background = 'rgba(34,211,238,0.1)';
                  e.currentTarget.style.color = '#22d3ee';
                  e.currentTarget.style.boxShadow = '0 0 20px rgba(34,211,238,0.15)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(34,211,238,0.2)';
                  e.currentTarget.style.background = 'rgba(34,211,238,0.04)';
                  e.currentTarget.style.color = 'rgba(34,211,238,0.75)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
            </Magnetic>
          </motion.div>

          {/* ── Stat strip ── */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.25 }}
            style={{
              display: 'flex', alignItems: 'stretch',
              gap: 0, marginTop: 60,
              borderTop: '1px solid rgba(52,211,153,0.1)',
              paddingTop: 28, maxWidth: 480,
            }}
          >
            {[
              { n: '9+', label: 'Projects\nshipped' },
              { n: '6', label: 'In\nproduction' },
              { n: '4+', label: 'Tech\ndomains' },
              { n: '∞', label: 'Problems\nsolved' },
            ].map((s, i) => (
              <div
                key={s.label}
                style={{
                  flex: 1,
                  padding: '0 20px 0 0',
                  borderRight: i < 3 ? '1px solid rgba(52,211,153,0.08)' : 'none',
                  marginRight: i < 3 ? 20 : 0,
                }}
              >
                <div style={{
                  fontFamily: "'Syne','Inter',sans-serif",
                  fontSize: 'clamp(1.6rem, 3vw, 2.4rem)',
                  fontWeight: 800,
                  letterSpacing: '-0.04em',
                  background: 'linear-gradient(135deg,#34d399,#22d3ee)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  lineHeight: 1,
                  marginBottom: 6,
                }}>
                  {s.n}
                </div>
                <div style={{
                  fontSize: 10, fontWeight: 700,
                  letterSpacing: '0.1em', textTransform: 'uppercase',
                  color: 'rgba(148,163,184,0.55)',
                  whiteSpace: 'pre',
                  fontFamily: "'JetBrains Mono','Fira Code',monospace",
                  lineHeight: 1.5,
                }}>
                  {s.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* ════ RIGHT COLUMN — Portrait ════ */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, x: 40 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.5, ease: [0.23, 1, 0.32, 1] }}
          style={{
            position: 'relative',
            width: 'clamp(280px, 28vw, 420px)',
            flexShrink: 0,
          }}
          className="hero-portrait-col"
        >
          {/* Floating chips */}
          <Chip style={{ top: '8%', left: '-22%' }} delay={1.1}>
            <span style={{
              width: 6, height: 6, borderRadius: '50%',
              background: '#34d399', boxShadow: '0 0 8px #34d399',
            }} />
            Next.js 16
          </Chip>
          <Chip style={{ top: '38%', right: '-20%' }} delay={1.3}>
            <span style={{ fontSize: 13 }}>🤖</span>
            ML Engineer
          </Chip>
          <Chip style={{ bottom: '14%', left: '-18%' }} delay={1.5}>
            <span style={{ fontSize: 13 }}>🌾</span>
            AgriTech
          </Chip>

          {/* Outer glow ring */}
          <div style={{
            position: 'absolute', inset: -12,
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(52,211,153,0.12) 0%, transparent 70%)',
            pointerEvents: 'none',
          }} />

          {/* Portrait frame */}
          <div
            style={{
              position: 'relative',
              width: '100%',
              aspectRatio: '3/4',
              borderRadius: 6,
              overflow: 'hidden',
              border: '1px solid rgba(52,211,153,0.15)',
              background: 'linear-gradient(160deg, rgba(52,211,153,0.06) 0%, rgba(3,3,10,0.8) 60%)',
              boxShadow: '0 40px 100px rgba(0,0,0,0.7), 0 0 60px rgba(52,211,153,0.08)',
            }}
          >
            {/* Scan ring inside frame */}
            <div style={{
              position: 'absolute', inset: 0,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              pointerEvents: 'none', zIndex: 5,
            }}>
              <div style={{ position: 'relative', width: 180, height: 180 }}>
                <ScanRing />
              </div>
            </div>

            {/* Corner brackets */}
            {[
              { top: 14, left: 14, borderTop: '2px solid #34d399', borderLeft: '2px solid #34d399' },
              { top: 14, right: 14, borderTop: '2px solid #34d399', borderRight: '2px solid #34d399' },
              { bottom: 14, left: 14, borderBottom: '2px solid #34d399', borderLeft: '2px solid #34d399' },
              { bottom: 14, right: 14, borderBottom: '2px solid #34d399', borderRight: '2px solid #34d399' },
            ].map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.7 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.9 + i * 0.07 }}
                style={{
                  position: 'absolute', width: 22, height: 22,
                  zIndex: 10, pointerEvents: 'none', ...s,
                }}
              />
            ))}

            {/* Photo */}
            <Image
              src="/image.png"
              fill
              alt="Salman Ibney Rahman — Full-Stack Developer & ML Engineer"
              style={{ objectFit: 'cover', objectPosition: 'center 18%' }}
              priority
            />

            {/* Bottom gradient overlay */}
            <div style={{
              position: 'absolute', bottom: 0, left: 0, right: 0, height: '45%',
              background: 'linear-gradient(to top, rgba(3,3,10,0.95) 0%, transparent 100%)',
              zIndex: 3,
            }} />

            {/* Identity label */}
            <div style={{
              position: 'absolute', bottom: 22, left: 22, right: 22, zIndex: 6,
            }}>
              <div style={{
                fontFamily: "'JetBrains Mono','Fira Code',monospace",
                fontSize: 9, fontWeight: 800,
                letterSpacing: '0.22em', textTransform: 'uppercase',
                color: 'rgba(52,211,153,0.6)', marginBottom: 6,
              }}>
                — SUBJECT
              </div>
              <div style={{
                fontFamily: "'Syne','Inter',sans-serif",
                fontSize: 17, fontWeight: 800,
                letterSpacing: '-0.02em', color: '#f0f0f8',
                lineHeight: 1.2,
              }}>
                Salman Ibney<br />Rahman
              </div>
              <div style={{
                fontSize: 11, fontWeight: 500,
                color: 'rgba(148,163,184,0.65)', marginTop: 4,
                letterSpacing: '0.04em',
              }}>
                Full-Stack Dev &amp; ML Engineer
              </div>
            </div>

            {/* Scanline effect */}
            <motion.div
              animate={{ y: ['0%', '100%'] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'linear', repeatDelay: 2 }}
              style={{
                position: 'absolute', left: 0, right: 0,
                height: 2,
                background: 'linear-gradient(90deg,transparent,rgba(52,211,153,0.4),transparent)',
                zIndex: 8, pointerEvents: 'none',
              }}
            />
          </div>

          {/* Vertical marquee strip on right edge */}
          <div style={{
            position: 'absolute', top: 0, right: -44, bottom: 0,
            display: 'flex', flexDirection: 'column',
            alignItems: 'center', justifyContent: 'flex-start',
            overflow: 'hidden', width: 40,
          }}>
            <MarqueeStrip />
          </div>
        </motion.div>
      </div>

      {/* ── Bottom-left coordinate label ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.35 }}
        transition={{ delay: 1.6, duration: 0.8 }}
        style={{
          position: 'absolute', bottom: 28, left: 48,
          fontFamily: "'JetBrains Mono','Fira Code',monospace",
          fontSize: 9, fontWeight: 700, letterSpacing: '0.18em',
          color: '#34d399', textTransform: 'uppercase', zIndex: 10,
        }}
      >
        23.8103° N, 90.4125° E — DHAKA, BD
      </motion.div>

      {/* ── Bottom-right scroll hint ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 0.8 }}
        style={{
          position: 'absolute', bottom: 28, right: 48,
          display: 'flex', alignItems: 'center', gap: 10,
          zIndex: 10,
        }}
      >
        <motion.div
          animate={{ y: [0, 5, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
          style={{
            display: 'flex', flexDirection: 'column',
            alignItems: 'center', gap: 3,
          }}
        >
          <div style={{ width: 1, height: 28, background: 'linear-gradient(to bottom,rgba(52,211,153,0.5),transparent)' }} />
          <div style={{ width: 5, height: 5, borderRadius: '50%', background: '#34d399', boxShadow: '0 0 8px #34d399' }} />
        </motion.div>
        <span style={{
          fontFamily: "'JetBrains Mono','Fira Code',monospace",
          fontSize: 9, fontWeight: 700, letterSpacing: '0.18em',
          color: 'rgba(52,211,153,0.45)', textTransform: 'uppercase',
        }}>
          SCROLL
        </span>
      </motion.div>

      {/* ── Responsive styles ── */}
      <style jsx global>{`
        @media (max-width: 900px) {
          .hero-outer-grid {
            grid-template-columns: 1fr !important;
            gap: 3rem !important;
            padding: 0 1.5rem !important;
          }
          .hero-portrait-col {
            width: clamp(240px, 70vw, 360px) !important;
            margin: 0 auto !important;
          }
        }
        @media (max-width: 500px) {
          .hero-outer-grid {
            padding: 0 1rem !important;
          }
        }
      `}</style>
    </section>
  );
}