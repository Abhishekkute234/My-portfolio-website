import React from "react";
import { BentoGrid, BentoGridItem } from "../ui/bento-grid";
import {
  IconArrowWaveRightUp,
  IconBoxAlignRightFilled,
  IconBoxAlignTopLeft,
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
} from "@tabler/icons-react";
const Skeleton = () => (
  <div className="flex size-full min-h-24 flex-1 rounded-xl bg-gradient-to-br from-neutral-200 to-neutral-100 dark:from-neutral-900 dark:to-neutral-800"></div>
);
const items = [
  {
    title: "Rust for Developers",
    description: "Explore the birth of groundbreaking ideas and inventions.",
    header: <Skeleton />,
    icon: <IconClipboardCopy className="size-4 text-neutral-500" />,
    image: "path/to/rust-image.jpg",
    color: "#dea584",
    link: "https://github.com/Abhishekkute234/Rust-for-Developers.git",
  },
  {
    title: "Data Structure and Algorithm in C++",
    description: "Dive into the transformative power of technology.",
    header: <Skeleton />,
    icon: <IconFileBroken className="size-4 text-neutral-500" />,
    image: "path/to/dsa-image.jpg",
    color: "#fca103",
    link: "https://example.com/dsa-course",
  },
  {
    title: "System Design",
    description: "Discover the beauty of thoughtful and functional design.",
    header: <Skeleton />,
    icon: <IconSignature className="size-4 text-neutral-500" />,
    image: "path/to/system-design-image.jpg",
    color: "#6495ed",
    link: "https://example.com/system-design",
  },
  {
    title: "Backend and REST API",
    description:
      "Understand the impact of effective communication in our lives.",
    header: <Skeleton />,
    icon: <IconTableColumn className="size-4 text-neutral-500" />,
    image: "path/to/backend-api-image.jpg",
    color: "#00c49a",
    link: "https://example.com/backend-rest-api",
  },
  {
    title: "Data Science",
    description: "Join the quest for understanding and enlightenment.",
    header: <Skeleton />,
    icon: <IconArrowWaveRightUp className="size-4 text-neutral-500" />,
    image: "path/to/data-science-image.jpg",
    color: "#ff7f50",
    link: "https://example.com/data-science",
  },
  {
    title: "The Joy of Creation",
    description: "Experience the thrill of bringing ideas to life.",
    header: <Skeleton />,
    icon: <IconBoxAlignTopLeft className="size-4 text-neutral-500" />,
    image: "path/to/creation-image.jpg",
    color: "#8a2be2",
    link: "https://example.com/joy-of-creation",
  },
  {
    title: "Data Preprocessing and Cleaning",
    description: "Embark on exciting journeys and thrilling discoveries.",
    header: <Skeleton />,
    icon: <IconBoxAlignRightFilled className="size-4 text-neutral-500" />,
    image: "path/to/data-cleaning-image.jpg",
    color: "#20b2aa",
    link: "https://example.com/data-cleaning",
  },
];

const ArticleCard = () => {
  return (
    <BentoGrid className="max-w-8xl mx-auto">
      {items.map((item, i) => (
        <BentoGridItem
          key={i}
          title={item.title}
          description={item.description}
          header={item.header}
          icon={item.icon}
          className={i === 3 || i === 6 ? "md:col-span-2" : ""}
        />
      ))}
    </BentoGrid>
  );
};
export default ArticleCard;
