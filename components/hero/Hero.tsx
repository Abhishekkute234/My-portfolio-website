import { cn } from "@/lib/utils";
import AnimatedGradientText from "../ui/animated-gradient-text";
import AnimatedGridPattern from "../ui/animated-grid-pattern";
import Link from "next/link";
import { FlipWords } from "../ui/flip-words";
import { WavyBackground } from "../ui/wavy-background";
import React from "react";

const words = [
  "SDE intern ",
  "Freelancer ",
  "Web developer ",
  "App developer ",
  "Data analyst",
];

const Hero = () => {
  return (
    <WavyBackground className="mx-auto max-w-4xl pb-40">
      <section className="relative px-6" style={{ contain: "layout" }}>
        <div className="pt-48">
          <h1 className="h1-bold flex flex-col items-start md:items-center">
            <span>Welcome</span>
            <span>to my </span>

            <span>Portfolio website </span>
            <div className="mx-auto text-4xl font-normal text-neutral-100 dark:text-neutral-100">
              <FlipWords words={words} /> <br />
            </div>
          </h1>
        </div>

        <div className="mt-12 flex flex-col-reverse gap-8 md:flex-row md:justify-center md:gap-20 lg:gap-32">
          <div className="flex w-fit flex-col items-start gap-4">
            <div>
              <Link
                href="https://www.linkedin.com/in/abhishek-kute-a85822257/"
                target="_blank"
              >
                <AnimatedGradientText className="rounded-full px-5 py-2 text-lg hover:cursor-pointer">
                  📃 <hr className="mx-2 h-4 w-px shrink-0 bg-gray-400" />{" "}
                  <span
                    className={cn(
                      `inline animate-gradient bg-gradient-to-r from-[#ffaa40] via-[#9c40ff] to-[#ffaa40] bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent`
                    )}
                  >
                    My Resume
                  </span>
                </AnimatedGradientText>
              </Link>
            </div>
          </div>
        </div>

        <div className="pointer-events-none absolute top-0 -z-20 size-full overflow-hidden opacity-50 [mask-image:radial-gradient(900px_circle_at_top,#000,transparent)]">
          <AnimatedGridPattern
            numSquares={120}
            maxOpacity={0.2}
            duration={5}
            repeatDelay={1}
            colors={[
              "rgba(60, 177, 121, 1)",
              "rgba(157, 91, 210, 1)",
              "rgba(205, 43, 49, 1)",
              "rgba(189, 75, 0, 1)",
              "rgba(247, 206, 0, 1)",
              "rgba(250, 147, 78, 1)",
              "rgba(54, 158, 255, 1)",
            ]}
            className="inset-x-[4.5px] inset-y-[-30%] h-[150%]"
          />
        </div>
      </section>
    </WavyBackground>
  );
};
export default Hero;
