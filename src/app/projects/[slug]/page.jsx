"use client";

import { use } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, Code, Globe, FileArrowDown } from "@gravity-ui/icons";
import { projects } from "@/lib/data";

const container = {
    hidden: {},
    show: {
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.1,
        },
    },
};

const item = {
    hidden: { opacity: 0, y: 20 },
    show: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
    },
};

export default function ProjectDetailPage({ params }) {
    const slug = use(params).slug;
    const project = projects.find((p) => p.slug === slug);

    if (!project) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-surface">
                <div className="text-center max-w-lg px-4">
                    <h1 className="text-4xl font-bold text-on-surface mb-6">Project not found</h1>
                    <Link href="/#projects">
                        <a className="inline-flex items-center gap-sm px-6 py-3 rounded-xl bg-primary/10 border border-primary/20 text-primary font-label-sm text-label-sm uppercase tracking-wider hover:bg-primary hover:text-on-primary transition-all no-underline">
                            <ArrowLeft size={16} />
                            Back to Projects
                        </a>
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-surface">
            {/* Back button */}
            <div className="pt-20 pb-4">
                <div className="max-w-[1280px] mx-auto px-lg">
                    <Link
                        href="/#projects"
                        className="inline-flex items-center gap-2 text-on-surface-variant hover:text-primary transition-colors text-sm group no-underline"
                    >
                        <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
                        Back to Projects
                    </Link>
                </div>
            </div>

            {/* Hero image */}
            <div className="relative h-72 sm:h-96 lg:h-[500px] overflow-hidden">
                <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-on-surface via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-surface to-transparent" />
            </div>

            {/* Content */}
            <div className="max-w-[1280px] mx-auto px-lg py-xl lg:py-16">
                <motion.div
                    variants={container}
                    initial="hidden"
                    animate="show"
                    className="space-y-10"
                >
                    {/* Header */}
                    <motion.div variants={item} className="flex flex-wrap items-start justify-between gap-4">
                        <div>
                            <span className="font-label-sm text-label-sm text-primary uppercase tracking-widest">
                                {project.category}
                            </span>
                            <h1 className="font-display-lg text-display-lg text-on-surface mt-2 leading-tight">
                                {project.title}
                            </h1>
                        </div>
                        <div className="flex gap-sm">
                            <a
                                href={project.liveLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="magnetic-hover px-md py-sm rounded-xl bg-gradient-to-r from-primary to-secondary text-on-primary font-label-sm text-label-sm uppercase tracking-wider shadow-lg shadow-primary/20 transition-all hover:shadow-xl hover:shadow-primary/40 no-underline flex items-center gap-sm"
                            >
                                <Globe size={16} />
                                Live Demo
                            </a>
                            <a
                                href={project.repoLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="magnetic-hover px-md py-sm rounded-xl border border-outline border-opacity-30 text-on-surface font-label-sm text-label-sm uppercase tracking-wider hover:bg-surface-container-highest transition-all no-underline flex items-center gap-sm"
                            >
                                <Code size={16} />
                                View Code
                            </a>
                        </div>
                    </motion.div>

                    {/* Description */}
                    <motion.div variants={item}>
                        <h2 className="font-headline-lg text-headline-lg text-on-surface mb-4">
                            Overview
                        </h2>
                        <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed max-w-3xl">
                            {project.description}
                        </p>
                    </motion.div>

                    {/* Full description */}
                    <motion.div variants={item}>
                        <h2 className="font-headline-lg text-headline-lg text-on-surface mb-4">
                            Details
                        </h2>
                        <div className="bg-surface-container/60 backdrop-blur-2xl rounded-2xl p-xl border border-outline-variant/20">
                            <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed whitespace-pre-line">
                                {project.longDescription}
                            </p>
                        </div>
                    </motion.div>

                    {/* Tech stack */}
                    <motion.div variants={item}>
                        <h2 className="font-headline-lg text-headline-lg text-on-surface mb-4">
                            Technology Stack
                        </h2>
                        <div className="flex flex-wrap gap-sm">
                            {project.techs.map((tech) => (
                                <span
                                    key={tech}
                                    className="px-md py-sm rounded-xl bg-surface-container/60 backdrop-blur-md border border-outline-variant/20 font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider hover:bg-primary/10 hover:border-primary/20 hover:text-primary transition-all"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </motion.div>

                    {/* Resume download */}
                    <motion.div variants={item} className="flex justify-center">
                        <a
                            href="/resume"
                            className="magnetic-hover inline-flex items-center gap-sm px-xl py-md rounded-xl bg-on-surface text-on-primary font-label-sm text-label-sm uppercase tracking-wider shadow-lg hover:bg-inverse-surface transition-colors no-underline"
                        >
                            <FileArrowDown size={18} />
                            Download Full Resume
                        </a>
                    </motion.div>

                    {/* Challenges */}
                    <motion.div variants={item}>
                        <h2 className="font-headline-lg text-headline-lg text-on-surface mb-4">
                            Challenges I Hit
                        </h2>
                        <div className="space-y-3">
                            {project.challenges.map((challenge, i) => (
                                <motion.div
                                    key={i}
                                    className="flex gap-md bg-surface-container/40 backdrop-blur-2xl rounded-xl p-md border border-outline-variant/10"
                                    initial={{ opacity: 0, x: -10 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.4, delay: i * 0.06 }}
                                >
                                    <span className="font-display-lg text-primary flex-shrink-0 mt-0.5">
                                        0{i + 1}
                                    </span>
                                    <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                                        {challenge}
                                    </p>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Improvements */}
                    <motion.div variants={item}>
                        <h2 className="font-headline-lg text-headline-lg text-on-surface mb-4">
                            Next Steps — What I&apos;d Improve
                        </h2>
                        <div className="grid sm:grid-cols-2 gap-md">
                            {project.improvements.map((improvement, i) => (
                                <motion.div
                                    key={i}
                                    className="flex items-start gap-md p-md rounded-xl bg-surface-container/30 border border-outline-variant/10"
                                    initial={{ opacity: 0, x: 10 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.4, delay: i * 0.06 }}
                                >
                                    <span className="text-secondary flex-shrink-0 mt-0.5">→</span>
                                    <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                                        {improvement}
                                    </p>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </div>
    );
}