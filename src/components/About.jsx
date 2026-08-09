'use client';

import { motion } from 'motion/react';

export default function About() {
  return (
    <section id="about" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-4 mb-16 text-center md:text-left"
        >
          <span className="text-xs font-mono uppercase tracking-widest text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-3.5 py-1.5 rounded-full">
            The Journey & Story
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight pt-5">
            I build things that <span className="text-gradient-emerald">actually work</span> in the real world.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Main Story Narrative */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 glass-card p-8 md:p-10 rounded-3xl space-y-6 text-zinc-300 leading-relaxed font-normal text-base"
          >
            <p>
              I didn&apos;t set out to become a developer — I just started building, got hooked, and never stopped. What began as pure curiosity turned into <strong className="text-white font-semibold">nine-plus shipped projects</strong>, with six of them actively running in production today.
            </p>
            <p>
              I love the entire arc of crafting software: sculpting clean, modern user interfaces, engineering backends that stay resilient under heavy pressure, and turning noisy, messy datasets into precise machine-learning models that predict real outcomes.
            </p>
            <p>
              By day, I ship full-stack applications built with <span className="text-emerald-400 font-medium">Next.js, React, Node.js, and MongoDB</span>. In the same breath, I train ML models and build data processing pipelines in <span className="text-cyan-400 font-medium">Python</span>. I care deeply about performance metrics, security benchmarks, and numerical accuracy — if it ships, I measure it.
            </p>
          </motion.div>

          {/* Life Outside Code & Philosophy */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 flex flex-col gap-6"
          >
            <div className="glass-card p-8 rounded-3xl space-y-4">
              <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 01-2 2h-1a2 2 0 01-2-2v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white">The Work I Love</h3>
              <p className="text-sm text-zinc-400 leading-relaxed">
                Full-stack applications featuring complex auth, secure payments, and real-time state, combined with ML domains like classification, yield forecasting, and NLP.
              </p>
            </div>

            <div className="glass-card p-8 rounded-3xl space-y-4">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 002 2h1.5a2.5 2.5 0 002.5-2.5V11a2 2 0 012-2h1.055" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white">Outside the Screen</h3>
              <p className="text-sm text-zinc-400 leading-relaxed">
                I apply technology toward sustainability and agricultural optimization. I am the kind of engineer who reads a complex dataset with the same immersion that others read a novel.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}