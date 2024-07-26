// components/RedirectBackdrop.tsx
import React from 'react';
import { Backdrop, CircularProgress, Typography, Button } from '@mui/material';

interface RedirectBackdropProps {
  open: boolean;
  countdown: number;
  url: string;
  onClose: () => void;
  onManualRedirect: () => void;
}

const RedirectBackdrop: React.FC<RedirectBackdropProps> = ({ open, countdown, url, onClose, onManualRedirect }) => {
  return (
    <Backdrop open={open} onClick={onClose} sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}>
      <div style={{ textAlign: 'center' }}>
        <CircularProgress color="inherit" />
        <Typography variant="h6" sx={{ marginTop: 2 }}>
          Redirecting in {countdown} seconds...
        </Typography>
        <Button
          variant="contained"
          color="primary"
          onClick={onManualRedirect}
          sx={{ marginTop: 2 }}
        >
          Go Now
        </Button>
      </div>
    </Backdrop>
  );
};

export default RedirectBackdrop;
