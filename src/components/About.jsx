'use client';

import { motion } from 'motion/react';
import {
  SiNextdotjs,
  SiReact,
  SiTypescript,
  SiJavascript,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiPython,
  SiTensorflow,
  SiPytorch,
  SiScikitlearn,
  SiPandas,
  SiNumpy,
  SiOpencv,
  SiStripe,
  SiTailwindcss,
  SiVercel,
  SiStreamlit,
  SiGit,
  SiGithub,
} from 'react-icons/si';

/* ─── Noise overlay ──────────────────────────────────────────── */
function Noise({ opacity = 0.03 }) {
  return (
    <svg
      style={{
        position: 'absolute',
        inset: 0,
        width: '100%',
        height: '100%',
        opacity,
        pointerEvents: 'none',
        zIndex: 2,
      }}
    >
      <filter id="about-noise">
        <feTurbulence type="fractalNoise" baseFrequency="0.72" numOctaves="4" stitchTiles="stitch" />
        <feColorMatrix type="saturate" values="0" />
      </filter>
      <rect width="100%" height="100%" filter="url(#about-noise)" />
    </svg>
  );
}

/* ─── Corner bracket (reusable) ─────────────────────────────── */
function Bracket({ pos, color = '#34d399', size = 18, thickness = 1.5, delay = 0 }) {
  const style = {
    position: 'absolute',
    width: size,
    height: size,
    pointerEvents: 'none',
    zIndex: 10,
    ...pos,
  };
  const borders = {};
  if (pos.top !== undefined) borders.borderTop = `${thickness}px solid ${color}`;
  if (pos.bottom !== undefined) borders.borderBottom = `${thickness}px solid ${color}`;
  if (pos.left !== undefined) borders.borderLeft = `${thickness}px solid ${color}`;
  if (pos.right !== undefined) borders.borderRight = `${thickness}px solid ${color}`;
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay }}
      style={{ ...style, ...borders }}
    />
  );
}

/* ─── Mono label — contrast বাড়ানো হয়েছে ───────────────────── */
function MonoLabel({ children, color = 'rgba(52,211,153,0.8)', style = {} }) {
  return (
    <span
      style={{
        fontFamily: "'JetBrains Mono','Fira Code',monospace",
        fontSize: 10,
        fontWeight: 800,
        letterSpacing: '0.2em',
        textTransform: 'uppercase',
        color,
        ...style,
      }}
    >
      {children}
    </span>
  );
}

/* ─── Story paragraph with line accent — text উজ্জ্বল ───────── */
function StoryPara({ children, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -16 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.55, delay: 0.1 * index, ease: [0.23, 1, 0.32, 1] }}
      style={{ display: 'flex', gap: 18, alignItems: 'flex-start' }}
    >
      <div style={{ flexShrink: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', paddingTop: 6 }}>
        <div style={{ width: 1, height: 8, background: 'linear-gradient(to bottom, transparent, rgba(52,211,153,0.7))' }} />
        <div style={{ width: 5, height: 5, borderRadius: '50%', background: '#34d399', boxShadow: '0 0 8px rgba(52,211,153,0.6)', margin: '3px 0' }} />
        <div style={{ width: 1, flex: 1, minHeight: 24, background: 'linear-gradient(to bottom, rgba(52,211,153,0.35), transparent)' }} />
      </div>
      <p
        style={{
          color: index === 0 ? 'rgba(240,244,255,0.95)' : 'rgba(203,213,225,0.88)',
          fontSize: 15,
          lineHeight: 1.85,
          fontWeight: index === 0 ? 500 : 400,
          margin: 0,
          paddingBottom: 4,
        }}
      >
        {children}
      </p>
    </motion.div>
  );
}

/* ─── Code terminal block — contrast fix ────────────────────── */
function Terminal() {
  const SL = 'rgba(203,213,225,0.75)'; // punctuation — আগে 0.4 ছিল, এখন পড়া যায়
  const lines = [
    {
      indent: 0, tokens: [
        { t: 'const ', c: '#c084fc' },
        { t: 'profile', c: '#a78bfa' },
        { t: ' = {', c: SL },
      ]
    },
    {
      indent: 1, tokens: [
        { t: 'name', c: '#34d399' },
        { t: ': ', c: SL },
        { t: "'Salman Ibney Rahman'", c: '#22d3ee' },
        { t: ',', c: SL },
      ]
    },
    {
      indent: 1, tokens: [
        { t: 'role', c: '#34d399' },
        { t: ': ', c: SL },
        { t: "['Full-Stack', 'ML Engineer']", c: '#22d3ee' },
        { t: ',', c: SL },
      ]
    },
    {
      indent: 1, tokens: [
        { t: 'based', c: '#34d399' },
        { t: ': ', c: SL },
        { t: "'Dhaka, Bangladesh'", c: '#fbbf24' },
        { t: ',', c: SL },
      ]
    },
    {
      indent: 1, tokens: [
        { t: 'shipped', c: '#34d399' },
        { t: ': ', c: SL },
        { t: '9', c: '#f472b6' },
        { t: ', live: ', c: SL },
        { t: '6', c: '#f472b6' },
        { t: ',', c: SL },
      ]
    },
    {
      indent: 1, tokens: [
        { t: 'capstone', c: '#34d399' },
        { t: ': ', c: SL },
        { t: "'AgriTech ML — Bangladesh'", c: '#22d3ee' },
        { t: ',', c: SL },
      ]
    },
    {
      indent: 1, tokens: [
        { t: 'measures', c: '#34d399' },
        { t: ': ', c: SL },
        { t: 'true', c: '#a78bfa' },
        { t: ',', c: SL },
      ]
    },
    { indent: 0, tokens: [{ t: '};', c: SL }] },
    { indent: 0, tokens: [] },
    {
      indent: 0, tokens: [
        { t: 'export default ', c: '#c084fc' },
        { t: 'profile', c: '#a78bfa' },
        { t: ';', c: SL },
      ]
    },
  ];

  return (
    <div
      style={{
        position: 'relative',
        borderRadius: 6,
        background: 'rgba(8,10,20,0.9)',
        border: '1px solid rgba(52,211,153,0.22)',
        overflow: 'hidden',
      }}
    >
      <Bracket pos={{ top: 10, left: 10 }} size={14} delay={0.4} />
      <Bracket pos={{ top: 10, right: 10 }} size={14} delay={0.5} />
      <Bracket pos={{ bottom: 10, left: 10 }} size={14} delay={0.6} />
      <Bracket pos={{ bottom: 10, right: 10 }} size={14} delay={0.7} />

      {/* Title bar */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '12px 20px',
          borderBottom: '1px solid rgba(52,211,153,0.15)',
          background: 'rgba(52,211,153,0.06)',
        }}
      >
        <div style={{ display: 'flex', gap: 7 }}>
          {['#ff5f57', '#ffbd2e', '#28ca41'].map((c) => (
            <div key={c} style={{ width: 10, height: 10, borderRadius: '50%', background: c, opacity: 0.9 }} />
          ))}
        </div>
        <MonoLabel color="rgba(52,211,153,0.7)">profile.js</MonoLabel>
        <MonoLabel color="rgba(52,211,153,0.45)">UTF-8</MonoLabel>
      </div>

      {/* Code */}
      <div style={{ padding: '20px 24px 24px', position: 'relative', zIndex: 3 }}>
        <div
          style={{
            position: 'absolute',
            left: 0,
            top: '3.5rem',
            bottom: 0,
            width: 38,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-end',
            paddingRight: 10,
            gap: 2,
          }}
        >
          {lines.map((_, i) => (
            <span
              key={i}
              style={{
                fontFamily: "'JetBrains Mono',monospace",
                fontSize: 10,
                lineHeight: '1.9',
                color: 'rgba(52,211,153,0.4)',
                userSelect: 'none',
              }}
            >
              {i + 1}
            </span>
          ))}
        </div>

        <div style={{ paddingLeft: 32 }}>
          {lines.map((line, li) => (
            <motion.div
              key={li}
              initial={{ opacity: 0, x: -8 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: 0.05 * li }}
              style={{
                fontFamily: "'JetBrains Mono','Fira Code',monospace",
                fontSize: 12.5,
                lineHeight: '1.9',
                paddingLeft: line.indent * 18,
                whiteSpace: 'nowrap',
              }}
            >
              {line.tokens.map((tok, ti) => (
                <span key={ti} style={{ color: tok.c }}>{tok.t}</span>
              ))}
              {line.tokens.length === 0 && <span>&nbsp;</span>}
            </motion.div>
          ))}
        </div>

        {/* Blinking cursor */}
        <motion.div
          animate={{ opacity: [1, 0, 1] }}
          transition={{ duration: 1, repeat: Infinity }}
          style={{
            display: 'inline-block',
            marginLeft: 32,
            width: 7,
            height: 14,
            background: '#34d399',
            verticalAlign: 'middle',
            borderRadius: 1,
          }}
        />
      </div>

      {/* Bottom scanline */}
      <motion.div
        animate={{ y: ['0%', '1200%'] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'linear', repeatDelay: 3 }}
        style={{
          position: 'absolute',
          left: 0,
          right: 0,
          height: 1,
          background: 'linear-gradient(90deg,transparent,rgba(52,211,153,0.45),transparent)',
          zIndex: 4,
          top: 0,
        }}
      />
    </div>
  );
}

/* ─── Tech marquee — উপরে logo, নিচে নাম (pic-এর মতো) ───────── */
const TECHS = [
  { name: 'Next.js', Icon: SiNextdotjs, color: '#ffffff' },
  { name: 'React', Icon: SiReact, color: '#61DAFB' },
  { name: 'TypeScript', Icon: SiTypescript, color: '#3178C6' },
  { name: 'JavaScript', Icon: SiJavascript, color: '#F7DF1E' },
  { name: 'Node.js', Icon: SiNodedotjs, color: '#5FA04E' },
  { name: 'Express', Icon: SiExpress, color: '#ffffff' },
  { name: 'MongoDB', Icon: SiMongodb, color: '#47A248' },
  { name: 'Python', Icon: SiPython, color: '#4B8BBE' },
  { name: 'TensorFlow', Icon: SiTensorflow, color: '#FF6F00' },
  { name: 'PyTorch', Icon: SiPytorch, color: '#EE4C2C' },
  { name: 'scikit-learn', Icon: SiScikitlearn, color: '#F7931E' },
  { name: 'Pandas', Icon: SiPandas, color: '#E70488' },
  { name: 'NumPy', Icon: SiNumpy, color: '#7395CF' },
  { name: 'OpenCV', Icon: SiOpencv, color: '#8B78F5' },
  { name: 'Stripe', Icon: SiStripe, color: '#8A83FF' },
  { name: 'Tailwind', Icon: SiTailwindcss, color: '#38BDF8' },
  { name: 'Vercel', Icon: SiVercel, color: '#ffffff' },
  { name: 'Streamlit', Icon: SiStreamlit, color: '#FF4B4B' },
  { name: 'Git', Icon: SiGit, color: '#F05032' },
  { name: 'GitHub', Icon: SiGithub, color: '#e6edf3' },
];

function TechMarquee() {
  return (
    <div
      style={{
        position: 'relative',
        overflow: 'hidden',
        borderTop: '1px solid rgba(52,211,153,0.12)',
        borderBottom: '1px solid rgba(52,211,153,0.12)',
        padding: '28px 0',
        background: 'rgba(5,8,16,0.6)',
      }}
    >
      {/* fade edges */}
      <div
        style={{
          position: 'absolute', top: 0, left: 0, bottom: 0, width: 90, zIndex: 2,
          background: 'linear-gradient(90deg,#03030a,transparent)', pointerEvents: 'none',
        }}
      />
      <div
        style={{
          position: 'absolute', top: 0, right: 0, bottom: 0, width: 90, zIndex: 2,
          background: 'linear-gradient(-90deg,#03030a,transparent)', pointerEvents: 'none',
        }}
      />

      <motion.div
        animate={{ x: ['0%', '-50%'] }}
        transition={{ duration: 36, repeat: Infinity, ease: 'linear' }}
        style={{ display: 'flex', gap: 18, width: 'max-content' }}
      >
        {[...TECHS, ...TECHS].map((t, i) => {
          const Icon = t.Icon;
          return (
            <div
              key={i}
              className="group"
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: 12,
                padding: '18px 26px',
                borderRadius: 10,
                border: '1px solid rgba(52,211,153,0.16)',
                background: 'rgba(10,14,24,0.85)',
                backdropFilter: 'blur(12px)',
                minWidth: 116,
              }}
            >
              <span
                className="transition-transform duration-300 group-hover:scale-125 group-hover:-rotate-6"
                style={{ display: 'inline-flex', filter: `drop-shadow(0 0 10px ${t.color}55)` }}
              >
                <Icon size={26} color={t.color} />
              </span>
              <span
                style={{
                  fontFamily: "'JetBrains Mono','Fira Code',monospace",
                  fontSize: 11,
                  fontWeight: 800,
                  letterSpacing: '0.08em',
                  color: '#e2e8f0',
                  whiteSpace: 'nowrap',
                }}
              >
                {t.name}
              </span>
            </div>
          );
        })}
      </motion.div>
    </div>
  );
}

/* ═══ MAIN COMPONENT ═══ */
export default function About() {
  return (
    <section
      id="about"
      style={{ position: 'relative', overflow: 'hidden', background: '#03030a', padding: '6rem 0 0' }}
    >
      <Noise opacity={0.028} />

      {/* Ambient orbs */}
      <div
        style={{
          position: 'absolute', top: '15%', right: '-8%', width: 500, height: 500,
          background: 'radial-gradient(circle, rgba(52,211,153,0.07) 0%, transparent 68%)',
          borderRadius: '50%', pointerEvents: 'none', zIndex: 1,
        }}
      />
      <div
        style={{
          position: 'absolute', bottom: '20%', left: '-5%', width: 400, height: 400,
          background: 'radial-gradient(circle, rgba(34,211,238,0.06) 0%, transparent 70%)',
          borderRadius: '50%', pointerEvents: 'none', zIndex: 1,
        }}
      />

      <div style={{ position: 'relative', zIndex: 10, maxWidth: 1280, margin: '0 auto', padding: '0 3rem' }}>
        {/* ══ SECTION HEADER — main code এর মতোই ══ */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-4 mb-16 text-center md:text-left"
        >
          <span className="text-xs font-mono uppercase tracking-widest text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-3.5 py-1.5 rounded-full">
            The Journey &amp; Story
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight pt-5">
            I build things that <span className="text-gradient-emerald">actually work</span> in the real world.
          </h2>
        </motion.div>

        {/* ══ MAIN GRID ══ */}
        <div
          className="about-main-grid"
          style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'start', marginBottom: '5rem' }}
        >
          {/* ── LEFT: Story (NARRATIVE // ORIGIN) ── */}
          <div>
            <div
              style={{
                position: 'relative',
                padding: '2.5rem',
                background: 'rgba(8,10,20,0.75)',
                border: '1px solid rgba(52,211,153,0.18)',
                borderRadius: 6,
                backdropFilter: 'blur(20px)',
              }}
            >
              <Bracket pos={{ top: 12, left: 12 }} size={16} delay={0.2} />
              <Bracket pos={{ top: 12, right: 12 }} size={16} delay={0.3} />
              <Bracket pos={{ bottom: 12, left: 12 }} size={16} delay={0.4} />
              <Bracket pos={{ bottom: 12, right: 12 }} size={16} delay={0.5} />

              <div
                style={{
                  display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                  marginBottom: 28, paddingBottom: 20,
                  borderBottom: '1px solid rgba(52,211,153,0.15)',
                }}
              >
                <MonoLabel>NARRATIVE // ORIGIN</MonoLabel>
                <div style={{ display: 'flex', gap: 5 }}>
                  {[0, 1, 2].map((i) => (
                    <motion.div
                      key={i}
                      animate={{ opacity: [0.4, 1, 0.4] }}
                      transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.5 }}
                      style={{ width: 5, height: 5, borderRadius: '50%', background: '#34d399' }}
                    />
                  ))}
                </div>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
                <StoryPara index={0}>
                  I didn&apos;t set out to become a developer — I just started{' '}
                  <span style={{ color: '#34d399', fontWeight: 600 }}>building</span>, got hooked,
                  and never stopped. Curiosity was the spark. Nine-plus shipped projects are the proof.
                </StoryPara>
                <StoryPara index={1}>
                  I love the whole arc: sculpting a clean interface, engineering a backend that holds
                  under pressure, and turning{' '}
                  <span style={{ color: '#22d3ee', fontWeight: 500 }}>noisy, messy data</span>{' '}
                  into a model that predicts something real.
                </StoryPara>
                <StoryPara index={2}>
                  By day I ship production apps with{' '}
                  <span style={{ color: '#34d399', fontWeight: 500 }}>Next.js, React, Node, MongoDB</span>.
                  In the same breath I build ML pipelines in{' '}
                  <span style={{ color: '#22d3ee', fontWeight: 500 }}>Python</span>. Two crafts, one
                  obsession: things that work.
                </StoryPara>
                <StoryPara index={3}>
                  I care about performance, security, and numbers. If it ships,{' '}
                  <span style={{ color: '#f472b6', fontWeight: 500 }}>I measure it</span>.
                  Outside code: datasets, sustainability, and agricultural tech. I read data
                  the way other people read novels.
                </StoryPara>
              </div>
            </div>
          </div>

          {/* ── RIGHT: Terminal ── */}
          <div>
            <Terminal />
          </div>
        </div>
      </div>

      {/* ══ TECH MARQUEE (full-bleed) ══ */}
      <div style={{ position: 'relative', zIndex: 10 }}>
        <TechMarquee />
      </div>

      {/* Responsive */}
      <style jsx global>{`
        @media (max-width: 1024px) {
          .about-main-grid {
            grid-template-columns: 1fr !important;
            gap: 2.5rem !important;
          }
        }
        @media (max-width: 600px) {
          #about > div {
            padding: 0 1.25rem !important;
          }
        }
      `}</style>
    </section>
  );
}
