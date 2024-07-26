// pages/signin.tsx

import React from 'react';
import { Container, Typography, TextField, Button, Box, Paper, useTheme } from '@mui/material';
import { useRouter } from 'next/router';

const SignIn: React.FC = () => {
  const [email, setEmail] = React.useState<string>('');
  const [password, setPassword] = React.useState<string>('');
  const theme = useTheme();
  const router = useRouter();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log('Email:', email);
    console.log('Password:', password);
    // Replace with actual sign-in logic
    router.push('/'); // Redirect to home page after sign-in
  };

  return (
    <Container component="main" maxWidth="xs">
      <Paper elevation={3} sx={{ padding: theme.spacing(4), display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Typography component="h1" variant="h5">Sign In</Typography>
        <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
          <TextField
            label="Email Address"
            type="email"
            variant="outlined"
            margin="normal"
            fullWidth
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            label="Password"
            type="password"
            variant="outlined"
            margin="normal"
            fullWidth
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button type="submit" variant="contained" color="primary" fullWidth sx={{ mt: 2 }}>Sign In</Button>
        </Box>
      </Paper>
    </Container>
  );
};

export default SignIn;
