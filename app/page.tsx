import About from "@/components/about/About";
import Articles from "@/components/articles/Articles";
import Contact from "@/components/contact/Contact";
import Hero from "@/components/hero/Hero";
import ProjectsSection from "@/components/projects/ProjectsSection";
import Techs from "@/components/techs/Techs";
import { FeaturesSectionDemo } from "@/components/softskills/SoftSkills";
import Reviews from "@/components/review/Reviews";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Techs />
      <FeaturesSectionDemo />
      <ProjectsSection />
      <Articles />
      <Reviews />
      <Contact />
    </>
  );
}
