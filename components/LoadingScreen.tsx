// components/LoadingScreen.js
import React from 'react';
import { CircularProgress, Backdrop } from '@mui/material';

const LoadingScreen = ({ open }) => {
  return (
    <Backdrop
      sx={{
        color: '#fff',
        backgroundColor: 'rgba(0, 0, 0, 1)', // Black background with some opacity
        zIndex: (theme) => theme.zIndex.drawer + 1,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
      open={open}
    >
      <CircularProgress color="inherit" />
    </Backdrop>
  );
};

export default LoadingScreen;
