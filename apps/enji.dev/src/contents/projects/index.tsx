import Image from 'next/image';

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
    title: 'Imagin Gifts ',
    description:
      'A Freelance next.js  website for a client who wanted a simple website to showcase his work and services.',

    image: '/assets/images/project/imaginegifts.jpg',
    github:
      'https://github.com/Abhishekkute234/Finalecom-main-using-next.js.git',
    livelink: 'https://www.imaginggifts.com/',
  },
  {
    title: 'Standard Store',
    description:
      'A complete MERN stack application that allows users to create an account, login, and add products to their cart.',

    image: '/assets/images/project/standardstore.png',
    github:
      'https://github.com/Abhishekkute234/Restaurant-authentication-system-using-MERN-staxk.git',
    livelink: 'https://standardstore.in/',
  },
  {
    title: 'Portfolio Website',
    description:
      'The Next js website to showcase my work and services. The website is built using Next js and Tailwind CSS.',

    image: '/assets/images/project/portfolio.png',
    github: 'https://github.com/Abhishekkute234/My-portfolio-website',
    livelink: 'https://my-portfolio-website-pied-two.vercel.app/',
  },
  {
    title: 'The Digital scroll',
    description:
      'A Next js website to showcase the work of a digital artist. The website is built using Next js and Tailwind CSS.',

    image: '/assets/images/project/digitalscroll.png',
    github: 'https://github.com/Abhishekkute234/The-Digital-Scroll.git',
    livelink: 'https://the-digital-scroll.vercel.app/',
  },
  {
    title: 'Client Agency website',
    description:
      'A technology company that builds economic infrastructure for the internet.',

    image: '/assets/images/project/image.png',
    github: 'https://github.com/Abhishekkute234/',
    livelink: 'https://client-agency-webite-21qx.vercel.app/',
  },
  {
    title: 'Next js Dashboard ',
    description:
      'An UI dashboard built using Next js and Tailwind CSS. The dashboard is used to display data and statistics.',

    image: '/assets/images/project/dashboard.png',
    github: 'https://github.com/Abhishekkute234/My_Dashboard_next_js.git',
    livelink: 'https://my-dashboard-next-js.vercel.app/login',
  },
  {
    title: 'Spam detection using machine learning',
    description:
      'Hackathon 2023 project. The project is used to track the soil moisture and temperature of the crops.',

    image: '/assets/images/project/spam.png',
    github: 'https://github.com/Abhishekkute234/SpamGuard.git',
    livelink: 'https://spam-detection-tool-1.onrender.com',
  },
  {
    title: 'Agro krushi  ',
    description:
      'Smart India hackathon 2024 project data science project. The project is used to track the soil moisture and temperature of the crops.',

    image: '/assets/images/project/agro.png',
    github: 'https://github.com/Abhishekkute234/ArogyaKrishi.git',
    livelink: 'https://my-dashboard-next-js.vercel.app/login',
  },
  {
    title: 'Static client agency website',
    description:
      'A freelance project for client agency website. The website is built using HTML, CSS and JavaScript.',

    image: '/assets/images/project/AD.png',
    github: 'https://github.com/Abhishekkute234/Agency-Website.git',
    livelink: 'https://adproduction-2375.netlify.app/',
  },

  {
    title: '  Built an OpenAI-Style Web Operator from scratch',
    description:
      'A freelance project for client agency website. The website is built using HTML, CSS and JavaScript.',

    image: '/assets/images/project/bot.png',
    github: 'https://github.com/Abhishekkute234/Agency-Website.git',
    livelink:
      'https://www.linkedin.com/posts/vivek-nimkarde-9223238b_ai-techtruths-innovationorillusion-ugcPost-7290996173694210048-3PHV?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD9NxYUB_19T4Ne3V2HSnwwHHoSMftDlOzI',
  },
  {
    title: 'JourneyNest',
    description: 'A react native app to track your journey and nest',

    image: '/assets/images/project/journynest.png',
    github: 'https://github.com/Abhishekkute234/JourneyNest.git',
    livelink: 'https://github.com/Abhishekkute234/JourneyNest.git',
  },
  {
    title: 'My Tube video app React native',
    description: 'A complete my tube app using react native',

    image: '/assets/images/project/mytube.png',
    github:
      'https://github.com/Abhishekkute234/My-Tube-video-app-using-react-native.git',
    livelink:
      'https://github.com/Abhishekkute234/My-Tube-video-app-using-react-native.git',
  },
  {
    title: 'Distribution-of-ages-or-genders-in-a-population-using-python',
    description:
      'A data science project Distribution-of-ages-or-genders-in-a-population-using-python',

    image: '/assets/images/project/analysis.png',
    github:
      'https://github.com/Abhishekkute234/Distribution-of-ages-or-genders-in-a-population-using-python.git',
    livelink:
      'https://github.com/Abhishekkute234/Distribution-of-ages-or-genders-in-a-population-using-python.git',
  },
  {
    title:
      'Data-cleaning-on-Titanic-dataset-relationships-between-variables-and-identify-patterns-and-trends',
    description:
      'A data science project Data-cleaning-on-Titanic-dataset-relationships-between-variables-and-identify-patterns-and-trends',

    image: '/assets/images/project/analysis.png',
    github:
      'https://github.com/Abhishekkute234/Data-cleaning-on-Titanic-dataset-relationships-between-variables-and-identify-patterns-and-trends-.git',
    livelink:
      'https://github.com/Abhishekkute234/Data-cleaning-on-Titanic-dataset-relationships-between-variables-and-identify-patterns-and-trends-.git',
  },
  {
    title: 'Diwali_Sales_Analysis_using_python',
    description: 'A data science project Diwali_Sales_Analysis_using_python',

    image: '/assets/images/project/analysis.png',
    github:
      'https://github.com/Abhishekkute234/Diwali_Sales_Analysis_using_python.git',
    livelink:
      'https://github.com/Abhishekkute234/Diwali_Sales_Analysis_using_python.git',
  },
  {
    title: 'Visualize-accident-hotspots-and-contributing-factor',
    description:
      'A data science project Visualize-accident-hotspots-and-contributing-factor',

    image: '/assets/images/project/analysis.png',
    github:
      'https://github.com/Abhishekkute234/-Visualize-accident-hotspots-and-contributing-factor.git',
    livelink:
      'https://github.com/Abhishekkute234/-Visualize-accident-hotspots-and-contributing-factor.git',
  },

  {
    title: 'Customer-Churn-Records_analysis',
    description: 'A data science project Customer-Churn-Records_analysis',

    image: '/assets/images/project/analysis.png',
    github:
      'https://github.com/Abhishekkute234/Customer-Churn-Records_analysis.git',
    livelink:
      'https://github.com/Abhishekkute234/Customer-Churn-Records_analysis.git',
  },

  {
    title: 'Twitter_training',
    description: 'A data science project Twitter_training',

    image: '/assets/images/project/analysis.png',
    github: 'https://github.com/Abhishekkute234/twitter_training.git',
    livelink: 'https://github.com/Abhishekkute234/twitter_training.git',
  },
  {
    title: 'Data science ',
    description: 'A data science project Twitter_training',

    image: '/assets/images/project/ds.png',
    github: 'https://github.com/Abhishekkute234/Data-Science-.git',
    livelink: 'https://github.com/Abhishekkute234/Data-Science-.git',
  },
  {
    title: 'Rust for developers ',
    description: 'A data science project Twitter_training',

    image: '/assets/images/project/rust.png',
    github: 'https://github.com/Abhishekkute234/Rust-for-Developers.git',
    livelink:
      'https://www.linkedin.com/posts/abhishek-kute-a85822257_rust-systemsprogramming-concurrency-activity-7264258558488150016-QqOk?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD9NxYUB_19T4Ne3V2HSnwwHHoSMftDlOzI',
  },

  {
    title: 'Data structure and algorithm ',
    description: 'A data science project Twitter_training',

    image: '/assets/images/project/dsa.png',
    github:
      'https://github.com/Abhishekkute234/Data-Structure-and-Algorithm-in-CPP.git',
    livelink:
      'https://github.com/Abhishekkute234/Data-Structure-and-Algorithm-in-CPP.git',
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
