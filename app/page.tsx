import React from 'react';
import Sidebar from '@/components/Sidebar';
import Image from 'next/image';
import Link from 'next/link';
import { FaDownload, FaCheckCircle, FaGamepad, FaUser, FaTag } from 'react-icons/fa';
import { mods } from '@/components/HomePage/Mods';

function Page() {
  return (
    <div className='bg-[rgb(36,36,36)] text-white h-screen flex'>
      {/* Sidebar */}
      <div className='fixed top-0 left-0 h-full w-64 bg-[rgb(36,36,36)] border-r border-gray-700'>
        <Sidebar />
      </div>

      {/* Main Content */}
      <div className='ml-64 mt-11 p-8 flex-grow'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6'>
          {mods.map(mod => (
            <Link
              key={mod.id}
              href={mod.link}
              className='relative bg-gray-800 p-6 rounded-lg shadow-lg flex flex-col items-center w-80 hover:outline hover:outline-2 hover:outline-blue-500 hover:animate-pulseOutline transition-transform duration-300 transform hover:scale-105'
            >
              <div className='relative'>
                <Image 
                  src={mod.img}
                  alt={mod.title}
                  width={256}
                  height={256}
                  className='rounded-lg'
                />
                {/* Game icon */}
                <div className='absolute top-2 left-2 flex items-center bg-gray-800 text-white text-xs px-2 py-1 rounded-full'>
                  <FaGamepad className='mr-1' /> {/* Gamepad icon */}
                  {mod.game}
                </div>
                {/* Badge for download count */}
                <div className='absolute bottom-2 left-2 bg-blue-500 text-white text-xs px-2 py-1 rounded-full flex items-center'>
                  <FaDownload className='mr-1' /> {/* Download icon */}
                  {mod.downloadCount}
                </div>
                {/* Version label */}
                <div className='absolute bottom-2 right-2 flex items-center bg-gray-800 text-white text-xs px-2 py-1 rounded-full'>
                  <FaTag className='mr-1' /> {/* Tag icon */}
                  {mod.version}
                </div>
              </div>
              {/* Mod Title */}
              <p className='text-white text-center mt-4 text-xl font-bold'>
                {mod.title}
              </p>
              {/* Author Information */}
              <p className='text-white text-center text-sm mt-2'>
                <FaUser className='inline mr-1' /> {mod.author}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Page;
