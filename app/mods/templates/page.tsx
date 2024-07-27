"use client";

import React, { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { Button, Container, Box, Typography, Tooltip, Alert, Backdrop, CircularProgress } from '@mui/material';
import Navbar from '@/components/[UI]NavBar';
import styles from '@/css/Main.module.css';
import { TypingEffectETS2KimDogNetwork } from '@/components/[API]MainFunctions';
import BreadcrumbsComponent from '@/components/[UI]Breadcrumbs';
import {images} from '@/components/[UI]TemplateImages';

const ImageGrid = ({ images }) => (
  <Box>
    <Typography variant="h6" className="text-lg font-semibold mb-2">ATS Templates:</Typography>
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', justifyContent: 'space-around' }}>
      {images.map((image, index) => (
        <div key={index} style={{ width: '30%', textAlign: 'center', backgroundColor: 'white', padding: '10px', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
          <Typography variant="body1" style={{ marginBottom: '8px', color: 'black', fontWeight: 'bold' }}>{image.name}</Typography>
          <div style={{ position: 'relative', width: '100%', height: 'auto', backgroundColor: 'white', padding: '10px', borderRadius: '8px' }}>
            <Image src={image.url} alt={image.name} layout="responsive" width={500} height={500} style={{ maxWidth: '100%', height: 'auto', backgroundColor: 'white' }} />
          </div>
        </div>
      ))}
    </div>
  </Box>
);

const Ets2KimDog_Network_Mod_DetailPage: React.FC = () => {
  const [openAlert, setOpenAlert] = useState(false);
  const [countdown, setCountdown] = useState(5);
  const [showRedirectUI, setShowRedirectUI] = useState(false);
  const [isRedirecting, setIsRedirecting] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!openAlert || countdown === 0) return;

    const timer = setInterval(() => setCountdown(prev => prev - 1), 1000);
    if (countdown === 1) {
      setOpenAlert(false);
      setShowRedirectUI(true);
      setTimeout(() => {
        if (!isRedirecting) {
          setIsRedirecting(true);
          window.open("https://drive.google.com/file/d/1f1xUClVc6dmMX-U4EqrrWf6OpAuU8qpz/view?usp=sharing", "_blank");
          setShowRedirectUI(false);
        }
      }, 1000);
    }

    return () => clearInterval(timer);
  }, [openAlert, countdown, isRedirecting]);

  const handleDownloadClick = useCallback(() => {
    if (!isRedirecting) {
      setOpenAlert(true);
      setCountdown(5);
      setIsRedirecting(false);
    }
  }, [isRedirecting]);

  if (loading) {
    return (
      <Backdrop sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }} open={true}>
        <CircularProgress color="inherit" />
      </Backdrop>
    );
  }

  const breadcrumbItems = [
    { label: 'Home', href: '/' },
    { label: 'Modding Templates' },
    { label: "ATS + ETS 2 Templates" }
  ];

  return (
    <div className={styles.boldText}>
      <TypingEffectETS2KimDogNetwork />
      <Navbar />

      <div className="flex justify-center">
        <BreadcrumbsComponent items={breadcrumbItems} className="breadcrumb-position" />
      </div>

      <Container className={styles.mainContainer}>
        <main className="flex flex-col p-4 sm:p-8">
          <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, gap: 4, mb: 4, alignItems: 'flex-start' }}>
            <Box className={styles.descriptionBox}>
              <Typography variant="h6" className="text-lg font-semibold mb-2">Mod Description</Typography>
              <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: 2 }}>
                <Typography className="mb-4">This template Pack Contains all Skinning Templates for ATS and ETS 2!</Typography>
                <Typography className="mb-4">Packed by KimDog-Studios</Typography>
                <Tooltip title="Download Mod Pack" placement="right">
                  <Button variant="contained" color="primary" onClick={handleDownloadClick} className={styles.downloadButton}>Download</Button>
                </Tooltip>
              </Box>
              {openAlert && <Alert severity="info" onClose={() => setOpenAlert(false)} className={styles.alertInfo}>Downloading will start in {countdown} seconds...</Alert>}
              {showRedirectUI && <Alert severity="success" className={styles.alertSuccess}>Redirecting to download link...</Alert>}
            </Box>
          </Box>

          <ImageGrid images={images} />
        </main>
      </Container>
    </div>
  );
};

export default Ets2KimDog_Network_Mod_DetailPage;
