import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-cyan-50 shadow-sm p-4 w-full sticky top-0 z-50">
      <div className="container mx-auto flex flex-wrap items-center justify-between">
        <nav className="text-xl font-bold text-gray-800 mb-4 sm:mb-0">
          <Link href="/">Ismail Portfolio</Link>
        </nav>

        <nav className="w-full md:w-auto">
          <ul className="flex flex-col items-center md:flex-row gap-4 text-black p-0">
            <li>
              <Link className="font-medium text-cyan-600" href="/#about-me">
                About me
              </Link>
            </li>
            <li>
              <Link className="font-medium text-cyan-600" href="/#skill">
                Skill
              </Link>
            </li>
            <li>
              <Link className="font-medium text-cyan-600" href="/#portofolio">
                Portfolio
              </Link>
            </li>
            <li>
              <Link className="font-medium text-cyan-600" href="/#experience">
                Experience
              </Link>
            </li>
            <li>
              <Link className="font-medium text-cyan-600" href="/#contact-me">
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
