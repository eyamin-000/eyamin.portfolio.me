const coursework = [
  "Software Engineering",
  "Advanced Web Technologies",
  "Database Management Systems",
  "Data Structures & Algorithms",
  "Software Architecture & Design Patterns",
  "Software Quality Assurance & Testing",
  "Machine Learning",
  "Fundamentals of Artificial Intelligence",
  "Computer Networks",
];

const technicalLearning = [
  "ASP.NET Core MVC",
  "Node.js",
  "NestJS",
  "Next.js",
  "React",
  "PostgreSQL",
];

export default function Education() {
  return (
    <section
      id="education"
      className="relative scroll-mt-20 overflow-hidden bg-[#E6DED3] px-6 py-28"
    >
      {/* Background Decorations */}
      <div className="absolute -left-32 bottom-10 h-80 w-80 rounded-full bg-[#9DBA6F] opacity-10 blur-3xl" />

      <div className="absolute -right-32 top-20 h-96 w-96 rounded-full bg-[#3E5F7A] opacity-10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        {/* Section Header */}

        <div className="mb-16">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-[#3E5F7A]">
            Education
          </p>

          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <h2 className="max-w-3xl text-4xl font-bold leading-tight tracking-tight text-[#2B2B2B] md:text-6xl">
              Academic foundation
              <span className="block text-[#3E5F7A]">
                focused on software engineering.
              </span>
            </h2>

            <p className="max-w-md text-base leading-relaxed text-[#5F554D]">
              My academic journey combines computer science fundamentals with
              software engineering, modern web development, system design, and
              practical application development.
            </p>
          </div>
        </div>

        {/* Main Education Card */}

        <div className="relative overflow-hidden rounded-[2.5rem] border border-[#82766B]/20 bg-[#DCE5EA] p-8 shadow-xl md:p-12">
          {/* Decorative CSE */}
          <div className="pointer-events-none absolute -right-8 -top-10 select-none text-[9rem] font-bold text-[#3E5F7A] opacity-10 md:text-[13rem]">
            CSE
          </div>

          <div className="relative grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
            {/* Left Information */}

            <div>
              <div className="mb-8 flex flex-wrap items-center gap-3">
                <span className="rounded-full bg-[#3E5F7A] px-4 py-2 text-xs font-semibold uppercase tracking-wider text-white">
                  Undergraduate Degree
                </span>

                <span className="rounded-full border border-[#82766B]/20 bg-[#F4F0E8]/80 px-4 py-2 text-xs font-medium text-[#5F554D]">
                  Jun 2023 — Expected Feb 2027
                </span>
              </div>

              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#3E5F7A]">
                American International University-Bangladesh
              </p>

              <h3 className="mt-5 max-w-3xl text-3xl font-bold leading-tight tracking-tight text-[#2B2B2B] md:text-5xl">
                Bachelor of Science in
                <span className="block">
                  Computer Science & Engineering
                </span>
              </h3>

              {/* Academic Focus */}

              <div className="mt-8 border-l-4 border-[#9DBA6F] pl-5">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#82766B]">
                  Academic Focus
                </p>

                <p className="mt-2 text-lg font-semibold text-[#2B2B2B]">
                  Software
                </p>
              </div>
            </div>

            {/* Achievement Card */}

            <div className="rounded-[2rem] border border-[#82766B]/20 bg-[#2B2B2B] p-7 text-white shadow-lg md:p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#9DBA6F]">
                Academic Achievement
              </p>

              <div className="mt-10">
                <p className="text-4xl font-bold tracking-tight md:text-5xl">
                  Dean&apos;s
                  <span className="block text-[#9DBA6F]">
                    Award
                  </span>
                </p>

                <div className="my-7 h-px bg-white opacity-10" />

                <p className="leading-relaxed text-[#C7BDB3]">
                  Recognition for academic performance at the American
                  International University-Bangladesh.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Relevant Coursework */}

        <div className="mt-20">
          <div className="mb-8 flex items-center gap-5">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#82766B]">
                Academic Background
              </p>

              <h3 className="mt-2 text-3xl font-bold text-[#2B2B2B]">
                Relevant Coursework
              </h3>
            </div>

            <div className="mt-8 h-px flex-1 bg-[#82766B]/30" />
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {coursework.map((course, index) => (
              <div
                key={course}
                className="group flex items-center gap-4 rounded-2xl border border-[#82766B]/20 bg-[#EDE7DE] p-5 transition duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#3E5F7A] text-sm font-bold text-white">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <p className="font-semibold leading-snug text-[#2B2B2B]">
                  {course}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Applied Technical Learning */}

        <div className="mt-20 grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          {/* Left Panel */}

          <div className="rounded-[2rem] bg-[#9DBA6F] p-8 shadow-lg md:p-10">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#2B2B2B]">
              Applied Learning
            </p>

            <h3 className="mt-5 text-3xl font-bold leading-tight text-[#2B2B2B]">
              Software technologies explored through coursework and project
              development.
            </h3>

            <div className="mt-8 h-1 w-16 rounded-full bg-[#3E5F7A]" />

            <p className="mt-6 leading-relaxed text-[#3E4034]">
              Practical learning through modern web application development,
              backend engineering, database integration, and software system
              implementation.
            </p>
          </div>

          {/* Right Technology Tags */}

          <div className="flex flex-wrap content-center gap-3 rounded-[2rem] border border-[#82766B]/20 bg-[#D8D0C5] p-8 shadow-md md:p-10">
            {technicalLearning.map((technology) => (
              <span
                key={technology}
                className="rounded-full border border-[#82766B]/25 bg-[#F4F0E8] px-5 py-3 font-medium text-[#2B2B2B] transition duration-300 hover:-translate-y-1 hover:border-[#3E5F7A] hover:shadow-md"
              >
                {technology}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}