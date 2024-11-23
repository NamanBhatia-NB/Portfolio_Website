import React from 'react';
import github from '@/public/images/github.png'
import Link from "next/link";
import { Button } from "@/components/ui/button"
import linkedin from "@/public/images/linkedin.png";
import Image from 'next/image';

const About = () => {
  return (
    <div className="p-5 max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">About</h1>
      <p className="mb-4">
        Welcome to the about page of my portfolio !
        <br />
        I am Naman Bhatia . I am a second-year student at Guru Gobind Singh Indraprastha University pursuing B.Tech in Computer Science Engineering . I have learnt Web Development and am currently learning Data Structures and Algorithms using C++ . <br /> I also have interests in fields like Artificial Intelligence and Machine Learning .
      </p>
      <div>
        <h1 className="text-2xl font-semibold mb-2">Socials</h1>
        <div className="grid gap-4 justify-center lg:justify-start my-4">
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
      <h2 className="text-2xl font-semibold mt-8 mb-28">Thankyou !</h2>
    </div>
  );
};

export default About;
