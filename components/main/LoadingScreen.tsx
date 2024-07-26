import React from 'react';
import { Backdrop, Box, Typography } from '@mui/material';

interface LoadingScreenProps {
  open: boolean;
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({ open }) => {
  return (
    <Backdrop
      sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
      open={open}
    >
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        {/* Gradient Spinner */}
        <div className="gradient-spinner"></div>
        <Typography variant="h6" sx={{ mt: 2 }}>
          Loading...
        </Typography>
      </Box>
    </Backdrop>
  );
};

export default LoadingScreen;
