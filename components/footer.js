import Link from 'next/link';
import React from 'react';

const Footer = () => {
    const currentYear = new Date().getFullYear();
    return (
        <footer className="bg-background/50 text-black dark:text-white py-3 mt-auto fixed bottom-0 w-full border-t z-10 backdrop-blur">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="mb-4 md:mb-0">
                        <h2 className="text-lg font-bold">Naman Bhatia's Portfolio</h2>
                        <p className="text-sm">&copy; {currentYear} Naman Bhatia. All rights reserved.</p>
                    </div>
                    <div className="flex gap-3">
                        <div className="flex space-x-4">
                            <Link target="_blank" href="https://github.com/NamanBhatia-NB" className="text-md hover:text-gray-600 dark:hover:text-gray-400">Github</Link>
                        </div>
                        <div className="flex space-x-4">
                            <Link target="_blank" href="https://linkedin.com/in/naman-bhatia-nb" className="text-md hover:text-gray-600 dark:hover:text-gray-400">Linked In</Link>
                        </div>
                        <div className="flex space-x-4">
                            <Link href="/contact" className="text-md hover:text-gray-600 dark:hover:text-gray-400">Contact</Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;