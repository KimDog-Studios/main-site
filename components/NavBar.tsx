import React, { useState } from 'react';
import { AppBar, Toolbar, Button, TextField, IconButton, Box, useTheme, useMediaQuery } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const Navbar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  // Handle change in search input
  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  // Handle search form submission
  const handleSearchSubmit = (event) => {
    event.preventDefault();
    // Perform search action (e.g., redirect or filter results)
    if (searchTerm.trim()) {
      window.location.href = `/search?q=${encodeURIComponent(searchTerm)}`;
    }
  };

  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: theme.palette.primary.main,
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        transition: 'box-shadow 0.3s ease',
        '&:hover': {
          boxShadow: '0 6px 12px rgba(0, 0, 0, 0.2)',
        },
      }}
    >
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        {/* Navigation Buttons */}
        {!isMobile && (
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <Button color="inherit" sx={{ fontWeight: 'bold' }}>Home</Button>
            <Button color="inherit" sx={{ fontWeight: 'bold' }}>About</Button>
            <Button color="inherit" sx={{ fontWeight: 'bold' }}>Contact</Button>
          </Box>
        )}

        {/* Centered Search Bar */}
        <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'center' }}>
          <form onSubmit={handleSearchSubmit} style={{ display: 'flex', alignItems: 'center', width: '100%' }}>
            <TextField
              size="small"
              placeholder="Search..."
              variant="outlined"
              value={searchTerm}
              onChange={handleSearchChange}
              sx={{
                bgcolor: 'white',
                borderRadius: 1,
                borderColor: 'transparent',
                '& .MuiOutlinedInput-root': {
                  '& fieldset': {
                    borderColor: 'transparent',
                  },
                  '&:hover fieldset': {
                    borderColor: theme.palette.primary.light,
                  },
                },
                width: { xs: '100%', sm: '400px' }, // Adjust width on mobile and desktop
              }}
            />
            <IconButton type="submit" color="inherit">
              <SearchIcon />
            </IconButton>
          </form>
        </Box>

        {/* Sign In Button */}
        <Button color="inherit" sx={{ fontWeight: 'bold' }}>Sign In</Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
