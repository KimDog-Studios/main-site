'use client';
import React, { useState } from 'react';
import Link from "next/link";
import { HomeIcon, UserCircleIcon, CogIcon, UploadIcon, MenuIcon, SearchCircleIcon } from "@heroicons/react/outline";
import { FormGroup, FormControlLabel, Checkbox } from '@mui/material';

type Props = {};

const Sidebar: React.FC<Props> = () => {
  const [isSidebarVisible, setSidebarVisible] = useState(true);

  const toggleSidebar = () => {
    setSidebarVisible(prevState => !prevState);
  };

  const hoverColor = (color: string) => `text-${color}-500`;

  return (
    <div className='text-white h-screen'>
      {/* Top Navigation Bar */}
      <div className='flex items-center justify-between bg-[rgb(20,20,20)] p-2 shadow-md fixed top-0 left-0 right-0 z-10'>
        <div className='flex items-center space-x-4'>
          {/* Toggle Sidebar Button */}
          <button
            onClick={toggleSidebar}
            className='text-white mr-4 p-2 hover:bg-gray-700 rounded-md'
            aria-label={isSidebarVisible ? 'Hide Filters' : 'Show Filters'}
          >
            <MenuIcon className='w-8 h-8' />
          </button>

          <Link href="/" className='flex items-center space-x-2 cursor-pointer hover:text-purple-700'>
            <HomeIcon className='w-8 h-8' />
            <p>Home</p>
          </Link>
        </div>

        <div className='flex items-center justify-center flex-grow'>
          <input
            type="text"
            placeholder="Search..."
            className='w-120 px-4 py-2 rounded-md bg-[rgb(36,36,36)] text-white border border-gray-700'
          />
        </div>

        <div className='flex items-center space-x-4'>
          <Link href="/upload" className='flex items-center space-x-2 cursor-pointer hover:text-purple-700'>
            <UploadIcon className='w-8 h-8' />
            <p>Upload</p>
          </Link>

          <Link href="/signin" className='flex items-center space-x-2 cursor-pointer hover:text-purple-700'>
            <UserCircleIcon className='w-8 h-8' />
            <p>Sign In</p>
          </Link>

          <Link href="/settings" className='flex items-center space-x-2 cursor-pointer hover:text-purple-700'>
            <CogIcon className='w-8 h-8' />
          </Link>
        </div>
      </div>

      {/* Sidebar with Filters */}
      <div
        style={{
          position: 'fixed',
          top: '58px', // Adjust this value based on the height of your TopBar
          left: 0,
          width: '255px',
          height: 'calc(100vh - 58px)', // Adjust this value based on the height of your TopBar
          backgroundColor: 'rgb(20,20,20)',
          borderRight: '1px solid #ddd',
          padding: '20px',
          boxSizing: 'border-box',
          overflowY: 'auto',
          color: 'white', // Ensure text color contrasts well with the background
          transition: 'transform 0.3s ease', // Smooth transition for showing/hiding
          transform: isSidebarVisible ? 'translateX(0)' : 'translateX(-100%)' // Hide with translate
        }}
      >
        <h2>Filters</h2>
        <FormGroup>
          <FormControlLabel control={<Checkbox />} label="Show All Mods" />
          <FormControlLabel control={<Checkbox />} label="ATS" />
          <FormControlLabel control={<Checkbox />} label="ETS 2" />
          <FormControlLabel control={<Checkbox />} label="Minecraft" />
          {/* Add more filters as needed */}
        </FormGroup>
      </div>
    </div>
  );
}

export default Sidebar;
