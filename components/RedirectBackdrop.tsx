import React from 'react';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

interface RedirectBackdropProps {
  open: boolean;
  countdown: number;
  url: string;
  onClose: () => void;
  onManualRedirect: () => void;
}

const RedirectBackdrop: React.FC<RedirectBackdropProps> = ({ open, countdown, url, onClose, onManualRedirect }) => {
  return (
    <Backdrop
      sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
      open={open}
    >
      <CircularProgress color="inherit" />
      <Box sx={{ ml: 2 }}>
        <Typography variant="h6">
          Redirecting to <a href={url} target="_blank" rel="noopener noreferrer">{url}</a> in {countdown} seconds
        </Typography>
        <Typography variant="body1" sx={{ mt: 1 }}>
          If not redirected automatically, 
          <Button variant="contained" color="primary" onClick={onManualRedirect} sx={{ ml: 1 }}>
            click here
          </Button>.
        </Typography>
      </Box>
    </Backdrop>
  );
};

export default RedirectBackdrop;
