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
      <h2 className="text-2xl font-semibold mt-8 mb-28">Thankyou !</h2>
    </div>
  );
};

export default About;
