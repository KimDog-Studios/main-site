import * as React from 'react';
import { Dialog, DialogContent, Typography, Button, CircularProgress } from '@mui/material';
import styles from '../../css/Main.module.css'; // Import the CSS module

interface RedirectBackdropProps {
  open: boolean;
  countdown: number;
  url: string;
  onClose: () => void;
  onManualRedirect: () => void;
}

const RedirectBackdrop: React.FC<RedirectBackdropProps> = ({ open, countdown, onClose, onManualRedirect }) => {
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
      <DialogContent className={styles.dialogContent}>
        <CircularProgress color="inherit" />
        <Typography variant="h6" className={styles.typographyHeading}>
          Redirecting in {countdown} seconds...
        </Typography>
        <Typography variant="body1" className={styles.typographyBody}>
          If not redirected automatically,{' '}
          <Button onClick={onManualRedirect} className={styles.button}>
            click here
          </Button>.
        </Typography>
      </DialogContent>
    </Dialog>
  );
};

export default RedirectBackdrop;
