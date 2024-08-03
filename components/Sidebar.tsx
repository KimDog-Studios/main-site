import React from 'react'
import Link from "next/link"
import {HomeIcon, UserCircleIcon, CogIcon, UploadIcon} from "@heroicons/react/outline"
import { FormGroup, FormControlLabel, Checkbox } from '@mui/material'


type Props = {}

function Sidebar({}: Props) {
  return (
    <div className='bg-[rgb(36,36,36)] text-white h-screen'>
      {/* Top Navigation Bar */}
      <div className='flex items-center justify-between bg-[rgb(70,70,70)] bg-opacity-50 p-2 shadow-md fixed top-0 left-0 right-0 z-10'>
        <div className='flex items-center space-x-4'>
          <Link href="/" className='flex items-center space-x-2 cursor-pointer hover:text-purple-500'>
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
          <Link href="/upload" className='flex items-center space-x-2 cursor-pointer hover:text-purple-500'>
            <UploadIcon className='w-8 h-8' />
            <p>Upload</p>
          </Link>

          <Link href="/signin" className='flex items-center space-x-2 cursor-pointer hover:text-purple-500'>
            <UserCircleIcon className='w-8 h-8' />
            <p>Sign In</p>
          </Link>

          <Link href="/settings" className='flex items-center space-x-2 cursor-pointer hover:text-purple-500'>
            <CogIcon className='w-8 h-8' />
          </Link>
        </div>
      </div>

      {/* Sidebar with Filters */}
      <div style={{
        position: 'fixed',
        top: '58px', // Adjust this value based on the height of your TopBar
        left: 0,
        width: '255px',
        height: 'calc(100vh - 58px)', // Adjust this value based on the height of your TopBar
        backgroundColor: 'rgb(50,50,50)',
        borderRight: '1px solid #ddd',
        padding: '20px',
        boxSizing: 'border-box',
        overflowY: 'auto',
        color: 'white', // Ensure text color contrasts well with the background
      }}>
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
  )
}

export default Sidebar