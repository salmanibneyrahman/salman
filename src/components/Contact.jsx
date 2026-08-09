'use client';

import { useState } from 'react';
import { motion } from 'motion/react';

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const email = 'rahmanmdsalman428@gmail.com';

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  return (
    <section id="contact" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass-card p-10 md:p-16 rounded-3xl text-center flex flex-col items-center gap-8 relative overflow-hidden border border-emerald-500/20"
        >
          {/* Ambient Glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-emerald-500/10 rounded-full blur-[100px] pointer-events-none" />

          <span className="text-xs font-mono uppercase tracking-widest text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-3.5 py-1.5 rounded-full">
            Get In Touch
          </span>

          <h2 className="text-3xl sm:text-5xl font-bold text-white tracking-tight max-w-2xl leading-tight">
            Have a project in mind? Let&apos;s build something <span className="text-gradient-emerald">extraordinary.</span>
          </h2>

          <p className="text-zinc-400 text-base max-w-xl leading-relaxed">
            Whether you want to build a scalable full-stack application, integrate predictive machine learning models, or consult on software architecture — my inbox is always open.
          </p>

          {/* Email Action & Copy Box */}
          <div className="flex flex-col sm:flex-row items-center gap-4 w-full justify-center pt-4">
            <a
              href={`mailto:${email}`}
              className="px-8 py-4 rounded-full bg-emerald-400 text-black font-bold text-sm hover:bg-emerald-300 transition-all shadow-lg shadow-emerald-500/25 hover:shadow-emerald-500/40"
            >
              Send Direct Email
            </a>

            <button
              onClick={handleCopy}
              className="px-6 py-4 rounded-full glass-panel hover:bg-white/10 text-zinc-200 font-mono text-xs transition-all flex items-center gap-2 border border-white/10"
            >
              <span>{copied ? 'Copied to Clipboard!' : email}</span>
              <svg className="w-4 h-4 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {copied ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                )}
              </svg>
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}