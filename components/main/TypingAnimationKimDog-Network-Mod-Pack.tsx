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

export default TypingEffect;
