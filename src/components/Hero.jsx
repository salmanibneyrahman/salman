'use client';

import { useRef } from 'react';
import { motion, useMotionValue, useSpring } from 'motion/react';
import Image from 'next/image';

const MONO = "'JetBrains Mono','Fira Code',monospace";
const DISPLAY = "'Syne','Inter',sans-serif";

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
  const onLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div ref={ref} onMouseMove={onMove} onMouseLeave={onLeave} style={{ x: sx, y: sy, display: 'inline-block' }}>
      {children}
    </motion.div>
  );
}

/* ─── Vertical marquee words (main code এর মতো) ─────────────── */
const WORDS = [
  'NEXT.JS', 'PYTHON', 'REACT', 'ML', 'NODE', 'MONGO',
  'SCIKIT', 'EXPRESS', 'STRIPE', 'KERAS', 'VERCEL', 'TAILWIND',
];

/* ─── Description words (stagger reveal এর জন্য) ─────────────── */
const DESC_WORDS = [
  { t: 'Hi,' }, { t: "I'm" },
  { t: 'Salman', g: true }, { t: 'Ibney', g: true }, { t: 'Rahman', g: true },
  { t: '—' }, { t: 'a' }, { t: 'CS' }, { t: 'graduate' }, { t: 'living' }, { t: 'at' }, { t: 'the' },
  { t: 'intersection' }, { t: 'of' },
  { t: 'web', c: '#6ee7b7' }, { t: 'engineering', c: '#6ee7b7' },
  { t: 'and' },
  { t: 'machine', c: '#67e8f9' }, { t: 'learning.', c: '#67e8f9' },
  { t: 'I' }, { t: 'transform' }, { t: 'messy' }, { t: 'real-world' }, { t: 'data' }, { t: 'into' },
  { t: 'high-performance', w: true }, { t: 'web' }, { t: 'products' }, { t: 'that' }, { t: 'scale' },
  { t: 'seamlessly.' },
];

export default function Hero() {
  const handleResumeClick = () => {
    // Direct link to resume PDF placed in /public/resume.pdf
    window.open('/resume.pdf', '_blank');
  };

  const lines = [
    { text: 'SALMAN', style: { color: '#f0f0f8' } },
    { text: 'IBNEY', style: { color: 'transparent', WebkitTextStroke: '1.5px rgba(52,211,153,0.6)' } },
    {
      text: 'RAHMAN',
      style: {
        background: 'linear-gradient(100deg,#34d399 0%,#22d3ee 60%,#818cf8 100%)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        backgroundClip: 'text',
        filter: 'drop-shadow(0 0 18px rgba(34,211,238,0.25))',
      },
    },
  ];

  return (
    <section className="relative min-h-screen pt-32 pb-20 flex items-center justify-center overflow-hidden" style={{ background: '#03030a' }}>
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=JetBrains+Mono:wght@500;700;800&display=swap');`}</style>

      {/* Background ambient lighting effects (main code) */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[350px] h-[350px] bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">

        {/* ══ Left Column ══ */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="lg:col-span-7 flex flex-col gap-6"
        >
          {/* Status Badge (main code) */}
          <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full glass-card border border-emerald-500/30 w-fit">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
            </span>
            <span
              className="text-[10px] font-bold tracking-[0.22em] text-emerald-300 uppercase"
              style={{ fontFamily: MONO }}
            >
              Full-Stack Web Developer &amp; ML Engineer
            </span>
          </div>

          {/* Stacked name — line-mask reveal */}
          <div>
            {lines.map((l, i) => (
              <div key={l.text} style={{ overflow: 'hidden' }}>
                <motion.h1
                  initial={{ y: '110%' }}
                  animate={{ y: '0%' }}
                  transition={{ duration: 0.95, delay: 0.35 + i * 0.12, ease: [0.76, 0, 0.24, 1] }}
                  style={{
                    fontFamily: DISPLAY,
                    fontSize: 'clamp(2.6rem, 6vw, 5.6rem)',
                    fontWeight: 900,
                    lineHeight: 1.02,
                    letterSpacing: '-0.04em',
                    textTransform: 'uppercase',
                    margin: 0,
                    ...l.style,
                  }}
                >
                  {l.text}
                </motion.h1>
              </div>
            ))}
          </div>

          {/* Description — word-by-word blur/stagger reveal */}
          <p className="text-base sm:text-lg font-normal leading-[1.8] max-w-2xl" style={{ color: 'rgba(148,163,184,0.9)' }}>
            {DESC_WORDS.map((wd, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 14, filter: 'blur(6px)' }}
                animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                transition={{ duration: 0.5, delay: 0.9 + i * 0.028, ease: [0.23, 1, 0.32, 1] }}
                style={{
                  display: 'inline-block',
                  marginRight: '0.32em',
                  ...(wd.g
                    ? {
                        background: 'linear-gradient(90deg,#34d399,#22d3ee)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text',
                        fontWeight: 600,
                      }
                    : {}),
                  ...(wd.c ? { color: wd.c, fontWeight: 500 } : {}),
                  ...(wd.w ? { color: '#f0f0f8', fontWeight: 500 } : {}),
                }}
              >
                {wd.t}
              </motion.span>
            ))}
          </p>

          {/* Action Buttons — main code এর layout (নীচে, বাঁ থেকে) */}
          <div className="flex flex-wrap items-center gap-4 pt-4">
            {/* Resume Button — magnetic + shimmer */}
            <Magnetic strength={0.3}>
              <button
                onClick={handleResumeClick}
                className="group relative inline-flex items-center gap-3 px-7 py-3.5 rounded-full bg-emerald-400 text-black font-semibold text-sm hover:bg-emerald-300 transition-all shadow-lg shadow-emerald-500/25 hover:shadow-emerald-500/40 hover:-translate-y-0.5 active:translate-y-0 overflow-hidden"
              >
                <motion.div
                  aria-hidden
                  animate={{ x: ['-120%', '220%'] }}
                  transition={{ duration: 1.6, repeat: Infinity, repeatDelay: 0.7, ease: 'easeInOut' }}
                  className="absolute inset-0 pointer-events-none"
                  style={{ background: 'linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.35) 50%, transparent 60%)' }}
                />
                <span>View &amp; Download Resume</span>
                <svg
                  className="w-4 h-4 transition-transform group-hover:translate-y-0.5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </button>
            </Magnetic>

            {/* Social Buttons (main code) */}
            <div className="flex items-center gap-3">
              <Magnetic strength={0.4}>
                <a
                  href="https://github.com/salmanibneyrahman"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub Profile"
                  style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: 48, height: 48, borderRadius: 4, border: '1px solid rgba(52,211,153,0.2)', background: 'rgba(52,211,153,0.04)', color: 'rgba(52,211,153,0.75)', textDecoration: 'none', transition: 'all 0.25s ease', backdropFilter: 'blur(8px)' }}
                  onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'rgba(52,211,153,0.55)'; e.currentTarget.style.background = 'rgba(52,211,153,0.1)'; e.currentTarget.style.color = '#34d399'; e.currentTarget.style.boxShadow = '0 0 20px rgba(52,211,153,0.15)'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'rgba(52,211,153,0.2)'; e.currentTarget.style.background = 'rgba(52,211,153,0.04)'; e.currentTarget.style.color = 'rgba(52,211,153,0.75)'; e.currentTarget.style.boxShadow = 'none'; }}
                >
                  <svg width="19" height="19" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
                  </svg>
                </a>
              </Magnetic>

              <Magnetic strength={0.4}>
                <a
                  href="https://linkedin.com/in/salman-ibney-rahman"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn Profile"
                  style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: 48, height: 48, borderRadius: 4, border: '1px solid rgba(52,211,153,0.2)', background: 'rgba(52,211,153,0.04)', color: 'rgba(52,211,153,0.75)', textDecoration: 'none', transition: 'all 0.25s ease', backdropFilter: 'blur(8px)' }}
                  onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'rgba(52,211,153,0.55)'; e.currentTarget.style.background = 'rgba(52,211,153,0.1)'; e.currentTarget.style.color = '#34d399'; e.currentTarget.style.boxShadow = '0 0 20px rgba(52,211,153,0.15)'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'rgba(52,211,153,0.2)'; e.currentTarget.style.background = 'rgba(52,211,153,0.04)'; e.currentTarget.style.color = 'rgba(52,211,153,0.75)'; e.currentTarget.style.boxShadow = 'none'; }}
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
              </Magnetic>
            </div>
          </div>
        </motion.div>

        {/* ══ Right Column — main code এর মতো হুবহু ══ */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="lg:col-span-5 flex justify-center"
        >
          <div className="relative w-full max-w-sm">
            <div className="relative w-full aspect-[4/5] rounded-3xl p-1 bg-gradient-to-b from-emerald-500/30 via-white/10 to-cyan-500/20 shadow-2xl">
              <div className="w-full h-full rounded-[22px] bg-zinc-950/90 overflow-hidden relative flex flex-col justify-end p-6 border border-white/10">
                {/* ✅ তোমার ছবি */}
                <Image
                  src="/image.png"
                  fill
                  alt="Salman Ibney Rahman — Full-Stack Web Developer & ML Engineer"
                  className="absolute inset-0 w-full h-full object-cover object-[center_18%]"
                />
              </div>
            </div>

            {/* ✅ Vertical marquee strip — ছবির পাশে (main code) */}
            <div
              className="absolute top-0 bottom-0 -right-14 w-11 overflow-hidden hidden md:block"
              style={{ borderLeft: '1px solid rgba(52,211,153,0.08)' }}
            >
              <motion.div
                animate={{ y: ['0%', '-50%'] }}
                transition={{ duration: 18, repeat: Infinity, ease: 'linear' }}
                className="flex flex-col items-center gap-7 pt-5"
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
                      fontFamily: MONO,
                    }}
                  >
                    {w}
                  </span>
                ))}
              </motion.div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
