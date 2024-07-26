"use client";

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { Container, Box, Typography } from '@mui/material';
import Navbar from './main/NavBar'; // Ensure the path is correct
import Link from 'next/link';
import styles from '../css/Main.module.css'; // Import the CSS module

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
      <Container className={styles.mainContainer}>
        <main className="min-h-screen flex flex-col p-8">
          <Box sx={{ mt: 4 }}>
            <div className="flex flex-row gap-8">
              {/* ETS 2 Mod */}
              <div className="flex flex-col items-start space-y-4">
                <h2 className={styles.header}>[ETS 2] KimDog's Network Mod Pack</h2>
                <Link href="/mods/ets2/kimdog-network-mod-pack">
                  <div
                    className={`${styles.imageContainer} ${isHovered1 ? styles.imageContainerHovered : ''}`}
                    onMouseEnter={() => setIsHovered1(true)}
                    onMouseLeave={() => setIsHovered1(false)}
                  >
                    <Image
                      src="https://raw.githubusercontent.com/KimDog-Studios/main-site/main/public/assets/mods/kimdog-optional-mod-pack/main-image.jpg"
                      alt="Mod Image"
                      width={276}
                      height={162}
                      ref={imageRef}
                      className={styles.image}
                    />
                  </div>
                </Link>
              </div>

              {/* ATS Mod */}
              <div className="flex flex-col items-start space-y-4">
                <h2 className={styles.header}>[ATS] KimDog's Mod Pack</h2>
                <Link href="/mods/ats/kimdog_optional_mod_pack">
                  <div
                    className={`${styles.imageContainer} ${isHovered2 ? styles.imageContainerHovered : ''}`}
                    onMouseEnter={() => setIsHovered2(true)}
                    onMouseLeave={() => setIsHovered2(false)}
                  >
                    <Image
                      src="https://raw.githubusercontent.com/KimDog-Studios/main-site/main/public/assets/mods/kimdog-optional-mod-pack/main-image.jpg"
                      alt="Mod Image"
                      width={276}
                      height={162}
                      ref={imageRef}
                      className={styles.image}
                    />
                  </div>
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
