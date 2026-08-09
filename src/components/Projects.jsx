'use client';

import { useState } from 'react';
import { motion } from 'motion/react';
import ProjectModal from './ProjectModal';

const projectsData = [
  {
    id: 'medicare-connect',
    title: 'MediCare Connect',
    category: 'Full-Stack Healthcare Booking',
    stack: ['Next.js', 'React 19', 'Express', 'MongoDB Atlas', 'Better Auth', 'Stripe', 'HeroUI', 'Tailwind', 'Recharts', 'Vercel'],
    description: 'A full-stack healthcare platform enabling patients to search specialized doctors, schedule appointments in real time, process secure payments, and manage diagnostic reports.',
    challenges: 'Ensuring atomicity and zero double-booking locks during high concurrency appointment bookings, plus standardizing granular Role-Based Access Control (RBAC) across doctor and patient portals.',
    futurePlans: 'Integrating WebRTC video consultation rooms directly into appointment schedules and introducing an AI triage assistant for symptom checkups.',
    liveUrl: 'https://github.com/salmanibneyrahman',
    repoUrl: 'https://github.com/salmanibneyrahman',
  },
  {
    id: 'petnest',
    title: 'PetNest',
    category: 'Full-Stack Pet Adoption Platform',
    stack: ['Next.js 16', 'React 19', 'Express', 'MongoDB', 'Better Auth', 'HeroUI', 'Framer Motion', 'Tailwind', 'Vercel'],
    description: 'A dedicated pet adoption platform matching rescue animals with verified adopters through detailed behavioral filters, application workflow tracking, and shelter dashboards.',
    challenges: 'Designing complex reactive state management for multi-attribute matching algorithms and building safe image upload and transformation pipelines for user listings.',
    futurePlans: 'Adding real-time messaging between prospective adopters and shelters using WebSocket connections.',
    liveUrl: 'https://github.com/salmanibneyrahman',
    repoUrl: 'https://github.com/salmanibneyrahman',
  },
  {
    id: 'suncart',
    title: 'SunCart',
    category: 'Full-Stack E-Commerce Platform',
    stack: ['Next.js 16', 'React 19', 'Tailwind', 'DaisyUI', 'Better Auth', 'MongoDB Atlas', 'REST API (Render)', 'Vercel'],
    description: 'An end-to-end e-commerce store with catalog filtering, cart persistence, secure payment gateways, order history tracking, and custom admin store controls.',
    challenges: 'Decoupling backend microservices latency on Render free tiers while keeping optimistic state updates responsive on client interfaces.',
    futurePlans: 'Implementing an intelligent product recommendation engine powered by collaborative filtering ML algorithms.',
    liveUrl: 'https://github.com/salmanibneyrahman',
    repoUrl: 'https://github.com/salmanibneyrahman',
  },
  {
    id: 'crop-recommendation',
    title: 'Climate-Resilient Crop & Yield ML',
    category: 'Machine Learning Capstone',
    stack: ['Python', 'scikit-learn', 'Pandas', 'Streamlit', 'Open-Meteo API'],
    description: 'An agricultural machine learning system recommending climate-resilient crop varieties and predicting potential yields based on soil nutrients and meteorological weather forecasts across Bangladesh.',
    challenges: 'Handling extreme seasonal weather anomalies in historic datasets across 64 Bangladesh districts and resolving feature imbalance in regional crop records.',
    futurePlans: 'Integrating Sentinel-2 satellite imagery APIs for direct real-time vegetative health index scoring.',
    liveUrl: 'https://github.com/salmanibneyrahman',
    repoUrl: 'https://github.com/salmanibneyrahman',
  },
];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-4 mb-16 text-center md:text-left"
        >
          <span className="text-xs font-mono uppercase tracking-widest text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-3.5 py-1.5 rounded-full">
            Featured Works
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Production Software & <span className="text-gradient-emerald">ML Systems</span>
          </h2>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projectsData.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group glass-card rounded-3xl overflow-hidden flex flex-col justify-between p-8 border border-white/10 hover:border-emerald-500/30 transition-all"
            >
              <div>
                {/* Visual Header Placeholder Container */}
                <div className="h-44 rounded-2xl bg-zinc-900 border border-white/5 mb-6 flex flex-col items-center justify-center relative overflow-hidden group-hover:border-emerald-500/20 transition-colors">
                  <div className="absolute inset-0 bg-gradient-to-tr from-emerald-500/10 to-cyan-500/5 opacity-50" />
                  <span className="text-xs font-mono text-emerald-400 uppercase tracking-wider relative z-10">{project.category}</span>
                  <h3 className="text-xl font-bold text-white mt-1 relative z-10">{project.title}</h3>
                </div>

                <p className="text-sm text-zinc-400 line-clamp-3 leading-relaxed mb-6">
                  {project.description}
                </p>

                {/* Main Stack Tags */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.stack.slice(0, 4).map((tech) => (
                    <span key={tech} className="px-2.5 py-1 text-[11px] font-mono text-zinc-300 bg-white/5 rounded-md">
                      {tech}
                    </span>
                  ))}
                  {project.stack.length > 4 && (
                    <span className="px-2.5 py-1 text-[11px] font-mono text-zinc-400 bg-white/5 rounded-md">
                      +{project.stack.length - 4} more
                    </span>
                  )}
                </div>
              </div>

              {/* Detail Button */}
              <button
                onClick={() => setSelectedProject(project)}
                className="w-full py-3 rounded-2xl glass-panel hover:bg-emerald-400 hover:text-black font-semibold text-xs text-white transition-all duration-300 flex items-center justify-center gap-2 group/btn border border-white/10"
              >
                <span>View Details & Case Study</span>
                <svg className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal View */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}