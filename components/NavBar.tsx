import React from 'react';
import { AppBar, Toolbar, Button, TextField, IconButton, Box, useTheme, useMediaQuery, Tooltip } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import Link from 'next/link';
import { FaGithub, FaDiscord } from 'react-icons/fa';

const NavBar: React.FC = () => {
  const [searchTerm, setSearchTerm] = React.useState<string>('');
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const handleSearchSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (searchTerm.trim()) {
      window.location.href = `/search?q=${encodeURIComponent(searchTerm)}`;
    }
  };

  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: '#f44336', // Red color
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        transition: 'box-shadow 0.3s ease',
        '&:hover': {
          boxShadow: '0 6px 12px rgba(0, 0, 0, 0.2)',
        },
      }}
    >
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        {!isMobile && (
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <Link href="/" passHref>
              <Button color="inherit" sx={{ fontWeight: 'bold' }}>Home</Button>
            </Link>
            <Link href="/about" passHref>
              <Button color="inherit" sx={{ fontWeight: 'bold' }}>About</Button>
            </Link>
            <Link href="/contact" passHref>
              <Button color="inherit" sx={{ fontWeight: 'bold' }}>Contact</Button>
            </Link>
          </Box>
        )}

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
                width: { xs: '100%', sm: '400px' },
              }}
            />
            <IconButton type="submit" color="inherit">
              <SearchIcon />
            </IconButton>
          </form>
        </Box>

        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <Link href="/signin" passHref>
            <Button color="inherit" sx={{ fontWeight: 'bold' }}>Sign In</Button>
          </Link>
          <Tooltip title="GitHub" arrow>
            <IconButton
              color="inherit"
              onClick={() => window.open('https://github.com/KimDog-Studios/main-site', '_blank')}
            >
              <FaGithub />
            </IconButton>
          </Tooltip>
          <Tooltip title="Discord" arrow>
            <IconButton
              color="inherit"
              onClick={() => window.open('https://discord.gg/XAeYaZMxz3', '_blank')}
            >
              <FaDiscord />
            </IconButton>
          </Tooltip>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
