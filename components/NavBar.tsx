import * as React from 'react';
import { AppBar, Box, Toolbar, IconButton, Menu, Container, Avatar, Button, Tooltip, MenuItem } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { FaGithub, FaDiscord } from 'react-icons/fa';
import Image from 'next/image';
import RedirectBackdrop from './RedirectBackdrop'; // Ensure the path is correct

const pages = ['Home', 'About', 'Contact'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

const NavBar: React.FC = () => {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);
  const [redirecting, setRedirecting] = React.useState<{ url: string, countdown: number } | null>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const startRedirect = (url: string) => {
    setRedirecting({ url, countdown: 5 });
    const countdownInterval = setInterval(() => {
      setRedirecting((prev) => {
        if (prev && prev.countdown > 1) {
          return { ...prev, countdown: prev.countdown - 1 };
        } else {
          clearInterval(countdownInterval);
          window.open(url, "_blank");
          return null;
        }
      });
    }, 1000);
  };

  const handleManualRedirect = () => {
    if (redirecting) {
      window.open(redirecting.url, "_blank");
      setRedirecting(null);
    }
  };

  return (
    <div>
      <AppBar position="fixed" sx={{ backgroundColor: 'red', width: '100%', top: 0, left: 0, zIndex: 1200 }}>
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Box sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }}>
              <Image
                src="https://raw.githubusercontent.com/KimDog-Studios/main-site/main/public/assets/logo.png"
                alt="Logo"
                width={40}
                height={40}
              />
            </Box>
            <Box sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }}>
              <Image
                src="https://raw.githubusercontent.com/KimDog-Studios/main-site/main/public/assets/logo.png"
                alt="Logo"
                width={40}
                height={40}
              />
            </Box>

            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
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
                {pages.map((page) => (
                  <MenuItem key={page} onClick={handleCloseNavMenu}>
                    {page}
                  </MenuItem>
                ))}
              </Menu>
            </Box>
            
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
              {pages.map((page) => (
                <Button
                  key={page}
                  href={`/${page.toLowerCase()}`}
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: 'white', display: 'block' }}
                >
                  {page}
                </Button>
              ))}
            </Box>

            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="GitHub" arrow>
                <IconButton color="inherit" onClick={() => startRedirect('https://github.com/KimDog-Studios/main-site')}>
                  <FaGithub />
                </IconButton>
              </Tooltip>
              <Tooltip title="Discord" arrow>
                <IconButton color="inherit" onClick={() => startRedirect('https://discord.gg/QWJHH4JBKe')}>
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

      {redirecting && (
        <RedirectBackdrop
          open={true}
          countdown={redirecting.countdown}
          url={redirecting.url}
          onClose={() => setRedirecting(null)}
          onManualRedirect={handleManualRedirect}
        />
      )}
    </div>
  );
};

export default NavBar;
