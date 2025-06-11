import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-cyan-50 border border-cyan-50 p-4 flex flex-col md:flex-row items-center justify-between relative z-50">
      <nav className="text-black text-xl font-bold mb-4 md:mb-0">
        <Link href="/">Rafif Portfolio</Link>
      </nav>

      <nav className="w-full md:w-auto">
        <ul className="flex flex-col items-center md:flex-row gap-4 text-black p-0">
          <li>
            <Link className="underline hover:text-gray-700" href="/#about-me">
              About me
            </Link>
          </li>
          <li>
            <Link className="underline hover:text-gray-700" href="/#skill">
              Skill
            </Link>
          </li>
          <li>
            <Link className="underline hover:text-gray-700" href="/#portofolio">
              Portfolio
            </Link>
          </li>
          <li>
            <Link className="underline hover:text-gray-700" href="/#experience">
              Experience
            </Link>
          </li>
          <li>
            <Link className="underline hover:text-gray-700" href="/#client">
              Client
            </Link>
          </li>
          <li>
            <Link className="underline hover:text-gray-700" href="/#contact-me">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
