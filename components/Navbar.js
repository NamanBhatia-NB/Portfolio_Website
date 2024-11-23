import React from 'react';
import Link from 'next/link';
import { Button } from "@/components/ui/button"
import { MenuIcon } from 'lucide-react';
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { ModeToggle } from './theme-btn';

const Navbar = () => {
  return (
    <nav className="bg-background/50 sticky top-0 backdrop-blur p-4 border-b z-10">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-lg font-bold">
          <Link href="/" className="italic">Naman Bhatia</Link>
        </div>
        <div className="items-center gap-5 hidden sm:flex space-x-2">
          <Link href="/" className="hover:scale-105 hover:font-semibold transition-transform duration-300">Home</Link>
          <Link href="/about" className="hover:scale-105 hover:font-semibold transition-transform duration-300">About</Link>
          <Link href="/projects" className="hover:scale-105 hover:font-semibold transition-transform duration-300">Projects</Link>
          <Link href="/contact" className="hover:scale-105 hover:font-semibold transition-transform duration-300">Contact</Link>
          {/* <div>
            <Button className="mx-1" variant="outline">Sign up</Button>
            <Button className="mx-1" variant="outline">Login</Button>
          </div> */}

          <ModeToggle />
        </div>

        <div className="sm:hidden">
          <Sheet>
            <span className="mx-2">
              <ModeToggle />
            </span>
            <SheetTrigger>
              <MenuIcon />
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle className="my-5">Naman Bhatia's Portfolio</SheetTitle>
                <SheetDescription>
                  <div className="gap-5 flex flex-col items-center">
                    <div className="flex flex-col gap-5 items-center">
                      <SheetClose asChild>

                        <Link href="/" className="hover:text-gray-400 text-lg">Home</Link>
                      </SheetClose>
                      <SheetClose asChild>
                        <Link href="/about" className="hover:text-gray-400 text-lg">About</Link>
                      </SheetClose>
                      <SheetClose asChild>
                        <Link href="/projects" className="hover:text-gray-400 text-lg">Projects</Link>
                      </SheetClose>
                      <SheetClose asChild>
                        <Link href="/contact" className="hover:text-gray-400 text-lg">Contact</Link>
                      </SheetClose>

                    </div>
                    {/* <div className="flex items-center">
                      <Button className="mx-1" variant="outline">Sign up</Button>
                      <Button className="mx-1" variant="outline">Login</Button>
                    </div> */}
                  </div>
                </SheetDescription>
              </SheetHeader>
            </SheetContent>
          </Sheet>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;
