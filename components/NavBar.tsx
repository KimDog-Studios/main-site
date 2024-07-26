import React from 'react';
import { AppBar, Toolbar, Button, TextField, IconButton, Box, useTheme, useMediaQuery, Tooltip } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import Link from 'next/link'; // Adjust based on your routing library
import { FaGithub, FaDiscord } from 'react-icons/fa'; // Import GitHub and Discord icons from react-icons

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
        backgroundColor: theme.palette.primary.main,
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
            <Button color="inherit" sx={{ fontWeight: 'bold' }}>Home</Button>
            <Button color="inherit" sx={{ fontWeight: 'bold' }}>About</Button>
            <Button color="inherit" sx={{ fontWeight: 'bold' }}>Contact</Button>
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
          <Link href="/pages/signin" passHref>
            <Button color="inherit" sx={{ fontWeight: 'bold' }}>Sign In</Button>
          </Link>
          
          <Tooltip title="Contribute to the Page" arrow>
            <IconButton
              color="inherit"
              onClick={() => window.open('https://github.com/KimDog-Studios/main-site', '_blank')}
            >
              <FaGithub />
            </IconButton>
          </Tooltip>
          
          <Tooltip title="Join Our Discord Server" arrow>
            <IconButton
              color="inherit"
              onClick={() => window.open('https://discord.gg/QWJHH4JBKe', '_blank')}
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
