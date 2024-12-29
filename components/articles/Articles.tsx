import ArticleCard from "./ArticleCard";

const Articles = () => {
  return (
    <section
      id="notes"
      className="relative flex flex-col items-center justify-center  overflow-hidden  bg-black px-6 py-24"
    >
      <div>
        <h2 className="h2-bold">My Notes </h2>
        <p className="regular-paragraph mt-8 max-w-[835px]">
          I share insights and knowledge through articles focused on modern
          technologies, with a special emphasis on front-end development. From
          best practices to deep dives into frameworks and tools, these writings
          aim to educate and inspire developers at all levels.
        </p>
      </div>

      <div className="mt-16">
        <ArticleCard />
      </div>

      <div className="projects-grid-pattern absolute inset-0 -z-10 opacity-50" />
    </section>
  );
};
export default Articles;
