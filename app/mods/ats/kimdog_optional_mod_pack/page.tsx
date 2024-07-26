"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { Button, Container, Box, Typography, Tooltip, Alert } from '@mui/material';
import Navbar from '../../../../components/NavBar'; // Ensure the path is correct

const ModDetailPage: React.FC = () => {
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
          window.open("https://drive.google.com/drive/folders/1qMIuUpE7EE7gJtoBVYj09iRJTmCOnEKk?usp=sharing", "_blank");
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
  const images = Array.from({ length: 24 }, (_, index) => 
    `https://raw.githubusercontent.com/KimDog-Studios/main-site/main/public/assets/mods/kimdog-optional-mod-pack/engines/${index + 1}.png`
  );

  return (
    <div style={{ fontWeight: 'bold' }}> {/* Make all text bold */}
      <Navbar />
      <Container sx={{ mt: 8 }}>
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
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-start',
                backgroundColor: 'rgba(0, 0, 0, 0.7)',
                color: 'white',
                p: 2,
                borderRadius: 2,
                textAlign: 'center',
                flexGrow: 1,
                width: { xs: '100%', sm: 'auto' }
              }}
            >
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
                  This mod pack contains various optional modifications that can enhance your gaming experience.
                  Down below is some pictures of all the Engines in the Pack with many more things that's not shown.
                  Pack Contains:
                  Engines,
                  Transmissions,
                  Physics,
                  Mirror FOV,
                  and more!
                </Typography>
                <Typography className="mb-4">
                  Enjoy the new features and enhancements! Made by KimDog-Studios!
                </Typography>
                <Tooltip title="Download Mod Pack" placement="right">
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={handleDownloadClick}
                    sx={{
                      position: 'relative',
                      overflow: 'hidden',
                      width: { xs: '100%', sm: 'auto' },
                      background: 'linear-gradient(45deg, #FF6F61 30%, #FFC107 90%)',
                      borderRadius: 3,
                      boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
                      color: 'white',
                      fontWeight: 'bold',
                      textTransform: 'none',
                      transition: 'background 0.3s, transform 0.3s',
                      '&:hover': {
                        background: 'linear-gradient(45deg, #FF8A80 30%, #FFD740 90%)',
                        transform: 'scale(1.05)',
                        '&::before': {
                          transform: 'scale(1.5)',
                          opacity: 1
                        }
                      },
                      '&::before': {
                        content: '""',
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        border: '2px solid #FFC107',
                        borderRadius: '50%',
                        transition: 'transform 0.3s, opacity 0.3s',
                        transform: 'scale(0)',
                        opacity: 0,
                        zIndex: 1
                      }
                    }}
                  >
                    Download
                  </Button>
                </Tooltip>
              </Box>
              {openAlert && (
                <Alert severity="info" onClose={() => setOpenAlert(false)} sx={{ mt: 2 }}>
                  Downloading will start in {countdown} seconds...
                </Alert>
              )}
              {showRedirectUI && (
                <Alert severity="success" sx={{ mt: 2 }}>
                  Redirecting to download link...
                </Alert>
              )}
            </Box>
          </Box>

          {/* Screenshots Section */}
          <Box>
            <Typography variant="h6" className="text-lg font-semibold mb-2">
              Screenshots
            </Typography>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                gap: '16px',
                padding: '8px 0',
              }}
            >
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

export default ModDetailPage;
