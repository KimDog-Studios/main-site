// components/NavBar.tsx

"use client";

import React, { useState } from 'react';
import { AppBar, Box, Toolbar, IconButton, Menu, MenuItem, Container, Avatar, Button, Tooltip } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { FaGithub, FaDiscord } from 'react-icons/fa';
import Image from 'next/image';
import Link from 'next/link';

const pages = ['About', 'Contact'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];
const modCategories = ['ETS 2', 'ATS'];

const NavBar: React.FC = () => {
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
  const [anchorElMod, setAnchorElMod] = useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleOpenModMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElMod(event.currentTarget);
  };

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseModMenu = () => {
    setAnchorElMod(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="fixed" sx={{ backgroundColor: 'red', width: '100%', top: 0, left: 0, zIndex: 1200 }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }}>
            <Link href="/">
              <Image
                src="https://raw.githubusercontent.com/KimDog-Studios/main-site/main/public/assets/logo.png"
                alt="Logo"
                width={40}
                height={40}
              />
            </Link>
          </Box>
          <Box sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }}>
            <Link href="/">
              <Image
                src="https://raw.githubusercontent.com/KimDog-Studios/main-site/main/public/assets/logo.png"
                alt="Logo"
                width={40}
                height={40}
              />
            </Link>
          </Box>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="menu"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              <MenuItem onClick={handleCloseNavMenu}>
                <Link href="/">New</Link>
              </MenuItem>
              <MenuItem onClick={handleCloseNavMenu}>
                <Link href="/about">About</Link>
              </MenuItem>
              <MenuItem onClick={handleCloseNavMenu}>
                <Link href="/contact">Contact</Link>
              </MenuItem>
              <MenuItem onClick={handleOpenModMenu}>
                <ExpandMoreIcon /> Mods
              </MenuItem>
              <Menu
                id="menu-mods"
                anchorEl={anchorElMod}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
                open={Boolean(anchorElMod)}
                onClose={handleCloseModMenu}
              >
                {modCategories.map((category) => (
                  <MenuItem key={category} onClick={handleCloseModMenu}>
                    <Link href={`/mods/${category.toLowerCase()}`}>{category}</Link>
                  </MenuItem>
                ))}
              </Menu>
            </Menu>
          </Box>

          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            <Button href="/new" sx={{ my: 2, color: 'white', display: 'block' }}>
              New
            </Button>
            <Button href="/about" sx={{ my: 2, color: 'white', display: 'block' }}>
              About
            </Button>
            <Button href="/contact" sx={{ my: 2, color: 'white', display: 'block' }}>
              Contact
            </Button>
            <Button onClick={handleOpenModMenu} sx={{ my: 2, color: 'white', display: 'block' }}>
              Mods <ExpandMoreIcon />
            </Button>
            <Menu
              id="menu-mods"
              anchorEl={anchorElMod}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElMod)}
              onClose={handleCloseModMenu}
            >
              {modCategories.map((category) => (
                <MenuItem key={category} onClick={handleCloseModMenu}>
                  <Link href={`/mods/${category.toLowerCase()}`}>{category}</Link>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="GitHub" arrow>
              <IconButton color="inherit" onClick={() => window.open('https://github.com/KimDog-Studios/main-site', '_blank')}>
                <FaGithub />
              </IconButton>
            </Tooltip>
            <Tooltip title="Discord" arrow>
              <IconButton color="inherit" onClick={() => window.open('https://discord.gg/QWJHH4JBKe', '_blank')}>
                <FaDiscord />
              </IconButton>
            </Tooltip>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  {setting}
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default NavBar;
