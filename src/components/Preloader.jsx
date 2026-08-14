'use client';

import { useEffect, useState } from 'react';
import { motion, animate } from 'motion/react';

const MONO = "'JetBrains Mono','Fira Code',monospace";
const DISPLAY = "'Syne','Inter',sans-serif";

/* ─── Lando-style % counter preloader ───────────────────────── */
export default function Preloader({ onDone }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const controls = animate(0, 100, {
      duration: 2.4,
      ease: [0.76, 0, 0.24, 1],
      onUpdate: (v) => setProgress(Math.round(v)),
      onComplete: () => setTimeout(onDone, 350),
    });
    return () => controls.stop();
  }, [onDone]);

  return (
    <motion.div
      exit={{ y: '-100%' }}
      transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1] }}
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 200,
        background: '#03030a',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        padding: '28px 32px',
        overflow: 'hidden',
      }}
    >
      {/* top meta */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <span style={{ fontFamily: MONO, fontSize: 10, fontWeight: 800, letterSpacing: '0.24em', textTransform: 'uppercase', color: 'rgba(52,211,153,0.7)' }}>
          Salman Ibney Rahman
        </span>
        <span style={{ fontFamily: MONO, fontSize: 10, fontWeight: 800, letterSpacing: '0.24em', textTransform: 'uppercase', color: 'rgba(52,211,153,0.45)' }}>
          Portfolio — ©2026
        </span>
      </div>

      {/* middle label */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
        <motion.span
          animate={{ opacity: [1, 0.2, 1] }}
          transition={{ duration: 1.2, repeat: Infinity }}
          style={{ width: 7, height: 7, borderRadius: '50%', background: '#34d399', boxShadow: '0 0 12px #34d399' }}
        />
        <span style={{ fontFamily: MONO, fontSize: 11, fontWeight: 700, letterSpacing: '0.3em', textTransform: 'uppercase', color: 'rgba(203,213,225,0.7)' }}>
          Loading experience
        </span>
      </div>

      {/* giant counter */}
      <div style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'flex-end' }}>
        <div
          style={{
            fontFamily: DISPLAY,
            fontSize: 'clamp(6rem, 20vw, 15rem)',
            fontWeight: 900,
            lineHeight: 0.8,
            letterSpacing: '-0.05em',
            color: 'transparent',
            WebkitTextStroke: '2px rgba(52,211,153,0.75)',
            userSelect: 'none',
          }}
        >
          {progress}
          <span style={{ fontSize: '0.3em', WebkitTextStroke: '1px rgba(34,211,238,0.8)', marginLeft: 6 }}>%</span>
        </div>
      </div>

      {/* bottom progress line */}
      <div style={{ position: 'absolute', left: 0, right: 0, bottom: 0, height: 2, background: 'rgba(52,211,153,0.1)' }}>
        <div
          style={{
            height: '100%',
            width: `${progress}%`,
            background: 'linear-gradient(90deg,#34d399,#22d3ee)',
            boxShadow: '0 0 16px rgba(52,211,153,0.6)',
            transition: 'width 0.1s linear',
          }}
        />
      </div>
    </motion.div>
  );
}
