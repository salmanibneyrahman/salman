'use client';

import { motion } from 'motion/react';

export default function Education() {
  return (
    <section id="education" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-4 mb-16 text-center md:text-left"
        >
          <span className="text-xs font-mono uppercase tracking-widest text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-3.5 py-1.5 rounded-full">
            Academic Background
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Education & <span className="text-gradient-cyan">Degree</span>
          </h2>
        </motion.div>

        {/* Education Timeline Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass-card p-8 md:p-10 rounded-3xl relative overflow-hidden"
        >
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-white/10">
            <div>
              <span className="text-xs font-mono text-emerald-400 uppercase tracking-widest">Graduation Class of 2026</span>
              <h3 className="text-2xl font-bold text-white mt-1">BSc in Computer Science & Engineering</h3>
              <p className="text-base text-zinc-300 mt-1">East West University — Dhaka, Bangladesh</p>
            </div>

            <div className="flex items-center gap-3">
              <div className="px-4 py-2 rounded-2xl bg-white/5 border border-white/10 text-zinc-300 font-mono text-sm">
                2022 – 2026
              </div>
            </div>
          </div>

          <div className="pt-6 grid grid-cols-1 md:grid-cols-2 gap-6 text-sm text-zinc-400 leading-relaxed">
            <div>
              <h4 className="text-xs font-mono uppercase text-white tracking-wider mb-2">Core Engineering Focus</h4>
              <p>Data Structures & Algorithms, Database Management Systems, Software Engineering Architecture, Operating Systems, Computer Networks, and Machine Learning.</p>
            </div>
            <div>
              <h4 className="text-xs font-mono uppercase text-white tracking-wider mb-2">Capstone Focus</h4>
              <p>Designed and deployed an intelligent ML system that recommends climate-resilient crops and predicts yields across 64 Bangladesh districts.</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}