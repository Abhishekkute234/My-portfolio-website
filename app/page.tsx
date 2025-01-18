import About from "@/components/about/About";
import Articles from "@/components/articles/Articles";
import Contact from "@/components/contact/Contact";
import Hero from "@/components/hero/Hero";
import ProjectsSection from "@/components/projects/ProjectsSection";
import Techs from "@/components/techs/Techs";
import Footer from "@/components/layout/Footer";
export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Techs />
      <ProjectsSection />
      <Articles />

      <Contact />
      <Footer />
    </>
  );
}
