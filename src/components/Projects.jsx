import { ExternalLink, Code2, Rocket } from 'lucide-react';

const projects = [
  {
    title: 'Nebula Portfolio',
    description: 'A 3D-enhanced portfolio with smooth motion and dark neon vibes.',
    tech: ['React', 'Three.js', 'Tailwind'],
    url: '#',
    icon: Rocket,
  },
  {
    title: 'Synthwave Dashboard',
    description: 'Real-time analytics with a retro-futuristic interface and charts.',
    tech: ['Vite', 'ECharts', 'Framer Motion'],
    url: '#',
    icon: Code2,
  },
  {
    title: 'Quantum Commerce',
    description: 'Ultra-fast storefront with smart search and delightful micro-interactions.',
    tech: ['Next.js', 'Edge Functions', 'Stripe'],
    url: '#',
    icon: Rocket,
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white">Selected Projects</h2>
          <p className="mt-2 text-white/70 max-w-2xl">
            A mix of experiments and production work, focused on performance, aesthetics, and interaction.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <ProjectCard key={p.title} {...p} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ title, description, tech, url, icon: Icon }) {
  return (
    <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-white/[0.03] p-6 transition transform hover:-translate-y-1 hover:shadow-2xl hover:shadow-purple-500/10">
      <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-purple-500/10 blur-3xl" />
      <div className="relative z-10">
        <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-purple-500/20 text-purple-300 border border-purple-400/20">
          <Icon size={20} />
        </div>
        <h3 className="text-xl font-semibold text-white">{title}</h3>
        <p className="mt-2 text-sm text-white/70">{description}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {tech.map((t) => (
            <span key={t} className="text-xs px-2.5 py-1 rounded-full border border-white/10 text-white/70 bg-black/30">
              {t}
            </span>
          ))}
        </div>
        <a
          href={url}
          target="_blank"
          rel="noreferrer"
          className="mt-5 inline-flex items-center gap-2 text-sm text-purple-300 hover:text-purple-200"
        >
          Visit project <ExternalLink size={16} />
        </a>
      </div>
    </div>
  );
}
