'use client';
import React, { useState } from 'react';
import Link from "next/link";
import { Tooltip } from '@mui/material';
import { mods, verifiedAuthors } from '@/app/mods/Data'; // Import data script
import Image from 'next/image';
import { FaDownload, FaCheckCircle, FaGamepad, FaUser, FaTag } from 'react-icons/fa';
import Sidebar from '@/components/Sidebar';

const Page: React.FC = () => {
  const [isSidebarVisible, setSidebarVisible] = useState(true);

  const toggleSidebar = () => {
    setSidebarVisible(prevState => !prevState);
  };

  return (
    <div className='text-white h-screen flex'>
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className={`flex-grow transition-transform ${isSidebarVisible ? 'ml-54' : 'ml-0'}`}>
        <div className='ml-64 mt-11 p-8 flex'>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-3'>
            {mods.map(mod => (
              <Link
                key={mod.id}
                href={mod.link}
                className='relative bg-gray-800 p-6 rounded-lg shadow-lg flex flex-col items-center w-80 hover:outline hover:outline-2 hover:outline-blue-500 hover:animate-pulseOutline transition-transform duration-250 transform hover:scale-95'
              >
                <div className='relative font-black'>
                  <Image 
                    src={mod.img}
                    alt={mod.title}
                    width={256}
                    height={256}
                    className='rounded-lg'
                  />
                  <Tooltip title={`Version ${mod.game}`} arrow>
                    <div className='absolute top-2 left-2 flex items-center bg-gray-800 text-white text-xs px-2 py-1 rounded-full'>
                      <FaGamepad className='mr-1 text-pink-500' /> {/* Gamepad icon */}
                      {mod.game}
                    </div>
                  </Tooltip>
                  {/* Badge for download count */}
                  <Tooltip title={`Downloads: ${mod.downloadCount}`} arrow>
                    <div className='absolute bottom-2 left-2 bg-gray-800 text-white text-xs px-2 py-1 rounded-full flex items-center cursor-pointer'>
                      <FaDownload className='mr-1 text-red-500' /> {/* Download icon */}
                      {mod.downloadCount}
                    </div>
                  </Tooltip>
                  {/* Version label */}
                  <Tooltip title={`Version ${mod.version}`} arrow>
                    <div className='absolute bottom-2 right-2 flex items-center bg-gray-800 text-white text-xs px-2 py-1 rounded-full cursor-pointer'>
                      <FaTag className='mr-1 text-green-500' /> {/* Tag icon */}
                      {mod.version}
                    </div>
                  </Tooltip>
                </div>
                {/* Mod Title */}
                <p className='text-white text-center mt-4 text-xl font-bold'>
                  {mod.title}
                </p>
                {/* Author Information */}
                <p className='text-white text-center text-sm mt-2 flex items-center justify-center font-black'>
                  <FaUser className='inline mr-1 text-white font-black' />
                  {mod.author}
                  {verifiedAuthors.includes(mod.author) && (
                      <FaCheckCircle className='ml-1 w-4 h-4 text-blue-500' />
                  )}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page;
