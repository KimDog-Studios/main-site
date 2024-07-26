"use client";

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { Button, Container, Box, Accordion, AccordionSummary, AccordionDetails, Typography, Tooltip, Alert } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Navbar from '../../../components/NavBar'; // Ensure the path is correct
import Link from 'next/link';

const AtsModsPage: React.FC = () => {
  const [expanded, setExpanded] = useState<string | false>(false);
  const [imageWidth, setImageWidth] = useState<number>(0);
  const imageRef = useRef<HTMLImageElement | null>(null);

  useEffect(() => {
    if (imageRef.current) {
      setImageWidth(imageRef.current.width);
    }
  }, []);

  const handleAccordionChange = (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
    setExpanded(isExpanded ? panel : false);
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
                  <Link href="/mods/ats/kimdog_optional_mod_pack">
                    <Image
                      src="https://raw.githubusercontent.com/KimDog-Studios/main-site/main/public/assets/freeman_cover.jpg"
                      alt="Mod Image"
                      width={276}
                      height={162}
                      ref={imageRef}
                    />
                  </Link>
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
