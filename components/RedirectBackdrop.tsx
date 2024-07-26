import * as React from 'react';
import { Dialog, DialogContent, Typography, Button, CircularProgress } from '@mui/material';

interface RedirectBackdropProps {
  open: boolean;
  countdown: number;
  url: string;
  onClose: () => void;
  onManualRedirect: () => void;
}

const RedirectBackdrop: React.FC<RedirectBackdropProps> = ({ open, countdown, url, onClose, onManualRedirect }) => {
  return (
    <Dialog
      open={open}
      onClose={onClose}
      PaperProps={{
        style: {
          backgroundColor: 'rgba(0, 0, 0, 0.8)',
          boxShadow: 'none',
        },
      }}
    >
      <DialogContent>
        <Typography variant="h6" color="white">
          Redirecting in {countdown} seconds...
        </Typography>
        <CircularProgress color="inherit" />
        <Typography variant="body1" color="white" sx={{ mt: 2 }}>
          If not redirected automatically, <Button onClick={onManualRedirect} color="primary">click here</Button>.
        </Typography>
      </DialogContent>
    </Dialog>
  );
};

export default RedirectBackdrop;
