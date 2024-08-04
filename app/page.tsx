'use client';
import React, { useState } from 'react';
import Sidebar from '@/components/Sidebar';
import Image from 'next/image';
import Link from 'next/link';
import { FaDownload, FaCheckCircle, FaGamepad, FaUser, FaTag } from 'react-icons/fa';
import { Tooltip } from '@mui/material'; // Import Tooltip from MUI
import { mods } from '@/app/mods/Data';

const Page: React.FC = () => {
  const [isSidebarVisible, setSidebarVisible] = useState(false); // Hidden by default

  const toggleSidebar = () => {
    setSidebarVisible(prevState => !prevState);
  };

  return (
    <div className='text-white h-screen flex'>
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className={`flex-grow transition-transform ${isSidebarVisible ? 'ml-64' : 'ml-0'}`}>
        <div className='ml-64 mt-11 p-8 flex-grow'>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4'>
            {mods.map(mod => (
              <Link
                key={mod.id}
                href={mod.link}
                className='relative bg-gray-900 p-6 rounded-lg shadow-lg flex flex-col items-center w-80 hover:outline hover:outline-2 hover:outline-blue-500 hover:animate-pulseOutline transition-transform duration-300 transform hover:scale-95'
              >
                <div className='relative'>
                  <Image 
                    src={mod.img}
                    alt={mod.title}
                    width={256}
                    height={256}
                    className='rounded-lg'
                  />
                  {/* Game icon with Tooltip */}
                  <Tooltip title={`Game: ${mod.game}`} arrow>
                    <div className='absolute top-2 left-2 flex items-center bg-gray-800 text-white text-xs px-2 py-1 rounded-full'>
                      <FaGamepad className='mr-1' /> {/* Gamepad icon */}
                      {mod.game}
                    </div>
                  </Tooltip>
                  {/* Badge for download count with Tooltip */}
                  <Tooltip title={`Downloads: ${mod.downloadCount}`} arrow>
                    <div className='absolute bottom-2 left-2 bg-blue-500 text-white text-xs px-2 py-1 rounded-full flex items-center cursor-pointer'>
                      <FaDownload className='mr-1' /> {/* Download icon */}
                      {mod.downloadCount}
                    </div>
                  </Tooltip>
                  {/* Version label with Tooltip */}
                  <Tooltip title={`Game Version: ${mod.version}`} arrow>
                    <div className='absolute bottom-2 right-2 flex items-center bg-gray-800 text-white text-xs px-2 py-1 rounded-full cursor-pointer'>
                      <FaTag className='mr-1' /> {/* Tag icon */}
                      {mod.version}
                    </div>
                  </Tooltip>
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
    </div>
  );
}

export default Page;