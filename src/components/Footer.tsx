import { portfolioData } from "@/data/portfolio";

export default function Footer() {
  const { personal } = portfolioData;

  const navItems = [
    "Home",
    "About",
    "Skills",
    "Projects",
    "Education",
    "Experience",
    "Contact",
  ];

  return (
    <footer className="relative overflow-hidden bg-[#252525] px-6 pb-8 pt-20 text-white">
      {/* Decorative Background */}

      <div className="absolute -left-32 bottom-0 h-72 w-72 rounded-full bg-[#3E5F7A] opacity-20 blur-3xl" />

      <div className="absolute -right-32 top-0 h-80 w-80 rounded-full bg-[#9DBA6F] opacity-10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        {/* Main Footer */}

        <div className="grid gap-12 border-b border-white/10 pb-14 lg:grid-cols-[1.4fr_0.8fr_0.8fr]">
          {/* Personal Branding */}

          <div>
            <a
              href="#home"
              className="inline-block text-3xl font-bold tracking-tight text-white transition hover:text-[#9DBA6F]"
            >
              {personal.shortName}
              <span className="text-[#9DBA6F]">.</span>
            </a>

            <p className="mt-6 max-w-md leading-relaxed text-[#BEB7AF]">
              Computer Science and Engineering student focused on full-stack
              development, backend systems, and building practical software
              solutions.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl border border-white/15 px-5 py-2.5 text-sm font-semibold text-white transition duration-300 hover:-translate-y-1 hover:border-[#9DBA6F] hover:bg-[#9DBA6F] hover:text-[#252525]"
              >
                LinkedIn ↗
              </a>

              <a
                href={personal.github}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl border border-white/15 px-5 py-2.5 text-sm font-semibold text-white transition duration-300 hover:-translate-y-1 hover:border-[#3E5F7A] hover:bg-[#3E5F7A]"
              >
                GitHub ↗
              </a>
            </div>
          </div>

          {/* Navigation */}

          <div>
            <p className="text-center text-xs font-semibold uppercase tracking-[0.22em] text-[#9DBA6F]">
              Navigation
            </p>

            <div className="mt-6 grid grid-cols-2 gap-x-8 gap-y-4 text-center">
              {navItems.map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-sm text-[#BEB7AF] transition duration-300 hover:translate-x-1 hover:text-white"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>

          {/* Contact */}

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#9DBA6F]">
              Contact
            </p>

            <div className="mt-6 space-y-4">
              <div>
                <p className="text-xs text-[#8F8982]">
                  Email
                </p>

                <a
                  href="mailto:eyaminkhanemon0000@gmail.com"
                  className="mt-1 inline-block break-all text-sm text-[#D8D2CB] transition hover:text-[#9DBA6F]"
                >
                  eyaminkhanemon0000@gmail.com
                </a>
              </div>

              <div>
                <p className="text-xs text-[#8F8982]">
                  Location
                </p>

                <p className="mt-1 text-sm text-[#D8D2CB]">
                  Sonargaon, Narayanganj, Bangladesh
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}

        <div className="flex flex-col gap-4 pt-8 text-sm text-[#8F8982] md:flex-row md:items-center md:justify-between">
          <p>
            © {new Date().getFullYear()} {personal.name}. All rights reserved.
          </p>

          <a
            href="#home"
            className="inline-flex items-center gap-2 font-medium text-[#BEB7AF] transition hover:text-[#9DBA6F]"
          >
            Back to top
            <span className="text-lg">↑</span>
          </a>
        </div>
      </div>
    </footer>
  );
}