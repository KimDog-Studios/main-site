"use client"; // Add this to mark the file as a Client Component

import React, { useState } from 'react';
import { Container, Typography, TextField, Button, Box, Grid, Paper } from '@mui/material';
import Navbar from '@/components/[UI]NavBar'; // Ensure the path is correct
import { signIn } from 'next-auth/react'; // Import next-auth signIn
import styles from '@/css/Main.module.css'; // Import the CSS module

const SignInSignUpPage: React.FC = () => {
  const [isSignUp, setIsSignUp] = useState(false); // Toggle between Sign In and Sign Up

  const handleToggle = () => {
    setIsSignUp(!isSignUp);
  };

  const handleSignInWithProvider = (provider: string) => {
    signIn(provider); // Initiates sign-in with the specified provider
  };

  return (
    <div>
      <Navbar />
      <Container component="main" className={styles.container}>
        <Paper elevation={3} className={styles.paper}>
          <Typography variant="h5" className={styles.typographyTitle}>
            {isSignUp ? 'Sign Up' : 'Sign In'}
          </Typography>
          <Box component="form" noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            {isSignUp && (
              <TextField
                margin="normal"
                required
                fullWidth
                name="confirmPassword"
                label="Confirm Password"
                type="password"
                id="confirm-password"
                autoComplete="new-password"
              />
            )}
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={styles.authButton}
            >
              {isSignUp ? 'Sign Up' : 'Sign In'}
            </Button>
            <Grid container>
              <Grid item xs>
                <Button onClick={handleToggle} className={styles.authToggleButton}>
                  {isSignUp ? 'Already have an account? Sign In' : 'Don’t have an account? Sign Up'}
                </Button>
              </Grid>
            </Grid>
            <Box sx={{ mt: 3, textAlign: 'center' }}>
              <Typography variant="body2" color="textSecondary">
                or sign in with
              </Typography>
              <Box sx={{ mt: 2, display: 'flex', flexDirection: 'column', gap: 2 }}>
                {/* Google Sign-In Button */}
                <Button
                  variant="outlined"
                  fullWidth
                  onClick={() => handleSignInWithProvider('google')}
                  className={`${styles.authButton} ${styles.authButtonGoogle}`}
                >
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/150px-Google_%22G%22_logo.svg.png"
                    alt="Google"
                    className={styles.authButtonIcon}
                  />
                  Google
                </Button>

                {/* Facebook Sign-In Button */}
                <Button
                  variant="outlined"
                  fullWidth
                  onClick={() => handleSignInWithProvider('facebook')}
                  className={`${styles.authButton} ${styles.authButtonFacebook}`}
                >
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg"
                    alt="Facebook"
                    className={styles.authButtonIcon}
                  />
                  Facebook
                </Button>

                {/* Steam Sign-In Button */}
                <Button
                  variant="outlined"
                  fullWidth
                  onClick={() => handleSignInWithProvider('steam')}
                  className={`${styles.authButton} ${styles.authButtonSteam}`}
                >
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Steam_icon_logo.svg/120px-Steam_icon_logo.svg.png"
                    alt="Steam"
                    className={styles.authButtonIcon}
                  />
                  Steam
                </Button>

                {/* Microsoft Sign-In Button */}
                <Button
                  variant="outlined"
                  fullWidth
                  onClick={() => handleSignInWithProvider('microsoft')}
                  className={`${styles.authButton} ${styles.authButtonMicrosoft}`}
                >
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/120px-Microsoft_logo.svg.png?20210729021049"
                    alt="Microsoft"
                    className={styles.authButtonIcon}
                  />
                  Microsoft
                </Button>

                {/* GitHub Sign-In Button */}
                <Button
                  variant="outlined"
                  fullWidth
                  onClick={() => handleSignInWithProvider('github')}
                  className={`${styles.authButton} ${styles.authButtonGithub}`}
                >
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg"
                    alt="GitHub"
                    className={styles.authButtonIcon}
                  />
                  GitHub
                </Button>
              </Box>
            </Box>
          </Box>
        </Paper>
      </Container>
    </div>
  );
};

export default SignInSignUpPage;
