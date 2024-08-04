'use client';
import React, { useState, useEffect, useRef } from 'react';
import Link from "next/link";
import { HomeIcon, UserCircleIcon, CogIcon, UploadIcon, MenuIcon } from "@heroicons/react/outline";
import { FormGroup, FormControlLabel, Checkbox, TextField, InputAdornment, IconButton } from '@mui/material';
import ClearIcon from '@mui/icons-material/Clear';
import { mods as modData } from '@/app/mods/Data';  // Adjust the import path as needed

type Props = {
  selectedFilters: string[];
  onFilterChange: (game: string, checked: boolean) => void;
  searchQuery: string;
  onSearchChange: (query: string) => void;
  isSidebarVisible: boolean;
};

type Mod = {
  title: string;
  game: string;
};

const Sidebar: React.FC<Props> = ({ selectedFilters, onFilterChange, searchQuery, onSearchChange }) => {
  const [isSidebarVisible, setSidebarVisible] = useState(true);
  const [searchResults, setSearchResults] = useState<Mod[]>([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);

  const toggleSidebar = () => {
    setSidebarVisible(prevState => !prevState);
  };

  const handleSearchChange = (query: string) => {
    onSearchChange(query);

    // Filter modData based on the search query
    const results = query
      ? modData.filter(mod => mod.title.toLowerCase().includes(query.toLowerCase()))
      : modData; // Show all mods if no query
    setSearchResults(results);
  };

  const handleSuggestionClick = (suggestion: string) => {
    onSearchChange(suggestion);
    setSearchResults([]);
    setShowSuggestions(false);
  };

  const handleFocus = () => {
    setShowSuggestions(true);
    setSearchResults(modData);
  };

  const handleBlur = (e: React.FocusEvent<HTMLDivElement>) => {
    if (!searchRef.current?.contains(e.relatedTarget as Node)) {
      setShowSuggestions(false);
    }
  };

  const clearSearch = () => {
    onSearchChange('');
    setSearchResults([]);
  };

  return (
    <div className='flex'>
      {/* Top Navigation Bar */}
      <div className='flex items-center justify-between bg-[#1E1E1E] p-2 shadow-md fixed top-0 left-0 right-0 z-10'>
        <div className='flex items-center space-x-4'>
          {/* Toggle Sidebar Button */}
          <button
            onClick={toggleSidebar}
            className='text-white p-2 hover:bg-gray-700 rounded-md transition'
            aria-label={isSidebarVisible ? 'Hide Filters' : 'Show Filters'}
          >
            <MenuIcon className='w-8 h-8' />
          </button>

          <Link href="/" className='flex items-center space-x-2 text-white hover:text-purple-500 transition'>
            <HomeIcon className='w-8 h-8' />
            <p>Home</p>
          </Link>
        </div>

        <div className='flex items-center justify-center flex-grow'>
          <div className='relative w-80' ref={searchRef} onBlur={handleBlur}>
            <TextField
              variant="outlined"
              placeholder="Search..."
              value={searchQuery}
              onChange={(e) => handleSearchChange(e.target.value)}
              onFocus={handleFocus}
              className='w-full'
              InputProps={{
                style: {
                  backgroundColor: '#2E2E2E',
                  color: 'white',
                },
                endAdornment: searchQuery ? (
                  <InputAdornment position="end">
                    <IconButton onClick={clearSearch} edge="end">
                      <ClearIcon style={{ color: 'white' }} />
                    </IconButton>
                  </InputAdornment>
                ) : null,
              }}
              InputLabelProps={{
                style: { color: '#B0B0B0' },
              }}
            />
            {showSuggestions && searchResults.length > 0 && (
              <div className='absolute bg-[#1E1E1E] w-full mt-2 p-2 border border-gray-700 rounded-md'>
                {searchResults.map((result, index) => (
                  <div
                    key={index}
                    className='text-white hover:bg-gray-700 p-2 rounded-md cursor-pointer flex justify-between'
                    onClick={() => handleSuggestionClick(result.title)}
                    tabIndex={0}
                  >
                    <span>{result.title} | {result.game}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        <div className='flex items-center space-x-4'>
          <Link href="/upload" className='flex items-center space-x-2 text-white hover:text-purple-500 transition'>
            <UploadIcon className='w-8 h-8' />
            <p>Upload</p>
          </Link>

          <Link href="/signin" className='flex items-center space-x-2 text-white hover:text-purple-500 transition'>
            <UserCircleIcon className='w-8 h-8' />
            <p>Sign In</p>
          </Link>

          <Link href="/settings" className='flex items-center space-x-2 text-white hover:text-purple-500 transition'>
            <CogIcon className='w-8 h-8' />
          </Link>
        </div>
      </div>

      {/* Sidebar with Filters */}
      <div
        style={{
          position: 'fixed',
          top: '58px',
          left: 0,
          width: '255px',
          height: 'calc(100vh - 58px)',
          backgroundColor: '#1E1E1E',
          borderRight: '1px solid #333',
          padding: '20px',
          boxSizing: 'border-box',
          overflowY: 'auto',
          color: 'white',
          transition: 'transform 0.3s ease',
          transform: isSidebarVisible ? 'translateX(0)' : 'translateX(-100%)'
        }}
      >
        <h2 className='text-lg font-semibold mb-4'>Filters</h2>
        <FormGroup>
          <h2 className='text-lg font-semibold'>Games:</h2>
          <FormControlLabel
            control={
              <Checkbox
                checked={selectedFilters.includes('ATS')}
                onChange={(e) => onFilterChange('ATS', e.target.checked)}
                sx={{
                  '& .MuiSvgIcon-root': { fontSize: 28 },
                  color: '#B0B0B0',
                  '&.Mui-checked': {
                    color: '#9C27B0',
                  },
                }}
              />
            }
            label="ATS"
            sx={{ mb: 1, color: '#B0B0B0' }}
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={selectedFilters.includes('ETS 2')}
                onChange={(e) => onFilterChange('ETS 2', e.target.checked)}
                sx={{
                  '& .MuiSvgIcon-root': { fontSize: 28 },
                  color: '#B0B0B0',
                  '&.Mui-checked': {
                    color: '#9C27B0',
                  },
                }}
              />
            }
            label="ETS 2"
            sx={{ mb: 1, color: '#B0B0B0' }}
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={selectedFilters.includes('Minecraft')}
                onChange={(e) => onFilterChange('Minecraft', e.target.checked)}
                sx={{
                  '& .MuiSvgIcon-root': { fontSize: 28 },
                  color: '#B0B0B0',
                  '&.Mui-checked': {
                    color: '#9C27B0',
                  },
                }}
              />
            }
            label="Minecraft"
            sx={{ mb: 1, color: '#B0B0B0' }}
          />
          {/* Add more filters as needed */}
        </FormGroup>
      </div>
    </div>
  );
}

export default Sidebar;
