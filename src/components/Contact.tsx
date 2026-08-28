import { portfolioData } from "@/data/portfolio";

const contactItems = [
  {
    label: "Email",
    value: "eyaminkhanemon0000@gmail.com",
    href: "mailto:eyaminkhanemon0000@gmail.com",
    icon: "@",
  },
  {
    label: "Phone",
    value: "01614392469",
    href: "tel:+8801614392469",
    icon: "+",
  },
  {
    label: "Location",
    value: "Sonargaon, Narayanganj, Bangladesh",
    href: null,
    icon: "⌖",
  },
];

export default function Contact() {
  const { personal } = portfolioData;

  return (
    <section
      id="contact"
      className="relative scroll-mt-20 overflow-hidden bg-[#E8E1D7] px-6 py-28"
    >
      {/* Background Decoration */}
      <div className="absolute -left-40 top-20 h-96 w-96 rounded-full bg-[#9DBA6F] opacity-10 blur-3xl" />

      <div className="absolute -right-40 bottom-0 h-[30rem] w-[30rem] rounded-full bg-[#3E5F7A] opacity-10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        {/*  Header  */}

        <div className="mb-16">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-[#3E5F7A]">
            Contact
          </p>

          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <h2 className="max-w-3xl text-4xl font-bold leading-tight tracking-tight text-[#2B2B2B] md:text-6xl">
              Let&apos;s connect and
              <span className="block text-[#3E5F7A]">
                create something meaningful.
              </span>
            </h2>

            <p className="max-w-md text-base leading-relaxed text-[#5F554D]">
              Currently seeking opportunities to learn, contribute, and grow as
              a software engineer.
            </p>
          </div>
        </div>

        {/*  Main Layout  */}

        <div className="grid gap-8 lg:grid-cols-2">
          {/*  Contact Information  */}

          <div className="relative overflow-hidden rounded-[2rem] border border-[#82766B]/20 bg-[#F0EBE3] p-7 shadow-xl shadow-[#2B2B2B]/5 md:p-10">
            {/* Decorative Accent */}
            <div className="absolute right-0 top-0 h-32 w-32 rounded-bl-[5rem] bg-[#9DBA6F]/15" />

            <div className="relative">
              <div className="mb-10">
                <div className="mb-5 flex items-center gap-3">
                  <span className="h-3 w-3 rounded-full bg-[#9DBA6F]" />

                  <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#82766B]">
                    Direct Contact
                  </p>
                </div>

                <h3 className="text-3xl font-bold text-[#2B2B2B]">
                  Get in touch.
                </h3>

                <p className="mt-3 max-w-md leading-relaxed text-[#5F554D]">
                  Feel free to reach out for opportunities, collaboration, or
                  professional conversations.
                </p>
              </div>

              {/* Contact Grid */}

              <div className="grid gap-4">
                {contactItems.map((item) => {
                  const content = (
                    <>
                      {/* Icon Box */}
                      <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#3E5F7A] text-xl font-bold text-white transition duration-300 group-hover:bg-[#9DBA6F] group-hover:text-[#2B2B2B]">
                        {item.icon}
                      </div>

                      {/* Text */}
                      <div className="min-w-0 flex-1">
                        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#82766B]">
                          {item.label}
                        </p>

                        <p className="mt-1 break-words font-semibold leading-relaxed text-[#2B2B2B]">
                          {item.value}
                        </p>
                      </div>

                      {item.href && (
                        <span className="text-lg text-[#3E5F7A] transition duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
                          ↗
                        </span>
                      )}
                    </>
                  );

                  return item.href ? (
                    <a
                      key={item.label}
                      href={item.href}
                      className="group flex items-center gap-4 rounded-2xl border border-[#82766B]/15 bg-[#E8E1D7]/70 p-5 transition duration-300 hover:-translate-y-1 hover:border-[#9DBA6F]/50 hover:bg-[#F6F2EC] hover:shadow-lg"
                    >
                      {content}
                    </a>
                  ) : (
                    <div
                      key={item.label}
                      className="flex items-center gap-4 rounded-2xl border border-[#82766B]/15 bg-[#E8E1D7]/70 p-5"
                    >
                      {content}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/*  Career Card  */}

          <div className="relative overflow-hidden rounded-[2rem] bg-[#2B2B2B] p-8 text-white shadow-2xl md:p-10">
            <div className="absolute left-0 top-0 h-2 w-full bg-[#9DBA6F]" />

            <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full border border-[#9DBA6F]/20" />

            <div className="relative flex h-full min-h-[430px] flex-col">
              <div>
                <div className="inline-flex items-center gap-3 rounded-full border border-[#9DBA6F]/30 bg-[#9DBA6F]/10 px-4 py-2">
                  <span className="h-2 w-2 rounded-full bg-[#9DBA6F]" />

                  <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#D9E5C4]">
                    Open to Opportunities
                  </span>
                </div>

                <h3 className="mt-10 text-3xl font-bold leading-tight md:text-4xl">
                  Ready to learn,
                  <span className="block text-[#9DBA6F]">
                    contribute & grow.
                  </span>
                </h3>

                <p className="mt-6 max-w-lg leading-relaxed text-[#C7BDB3]">
                  I am currently seeking internship and entry-level
                  opportunities where I can contribute to real-world software
                  projects while continuing to strengthen my engineering skills.
                </p>
              </div>

              {/* Social Links */}

              <div className="mt-auto pt-12">
                <div className="mb-6 h-px bg-white/10" />

                <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-[#B89B82]">
                  Professional Profiles
                </p>

                <div className="flex flex-wrap gap-3">
                  <a
                    href={personal.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-xl bg-[#9DBA6F] px-6 py-3 font-semibold text-[#2B2B2B] transition duration-300 hover:-translate-y-1 hover:shadow-lg"
                  >
                    LinkedIn ↗
                  </a>

                  <a
                    href={personal.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-xl border border-white/20 px-6 py-3 font-semibold text-white transition duration-300 hover:-translate-y-1 hover:border-[#3E5F7A] hover:bg-[#3E5F7A]"
                  >
                    GitHub ↗
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/*  Bottom Strip  */}

        <div className="mt-8 flex flex-col gap-5 rounded-[1.5rem] border border-[#82766B]/20 bg-[#DCE5D0] px-7 py-6 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-4">
            <span className="h-3 w-3 shrink-0 rounded-full bg-[#3E5F7A]" />

            <div>
              <p className="font-bold text-[#2B2B2B]">
                Open to new opportunities
              </p>

              <p className="mt-1 text-sm text-[#5F554D]">
                Internship · Entry-Level · Collaborative Projects
              </p>
            </div>
          </div>

          <a
            href="mailto:eyaminkhanemon0000@gmail.com"
            className="rounded-xl bg-[#3E5F7A] px-6 py-3 text-center text-sm font-semibold text-white transition duration-300 hover:-translate-y-1 hover:bg-[#2B2B2B]"
          >
            Send an Email ↗
          </a>
        </div>
      </div>
    </section>
  );
}