import Image from "next/image";
import mainImage from '@/public/images/homepage.png'
import github from '@/public/images/github.png'
import Link from "next/link";
import { Button } from "@/components/ui/button"
import linkedin from "@/public/images/linkedin.png";

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
            <div className="sm:flex justify-center sm:justify-start mt-4 gap-4">
              <Button className="border-accent rounded-lg bg-background hover:bg-accent flex gap-2 justify-center items-center transition duration-300 px-6 py-5 my-4 sm:my-0" variant="outline">
                <Link href="https://github.com/NamanBhatia-NB" target="_blank" className="flex gap-4 justify-center items-center" >
                  <Image src={github} alt="github" className="max-w-md mx-auto rounded-full" width={30} height={30} />
                  <span className='text-lg'>
                    Github
                  </span>
                </Link>
              </Button>
              <Button className="border-accent rounded-lg bg-background hover:bg-accent flex gap-2 justify-center items-center transition duration-300 p-5" variant="outline">
                <Link href="https://www.linkedin.com/in/naman-bhatia-nb" target="_blank" className="flex gap-2 justify-center items-center" >
                  <Image src={linkedin} alt="github" className="max-w-md mx-auto" width={25} height={25} />
                  <span className="text-lg">
                    Linked In
                  </span>
                </Link>
              </Button>
            </div>
          </div>
          <div className="w-full mt-4 lg:mt-0 lg:w-1/2">
            <Image src={mainImage} alt="mainImage" className="w-full h-full max-w-md mx-auto" width={500} height={500} />
          </div>
        </section>



        <section className="py-12 border-y-[3px]" data-theme="dark">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-4 animate-bounce dark:text-white light:text-black">
              Welcome to My Portfolio
            </h2>
            <p className="text-lg mb-8 animate-fadeIn dark:text-white light:text-black">
              Discover amazing features and projects.
            </p>
            <Link href="/projects">
              <Button className="text-xl py-5" variant="outline">Get Started</Button>
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

        <section className="py-10 bg-gray-100 dark:bg-gray-900">
          <div className="container mx-auto px-8">
            <h2 className="text-4xl font-bold text-center mb-8 animate-pulse dark:text-white">
              Top Projects
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg transform transition duration-500 hover:scale-105">
                <h3 className="text-2xl font-semibold mb-4 dark:text-white">Get Me a Chai</h3>
                {/*<p className="text-gray-700 dark:text-gray-300 mb-4">A brief description of the project goes here. Highlight key features and technologies used.</p>*/}
                <Link href='https://github.com/NamanBhatia-NB/Get_Me_a_Chai_Website' target="_blank">
                  <Button className="border-background rounded-md hover:bg-background bg-accent" variant="outline">Learn More</Button>
                </Link>
              </div>
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg transform transition duration-500 hover:scale-105">
                <h3 className="text-2xl font-semibold mb-4 dark:text-white">Password Manager</h3>
                {/*<p className="text-gray-700 dark:text-gray-300 mb-4">A brief description of the project goes here. Highlight key features and technologies used.</p>*/}
                <Link href='https://github.com/NamanBhatia-NB/Password_Manager_Website' target="_blank">
                  <Button className="border-background rounded-md hover:bg-background bg-accent" variant="outline">Learn More</Button>
                </Link>
              </div>
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg transform transition duration-500 hover:scale-105">
                <h3 className="text-2xl font-semibold mb-4 dark:text-white">To-Do List</h3>
                {/*<p className="text-gray-700 dark:text-gray-300 mb-4">A brief description of the project goes here. Highlight key features and technologies used.</p>*/}
                <Link href='https://github.com/NamanBhatia-NB/Todo_List_Website' target="_blank">
                  <Button className="border-background rounded-md hover:bg-background bg-accent" variant="outline">Learn More</Button>
                </Link>
              </div>
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
