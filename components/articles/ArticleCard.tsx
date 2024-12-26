import { HoverEffect } from "../ui/card-hover-effect";
export const projects = [
  {
    title: "Rust for developer",
    description:
      "A technology company that builds economic infrastructure for the internet.",
    link: "https://github.com/Abhishekkute234/Rust-for-Developers.git",
    image: "rust.svg", // Add the image URL
  },
  {
    title: "Data structure and algorithm in C++ ",
    description:
      "A streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.",
    link: "https://github.com/Abhishekkute234/Data-Structure-and-Algorithm-in-CPP.git",
    image: "data_structure.png", // Add the image URL
  },
  {
    title: "Data science ",
    description:
      "A multinational technology company that develops, manufactures, licenses, supports, and sells computer software, consumer electronics, personal computers, and related services.",
    link: "https://github.com/Abhishekkute234/Data-science-notes.git",
    image: "data_science.png", // Add the image URL
  },

  {
    title: "System design ",
    description:
      "A technology company that focuses on building products that advance Facebook's mission of bringing the world closer together.",
    link: "https://github.com/Abhishekkute234/System-Design.git",
    image: "system_design.png", // Add the image URL
  },
  {
    title: "REST API in Next.js",
    description:
      "A multinational technology company focusing on e-commerce, cloud computing, digital streaming, and artificial intelligence.",
    link: "https://github.com/Abhishekkute234/REST-API-in-NEXT.js.git",
    image: "rest_api.svg", // Add the image URL
  },
  {
    title: "Data pre processing and cleaning in Python",
    description:
      "A multinational technology company that specializes in Internet-related services and products.",
    link: "https://github.com/Abhishekkute234/Data_Pre_Processsing.git",
    image: "data-processing.png", // Add the image URL
  },
];

const ArticleCard = () => {
  return (
    <div className="mx-auto max-w-5xl px-8">
      <HoverEffect items={projects} />
    </div>
  );
};
export default ArticleCard;
