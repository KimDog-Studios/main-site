"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { Button, Container, Box, Accordion, AccordionSummary, AccordionDetails, Typography, Tooltip, Alert } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Navbar from '../../../components/NavBar'; // Ensure the path is correct

const AtsModsPage: React.FC = () => {
  const [expanded, setExpanded] = useState<string | false>(false);
  const [openAlert, setOpenAlert] = useState(false);
  const [countdown, setCountdown] = useState<number>(5); // Countdown in seconds
  const [showRedirectUI, setShowRedirectUI] = useState(false);
  const [isRedirecting, setIsRedirecting] = useState(false);

  const imageWidth = 276; // Width of the image

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
        if (showRedirectUI && !isRedirecting) { // Ensure we are still in redirect UI state and not already redirecting
          setIsRedirecting(true);
          window.open("https://drive.google.com/drive/folders/1qMIuUpE7EE7gJtoBVYj09iRJTmCOnEKk?usp=sharing", "_blank");
          setShowRedirectUI(false); // Clean up redirect UI state
        }
      }, 1000);
    }

    return () => clearInterval(timer); // Clean up interval on unmount or when dependencies change
  }, [openAlert, countdown, showRedirectUI, isRedirecting]);

  const handleAccordionChange = (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
    setExpanded(isExpanded ? panel : false);
  };

  const handleDownloadClick = () => {
    if (!isRedirecting) { // Prevent multiple redirections
      setOpenAlert(true);
      setCountdown(5); // Reset countdown to 5 seconds
      setIsRedirecting(false); // Reset redirecting state
    }
  };

  return (
    <div>
      <Navbar />
      <Container sx={{ mt: 8 }}>
        <main className="min-h-screen flex flex-col p-8">
          <Box sx={{ mt: 4 }}>
            <div className="flex flex-col items-start space-y-4">
              <div className="flex flex-wrap gap-8">
                <div className="flex flex-col items-start space-y-4">
                  <h2 className="text-2xl font-bold">KimDog's ATS Mod Pack</h2>
                  <Image
                    src="https://raw.githubusercontent.com/KimDog-Studios/main-site/main/public/assets/freeman_cover.jpg"
                    alt="Mod Image"
                    width={imageWidth}
                    height={162}
                  />
                  <Accordion 
                    expanded={expanded === 'panel1'} 
                    onChange={handleAccordionChange('panel1')}
                    sx={{ width: imageWidth, backgroundColor: '#333' }} // Dark gray background
                  >
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel1bh-content"
                      id="panel1bh-header"
                      sx={{ backgroundColor: '#333' }} // Dark gray background
                    >
                      <Typography sx={{ width: '33%', flexShrink: 0, color: 'white' }}>
                        Mod Details
                      </Typography>
                      <Typography sx={{ color: 'lightgray' }}>Click to expand for more information</Typography>
                    </AccordionSummary>
                    <AccordionDetails
                      sx={{ backgroundColor: '#333', color: 'white' }} // Dark gray background
                    >
                      <Typography>
                        This mod pack contains various optional modifications that can enhance your gaming experience.
                      </Typography>
                      <Typography>
                        All mods are designed to be fully compatible with the latest version of the game.
                      </Typography>
                      <Typography>
                        Enjoy the new features and enhancements!
                      </Typography>
                    </AccordionDetails>
                  </Accordion>
                  <Tooltip title="Download Mod Pack" placement="right">
                    <Button variant="contained" color="primary" onClick={handleDownloadClick}>
                      Download
                    </Button>
                  </Tooltip>
                  {openAlert && (
                    <Alert severity="info" onClose={() => setOpenAlert(false)}>
                      Downloading will start in {countdown} seconds...
                    </Alert>
                  )}
                  {showRedirectUI && (
                    <Alert severity="success">
                      Redirecting to download link...
                    </Alert>
                  )}
                </div>
              </div>
            </div>
          </Box>
        </main>
      </Container>
    </div>
  );
};

export default AtsModsPage;
