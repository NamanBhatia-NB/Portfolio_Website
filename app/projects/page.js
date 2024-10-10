import React from 'react';
import Link from 'next/link';
import { buttonVariants } from "@/components/ui/button"
import Get_Me_a_Chai_Website from '@/public/images/Get_Me_a_Chai_Website.jpg'
import Portfolio_Website from '@/public/images/Portfolio_Website.jpg'
import Todo_List_Website from '@/public/images/Todo_List_Website.jpg'
import Password_Manager_Website from '@/public/images/Password_Manager_Website.jpg'
import Spotify_Clone from '@/public/images/Spotify_Clone.jpg'
import X_Clone from '@/public/images/X_Clone.jpg'
import Netflix_Clone from '@/public/images/Netflix_Clone.jpg'

const projects = [
  {
    title: 'Portfolio Website',
    description: '',
    slug: 'https://github.com/NamanBhatia-NB/Portfolio_Website',
    date: '2024-10-10',
    author: 'Naman Bhatia',
    image: { Portfolio_Website },
  },
  {
    title: 'Get Me a Chai',
    description: '',
    slug: 'https://github.com/NamanBhatia-NB/Get_Me_a_Chai_Website',
    date: '2024-07-31',
    author: 'Naman Bhatia',
    image: { Get_Me_a_Chai_Website },
  },
  {
    title: 'Password Manager',
    description: '',
    slug: 'https://github.com/NamanBhatia-NB/Password_Manager_Website',
    date: '2024-07-20',
    author: 'Naman Bhatia',
    image: { Password_Manager_Website },
  },
  {
    title: 'Todo List Website',
    description: '',
    slug: 'https://github.com/NamanBhatia-NB/Todo_List_Website',
    date: '2024-07-11',
    author: 'Naman Bhatia',
    image: { Todo_List_Website },
  },
  {
    title: 'Spotify Clone',
    description: '',
    slug: 'https://github.com/NamanBhatia-NB/Spotify_Clone',
    date: '2024-05-19',
    author: 'Naman Bhatia',
    image: { Spotify_Clone },
  },
  {
    title: 'X Clone',
    description: '',
    slug: 'https://github.com/NamanBhatia-NB/X_Clone',
    date: '2024-07-03',
    author: 'Naman Bhatia',
    image: { X_Clone },
  },
  {
    title: 'Netflix Clone',
    description: '',
    slug: 'https://github.com/NamanBhatia-NB/Netflix_Clone',
    date: '2024-02-28',
    author: 'Naman Bhatia',
    image: { Netflix_Clone },
  },
  // {
  //   title: 'Simple Car Driving Game',
  //   description: '',
  //   slug: 'https://github.com/NamanBhatia-NB/Simple_Car_Driving_Game',
  //   date: '2024-06-29',
  //   author: 'Naman Bhatia',
  //   image: '/images/project-two.jpg',
  // },
  // Add more projects as needed
];

const Projects = () => {
  return (
    <div className="container mx-auto px-4 pt-8 pb-24 ">
      <h1 className="text-3xl font-bold mb-8 text-center">My Projects</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-3">
        {projects.map((project) => (
          <div key={project.slug} className="bg-white dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden hover:scale-105">
            <img src={project.image} alt={project.title} className="w-full h-40 sm:h-48 md:h-60 object-fit" />
            <div className="p-4">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100">{project.title}</h2>
              <p className="text-gray-600 dark:text-gray-400">{project.description}</p>
              <p className="text-sm text-gray-500 dark:text-gray-300 mt-2">By {project.author} on {new Date(project.date).toLocaleDateString()}</p>
              <Link target="_blank" href={`${project.slug}`} className={`${buttonVariants({ variant: "outline" })} mt-4 bg-inherit hover:bg-accent dark:bg-inherit dark:hover:bg-background dark:border-background rounded-md`} >Click here</Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
