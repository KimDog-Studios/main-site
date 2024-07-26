import React, { useEffect, useState } from 'react';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

interface RedirectBackdropProps {
  open: boolean;
  redirectUrl: string;
  onClose: () => void;
  countdown: number; // Add countdown as a prop
}

const RedirectBackdrop: React.FC<RedirectBackdropProps> = ({ open, redirectUrl, onClose, countdown }) => {
  const [timeLeft, setTimeLeft] = useState(countdown);

  useEffect(() => {
    if (open) {
      setTimeLeft(countdown); // Reset timeLeft when `open` changes
      const interval = setInterval(() => {
        setTimeLeft((prev) => {
          if (prev <= 1) {
            clearInterval(interval);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);

      return () => clearInterval(interval); // Cleanup on component unmount
    }
  }, [open, countdown]);

  return (
    <Backdrop
      sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
      open={open}
      onClick={onClose}
    >
      <div style={{ textAlign: 'center' }}>
        <CircularProgress color="primary" sx={{ color: 'blue' }} /> {/* Set spinner color to blue */}
        <Typography variant="h6" sx={{ marginTop: 2 }}>
          Redirecting to <Link href={redirectUrl} target="_blank" rel="noopener noreferrer" color="inherit">{redirectUrl}</Link>...
        </Typography>
        <Typography variant="body2" sx={{ marginTop: 1 }}>
          If you are not redirected automatically in {timeLeft} seconds, <Link href={redirectUrl} target="_blank" rel="noopener noreferrer" color="inherit">click here</Link>.
        </Typography>
      </div>
    </Backdrop>
  );
};

export default RedirectBackdrop;
