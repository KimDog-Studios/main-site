import React from 'react';
import { Backdrop, CircularProgress, Typography, Button, Box } from '@mui/material';

interface RedirectBackdropProps {
  open: boolean;
  url: string;
  onClose: () => void;
  countdown: number;
  onManualRedirect: () => void;
}

const RedirectBackdrop: React.FC<RedirectBackdropProps> = ({ open, url, onClose, countdown, onManualRedirect }) => {
  return (
    <Backdrop sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }} open={open}>
      <Box textAlign="center">
        <CircularProgress color="inherit" />
        <Typography variant="h6" sx={{ mt: 2 }}>
          Redirecting in {countdown} seconds...
        </Typography>
        <Typography variant="body1" sx={{ mt: 1 }}>
          If not redirected automatically, {onManualRedirect}
          <Button variant="contained" color="primary" onClick={onManualRedirect}>
            here
          </Button>.
        </Typography>
      </Box>
    </Backdrop>
  );
};

export default RedirectBackdrop;
