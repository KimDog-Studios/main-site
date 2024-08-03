'use client';
import Typewriter from 'typewriter-effect';
import React, { useState, useEffect, useRef } from 'react';
import { Container, Box, Typography, Dialog, Button, CircularProgress, DialogContent, Backdrop, CardContent, CardMedia, Avatar, Drawer, IconButton, List, ListItem, ListItemText, Menu, MenuItem, Tooltip } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../css/Main.module.css'; // Import the CSS module

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
  
                {/* ATS Mod Mod Pack */}
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

// TypingEffectATSModPack Component
const TypingEffectATSModPack: React.FC = () => {
  return (
    <Box sx={{ textAlign: 'center', mt: 8 }}>
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

// TypingEffectETS2KimDogNetwork Component
const TypingEffectETS2KimDogNetwork: React.FC = () => {
  return (
    <Box sx={{ textAlign: 'center', mt: 8 }}>
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
              .typeString("Not MP Optional")
              .pauseFor(2000)
              .deleteAll()
              .start();
          }}
        />
      </Typography>
    </Box>
  );
};

// TypingEffectMinecraftKimDogsResourcePack Component
const TypingEffectMinecraftKimDogsResourcePack: React.FC = () => {
  return (
    <Box sx={{ textAlign: 'center', mt: 8 }}>
      <Typography variant="h2" component="h1" gutterBottom>
        <Typewriter
          options={{
            loop: true, // Enables infinite looping
            delay: 100, // Adjust typing speed here
          }}
          onInit={(typewriter) => {
            typewriter
              .typeString("KimDog's Resource Pack")
              .pauseFor(2000)
              .deleteAll()
              .typeString("Last updated: 17.7.24")
              .pauseFor(2000)
              .deleteAll()
              .typeString("Supports Minecraft Java 1.20.6")
              .pauseFor(2000)
              .deleteAll()
              .start();
          }}
        />
      </Typography>
    </Box>
  );
};

// TypingEffectKimDoglogisticsETS2 Component
const TypingEffectKimDoglogisticsETS2: React.FC = () => {
  return (
    <Box sx={{ textAlign: 'center', mt: 8 }}>
      <Typography variant="h2" component="h1" gutterBottom>
        <Typewriter
          options={{
            loop: true, // Enables infinite looping
            delay: 100, // Adjust typing speed here
          }}
          onInit={(typewriter) => {
            typewriter
              .typeString("KimDog Logistics [ETS 2]")
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

// TypingEffectATSAndETSTools Component
const TypingEffectATSAndETSTools: React.FC = () => {
  return (
    <Box sx={{ textAlign: 'center', mt: 8 }}>
      <Typography variant="h2" component="h1" gutterBottom>
        <Typewriter
          options={{
            loop: true, // Enables infinite looping
            delay: 100, // Adjust typing speed here
          }}
          onInit={(typewriter) => {
            typewriter
              .typeString("KimDog's ATS and ETS 2 Tools and Software Pack")
              .pauseFor(2000)
              .deleteAll()
              .typeString("Last updated: 27.7.24")
              .pauseFor(2000)
              .deleteAll()
              .start();
          }}
        />
      </Typography>
    </Box>
  );
};

// TypingEffectATSAndETSTemplates Component
const TypingEffectATSAndETSTemplates: React.FC = () => {
  return (
    <Box sx={{ textAlign: 'center', mt: 8 }}>
      <Typography variant="h2" component="h1" gutterBottom>
        <Typewriter
          options={{
            loop: true, // Enables infinite looping
            delay: 100, // Adjust typing speed here
          }}
          onInit={(typewriter) => {
            typewriter
              .typeString("KimDog's ATS and ETS 2 Templates Pack")
              .pauseFor(2000)
              .deleteAll()
              .typeString("Last updated: 28.7.24")
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
  
  const RedirectBackdrop: React.FC<RedirectBackdropProps> = ({ open, countdown, onClose, onManualRedirect }) => {
    return (
      <Dialog
        open={open}
        onClose={onClose}
        PaperProps={{
          style: {
            backgroundColor: 'rgba(0, 0, 0, 0.8)',
            boxShadow: 'none',
          },
        }}
      >
        <DialogContent className={styles.dialogContent}>
          <CircularProgress color="inherit" />
          <Typography variant="h6" className={styles.typographyHeading}>
            Redirecting in {countdown} seconds...
          </Typography>
          <Typography variant="body1" className={styles.typographyBody}>
            If not redirected automatically,{' '}
            <Button onClick={onManualRedirect} className={styles.button}>
              click here
            </Button>.
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
        sx={{ color: '#fff', zIndex: (theme: { zIndex: { drawer: number; }; }) => theme.zIndex.drawer + 1 }}
        open={open}
      >
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          {/* Gradient Spinner */}
          <div className="gradient-spinner"></div>
          <Typography variant="h6" sx={{ mt: 2 }}>
            Loading...
          </Typography>
        </Box>
      </Backdrop>
    );
  };


// Discord Cards[Recommened Servers]
// Define the server data directly in the component file
const servers = [
  {
    name: "Left Lane Custom Chrome",
    description: "",
    inviteLink: "https://discord.gg/leftlane",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRd-dqoMiCVz1hDF9soA3oJg0FlAPJdnB7Nhw&s"
  },
  {
    name: "Gallop Express",
    description: "",
    inviteLink: "https://discord.gg/5A6MUm3X",
    imageUrl: "https://steamuserimages-a.akamaihd.net/ugc/2277199140215822736/912C20F465C0E16D7065ED39F020BFDA750A36A7/?imw=5000&imh=5000&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false"
  },
];

// Server Card Component
const DiscordServerCard: React.FC<{
  name: string;
  description: string;
  inviteLink: string;
  imageUrl: string;
}> = ({ name, description, inviteLink, imageUrl }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        mb: 4,
        boxShadow: 3,
        borderRadius: 2,
        overflow: 'hidden',
        width: '100%',
        maxWidth: 600, // Set a max-width to control card size
        mx: 'auto', // Center horizontally
      }}
    >
      {imageUrl && (
        <CardMedia
          component="img"
          sx={{ width: 140 }}
          image={imageUrl}
          alt="Server Image"
        />
      )}
      <CardContent sx={{ flex: 1 }}>
        <Typography variant="h5" component="div">
          {name}
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
          {description}
        </Typography>
        <Button
          variant="contained"
          color="primary"
          href={inviteLink}
          target="_blank"
          sx={{ mt: 2 }}
        >
          Join the Server
        </Button>
      </CardContent>
    </Box>
  );
};

// Server List Component
const DiscordServerList: React.FC<{ servers: typeof servers, marginTop: string }> = ({ servers, marginTop }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: marginTop, // Adjustable vertical position
        p: 2,
      }}
    >
      <Typography variant="h4" component="h2" gutterBottom>
        KimDog's Recommended ATS and ETS 2 Servers!
      </Typography>
      {servers.map((server, index) => (
        <DiscordServerCard
          key={index}
          name={server.name}
          description={server.description}
          inviteLink={server.inviteLink}
          imageUrl={server.imageUrl}
        />
      ))}
    </Box>
  );
};

// Main Page Component
const DiscordPage: React.FC = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        position: 'relative', // Allows control over vertical positioning
        minHeight: '100vh', // Ensure the container takes up full viewport height
        p: 2,
      }}
    >
      <DiscordServerList servers={servers} marginTop="-700px" /> {/* Adjust the marginTop value here */}
    </Box>
  );
};

export { TypingEffectATSModPack, TypingEffectETS2KimDogNetwork, Mods, RedirectBackdrop, LoadingScreen, DiscordPage, TypingEffectMinecraftKimDogsResourcePack, TypingEffectKimDoglogisticsETS2, TypingEffectATSAndETSTools, TypingEffectATSAndETSTemplates};