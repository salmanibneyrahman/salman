"use client";

import { motion } from "framer-motion";
import { FileArrowDown } from "@gravity-ui/icons";
import Link from "next/link";

const container = {
    hidden: {},
    show: {
        transition: {
            staggerChildren: 0.06,
            delayChildren: 0.08,
        },
    },
};

const item = {
    hidden: { opacity: 0, y: 12 },
    show: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.35, ease: [0.22, 1, 0.36, 1] },
    },
};

const resumeSections = [
    {
        title: "Contact",
        items: [
            { label: "Email", value: "rahmanmdsalman428@gmail.com" },
            { label: "Location", value: "Dhaka, Bangladesh" },
            { label: "GitHub", value: "github.com/salmanibneyrahman" },
            { label: "LinkedIn", value: "linkedin.com/in/salman-ibney-rahman" },
        ],
    },
    {
        title: "Summary",
        content: `Full-Stack Web Developer & ML Engineer with a passion for building production-ready applications that sit at the intersection of modern web development and applied machine learning. Proficient in Next.js, React, Node.js, Express, MongoDB, and Python-based ML pipelines. Experienced in authentication systems, payment integrations, real-time features, and data-driven product design. Recent Computer Science graduate from East West University, Dhaka (2026).`,
    },
    {
        title: "Education",
        items: [
            {
                institution: "East West University — Dhaka, Bangladesh",
                degree: "BSc in Computer Science & Engineering",
                period: "2022 – 2026",
                detail: "CGPA: 3.17 / 4.00",
            },
        ],
    },
    {
        title: "Technical Skills",
        items: [
            {
                category: "Frontend",
                skills: "JavaScript (ES6+), HTML5, CSS3, React, Next.js, Tailwind CSS, HeroUI, DaisyUI, Framer Motion, Recharts, Vite",
            },
            {
                category: "Backend & Database",
                skills: "Node.js, Express.js, REST APIs, Better Auth, JWT/JWKS, RBAC, Stripe, MongoDB Atlas, MySQL",
            },
            {
                category: "Machine Learning / Data Science",
                skills: "Python, scikit-learn, TensorFlow, Keras, NLTK, Pandas, NumPy, Matplotlib, Seaborn",
            },
            {
                category: "DevOps & Tools",
                skills: "Git, GitHub, Vercel, Netlify, Render, CI/CD",
            },
        ],
    },
    {
        title: "Experience & Projects",
        items: [
            {
                role: "Full-Stack Developer",
                project: "MediCare Connect — Hospital Appointment & Healthcare Management System",
                period: "2026",
                detail: "Next.js 16, React 19, Express.js 5, MongoDB Atlas, Better Auth, Stripe, HeroUI, Tailwind CSS, Recharts, Framer Motion, Vercel. Features: appointment booking, Stripe payments, digital prescriptions, RBAC dashboards, JWKS verification, search & pagination.",
                links: [
                    { label: "Live", url: "https://medicare-live.vercel.app" },
                    { label: "GitHub", url: "https://github.com/salmanibneyrahman/PH-A-10-MediCare" },
                ],
            },
            {
                role: "Full-Stack Developer",
                project: "PetNest — Pet Adoption Platform",
                period: "2026",
                detail: "Next.js 16, React 19, Express.js 5, MongoDB, Better Auth, HeroUI, Framer Motion, Tailwind CSS, Vercel. Features: pet search, adoption request workflow, real-time polling notifications, JWT auth, dashboard analytics.",
                links: [
                    { label: "Live", url: "https://pet-nest-adopt.vercel.app" },
                    { label: "GitHub", url: "https://github.com/salmanibneyrahman/PH-A-09-PetNest" },
                ],
            },
            {
                role: "Full-Stack Developer",
                project: "SunCart — Modern E-Commerce Platform",
                period: "2026",
                detail: "Next.js 16, React 19, Tailwind CSS, DaisyUI, Better Auth, MongoDB Atlas, REST API on Render, Vercel. Features: product catalog, advanced filtering, dual view modes, SSR product pages, performance optimized.",
                links: [
                    { label: "Live", url: "https://ph-a-08-sun-cart.vercel.app" },
                    { label: "GitHub", url: "https://github.com/salmanibneyrahman/PH-A-08-SunCart" },
                ],
            },
            {
                role: "ML Engineer / Researcher",
                project: "Climate-Resilient Crop Recommendation & Yield Prediction",
                period: "2026",
                detail: "Python, scikit-learn, Pandas, NumPy, Streamlit, Open-Meteo API. Two-stage ML system: KNN classifier (88.21% accuracy, 73 crops) + Decision Tree Regressor (R²=0.86, yield prediction). Deployed on Streamlit Community Cloud.",
                links: [
                    { label: "Live", url: "https://cropforecast.streamlit.app" },
                    { label: "GitHub", url: "https://github.com/salmanibneyrahman/crop-yield-prediction-claude---GB" },
                ],
            },
        ],
    },
    {
        title: "Additional Information",
        content: `I didn't set out to become a developer — I just started building, got hooked, and never stopped. Nine-plus shipped projects, six in production. I love the full arc of a product: interface, backend, and data. My capstone recommends climate-resilient crops across Bangladesh. Outside code: research, data analysis, and applying tech to sustainability and agriculture. I read datasets the way other people read novels.`,
    },
];

export default function ResumePage() {
    return (
        <div className="min-h-screen bg-surface py-xl">
            <div className="max-w-[800px] mx-auto px-lg">
                <motion.div
                    className="text-center mb-xxl"
                    variants={container}
                    initial="hidden"
                    animate="show"
                >
                    <motion.div variants={item} className="inline-flex items-center gap-sm px-md py-sm rounded-full bg-primary/10 backdrop-blur-md mb-4">
                        <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                        <span className="font-label-sm text-label-sm uppercase tracking-widest text-primary">
                            Resume
                        </span>
                    </motion.div>
                    <motion.h1 variants={item} className="font-display-lg text-display-lg text-on-surface tracking-tight">
                        Salman Ibney Rahman
                    </motion.h1>
                    <motion.p variants={item} className="font-headline-md text-headline-md text-primary mt-2">
                        Full-Stack Web Developer &amp; ML Engineer
                    </motion.p>
                    <motion.p variants={item} className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-widest mt-2">
                        East West University · Class of 2026 · Dhaka, Bangladesh
                    </motion.p>
                </motion.div>

                <motion.div
                    variants={container}
                    initial="hidden"
                    animate="show"
                    className="space-y-xl"
                >
                    {resumeSections.map((section) => (
                        <motion.div
                            key={section.title}
                            variants={item}
                            className="bg-surface-container/40 backdrop-blur-2xl rounded-2xl p-xl border border-outline-variant/10"
                        >
                            <h2 className="font-headline-md text-headline-md text-on-surface mb-md flex items-center gap-sm">
                                <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                                {section.title}
                            </h2>

                            {section.items ? (
                                <div className="space-y-md">
                                    {section.items.map((item, ii) => (
                                        <div key={ii}>
                                            {item.category ? (
                                                <>
                                                    <p className="font-label-sm text-label-sm text-primary uppercase tracking-widest mb-1">
                                                        {item.category}
                                                    </p>
                                                    <p className="font-body-md text-body-md text-on-surface">{item.skills}</p>
                                                </>
                                            ) : item.links ? (
                                                <div>
                                                    <p className="font-body-md text-body-md font-medium text-on-surface">
                                                        {item.role} — {item.project}
                                                    </p>
                                                    <p className="font-label-sm text-label-sm text-on-surface-variant mt-0.5">
                                                        {item.period}
                                                    </p>
                                                    <p className="font-body-sm text-body-sm text-on-surface-variant mt-2 leading-relaxed">
                                                        {item.detail}
                                                    </p>
                                                    <div className="flex gap-md mt-2">
                                                        {item.links.map((link) => (
                                                            <a
                                                                key={link.label}
                                                                href={link.url}
                                                                target="_blank"
                                                                rel="noopener noreferrer"
                                                                className="font-label-xs text-label-xs text-primary hover:text-secondary transition-colors no-underline"
                                                            >
                                                                {link.label} →
                                                            </a>
                                                        ))}
                                                    </div>
                                                </div>
                                            ) : (
                                                <div>
                                                    <p className="font-body-md text-body-md font-medium text-on-surface">
                                                        {item.institution}
                                                    </p>
                                                    <p className="font-label-sm text-label-sm text-on-surface-variant mt-0.5">
                                                        {item.degree} · {item.period}
                                                    </p>
                                                    <p className="font-label-sm text-label-sm text-on-surface-variant mt-0.5">
                                                        {item.detail}
                                                    </p>
                                                </div>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            ) : (
                                <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                                    {section.content}
                                </p>
                            )}
                        </motion.div>
                    ))}
                </motion.div>

                <motion.div
                    className="mt-xxl text-center"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                >
                    <a
                        href="/Salman_Ibney_Rahman_Resume.pdf"
                        download
                        className="magnetic-hover inline-flex items-center justify-center gap-sm px-xl py-md rounded-xl bg-gradient-to-r from-primary to-secondary text-on-primary font-label-sm text-label-sm uppercase tracking-wider shadow-lg shadow-primary/20 transition-all hover:shadow-xl hover:shadow-primary/40 no-underline"
                    >
                        <FileArrowDown size={18} />
                        Download Resume (PDF)
                    </a>
                    <p className="font-label-xs text-label-xs text-on-surface-variant uppercase tracking-widest mt-3">
                        Don&apos;t have the PDF ready yet?{" "}
                        <a
                            href="mailto:rahmanmdsalman428@gmail.com?subject=Portfolio%20Resume%20Request"
                            className="text-primary hover:text-secondary transition-colors no-underline"
                        >
                            Email me to request one
                        </a>
                    </p>
                </motion.div>
            </div>
        </div>
    );
}