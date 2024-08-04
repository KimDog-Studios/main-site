'use client';
import React, { useState } from 'react';
import Link from "next/link";
import { Tooltip } from '@mui/material';
import { mods as allMods, verifiedAuthors, Mod } from '@/app/mods/Data'; // Import data script
import Image from 'next/image';
import { FaDownload, FaCheckCircle, FaGamepad, FaUser, FaTag } from 'react-icons/fa';
import Sidebar from '@/components/Sidebar';

// Filtering and searching function to apply selected filters and search query
const filterAndSearchMods = (mods: Mod[], filters: string[], query: string): Mod[] => {
  return mods.filter(mod => {
    // Check if the mod passes the filter
    const isFiltered = filters.length === 0 || filters.includes(mod.game);
    // Check if the mod matches the search query (case-insensitive)
    const matchesSearch = mod.title.toLowerCase().includes(query.toLowerCase()) ||
                           mod.author.toLowerCase().includes(query.toLowerCase());
    return isFiltered && matchesSearch;
  });
};

const Page: React.FC = () => {
  const [isSidebarVisible, setSidebarVisible] = useState(true);
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);
  const [searchQuery, setSearchQuery] = useState('');

  const toggleSidebar = () => {
    setSidebarVisible(prevState => !prevState);
  };

  const handleFilterChange = (game: string, checked: boolean) => {
    setSelectedFilters(prevFilters =>
      checked ? [...prevFilters, game] : prevFilters.filter(filter => filter !== game)
    );
  };

  const handleSearchChange = (query: string) => {
    setSearchQuery(query);
  };

  const filteredMods = filterAndSearchMods(allMods, selectedFilters, searchQuery);

  return (
    <div className='text-white h-screen flex'>
      {/* Sidebar */}
      <Sidebar 
        selectedFilters={selectedFilters} 
        onFilterChange={handleFilterChange} 
        searchQuery={searchQuery} 
        onSearchChange={handleSearchChange} 
      />

      {/* Main Content */}
      <div className={`flex-grow transition-transform${isSidebarVisible ? 'ml-54' : 'ml-0'}`}>
        <div className='ml-64 mt-11 p-8'>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-8 gap-8'>
            {filteredMods.map(mod => (
              <Link
                key={mod.id}
                href={mod.link}
                className='w-64 relative bg-gray-800 p-6 rounded-lg shadow-lg flex flex-col items-center hover:outline hover:outline-2 hover:outline-blue-500 hover:animate-pulseOutline transition-transform duration-250 transform hover:scale-95'
              >
                <div className='relative'>
                  <Image 
                    src={mod.img}
                    alt={mod.title}
                    width={256}
                    height={256}
                    className='rounded-lg'
                  />
                  <Tooltip title={`Version ${mod.game}`} arrow>
                    <div className='absolute top-2 left-2 flex items-center bg-gray-800 text-white text-xs px-2 py-1 rounded-full'>
                      <FaGamepad className='mr-1 text-pink-500' />
                      {mod.game}
                    </div>
                  </Tooltip>

                  {/* Badge for download count */}
                  <Tooltip title={`Downloads: ${mod.downloadCount}`} arrow>
                    <div className='absolute bottom-2 left-2 bg-gray-800 text-white text-xs px-2 py-1 rounded-full flex items-center cursor-pointer'>
                      <FaDownload className='mr-1 text-red-500' />
                      {mod.downloadCount}
                    </div>
                  </Tooltip>

                  {/* Version label */}
                  <Tooltip title={`Version ${mod.version}`} arrow>
                    <div className='absolute bottom-2 right-2 flex items-center bg-gray-800 text-white text-xs px-2 py-1 rounded-full cursor-pointer'>
                      <FaTag className='mr-1 text-green-500' />
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
