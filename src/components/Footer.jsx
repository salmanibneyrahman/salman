'use client';

export default function Footer() {
  return (
    <footer className="py-12 border-t border-white/10 text-xs text-zinc-500">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2">
          <span className="font-semibold text-white">Salman Ibney Rahman</span>
          <span>© {new Date().getFullYear()} — Built with Next.js & HeroUI</span>
        </div>

        <div className="flex items-center gap-6 text-zinc-400 font-medium">
          <a
            href="https://github.com/salmanibneyrahman"
            target="_blank"
            rel="noreferrer"
            className="hover:text-emerald-400 transition-colors"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/salman-ibney-rahman"
            target="_blank"
            rel="noreferrer"
            className="hover:text-emerald-400 transition-colors"
          >
            LinkedIn
          </a>
          <a href="mailto:rahmanmdsalman428@gmail.com" className="hover:text-emerald-400 transition-colors">
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}