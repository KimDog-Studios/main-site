// app/components/TypingEffect.tsx
import React from 'react';
import Typewriter from 'typewriter-effect';
import { Box, Typography } from '@mui/material';

const TypingEffect: React.FC = () => {
  return (
    <Box sx={{ textAlign: 'center', mt: 8 }}>
      <Typography variant="h2" component="h1" gutterBottom>
        <Typewriter
          options={{
            loop: true,  // Enables infinite looping
            delay: 100,  // Adjust typing speed here
          }}
          onInit={(typewriter) => {
            typewriter
              .typeString("Welcome to KimDog's Modding Site!")
              .pauseFor(2000)
              .deleteAll()
              .typeString('Explore our mod packs and more!')
              .pauseFor(2000)
              .deleteAll()
              .typeString('We aim to keep all of our mod Packs upto date when the Game Gets a Major Update!')
              .pauseFor(2000)
              .deleteAll()
              .typeString('Report all Bugs/Errors into the Discord Server!')
              .pauseFor(2000)
              .deleteAll()
              .start();
          }}
        />
      </Typography>
    </Box>
  );
};

export default TypingEffect;
