import Image from "next/image";
import Link from "next/link";
import mainImage from '@/public/images/homepage.png'
import { Button, buttonVariants } from "@/components/ui/button"

const projects = [
  {
    title: 'AI Investment Manager',
    description: 'A website to analyze investments added by user using Gemini API.',
    slug: 'https://github.com/NamanBhatia-NB/AI_Investment_Manager',
    date: '2025-05-02',
    author: 'Naman Bhatia',
    image: '/images/AI_Investment_Manager.jpg',
    website: 'https://ai-investment-manager.vercel.app/'
  },
  {
    title: 'Todo List Website',
    description: 'A website used to save and edit your daily tasks on a to-do-list website.',
    slug: 'https://github.com/NamanBhatia-NB/Todo_List_Website',
    date: '2024-07-11',
    author: 'Naman Bhatia',
    image: '/images/Todo_List_Website.jpg',
    website: 'https://todo-list-website-indol.vercel.app/'
  },
  {
    title: 'Get Me a Chai',
    description: 'A website made for creators to collaborate with their fans.',
    slug: 'https://github.com/NamanBhatia-NB/Get_Me_a_Chai_Website',
    date: '2024-07-31',
    author: 'Naman Bhatia ',
    image: '/images/Get_Me_a_Chai_Website.jpg',
  },
];

export default function Home() {
  return (
    <>
      <main>
        <section className="container px-4 py-10 mx-auto lg:h-128 lg:space-x-8 lg:flex lg:items-center">
          <div className="w-full text-left lg:text-left lg:w-1/2 lg:-mt-8">
            <div>
              <h1 className="text-3xl leading-snug text-gray-800 dark:text-gray-200 md:text-4xl">
                <div>
                  Hey there !
                </div>
                <div className="my-2">
                  I am <span className="font-semibold">Naman Bhatia</span>.
                </div>
                <div>
                  I am a <span className="font-semibold animate-pulse">Computer Science Student</span>.
                </div>
                <div className="my-2">
                  I am a <span className="font-semibold animate-pulse">Web Developer</span>.
                </div>
                <div>
                  I am an <span className="font-semibold animate-pulse">AI/ML Enthusiast</span>.
                </div>
              </h1>
            </div>
            <div className="grid grid-cols-2 gap-4 mt-4 py-2 md:grid-cols-[160px_160px] justify-items-center md:justify-items-start">
              <div>
                <Button className="border-accent rounded-lg bg-background hover:bg-accent flex gap-2 justify-around items-center transition duration-300 p-5 w-40" variant="outline">
                  <Link href="https://github.com/NamanBhatia-NB" target="_blank" className="flex gap-4 justify-center items-center" >
                    <Image src="/images/github.png" alt="github" className="max-w-md mx-auto rounded-full" width={30} height={30} />
                    <span className='text-lg'>
                      Github
                    </span>
                  </Link>
                </Button>
              </div>
              <div>
                <Button className="border-accent rounded-lg bg-background hover:bg-accent flex gap-2 justify-around items-center transition duration-300 p-5 w-40" variant="outline">
                  <Link href="https://www.linkedin.com/in/naman-bhatia-nb" target="_blank" className="flex gap-2 justify-center items-center" >
                    <Image src="/images/linkedin.png" alt="github" className="max-w-md mx-auto" width={25} height={25} />
                    <span className="text-lg">
                      LinkedIn
                    </span>
                  </Link>
                </Button>
              </div>
              <div>
                <Button className="border-accent rounded-lg bg-background hover:bg-accent flex gap-2 justify-around items-center transition duration-300 p-5 w-40" variant="outline">
                  <Link href="https://leetcode.com/u/NamanBhatia-NB/" target="_blank" className="flex gap-2 justify-center items-center" >
                    <Image src="/images/leetcode.png" alt="github" className="max-w-md mx-auto" width={25} height={25} />
                    <span className="text-lg">
                      Leetcode
                    </span>
                  </Link>
                </Button>
              </div>
              <div>
                <Button className="border-accent rounded-lg bg-background hover:bg-accent flex gap-2 justify-around items-center transition duration-300 p-5 w-40" variant="outline">
                  <Link href="https://codeforces.com/profile/NamanBhatia-NB" target="_blank" className="flex gap-2 justify-center items-center" >
                    <Image src="/images/codeforces.png" alt="github" className="max-w-md mx-auto" width={25} height={25} />
                    <span className="text-lg">
                      Codeforces
                    </span>
                  </Link>
                </Button>
              </div>
            </div>
          </div>
          <div className="w-full mt-4 lg:mt-0 lg:w-1/2">
            <Image src={mainImage} alt="mainImage" className="w-full h-full max-w-md mx-auto" width={500} height={500} />
          </div>
        </section>

        <section className="py-12 border-y-[3px] bg-gray-100 dark:bg-gray-900" data-theme="dark">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-4 animate-bounce dark:text-white light:text-black">
              Welcome to My Portfolio
            </h2>
            <p className="text-lg mb-8 animate-fadeIn dark:text-white light:text-black">
              Discover amazing features and projects.
            </p>
            <Link href="/projects">
              <Button className="text-xl py-5 bg-inherit hover:bg-background border-background" variant="outline">Get Started</Button>
            </Link>
          </div>
        </section>

        <section className="py-12" data-theme="dark">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-4 animate-pulse dark:text-white text-black">Top Skills</h2>
            <div className="flex flex-wrap justify-center">
              <div className="w-full md:w-1/3 p-4">
                <div className="rounded-lg shadow-lg p-6 transform hover:scale-105 transition duration-300 ease-in-out dark:bg-gray-800 light:bg-gray-200 lg:min-h-fit md:min-h-40">
                  <h3 className="text-2xl font-semibold dark:text-white light:text-black">JavaScript</h3>
                  <p className="mt-2 dark:text-gray-400 light:text-gray-600">Proficient in Node.js, React, and Next.js</p>
                </div>
              </div>
              <div className="w-full md:w-1/3 p-4">
                <div className="rounded-lg shadow-lg p-6 transform hover:scale-105 transition duration-300 ease-in-out dark:bg-gray-800 light:bg-gray-200 lg:min-h-fit md:min-h-40">
                  <h3 className="text-2xl font-semibold dark:text-white light:text-black">CSS</h3>
                  <p className="mt-2 dark:text-gray-400 light:text-gray-600">Skilled in Tailwind CSS and Responsive Design</p>
                </div>
              </div>
              <div className="w-full md:w-1/3 p-4">
                <div className="rounded-lg shadow-lg p-6 transform hover:scale-105 transition duration-300 ease-in-out dark:bg-gray-800 light:bg-gray-200 lg:min-h-fit md:min-h-40">
                  <h3 className="text-2xl font-semibold dark:text-white light:text-black">DSA</h3>
                  <p className="mt-2 dark:text-gray-400 light:text-gray-600">Learning Data Structures and Algorithms using C++</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-10 bg-gray-100 dark:bg-gray-900 border-y-[3px]">
          <div className="container mx-auto px-8">
            <h2 className="text-4xl font-bold text-center mb-8 animate-pulse dark:text-white">
              Top Projects
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-3">
              {projects.map((project) => (
                <div key={project.slug} className="bg-white dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden hover:scale-105">
                  <div className="p-4 gap-3">
                    <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100">{project.title}</h2>
                    <p className="text-gray-600 dark:text-gray-400 min-h-12 text-md flex items-start">{project.description}</p>
                    <p className="text-sm text-gray-500 dark:text-gray-300 mt-2">By {project.author} on {new Date(project.date).toLocaleDateString()}</p>
                    <div className='gap-4 flex'>
                      {project.website && <Link target="_blank" href={`${project.website}`} className={`${buttonVariants({ variant: "outline" })} mt-4 bg-inherit hover:bg-accent dark:bg-inherit dark:hover:bg-background dark:border-background rounded-md`} >Live Website</Link>}
                      <Link target="_blank" href={`${project.slug}`} className={`${buttonVariants({ variant: "outline" })} mt-4 bg-inherit hover:bg-accent dark:bg-inherit dark:hover:bg-background dark:border-background rounded-md`} >GitHub Code</Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className='mt-4 mb-20 flex justify-end'>
              <Link href="/projects">
                <Button className='text-blue-400 hover:text-blue-500 text-lg font-semibold' variant="link">See More ...</Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
