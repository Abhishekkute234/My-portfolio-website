import Link from "next/link";

const NavLinks = () => {
  return (
    <nav className="mt-16 flex flex-col gap-8 font-Silkscreen text-3xl md:mt-0 md:flex-row md:text-sm">
      <Link className="py-4 md:py-0 md:hover:opacity-70" href="/">
        Experiences
      </Link>

      <Link className="py-4 md:py-0 md:hover:opacity-70" href="/">
        Skills
      </Link>

      <Link className="py-4 md:py-0 md:hover:opacity-70" href="/">
        Projects
      </Link>
    </nav>
  );
};
export default NavLinks;
