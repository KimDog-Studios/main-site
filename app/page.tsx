"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Button, Backdrop, CircularProgress, Container, Box } from '@mui/material';
import RedirectBackdrop from '../components/RedirectBackdrop'; // Adjust the path if necessary
import Navbar from '../components/NavBar'; // Adjust the path if necessary

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [open, setOpen] = useState(false);
  const [countdown, setCountdown] = useState(5); // Set the countdown time in seconds
  const mod1_redirectUrl = "https://example.com"; // Replace with your URL

  useEffect(() => {
    // Simulate page loading
    const timer = setTimeout(() => {
      setLoading(false); // Hide spinner after 2 seconds
    }, 2000); // Adjust the delay as needed

    return () => clearTimeout(timer); // Cleanup on unmount
  }, []);

  useEffect(() => {
    if (open) {
      const countdownInterval = setInterval(() => {
        setCountdown((prev) => {
          if (prev > 1) {
            return prev - 1;
          } else {
            clearInterval(countdownInterval);
            window.open(mod1_redirectUrl, "_blank"); // Redirect to new page
            setOpen(false); // Close the backdrop after redirect
            return 0;
          }
        });
      }, 1000); // Update countdown every second
    }
  }, [open]);

  const handleOpen = () => {
    setOpen(true);
    setCountdown(5); // Reset countdown time to 5 seconds
  };

  const handleManualRedirect = () => {
    if (open) {
      window.open(mod1_redirectUrl, "_blank");
      setOpen(false);
    }
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
      {/* Navbar Component */}
      <Navbar />

      {/* Main Content */}
      <Container sx={{ mt: 8 }}> {/* Adjust the margin-top here */}
        <main className="min-h-screen flex flex-col p-8">
          <Box sx={{ mt: 4 }}> {/* Additional margin can be adjusted here */}
            <div className="flex flex-col items-start space-y-4">
              <div className="flex flex-wrap gap-8">
                <div className="flex flex-col items-start space-y-4">
                  <h2 className="text-2xl font-bold">Test</h2>
                  <Image
                    src="https://raw.githubusercontent.com/KimDog-Studios/main-site/main/public/assets/freeman_cover.jpg"
                    alt="My Image"
                    width={276}
                    height={162}
                    className="rounded"
                  />
                  <p>Test</p>
                  <Button
                    onClick={handleOpen}
                    variant="contained"
                    sx={{
                      backgroundColor: 'red', // Keep the button red
                      color: 'white',
                      padding: '8px 16px',
                      borderRadius: '8px',
                      transition: 'transform 0.3s ease-in-out',
                      '&:hover': {
                        transform: 'scale(1.15)', // Scale up on hover
                        backgroundColor: 'darkred', // Slightly darker red on hover
                      },
                    }}
                  >
                    Download
                  </Button>
                </div>

                <div className="flex flex-col items-start space-y-4">
                  <h2 className="text-2xl font-bold">Test</h2>
                  <Image
                    src="https://raw.githubusercontent.com/KimDog-Studios/main-site/main/public/assets/freeman_cover.jpg"
                    alt="My Image"
                    width={276}
                    height={162}
                    className="rounded"
                  />
                  <p>Test</p>
                  <Button
                    onClick={handleOpen}
                    variant="contained"
                    sx={{
                      backgroundColor: 'red', // Keep the button red
                      color: 'white',
                      padding: '8px 16px',
                      borderRadius: '8px',
                      transition: 'transform 0.3s ease-in-out',
                      '&:hover': {
                        transform: 'scale(1.15)', // Scale up on hover
                        backgroundColor: 'darkred', // Slightly darker red on hover
                      },
                    }}
                  >
                    Download
                  </Button>
                </div>
              </div>
            </div>

            {/* Redirect Backdrop with Spinner and Countdown */}
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
