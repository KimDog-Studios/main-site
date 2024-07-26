"use client";

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { Button, Backdrop, CircularProgress, Container, Box, Accordion, AccordionSummary, AccordionDetails, Typography, Tooltip, Alert, Snackbar } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Navbar from '../components/NavBar'; // Adjust the path if necessary
import { SpeedInsights } from "@vercel/speed-insights/next"

const PAGE_SPEED_API_KEY = 'AIzaSyBKqjdtGThmzjSHpIX8YtOlDiN7ilnB-V0'; // Replace with your API Key

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [showRedirectBackdrop, setShowRedirectBackdrop] = useState(false); // Manage Redirect UI visibility
  const [alertOpen, setAlertOpen] = useState(false); // Manage Alert visibility
  const [alertMessage, setAlertMessage] = useState(''); // Manage Alert message
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
    setAlertMessage('The download link is being prepared.');
    setAlertOpen(true);
    setTimeout(() => {
      setShowRedirectBackdrop(true); // Show the redirect UI
      setTimeout(() => {
        window.open(mod1_redirectUrl, "_blank"); // Perform the redirect
        setShowRedirectBackdrop(false); // Hide the redirect UI
      }, 2000); // Adjust the timeout to match the alert duration
    }, 3000); // Delay before showing the redirect UI
  };

  const handleCloseAlert = () => {
    setAlertOpen(false);
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
                    sx={{ width: imageWidth, backgroundColor: '#333', color: '#fff' }} // Dark gray background
                  >
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon sx={{ color: '#fff' }} />}
                      aria-controls="panel1-content"
                      id="panel1-header"
                    >
                      <Typography>Mod Description</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography component="div">
                        <ul>
                          <li>Graphics Mod 2K Clouds</li>
                          <li>Engine Sounds</li>
                          <li>Interior Sounds</li>
                          <li>UI Changes</li>
                          <li>Realistic Physics and more!</li>
                        </ul>
                        <Typography component="div" sx={{ fontWeight: 'bold' }}>
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
          </Box>
        </main>
      </Container>

      <Snackbar
        open={alertOpen}
        autoHideDuration={6000}
        onClose={handleCloseAlert}
        action={
          <Button color="inherit" onClick={handleCloseAlert}>
            Close
          </Button>
        }
      >
        <Alert onClose={handleCloseAlert} severity="info" sx={{ width: '100%' }}>
          {alertMessage}
        </Alert>
      </Snackbar>

      <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={showRedirectBackdrop}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    </div>
  );
}
function setPageSpeedData(data: any): any {
  throw new Error('Function not implemented.');
}

