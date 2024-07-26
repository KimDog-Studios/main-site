"use client";

import React, { useState } from 'react';
import { Box, IconButton, Menu, MenuItem, Avatar, Button, Tooltip, Drawer, List, ListItem, ListItemText, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { FaGithub, FaDiscord } from 'react-icons/fa';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const pages = ['Home', 'About', 'Contact'];
const settings = ['Sign In/Sign Up'];

const NavBar: React.FC = () => {
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const router = useRouter();

  const handleDrawerToggle = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleSignInClick = () => {
    router.push('/api/signin-signup');
  };

  const drawer = (
    <Box
      sx={{
        width: 250,
        backgroundColor: '#333',
        color: 'white',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
      }}
      role="presentation"
      onClick={handleDrawerToggle}
    >
      <Box sx={{ marginTop: 8 }}>
        <List>
          {pages.map((page) => (
            <ListItem button key={page}>
              <Link href={`/${page.toLowerCase()}`} passHref>
                <ListItemText primary={page} sx={{ color: 'white' }} />
              </Link>
            </ListItem>
          ))}
        </List>
      </Box>
      <Box sx={{ p: 2 }}>
        <Button
          variant="contained"
          color="primary"
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            width: '100%',
            mb: 2,
            backgroundColor: '#444',
            '&:hover': {
              backgroundColor: '#555',
            },
          }}
          onClick={() => window.open('https://github.com/KimDog-Studios/main-site', '_blank')}
        >
          <FaGithub style={{ marginRight: 8 }} />
          <Typography variant="body2">Contribute to the Project</Typography>
        </Button>
        <Button
          variant="contained"
          color="primary"
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            width: '100%',
            backgroundColor: '#444',
            '&:hover': {
              backgroundColor: '#555',
            },
          }}
          onClick={() => window.open('https://discord.gg/QWJHH4JBKe', '_blank')}
        >
          <FaDiscord style={{ marginRight: 8 }} />
          <Typography variant="body2">Join Our Discord</Typography>
        </Button>
      </Box>
    </Box>
  );

  return (
    <>
      <IconButton
        size="large"
        aria-label="menu"
        aria-controls="menu-appbar"
        aria-haspopup="true"
        onClick={handleDrawerToggle}
        color="inherit"
        sx={{ position: 'fixed', top: 16, left: 16, zIndex: 1201 }}
      >
        <MenuIcon />
      </IconButton>

      <Drawer anchor="left" open={isDrawerOpen} onClose={handleDrawerToggle}>
        {drawer}
      </Drawer>

      <Box sx={{ position: 'fixed', top: 16, right: 16, zIndex: 1201 }}>
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
          <MenuItem onClick={handleCloseUserMenu}>
            <Button onClick={handleSignInClick}>Sign In/Sign Up</Button>
          </MenuItem>
        </Menu>
      </Box>
    </>
  );
};

export default NavBar;
