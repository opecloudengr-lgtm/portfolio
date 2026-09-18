export function About() {
  return (
    <section id="about" className="border-b border-white/10 px-5 py-20">
      <div className="mx-auto max-w-5xl">
        <h2 className="text-sm font-mono font-semibold uppercase tracking-widest text-accent">
          About
        </h2>
        <p className="mt-2 text-2xl font-semibold text-neutral-50 sm:text-3xl">
          Engineering background, applied to software
        </p>

        <div className="mt-8 grid gap-8 sm:grid-cols-2">
          <div>
            <h3 className="text-sm font-semibold text-neutral-200">Where I&apos;m headed</h3>
            <p className="mt-2 text-sm leading-relaxed text-neutral-400">
              Full-stack development → DevOps → Cloud → AI-powered applications. I&apos;m
              continuing to strengthen my foundations in Linux, Git, deployment, containers,
              cloud infrastructure, backend engineering, and modern AI-assisted software
              development.
            </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-neutral-200">Before software</h3>
            <p className="mt-2 text-sm leading-relaxed text-neutral-400">
              My software work is supported by a background in Metallurgical Engineering, with
              exposure to materials, technical drawing, fabrication, welding, and practical
              workshop work — an engineering mindset for problem-solving that carries directly
              into how I debug and build.
            </p>
          </div>
        </div>

        <p className="mt-10 font-mono text-sm text-neutral-500">
          Build. Deploy. Debug. Improve.
        </p>
      </div>
    </section>
  );
}
