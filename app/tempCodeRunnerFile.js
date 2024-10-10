import Image from "next/image";

export default function Home() {
  return (
    <>
      <main>
        <section class="container px-4 py-10 mx-auto lg:h-128 lg:space-x-8 lg:flex lg:items-center"><div class="w-full text-center lg:text-left lg:w-1/2 lg:-mt-8"><h1 class="text-3xl leading-snug text-gray-800 dark:text-gray-200 md:text-4xl">
          A <span class="font-semibold">free repository</span> for community <br class="hidden lg:block"> components using <span class="font-semibold underline decoration-primary">Tailwind CSS</span></h1> <p class="mt-4 text-lg text-gray-500 dark:text-gray-300">Open source Tailwind UI components and templates to <br class="hidden lg:block"> bootstrap your new apps, projects or landing sites!</p> <div class="mt-6 bg-transparent border rounded-lg dark:border-gray-700 lg:w-2/3 focus-within:border-primary focus-within:ring focus-within:ring-primary dark:focus-within:border-primary focus-within:ring-opacity-20"><form action="https://www.creative-tim.com/twcomponents/search" class="flex flex-wrap justify-between md:flex-row" data-gtm-form-interact-id="0"><input type="search" name="query" placeholder="Search Components" required="required" class="flex-1 h-10 px-4 m-1 text-gray-700 placeholder-gray-400 bg-transparent border-none appearance-none lg:h-12 dark:text-gray-200 focus:outline-none focus:placeholder-transparent focus:ring-0" data-gtm-form-interact-field-id="0"> <button type="submit" class="flex items-center justify-center w-full p-2 m-1 text-white transition-colors duration-300 transform rounded-lg lg:w-12 lg:h-12 lg:p-0 bg-primary hover:bg-primary/70 focus:outline-none focus:bg-primary/70"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg></button></form></div></div> <div class="w-full mt-4 lg:mt-0 lg:w-1/2"><img src="https://www.creative-tim.com/twcomponents/svg/website-designer-bro-purple.svg" alt="tailwind css components" class="w-full h-full max-w-md mx-auto"></div></section>
      </main>

    </>
  );
}
