"use client";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white shadow-md p-4 w-full sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="text-xl font-bold text-cyan-600 hover:text-cyan-800 transition"
        >
          Rafif Portfolio
        </Link>

        {/* Hamburger Button */}
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

        {/* Nav Links Desktop */}
        <nav className="hidden md:block">
          <ul className="flex flex-row gap-6 text-sm font-medium">
            <li>
              <Link
                href="/#about-me"
                className="text-gray-600 hover:text-cyan-600 transition"
              >
                About Me
              </Link>
            </li>
            <li>
              <Link
                href="/#skill"
                className="text-gray-600 hover:text-cyan-600 transition"
              >
                Skills
              </Link>
            </li>
            <li>
              <Link
                href="/#portofolio"
                className="text-gray-600 hover:text-cyan-600 transition"
              >
                Portfolio
              </Link>
            </li>
            <li>
              <Link
                href="/#experience"
                className="bg-cyan-600 text-white px-4 py-2 rounded-full hover:bg-cyan-700 transition"
              >
                Experience
              </Link>
            </li>
          </ul>
        </nav>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <nav className="md:hidden mt-4">
          <ul className="flex flex-col gap-4 text-sm font-medium items-center">
            <li>
              <Link
                href="/#about-me"
                className="text-gray-600 hover:text-cyan-600 transition"
                onClick={() => setIsOpen(false)}
              >
                About Me
              </Link>
            </li>
            <li>
              <Link
                href="/#skill"
                className="text-gray-600 hover:text-cyan-600 transition"
                onClick={() => setIsOpen(false)}
              >
                Skills
              </Link>
            </li>
            <li>
              <Link
                href="/#portofolio"
                className="text-gray-600 hover:text-cyan-600 transition"
                onClick={() => setIsOpen(false)}
              >
                Portfolio
              </Link>
            </li>
            <li>
              <Link
                href="/#experience"
                className="bg-cyan-600 text-white px-4 py-2 rounded-full hover:bg-cyan-700 transition"
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
