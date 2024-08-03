import React from 'react';
import Sidebar from '@/components/Sidebar';
import Image from 'next/image';
import Link from 'next/link'; // Import the Link component

function Page() {
  return (
    <div className='bg-[rgb(36,36,36)] text-white h-screen flex'>
      {/* Sidebar */}
      <div className='fixed top-0 left-0 h-full w-64 bg-[rgb(36,36,36)] border-r border-gray-700'>
        <Sidebar />
      </div>

      {/* Main Content */}
      <div className='ml-64 mt-11 p-8 flex-grow'>
        <Link
          href="/mods/ets2/kimdog-network-mod-pack" // Replace with your actual internal link
          className='bg-gray-800 p-6 rounded-lg shadow-lg flex flex-col items-center w-96 hover:outline hover:outline-2 hover:outline-blue-500 hover:animate-pulseOutline transition-transform duration-300 transform hover:scale-105'
        >
          <Image 
            src='/assets/KimDogLogo.png' // Use this path for local images inside public
            width={256}
            height={256}
            alt='KimDog'
            className='rounded-lg'
          />
          <p className='text-white text-center mt-4 text-xl font-bold'>
            KimDog's ETS 2 Mod Pack
          </p>
        </Link>
      </div>
    </div>
  );
}

export default Page;
