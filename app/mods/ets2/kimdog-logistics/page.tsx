"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { Button, Container, Box, Typography, Tooltip, Alert, Backdrop, CircularProgress } from '@mui/material';
import Navbar from '@/components/[API]NavBar'; // Ensure the path is correct
import styles from '@/css/Main.module.css'; // Import the CSS module
import { TypingEffectKimDoglogisticsETS2 } from '@/components/[API]MainFunctions';
import BreadcrumbsComponent from '@/components/Breadcrumbs';

const Mod_DetailPage: React.FC = () => {
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
          window.open("https://drive.google.com/file/d/1B0x5e4zPx8RaxK1aduHPZ6kgnN9jBI0_/view?usp=sharing", "_blank");
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
  const AITruckimages = Array.from({ length: 12 }, (_, index) => 
    `https://raw.githubusercontent.com/KimDog-Studios/main-site/main/public/assets/mods/kimdog-logistics-ets2/${index + 1}.png`
  );

  // Construct the GitHub raw image URLs
  const Playerownedimages = Array.from({ length: 2 }, (_, index) => 
    `https://raw.githubusercontent.com/KimDog-Studios/main-site/main/public/assets/mods/kimdog-logistics-ets2/playerowned/${index + 1}.png`
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
    { label: 'ETS2 Mods'},
    { label: "KimDog's Logistics" }
  ];

  return (
    <div className={styles.boldText}>
      <TypingEffectKimDoglogisticsETS2/>
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
                  This logistics pack offers a variety of improvements and enhancements to the existing game, such as:
                  Skinned AI!

                  Coming in the Future Skinned Companies and more!
                </Typography>
                <Typography className="mb-4">
                  Enjoy the new features and enhancements! Made by KimDog-Studios!
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
              AI Trucks:
            </Typography>
            <div className={styles.screenshotsGrid}>
              {AITruckimages.map((AiTruckimage, index) => (
                <div key={index} style={{ position: 'relative', width: '100%', height: 'auto' }}>
                  <Image
                    src={AiTruckimage}
                    alt={`Screenshot ${index + 1}`}
                    layout="responsive"
                    width={2560} // Width of the image
                    height={1440} // Height of the image
                    style={{ maxWidth: '100%', height: 'auto' }}
                  />
                </div>
              ))}
            </div>
            </Box>

            {/* Screenshots Section */}
          <Box>
            <Typography variant="h6" className="text-lg font-semibold mb-2">
              Player Owned:
            </Typography>
            <div className={styles.screenshotsGrid}>
              {Playerownedimages.map((Playerownedimage, index) => (
                <div key={index} style={{ position: 'relative', width: '100%', height: 'auto' }}>
                  <Image
                    src={Playerownedimage}
                    alt={`Screenshot ${index + 1}`}
                    layout="responsive"
                    width={1738} // Width of the image
                    height={904} // Height of the image
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

export default Mod_DetailPage;