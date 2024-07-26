"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Button, Typography, Backdrop, CircularProgress, Container } from '@mui/material';
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

  const handleOpen = () => {
    setOpen(true);

    // Reset countdown and handle redirection
    setCountdown(5); // Reset countdown time to 5 seconds
    setTimeout(() => {
      setOpen(false); // Close the backdrop
      window.open(mod1_redirectUrl, "_blank"); // Redirect to new page
    }, 5 * 1000); // Set delay to countdown time in milliseconds
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
      <Container sx={{ mt: 4 }}>
        <main className="min-h-screen flex flex-col p-8">
          <div className="flex flex-col items-start space-y-4">
            <div className="flex flex-wrap gap-8">
              <div className="flex flex-col items-start space-y-4">
                <h2 className="text-2xl font-bold">KimDog&apos;s LLCC Optional Mod Pack</h2>
                <Image
                  src="https://raw.githubusercontent.com/KimDog-Studios/main-site/main/public/assets/freeman_cover.jpg"
                  alt="My Image"
                  width={276}
                  height={162}
                  className="rounded"
                />
                <p>This pack contains Graphics and other Tweaks!</p>
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
                <h2 className="text-2xl font-bold">KimDog&apos;s LLCC Optional Mod Pack</h2>
                <Image
                  src="https://raw.githubusercontent.com/KimDog-Studios/main-site/main/public/assets/freeman_cover.jpg"
                  alt="My Image"
                  width={276}
                  height={162}
                  className="rounded"
                />
                <p>This pack contains Graphics and other Tweaks!</p>
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

            {/* Redirect Backdrop with Spinner and Countdown */}
            <RedirectBackdrop
              open={open}
              mod1_redirectUrl={mod1_redirectUrl}
              onClose={() => setOpen(false)}
              countdown={countdown}
            />
          </div>
        </main>
      </Container>
    </div>
  );
}
