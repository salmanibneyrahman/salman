export const projects = [
  {
    slug: "medicare-connect",
    title: "MediCare Connect",
    category: "Healthcare",
    description:
      "A comprehensive telemedicine platform connecting patients with specialists. Features real-time video consultations, encrypted medical records, and AI-driven symptom preliminary analysis.",
    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=600&fit=crop&q=80",
    techs: ["React", "Node.js", "MongoDB", "Next.js", "Stripe"],
    liveLink: "https://medicare-live.vercel.app",
    repoLink: "https://github.com/salmanibneyrahman/PH-A-10-MediCare",
    longDescription: `MediCare Connect is a production-ready, full-stack healthcare platform built with Next.js 16, Express.js, and MongoDB. It connects patients with verified doctors through appointment booking, Stripe payments, digital prescriptions, and role-based dashboards.

Traditional hospital appointment systems suffer from long waiting times, manual paperwork, and poor communication. MediCare Connect digitises the entire care journey — patients search verified specialists, book slots, pay securely, and retain permanent records. Doctors publish profiles, control schedules, triage requests, and issue digital prescriptions.

The platform features layered RBAC with Better Auth + JWKS, availability-aware booking, Stripe Payment Intents, server-side validation, and live analytics rendered with Recharts.`,
    challenges: [
      "Built a secure availability-aware booking system with dual validation — date picker rejects unavailable days and backend re-checks on submit so crafted requests cannot bypass rules.",
      "Implemented Stripe Payment Intents with embedded PaymentElement themed to match the interface — card details stay inside Stripe's iframe and never reach application servers.",
      "Designed layered RBAC with Better Auth + JWKS — the Express API verifies every token cryptographically using jose, and registration is protected by a server-side whitelist so admin privileges can never be self-granted.",
      "Built three distinct role-based dashboards (patient, doctor, admin) with real-time analytics via Recharts, including a payment ledger and platform-wide appointment monitoring.",
      "Handled search across doctor name, specialization, and hospital simultaneously with MongoDB $regex, plus server-side pagination and a layout toggle between card grid and table views.",
    ],
    improvements: [
      "Add telemedicine video consultation directly in the platform using WebRTC.",
      "Introduce push notifications so doctors and patients get real-time alerts for appointment changes.",
      "Build a patient health record export feature (PDF/CSV) for portability.",
      "Add multi-language support for Bangladesh's Bengali-speaking population.",
      "Implement appointment waitlist and cancellation-fill automation.",
    ],
  },
  {
    slug: "petnest",
    title: "PetNest Marketplace",
    category: "E-Commerce",
    description:
      "A scalable multi-vendor marketplace for premium pet supplies. Implemented a robust microservices architecture handling inventory syncing, secure payments, and personalized recommendations.",
    image:
      "https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=800&h=600&fit=crop&q=80",
    techs: ["React", "Node.js", "MongoDB", "Next.js", "Tailwind"],
    liveLink: "https://pet-nest-adopt.vercel.app",
    repoLink: "https://github.com/salmanibneyrahman/PH-A-09-PetNest",
    longDescription: `PetNest is a production-ready full-stack pet adoption platform built with Next.js 16, Express.js 5, and MongoDB. It eliminates the fragmented pet adoption process by providing a centralized platform where shelters, individual pet owners, and adopters can interact efficiently.

The system automates request management, prevents duplicate adoptions, and provides real-time analytics to pet owners. Key features include advanced pet search with MongoDB $regex and $in operators across name, species, and breed simultaneously, a structured request workflow (pending → approved/rejected), and single-approval logic that automatically rejects competing requests.

PetNest features a unique real-time layer: a smart background auto-polling system performs silent checks every 10 seconds without user interaction, paired with a pinpoint notification system showing pet name and requester details.`,
    challenges: [
      "Implemented a smart background auto-polling system with zero-timer setTimeout and functional setState to prevent memory leaks — checking for new notifications silently every 10 seconds.",
      "Built a custom Apple-style glass toast notification system from scratch with auto-dismiss timer — no external library, fully tailored to the design language.",
      "Designed a single-approval logic state machine: when one adoption request is approved, all competing requests for the same pet are automatically rejected, preventing double-bookings.",
      "Integrated Better Auth with JWT token management and JWKS cryptographic verification using jose-cjs, with HTTPOnly cookies for secure token storage preventing XSS attacks.",
      "Built a responsive dashboard with real-time analytics (total requests, pending, approved, rejected counts) rendered in glassmorphic cards with Framer Motion animations.",
    ],
    improvements: [
      "Add real-time chat between adopters and pet owners using WebSockets.",
      "Integrate AI-powered pet breed identification from uploaded photos.",
      "Build a shelter management portal with capacity tracking and intake workflows.",
      "Add virtual pet meet-and-greet scheduling with calendar integration.",
      "Implement a pet care tips content management system for shelters to contribute.",
    ],
  },
  {
    slug: "suncart",
    title: "SunCart E-Commerce",
    category: "E-Commerce",
    description:
      "A high-performance, full-stack e-commerce platform with real-time API integration, advanced filtering, dual view modes, and a modern glassmorphism UI built with Next.js 16 and Tailwind CSS.",
    image:
      "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=800&h=600&fit=crop&q=80",
    techs: ["Next.js", "React", "Tailwind", "DaisyUI", "MongoDB"],
    liveLink: "https://ph-a-08-sun-cart.vercel.app",
    repoLink: "https://github.com/salmanibneyrahman/PH-A-08-SunCart",
    longDescription: `SunCart is a high-performance, full-stack e-commerce platform built with Next.js 16, featuring real-time API integration, advanced filtering, and a modern UI/UX design.

The platform features a RESTful API integration for dynamic product fetching, advanced multi-criteria filtering with category-based navigation, and smart sorting by price, rating, and popularity. Users can toggle between grid and list product layouts, enjoy real-time product search with optimized queries, and navigate dynamic SSR product detail pages.

On the UI side, SunCart delivers a continuous marquee with smooth infinite scrolling, an engaging hero slider carousel, glassmorphism effects with backdrop blur and transparency, and micro-interactions on every hover state and transition.`,
    challenges: [
      "Built a dual view mode system (grid/list) with smooth transition animations and persistent state across navigation — users never lose their preferred layout.",
      "Implemented advanced multi-criteria filtering with debounced search and optimized MongoDB queries to keep response times low even with large product catalogs.",
      "Designed a continuous marquee component with smooth infinite scrolling and a hero slider carousel — both built from scratch for performance and accessibility.",
      "Integrated Better Auth for session-based secure authentication with protected routes and middleware, plus HTTPS enforcement on production.",
      "Applied performance optimizations: dynamic imports for code splitting, Next.js Image component for lazy loading and WebP conversion, React.useMemo for expensive computations, and route prefetching.",
    ],
    improvements: [
      "Build a full shopping cart with persistent state via localStorage and server sync.",
      "Add user wishlist functionality with email-saving for price drop alerts.",
      "Integrate Stripe payment gateway for complete checkout flow.",
      "Add product reviews and ratings with moderation queue.",
      "Implement order management dashboard for users and admins.",
      "Add email notifications for order confirmation and shipping updates.",
    ],
  },
  {
    slug: "crop-yield-prediction",
    title: "Crop Yield Forecast Engine",
    category: "Machine Learning",
    description:
      "Developed a specialized ensemble ML model integrating satellite imagery and historical weather data to predict crop yields with 94% accuracy, aiding agricultural resource allocation across Bangladesh.",
    image:
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=600&fit=crop&q=80",
    techs: ["Python", "scikit-learn", "TensorFlow", "Pandas", "Streamlit"],
    liveLink: "https://cropforecast.streamlit.app",
    repoLink: "https://github.com/salmanibneyrahman/crop-yield-prediction-claude---GB",
    longDescription: `I designed and deployed a complete end-to-end ML pipeline that recommends the most suitable crop based on district, season, soil type, and climate conditions — and predicts yield in tons per hectare using non-linear regression modeling.

The system works without soil nutrient data (N, P, K, pH), integrates real-time weather APIs, is fully deployed as a mobile-friendly Streamlit application, and supports 73 crops across 64 districts of Bangladesh. Stage 1 uses a KNN classifier (k=7, distance-weighted) achieving 88.21% accuracy across 73 crop classes. Stage 2 uses a Decision Tree Regressor (max_depth=25) achieving an R² score of 0.8621 and MAE of 0.3140 t/ha.

I cleaned and processed 200,000 augmented agricultural records derived from 4,608 real district-level records, handled class imbalance across 73 crop classes, and built and evaluated 12 machine learning models across two tasks with systematic hyperparameter tuning.`,
    challenges: [
      "Handled extreme class imbalance across 73 crop classes — some crops had very few samples while others dominated — requiring careful stratified sampling and evaluation strategies.",
      "Built the system to work without soil nutrient data (N, P, K, pH), relying purely on climate features, district, season, and soil type — making it usable in resource-limited environments where soil testing isn't available.",
      "Integrated the Open-Meteo API for automatic real-time weather retrieval with GPS-based district detection using Euclidean distance matching — so a farmer can get recommendations just by sharing their location.",
      "Designed and evaluated 12 different ML models across both tasks (KNN, Random Forest, Gradient Boosting, XGBoost, Decision Tree, Logistic Regression, SVM for classification; plus their regression counterparts) with systematic hyperparameter tuning for every single one.",
      "Serialized all models, encoders, and scalers using joblib into a modular inference pipeline, achieving sub-second inference latency on deployment — critical for a farmer-facing mobile-friendly app.",
    ],
    improvements: [
      "Add soil nutrient input support (N, P, K, pH) when data becomes available for higher accuracy.",
      "Integrate satellite imagery analysis for crop health monitoring and yield validation.",
      "Build a mobile app with offline capability for farmers in low-connectivity areas.",
      "Add market price prediction to recommend the most profitable crops, not just the most suitable.",
      "Expand to neighboring countries (India, Nepal) with localized district and crop data.",
      "Implement a farmer feedback loop to continuously improve model accuracy with real-world outcomes.",
    ],
  },
];

export const skills = {
  frontend: [
    "JavaScript (ES6+)",
    "HTML5",
    "CSS3",
    "React",
    "Next.js",
    "Tailwind CSS",
    "HeroUI",
    "DaisyUI",
    "Framer Motion",
    "Recharts",
    "Vite",
  ],
  backend: [
    "Node.js",
    "Express.js",
    "REST APIs",
    "Better Auth",
    "JWT/JWKS",
    "RBAC",
    "Stripe",
    "MongoDB Atlas",
    "MySQL",
  ],
  ml: [
    "Python",
    "scikit-learn",
    "TensorFlow",
    "Keras",
    "NLTK",
    "Pandas",
    "NumPy",
    "Matplotlib",
    "Seaborn",
  ],
  devops: ["Git", "GitHub", "Vercel", "Netlify", "Render", "CI/CD"],
};

export const education = {
  degree: "BSc in Computer Science & Engineering",
  institution: "East West University",
  location: "Dhaka, Bangladesh",
  period: "2022 – 2026",
  cgpa: "3.17",
};

export const stats = {
  projects: 9,
  production: 6,
  years: 4,
};

export const social = {
  github: "https://github.com/salmanibneyrahman",
  linkedin: "https://linkedin.com/in/salman-ibney-rahman",
  email: "mailto:rahmanmdsalman428@gmail.com",
};