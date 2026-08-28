export default function Skills() {
  const skillGroups = [
    {
      title: "Frontend",
      description:
        "Building responsive interfaces and modern web applications.",
      skills: ["HTML", "CSS", "JavaScript", "React", "Next.js"],
      accent: "#3E5F7A",
      bg: "#DCE5EA",
    },
    {
      title: "Backend",
      description:
        "Developing server-side applications, APIs, and application logic.",
      skills: ["Node.js", "NestJS", "PHP", "ASP.NET Core"],
      accent: "#2B2B2B",
      bg: "#E2E8DC",
    },
    {
      title: "Databases",
      description:
        "Working with relational and document-oriented databases.",
      skills: ["MySQL", "PostgreSQL", "Oracle", "Microsoft SQL Server"],
      accent: "#82766B",
      bg: "#E6DDD2",
    },
    {
      title: "Programming & Engineering",
      description:
        "Programming fundamentals, version control, and software design.",
      skills: [
        "Python",
        "C++",
        "Java",
        "C#",
        "Git & GitHub",
        "Software Architecture",
        "Design Patterns",
      ],
      accent: "#9DBA6F",
      bg: "#E5EAD9",
    },
    {
      title: "Machine Learning",
      description:
        "Exploring machine learning concepts and data-driven applications.",
      skills: ["Machine Learning"],
      accent: "#3E5F7A",
      bg: "#DCE5EA",
    },
  ];

  return (
    <section
      id="skills"
      className="scroll-mt-20 bg-[#D8D0C5] px-6 py-28"
    >
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mb-16 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-[#3E5F7A]">
              Technical Skills
            </p>

            <h2 className="max-w-3xl text-4xl font-bold leading-tight tracking-tight text-[#2B2B2B] md:text-6xl">
              Technologies and tools
              <span className="block text-[#3E5F7A]">
                I work with.
              </span>
            </h2>
          </div>

          <p className="max-w-md text-base leading-relaxed text-[#82766B]">
            A growing technical foundation built through academic coursework,
            project development, and continuous practice.
          </p>
        </div>

        {/* Skills Layout */}
        <div className="grid gap-6 lg:grid-cols-2">
          {skillGroups.map((group, index) => (
            <div
              key={group.title}
              className={`rounded-[2rem] border border-[#82766B]/20 p-8 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl ${
                index === 4 ? "lg:col-span-2" : ""
              }`}
              style={{
                backgroundColor: group.bg,
              }}
            >
              {/* Card Header */}
              <div className="flex items-start justify-between gap-6">
                <div>
                  <p
                    className="text-sm font-semibold uppercase tracking-[0.2em]"
                    style={{ color: group.accent }}
                  >
                    0{index + 1}
                  </p>

                  <h3 className="mt-3 text-2xl font-bold text-[#2B2B2B]">
                    {group.title}
                  </h3>
                </div>

                <div
                  className="h-3 w-3 rounded-full"
                  style={{ backgroundColor: group.accent }}
                />
              </div>

              {/* Description */}
              <p className="mt-5 max-w-lg leading-relaxed text-[#5F554D]">
                {group.description}
              </p>

              {/* Skills */}
              <div className="mt-8 flex flex-wrap gap-3">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-[#82766B]/20 bg-[#F4F0E8] px-4 py-2 text-sm font-medium text-[#2B2B2B]"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Note */}
        <div className="mt-10 border-l-4 border-[#9DBA6F] bg-[#E8E1D7] px-7 py-6">
          <p className="text-lg font-medium leading-relaxed text-[#2B2B2B]">
            My current focus is on strengthening backend development skills,
            building full-stack applications, and improving my understanding
            of scalable software architecture.
          </p>
        </div>
      </div>
    </section>
  );
}