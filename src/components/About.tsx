export default function About() {
  const focusAreas = [
    "Full-Stack Development",
    "Backend Engineering",
    "Software Architecture",
    "Design Patterns",
  ];

  return (
    <section
      id="about"
      className="relative scroll-mt-20 overflow-hidden bg-[#E8E1D7] px-6 py-28"
    >
      {/* Background Decoration */}
      <div className="absolute -left-32 top-20 h-80 w-80 rounded-full bg-[#9DBA6F] opacity-10 blur-3xl" />

      <div className="absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-[#3E5F7A] opacity-10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mb-16">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-[#3E5F7A]">
            About
          </p>

          <h2 className="max-w-3xl text-4xl font-bold leading-tight tracking-tight text-[#2B2B2B] md:text-6xl">
            Computer Science Student
            <span className="block text-[#3E5F7A]">
              with a focus on software development.
            </span>
          </h2>
        </div>

        <div className="grid gap-10 lg:grid-cols-12">
          {/* Introduction */}
          <div className="lg:col-span-7">
            <div className="h-full rounded-[2rem] border border-[#82766B]/20 bg-[#F1ECE5] p-8 shadow-lg md:p-12">
              <div className="mb-10 flex items-center gap-4">
                <div className="h-1 w-16 rounded-full bg-[#9DBA6F]" />

                <span className="text-sm font-semibold uppercase tracking-[0.2em] text-[#82766B]">
                  Profile
                </span>
              </div>

              <div className="space-y-6 text-lg leading-relaxed text-[#5F554D]">
                <p>
                  I am pursuing a BSc in Computer Science and Engineering at{" "}
                  <span className="font-semibold text-[#2B2B2B]">
                    American International University-Bangladesh (AIUB)
                  </span>
                  .
                </p>

                <p>
                  My work and academic projects have given me experience with
                  web application development, backend systems, databases, APIs,
                  and modern software engineering practices.
                </p>

                <p>
                  I am particularly interested in understanding how software
                  systems are structured and how thoughtful architecture and
                  design decisions contribute to maintainable applications.
                </p>
              </div>

              {/* Areas of Interest */}
              <div className="mt-12 border-t border-[#82766B]/20 pt-8">
                <p className="mb-5 text-xs font-semibold uppercase tracking-[0.2em] text-[#82766B]">
                  Areas of Interest
                </p>

                <div className="flex flex-wrap gap-3">
                  {focusAreas.map((item, index) => (
                    <span
                      key={item}
                      className={
                        index === 0
                          ? "rounded-full bg-[#3E5F7A] px-4 py-2 text-sm font-medium text-white"
                          : index === 1
                          ? "rounded-full bg-[#2B2B2B] px-4 py-2 text-sm font-medium text-white"
                          : "rounded-full bg-[#9DBA6F]/20 px-4 py-2 text-sm font-medium text-[#2B2B2B]"
                      }
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Academic Snapshot */}
          <div className="lg:col-span-5">
            <div className="relative h-full overflow-hidden rounded-[2rem] bg-[#2B2B2B] p-8 text-white shadow-xl md:p-10">
              <div className="absolute left-0 top-0 h-2 w-full bg-[#9DBA6F]" />

              <p className="mb-12 text-sm font-semibold uppercase tracking-[0.25em] text-[#9DBA6F]">
                Academic Snapshot
              </p>

              <div className="border-b border-white/10 pb-8">
                <p className="text-sm text-[#C7BDB3]">
                  Current CGPA
                </p>

                <p className="mt-2 text-6xl font-bold tracking-tight">
                  3.74
                </p>
              </div>

              <div className="space-y-8 py-9">
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-[#9DBA6F]">
                    Degree
                  </p>

                  <p className="mt-2 text-lg font-semibold">
                    BSc in Computer Science & Engineering
                  </p>
                </div>

                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-[#9DBA6F]">
                    University
                  </p>

                  <p className="mt-2 text-lg font-semibold">
                    American International University-Bangladesh
                  </p>
                </div>

                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-[#9DBA6F]">
                    Expected Graduation
                  </p>

                  <p className="mt-2 text-lg font-semibold text-[#D9E5C4]">
                    2027
                  </p>
                </div>
              </div>

              <div className="border-t border-white/10 pt-7">
                <p className="text-sm text-[#C7BDB3]">
                  Professional Direction
                </p>

                <p className="mt-2 text-xl font-semibold text-[#9DBA6F]">
                  Full-Stack & Backend Engineering
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}