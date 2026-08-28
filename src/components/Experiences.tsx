const experiences = [
  {
    number: "01",
    role: "Independent Tutor",
    organization: "Independent Teaching",
    duration: "6+ Years of Experience",
    type: "Teaching Experience",

    description:
      "Providing independent academic support to students in the local area through regular lessons, subject-focused guidance, and structured learning support.",

    responsibilities: [
      "Teaching Mathematics, Physics, ICT, Bangla, and Science.",
      "Preparing lessons based on students' academic needs.",
      "Explaining topics and helping students develop a clearer understanding of course materials.",
      "Supporting regular study, practice, and academic preparation.",
    ],

    highlights: [
      "Mathematics",
      "Physics",
      "ICT",
      "Bangla",
      "Science",
    ],

    background: "#DCE5EA",
  },

  {
    number: "02",
    role: "Union Team Leader",
    organization: "Shawpner Sonargaon Social Organization",
    duration: "Current Involvement",
    type: "Social & Community Work",

    description:
      "Working with a local social organization involved in community support activities, including blood donation, social assistance, and healthcare and medicine campaigns.",

    responsibilities: [
      "Managing and coordinating team members within the assigned union team.",
      "Providing instructions and support for planned activities and campaigns.",
      "Helping organize team participation in community-focused initiatives.",
      "Contributing to social support activities for people in need.",
    ],

    highlights: [
      "Team Coordination",
      "Leadership",
      "Community Support",
      "Blood Donation",
      "Social Work",
    ],

    background: "#E2E8DC",
  },
];

const developmentExperience = [
  {
    name: "Property Management System",
    role: "Admin Module Development",
    description:
      "Contributing to the frontend and backend development of the admin module in a full-stack team project.",
    technologies: [
      "Next.js",
      "React",
      "Node.js",
      "NestJS",
      "PostgreSQL",
    ],
  },

  {
    name: "SkillSwap Campus",
    role: "Application Development",
    description:
      "Developing a campus-based platform designed for skill exchange and collaboration between students.",
    technologies: [
      "Next.js",
      "React",
      "Node.js",
      "NestJS",
      "PostgreSQL",
    ],
  },

  {
    name: "Virtual Bag System",
    role: "Solo Development",
    description:
      "Developed a complete web application using ASP.NET Core MVC and C#.",
    technologies: ["ASP.NET Core MVC", "C#"],
  },

  {
    name: "TripDiary",
    role: "Feature Development",
    description:
      "Worked on signup, dashboards, events, trip planning, and profile-related features for a travel management system.",
    technologies: ["PHP", "JavaScript", "HTML", "CSS"],
  },
];

export default function Experiences() {
  return (
    <section
      id="experience"
      className="relative scroll-mt-20 overflow-hidden bg-[#E6DED3] px-6 py-28"
    >
      {/* Background Decorations */}

      <div className="absolute -left-32 top-20 h-80 w-80 rounded-full bg-[#9DBA6F] opacity-10 blur-3xl" />

      <div className="absolute -right-32 bottom-10 h-96 w-96 rounded-full bg-[#3E5F7A] opacity-10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        {/* Header */}

        <div className="mb-16">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-[#3E5F7A]">
            Experience
          </p>

          <h2 className="max-w-4xl text-4xl font-bold leading-tight tracking-tight text-[#2B2B2B] md:text-6xl">
            Learning, leading,
            <span className="block text-[#3E5F7A]">
              and building along the way.
            </span>
          </h2>

          <p className="mt-6 max-w-2xl text-base leading-relaxed text-[#5F554D]">
            A combination of independent teaching, community involvement, team
            coordination, and practical software development work.
          </p>
        </div>

        {/* Main Experience Cards */}

        <div className="grid gap-8 lg:grid-cols-2">
          {experiences.map((experience) => (
            <div
              key={experience.number}
              className="group relative overflow-hidden rounded-[2.5rem] border border-[#82766B]/20 p-8 shadow-lg transition duration-300 hover:-translate-y-2 hover:shadow-xl md:p-10"
              style={{
                backgroundColor: experience.background,
              }}
            >
              {/* Decorative Number */}

              <span className="absolute -right-3 -top-10 select-none text-[9rem] font-bold text-[#3E5F7A] opacity-10">
                {experience.number}
              </span>

              <div className="relative">
                {/* Top Labels */}

                <div className="mb-8 flex flex-wrap gap-3">
                  <span className="rounded-full bg-[#3E5F7A] px-4 py-2 text-xs font-semibold uppercase tracking-wider text-white">
                    {experience.type}
                  </span>

                  <span className="rounded-full border border-[#82766B]/20 bg-[#F4F0E8]/80 px-4 py-2 text-xs font-medium text-[#5F554D]">
                    {experience.duration}
                  </span>
                </div>

                {/* Organization */}

                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#3E5F7A]">
                  {experience.organization}
                </p>

                {/* Role */}

                <h3 className="mt-4 text-3xl font-bold leading-tight tracking-tight text-[#2B2B2B] md:text-4xl">
                  {experience.role}
                </h3>

                {/* Description */}

                <p className="mt-6 leading-relaxed text-[#5F554D]">
                  {experience.description}
                </p>

                {/* Responsibilities */}

                <div className="mt-9 border-l-4 border-[#9DBA6F] pl-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#82766B]">
                    Responsibilities
                  </p>

                  <ul className="mt-4 space-y-3">
                    {experience.responsibilities.map((responsibility) => (
                      <li
                        key={responsibility}
                        className="flex gap-3 text-sm leading-relaxed text-[#5F554D]"
                      >
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#3E5F7A]" />

                        <span>{responsibility}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Highlights */}

                <div className="mt-9">
                  <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-[#82766B]">
                    Areas of Work
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {experience.highlights.map((highlight) => (
                      <span
                        key={highlight}
                        className="rounded-full border border-[#82766B]/20 bg-[#F4F0E8] px-3 py-2 text-sm font-medium text-[#2B2B2B]"
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Development Experience */}

        <div className="mt-24">
          <div className="mb-10 flex items-end gap-5">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#82766B]">
                Practical Development
              </p>

              <h3 className="mt-2 text-3xl font-bold leading-tight text-[#2B2B2B] md:text-4xl">
                Software development experience
              </h3>
            </div>

            <div className="mb-2 hidden h-px flex-1 bg-[#82766B]/30 md:block" />
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {developmentExperience.map((project, index) => (
              <div
                key={project.name}
                className="group rounded-[2rem] border border-[#82766B]/20 bg-[#EDE7DE] p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg md:p-8"
              >
                <div className="flex items-start justify-between gap-6">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#3E5F7A] text-sm font-bold text-white">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <span className="rounded-full border border-[#82766B]/20 bg-[#F4F0E8] px-3 py-1.5 text-xs font-medium text-[#5F554D]">
                    Project Work
                  </span>
                </div>

                <h4 className="mt-7 text-2xl font-bold leading-tight text-[#2B2B2B]">
                  {project.name}
                </h4>

                <p className="mt-3 text-sm font-semibold text-[#3E5F7A]">
                  {project.role}
                </p>

                <p className="mt-5 leading-relaxed text-[#5F554D]">
                  {project.description}
                </p>

                <div className="mt-7 flex flex-wrap gap-2">
                  {project.technologies.map((technology) => (
                    <span
                      key={technology}
                      className="rounded-full border border-[#82766B]/20 bg-[#D8D0C5] px-3 py-2 text-xs font-medium text-[#2B2B2B]"
                    >
                      {technology}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Experience Summary */}

        <div className="mt-20 grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="rounded-[2rem] bg-[#9DBA6F] p-8 shadow-lg md:p-10">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#2B2B2B]">
              Beyond Technology
            </p>

            <h3 className="mt-5 text-3xl font-bold leading-tight text-[#2B2B2B]">
              Interests that support creative and thoughtful work.
            </h3>

            <div className="mt-8 h-1 w-16 rounded-full bg-[#3E5F7A]" />

            <p className="mt-6 leading-relaxed text-[#3E4034]">
              Alongside academic and technical work, I also have an interest in
              writing, poetry, and drawing.
            </p>
          </div>

          <div className="flex flex-wrap content-center gap-3 rounded-[2rem] border border-[#82766B]/20 bg-[#D8D0C5] p-8 shadow-md md:p-10">
            {[
              "Independent Teaching",
              "Team Coordination",
              "Community Work",
              "Software Development",
              "Backend Development",
              "Full-Stack Projects",
              "Writing",
              "Poetry",
              "Drawing",
            ].map((item) => (
              <span
                key={item}
                className="rounded-full border border-[#82766B]/25 bg-[#F4F0E8] px-5 py-3 font-medium text-[#2B2B2B] transition duration-300 hover:-translate-y-1 hover:border-[#3E5F7A] hover:shadow-md"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}