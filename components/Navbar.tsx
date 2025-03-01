"use client";

import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import { Button } from './ui/button';
import tu from '@/public/assets/Images/tu-red.png';

const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState<{ width: number; height: number }>({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const handleResize = () => {
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      };

      window.addEventListener('resize', handleResize);
      handleResize();

      return () => window.removeEventListener('resize', handleResize);
    }
  }, []);

  return windowSize;
};

const HamburgerMenu = ({ navItems }: { navItems: string[] }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      <button onClick={toggleMenu} className="p-2 focus:outline-none">
        <svg
          className="w-6 h-6 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16m-7 6h7"
          ></path>
        </svg>
      </button>
      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-50">
          {navItems.map((item, index) => (
            <div
              key={index}
              className="block px-4 py-2 text-gray-800 hover:bg-gray-200 cursor-pointer"
            >
              {item}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

const scrollToSection = (sectionId: string) => {
  const element = document.getElementById(sectionId);
  if (element) {
    window.scrollTo({
      top: element.offsetTop,
      behavior: 'smooth',
    });
  }
};

export default function ResponsiveNavbar() {
  const navItems = ['About', 'Ideathon', 'Benefits', 'Sessions', 'Contact'];
  const sectionIds = ['About', 'Ideathon', 'Benefits', 'Sessions', 'Contact']; // add corresponding section IDs here
  const size = useWindowSize();
  const isMobile = size.width < 768;

  return (
    <div className={`flex items-center justify-between p-4 ${isMobile ? 'flex-col' : 'flex-row'}`}>
      <div className='flex justify-center items-center p-2'>
        <div className='bg-purple-800 h-[45px] w-[45px] relative blur-lg'></div>
        <Image src={tu.src} alt='logo' width={30} height={30} className='absolute' unoptimized />
      </div>

      {isMobile ? (
        <HamburgerMenu navItems={navItems} />
      ) : (
        <div className='flex items-center justify-center gap-7 font-thin max-w-[64rem]'>
          {navItems.map((item, index) => (
            <div
              key={index}
              className='font-normal cursor-pointer hover:text-purple-500'
              onClick={() => scrollToSection(sectionIds[index])} // Scroll to the corresponding section
            >
              {item}
            </div>
          ))}
        </div>
      )}

      <div className='border-1 border-white rounded-xl p-2'>
        <Button className='shad-primary-btn rounded-xl'>Join Us</Button>
      </div>
    </div>
  );
}
