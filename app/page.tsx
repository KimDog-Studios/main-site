'use client';

import React, { useState, useEffect } from 'react';
import { Backdrop, CircularProgress, Container, Box, Typography } from '@mui/material';
import NavBar from '../components/[API]NavBar'; // Ensure the path is correct
import { TypingEffectHomePage, Mods, DiscordPage} from '../components/[API]MainFunctions'; // Import the new component with correct path

const MainPage: React.FC = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1750);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={true}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    );
  }

  return (
    <div>
      <NavBar/>
      <TypingEffectHomePage />
      <Mods />
      <DiscordPage/>
    </div>
  );
};

export default MainPage;
