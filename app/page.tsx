'use client';

import React, { useState, useEffect } from 'react';
import { Backdrop, CircularProgress, Container, Box, Typography } from '@mui/material';
import Navbar from '../components/NavBar'; // Ensure the path is correct
import Mods from '../components/Mods';
import TypingAnimation from '../components/TypingAnimation'; // Import the new component

const MainPage: React.FC = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

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
      <TypingAnimation/>
      <Navbar />
      <Mods />

    </div>
  );
};

export default MainPage;
