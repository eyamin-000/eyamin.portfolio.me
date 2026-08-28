const featuredProjects = [
  {
    number: "01",
    name: "Property Management System",
    category: "Full-Stack Team Project",
    status: "Ongoing",

    description:
      "A full-stack property management platform designed to support property-related operations, user management, complaints, announcements, and administrative workflows.",

    contribution: "Admin Module- Backend & Frontend",

    architecture:
      "The frontend and backend are maintained as separate repositories, following a modular full-stack development workflow.",

    technologies: [
      "Next.js",
      "React",
      "Node.js",
      "NestJS",
      "PostgreSQL",
    ],

    frontendGithub: "https://github.com/Arindom-Lane/property-management-system-frontend.git",

    backendGithub:
      "https://github.com/Arindom-Lane/property-management-system-Backend",

    background: "#DCE5EA",
  },

  {
    number: "02",
    name: "Virtual Bag System",
    category: "ASP.NET Core MVC Application",
    status: "Completed",

    description:
      "A web-based Virtual Bag System developed as a complete application using ASP.NET Core MVC, covering application structure, functionality, and core system implementation.",

    contribution: "Solo Development",

    technologies: ["ASP.NET Core MVC", "C#"],

    github: "https://github.com/eyamin-000/Virtual-Bag-System",

    background: "#E2E8DC",
  },

  {
    number: "03",
    name: "TripDiary",
    category: "Travel Management & Tour Suggestion System",
    status: "Modification Ongoing",

    description:
      "A web-based travel management and tour suggestion system designed to help users manage trips, plan travel activities, maintain profiles, and participate in events.",

    contribution:
      "Signup, Admin Dashboard, User Dashboard, Events, Plan Trip & Profile Features",

    technologies: ["PHP", "JavaScript", "HTML", "CSS"],

    github:
      "https://github.com/eyamin-000/Trip_Diary_Travel_Management_And_Tour_Suggestion_System",

    background: "#E6DDD2",
  },
];

const additionalProjects = [
  {
    name: "SkillSwap Campus",
    technology: "Next.js • React • Node.js • NestJS • PostgreSQL",
    status: "Ongoing",
    github: "https://github.com/eyamin-000/skillswap-campus",
  },

  {
    name: "Virtual Bag Selenium Testing",
    technology: "Python • Pytest • Selenium WebDriver",
    status: "Completed",
    github:
      "https://github.com/eyamin-000/Virtual-Bag-System-SeleniumTesting",
  },

  {
    name: "Pohela Boishakh Festival Scene",
    technology: "C++ • OpenGL",
    status: "Completed",
    github:
      "https://github.com/fihabefty114/Animated-Pohela-Boishakh-Festival-Scene",
  },
];

export default function Projects() {
  const propertyProject = featuredProjects[0];
  const secondaryProjects = featuredProjects.slice(1);

  return (
    <section
      id="projects"
      className="scroll-mt-20 bg-[#D5CDC2] px-6 py-28"
    >
      <div className="mx-auto max-w-7xl">
        {/*  Header  */}

        <div className="mb-16">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-[#3E5F7A]">
            Selected Projects
          </p>

          <h2 className="max-w-4xl text-4xl font-bold leading-tight tracking-tight text-[#2B2B2B] md:text-6xl">
            Practical work and
            <span className="block text-[#3E5F7A]">
              software development experience.
            </span>
          </h2>

          <p className="mt-6 max-w-2xl text-base leading-relaxed text-[#5F554D]">
            A selection of projects covering full-stack development, backend
            engineering, web applications, software testing, and interactive
            programming.
          </p>
        </div>

        {/*  Primary Project  */}

        <div
          className="relative mb-10 overflow-hidden rounded-[2.5rem] border border-[#82766B]/20 p-8 shadow-xl md:p-12"
          style={{
            backgroundColor: propertyProject.background,
          }}
        >
          {/* Decorative Number */}

          <span className="absolute -right-4 -top-12 select-none text-[10rem] font-bold text-[#3E5F7A] opacity-10 md:text-[15rem]">
            01
          </span>

          <div className="relative grid gap-12 lg:grid-cols-[1.3fr_0.7fr] lg:items-end">
            {/* Left Content */}

            <div>
              <div className="mb-8 flex flex-wrap items-center gap-3">
                <span className="rounded-full bg-[#3E5F7A] px-4 py-2 text-xs font-semibold uppercase tracking-wider text-white">
                  Featured Project
                </span>

                <span className="rounded-full border border-[#82766B]/20 bg-[#F4F0E8]/80 px-4 py-2 text-xs font-medium text-[#5F554D]">
                  {propertyProject.status}
                </span>
              </div>

              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#3E5F7A]">
                {propertyProject.category}
              </p>

              <h3 className="mt-4 max-w-3xl text-4xl font-bold leading-tight tracking-tight text-[#2B2B2B] md:text-6xl">
                {propertyProject.name}
              </h3>

              <p className="mt-7 max-w-2xl text-lg leading-relaxed text-[#5F554D]">
                {propertyProject.description}
              </p>

              {/* Contribution */}

              <div className="mt-9 border-l-4 border-[#9DBA6F] pl-5">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#82766B]">
                  My Contribution
                </p>

                <p className="mt-2 text-lg font-semibold text-[#2B2B2B]">
                  {propertyProject.contribution}
                </p>
              </div>
            </div>

            {/* Right Content */}

            <div className="lg:pb-2">
              <div>
                <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-[#82766B]">
                  Technology Stack
                </p>

                <div className="flex flex-wrap gap-2 lg:justify-end">
                  {propertyProject.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-[#82766B]/20 bg-[#F4F0E8] px-3 py-2 text-sm font-medium text-[#2B2B2B]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Architecture */}

              <div className="mt-8 rounded-2xl border border-[#3E5F7A]/15 bg-[#F4F0E8]/60 p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#3E5F7A]">
                  Project Architecture
                </p>

                <p className="mt-3 text-sm leading-relaxed text-[#5F554D]">
                  {propertyProject.architecture}
                </p>
              </div>

              {/* Repository Buttons */}

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href={propertyProject.frontendGithub}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-xl bg-[#3E5F7A] px-5 py-3 text-sm font-semibold text-white transition duration-300 hover:-translate-y-1 hover:bg-[#2B2B2B] hover:shadow-lg"
                >
                  Frontend Repository ↗
                </a>

                <a
                  href={propertyProject.backendGithub}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-xl border border-[#82766B]/30 bg-[#F4F0E8] px-5 py-3 text-sm font-semibold text-[#2B2B2B] transition duration-300 hover:-translate-y-1 hover:border-[#3E5F7A] hover:shadow-lg"
                >
                  Backend Repository ↗
                </a>
              </div>
            </div>
          </div>
        </div>

        {/*  Secondary Projects  */}

        <div className="grid gap-8 lg:grid-cols-2">
          {secondaryProjects.map((project) => (
            <div
              key={project.name}
              className="flex h-full flex-col rounded-[2rem] border border-[#82766B]/20 p-8 shadow-md transition duration-300 hover:-translate-y-2 hover:shadow-xl"
              style={{
                backgroundColor: project.background,
              }}
            >
              {/* Top */}

              <div className="flex items-start justify-between gap-4">
                <span className="text-sm font-bold text-[#3E5F7A]">
                  {project.number}
                </span>

                <span className="rounded-full border border-[#82766B]/20 bg-[#F4F0E8]/70 px-3 py-1.5 text-xs font-medium text-[#5F554D]">
                  {project.status}
                </span>
              </div>

              {/* Title */}

              <p className="mt-8 text-sm font-semibold text-[#3E5F7A]">
                {project.category}
              </p>

              <h3 className="mt-3 text-3xl font-bold leading-tight text-[#2B2B2B]">
                {project.name}
              </h3>

              {/* Description */}

              <p className="mt-6 leading-relaxed text-[#5F554D]">
                {project.description}
              </p>

              {/* Contribution */}

              <div className="mt-7 border-l-2 border-[#9DBA6F] pl-4">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#82766B]">
                  Contribution
                </p>

                <p className="mt-2 text-sm font-medium leading-relaxed text-[#2B2B2B]">
                  {project.contribution}
                </p>
              </div>

              {/* Technology */}

              <div className="mt-8 flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-[#82766B]/20 bg-[#F4F0E8] px-3 py-1.5 text-sm text-[#2B2B2B]"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* GitHub */}

              <div className="mt-auto pt-8">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-[#3E5F7A] transition hover:text-[#2B2B2B]"
                >
                  View Repository →
                </a>
              </div>
            </div>
          ))}
        </div>

        {/*  Additional Projects  */}

        <div className="mt-20">
          <div className="mb-8 flex items-center gap-5">
            <h3 className="whitespace-nowrap text-2xl font-bold text-[#2B2B2B]">
              Additional Projects
            </h3>

            <div className="h-px w-full bg-[#82766B]/30" />
          </div>

          <div className="divide-y divide-[#82766B]/20 border-y border-[#82766B]/20">
            {additionalProjects.map((project, index) => (
              <a
                key={project.name}
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col gap-4 py-7 transition md:flex-row md:items-center md:justify-between"
              >
                <div className="flex items-center gap-5 md:gap-7">
                  <span className="text-sm font-semibold text-[#9DBA6F]">
                    0{index + 4}
                  </span>

                  <div>
                    <h4 className="text-xl font-semibold text-[#2B2B2B] transition group-hover:text-[#3E5F7A]">
                      {project.name}
                    </h4>

                    <p className="mt-1 text-sm text-[#82766B]">
                      {project.technology}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-6">
                  <span className="text-xs font-medium text-[#82766B]">
                    {project.status}
                  </span>

                  <span className="font-semibold text-[#3E5F7A] transition duration-300 group-hover:translate-x-2">
                    View →
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}