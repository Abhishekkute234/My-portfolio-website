import { Link } from "@nextui-org/link";
import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code";
import { button as buttonStyles } from "@nextui-org/theme";

import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";
import Badge from "@/components/chip";
import TrustedBy from "@/components/trusted";
import PrototypeImg from "@/components/prototype-img";
import FeaturesBento from "@/components/feature-bento";
import LightBg from "@/components/light-bg";
import Integrations from "@/components/integrations";
import { LastButNotLeast } from "@/components/last-but-not-least";

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10 ">
      <Badge />
      <div className="inline-block max-w-sm lg:max-w-4xl text-center justify-center text-2xl">
        <h1 className={title({ size: "lg" })}>Welcome &nbsp;</h1>
        <h1 className={title({ color: "violet", size: "lg" })}>
          Portfolio website&nbsp;
        </h1>
        <br />
        <h2 className="font-normal text-gray-500 py-2">
          Modern portfolio website
        </h2>
      </div>

      <div className="flex gap-3">
        <Link
          isExternal
          className={buttonStyles({
            color: "primary",
            radius: "full",
            variant: "shadow",
          })}
          href={siteConfig.links.docs}
        >
          Resume
        </Link>
        <Link
          isExternal
          className={buttonStyles({ variant: "bordered", radius: "full" })}
          href={siteConfig.links.github}
        >
          <GithubIcon size={20} />
          GitHub
        </Link>
      </div>
      <TrustedBy />
      <PrototypeImg />
      <div className="mt-20 lg:mt-60 flex-col justify-center items-center mx-auto">
        <h1 className="text-2xl lg:text-4xl font-semibold flex- justify-center items-center mx-auto text-center">
          Features
        </h1>
        <FeaturesBento />
      </div>

      <Integrations />
      <LastButNotLeast />
    </section>
  );
}
