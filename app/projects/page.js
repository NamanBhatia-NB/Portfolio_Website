import React from 'react';
import Link from 'next/link';
import { buttonVariants } from "@/components/ui/button"
import Image from 'next/image';
import Get_Me_a_Chai_Website from "@/public/images/Get_Me_a_Chai_Website.jpg"


const projects = [
  {
    title: 'Portfolio Website',
    description: '',
    slug: 'https://github.com/NamanBhatia-NB/Portfolio_Website',
    date: '2024-10-10',
    author: 'Naman Bhatia',
    image: '/images/Portfolio_Website.jpg',
  },
  {
    title: 'Get Me a Chai',
    description: '',
    slug: 'https://github.com/NamanBhatia-NB/Get_Me_a_Chai_Website',
    date: '2024-07-31',
    author: 'Naman Bhatia',
    image: {Get_Me_a_Chai_Website},
  },
  {
    title: 'Password Manager',
    description: 'A website used to save passwords on the local storage of your web browser.',
    slug: 'https://github.com/NamanBhatia-NB/Password_Manager_Website',
    date: '2024-07-20',
    author: 'Naman Bhatia',
    image: '/images/Password_Manager_Website.jpg',
  },
  {
    title: 'Todo List Website',
    description: 'A website used to save your daily tasks on a to-do list.',
    slug: 'https://github.com/NamanBhatia-NB/Todo_List_Website',
    date: '2024-07-11',
    author: 'Naman Bhatia',
    image: '/images/Todo_List_Website.jpg',
  },
  // {
  //   title: 'Spotify Clone',
  //   description: '',
  //   slug: 'https://github.com/NamanBhatia-NB/Spotify_Clone',
  //   date: '2024-05-19',
  //   author: 'Naman Bhatia',
  //   image: '/images/Spotify_Clone.jpg',
  // },
  // {
  //   title: 'X Clone',
  //   description: '',
  //   slug: 'https://github.com/NamanBhatia-NB/X_Clone',
  //   date: '2024-07-03',
  //   author: 'Naman Bhatia',
  //   image: '/images/X_Clone.jpg',
  // },
  // {
  //   title: 'Netflix Clone',
  //   description: '',
  //   slug: 'https://github.com/NamanBhatia-NB/Netflix_Clone',
  //   date: '2024-02-28',
  //   author: 'Naman Bhatia',
  //   image: '/images/Netflix_Clone.jpg',
  // },
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
            <Image src={project.image} alt={project.title} className="w-full h-40 sm:h-48 md:h-60 object-fit" height={500} width={500} />
            <div className="p-4">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100">{project.title}</h2>
              <p className="text-gray-600 dark:text-gray-400">{project.description}</p>
              <p className="text-sm text-gray-500 dark:text-gray-300 mt-2">By {project.author} on {new Date(project.date).toLocaleDateString()}</p>
              <Link target="_blank" href={`${project.slug}`} className={`${buttonVariants({ variant: "outline" })} mt-4 bg-inherit hover:bg-accent dark:bg-inherit dark:hover:bg-background dark:border-background rounded-md`} >Learn More</Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
