import React from 'react';
import { Backdrop, CircularProgress, Typography, Button, Box } from '@mui/material';

interface RedirectBackdropProps {
  open: boolean;
  redirectUrl: string;
  onClose: () => void;
  countdown: number;
}

const RedirectBackdrop: React.FC<RedirectBackdropProps> = ({ open, redirectUrl, onClose, countdown }) => {
  return (
    <Backdrop sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }} open={open}>
      <Box textAlign="center">
        <CircularProgress color="inherit" />
        <Typography variant="h6" sx={{ mt: 2 }}>
          Redirecting in {countdown} seconds...
        </Typography>
        <Typography variant="body1" sx={{ mt: 1 }}>
          If not redirected automatically, click{' '}
          <Button variant="contained" color="primary" onClick={() => window.open(redirectUrl, '_blank')}>
            here
          </Button>.
        </Typography>
      </Box>
    </Backdrop>
  );
};

export default RedirectBackdrop;
