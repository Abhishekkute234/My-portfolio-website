import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";

const NavIcons = () => {
  return (
    <div className="flex items-center gap-4 md:gap-8">
      <Link
        href="https://github.com/Abhishekkute234"
        className="group flex items-center justify-center gap-x-1.5"
        target="_blank"
      >
        <Image
          src="/github.svg"
          alt="Link to Abhi's gitHub profile"
          width={25}
          height={25}
        />
        <span className="hidden text-xs text-white opacity-50 transition group-hover:opacity-100 md:inline">
          Github
        </span>
      </Link>
      <Link
        href="https://www.youtube.com/@keep_it_sorted"
        className="group flex items-center gap-x-1.5"
        target="_blank"
      >
        <FontAwesomeIcon icon={faYoutube} />
        <span className="hidden text-xs text-white opacity-50 transition group-hover:opacity-100 md:inline">
          YouTube
        </span>
      </Link>

      <Link
        href="https://www.linkedin.com/in/abhishek-kute-a85822257/"
        className="group flex items-center justify-center gap-x-1.5"
        target="_blank"
      >
        <Image
          src="/linkedin.svg"
          alt="Link to abhi's linkedin profile"
          width={28}
          height={28}
        />
        <span className="hidden text-xs text-white opacity-50 transition group-hover:opacity-100 md:inline">
          LinkedIn
        </span>
      </Link>
      <Link
        href="https://www.geeksforgeeks.org/user/abhishek_kute_234/"
        className="group flex items-center justify-center gap-x-1.5"
        target="_blank"
      >
        <Image
          src="/gfg.svg"
          alt="Link to abhi's dsa profile  profile"
          width={28}
          height={28}
        />
        <span className="hidden text-xs text-white opacity-50 transition group-hover:opacity-100 md:inline">
          GFG
        </span>
      </Link>
      <Link
        href="https://drive.google.com/file/d/1xnILUBAI3PUBJbluLUVnK4-lBRt7dzVL/view?usp=drivesdk"
        className="group flex items-center justify-center gap-x-1.5"
        target="_blank"
      >
        <Image
          src="/resume.svg"
          alt="Link to abhi's resume profile"
          width={28}
          height={28}
        />
        <span className="hidden text-xs text-white opacity-50 transition group-hover:opacity-100 md:inline">
          Resume
        </span>
      </Link>
    </div>
  );
};
export default NavIcons;
