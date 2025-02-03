import Image from 'next/image';
import React from 'react';

// Remove unused imports if not needed
// import { HoverEffect } from '@/components/ui/card-hover-effect';
// import {
//   HoverCard,
//   HoverCardContent,
//   HoverCardTrigger,
// } from '@/components/ui/hover-card';

interface Project {
  title: string;
  description: string;

  image: string;
  github: string;
  livelink: string;
}

const projects: Project[] = [
  {
    title: 'Stripe',
    description:
      'A technology company that builds economic infrastructure for the internet.',

    image: '/assets/images/current-workspace.jpg',
    github: 'https://github.com/Abhishekkute234',
    livelink: 'https://www.linkedin.com/in/abhishek-kute-a85822257/',
  },
  {
    title: 'Stripe',
    description:
      'A technology company that builds economic infrastructure for the internet.',

    image: '/assets/images/current-workspace.jpg',
    github: 'https://github.com/Abhishekkute234',
    livelink: 'https://www.linkedin.com/in/abhishek-kute-a85822257/',
  },
  {
    title: 'Stripe',
    description:
      'A technology company that builds economic infrastructure for the internet.',

    image: '/assets/images/current-workspace.jpg',
    github: 'https://github.com/Abhishekkute234',
    livelink: 'https://www.linkedin.com/in/abhishek-kute-a85822257/',
  },
  {
    title: 'Stripe',
    description:
      'A technology company that builds economic infrastructure for the internet.',

    image: '/assets/images/current-workspace.jpg',
    github: 'https://github.com/Abhishekkute234',
    livelink: 'https://www.linkedin.com/in/abhishek-kute-a85822257/',
  },
  {
    title: 'Stripe',
    description:
      'A technology company that builds economic infrastructure for the internet.',

    image: '/assets/images/current-workspace.jpg',
    github: 'https://github.com/Abhishekkute234',
    livelink: 'https://www.linkedin.com/in/abhishek-kute-a85822257/',
  },
  {
    title: 'Stripe',
    description:
      'A technology company that builds economic infrastructure for the internet.',

    image: '/assets/images/current-workspace.jpg',
    github: 'https://github.com/Abhishekkute234',
    livelink: 'https://www.linkedin.com/in/abhishek-kute-a85822257/',
  },
  {
    title: 'Stripe',
    description:
      'A technology company that builds economic infrastructure for the internet.',

    image: '/assets/images/current-workspace.jpg',
    github: 'https://github.com/Abhishekkute234',
    livelink: 'https://www.linkedin.com/in/abhishek-kute-a85822257/',
  },
  {
    title: 'Stripe',
    description:
      'A technology company that builds economic infrastructure for the internet.',

    image: '/assets/images/current-workspace.jpg',
    github: 'https://github.com/Abhishekkute234',
    livelink: 'https://www.linkedin.com/in/abhishek-kute-a85822257/',
  },
  {
    title: 'Stripe',
    description:
      'A technology company that builds economic infrastructure for the internet.',

    image: '/assets/images/current-workspace.jpg',
    github: 'https://github.com/Abhishekkute234',
    livelink: 'https://www.linkedin.com/in/abhishek-kute-a85822257/',
  },
];

interface CardProps {
  item: Project;
}

function Card({ item }: CardProps) {
  return (
    <div className="relative flex h-full w-full flex-col justify-between overflow-hidden rounded-xl border border-gray-200 bg-black p-4 transition-all duration-200 hover:shadow-xl">
      <div className="relative mb-4 h-48 w-full">
        <Image
          src={item.image}
          alt={item.title}
          fill
          className="rounded-lg object-cover"
        />
      </div>
      <div>
        <h3 className="text-xl font-bold text-gray-100 group-hover:text-blue-600">
          {item.title}
        </h3>
        <p className="mt-2 line-clamp-3 text-sm text-gray-400">
          {item.description}
        </p>

        <button
          type="button"
          className="my-2 mr-7 rounded-lg border border-gray-100 px-4 py-2 text-gray-300"
          onClick={() => window.open(item.github, '_blank')}
        >
          GitHub
        </button>
        <button
          type="button"
          className="mr-7 rounded-lg border border-gray-100 px-4 py-2 text-gray-300"
          onClick={() => window.open(item.livelink, '_blank')}
        >
          Live Preview
        </button>
      </div>
    </div>
  );
}

function ProjectsContents() {
  return (
    <div className="mx-auto max-w-6xl px-8 py-12">
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <Card key={project.title} item={project} />
        ))}
      </div>
    </div>
  );
}

export default ProjectsContents;
