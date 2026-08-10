'use client';

import { motion } from 'motion/react';

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

/* ─── Mono label ─────────────────────────────────────────────── */
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

/* ─── Story paragraph with line accent ──────────────────────── */
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

/* ─── profile.js code body (window-এর ডান pane) ──────────────── */
function TerminalBody() {
  const SL = 'rgba(203,213,225,0.75)';
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
    <div style={{ position: 'relative' }}>
      {/* Line numbers + code */}
      <div style={{ position: 'relative' }}>
        <div
          style={{
            position: 'absolute',
            left: 0,
            top: 0,
            bottom: 0,
            width: 34,
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

        <div style={{ paddingLeft: 30 }}>
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
            marginLeft: 30,
            width: 7,
            height: 14,
            background: '#34d399',
            verticalAlign: 'middle',
            borderRadius: 1,
          }}
        />
      </div>

      {/* Scanline */}
      <motion.div
        animate={{ y: ['0%', '1200%'] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'linear', repeatDelay: 3 }}
        style={{
          position: 'absolute',
          left: 0,
          right: 0,
          height: 1,
          background: 'linear-gradient(90deg,transparent,rgba(52,211,153,0.45),transparent)',
          pointerEvents: 'none',
          top: 0,
        }}
      />
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
        {/* ══ SECTION HEADER ══ */}
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

        {/* ══ SINGLE EDITOR WINDOW — split pane ══ */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.23, 1, 0.32, 1] }}
          style={{
            position: 'relative',
            borderRadius: 10,
            background: 'rgba(8,10,20,0.92)',
            border: '1px solid rgba(52,211,153,0.18)',
            backdropFilter: 'blur(20px)',
            overflow: 'hidden',
            marginBottom: '5rem',
            boxShadow: '0 30px 80px rgba(0,0,0,0.5), 0 0 60px rgba(52,211,153,0.05)',
          }}
        >
          {/* Window corner brackets */}
          <Bracket pos={{ bottom: 10, left: 10 }} size={16} delay={0.4} />
          <Bracket pos={{ bottom: 10, right: 10 }} size={16} delay={0.5} />

          {/* ── Title bar (Mac terminal style) ── */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: '12px 20px',
              borderBottom: '1px solid rgba(52,211,153,0.15)',
              background: 'rgba(52,211,153,0.05)',
            }}
          >
            <div style={{ display: 'flex', gap: 7 }}>
              {['#ff5f57', '#ffbd2e', '#28ca41'].map((c) => (
                <div key={c} style={{ width: 10, height: 10, borderRadius: '50%', background: c, opacity: 0.9 }} />
              ))}
            </div>
            <MonoLabel color="rgba(52,211,153,0.6)">salman@portfolio: ~/about</MonoLabel>
            <MonoLabel color="rgba(52,211,153,0.45)">UTF-8</MonoLabel>
          </div>

          {/* ── Split panes ── */}
          <div className="about-split" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr' }}>
            {/* ══ LEFT PANE: Narrative ══ */}
            <div style={{ padding: '2.2rem 2.5rem' }}>
              {/* Pane header */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  marginBottom: 26,
                  paddingBottom: 16,
                  borderBottom: '1px solid rgba(52,211,153,0.1)',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                  <div
                    style={{
                      fontFamily: 'monospace, ui-monospace',
                      fontSize: '0.85rem',
                      fontWeight: 700,
                      color: '#34d399',
                      letterSpacing: '0.2em',
                      textTransform: 'uppercase',
                      textShadow: '0 0 10px rgba(52,211,153,0.4)',
                    }}
                  >
                    NARRATIVE // ORIGIN
                  </div>
                  {/* Blinking cursor */}
                  <motion.div
                    animate={{ opacity: [0, 1, 0] }}
                    transition={{ duration: 0.8, repeat: Infinity, ease: 'linear' }}
                    style={{ width: 6, height: 12, background: '#34d399' }}
                  />
                </div>
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

              {/* Paragraphs */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
                {/* Para 1 */}
                <motion.div
                  initial={{ opacity: 0, clipPath: 'inset(0 100% 0 0)' }}
                  animate={{ opacity: 1, clipPath: 'inset(0 0% 0 0)' }}
                  transition={{ duration: 0.8, delay: 0.2, ease: 'easeInOut' }}
                >
                  <StoryPara index={0}>
                    I didn&apos;t set out to become a developer — I just started{' '}
                    <span style={{ color: '#34d399', fontWeight: 600 }}>building</span>, got hooked,
                    and never stopped. Curiosity was the spark. Nine-plus shipped projects are the proof.
                  </StoryPara>
                </motion.div>
                {/* Para 2 */}
                <motion.div
                  initial={{ opacity: 0, clipPath: 'inset(0 100% 0 0)' }}
                  animate={{ opacity: 1, clipPath: 'inset(0 0% 0 0)' }}
                  transition={{ duration: 0.8, delay: 0.8, ease: 'easeInOut' }}
                >
                  <StoryPara index={1}>
                    I love the whole arc: sculpting a clean interface, engineering a backend that holds
                    under pressure, and turning{' '}
                    <span style={{ color: '#34d399', fontWeight: 500 }}>noisy, messy data</span>{' '}
                    into a model that predicts something real.
                  </StoryPara>
                </motion.div>
                {/* Para 3 */}
                <motion.div
                  initial={{ opacity: 0, clipPath: 'inset(0 100% 0 0)' }}
                  animate={{ opacity: 1, clipPath: 'inset(0 0% 0 0)' }}
                  transition={{ duration: 0.8, delay: 1.4, ease: 'easeInOut' }}
                >
                  <StoryPara index={2}>
                    By day I ship production apps with{' '}
                    <span style={{ color: '#34d399', fontWeight: 500 }}>Next.js, React, Node, MongoDB</span>.
                    In the same breath I build ML pipelines in{' '}
                    <span style={{ color: '#34d399', fontWeight: 500 }}>Python</span>. Two crafts, one
                    obsession: things that work.
                  </StoryPara>
                </motion.div>
                {/* Para 4 */}
                <motion.div
                  initial={{ opacity: 0, clipPath: 'inset(0 100% 0 0)' }}
                  animate={{ opacity: 1, clipPath: 'inset(0 0% 0 0)' }}
                  transition={{ duration: 0.8, delay: 2.0, ease: 'easeInOut' }}
                >
                  <StoryPara index={3}>
                    I care about performance, security, and numbers. If it ships,{' '}
                    <span style={{ color: '#34d399', fontWeight: 500 }}>I measure it</span>.
                    Outside code: datasets, sustainability, and agricultural tech. I read data
                    the way other people read novels.
                  </StoryPara>
                </motion.div>
              </div>
            </div>

            {/* ══ RIGHT PANE: profile.js ══ */}
            <div
              className="about-pane-right"
              style={{
                borderLeft: '1px solid rgba(52,211,153,0.1)',
                padding: '2.2rem 2.5rem',
                background: 'rgba(5,8,16,0.5)',
              }}
            >
              {/* Pane header */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  marginBottom: 26,
                  paddingBottom: 16,
                  borderBottom: '1px solid rgba(52,211,153,0.1)',
                }}
              >
                <MonoLabel color="rgba(52,211,153,0.75)">profile.js</MonoLabel>
                <MonoLabel color="rgba(52,211,153,0.4)">javascript</MonoLabel>
              </div>

              <TerminalBody />
            </div>
          </div>
        </motion.div>
      </div>

      {/* Responsive */}
      <style jsx global>{`
        @media (max-width: 1024px) {
          .about-split {
            grid-template-columns: 1fr !important;
          }
          .about-pane-right {
            border-left: none !important;
            border-top: 1px solid rgba(52,211,153,0.12);
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
