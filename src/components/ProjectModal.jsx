'use client';

import { motion, AnimatePresence } from 'motion/react';

export default function ProjectModal({ project, onClose }) {
  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/80 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="relative w-full max-w-3xl glass-card rounded-3xl overflow-hidden border border-white/15 z-10 my-8 bg-zinc-950/90 max-h-[90vh] flex flex-col"
        >
          {/* Header Image Header */}
          <div className="relative h-48 sm:h-64 bg-zinc-900 border-b border-white/10 flex items-center justify-center p-6">
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 to-transparent z-10" />
            <div className="relative z-20 text-center">
              <span className="text-xs font-mono text-emerald-400 uppercase tracking-widest">{project.category}</span>
              <h2 className="text-2xl sm:text-3xl font-bold text-white mt-1">{project.title}</h2>
            </div>

            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-30 p-2.5 rounded-full bg-black/50 hover:bg-white/20 text-white transition-colors border border-white/10"
              aria-label="Close modal"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Scrollable Content Body */}
          <div className="p-6 sm:p-8 overflow-y-auto space-y-6 text-zinc-300 text-sm leading-relaxed">
            
            {/* Tech Stack Pills */}
            <div>
              <h4 className="text-xs font-mono uppercase tracking-wider text-zinc-400 mb-3">Technology Stack</h4>
              <div className="flex flex-wrap gap-2">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 text-xs font-mono bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 rounded-lg"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Description */}
            <div>
              <h4 className="text-xs font-mono uppercase tracking-wider text-zinc-400 mb-2">Overview</h4>
              <p className="text-zinc-200">{project.description}</p>
            </div>

            {/* Challenges Hit */}
            <div>
              <h4 className="text-xs font-mono uppercase tracking-wider text-amber-400 mb-2">Challenges Engineering & Solved</h4>
              <p className="text-zinc-300 bg-white/[0.02] border border-white/5 p-4 rounded-2xl">{project.challenges}</p>
            </div>

            {/* Future Improvement Plans */}
            <div>
              <h4 className="text-xs font-mono uppercase tracking-wider text-cyan-400 mb-2">Future Roadmap & Improvements</h4>
              <p className="text-zinc-300 bg-white/[0.02] border border-white/5 p-4 rounded-2xl">{project.futurePlans}</p>
            </div>

            {/* Live & Code Links */}
            <div className="pt-4 border-t border-white/10 flex flex-wrap gap-4 items-center justify-between">
              <div className="flex items-center gap-3">
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="px-5 py-2.5 rounded-full bg-emerald-400 text-black font-semibold text-xs hover:bg-emerald-300 transition-all flex items-center gap-2 shadow-md"
                  >
                    <span>View Live Application</span>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                )}

                {project.repoUrl && (
                  <a
                    href={project.repoUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="px-5 py-2.5 rounded-full glass-card hover:bg-white/10 text-white font-semibold text-xs transition-all flex items-center gap-2"
                  >
                    <span>GitHub Repository</span>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                )}
              </div>
            </div>

          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}