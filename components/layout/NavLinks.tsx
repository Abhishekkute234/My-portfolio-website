import Link from "next/link";

const NavLinks = () => {
  return (
    <nav className="mt-16 flex flex-col gap-8 font-Silkscreen text-3xl md:mt-0 md:flex-row md:text-sm">
      <Link className="py-4 md:py-0 md:hover:opacity-70" href="#experiences">
        Experiences
      </Link>

      <Link className="py-4 md:py-0 md:hover:opacity-70" href="#skills">
        Skills
      </Link>

      <Link className="py-4 md:py-0 md:hover:opacity-70" href="#projects">
        Projects
      </Link>
      <Link className="py-4 md:py-0 md:hover:opacity-70" href="#notes">
        Notes
        <Link className="py-4 md:py-0 md:hover:opacity-70" href="#team">
          Feedback
        </Link>
      </Link>
    </nav>
  );
};
export default NavLinks;
