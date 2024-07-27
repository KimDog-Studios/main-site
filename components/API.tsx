"use client";
// app/components/TypingEffect.tsx
import Typewriter from "typewriter-effect";
import React, { useState, useEffect, useRef } from "react";
import {
  Container,
  Box,
  Typography,
  Dialog,
  Button,
  CircularProgress,
  DialogContent,
  Backdrop,
} from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import styles from "../css/Main.module.css"; // Import the CSS module

// Mods
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
      <Container className={styles.mainContainer}>
        {/* ETS 2 KimDog Network Mod Pack */}
        <main className="min-h-screen flex flex-col p-8">
          <Box sx={{ mt: 4 }}>
            <div className="flex flex-row gap-8">
              {/* ETS 2 Mod */}
              <div className="flex flex-col items-start space-y-4">
                <h2 className={styles.header}>
                  [ETS 2] KimDog's Network Mod Pack
                </h2>
                <Link href="/mods/ets2/kimdog-network-mod-pack">
                  <div
                    className={`${styles.imageContainer} ${
                      isHovered1 ? styles.imageContainerHovered : ""
                    }`}
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

              {/* ATS Mod Mod Pack */}
              <div className="flex flex-col items-start space-y-4">
                <h2 className={styles.header}>[ATS] KimDog's Mod Pack</h2>
                <Link href="/mods/ats/kimdog_optional_mod_pack">
                  <div
                    className={`${styles.imageContainer} ${
                      isHovered2 ? styles.imageContainerHovered : ""
                    }`}
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

// TypingEffectATSModPack Component
const TypingEffectATSModPack: React.FC = () => {
  return (
    <Box sx={{ textAlign: "center", mt: 8 }}>
      <Typography variant="h2" component="h1" gutterBottom>
        <Typewriter
          options={{
            loop: true, // Enables infinite looping
            delay: 100, // Adjust typing speed here
          }}
          onInit={(typewriter) => {
            typewriter
              .typeString("KimDog's ATS Mod Pack")
              .pauseFor(2000)
              .deleteAll()
              .typeString("Last updated: 25.7.24")
              .pauseFor(2000)
              .deleteAll()
              .typeString("MP Optional")
              .pauseFor(2000)
              .deleteAll()
              .start();
          }}
        />
      </Typography>
    </Box>
  );
};

// TypingEffectHomePage Component
const TypingEffectHomePage: React.FC = () => {
  return (
    <Box sx={{ textAlign: "center", mt: 8 }}>
      <Typography variant="h2" component="h1" gutterBottom>
        <Typewriter
          options={{
            loop: true, // Enables infinite looping
            delay: 100, // Adjust typing speed here
          }}
          onInit={(typewriter) => {
            typewriter
              .typeString("Welcome to KimDog's Modding Site!")
              .pauseFor(2000)
              .deleteAll()
              .typeString("Explore our mod packs and more!")
              .pauseFor(2000)
              .deleteAll()
              .typeString(
                "We aim to keep all of our mod Packs upto date when the Game Gets a Major Update!"
              )
              .pauseFor(2000)
              .deleteAll()
              .typeString("Report all Bugs/Errors into the Discord Server!")
              .pauseFor(2000)
              .deleteAll()
              .start();
          }}
        />
      </Typography>
    </Box>
  );
};

// TypingEffectETS2KimDogNetwork Component
const TypingEffectETS2KimDogNetwork: React.FC = () => {
  return (
    <Box sx={{ textAlign: "center", mt: 8 }}>
      <Typography variant="h2" component="h1" gutterBottom>
        <Typewriter
          options={{
            loop: true, // Enables infinite looping
            delay: 100, // Adjust typing speed here
          }}
          onInit={(typewriter) => {
            typewriter
              .typeString("[KimDog-Studios] Mega Mod Pack")
              .pauseFor(2000)
              .deleteAll()
              .typeString("Last updated: 16.6.24")
              .pauseFor(2000)
              .deleteAll()
              .start();
          }}
        />
      </Typography>
    </Box>
  );
};

// Redirect backdrop
interface RedirectBackdropProps {
  open: boolean;
  countdown: number;
  url: string;
  onClose: () => void;
  onManualRedirect: () => void;
}

const RedirectBackdrop: React.FC<RedirectBackdropProps> = ({
  open,
  countdown,
  onClose,
  onManualRedirect,
}) => {
  return (
    <Dialog
      open={open}
      onClose={onClose}
      PaperProps={{
        style: {
          backgroundColor: "rgba(0, 0, 0, 0.8)",
          boxShadow: "none",
        },
      }}
    >
      <DialogContent className={styles.dialogContent}>
        <CircularProgress color="inherit" />
        <Typography variant="h6" className={styles.typographyHeading}>
          Redirecting in {countdown} seconds...
        </Typography>
        <Typography variant="body1" className={styles.typographyBody}>
          If not redirected automatically,{" "}
          <Button onClick={onManualRedirect} className={styles.button}>
            click here
          </Button>
          .
        </Typography>
      </DialogContent>
    </Dialog>
  );
};

//Loading Screen
interface LoadingScreenProps {
  open: boolean;
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({ open }) => {
  return (
    <Backdrop
      sx={{
        color: "#fff",
        zIndex: (theme: { zIndex: { drawer: number } }) =>
          theme.zIndex.drawer + 1,
      }}
      open={open}
    >
      <Box
        sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
      >
        {/* Gradient Spinner */}
        <div className="gradient-spinner"></div>
        <Typography variant="h6" sx={{ mt: 2 }}>
          Loading...
        </Typography>
      </Box>
    </Backdrop>
  );
};

export {
  TypingEffectATSModPack,
  TypingEffectETS2KimDogNetwork,
  TypingEffectHomePage,
  Mods,
  RedirectBackdrop,
  LoadingScreen,
};
