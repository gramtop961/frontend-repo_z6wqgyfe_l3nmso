import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/EF7JOSsHLk16Tlw9/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Gradient overlays for depth without blocking interaction */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/80" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black to-transparent" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 pt-40 pb-28">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white">
            Futuristic Interfaces, Human Touch
          </h1>
          <p className="mt-5 text-lg md:text-xl text-white/80">
            I’m a creative developer crafting immersive web experiences. Explore my work and
            let’s build something extraordinary.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-xl bg-purple-500/90 hover:bg-purple-500 text-white px-5 py-3 transition border border-white/10 shadow-lg shadow-purple-500/20"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-xl bg-white/10 hover:bg-white/20 text-white px-5 py-3 transition border border-white/10"
            >
              Get in touch
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
