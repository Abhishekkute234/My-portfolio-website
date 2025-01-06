"use client";

import AnimatedGridPattern from "../ui/animated-grid-pattern";
import { FlipWords } from "../ui/flip-words";
import { WavyBackground } from "../ui/wavy-background";
import React from "react";
import IdeaForm from "../ui/idea-form";

const words = [
  "SDE intern ",
  "Freelancer ",
  "Web developer ",
  "App developer ",
  "Data analyst",
];

const Hero = () => {
  // const handleGoogleSignIn = async () => {
  //   const provider = new GoogleAuthProvider();
  //   try {
  //     const result = await signInWithPopup(auth, provider);
  //     const user = result.user;
  //     console.log("User Info:", user);
  //     alert(`Welcome ${user.displayName}`);
  //   } catch (error: any) {
  //     console.error("Error during sign-in:", error.message);
  //     alert("Google sign-in failed. Please try again.");
  //   }
  // };
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
              <IdeaForm
                buttonText="Share your thoughts"
                maxChars={500}
                placeholders={["What's on your mind?", "Any bright ideas?"]}
                backgroundColor="bg-white dark:bg-white"
                textColor="text-black dark:text-black"
                accentColor="bg-yellow-400"
                onLog={(idea) => console.log("Logged idea:", idea)}
              />
            </div>
          </div>
        </div>

        {/* Background Animation */}
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
