import { Mail, Github, Linkedin } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="relative py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-white">Let’s connect</h2>
          <p className="mt-2 text-white/70 max-w-2xl">
            Open to collaborations, freelance projects, and full-time roles. Drop a message and I’ll get back to you.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-3">
          <ContactCard
            href="mailto:you@example.com"
            title="Email"
            subtitle="you@example.com"
            Icon={Mail}
          />
          <ContactCard
            href="https://github.com/"
            title="GitHub"
            subtitle="github.com/yourname"
            Icon={Github}
          />
          <ContactCard
            href="https://www.linkedin.com/"
            title="LinkedIn"
            subtitle="linkedin.com/in/yourname"
            Icon={Linkedin}
          />
        </div>

        <p className="mt-12 text-center text-xs text-white/50">
          © {new Date().getFullYear()} Your Name. All rights reserved.
        </p>
      </div>
    </section>
  );
}

function ContactCard({ href, title, subtitle, Icon }) {
  return (
    <a
      href={href}
      target={href.startsWith('http') ? '_blank' : undefined}
      rel={href.startsWith('http') ? 'noreferrer' : undefined}
      className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-white/[0.03] p-5 transition hover:shadow-2xl hover:shadow-purple-500/10"
    >
      <div className="absolute -right-12 -top-12 h-44 w-44 rounded-full bg-purple-500/10 blur-3xl" />
      <div className="relative z-10 flex items-start gap-4">
        <div className="mt-1 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-purple-500/20 text-purple-300 border border-purple-400/20">
          <Icon size={20} />
        </div>
        <div>
          <h3 className="font-semibold text-white">{title}</h3>
          <p className="text-sm text-white/70">{subtitle}</p>
        </div>
      </div>
    </a>
  );
}
