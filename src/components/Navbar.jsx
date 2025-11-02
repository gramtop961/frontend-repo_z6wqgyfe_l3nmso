import { Github, Linkedin, Mail } from 'lucide-react';

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto max-w-7xl px-6 py-4">
        <div className="flex items-center justify-between rounded-2xl bg-black/30 backdrop-blur border border-white/10 px-5 py-3">
          <a href="#home" className="text-white font-semibold tracking-tight">
            <span className="text-purple-400">/</span> yourname
          </a>
          <nav className="hidden md:flex items-center gap-6 text-sm text-white/80">
            <a href="#about" className="hover:text-white transition">About</a>
            <a href="#projects" className="hover:text-white transition">Projects</a>
            <a href="#contact" className="hover:text-white transition">Contact</a>
          </nav>
          <div className="flex items-center gap-3">
            <a
              href="mailto:you@example.com"
              aria-label="Email"
              className="p-2 rounded-lg border border-white/10 text-white/80 hover:text-white hover:border-white/20 transition"
            >
              <Mail size={18} />
            </a>
            <a
              href="https://github.com/"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="p-2 rounded-lg border border-white/10 text-white/80 hover:text-white hover:border-white/20 transition"
            >
              <Github size={18} />
            </a>
            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="p-2 rounded-lg border border-white/10 text-white/80 hover:text-white hover:border-white/20 transition"
            >
              <Linkedin size={18} />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
