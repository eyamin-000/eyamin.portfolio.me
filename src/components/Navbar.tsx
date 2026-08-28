import { portfolioData } from "@/data/portfolio";

export default function Navbar() {
  const navItems = [
    "About",
    "Skills",
    "Projects",
    "Education",
    "Experience",
    "Contact",
    
  ];

  return (
    <nav className="fixed top-0 z-50 w-full border-b border-[#82766B]/20 bg-[#F4F0E8]/85 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        {/* Logo */}
        <a
          href="#home"
          className="text-xl font-black tracking-tight text-[#2B2B2B]"
        >
          {portfolioData.personal.shortName}
          <span className="text-[#9DBA6F]">.</span>
        </a>

        {/* Navigation Links */}
        <div className="hidden items-center gap-2 md:flex">
          {navItems.map((item, index) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="group relative rounded-full px-4 py-2 text-sm font-medium text-[#82766B] transition-all duration-300 hover:text-[#3E5F7A]"
            >
              {/* Animated pill background */}
              <span
                className={`absolute inset-0 scale-0 rounded-full transition-transform duration-300 group-hover:scale-100 ${
                  index % 2 === 0
                    ? "bg-[#9DBA6F]/20"
                    : "bg-[#3E5F7A]/10"
                }`}
              />

              <span className="relative z-10">
                {item}
              </span>
            </a>
          ))}
        </div>

        {/* GitHub Button */}
        <a
          href={portfolioData.personal.github}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full bg-[#2B2B2B] px-5 py-2.5 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#3E5F7A] hover:shadow-lg hover:shadow-[#3E5F7A]/20"
        >
          GitHub ↗
        </a>
      </div>
    </nav>
  );
}