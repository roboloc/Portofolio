"use client";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white/80 backdrop-blur-md shadow-sm p-4 w-full sticky top-0 z-50 border-b border-cyan-100">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          {/* Icon mark */}
          <div className="relative w-8 h-8">
            <div className="absolute inset-0 bg-cyan-300 rounded-lg opacity-60 group-hover:opacity-80 transition" />
            <div className="absolute inset-1 bg-cyan-600 rounded-md flex items-center justify-center">
              <span className="text-white font-extrabold text-sm">R</span>
            </div>
          </div>
          {/* Name */}
          <span className="font-extrabold text-lg tracking-tight">
            <span className="text-cyan-600">Rafif</span>
            <span className="text-gray-800"> Portfolio</span>
          </span>
        </Link>

        {/* Hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span
            className={`block w-6 h-0.5 bg-gray-800 transition-all ${isOpen ? "rotate-45 translate-y-2" : ""}`}
          />
          <span
            className={`block w-6 h-0.5 bg-gray-800 transition-all ${isOpen ? "opacity-0" : ""}`}
          />
          <span
            className={`block w-6 h-0.5 bg-gray-800 transition-all ${isOpen ? "-rotate-45 -translate-y-2" : ""}`}
          />
        </button>

        {/* Nav Desktop */}
        <nav className="hidden md:block">
          <ul className="flex flex-row gap-8 text-sm font-semibold items-center">
            {[
              { label: "About Me", href: "/#about-me" },
              { label: "Skills", href: "/#skill" },
              { label: "Portfolio", href: "/#portofolio" },
            ].map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className="relative text-gray-600 hover:text-cyan-600 transition group"
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-400 rounded group-hover:w-full transition-all duration-300" />
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/#experience"
                className="bg-cyan-600 text-white px-5 py-2 rounded-full hover:bg-cyan-700 transition shadow-md hover:shadow-cyan-200"
              >
                Experience
              </Link>
            </li>
          </ul>
        </nav>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <nav className="md:hidden mt-4 pb-2">
          <ul className="flex flex-col gap-4 text-sm font-semibold items-center">
            {[
              { label: "About Me", href: "/#about-me" },
              { label: "Skills", href: "/#skill" },
              { label: "Portfolio", href: "/#portofolio" },
            ].map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className="text-gray-600 hover:text-cyan-600 transition"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/#experience"
                className="bg-cyan-600 text-white px-5 py-2 rounded-full hover:bg-cyan-700 transition"
                onClick={() => setIsOpen(false)}
              >
                Experience
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
