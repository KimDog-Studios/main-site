"use client";

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { Container, Box, Typography } from '@mui/material';
import Navbar from './main/NavBar'; // Ensure the path is correct
import Link from 'next/link';
import styled, { keyframes, css } from 'styled-components';

// Define the pulsing and circular motion animation
const pulseAnimation = keyframes`
  0% {
    box-shadow: 0 0 0 4px #FF6F61; /* Initial color */
  }
  25% {
    box-shadow: 0 0 0 8px #FFC107; /* Intermediate color */
  }
  50% {
    box-shadow: 0 0 0 4px #FF8A80; /* Another intermediate color */
  }
  75% {
    box-shadow: 0 0 0 8px #FFD740; /* Final color */
  }
  100% {
    box-shadow: 0 0 0 4px #FF6F61; /* Back to initial color */
  }
`;

// Create a styled component with animation
const ImageContainer = styled.div<{ isHovered: boolean }>`
  position: relative;
  overflow: hidden;
  display: inline-block;
  border-radius: 8px; /* Rounded corners */
  transition: transform 1.0s ease;
  transform: ${({ isHovered }) => isHovered ? 'scale(1.05)' : 'scale(1)'};
  ${({ isHovered }) =>
    isHovered && css`
      animation: ${pulseAnimation} 1s infinite;
    `
  }
`;

const Mods: React.FC = () => {
  const [isHovered1, setIsHovered1] = useState<boolean>(false);
  const [isHovered2, setIsHovered2] = useState<boolean>(false);
  const [imageWidth, setImageWidth] = useState<number>(0);
  const imageRef = useRef<HTMLImageElement | null>(null);

  useEffect(() => {
    if (imageRef.current) {
      setImageWidth(imageRef.current.width);
    }
  }, []);

  return (
    <div>
      <Navbar />
      <Container sx={{ mt: 8 }}>
        <main className="min-h-screen flex flex-col p-8">
          <Box sx={{ mt: 4 }}>
            <div className="flex flex-row gap-8">
              {/* ETS 2 Mod */}
              <div className="flex flex-col items-start space-y-4">
                <h2 className="text-2xl font-bold">[ETS 2] KimDog's Network Mod Pack</h2>
                <Link href="/mods/ets2/kimdog-network-mod-pack">
                  <ImageContainer
                    isHovered={isHovered1}
                    onMouseEnter={() => setIsHovered1(true)}
                    onMouseLeave={() => setIsHovered1(false)}
                  >
                    <Image
                      src="https://raw.githubusercontent.com/KimDog-Studios/main-site/main/public/assets/mods/kimdog-optional-mod-pack/main-image.jpg"
                      alt="Mod Image"
                      width={276}
                      height={162}
                      ref={imageRef}
                      style={{ display: 'block', borderRadius: '8px' }} // Ensure image is displayed properly and rounded
                    />
                  </ImageContainer>
                </Link>
              </div>

              {/* ATS Mod */}
              <div className="flex flex-col items-start space-y-4">
                <h2 className="text-2xl font-bold">[ATS] KimDog's Mod Pack</h2>
                <Link href="/mods/ats/kimdog_optional_mod_pack">
                  <ImageContainer
                    isHovered={isHovered2}
                    onMouseEnter={() => setIsHovered2(true)}
                    onMouseLeave={() => setIsHovered2(false)}
                  >
                    <Image
                      src="https://raw.githubusercontent.com/KimDog-Studios/main-site/main/public/assets/mods/kimdog-optional-mod-pack/main-image.jpg"
                      alt="Mod Image"
                      width={276}
                      height={162}
                      ref={imageRef}
                      style={{ display: 'block', borderRadius: '8px' }} // Ensure image is displayed properly and rounded
                    />
                  </ImageContainer>
                </Link>
              </div>
            </div>
          </Box>
        </main>
      </Container>
    </div>
  );
};

export default Mods;