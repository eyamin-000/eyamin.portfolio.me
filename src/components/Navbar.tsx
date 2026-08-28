"use client";

import { useState } from "react";
import { portfolioData } from "@/data/portfolio";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

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
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-6">
        {/* Logo */}
        <a
          href="#home"
          onClick={() => setIsOpen(false)}
          className="text-xl font-black tracking-tight text-[#2B2B2B]"
        >
          {portfolioData.personal.shortName}
          <span className="text-[#9DBA6F]">.</span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-2 md:flex">
          {navItems.map((item, index) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="group relative rounded-full px-4 py-2 text-sm font-medium text-[#82766B] transition-all duration-300 hover:text-[#3E5F7A]"
            >
              <span
                className={`absolute inset-0 scale-0 rounded-full transition-transform duration-300 group-hover:scale-100 ${
                  index % 2 === 0 ? "bg-[#9DBA6F]/20" : "bg-[#3E5F7A]/10"
                }`}
              />
              <span className="relative z-10">{item}</span>
            </a>
          ))}
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-3">
          {/* GitHub Button - Desktop */}
          <a
            href={portfolioData.personal.github}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden rounded-full bg-[#2B2B2B] px-5 py-2.5 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#3E5F7A] hover:shadow-lg hover:shadow-[#3E5F7A]/20 sm:inline-flex"
          >
            GitHub ↗
          </a>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle navigation menu"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-[#82766B]/20 bg-white/60 text-[#2B2B2B] transition-all duration-300 hover:bg-[#9DBA6F]/20 md:hidden"
          >
            <div className="flex flex-col gap-1.5">
              <span
                className={`block h-0.5 w-5 bg-current transition-all duration-300 ${
                  isOpen ? "translate-y-2 rotate-45" : ""
                }`}
              />
              <span
                className={`block h-0.5 w-5 bg-current transition-all duration-300 ${
                  isOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`block h-0.5 w-5 bg-current transition-all duration-300 ${
                  isOpen ? "-translate-y-2 -rotate-45" : ""
                }`}
              />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <div
        className={`overflow-hidden border-t border-[#82766B]/10 bg-[#F4F0E8]/95 backdrop-blur-xl transition-all duration-300 md:hidden ${
          isOpen
            ? "max-h-[500px] opacity-100"
            : "max-h-0 border-transparent opacity-0"
        }`}
      >
        <div className="mx-auto flex max-w-7xl flex-col px-5 py-4">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={() => setIsOpen(false)}
              className="rounded-xl px-4 py-3 text-sm font-medium text-[#82766B] transition-all duration-200 hover:bg-[#9DBA6F]/15 hover:text-[#3E5F7A]"
            >
              {item}
            </a>
          ))}

          {/* GitHub - Mobile */}
          <a
            href={portfolioData.personal.github}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setIsOpen(false)}
            className="mt-3 rounded-xl bg-[#2B2B2B] px-4 py-3 text-center text-sm font-semibold text-white transition-all duration-300 hover:bg-[#3E5F7A]"
          >
            Visit GitHub ↗
          </a>
        </div>
      </div>
    </nav>
  );
}