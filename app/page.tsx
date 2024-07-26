"use client";

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { Button, Backdrop, CircularProgress, Container, Box, Accordion, AccordionSummary, AccordionDetails, Typography, Tooltip } from '@mui/material';
import RedirectBackdrop from '../components/RedirectBackdrop'; // Adjust the path if necessary
import Navbar from '../components/NavBar'; // Adjust the path if necessary
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const PAGE_SPEED_API_KEY = 'AIzaSyBKqjdtGThmzjSHpIX8YtOlDiN7ilnB-V0'; // Replace with your API Key

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [open, setOpen] = useState(false);
  const [countdown, setCountdown] = useState(5);
  const [pageSpeedData, setPageSpeedData] = useState<any>(null);
  const [expanded, setExpanded] = useState<string | false>(false); // State for Accordion
  const [imageWidth, setImageWidth] = useState<number>(0); // State to store image width
  const imageRef = useRef<HTMLImageElement | null>(null); // Ref to access the image element
  const mod1_redirectUrl = "https://drive.google.com/drive/folders/1qMIuUpE7EE7gJtoBVYj09iRJTmCOnEKk?usp=sharing";

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (open) {
      const countdownInterval = setInterval(() => {
        setCountdown((prev) => {
          if (prev > 1) {
            return prev - 1;
          } else {
            clearInterval(countdownInterval);
            window.open(mod1_redirectUrl, "_blank");
            setOpen(false);
            return 0;
          }
        });
      }, 1000);
    }
  }, [open]);

  useEffect(() => {
    // Fetch PageSpeed Insights data
    fetch(`https://www.googleapis.com/pagespeedonline/v5/runPagespeed?url=${window.location.href}&key=${PAGE_SPEED_API_KEY}`)
      .then(response => response.json())
      .then(data => setPageSpeedData(data))
      .catch(error => console.error('Error fetching PageSpeed Insights:', error));
  }, []);

  useEffect(() => {
    // Set the image width once the image is loaded
    if (imageRef.current) {
      setImageWidth(imageRef.current.width);
    }
  }, []);

  const handleOpen = () => {
    setOpen(true);
    setCountdown(5);
  };

  const handleManualRedirect = () => {
    if (open) {
      window.open(mod1_redirectUrl, "_blank");
      setOpen(false);
    }
  };

  const handleAccordionChange = (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
    setExpanded(isExpanded ? panel : false);
  };

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

  return (
    <div>
      <Navbar />

      <Container sx={{ mt: 8 }}>
        <main className="min-h-screen flex flex-col p-8">
          <Box sx={{ mt: 4 }}>
            <div className="flex flex-col items-start space-y-4">
              <div className="flex flex-wrap gap-8">
                <div className="flex flex-col items-start space-y-4">
                  <h2 className="text-2xl font-bold">KimDog's Optional Mod Pack</h2>
                  <Image
                    src="https://raw.githubusercontent.com/KimDog-Studios/main-site/main/public/assets/freeman_cover.jpg"
                    alt="My Image"
                    width={276}
                    height={162}
                    className="rounded"
                    ref={imageRef} // Assign ref to the image
                    onLoad={() => {
                      if (imageRef.current) {
                        setImageWidth(imageRef.current.width);
                      }
                    }}
                  />
                  <Accordion
                    expanded={expanded === 'panel1'}
                    onChange={handleAccordionChange('panel1')}
                    sx={{ 
                      width: imageWidth,
                      backgroundColor: '#333', // Dark gray background
                      color: '#fff', // White text color
                      borderRadius: '8px', // Rounded corners
                      '&:before': {
                        display: 'none', // Remove default border
                      }
                    }}
                  >
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon sx={{ color: '#fff' }} />} // White icon color
                      aria-controls="panel1-content"
                      id="panel1-header"
                      sx={{ 
                        backgroundColor: '#444', // Slightly lighter gray for header
                        color: '#fff', // White text color
                        '& .MuiAccordionSummary-content': {
                          color: '#fff', // Ensure text color is white
                        },
                      }}
                    >
                      <Typography>Mod Description</Typography>
                    </AccordionSummary>
                    <AccordionDetails
                      sx={{ 
                        backgroundColor: '#333', // Dark gray background
                        color: '#fff', // White text color
                      }}
                    >
                      <Typography>
                        <ul>
                          <li>Graphics Mod 2K Clouds</li>
                          <li>Engine Sounds</li>
                          <li>Interior Sounds</li>
                          <li>UI Changes</li>
                          <li>Realistic Physics and more!</li>
                        </ul>
                        <Typography component="div" sx={{ fontWeight: 'bold', mt: 2 }}>
                          Pack Contains two .scs Files which need to go into your ATS Mod Folder!
                        </Typography>
                      </Typography>
                    </AccordionDetails>
                  </Accordion>
                  <Tooltip title={`Redirecting to: ${mod1_redirectUrl}`} arrow>
                    <Button
                      onClick={handleOpen}
                      variant="contained"
                      sx={{
                        backgroundColor: 'red',
                        color: 'white',
                        padding: '8px 16px',
                        borderRadius: '8px',
                        transition: 'transform 0.3s ease-in-out',
                        '&:hover': {
                          transform: 'scale(1.15)',
                          backgroundColor: 'darkred',
                        },
                      }}
                    >
                      Download
                    </Button>
                  </Tooltip>
                </div>
              </div>
            </div>

            <RedirectBackdrop
              open={open}
              countdown={countdown}
              url={mod1_redirectUrl}
              onClose={() => setOpen(false)}
              onManualRedirect={handleManualRedirect}
            />
          </Box>
        </main>
      </Container>
    </div>
  );
}
