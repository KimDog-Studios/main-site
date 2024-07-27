"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { Button, Container, Box, Typography, Tooltip, Alert, Backdrop, CircularProgress } from '@mui/material';
import Navbar from '@/components/[UI]NavBar'; // Ensure the path is correct
import styles from '@/css/Main.module.css'; // Import the CSS module
import { TypingEffectETS2KimDogNetwork } from '@/components/[API]MainFunctions';
import BreadcrumbsComponent from '@/components/[UI]Breadcrumbs';

const Ets2KimDog_Network_Mod_DetailPage: React.FC = () => {
  const [openAlert, setOpenAlert] = useState(false);
  const [countdown, setCountdown] = useState<number>(5); // Countdown in seconds
  const [showRedirectUI, setShowRedirectUI] = useState(false);
  const [isRedirecting, setIsRedirecting] = useState(false);

  useEffect(() => {
    let timer: NodeJS.Timeout;

    if (openAlert && countdown > 0) {
      timer = setInterval(() => {
        setCountdown(prev => prev - 1);
      }, 1000);
    }

    if (countdown === 0) {
      setOpenAlert(false);
      setShowRedirectUI(true);

      // Redirect after a 1-second delay
      setTimeout(() => {
        if (showRedirectUI && !isRedirecting) {
          setIsRedirecting(true);
          window.open("https://drive.google.com/file/d/1f1xUClVc6dmMX-U4EqrrWf6OpAuU8qpz/view?usp=sharing", "_blank");
          setShowRedirectUI(false); // Clean up redirect UI state
        }
      }, 1000);
    }

    return () => clearInterval(timer); // Clean up interval on unmount or when dependencies change
  }, [openAlert, countdown, showRedirectUI, isRedirecting]);

  const handleDownloadClick = () => {
    if (!isRedirecting) { // Prevent multiple redirections
      setOpenAlert(true);
      setCountdown(5); // Reset countdown to 5 seconds
      setIsRedirecting(false); // Reset redirecting state
    }
  };

  // Construct the GitHub raw image URLs
  const images = Array.from({ length: 5 }, (_, index) => 
    `https://raw.githubusercontent.com/KimDog-Studios/main-site/main/public/assets/templates/ats/${index + 1}.png`
  );

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

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

  const breadcrumbItems = [
    { label: 'Home', href: '/' },
    { label: 'ETS 2 Mods'},
    { label: "KimDog's Network Mod Pack" }
  ];

  return (
    <div className={styles.boldText}>
      <TypingEffectETS2KimDogNetwork/>
      <Navbar />

      {/* Breadcrumbs */}
      <div className="flex justify-center">
      <BreadcrumbsComponent items={breadcrumbItems} className="breadcrumb-position" />
      </div>

      <Container className={styles.mainContainer}>
        <main className="flex flex-col p-4 sm:p-8">
          <Box
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', sm: 'row' },
              gap: 4,
              mb: 4,
              alignItems: 'flex-start'
            }}
          >
            {/* Description and Download Button */}
            <Box className={styles.descriptionBox}>
              <Typography variant="h6" className="text-lg font-semibold mb-2">
                Mod Description
              </Typography>
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                  gap: 2
                }}
              >
                <Typography className="mb-4">
                  This template Pack Contains all Skinning Templates for ATS and ETS 2!
                </Typography>
                <Typography className="mb-4">
                  Packed by KimDog-Studios
                </Typography>
                <Tooltip title="Download Mod Pack" placement="right">
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={handleDownloadClick}
                    className={styles.downloadButton}
                  >
                    Download
                  </Button>
                </Tooltip>
              </Box>
              {openAlert && (
                <Alert severity="info" onClose={() => setOpenAlert(false)} className={styles.alertInfo}>
                  Downloading will start in {countdown} seconds...
                </Alert>
              )}
              {showRedirectUI && (
                <Alert severity="success" className={styles.alertSuccess}>
                  Redirecting to download link...
                </Alert>
              )}
            </Box>
          </Box>

          {/* Screenshots Section */}
          <Box>
            <Typography variant="h6" className="text-lg font-semibold mb-2">
              ATS Templates:
            </Typography>
            <div className={styles.screenshotsGrid}>
              {images.map((image, index) => (
                <div key={index} style={{ position: 'relative', width: '100%', height: 'auto' }}>
                  <Image
                    src={image}
                    alt={`Screenshot ${index + 1}`}
                    layout="responsive"
                    width={487} // Width of the image
                    height={1143} // Height of the image
                    style={{ maxWidth: '100%', height: 'auto' }}
                  />
                </div>
              ))}
            </div>
          </Box>
        </main>
      </Container>
    </div>
  );
};

export default Ets2KimDog_Network_Mod_DetailPage;