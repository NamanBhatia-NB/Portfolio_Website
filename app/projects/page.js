import React from 'react';
import Link from 'next/link';
import { buttonVariants } from "@/components/ui/button"
import Image from 'next/image';

const projects = [
  {
    title: 'AI Podcast Clipper SaaS',
    description: 'A SaaS application that converts full podcasts into viral short-form clips ready for social media use.',
    // slug: 'https://github.com/NamanBhatia-NB/AI_Podcast_Clipper_SAAS',
    date: '2026-02-01',
    author: 'Naman Bhatia',
    image: '/images/AI_Podcast_Clipper.jpg',
    website: 'https://podclipper.namanbhatia.live/',
  },
  {
    title: 'AI Music Generator SaaS',
    description: 'An AI music generation SaaS to create music from scratch with prompts using an open source AI model.',
    // slug: 'https://github.com/NamanBhatia-NB/AI_Music_Generator_SAAS',
    date: '2025-12-01',
    author: 'Naman Bhatia',
    image: '/images/AI_Music_Generator.jpg',
    website: 'https://aimusicgen.namanbhatia.live/',
  },
  {
    title: 'AI Investment Manager',
    description: 'A Website to analyze investments by using Gemini API.',
    slug: 'https://github.com/NamanBhatia-NB/AI_Investment_Manager',
    date: '2025-05-02',
    author: 'Naman Bhatia',
    image: '/images/AI_Investment_Manager.jpg',
    website: 'https://aiinvestor.namanbhatia.live/',
  },
  {
    title: 'Get Me a Chai',
    description: 'A website made for creators to collaborate with their fans.',
    slug: 'https://github.com/NamanBhatia-NB/Get_Me_a_Chai_Website',
    date: '2024-07-31',
    author: 'Naman Bhatia',
    image: '/images/Get_Me_a_Chai_Website.jpg',
    website: '',
  },
  {
    title: 'E-Cell MSIT Website Home Page',
    description: 'Developed the homepage of the E-Cell website of the institute.',
    slug: 'https://github.com/NamanBhatia-NB/eCell-Final',
    date: '2025-01-31',
    author: 'Naman Bhatia & Shivam Mishra',
    image: '/images/E_Cell_Website_Homepage.jpg',
    website: 'https://e-cell-final.vercel.app/',
  },
  {
    title: 'Password Manager Website',
    description: 'A website used to save passwords on the local storage of your web browser.',
    slug: 'https://github.com/NamanBhatia-NB/Password_Manager_Website',
    date: '2024-07-20',
    author: 'Naman Bhatia',
    image: '/images/Password_Manager_Website.jpg',
    website: '',
  },
  {
    title: 'Todo List Website',
    description: 'A website used to save your daily tasks on a to-do list.',
    slug: 'https://github.com/NamanBhatia-NB/Todo_List_Website',
    date: '2024-07-11',
    author: 'Naman Bhatia',
    image: '/images/Todo_List_Website.jpg',
    website: 'https://todo-list-website-indol.vercel.app/',
  },
  {
    title: 'Simple Car Driving Game',
    description: 'A simple car driving game with basic controls.',
    slug: 'https://github.com/NamanBhatia-NB/Simple_Car_Driving_Game',
    date: '2024-06-29',
    author: 'Naman Bhatia',
    image: '/images/Simple_Car_Driving_Game.jpg',
    website: 'https://namanbhatia-nb.github.io/Car_Driving_Game_2.0/',
  },
  {
    title: 'Spotify Clone',
    description: 'Clone of the Spotify website homepage with song playbar functionality.',
    slug: 'https://github.com/NamanBhatia-NB/Spotify_Clone',
    date: '2024-05-19',
    author: 'Naman Bhatia',
    image: '/images/Spotify_Clone.jpg',
    website: '',
  },
  {
    title: 'X Clone',
    description: 'Clone of the X website homepage.',
    slug: 'https://github.com/NamanBhatia-NB/X_Clone',
    date: '2024-07-03',
    author: 'Naman Bhatia',
    image: '/images/X_Clone.jpg',
    website: '',
  },
  {
    title: 'Netflix Clone',
    description: 'Clone of the Netflix website homepage.',
    slug: 'https://github.com/NamanBhatia-NB/Netflix_Clone',
    date: '2024-02-28',
    author: 'Naman Bhatia',
    image: '/images/Netflix_Clone.jpg',
    website: '',
  },
];

const Projects = () => {
  return (
    <div className="container mx-auto px-4 pt-8 pb-32 ">
      <h1 className="text-3xl font-bold mb-8 text-center">My Projects</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-3">
        {projects.map((project) => (
          <div key={project.slug} className="bg-white dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden hover:scale-105">
            <Image src={project.image} alt={project.title} className="w-full h-40 sm:h-48 md:h-60 object-fit" height={500} width={500} />
            <div className="p-4 gap-3">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100">{project.title}</h2>
              <p className="text-gray-600 dark:text-gray-400 min-h-12 text-md flex items-center">{project.description}</p>
              <p className="text-sm text-gray-500 dark:text-gray-300 mt-2">By {project.author} on {new Date(project.date).toLocaleDateString()}</p>
              <div className='gap-4 flex'>
                {project.website && <Link target="_blank" href={`${project.website}`} className={`${buttonVariants({ variant: "outline" })} mt-4 bg-inherit hover:bg-accent dark:bg-inherit dark:hover:bg-background dark:border-background rounded-md`} >Live Website</Link>}
                {project.title && <Link target="_blank" href={`${project.slug}`} className={`${buttonVariants({ variant: "outline" })} mt-4 bg-inherit hover:bg-accent dark:bg-inherit dark:hover:bg-background dark:border-background rounded-md`} >GitHub Code</Link>}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
