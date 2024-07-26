'use client';

// app/page.tsx
import React, { useState, useEffect } from 'react';
import { Backdrop, CircularProgress, Container, Box, Typography } from '@mui/material';
import Navbar from '../components/NavBar'; // Ensure the path is correct

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
      <Navbar />

      <Container sx={{ mt: 8 }}>
        <main className="min-h-screen flex flex-col p-8">
          <Box sx={{ mt: 4 }}>
            <Typography variant="h2" component="h1" gutterBottom>
              Welcome to KimDog Studios
            </Typography>
            <Typography variant="h5" component="h2" gutterBottom>
              Explore our mod packs and more.
            </Typography>
          </Box>
        </main>
      </Container>
    </div>
  );
};

export default MainPage;
