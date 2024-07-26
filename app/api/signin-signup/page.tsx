"use client"; // Add this to mark the file as a Client Component

import React, { useState } from 'react';
import { Container, Typography, TextField, Button, Box, Grid, Paper } from '@mui/material';
import Navbar from '../../../components/NavBar'; // Ensure the path is correct

const SignInSignUpPage: React.FC = () => {
  const [isSignUp, setIsSignUp] = useState(false); // Toggle between Sign In and Sign Up

  const handleToggle = () => {
    setIsSignUp(!isSignUp);
  };

  const handleSignInWithProvider = (provider: string) => {
    console.log(`Sign in with ${provider}`);
    // Implement your sign-in logic here
  };

  return (
    <div>
      <Navbar />
      <Container component="main" maxWidth="xs" sx={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <Paper elevation={3} sx={{ padding: 4, width: '100%', maxWidth: '400px' }}>
          <Typography variant="h5" align="center" gutterBottom>
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
              sx={{ mt: 3, mb: 2 }}
            >
              {isSignUp ? 'Sign Up' : 'Sign In'}
            </Button>
            <Grid container>
              <Grid item xs>
                <Button onClick={handleToggle} color="primary">
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
                  onClick={() => handleSignInWithProvider('Google')}
                  sx={{
                    borderColor: '#db4437',
                    color: '#db4437',
                    '&:hover': { borderColor: '#b1361f', color: '#b1361f' },
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                >
                  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/150px-Google_%22G%22_logo.svg.png" alt="Google" style={{ width: 24, height: 24, marginRight: 8 }} />
                  Google
                </Button>

                {/* Facebook Sign-In Button */}
                <Button
                  variant="outlined"
                  fullWidth
                  onClick={() => handleSignInWithProvider('Facebook')}
                  sx={{
                    borderColor: '#3b5998',
                    color: '#3b5998',
                    '&:hover': { borderColor: '#2d4373', color: '#2d4373' },
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                >
                  <img src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg" alt="Facebook" style={{ width: 24, height: 24, marginRight: 8 }} />
                  Facebook
                </Button>

                {/* Steam Sign-In Button */}
                <Button
                  variant="outlined"
                  fullWidth
                  onClick={() => handleSignInWithProvider('Steam')}
                  sx={{
                    borderColor: '#000000',
                    color: '#000000',
                    '&:hover': { borderColor: '#333333', color: '#333333' },
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                >
                  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Steam_icon_logo.svg/120px-Steam_icon_logo.svg.png" alt="Steam" style={{ width: 24, height: 24, marginRight: 8 }} />
                  Steam
                </Button>

                {/* Microsoft Sign-In Button */}
                <Button
                  variant="outlined"
                  fullWidth
                  onClick={() => handleSignInWithProvider('Microsoft')}
                  sx={{
                    borderColor: '#0078d4',
                    color: '#0078d4',
                    '&:hover': { borderColor: '#005a9e', color: '#005a9e' },
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                >
                  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/120px-Microsoft_logo.svg.png?20210729021049" alt="Microsoft" style={{ width: 24, height: 24, marginRight: 8 }} />
                  Microsoft
                </Button>

                {/* GitHub Sign-In Button */}
                <Button
                  variant="outlined"
                  fullWidth
                  onClick={() => handleSignInWithProvider('GitHub')}
                  sx={{
                    borderColor: '#333333',
                    color: '#333333',
                    '&:hover': { borderColor: '#000000', color: '#000000' },
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                >
                  <img src="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg" alt="GitHub" style={{ width: 24, height: 24, marginRight: 8 }} />
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
