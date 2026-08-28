import { portfolioData } from "@/data/portfolio";

export default function Hero() {
  const { personal } = portfolioData;

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden bg-cream px-6 pb-20 pt-20"
    >
      {/* Background Decorative Shapes */}
      <div className="absolute -left-32 top-32 h-80 w-80 rounded-full bg-olivine/15 blur-3xl" />

      <div className="absolute right-0 top-20 h-96 w-96 rounded-full bg-pantone/10 blur-3xl" />

      <div className="absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-sand-dune/10 blur-3xl" />

      <div className="relative mx-auto grid w-full max-w-7xl items-center gap-16 lg:grid-cols-2">
        {/* Left Content */}
        <div>
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-olivine/40 bg-olivine/10 px-4 py-2">
            <span className="h-2 w-2 rounded-full bg-olivine" />

            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-jet">
              Available for Opportunities
            </p>
          </div>

          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-pantone">
            Hello, I&apos;m
          </p>

          <h1 className="mb-6 text-5xl font-bold leading-[1.1] tracking-tight text-jet md:text-7xl">
            {personal.name}
          </h1>

          <div className="mb-6 h-1 w-20 rounded-full bg-olivine" />

          <h2 className="mb-6 text-2xl font-semibold text-pantone md:text-3xl">
            {personal.title}
          </h2>

          <p className="mb-10 max-w-xl text-lg leading-relaxed text-sand-dune">
            {personal.subtitle}
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4">
            <a
              href="#projects"
              className="rounded-xl bg-pantone px-7 py-3.5 font-semibold text-white transition duration-300 hover:-translate-y-1 hover:bg-jet hover:shadow-xl"
            >
              View My Work
            </a>

            <a
              href={personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl border border-sand-dune/40 bg-warm-white px-7 py-3.5 font-semibold text-jet transition duration-300 hover:-translate-y-1 hover:border-olivine hover:bg-olivine/10"
            >
              LinkedIn
            </a>
          </div>
        </div>

        {/* Right Professional Card */}
        <div className="relative flex justify-center pb-16 lg:pb-0">
          {/* Decorative square */}
          <div className="absolute h-72 w-72 rotate-6 rounded-[2.5rem] border border-pantone/20 bg-pantone/5" />

          {/* Main Card */}
          <div className="relative flex h-[380px] w-full max-w-sm flex-col justify-between rounded-[2rem] border border-sand-dune/20 bg-warm-white/80 p-8 shadow-2xl backdrop-blur-xl">
            {/* Top */}
            <div className="flex items-center justify-between">
              <span className="rounded-full bg-jet px-4 py-2 text-xs font-semibold text-white">
                PORTFOLIO
              </span>

              <span className="rounded-full bg-olivine/20 px-4 py-2 text-xs font-semibold text-jet">
                2026
              </span>
            </div>

            {/* Center */}
            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-sand-dune">
                Computer Science
              </p>

              <h3 className="text-5xl font-bold text-jet">
                CSE
              </h3>

              <div className="mt-6 h-px w-full bg-sand-dune/20" />

              <p className="mt-6 text-sm leading-relaxed text-sand-dune">
                Building practical software solutions through full-stack
                development, backend systems, and modern software
                engineering practices.
              </p>
            </div>

            {/* Bottom */}
            <div className="flex items-end justify-between">
              <div>
                <p className="text-xs uppercase tracking-wider text-sand-dune">
                  University
                </p>

                <p className="mt-1 font-semibold text-jet">
                  AIUB
                </p>
              </div>

              <div className="text-right">
                <p className="text-xs uppercase tracking-wider text-sand-dune">
                  Graduation
                </p>

                <p className="mt-1 font-semibold text-pantone">
                  2027
                </p>
              </div>
            </div>
          </div>

          {/* Focus Card */}
<div className="absolute -bottom-20 left-1/2 z-20 -translate-x-1/2 rounded-2xl border border-white/60 bg-warm-white/95 px-5 py-4 shadow-xl backdrop-blur-xl lg:-bottom-20 lg:-left-6 lg:left-auto lg:translate-x-0">
  <p className="text-xs uppercase tracking-wider text-sand-dune">
    Focus
  </p>

  <p className="mt-1 whitespace-nowrap font-bold text-pantone">
    Full-Stack & Backend
  </p>
</div>
        </div>
      </div>
    </section>
  );
}