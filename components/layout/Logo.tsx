import Link from "next/link";

const Logo = ({ isLogoFooter = false }: { isLogoFooter?: boolean }) => {
  return (
    <Link
      href="/"
      className={`text-code font-bold uppercase ${
        isLogoFooter ? "text-3xl" : "text-2xl"
      }`}
    >
      <span className="text-valencia">a</span>
      <span className="text-supernova">b</span>
      <span className="text-cerise">h</span>
      <span className="text-azureradiance">i</span>
      <span className="text-azureradiance">s</span>
      <span className="text-oceangreen">h</span>
      <span className="text-roseofsharon">e</span>
      <span className="text-brickred">k</span>
      <span className="text-tanhide">.</span>
    </Link>
  );
};
export default Logo;
