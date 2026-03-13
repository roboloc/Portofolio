import Link from "next/link";

export default function Header() {
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

        {/* Nav Links */}
        <nav>
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
                className="bg-cyan-600 px-4 py-2 rounded-full hover:text-cyan-600 transition"
              >
                Experience
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
