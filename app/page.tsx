"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Button, Backdrop, CircularProgress, Container, Box } from '@mui/material';
import RedirectBackdrop from '../components/RedirectBackdrop'; // Adjust the path if necessary
import Navbar from '../components/NavBar'; // Adjust the path if necessary

const PAGE_SPEED_API_KEY = 'YOUR_GOOGLE_API_KEY'; // Replace with your API Key

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [open, setOpen] = useState(false);
  const [countdown, setCountdown] = useState(5);
  const [pageSpeedData, setPageSpeedData] = useState<any>(null);
  const mod1_redirectUrl = "https://example.com";

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
