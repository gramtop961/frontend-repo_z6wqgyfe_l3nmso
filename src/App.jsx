import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Contact from './components/Contact';

export default function App() {
  return (
    <div className="min-h-screen w-full bg-black text-white">
      <Navbar />
      <main className="pt-24">
        <Hero />
        <section id="about" className="relative py-24">
          <div className="mx-auto max-w-7xl px-6">
            <div className="mb-8">
              <h2 className="text-3xl md:text-4xl font-bold">About me</h2>
              <p className="mt-3 max-w-3xl text-white/70">
                I’m a front-end engineer and creative coder blending delightful visuals with solid engineering.
                My work explores the intersection of performance, accessibility, and immersive interaction. I enjoy
                building design systems, 3D interactions, and thoughtful micro-animations that elevate the user experience.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
                <h3 className="font-semibold">Core focus</h3>
                <ul className="mt-3 space-y-2 text-white/70 text-sm list-disc list-inside">
                  <li>Design systems & component libraries</li>
                  <li>3D web & real-time interactions</li>
                  <li>Performance and accessibility</li>
                </ul>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
                <h3 className="font-semibold">Toolbox</h3>
                <p className="mt-3 text-white/70 text-sm">
                  React, TypeScript, Vite, Tailwind, Three.js, Framer Motion, Vercel, GraphQL
                </p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
                <h3 className="font-semibold">Approach</h3>
                <p className="mt-3 text-white/70 text-sm">
                  Pragmatic, detail-oriented, and user-first. I value clear communication and collaborative work.
                </p>
              </div>
            </div>
          </div>
        </section>
        <Projects />
        <Contact />
      </main>
    </div>
  );
}
