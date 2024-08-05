'use client';
import React, { useState, useEffect, useRef } from 'react';
import Link from "next/link";
import { HomeIcon, UserCircleIcon, CogIcon, UploadIcon, MenuIcon } from "@heroicons/react/outline";
import { FormGroup, FormControlLabel, Checkbox, TextField, InputAdornment, IconButton } from '@mui/material';
import ClearIcon from '@mui/icons-material/Clear';
import { mods as modData, dlcs as dlcData } from '@/app/mods/Data';  // Import DLC data if needed

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

const Sidebar: React.FC<Props> = ({ selectedFilters, onFilterChange, searchQuery, onSearchChange, isSidebarVisible }) => {
  const [localSidebarVisible, setLocalSidebarVisible] = useState<boolean>(isSidebarVisible);
  const [searchResults, setSearchResults] = useState<Mod[]>([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);

  // Sync localSidebarVisible with isSidebarVisible prop
  useEffect(() => {
    setLocalSidebarVisible(isSidebarVisible);
  }, [isSidebarVisible]);

  // Handle search query changes
  useEffect(() => {
    const results = searchQuery
      ? [...modData, ...dlcData].filter(mod => mod.title.toLowerCase().includes(searchQuery.toLowerCase()))
      : [...modData, ...dlcData];

    setSearchResults(results);

    // Apply filters based on search results
    const appliedFilters = new Set<string>();
    results.forEach(mod => appliedFilters.add(mod.game));
    [...modData, ...dlcData].forEach(mod => {
      if (selectedFilters.includes(mod.game) && !appliedFilters.has(mod.game)) {
        onFilterChange(mod.game, false);
      }
    });

  }, [searchQuery, selectedFilters, onFilterChange]);

  const toggleSidebar = () => {
    setLocalSidebarVisible(prevState => !prevState);
  };

  const handleSearchChange = (query: string) => {
    onSearchChange(query);
  };

  const handleSuggestionClick = (mod: Mod) => {
    onSearchChange(mod.title);
    onFilterChange(mod.game, true);
    setSearchResults([]);
    setShowSuggestions(false);
  };

  const handleFocus = () => {
    setShowSuggestions(true);
    setSearchResults([...modData, ...dlcData]);
  };

  const handleBlur = (e: React.FocusEvent<HTMLDivElement>) => {
    if (!searchRef.current?.contains(e.relatedTarget as Node)) {
      setShowSuggestions(false);
    }
  };

  const clearSearch = () => {
    onSearchChange('');
    setSearchResults([]);
    [...modData, ...dlcData].forEach(mod => {
      if (selectedFilters.includes(mod.game)) {
        onFilterChange(mod.game, false);
      }
    });
  };

  const handleCheckboxChange = (game: string) => (event: React.ChangeEvent<HTMLInputElement>) => {
    onFilterChange(game, event.target.checked);
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
            aria-label={localSidebarVisible ? 'Hide Filters' : 'Show Filters'}
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
                {searchResults.map((mod, index) => (
                  <div
                    key={index}
                    className='text-white hover:bg-gray-700 p-2 rounded-md cursor-pointer flex justify-between'
                    onClick={() => handleSuggestionClick(mod)}
                    tabIndex={0}
                  >
                    <span>{mod.title} | {mod.game}</span>
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
          transform: localSidebarVisible ? 'translateX(0)' : 'translateX(-100%)'
        }}
      >
        <h2 className='text-lg font-semibold mb-4'>Filters</h2>
        <FormGroup>
          <h2 className='text-lg font-semibold'>Games:</h2>
          <FormControlLabel
            control={
              <Checkbox
                checked={selectedFilters.includes('ATS')}
                onChange={handleCheckboxChange('ATS')}
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
                onChange={handleCheckboxChange('ETS 2')}
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
                onChange={handleCheckboxChange('Minecraft')}
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
